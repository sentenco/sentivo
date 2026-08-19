-- Repairs a profiles table that already existed (from something else in
-- this project) before sql/community_add_companies.sql ran -- that meant
-- "create table if not exists profiles (...)" was a no-op and company_id
-- never got added, which in turn meant every policy referencing
-- profiles.company_id in a subquery failed to create. This script is fully
-- idempotent (safe to run even if some pieces already succeeded) and
-- supersedes sql/community_fix_profiles_rls.sql -- run this one instead.

alter table profiles add column if not exists company_id uuid references companies(id) on delete set null;

drop policy if exists "profiles_select_own" on profiles;
create policy "profiles_select_own" on profiles for select
  using (id = auth.uid());

drop policy if exists "profiles_insert_own" on profiles;
create policy "profiles_insert_own" on profiles for insert
  with check (id = auth.uid());

drop policy if exists "profiles_update_own" on profiles;
create policy "profiles_update_own" on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

grant select, insert, update on public.profiles to authenticated;

-- Make sure every existing account has a profile row.
insert into profiles (id, company_id)
select id, null from auth.users
on conflict (id) do nothing;

-- Re-create the company-scoping policies that reference profiles.company_id
-- -- these are the ones most likely to have failed originally.
drop policy if exists "community_posts_select" on community_posts;
create policy "community_posts_select" on community_posts for select
  using (
    (
      status = 'approved'
      and (
        company_id is null
        or company_id = (select company_id from profiles where id = auth.uid())
      )
    )
    or author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

drop policy if exists "community_posts_insert" on community_posts;
create policy "community_posts_insert" on community_posts for insert
  with check (
    (
      author_id = auth.uid()
      and (
        company_id is null
        or company_id = (select company_id from profiles where id = auth.uid())
      )
    )
    or (author_id is null and post_type = 'prompt')
  );

drop policy if exists "community_comments_select" on community_comments;
create policy "community_comments_select" on community_comments for select
  using (
    (
      status = 'approved'
      and exists (
        select 1 from community_posts p
        where p.id = community_comments.post_id
          and (
            p.company_id is null
            or p.company_id = (select company_id from profiles where id = auth.uid())
          )
      )
    )
    or author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

drop policy if exists "community_likes_select" on community_likes;
create policy "community_likes_select" on community_likes for select
  using (
    exists (
      select 1 from community_posts p
      where p.id = community_likes.post_id
        and (
          p.company_id is null
          or p.company_id = (select company_id from profiles where id = auth.uid())
        )
    )
  );

-- Complete, idempotent setup for company-scoped communities and teacher
-- profiles. Safe to run no matter what has or hasn't already been applied
-- -- every statement uses IF NOT EXISTS / DROP POLICY IF EXISTS, so
-- nothing errors out or duplicates. This ONE script replaces and
-- supersedes: sql/community_add_companies.sql, community_add_profile_fields.sql,
-- community_add_author_badge.sql, community_fix_profiles_rls.sql, and
-- community_fix_missing_company_id.sql -- run this instead of any of those.

-- 1. Companies
create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);
alter table companies enable row level security;
drop policy if exists "companies_select_all" on companies;
create policy "companies_select_all" on companies for select
  using (true);

-- 2. Profiles -- the table may already exist from something else in this
-- project, so every column is added individually rather than assumed to
-- come from CREATE TABLE.
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table profiles add column if not exists company_id uuid references companies(id) on delete set null;
alter table profiles add column if not exists display_name text;
alter table profiles add column if not exists avatar_url text;
alter table profiles add column if not exists country text;
alter table profiles add column if not exists years_teaching integer;

alter table profiles enable row level security;
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

insert into profiles (id, company_id)
select id, null from auth.users
on conflict (id) do nothing;

-- 3. Auto-create a profile (with the company chosen at signup, if any) the
-- moment an account is created.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, company_id)
  values (new.id, nullif(new.raw_user_meta_data->>'company_id', '')::uuid)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer set search_path = public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. community_posts: company scoping + the author's years-teaching badge
alter table community_posts add column if not exists company_id uuid references companies(id) on delete set null;
create index if not exists community_posts_company_idx on community_posts (company_id, created_at desc);
alter table community_posts add column if not exists author_years_teaching integer;

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

-- 5. Comments and likes inherit their parent post's scope.
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

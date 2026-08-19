-- Company-scoped communities: a "Universal" community every teacher can see,
-- plus a private community per partner company (chosen at signup). Run once
-- in the Supabase SQL editor, after sql/community_add_daily_prompt_post.sql.

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

alter table companies enable row level security;

create policy "companies_select_all" on companies for select
  using (true);

-- One profile row per teacher account, remembering which company (if any)
-- they picked at signup.
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  company_id uuid references companies(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "profiles_select_own" on profiles for select
  using (id = auth.uid());

create policy "profiles_insert_own" on profiles for insert
  with check (id = auth.uid());

create policy "profiles_update_own" on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- Backfill a profile row for any account that existed before this migration.
insert into profiles (id, company_id)
select id, null from auth.users
on conflict (id) do nothing;

-- Auto-create a profile (with the company chosen at signup, if any) the
-- moment an account is created. Runs on auth.users insert, not on first
-- login, so it works whether or not email confirmation is required.
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

-- Scope a post to a company; null = Universal, visible to everyone.
alter table community_posts add column if not exists company_id uuid references companies(id) on delete set null;
create index if not exists community_posts_company_idx on community_posts (company_id, created_at desc);

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

-- Comments and likes inherit their parent post's scope.
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

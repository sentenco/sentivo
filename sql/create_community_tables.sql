-- Community feature: posts + comments, both moderated (pending -> approved/rejected).
-- Run this once in the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references auth.users(id) on delete cascade not null,
  author_email text not null,
  content text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists community_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references community_posts(id) on delete cascade not null,
  author_id uuid references auth.users(id) on delete cascade not null,
  author_email text not null,
  content text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create index if not exists community_posts_status_idx on community_posts (status, created_at desc);
create index if not exists community_comments_post_idx on community_comments (post_id, created_at asc);

alter table community_posts enable row level security;
alter table community_comments enable row level security;

-- Single hardcoded moderator account for now (matches SiteGate's ALLOWED_EMAIL).
-- Update in both places if the admin account ever changes.

create policy "community_posts_select" on community_posts for select
  using (
    status = 'approved'
    or author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

create policy "community_posts_insert" on community_posts for insert
  with check (
    author_id = auth.uid()
    and (status = 'pending' or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com')
  );

create policy "community_posts_update" on community_posts for update
  using (auth.jwt() ->> 'email' = 'caldrin1999@gmail.com')
  with check (auth.jwt() ->> 'email' = 'caldrin1999@gmail.com');

create policy "community_posts_delete" on community_posts for delete
  using (
    author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

create policy "community_comments_select" on community_comments for select
  using (
    status = 'approved'
    or author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

create policy "community_comments_insert" on community_comments for insert
  with check (
    author_id = auth.uid()
    and (status = 'pending' or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com')
  );

create policy "community_comments_update" on community_comments for update
  using (auth.jwt() ->> 'email' = 'caldrin1999@gmail.com')
  with check (auth.jwt() ->> 'email' = 'caldrin1999@gmail.com');

create policy "community_comments_delete" on community_comments for delete
  using (
    author_id = auth.uid()
    or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
  );

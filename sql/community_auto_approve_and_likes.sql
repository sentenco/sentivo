-- Remove manual moderation (posts/comments go live immediately) and add
-- a likes table for the Community feature. Run once in the Supabase SQL
-- editor, after sql/create_community_tables.sql.

alter table community_posts alter column status set default 'approved';
alter table community_comments alter column status set default 'approved';

drop policy if exists "community_posts_insert" on community_posts;
create policy "community_posts_insert" on community_posts for insert
  with check (author_id = auth.uid());

drop policy if exists "community_comments_insert" on community_comments;
create policy "community_comments_insert" on community_comments for insert
  with check (author_id = auth.uid());

create table if not exists community_likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references community_posts(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  created_at timestamptz not null default now(),
  unique (post_id, user_id)
);
create index if not exists community_likes_post_idx on community_likes (post_id);

alter table community_likes enable row level security;

create policy "community_likes_select" on community_likes for select
  using (true);

create policy "community_likes_insert" on community_likes for insert
  with check (user_id = auth.uid());

create policy "community_likes_delete" on community_likes for delete
  using (user_id = auth.uid());

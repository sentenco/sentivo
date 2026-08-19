-- Notifications for Community comment activity: "X replied to your post" /
-- "X replied to your comment". Run this once in the Supabase SQL editor.

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid references auth.users(id) on delete cascade not null,
  actor_id uuid references auth.users(id) on delete set null,
  actor_name text,
  type text not null check (type in ('post_reply', 'comment_reply')),
  post_id uuid references community_posts(id) on delete cascade,
  comment_id uuid references community_comments(id) on delete cascade,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists notifications_recipient_idx on notifications (recipient_id, created_at desc);

alter table notifications enable row level security;

drop policy if exists "notifications_select" on notifications;
create policy "notifications_select" on notifications for select
  using (recipient_id = auth.uid());

drop policy if exists "notifications_insert" on notifications;
create policy "notifications_insert" on notifications for insert
  with check (actor_id = auth.uid());

drop policy if exists "notifications_update" on notifications;
create policy "notifications_update" on notifications for update
  using (recipient_id = auth.uid())
  with check (recipient_id = auth.uid());

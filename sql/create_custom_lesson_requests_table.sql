-- Custom Lessons: lets a teacher see their own submitted requests on the
-- Custom Lessons page, not just get a one-time clipboard copy.
-- Run this once in the Supabase SQL editor.

create table if not exists custom_lesson_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_name text,
  level text,
  age_track text,
  language text not null,
  duration integer,
  topic text not null,
  notes text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create index if not exists custom_lesson_requests_user_id_idx on custom_lesson_requests(user_id);

alter table custom_lesson_requests enable row level security;

create policy "Users can view their own custom lesson requests"
  on custom_lesson_requests for select
  using (auth.uid() = user_id);

create policy "Users can insert their own custom lesson requests"
  on custom_lesson_requests for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own custom lesson requests"
  on custom_lesson_requests for update
  using (auth.uid() = user_id);

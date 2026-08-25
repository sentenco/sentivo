-- Syllabus Generator: per-teacher saved syllabi.
-- Run this once in the Supabase SQL editor to create the table + RLS.
-- Mirrors sql/create_slide_decks_table.sql's shape/RLS pattern.

create table if not exists syllabi (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled syllabus',
  level text,
  age_track text,
  sessions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists syllabi_user_id_idx on syllabi(user_id);

alter table syllabi enable row level security;

create policy "Users can view their own syllabi"
  on syllabi for select
  using (auth.uid() = user_id);

create policy "Users can insert their own syllabi"
  on syllabi for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own syllabi"
  on syllabi for update
  using (auth.uid() = user_id);

create policy "Users can delete their own syllabi"
  on syllabi for delete
  using (auth.uid() = user_id);

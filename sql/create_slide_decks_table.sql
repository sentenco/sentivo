-- Slide Deck Builder: per-teacher saved decks.
-- Run this once in the Supabase SQL editor to create the table + RLS.

create table if not exists slide_decks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled deck',
  slides jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists slide_decks_user_id_idx on slide_decks(user_id);

alter table slide_decks enable row level security;

create policy "Users can view their own decks"
  on slide_decks for select
  using (auth.uid() = user_id);

create policy "Users can insert their own decks"
  on slide_decks for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own decks"
  on slide_decks for update
  using (auth.uid() = user_id);

create policy "Users can delete their own decks"
  on slide_decks for delete
  using (auth.uid() = user_id);

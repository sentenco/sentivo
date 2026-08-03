-- Dictionary widget: cached word lookups so we only pay for a Claude API
-- call the first time any word is ever looked up across all users. Every
-- lookup after that is a free read from this table.
-- Run this once in the Supabase SQL editor.

create table if not exists word_definitions (
  word text primary key,
  meanings jsonb not null,
  created_at timestamptz not null default now()
);

alter table word_definitions enable row level security;

-- Anyone can read cached definitions (public, non-sensitive content).
create policy "Public can view word definitions"
  on word_definitions for select
  using (true);

-- Anyone can add a new cached definition (the lookup endpoint runs as the
-- anon key; there's nothing sensitive in a dictionary entry, and rows are
-- keyed by word so a duplicate insert is just a no-op via upsert).
create policy "Public can insert word definitions"
  on word_definitions for insert
  with check (true);

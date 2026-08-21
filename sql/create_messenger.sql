-- Teacher-to-teacher direct messaging. Run once in the Supabase SQL editor.
-- 1:1 conversations only (no group chats). user_a_id is always the smaller
-- uuid of the two participants so a conversation between two people is
-- unique and easy to look up regardless of who started it.

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  user_a_id uuid references auth.users(id) on delete cascade not null,
  user_b_id uuid references auth.users(id) on delete cascade not null,
  last_message_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (user_a_id, user_b_id)
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade not null,
  sender_id uuid references auth.users(id) on delete cascade not null,
  content text not null,
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create index if not exists conversations_participant_idx on conversations (user_a_id, user_b_id);
create index if not exists messages_conversation_idx on messages (conversation_id, created_at asc);

alter table conversations enable row level security;
alter table messages enable row level security;

drop policy if exists "conversations_select" on conversations;
create policy "conversations_select" on conversations for select
  using (auth.uid() = user_a_id or auth.uid() = user_b_id);

drop policy if exists "conversations_insert" on conversations;
create policy "conversations_insert" on conversations for insert
  with check (auth.uid() = user_a_id or auth.uid() = user_b_id);

drop policy if exists "conversations_update" on conversations;
create policy "conversations_update" on conversations for update
  using (auth.uid() = user_a_id or auth.uid() = user_b_id);

drop policy if exists "messages_select" on messages;
create policy "messages_select" on messages for select
  using (
    exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (c.user_a_id = auth.uid() or c.user_b_id = auth.uid())
    )
  );

drop policy if exists "messages_insert" on messages;
create policy "messages_insert" on messages for insert
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (c.user_a_id = auth.uid() or c.user_b_id = auth.uid())
    )
  );

drop policy if exists "messages_update" on messages;
create policy "messages_update" on messages for update
  using (
    exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (c.user_a_id = auth.uid() or c.user_b_id = auth.uid())
    )
  );

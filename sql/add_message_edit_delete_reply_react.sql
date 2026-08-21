-- Adds edit, delete, reply, and reactions to Convo messages. Run once in
-- the Supabase SQL editor.

alter table messages add column if not exists edited_at timestamptz;
alter table messages add column if not exists deleted_at timestamptz;
alter table messages add column if not exists reply_to_id uuid references messages(id) on delete set null;

-- Edit and delete go through these functions instead of a direct table
-- UPDATE. The existing "messages_update" policy is scoped to either
-- participant (it has to be, so the recipient can mark read_at) which means
-- it can't also be trusted to gate content edits to the sender only. These
-- functions run as the table owner but enforce sender_id = auth.uid()
-- themselves, so only the person who sent a message can edit or delete it.
create or replace function edit_message(p_message_id uuid, p_content text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update messages
  set content = p_content, edited_at = now()
  where id = p_message_id and sender_id = auth.uid() and deleted_at is null;

  if not found then
    raise exception 'Message not found or not editable';
  end if;
end;
$$;

create or replace function delete_message(p_message_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update messages
  set deleted_at = now(), content = ''
  where id = p_message_id and sender_id = auth.uid();

  if not found then
    raise exception 'Message not found or not deletable';
  end if;
end;
$$;

grant execute on function edit_message(uuid, text) to authenticated;
grant execute on function delete_message(uuid) to authenticated;

-- One reaction per person per message (tapback-style: picking a new emoji
-- replaces your old one, picking the same one removes it).
create table if not exists message_reactions (
  id uuid primary key default gen_random_uuid(),
  message_id uuid references messages(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  emoji text not null,
  created_at timestamptz not null default now(),
  unique (message_id, user_id)
);

create index if not exists message_reactions_message_idx on message_reactions (message_id);

alter table message_reactions enable row level security;

drop policy if exists "message_reactions_select" on message_reactions;
create policy "message_reactions_select" on message_reactions for select
  using (
    exists (
      select 1 from messages m
      join conversations c on c.id = m.conversation_id
      where m.id = message_reactions.message_id
        and (c.user_a_id = auth.uid() or c.user_b_id = auth.uid())
    )
  );

drop policy if exists "message_reactions_insert" on message_reactions;
create policy "message_reactions_insert" on message_reactions for insert
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from messages m
      join conversations c on c.id = m.conversation_id
      where m.id = message_reactions.message_id
        and (c.user_a_id = auth.uid() or c.user_b_id = auth.uid())
    )
  );

drop policy if exists "message_reactions_update" on message_reactions;
create policy "message_reactions_update" on message_reactions for update
  using (user_id = auth.uid());

drop policy if exists "message_reactions_delete" on message_reactions;
create policy "message_reactions_delete" on message_reactions for delete
  using (user_id = auth.uid());

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'message_reactions'
  ) then
    alter publication supabase_realtime add table message_reactions;
  end if;
end $$;

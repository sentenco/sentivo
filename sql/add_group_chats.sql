-- Adds group chats to Convo. Existing 1:1 conversations are untouched
-- (still use user_a_id/user_b_id); groups use is_group=true, a title, and
-- the new conversation_participants table for membership. Run once in the
-- Supabase SQL editor.

alter table conversations add column if not exists is_group boolean not null default false;
alter table conversations add column if not exists title text;
alter table conversations add column if not exists created_by uuid references auth.users(id);
alter table conversations alter column user_a_id drop not null;
alter table conversations alter column user_b_id drop not null;

create table if not exists conversation_participants (
  conversation_id uuid references conversations(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  joined_at timestamptz not null default now(),
  primary key (conversation_id, user_id)
);

create index if not exists conversation_participants_user_idx on conversation_participants (user_id);

alter table conversation_participants enable row level security;

-- Checking "am I a member of this conversation" from inside
-- conversation_participants' own select policy would make Postgres
-- re-evaluate that same policy for the check itself, forever ("infinite
-- recursion detected in policy"). Routing it through a SECURITY DEFINER
-- function sidesteps that, since the function's internal query isn't
-- subject to the RLS policy that calls it.
create or replace function is_conversation_participant(p_conversation_id uuid, p_user_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from conversation_participants
    where conversation_id = p_conversation_id and user_id = p_user_id
  );
$$;

grant execute on function is_conversation_participant(uuid, uuid) to authenticated;

drop policy if exists "conversation_participants_select" on conversation_participants;
create policy "conversation_participants_select" on conversation_participants for select
  using (is_conversation_participant(conversation_participants.conversation_id, auth.uid()));

-- v1 keeps group membership fixed at creation time (no add/remove members
-- later), so only the creator can insert participant rows, and only while
-- setting up their own group.
drop policy if exists "conversation_participants_insert" on conversation_participants;
create policy "conversation_participants_insert" on conversation_participants for insert
  with check (
    exists (
      select 1 from conversations c
      where c.id = conversation_participants.conversation_id and c.created_by = auth.uid()
    )
  );

-- conversations: participants of a group (not just 1:1 user_a/user_b) can now see/update it.
drop policy if exists "conversations_select" on conversations;
create policy "conversations_select" on conversations for select
  using (
    auth.uid() = user_a_id or auth.uid() = user_b_id
    or exists (select 1 from conversation_participants cp where cp.conversation_id = conversations.id and cp.user_id = auth.uid())
  );

drop policy if exists "conversations_insert" on conversations;
create policy "conversations_insert" on conversations for insert
  with check (auth.uid() = user_a_id or auth.uid() = user_b_id or auth.uid() = created_by);

drop policy if exists "conversations_update" on conversations;
create policy "conversations_update" on conversations for update
  using (
    auth.uid() = user_a_id or auth.uid() = user_b_id
    or exists (select 1 from conversation_participants cp where cp.conversation_id = conversations.id and cp.user_id = auth.uid())
  );

-- messages: same widening, so group members can read/send/mark-read.
drop policy if exists "messages_select" on messages;
create policy "messages_select" on messages for select
  using (
    exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (
          c.user_a_id = auth.uid() or c.user_b_id = auth.uid()
          or exists (select 1 from conversation_participants cp where cp.conversation_id = c.id and cp.user_id = auth.uid())
        )
    )
  );

drop policy if exists "messages_insert" on messages;
create policy "messages_insert" on messages for insert
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (
          c.user_a_id = auth.uid() or c.user_b_id = auth.uid()
          or exists (select 1 from conversation_participants cp where cp.conversation_id = c.id and cp.user_id = auth.uid())
        )
    )
  );

drop policy if exists "messages_update" on messages;
create policy "messages_update" on messages for update
  using (
    exists (
      select 1 from conversations c
      where c.id = messages.conversation_id
        and (
          c.user_a_id = auth.uid() or c.user_b_id = auth.uid()
          or exists (select 1 from conversation_participants cp where cp.conversation_id = c.id and cp.user_id = auth.uid())
        )
    )
  );

-- message_reactions: same widening.
drop policy if exists "message_reactions_select" on message_reactions;
create policy "message_reactions_select" on message_reactions for select
  using (
    exists (
      select 1 from messages m
      join conversations c on c.id = m.conversation_id
      where m.id = message_reactions.message_id
        and (
          c.user_a_id = auth.uid() or c.user_b_id = auth.uid()
          or exists (select 1 from conversation_participants cp where cp.conversation_id = c.id and cp.user_id = auth.uid())
        )
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
        and (
          c.user_a_id = auth.uid() or c.user_b_id = auth.uid()
          or exists (select 1 from conversation_participants cp where cp.conversation_id = c.id and cp.user_id = auth.uid())
        )
    )
  );

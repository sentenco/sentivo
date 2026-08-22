-- Fixes "infinite recursion detected in policy for relation
-- conversation_participants". The original conversation_participants_select
-- policy (in sql/add_group_chats.sql) checked membership by querying
-- conversation_participants from inside its own policy — that self-query is
-- itself subject to the same RLS policy, so Postgres has to re-evaluate it
-- recursively and gives up. Run once in the Supabase SQL editor, after
-- sql/add_group_chats.sql (and sql/add_group_member_management.sql if
-- you've already run that too).

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

-- Lets Convo groups add and remove members after creation. Run once in the
-- Supabase SQL editor (after sql/add_group_chats.sql).

-- Any current member can add more people (not creator-only anymore).
drop policy if exists "conversation_participants_insert" on conversation_participants;
create policy "conversation_participants_insert" on conversation_participants for insert
  with check (
    exists (
      select 1 from conversation_participants cp
      where cp.conversation_id = conversation_participants.conversation_id
        and cp.user_id = auth.uid()
    )
    or exists (
      select 1 from conversations c
      where c.id = conversation_participants.conversation_id and c.created_by = auth.uid()
    )
  );

-- Anyone can remove themselves (leave); only the group's creator can remove someone else.
drop policy if exists "conversation_participants_delete" on conversation_participants;
create policy "conversation_participants_delete" on conversation_participants for delete
  using (
    user_id = auth.uid()
    or exists (
      select 1 from conversations c
      where c.id = conversation_participants.conversation_id and c.created_by = auth.uid()
    )
  );

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'conversation_participants'
  ) then
    alter publication supabase_realtime add table conversation_participants;
  end if;
end $$;

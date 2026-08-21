-- Adds a message-preview column so Convo's conversation list can show a
-- snippet of the last message, not just a timestamp. Safe to run more than
-- once in the Supabase SQL editor.

alter table conversations add column if not exists last_message text;

-- Backfill: conversations that already had messages before this column
-- existed are still null, since the app only sets last_message going
-- forward when a new message is sent. Without this, every existing thread
-- shows the "Start the conversation" placeholder no matter how much
-- history it has. Pulls each conversation's most recent message content.
update conversations c
set last_message = m.content
from (
  select distinct on (conversation_id) conversation_id, content
  from messages
  order by conversation_id, created_at desc
) m
where m.conversation_id = c.id
  and c.last_message is null;

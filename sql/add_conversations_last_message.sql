-- Adds a message-preview column so Convo's conversation list can show a
-- snippet of the last message, not just a timestamp. Run once in the
-- Supabase SQL editor. Safe on existing data: older conversations just show
-- no preview until their next message.

alter table conversations add column if not exists last_message text;

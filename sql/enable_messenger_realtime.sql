-- Turns on live delivery for Small Talk (teacher messaging). Run once in the
-- Supabase SQL editor. Without this, new messages only show up on the next
-- poll instead of instantly.

alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table conversations;

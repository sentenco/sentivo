-- Delete all A1 content (Kids + Teens + Adults, 183 lessons) from Supabase.
-- This clears the way for a clean re-insert of the tiered A1 curriculum,
-- reusing the same unit/lesson topics and titles already live -- only the
-- underlying content changes.
--
-- Run this whole script in the Supabase SQL editor. Wrapped in a
-- transaction: if anything fails, nothing is deleted.
--
-- Scope: level = 'A1' only. A2 and the C1 fragment are untouched.

begin;

delete from lesson_slides
where lesson_id in (select id from lessons where level = 'A1');

delete from lessons
where level = 'A1';

commit;

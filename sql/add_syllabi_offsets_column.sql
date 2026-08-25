-- Adds the `offsets` column the Syllabus Generator needs to make
-- follow-up syllabi continue from where the previous one left off,
-- instead of restarting every content list from the beginning.
-- Safe to run even if you haven't run create_syllabi_table.sql recently --
-- uses IF NOT EXISTS so it won't error on a fresh or existing table.

alter table syllabi add column if not exists offsets jsonb not null default '{}'::jsonb;

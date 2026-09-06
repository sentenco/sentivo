-- Syllabus Generator v2: personalized-syllabus fields + cycle chaining.
-- Run this once in the Supabase SQL editor.
-- student_name/student_notes already exist (add_syllabi_student_fields.sql)
-- but were never wired to any UI -- this migration finally puts them to use
-- alongside the new profile fields that drive generation.

alter table syllabi
  add column if not exists student_goal text,
  add column if not exists student_goal_other text,
  add column if not exists weak_skill text,
  add column if not exists interests text,
  add column if not exists cycle_number integer not null default 1,
  add column if not exists previous_syllabus_id uuid references syllabi(id) on delete set null;

create index if not exists syllabi_previous_syllabus_id_idx on syllabi(previous_syllabus_id);

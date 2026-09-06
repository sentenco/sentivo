-- Syllabus Generator: extended student profile fields.
-- Run this once in the Supabase SQL editor.

alter table syllabi
  add column if not exists student_age integer,
  add column if not exists native_language text,
  add column if not exists student_need text,
  add column if not exists student_need_other text,
  add column if not exists exam_name text;

alter table syllabi
  add column if not exists student_name text,
  add column if not exists student_notes text;

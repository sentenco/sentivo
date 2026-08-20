-- Teacher's Desk: private file storage for lesson materials and teaching
-- credentials. Run once in the Supabase SQL editor.

create table if not exists teacher_files (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade not null,
  category text not null check (category in ('material', 'credential')),
  file_path text not null,
  file_name text not null,
  file_size integer,
  created_at timestamptz not null default now()
);

create index if not exists teacher_files_owner_idx on teacher_files (owner_id, created_at desc);

alter table teacher_files enable row level security;

-- Owner sees their own files; the admin account can see everyone's (e.g.
-- reviewing credentials for a mentor application).
drop policy if exists "teacher_files_select" on teacher_files;
create policy "teacher_files_select" on teacher_files for select
  using (owner_id = auth.uid() or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com');

drop policy if exists "teacher_files_insert" on teacher_files;
create policy "teacher_files_insert" on teacher_files for insert
  with check (owner_id = auth.uid());

drop policy if exists "teacher_files_delete" on teacher_files;
create policy "teacher_files_delete" on teacher_files for delete
  using (owner_id = auth.uid());

-- Private bucket (unlike community-uploads, which is public) — files are
-- only ever reached via a short-lived signed URL.
insert into storage.buckets (id, name, public)
values ('teacher-files', 'teacher-files', false)
on conflict (id) do nothing;

drop policy if exists "Users can view their own teacher files" on storage.objects;
create policy "Users can view their own teacher files"
  on storage.objects for select
  using (
    bucket_id = 'teacher-files'
    and (
      (storage.foldername(name))[1] = auth.uid()::text
      or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com'
    )
  );

drop policy if exists "Users can upload their own teacher files" on storage.objects;
create policy "Users can upload their own teacher files"
  on storage.objects for insert
  with check (
    bucket_id = 'teacher-files'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "Users can delete their own teacher files" on storage.objects;
create policy "Users can delete their own teacher files"
  on storage.objects for delete
  using (
    bucket_id = 'teacher-files'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

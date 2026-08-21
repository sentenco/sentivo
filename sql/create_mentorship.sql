-- Mentorship program: applications, admin approval, and the mentor state
-- that lives on a profile once approved. Run once in the Supabase SQL editor.
-- Depends on profiles already existing (community_companies_and_profiles_setup.sql).

create table if not exists mentor_applications (
  id uuid primary key default gen_random_uuid(),
  applicant_id uuid references auth.users(id) on delete cascade not null,
  specialty text not null,
  format text not null check (format in ('1:1', 'group', 'both')),
  price_type text not null check (price_type in ('free', 'paid')),
  price_amount numeric,
  pitch text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id)
);

create index if not exists mentor_applications_status_idx on mentor_applications (status, created_at desc);

alter table mentor_applications enable row level security;

drop policy if exists "mentor_applications_select" on mentor_applications;
create policy "mentor_applications_select" on mentor_applications for select
  using (applicant_id = auth.uid() or auth.jwt() ->> 'email' = 'caldrin1999@gmail.com');

drop policy if exists "mentor_applications_insert" on mentor_applications;
create policy "mentor_applications_insert" on mentor_applications for insert
  with check (applicant_id = auth.uid());

drop policy if exists "mentor_applications_update" on mentor_applications;
create policy "mentor_applications_update" on mentor_applications for update
  using (auth.jwt() ->> 'email' = 'caldrin1999@gmail.com');

-- Mentor state, denormalized onto the profile once an application is approved.
alter table profiles add column if not exists is_mentor boolean not null default false;
alter table profiles add column if not exists mentor_specialty text;
alter table profiles add column if not exists mentor_format text;
alter table profiles add column if not exists mentor_price_type text;
alter table profiles add column if not exists mentor_price_amount numeric;
alter table profiles add column if not exists mentor_bio text;

-- Community posts/comments snapshot mentor status at post time, same
-- pattern as author_years_teaching, so a badge doesn't change retroactively.
alter table community_posts add column if not exists author_is_mentor boolean not null default false;
alter table community_comments add column if not exists author_is_mentor boolean not null default false;

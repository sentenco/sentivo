-- Exposes the real total registered-teacher count to the Homeroom stats
-- strip, including for logged-out visitors. profiles' own SELECT policy
-- requires auth.uid() is not null (see fix_profiles_select.sql), so an
-- anonymous visitor can't read profiles directly -- this function runs
-- as SECURITY DEFINER to bypass that just for a single aggregate number,
-- without exposing any row data (no names, emails, or other fields).
-- Run once in the Supabase SQL editor.

create or replace function public.get_teacher_count()
returns bigint
language sql
security definer
set search_path = public
as $$
  select count(*) from profiles;
$$;

grant execute on function public.get_teacher_count() to anon, authenticated;

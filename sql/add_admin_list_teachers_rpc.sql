-- Lets the site owner see real teacher emails from inside the app, without
-- exposing any email to other teachers or duplicating emails into the
-- public `profiles` table (which deliberately has no email column -- see
-- fix_profiles_select.sql). SECURITY DEFINER bypasses RLS just for this
-- one function so it can join auth.users, but the function checks the
-- CALLER's own identity first and returns an empty set for anyone but the
-- admin -- so granting EXECUTE to `authenticated` is safe.
-- Run once in the Supabase SQL editor.

create or replace function public.admin_list_teachers()
returns table (
  id uuid,
  email text,
  display_name text,
  years_teaching int,
  is_mentor boolean,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select p.id, u.email, p.display_name, p.years_teaching, p.is_mentor, u.created_at
  from profiles p
  join auth.users u on u.id = p.id
  where (select email from auth.users where id = auth.uid()) = 'caldrin1999@gmail.com'
  order by u.created_at asc;
$$;

grant execute on function public.admin_list_teachers() to authenticated;

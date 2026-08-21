-- Fixes a real bug: profiles_select_own only ever let a teacher see their
-- OWN profile row, so any feature that looks up another teacher's name/
-- avatar (Messenger conversation headers, the Mentor Directory, admin
-- applicant lookups, File Cabinet's admin owner-name display) was silently
-- returning nothing for anyone but yourself. profiles has no sensitive
-- fields (email lives in auth.users, never here), so it's safe to let any
-- signed-in teacher read anyone's basic profile info.
-- Run once in the Supabase SQL editor.

drop policy if exists "profiles_select_own" on profiles;
create policy "profiles_select_authenticated" on profiles for select
  using (auth.uid() is not null);

-- Re-affirms the profiles table's RLS policies and grants. Safe to run
-- again even if sql/community_add_companies.sql already ran successfully --
-- this is a no-op if everything was already correct. Run this if saving a
-- profile fails with "new row violates row-level security policy for table
-- profiles".

drop policy if exists "profiles_select_own" on profiles;
create policy "profiles_select_own" on profiles for select
  using (id = auth.uid());

drop policy if exists "profiles_insert_own" on profiles;
create policy "profiles_insert_own" on profiles for insert
  with check (id = auth.uid());

drop policy if exists "profiles_update_own" on profiles;
create policy "profiles_update_own" on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

grant select, insert, update on public.profiles to authenticated;

-- Make sure every existing account has a profile row (harmless if they
-- already all do).
insert into profiles (id, company_id)
select id, null from auth.users
on conflict (id) do nothing;

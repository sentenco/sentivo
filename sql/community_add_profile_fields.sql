-- Profile fields for the new Account Settings screen: photo, display name,
-- country, and years teaching ESL. Run once in the Supabase SQL editor,
-- after sql/community_add_companies.sql (which created the profiles table).

alter table profiles add column if not exists display_name text;
alter table profiles add column if not exists avatar_url text;
alter table profiles add column if not exists country text;
alter table profiles add column if not exists years_teaching integer;

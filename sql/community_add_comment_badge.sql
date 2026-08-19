-- Denormalizes the commenter's years-teaching badge onto each comment (same
-- pattern as author_years_teaching on community_posts), so comments can
-- show a teacher's experience badge next to their name too. Run once in
-- the Supabase SQL editor, after sql/community_companies_and_profiles_setup.sql.

alter table community_comments add column if not exists author_years_teaching integer;

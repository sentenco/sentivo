-- Denormalizes the poster's years-teaching badge onto each post (same
-- pattern as author_name/author_email/image_url), so the feed can show a
-- teacher's experience badge without an extra query per post. Run once in
-- the Supabase SQL editor, after sql/community_add_profile_fields.sql.

alter table community_posts add column if not exists author_years_teaching integer;

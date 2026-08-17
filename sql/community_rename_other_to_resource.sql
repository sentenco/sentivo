-- The 3rd post type was renamed from a vague "Something else" (other) to
-- "Resource" (a link, worksheet, or material recommendation). Run once in
-- the Supabase SQL editor.

update community_posts set post_type = 'resource' where post_type = 'other';

alter table community_posts drop constraint if exists community_posts_post_type_check;
alter table community_posts add constraint community_posts_post_type_check
  check (post_type is null or post_type in ('tip', 'question', 'resource', 'prompt'));

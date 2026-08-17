-- Lets a teacher tag their post as a Tip, a Question, or Something else,
-- shown as a small badge on the post. Run once in the Supabase SQL editor.

alter table community_posts add column if not exists post_type text;

alter table community_posts drop constraint if exists community_posts_post_type_check;
alter table community_posts add constraint community_posts_post_type_check
  check (post_type is null or post_type in ('tip', 'question', 'other'));

-- Adds the "A Day at Work" FORGE track card to the Library's Speaking
-- category. id "forge-1" links to /library/forge/forge-1 (the track
-- overview listing Lessons 1-10), which then links into individual lessons
-- at /library/forge/forge-1/:lessonNum.
--
-- A FORGE track is a 10-lesson speaking course tailored to one learner
-- profile (occupation + interest) -- this is Track 1: a software engineer.
-- Only Lesson 1 is authored so far; Lessons 2-10 render as "Coming soon"
-- until src/forgeTracks.js is filled in.
--
-- content_type "forge-track" triggers the same full-bleed photo-cover
-- thumbnail style as Story Book cards (src/Library.jsx), with a "Speaking"
-- badge instead of "Story". No cover photo is wired in yet -- the card
-- shows an ImagePlaceholder until one is added to FORGE_COVERS.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'forge-1',
  'A Day at Work',
  'Software Engineer · Tech',
  'A2',
  'free',
  'forge',
  'forge',
  'Speaking',
  1,
  'forge-track',
  null
)
on conflict (id) do update set
  title = excluded.title,
  sub = excluded.sub,
  level = excluded.level,
  access = excluded.access,
  motif = excluded.motif,
  palette = excluded.palette,
  category = excluded.category,
  sort_order = excluded.sort_order,
  content_type = excluded.content_type,
  tagline = excluded.tagline;

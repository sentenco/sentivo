-- Adds the "Paul's Diary" story card to the Library's Reading category.
-- id "storybook" links to the already-registered route /library/storybook.
-- content_type "story" triggers the distinct story-card thumbnail style in Library.jsx
-- (title shown large on the card front, image placeholder above it for now).
-- Renamed from "Joshua's Diary" -- protagonist renamed Joshua -> Paul,
-- old side character "Paul" renamed to "Ethan" to avoid a name collision.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook',
  'Paul''s Diary',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'coral',
  'Reading',
  14,
  'story',
  'Paul''s Diary'
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

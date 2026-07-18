-- Adds the "Story Book" card to the Library's Reading category.
-- id "storybook" links to the already-registered route /library/storybook.
-- content_type "story" triggers the distinct story-card thumbnail style in Library.jsx.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook',
  'Story Book',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'coral',
  'Reading',
  14,
  'story',
  'Joshua''s Diary'
);

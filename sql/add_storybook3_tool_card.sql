-- Adds the "Siblings and Neighbors at Home" story card to the Library's
-- Reading category (Book 3). id "storybook-3" links to the newly
-- registered route /library/storybook-3.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-3',
  'Siblings and Neighbors at Home',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'gold',
  'Reading',
  16,
  'story',
  'Siblings and Neighbors at Home'
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

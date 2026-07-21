-- Adds the "A Good Week at the Shop" story card to the Library's
-- Reading category (Book 8). id "storybook-8" links to the newly
-- registered route /library/storybook-8.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "clay" is a new card variant added to Library.jsx for this
-- book (Books 1-7 already used up coral/teal/gold/lavender/orange/aqua/slate).
-- Like Book 7, this book targets Adults (shop/customer-service setting).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-8',
  'A Good Week at the Shop',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'clay',
  'Reading',
  21,
  'story',
  'A Good Week at the Shop'
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

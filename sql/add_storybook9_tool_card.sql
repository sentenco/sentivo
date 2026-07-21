-- Adds the "A Healthier Me" story card to the Library's Reading
-- category (Book 9). id "storybook-9" links to the newly registered
-- route /library/storybook-9.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "mint" is a new card variant added to Library.jsx for this
-- book (Books 1-8 already used up coral/teal/gold/lavender/orange/aqua/slate/clay).
-- Like Books 7-8, this book targets Adults (health/wellness setting).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-9',
  'A Healthier Me',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'mint',
  'Reading',
  22,
  'story',
  'A Healthier Me'
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

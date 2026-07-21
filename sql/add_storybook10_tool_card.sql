-- Adds the "Feeling Better Again" story card to the Library's Reading
-- category (Book 10). id "storybook-10" links to the newly registered
-- route /library/storybook-10.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "sky" is a new card variant added to Library.jsx for this
-- book (Books 1-9 already used up coral/teal/gold/lavender/orange/aqua/
-- slate/clay/mint).
-- Like Books 7-9, this book targets Adults (clinic/going-to-the-doctor
-- setting).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-10',
  'Feeling Better Again',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'sky',
  'Reading',
  23,
  'story',
  'Feeling Better Again'
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

-- Adds the "A Stronger Swimmer" story card to the Library's Reading
-- category (Book 6). id "storybook-6" links to the newly registered
-- route /library/storybook-6.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "aqua" is a new card variant added to Library.jsx for this
-- book (Books 1-5 already used up coral/teal/gold/lavender/orange).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-6',
  'A Stronger Swimmer',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'aqua',
  'Reading',
  19,
  'story',
  'A Stronger Swimmer'
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

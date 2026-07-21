-- Adds the "A Full and Good Week" story card to the Library's Reading
-- category (Book 7). id "storybook-7" links to the newly registered
-- route /library/storybook-7.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "slate" is a new card variant added to Library.jsx for this
-- book (Books 1-6 already used up coral/teal/gold/lavender/orange/aqua).
-- Unlike Books 1-6, this book targets Adults (office-worker setting).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-7',
  'A Full and Good Week',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'slate',
  'Reading',
  20,
  'story',
  'A Full and Good Week'
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

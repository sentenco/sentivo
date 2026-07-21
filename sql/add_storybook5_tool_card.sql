-- Adds the "My School Basketball Team" story card to the Library's
-- Reading category (Book 5). id "storybook-5" links to the newly
-- registered route /library/storybook-5.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "orange" is a new card variant added to Library.jsx for this
-- book (Books 1-4 already used up coral/teal/gold/lavender).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-5',
  'My School Basketball Team',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'orange',
  'Reading',
  18,
  'story',
  'My School Basketball Team'
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

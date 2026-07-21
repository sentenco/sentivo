-- Adds the "Food Brings Me Joy" story card to the Library's Reading
-- category (Book 12, the final book in the 12-book Story Book series).
-- id "storybook-12" links to the newly registered route /library/storybook-12.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "cinnamon" is a new card variant added to Library.jsx for this
-- book (Books 1-11 already used up coral/teal/gold/lavender/orange/aqua/
-- slate/clay/mint/sky/rose).
-- Like Books 7-11, this book targets Adults (food/cafés/eating-out setting).

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-12',
  'Food Brings Me Joy',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'cinnamon',
  'Reading',
  25,
  'story',
  'Food Brings Me Joy'
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

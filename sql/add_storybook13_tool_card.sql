-- Adds the "My New Puppy" story card to the Library's Reading category
-- (Book 13, the first book in the Kids age track -- Books 1-6 are Teens,
-- 7-12 are Adults). id "storybook-13" links to the newly registered
-- route /library/storybook-13.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book, so the card
-- falls back to an image placeholder until artwork is generated and
-- added to STORY_COVERS in Library.jsx.
-- palette "sand" is a new card variant added to Library.jsx for this book
-- (Books 1-12 already used up coral/teal/gold/lavender/orange/aqua/
-- slate/clay/mint/sky/rose/cinnamon).
-- level stays 'A1' -- per the user's instruction, only Kids/Teens stories
-- stay at A1; Adults stories (Books 7-12) were moved to A2.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-13',
  'My New Puppy',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'sand',
  'Reading',
  26,
  'story',
  'My New Puppy'
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

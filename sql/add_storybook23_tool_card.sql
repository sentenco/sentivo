-- Adds the "My First Sleepover" story card to the Library's Reading
-- category (Book 23, Kids age track). First book in the A2 Kids batch
-- (Books 23-30) -- Kids stories have been A1-only until now; the user
-- asked to start adding A2 Kids content. id "storybook-23" links to the
-- newly registered route /library/storybook-23.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book.
-- palette "lilac" is a new card variant added to Library.jsx.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-23',
  'My First Sleepover',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'lilac',
  'Reading',
  37,
  'story',
  'My First Sleepover'
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

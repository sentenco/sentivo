-- Adds "A Mix-Up at the Hotel" story card (Book 57, Adults age track,
-- B1). First book in a new B1 Adults batch (Books 57-64) -- Adults
-- has been A1/A2-only until now. palette "cerulean" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-57',
  'A Mix-Up at the Hotel',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'cerulean',
  'Reading',
  71,
  'story',
  'A Mix-Up at the Hotel'
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

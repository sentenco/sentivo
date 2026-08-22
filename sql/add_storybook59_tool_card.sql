-- Adds "A Mix-Up at the Pharmacy" story card (Book 59, Adults age
-- track, B1). Third book in the B1 Adults batch. palette "sienna" is
-- new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-59',
  'A Mix-Up at the Pharmacy',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'sienna',
  'Reading',
  73,
  'story',
  'A Mix-Up at the Pharmacy'
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

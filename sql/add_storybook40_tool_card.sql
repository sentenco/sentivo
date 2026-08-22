-- Adds "Adopting a Rescue Dog" story card (Book 40, Adults age track, A2).
-- Eighth and final book in this Adults batch, completing Adults at 8
-- books. palette "ivory" is a new card variant.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-40',
  'Adopting a Rescue Dog',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'ivory',
  'Reading',
  54,
  'story',
  'Adopting a Rescue Dog'
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

-- Adds "Negotiating a Rent Increase" story card (Book 79, Adults
-- age track, B2). Seventh book in the B2 Adults batch. palette
-- "pewter" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-79',
  'Negotiating a Rent Increase',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'pewter',
  'Reading',
  93,
  'story',
  'Negotiating a Rent Increase'
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

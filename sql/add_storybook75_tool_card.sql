-- Adds "Negotiating a Vendor Contract" story card (Book 75, Adults
-- age track, B2). Third book in the B2 Adults batch. palette
-- "amethyst" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-75',
  'Negotiating a Vendor Contract',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'amethyst',
  'Reading',
  89,
  'story',
  'Negotiating a Vendor Contract'
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

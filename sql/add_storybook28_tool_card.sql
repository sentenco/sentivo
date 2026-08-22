-- Adds the "Lost and Found" story card (Book 28, Kids age track, A2).
-- Sixth book in the A2 Kids batch. palette "sunflower" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-28',
  'Lost and Found',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'sunflower',
  'Reading',
  42,
  'story',
  'Lost and Found'
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

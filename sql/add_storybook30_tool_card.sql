-- Adds the "A Camping Trip" story card (Book 30, Kids age track, A2).
-- Eighth and final book in this A2 Kids batch. palette "blush" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-30',
  'A Camping Trip',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'blush',
  'Reading',
  44,
  'story',
  'A Camping Trip'
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

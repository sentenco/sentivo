-- Adds the "A Rainy Day Adventure" story card (Book 25, Kids age track, A2).
-- Third book in the A2 Kids batch. palette "mango" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-25',
  'A Rainy Day Adventure',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'mango',
  'Reading',
  39,
  'story',
  'A Rainy Day Adventure'
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

-- Adds the "Helping in the Garden" story card (Book 26, Kids age track, A2).
-- Fourth book in the A2 Kids batch. palette "seafoam" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-26',
  'Helping in the Garden',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'seafoam',
  'Reading',
  40,
  'story',
  'Helping in the Garden'
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

-- Adds "Starting a Small Business" story card (Book 56, Teens age
-- track, B1). Eighth and final book in this B1 Teens batch. palette
-- "linen" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-56',
  'Starting a Small Business',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'linen',
  'Reading',
  70,
  'story',
  'Starting a Small Business'
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

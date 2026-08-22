-- Adds "Whether We Should Move" story card (Book 68, Teens age
-- track, B2). Fourth book in the B2 Teens batch. palette "garnet"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-68',
  'Whether We Should Move',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'garnet',
  'Reading',
  82,
  'story',
  'Whether We Should Move'
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

-- Adds "The Group Project Disaster" story card (Book 34, Teens age
-- track, A2). Fourth book in the A2 Teens batch. palette "denim" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-34',
  'The Group Project Disaster',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'denim',
  'Reading',
  48,
  'story',
  'The Group Project Disaster'
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

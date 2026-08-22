-- Adds "Choosing to Study Abroad" story card (Book 66, Teens age
-- track, B2). Second book in the B2 Teens batch. palette "citrine"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-66',
  'Choosing to Study Abroad',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'citrine',
  'Reading',
  80,
  'story',
  'Choosing to Study Abroad'
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

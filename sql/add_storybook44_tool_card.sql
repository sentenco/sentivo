-- Adds "Taking the Bus to Work" story card (Book 44, Adults age track,
-- A1). Fourth book in the A1 Adults batch. palette "juniper" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-44',
  'Taking the Bus to Work',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'juniper',
  'Reading',
  58,
  'story',
  'Taking the Bus to Work'
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

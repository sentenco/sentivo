-- Adds "Choosing My Own Path" story card (Book 54, Teens age track,
-- B1). Sixth book in the B1 Teens batch. palette "indigo" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-54',
  'Choosing My Own Path',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'indigo',
  'Reading',
  68,
  'story',
  'Choosing My Own Path'
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

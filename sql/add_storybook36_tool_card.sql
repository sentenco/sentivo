-- Adds "The School Newspaper" story card (Book 36, Teens age track, A2).
-- Sixth book in the A2 Teens batch. palette "mauve" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-36',
  'The School Newspaper',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'mauve',
  'Reading',
  50,
  'story',
  'The School Newspaper'
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

-- Adds "The Great Screen-Time Debate" story card (Book 70, Teens age
-- track, B2). Sixth book in the B2 Teens batch. palette "umber" is
-- new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-70',
  'The Great Screen-Time Debate',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'umber',
  'Reading',
  84,
  'story',
  'The Great Screen-Time Debate'
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

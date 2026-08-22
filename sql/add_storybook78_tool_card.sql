-- Adds "Mediating a Business Partnership Dispute" story card (Book
-- 78, Adults age track, B2). Sixth book in the B2 Adults batch.
-- palette "bronze" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-78',
  'Mediating a Business Partnership Dispute',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'bronze',
  'Reading',
  92,
  'story',
  'Mediating a Business Partnership Dispute'
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

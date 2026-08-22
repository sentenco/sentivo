-- Adds "A Billing Dispute" story card (Book 62, Adults age track,
-- B1). Sixth book in the B1 Adults batch. palette "saffron" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-62',
  'A Billing Dispute',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'saffron',
  'Reading',
  76,
  'story',
  'A Billing Dispute'
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

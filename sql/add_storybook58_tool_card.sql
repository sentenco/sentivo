-- Adds "A Problem with My Paycheck" story card (Book 58, Adults age
-- track, B1). Second book in the B1 Adults batch. palette "mahogany"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-58',
  'A Problem with My Paycheck',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'mahogany',
  'Reading',
  72,
  'story',
  'A Problem with My Paycheck'
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

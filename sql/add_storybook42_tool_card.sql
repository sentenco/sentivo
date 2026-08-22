-- Adds "Grocery Shopping for the Week" story card (Book 42, Adults age
-- track, A1). Second book in the A1 Adults batch. palette "rust" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-42',
  'Grocery Shopping for the Week',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'rust',
  'Reading',
  56,
  'story',
  'Grocery Shopping for the Week'
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

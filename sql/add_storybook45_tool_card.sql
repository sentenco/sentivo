-- Adds "Cooking Dinner for the Family" story card (Book 45, Adults age
-- track, A1). Fifth book in the A1 Adults batch. palette "sepia" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-45',
  'Cooking Dinner for the Family',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'sepia',
  'Reading',
  59,
  'story',
  'Cooking Dinner for the Family'
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

-- Adds the "Studying for the Big Exam" story card (Book 31, Teens age
-- track, A2). First book in the A2 Teens batch (Books 31-38) -- Teens has
-- been A1-only until now. palette "azure" is a new card variant.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-31',
  'Studying for the Big Exam',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'azure',
  'Reading',
  45,
  'story',
  'Studying for the Big Exam'
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

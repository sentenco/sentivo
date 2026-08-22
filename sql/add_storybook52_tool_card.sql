-- Adds "The Anxiety Before the Presentation" story card (Book 52,
-- Teens age track, B1). Fourth book in the B1 Teens batch. palette
-- "charcoal" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-52',
  'The Anxiety Before the Presentation',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'charcoal',
  'Reading',
  66,
  'story',
  'The Anxiety Before the Presentation'
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

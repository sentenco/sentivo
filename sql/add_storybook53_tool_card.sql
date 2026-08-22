-- Adds "Standing Up to a Bully Online" story card (Book 53, Teens age
-- track, B1). Fifth book in the B1 Teens batch. palette "goldenrod" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-53',
  'Standing Up to a Bully Online',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'goldenrod',
  'Reading',
  67,
  'story',
  'Standing Up to a Bully Online'
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

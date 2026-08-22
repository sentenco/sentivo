-- Adds "When My Two Best Friends Stopped Talking" story card (Book
-- 71, Teens age track, B2). Seventh book in the B2 Teens batch.
-- palette "vermilion" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-71',
  'When My Two Best Friends Stopped Talking',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'vermilion',
  'Reading',
  85,
  'story',
  'When My Two Best Friends Stopped Talking'
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

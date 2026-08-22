-- Adds "Learning to Say No" story card (Book 55, Teens age track, B1).
-- Seventh book in the B1 Teens batch. palette "papaya" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-55',
  'Learning to Say No',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'papaya',
  'Reading',
  69,
  'story',
  'Learning to Say No'
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

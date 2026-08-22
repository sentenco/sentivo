-- Adds "Learning to Skateboard" story card (Book 38, Teens age track, A2).
-- Eighth and final book in the A2 Teens batch. palette "terracotta" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-38',
  'Learning to Skateboard',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'terracotta',
  'Reading',
  52,
  'story',
  'Learning to Skateboard'
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

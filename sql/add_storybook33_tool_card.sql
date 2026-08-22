-- Adds "Learning to Drive" story card (Book 33, Teens age track, A2).
-- Third book in the A2 Teens batch. palette "olive" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-33',
  'Learning to Drive',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'olive',
  'Reading',
  47,
  'story',
  'Learning to Drive'
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

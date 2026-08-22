-- Adds "The School Debate Team" story card (Book 32, Teens age track, A2).
-- Second book in the A2 Teens batch. palette "amber" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-32',
  'The School Debate Team',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'amber',
  'Reading',
  46,
  'story',
  'The School Debate Team'
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

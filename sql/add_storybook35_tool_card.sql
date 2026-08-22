-- Adds "My First Concert" story card (Book 35, Teens age track, A2).
-- Fifth book in the A2 Teens batch. palette "apricot" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-35',
  'My First Concert',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'apricot',
  'Reading',
  49,
  'story',
  'My First Concert'
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

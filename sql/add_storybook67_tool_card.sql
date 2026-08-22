-- Adds "The Rumor in the Group Chat" story card (Book 67, Teens age
-- track, B2). Third book in the B2 Teens batch. palette "malachite"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-67',
  'The Rumor in the Group Chat',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'malachite',
  'Reading',
  81,
  'story',
  'The Rumor in the Group Chat'
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

-- Adds the "My Little Brother's Birthday" story card (Book 27, Kids age
-- track, A2). Fifth book in the A2 Kids batch. palette "plum" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-27',
  'My Little Brother''s Birthday',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'plum',
  'Reading',
  41,
  'story',
  'My Little Brother''s Birthday'
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

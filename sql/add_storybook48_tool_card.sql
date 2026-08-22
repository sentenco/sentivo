-- Adds "A Visit to the Post Office" story card (Book 48, Adults age
-- track, A1). Eighth and final book in this A1 Adults batch, completing
-- a second full 8-book set for Adults. palette "cream" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-48',
  'A Visit to the Post Office',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'cream',
  'Reading',
  62,
  'story',
  'A Visit to the Post Office'
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

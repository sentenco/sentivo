-- Adds "Learning to Use My New Phone" story card (Book 47, Adults age
-- track, A1). Seventh book in the A1 Adults batch. palette "marigold" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-47',
  'Learning to Use My New Phone',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'marigold',
  'Reading',
  61,
  'story',
  'Learning to Use My New Phone'
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

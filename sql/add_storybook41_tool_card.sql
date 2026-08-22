-- Adds "My First Day at a New Job" story card (Book 41, Adults age
-- track, A1). First book in a new A1 Adults batch (Books 41-48) --
-- Adults has been A2-only since Books 7-12 were moved up, so this is
-- genuinely new A1 content. palette "cobalt" is a new card variant.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-41',
  'My First Day at a New Job',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'cobalt',
  'Reading',
  55,
  'story',
  'My First Day at a New Job'
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

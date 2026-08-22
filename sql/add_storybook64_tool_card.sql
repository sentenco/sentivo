-- Adds "A Noisy New Neighbor" story card (Book 64, Adults age track,
-- B1). Eighth and final book in the B1 Adults batch. palette "taupe"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-64',
  'A Noisy New Neighbor',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'taupe',
  'Reading',
  78,
  'story',
  'A Noisy New Neighbor'
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

-- Adds "A Delayed Flight" story card (Book 60, Adults age track, B1).
-- Fourth book in the B1 Adults batch. palette "moss" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-60',
  'A Delayed Flight',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'moss',
  'Reading',
  74,
  'story',
  'A Delayed Flight'
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

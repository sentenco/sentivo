-- Adds the "The Class Pet" story card (Book 24, Kids age track, A2).
-- Second book in the A2 Kids batch. palette "peach" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-24',
  'The Class Pet',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'peach',
  'Reading',
  38,
  'story',
  'The Class Pet'
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

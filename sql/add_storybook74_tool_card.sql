-- Adds "Mediating a Dispute Between Coworkers" story card (Book 74,
-- Adults age track, B2). Second book in the B2 Adults batch. palette
-- "topaz" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-74',
  'Mediating a Dispute Between Coworkers',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'topaz',
  'Reading',
  88,
  'story',
  'Mediating a Dispute Between Coworkers'
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

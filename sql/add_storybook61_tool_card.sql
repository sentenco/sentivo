-- Adds "Negotiating a Deadline at Work" story card (Book 61, Adults
-- age track, B1). Fifth book in the B1 Adults batch. palette "copper"
-- is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-61',
  'Negotiating a Deadline at Work',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'copper',
  'Reading',
  75,
  'story',
  'Negotiating a Deadline at Work'
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

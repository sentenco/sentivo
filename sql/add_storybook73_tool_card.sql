-- Adds "Negotiating a Salary Raise" story card (Book 73, Adults age
-- track, B2). First book in a new B2 Adults batch (Books 73-80) --
-- Adults has been A1/A2/B1-only until now. palette "onyx" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-73',
  'Negotiating a Salary Raise',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'onyx',
  'Reading',
  87,
  'story',
  'Negotiating a Salary Raise'
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

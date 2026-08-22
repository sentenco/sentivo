-- Adds "Organizing a Fundraiser" story card (Book 50, Teens age track,
-- B1). Second book in the B1 Teens batch. palette "burgundy" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-50',
  'Organizing a Fundraiser',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'burgundy',
  'Reading',
  64,
  'story',
  'Organizing a Fundraiser'
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

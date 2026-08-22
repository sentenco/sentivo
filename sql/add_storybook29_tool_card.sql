-- Adds the "The Science Fair Project" story card (Book 29, Kids age
-- track, A2). Seventh book in the A2 Kids batch. palette "cocoa" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-29',
  'The Science Fair Project',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'cocoa',
  'Reading',
  43,
  'story',
  'The Science Fair Project'
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

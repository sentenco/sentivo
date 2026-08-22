-- Adds "Renewing My Driver's License" story card (Book 63, Adults
-- age track, B1). Seventh book in the B1 Adults batch. palette
-- "cerise" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-63',
  'Renewing My Driver''s License',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'cerise',
  'Reading',
  77,
  'story',
  'Renewing My Driver''s License'
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

-- Adds "Taking a Break from Social Media" story card (Book 49, Teens
-- age track, B1). First book at B1 in Story Book at all -- Kids does
-- not get B1 (per the user, Kids stops at A2 in Reading). palette
-- "emerald" is a new card variant.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-49',
  'Taking a Break from Social Media',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'emerald',
  'Reading',
  63,
  'story',
  'Taking a Break from Social Media'
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

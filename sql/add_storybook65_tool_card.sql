-- Adds "The Uniform Policy Vote" story card (Book 65, Teens age
-- track, B2). First book in a new B2 Teens batch (Books 65-72) --
-- Teens has been A1/A2/B1-only until now. palette "cardinal" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-65',
  'The Uniform Policy Vote',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'cardinal',
  'Reading',
  79,
  'story',
  'The Uniform Policy Vote'
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

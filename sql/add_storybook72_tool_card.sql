-- Adds "Deciding What to Share Online" story card (Book 72, Teens
-- age track, B2). Eighth and final book in the B2 Teens batch.
-- palette "jade" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-72',
  'Deciding What to Share Online',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'jade',
  'Reading',
  86,
  'story',
  'Deciding What to Share Online'
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

-- Adds "The Environmental Club's Big Decision" story card (Book 69,
-- Teens age track, B2). Fifth book in the B2 Teens batch. palette
-- "quartz" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-69',
  'The Environmental Club''s Big Decision',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'quartz',
  'Reading',
  83,
  'story',
  'The Environmental Club''s Big Decision'
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

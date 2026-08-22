-- Adds "Negotiating an Insurance Claim" story card (Book 77, Adults
-- age track, B2). Fifth book in the B2 Adults batch. palette
-- "alabaster" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-77',
  'Negotiating an Insurance Claim',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'alabaster',
  'Reading',
  91,
  'story',
  'Negotiating an Insurance Claim'
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

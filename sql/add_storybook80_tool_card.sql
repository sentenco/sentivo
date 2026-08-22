-- Adds "Proposing a Change to Company Policy" story card (Book 80,
-- Adults age track, B2). Eighth and final book in the B2 Adults
-- batch. palette "cinnabar" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-80',
  'Proposing a Change to Company Policy',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'cinnabar',
  'Reading',
  94,
  'story',
  'Proposing a Change to Company Policy'
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

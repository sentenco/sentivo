-- Adds "A Dispute with the Homeowners Association" story card (Book
-- 76, Adults age track, B2). Fourth book in the B2 Adults batch.
-- palette "obsidian" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-76',
  'A Dispute with the Homeowners Association',
  '10-Chapter Story',
  'B2',
  'free',
  'book',
  'obsidian',
  'Reading',
  90,
  'story',
  'A Dispute with the Homeowners Association'
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

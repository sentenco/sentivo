-- Adds "A Weekend at the Laundromat" story card (Book 46, Adults age
-- track, A1). Sixth book in the A1 Adults batch. palette "wisteria" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-46',
  'A Weekend at the Laundromat',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'wisteria',
  'Reading',
  60,
  'story',
  'A Weekend at the Laundromat'
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

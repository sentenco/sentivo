-- Adds "Failing the Try-Outs" story card (Book 51, Teens age track,
-- B1). Third book in the B1 Teens batch. palette "turquoise" is new.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-51',
  'Failing the Try-Outs',
  '10-Chapter Story',
  'B1',
  'free',
  'book',
  'turquoise',
  'Reading',
  65,
  'story',
  'Failing the Try-Outs'
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

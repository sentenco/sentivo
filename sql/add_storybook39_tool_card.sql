-- Adds "Moving into My First Apartment" story card (Book 39, Adults age
-- track, A2). Seventh Adults book, first of a 2-book batch (39-40)
-- filling Adults out to 8 books to match Kids and Teens. palette "steel"
-- is a new card variant.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-39',
  'Moving into My First Apartment',
  '10-Chapter Story',
  'A2',
  'free',
  'book',
  'steel',
  'Reading',
  53,
  'story',
  'Moving into My First Apartment'
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

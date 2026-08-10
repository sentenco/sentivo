-- Adds the "My Little Sister" story card to the Library's Reading
-- category (Book 20, Kids age track). id "storybook-20" links to the
-- newly registered route /library/storybook-20.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book.
-- palette "honey" is a new card variant added to Library.jsx.
-- level stays 'A1' -- Kids/Teens stories stay at A1, Adults are A2.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-20',
  'My Little Sister',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'honey',
  'Reading',
  34,
  'story',
  'My Little Sister'
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

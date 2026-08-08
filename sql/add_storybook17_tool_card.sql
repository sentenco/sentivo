-- Adds the "Learning to Ride My Bike" story card to the Library's Reading
-- category (Book 17, Kids age track). id "storybook-17" links to the
-- newly registered route /library/storybook-17.
-- content_type "story" triggers the distinct story-card thumbnail style
-- in Library.jsx. No cover art exists yet for this book.
-- palette "berry" is a new card variant added to Library.jsx.
-- level stays 'A1' -- Kids/Teens stories stay at A1, Adults are A2.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'storybook-17',
  'Learning to Ride My Bike',
  '10-Chapter Story',
  'A1',
  'free',
  'book',
  'berry',
  'Reading',
  31,
  'story',
  'Learning to Ride My Bike'
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

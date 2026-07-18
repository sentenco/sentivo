-- Adds the "FORGE L1: A Day at Work" card to the Library's Speaking
-- category. id "forge-1" links to the newly registered route
-- /library/forge-1. FORGE is a new, independent lesson type (one-to-one
-- adult speaking lessons) alongside the existing IGNITE curriculum --
-- it does not use the lessons/lesson_slides tables, so this row only
-- needs to exist for the thumbnail; the deck itself is static content
-- rendered by Forge.jsx (src/forgeData.js).
--
-- content_type "forge" + motif "forge" + palette "forge" trigger the
-- distinct dark "workshop" card style in Library.jsx, deliberately
-- different from every book-jacket/tool-deck card.

insert into tools (
  id, title, sub, level, access, motif, palette, category, sort_order, content_type, tagline
) values (
  'forge-1',
  'FORGE L1',
  'Say the Picture',
  'A2',
  'free',
  'forge',
  'forge',
  'Speaking',
  1,
  'forge',
  'A Day at Work'
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

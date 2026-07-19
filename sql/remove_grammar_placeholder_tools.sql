-- Removes the three placeholder Grammar-category tools ("Phrasal Verbs",
-- "Verb Tenses", "Articles A/An/The") now that Grammar's Library card is
-- hardcoded to a single "Verb Tenses" tile (src/Library.jsx), the same way
-- Speaking bypasses the tools table for FORGE/ASCEND. Purely a cleanup of
-- rows that no longer render anywhere -- optional, the app already ignores
-- them.

delete from tools where title in ('Phrasal Verbs', 'Verb Tenses', 'Articles A/An/The') and category = 'Grammar';

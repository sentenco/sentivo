-- Removes the three placeholder Vocabulary-category tools ("Stress &
-- Meaning", "Common Collocations", "Alphabet Flashcards") now that
-- Vocabulary's Library card is hardcoded to the Synonyms game
-- (src/Library.jsx -> SynonymsGame.jsx), the same way Grammar bypasses
-- the tools table for Verb Tenses. Purely a cleanup of rows that no
-- longer render anywhere -- optional, the app already ignores them.

delete from tools where title in ('Stress & Meaning', 'Common Collocations', 'Alphabet Flashcards') and category = 'Vocabulary';

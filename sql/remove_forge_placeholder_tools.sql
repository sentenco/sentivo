-- Removes the two placeholder Speaking-category tools ("Conversation
-- Starters" and "Pronunciation Drills") now that real FORGE track content
-- (see add_forge1_tool_card.sql) is replacing them.

delete from tools where title in ('Conversation Starters', 'Pronunciation Drills');

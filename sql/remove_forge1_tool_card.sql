-- Removes the stale "A Day at Work" FORGE track card (id "forge-1") from
-- the Library/Homeroom search index. This card predates the Forge rebuild
-- (see src/forgeTracks.js, now 10 tracks: health/friends/school/family/
-- sports/gaming/career/finance/housing/travel) -- "forge-1" is no longer a
-- valid track id, so this card's link (/library/forge/forge-1) is dead.
-- See sql/add_forge1_tool_card.sql for the original insert.

delete from tools where id = 'forge-1';

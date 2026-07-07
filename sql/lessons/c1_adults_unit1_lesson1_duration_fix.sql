-- Fixes the already-live Lesson 1 row's duration_minutes from 20 to 25,
-- matching the platform-wide "25 minutes per lesson" policy. Not
-- strictly required for the card UI (LessonsGrid now always displays a
-- hardcoded 25 min rather than reading this column), but keeps the data
-- itself correct. Safe to run even if already 25.

update lessons
set duration_minutes = 25
where id = 'ffbfd190-ea7c-4d04-b5c9-f36630e500ad';

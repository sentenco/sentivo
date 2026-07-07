-- Adds the card-grid thumbnail to the already-live Lesson 1 (Adults C1
-- Unit 1). The image ships from the app's public/lessons/ folder, so it
-- only shows up once this app build (with public/lessons/c1-adults-u1-l1.jpg)
-- is deployed — the URL is a relative path, not an external host.
-- Safe to run even if you already ran c1_adults_unit1_lesson1_insert.sql
-- with the image_url baked in — this is idempotent.

update lesson_slides
set content = content || '{"image_url": "/lessons/c1-adults-u1-l1.jpg"}'::jsonb
where lesson_id = 'ffbfd190-ea7c-4d04-b5c9-f36630e500ad'
  and slide_number = 1;

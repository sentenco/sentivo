-- Adds an image to slide 8 (Writing) of A1 Kids Unit 1 Lesson 1
-- ("Hello & My Name"). Reuses the same illustration already used on
-- slide 1 (Title) — SlideWriting.jsx now renders content.image_url
-- with mix-blend-mode: multiply against a cream panel, the same trick
-- SlideWarmup.jsx already uses, so the image's white background
-- disappears without needing a separate transparent asset.
-- Safe to re-run.

update lesson_slides
set content = content || '{"image_url": "https://qsewuohdufqwmlljfrjp.supabase.co/storage/v1/object/public/lesson-images/sentivo_flat_illustration_of_a_boy_with_short_brown_hair_oran_95beb319-5097-4e9e-b140-5de96672f9b1_0.png"}'::jsonb
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 8;

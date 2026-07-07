-- Sentivo C1 Adults — Unit 1, Lesson 1: Taking a Quick Position
-- Pilot lesson for the new C1/C2 slide types (scenario, diagnosis, upgrade,
-- transfer) — see docs/curriculum/c1-adults.md and
-- docs/curriculum/c1-adults-teacher-guidance.md for the full unit/lesson
-- source content this was built from.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '021032cc-8591-454e-9fa9-6e7f7ebca354',
  'Taking a Quick Position',
  'C1',
  'adults',
  1,
  1,
  'Take and defend a quick position on a low-stakes issue under time pressure, then reformulate it for sharper stance-taking.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Scenario
(
  '021032cc-8591-454e-9fa9-6e7f7ebca354',
  1,
  'scenario',
  'Timed Opinion Turn + light Rapid Reformulation',
  null,
  $json$
  {
    "mode": "Performance",
    "patterns": "Timed Opinion Turn + light Rapid Reformulation",
    "purpose": "Get learners producing fast, structured opinions under mild time pressure, and immediately reformulating for clearer stance-taking — the entry skill the rest of the unit builds on.",
    "elicit": "60-90 second opinion turns on controversial-but-low-stakes prompts (e.g. \"Should companies ban smartphones in meetings?\" / \"Is remote work better than office work?\"). One prep-free attempt, then one immediate reformulation of the same turn."
  }
  $json$::jsonb,
  true
),

-- 2. Diagnosis
(
  '021032cc-8591-454e-9fa9-6e7f7ebca354',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json$
  {
    "listenFor": "Whether the stance is clear in the first 10 seconds; whether reasons are distinct (not restatements of the stance); whether hedging is present but not overused; filler/false-start density under time pressure.",
    "likelyResponses": [
      "I think remote work is better because you can save time and also it's more comfortable, and, um, also flexible.",
      "In my opinion, banning phones is a good idea because people don't pay attention if they have their phone."
    ],
    "scorecardFocus": [
      {"dimension": "Naturalness", "note": "chunking, disfluency control"},
      {"dimension": "Pragmatics", "note": "hedging that reads as considered, not uncertain"}
    ]
  }
  $json$::jsonb,
  true
),

-- 3. Upgrade Clinic
(
  '021032cc-8591-454e-9fa9-6e7f7ebca354',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json$
  {
    "upgradePath": "Flat stance to sharpened stance: \"I think X is better\" becomes \"I'd argue X has a clear edge over Y, at least for most people.\" Restated reasons to distinct reasons: replace a second reason that just re-says the first with a genuinely different angle (cost vs. wellbeing vs. output quality).",
    "interventionPrompts": [
      "Give me your stance in one sentence - no reasons yet.",
      "That second reason sounds like the first one again - give me a different angle.",
      "Say it again, but cut every 'um' and replace it with a half-second pause."
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Transfer
(
  '021032cc-8591-454e-9fa9-6e7f7ebca354',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json$
  {
    "extension": "Ask for a third, less obvious reason, or a one-sentence counter-argument they'd concede exists.",
    "recovery": "If the student stalls, give a sentence frame: \"I'd say ___, mainly because ___ - though I get that ___.\" Let them fill it once before asking for a frame-free retry."
  }
  $json$::jsonb,
  true
);

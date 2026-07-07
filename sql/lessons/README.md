# Sentivo Curriculum Build Guide

Read this file first in any new session before building or editing curriculum
content. It's the shared source of truth across sessions — if you're a fresh
Claude Code session picking this up, this replaces needing the original chat
history. **Update the "Status" section at the end of every unit you complete
or edit**, so the next session (and the user) can see what's done at a glance.

## What this project is

Sentivo is an ESL lesson-building app (Vite + React + Supabase, deployed on
Vercel). Teachers browse Library → a CEFR level (A1–C2) → an age track
(kids/teens/adults) → a lessons grid → an individual lesson, which opens in
`src/LessonPlayer.jsx` as a 780×440 popup with a fixed sequence of slides.

## Where things live

- **Lesson content** lives in Supabase, not in local files: the `lessons`
  table (one row per lesson) and `lesson_slides` table (one row per slide,
  `content` is jsonb). Read access is anon/public (RLS policies already
  allow `select` where `is_active = true`); there is **no write access** via
  the anon key, so all content changes go through SQL scripts the user runs
  themselves in the Supabase SQL editor.
- **This directory** (`sql/lessons/`) holds a copy of every insert/update
  script that's been run, for reference and version control. Name new files
  `lessonN_insert.sql` for a new lesson, or `unitX_<description>.sql` for
  edits to existing content.
- **Slide rendering components** are `src/slides/Slide<Type>.jsx` — read
  these directly to see the exact JSON shape each `slide_type` expects
  (don't guess the schema from memory; the component is the source of truth).

## The 9 slide types (slide_number 1–9) — A1–B2 lessons

Every A1–B2 lesson has all 9, in this order: `title`, `warmup`,
`vocabulary`, `phrases`, `activity`, `speaking`, `reading`, `writing`,
`review`. This fixed shape assumes a lesson built around a fixed
vocabulary/grammar target and does not apply to C1/C2 — see the C1/C2
section below.

- **vocabulary** is a fixed 2×2 grid — exactly 4 words. If a lesson plan
  gives more than 4, pick the 4 most central/reused ones and don't change
  the grid.
- **activity** is fill-in-the-blank with a fixed word bank: dialogue lines
  use `[bracketed]` words, and a top-level `"blanks"` array lists the same
  words (shuffled client-side) as draggable chips.
- **speaking** is open-blank role play: dialogue lines use `___` (or the
  literal word `blank`), plus a `"note"` about switching roles.
- **phrases** is teacher/student example lines, rendered as an interleaved
  chat thread (not a fill-in-blank).
- Most lesson plans you're handed won't map 1:1 onto these 9 — you'll often
  need to split one plan slide into two of ours, or add a slide type the
  plan didn't include (most commonly Activity). Make a reasonable call,
  then tell the user what you did and why, so they can correct it.
- If a plan is missing a final "challenge" line on the review slide, draft
  one yourself rather than leaving it out — every lesson so far has one.
- Images are **intentionally left blank** (no `image_url`) across all
  current lessons until the user generates illustrations in bulk. Don't add
  placeholder/stock images without being asked.

## The 4 slide types for C1/C2 lessons

C1/C2 content (see `docs/curriculum/c1-adults.md`, `c2-adults.md`,
`c1-teens.md` and their matching `*-teacher-guidance.md` files) is built
around 9-lesson units and Performance/Model/Output mode blocks, not a
fixed vocabulary/grammar target — the 9 slide types above don't fit it
(no vocabulary grid, no fill-in-blank target). Each C1/C2 lesson instead
gets exactly 4 slides, in this order: `scenario`, `diagnosis`, `upgrade`,
`transfer`. These map directly onto the teacher-guidance doc fields for
that lesson:

- **scenario** — `{ mode, patterns, purpose, elicit }`. `mode` is
  Performance/Model/Output (colors the badge); `patterns` is the
  canonical Speaking Simulator pattern name(s); `purpose`/`elicit` come
  straight from the teacher-guidance doc.
- **diagnosis** — `{ listenFor, likelyResponses: [...], scorecardFocus:
  [{dimension, note}, ...] }`. `likelyResponses` is the "likely strong-B2/
  C1 responses" quotes; `scorecardFocus` is the 1–3 Scorecard dimensions
  named in the guidance, each with its short parenthetical note.
- **upgrade** — `{ upgradePath, interventionPrompts: [...] }`. Copy the
  upgrade-path text and the exact intervention lines verbatim from the
  guidance doc.
- **transfer** — `{ extension, recovery }`.

No `lesson.age_track` gating in these components — the same visual
treatment (editorial serif/sans, mode-color-coded badges: Performance
terracotta, Model slate, Output green) is used for Adults and Teens
C1/C2 alike, since neither is the Kids-style bouncy theme. Components:
`src/slides/Slide{Scenario,Diagnosis,Upgrade,Transfer}.jsx`, registered
in `LessonPlayer.jsx`'s `SLIDE_COMPONENTS`/`SLIDE_TYPE_LABELS` maps.
Verified via a temporary local harness (not committed), same pattern as
the Adults theme check.

`duration_minutes` for C1/C2 lessons is an estimated 20 (a single
narrow-focus mode-block segment, not a full standalone class) — there's
no authoritative number from the framework docs; adjust if it doesn't
match how these actually run in class.

## SQL script conventions

- Generate a fresh UUID per lesson: `python3 -c "import uuid; print(uuid.uuid4())"`.
- Use PostgreSQL dollar-quoting (`$json$ ... $json$::jsonb`) for every
  `content` blob — dialogue text is full of apostrophes ("don't", "I'm",
  "let's") and dollar-quoting avoids manual escaping entirely. Only plain
  (non-JSON) string literals need the standard `''` doubling.
- Validate before handing off — extract each `$json$...$json$` block and run
  it through `json.loads` in Python, and sanity-check parens/semicolons
  balance. Don't hand the user unvalidated SQL.
- The user runs scripts themselves in the Supabase SQL editor. Don't expect
  write access; don't ask for a service-role key.

## CEFR alignment

Check new lesson content against the Can-Do Goals shown on the level
overview page (`src/LevelPage.jsx`, `LEVEL_DATA[level].goals`) — those are
the real CEFR descriptors for that level. Two things to actively watch for:

- Don't let Reading/Writing/Speaking slides require vocabulary or sentence
  patterns that haven't been taught yet in that same lesson's Vocabulary/
  Phrases slides (this happened once already — Lesson 1 asked for age and
  country before either was taught; fixed in `unit1_cefr_fixes.sql`).
- Keep grammar within the level's actual CEFR band (A1 = present simple
  only, no past/future, no complex clauses).

## Git workflow

- Only stage the files actually touched for the task (never `git add -A`) —
  there are long-standing stray files in the repo root (`fix_*.py`, `.claude/`)
  that predate this work and aren't part of it.
- Commit and push once a change is verified (lint/build, and a browser
  preview check for anything UI-facing). No need to ask before pushing —
  that's already standing project preference.

## Status

**A1 · Kids**
- Unit 1 (6/6 lessons) — Hello & My Name, My Age, My Family, My Likes, All
  About Me, What Can You Say? (assessment). Complete, CEFR-checked,
  titles finalized. No images yet.
- Unit 2 (7/7 lessons) — My Morning, Breakfast Time, Go to School, My
  Afternoon, My Evening, All About My Day (review), My Day Check
  (assessment). A full-day routine story. Complete, all run in Supabase.
  No images yet.
- Unit 3+ — not started.
- Teacher's Guide page live at `/teacher-guide/:level/:track` (see
  `src/TeacherGuide.jsx`), linked from the Lessons Grid header. Opens in
  a new tab; respects the active unit filter (`?unit=N`), or shows all
  units when "All units" is selected. Covers A1 Kids Units 1–2 so far;
  extend the `GUIDES` object there as new units/tracks are built.

**A2 · Adults**
- Unit 1 (1 lesson) — My Workday as a Photographer (`lesson14_insert.sql`).
  Communication-first present simple: routines, frequency adverbs, work
  vocabulary (start/meet/edit/send), error correction. Not run in Supabase
  yet — user runs the script. No images yet (prompts given separately,
  not stored in content). Teacher's Guide page not extended for this
  track yet.
- This is the first Adults-track lesson. Added a real "adults" visual
  theme (serif headings via 'Source Serif 4', 'Inter' body, muted
  navy/terracotta/cream palette, flat editorial chrome — no Fredoka,
  no candy colors, no bounce) to `LessonPlayer.jsx` and every
  `src/slides/Slide*.jsx` component, gated on `lesson.age_track ===
  "adults"`. Kids/Teens rendering is untouched — verified via a
  temporary local harness (not committed) rendering all 9 slide types
  with `age_track: "adults"` mock data.
- Unit 2+ — not started.

**B1** — not started.

**C1 · Adults**
- Unit 1, Lesson 1 (1/54 lessons) — "Taking a Quick Position"
  (`lesson15_insert.sql`), pilot lesson for the new C1/C2 slide types.
  Not run in Supabase yet — user runs the script. Content sourced
  directly from `docs/curriculum/c1-adults.md` and
  `c1-adults-teacher-guidance.md` (Unit 1, Lesson 1).
- This introduced the 4 new C1/C2 slide types (`scenario`, `diagnosis`,
  `upgrade`, `transfer`) — see the section above. Awaiting user
  confirmation on this pilot before generating the remaining 152 C1/C2
  lessons (Adults C1 Units 2–6, Adults C2 all 5, Teens C1 all 6).
- Teacher's Guide page not extended for C1/C2 — the teacher-guidance
  docs already serve that role for this track in much more detail than
  the `GUIDES` object format supports; not planning to duplicate them
  there unless asked.

**C2** — not started in the app (content + teacher guidance complete in
`docs/curriculum/`).

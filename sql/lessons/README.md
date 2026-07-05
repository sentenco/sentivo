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

## The 9 slide types (slide_number 1–9)

Every lesson has all 9, in this order: `title`, `warmup`, `vocabulary`,
`phrases`, `activity`, `speaking`, `reading`, `writing`, `review`.

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
- Unit 1 (5/5 lessons) — Hello & My Name, My Age, My Family, My Likes, All
  About Me. Complete, CEFR-checked, titles finalized. No images yet.
- Unit 2+ — not started.

**A2–C2** — not started.

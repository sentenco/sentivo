# A1 Kids: Activity Mechanics Rotation (proposal)

## Problem this solves

Every A1 Kids lesson's Activity slide used the same interaction: drag word-bank
chips into blanks in a short chat. Rewording the dialogue (the earlier M/F/E/R
content rotation) didn't fix the sameness, because the mechanic a kid actually
touches never changed. This proposal replaces that with 5 genuinely different
interaction types, rotated across each unit's 4 non-review lessons, with the
Unit Review lesson combining all 4 used that unit.

## The 5 mechanics

| Mechanic | What the student does | Feedback |
|---|---|---|
| **Match** (M) | Tap an emoji, then tap its matching word | Instant -- pair locks green or flashes red |
| **Choice** (C) | Tap the correct answer from 2-3 cards | Instant -- card turns green/red |
| **Blank** (B) | Drag word-bank chips into blanks in a short chat | Check button -- per-blank green/red + retry |
| **Sort** (S) | Drag items into one of two labeled groups | Check button -- per-item green/red + retry |
| **Order** (O) | Drag items into the correct sequence | Check button -- per-slot green/red + retry |

Match/Choice are tap-only and self-validate instantly. Blank/Sort/Order are
drag-based, so each now has an explicit **Check** button plus a **Try Again**
reset -- per your note that drag activities need a way to check.

## Difficulty placement (matches the existing L1-L4 escalation)

- **L1** always uses **Match or Choice** -- pure tap, zero risk, matches L1's
  "notice/receptive" role.
- **L4** always uses **Order, Sort, or Blank** -- the mechanics that demand more
  active construction/judgment, matching L4's "most independent" role.
- L2/L3 fill in with whichever 2 mechanics are left for that unit.
- Each unit uses 4 of the 5 mechanics (one "rests" each unit) so units don't
  feel identical to each other either -- not just lesson-to-lesson.

## The 12-unit matrix

| Unit | L1 | L2 | L3 | L4 | Resting this unit |
|---|---|---|---|---|---|
| 1  | Match  | Choice | Blank  | Sort   | Order  |
| 2  | Choice | Match  | Blank  | Order  | Sort   |
| 3  | Match  | Order  | Choice | Sort   | Blank  |
| 4  | Choice | Sort   | Order  | Blank  | Match  |
| 5  | Match  | Blank  | Sort   | Order  | Choice |
| 6  | Choice | Match  | Sort   | Blank  | Order  |
| 7  | Match  | Order  | Choice | Blank  | Sort   |
| 8  | Choice | Sort   | Match  | Order  | Blank  |
| 9  | Choice | Blank  | Order  | Sort   | Match  |
| 10 | Match  | Order  | Sort   | Blank  | Choice |
| 11 | Match  | Choice | Sort   | Blank  | Order  |
| 12 | Choice | Blank  | Match  | Order  | Sort   |

Every mechanic appears 9-10 times across the 12 units and rests 2-3 times; no
unit repeats another unit's exact L1-L4 sequence.

## Unit Review (L5)

Stays the `mixed` mode already built: a 4-part mini-stepper ("Part 1/4 ·
Match", "Part 2/4 · Choice", ...) walking through one condensed instance of
each of that unit's 4 mechanics, in the same L1->L4 order, reusing that
unit's own vocabulary/theme. Kids who've done L1-L4 will recognize every part.

## What doesn't change

- Vocabulary, Reading, Writing, Phrases, Warmup, Review checklist -- untouched.
- Vocabulary stays a picture-word grid; Phrases stays a scripted mini-dialogue;
  Speaking stays open-ended partner practice. Only the **Activity** slide's
  mechanic is being replaced per this doc.
- The 9-slide-per-lesson schema and slide order stay exactly as-is.

## Next step if approved

Rewrite all 60 A1 Kids lessons' `activity` slide content (only) to the mode
above, generating fresh Match/Sort/Order/Choice/mixed content per lesson
(Blank slides get lighter surgery -- same dialogue shape as today, just adding
the Check-button data). Revalidate, rebuild `a1_kids_combined_all.sql`, commit.

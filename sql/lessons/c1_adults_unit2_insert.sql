-- Sentivo C1 Adults -- Unit 2: Mediation and Synthesis
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c1-adults.md and
-- c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e25ba097-9087-4805-941a-1be803bce105',
  'Finding Your Balanced Voice',
  'C1',
  'adults',
  2,
  1,
  'Introduce the mediator''s stance — neutral, balance-seeking — by contrast with Unit 1''s advocacy stance, before learners try to hold it themselves.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '547d84e1-ff75-4cfe-8429-8074024ad4dc',
  'How Do These Sources Relate?',
  'C1',
  'adults',
  2,
  2,
  'Practice summarizing two texts fairly and then explicitly linking or contrasting them — the analytic half of mediation, prerequisite to Lesson 4''s written version.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f0114f6f-6aa2-42aa-8b8d-171945d4e991',
  'The Mediator''s Moves',
  'C1',
  'adults',
  2,
  3,
  'Map how a model mediator summarizes, checks understanding, and proposes options — the exact three moves Lesson 9 (Performance) will require live.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6bd41a97-31e5-40f4-86b2-5cd897260c50',
  'Writing a Fair Brief',
  'C1',
  'adults',
  2,
  4,
  'Write a mediation brief for a decision-maker that explains both sides and recommends a next step — building directly on Lessons 1–3''s neutrality and summarizing skills, now in writing with careful attribution.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8959082e-0fb9-4eb4-8d0a-5bae4e9a2769',
  'Summarizing an Agreement',
  'C1',
  'adults',
  2,
  5,
  'Record a compromise, its reasoning, and any conditions for readers who weren''t in the room — extends Lesson 4''s neutral register into recording an already-reached agreement rather than recommending one.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0e34fccf-863f-4c88-9859-003d8a1b8b79',
  'Spotting the Pattern',
  'C1',
  'adults',
  2,
  6,
  'Synthesize across multiple mediation cases into a reflective piece about how to handle a *type* of conflict, not just one instance — the unit''s shift from case-mediation to pattern-recognition.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '80bac7fa-2ff8-4bc3-9379-0e8cfba2fab3',
  'Staying Neutral Under Pressure',
  'C1',
  'adults',
  2,
  7,
  'Return neutrality to live, unscripted speech under time pressure — harder than the guided Model/Output work because there''s no text to lean on.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '256909a3-4277-4bb5-a985-ce990e38f76b',
  'Challenged From Both Sides',
  'C1',
  'adults',
  2,
  8,
  'Hold a mediating position — not an advocacy position — while being challenged from both sides at once, the hardest interaction-control task in the unit.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '54fc5999-9cab-4693-b89d-71a5b4048ecf',
  'The Middle Ground',
  'C1',
  'adults',
  2,
  9,
  'Close the unit by articulating a middle ground live and under time pressure — the full synthesis of everything mediated in Lessons 1–8.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e25ba097-9087-4805-941a-1be803bce105',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a short model that frames both sides of an issue without taking one. Then give your own 30-second opinion turn on a new topic — deliberately emphasize balance, not advocacy."
}$json$::jsonb,
  true
),
(
  'e25ba097-9087-4805-941a-1be803bce105',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Introduce the mediator's stance — neutral, balance-seeking — by contrast with Unit 1's advocacy stance, before learners try to hold it themselves.",
  "listenFor": "Whether the \"balanced\" turn secretly still argues for one side (a common failure mode — learners default to advocacy because that's what Unit 1 trained); whether both sides get comparable verbal space.",
  "likelyResponses": [
    "Some people think A, but I think B is better."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "suppressing stance leakage"
    },
    {
      "dimension": "Precision",
      "note": "accurately representing both positions"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e25ba097-9087-4805-941a-1be803bce105',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Hidden advocacy → genuine balance: replace \"but I think B is better\" with \"and the disagreement really comes down to...\" — locate the crux instead of picking a side.",
  "interventionPrompts": [
    "You just picked a side again — where's the sentence that stays neutral?",
    "Give both sides the same number of sentences. Count them.",
    "Don't end on your opinion — end on where the two views actually diverge."
  ]
}$json$::jsonb,
  true
),
(
  'e25ba097-9087-4805-941a-1be803bce105',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner mediate a topic where they have a strong personal opinion, to stress-test neutrality under real pressure.",
  "recovery": "If genuine balance feels impossible, let them draft it in writing first (slower, more controllable) before attempting it live."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '547d84e1-ff75-4cfe-8429-8074024ad4dc',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two short texts on the same disagreement. Summarize each one aloud, then say in one sentence exactly how they relate — do they agree, partially overlap, or directly conflict?"
}$json$::jsonb,
  true
),
(
  '547d84e1-ff75-4cfe-8429-8074024ad4dc',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Practice summarizing two texts fairly and then explicitly linking or contrasting them — the analytic half of mediation, prerequisite to Lesson 4's written version.",
  "listenFor": "Whether the relationship sentence is precise (not just \"they're different\") and whether the two summaries are genuinely independent rather than the second one just negating the first.",
  "likelyResponses": [
    "Text A says X and text B says the opposite."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "locating agreement/disagreement exactly"
    },
    {
      "dimension": "Discourse Control",
      "note": "structuring a two-source comparison"
    }
  ]
}$json$::jsonb,
  true
),
(
  '547d84e1-ff75-4cfe-8429-8074024ad4dc',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "\"the opposite\" → located divergence: \"Text A and B actually agree on the underlying problem — they only disagree on who should pay for the fix.\"",
  "interventionPrompts": [
    "'The opposite' isn't specific enough — what exactly do they disagree on?",
    "Is there anything these two sources actually agree on? Find it.",
    "Say the relationship in one sentence without using the word 'different.'"
  ]
}$json$::jsonb,
  true
),
(
  '547d84e1-ff75-4cfe-8429-8074024ad4dc',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third source that agrees with neither fully and ask where it fits.",
  "recovery": "Provide a simple relationship-type menu (agree / partially overlap / flatly conflict / talk past each other) and have the learner pick one before justifying it."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f0114f6f-6aa2-42aa-8b8d-171945d4e991',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will play or read a model mediation dialogue. Label each mediator turn as summarize, check, or propose — then explain what would go wrong if the mediator skipped the check step."
}$json$::jsonb,
  true
),
(
  'f0114f6f-6aa2-42aa-8b8d-171945d4e991',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how a model mediator summarizes, checks understanding, and proposes options — the exact three moves Lesson 9 (Performance) will require live.",
  "listenFor": "Whether learners can articulate *why* checking matters (not just spot it) — the risk of summarizing inaccurately and having neither party correct it.",
  "likelyResponses": [
    "The mediator asks if that's right."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "functional move labeling"
    },
    {
      "dimension": "Interaction Control",
      "note": "checking as a turn-management strategy"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f0114f6f-6aa2-42aa-8b8d-171945d4e991',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Push from spotting to functional understanding: \"What happens to the rest of the conversation if the mediator's summary was wrong and nobody caught it?\"",
  "interventionPrompts": [
    "Label this turn: is the mediator summarizing, checking, or proposing?",
    "Find the exact phrase the mediator uses to check understanding — what would you say instead?",
    "What's the risk of skipping the check?"
  ]
}$json$::jsonb,
  true
),
(
  'f0114f6f-6aa2-42aa-8b8d-171945d4e991',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners rewrite the dialogue with the check step removed and predict where it breaks down.",
  "recovery": "If labeling all three moves is too much at once, isolate \"check\" alone first — have them find every checking phrase in the transcript before attempting the other two labels."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6bd41a97-31e5-40f4-86b2-5cd897260c50',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a mediation brief (120-160 words) that names both parties' positions accurately, attributes each claim to the right side, and closes with a neutral-toned recommendation."
}$json$::jsonb,
  true
),
(
  '6bd41a97-31e5-40f4-86b2-5cd897260c50',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a mediation brief for a decision-maker that explains both sides and recommends a next step — building directly on Lessons 1–3's neutrality and summarizing skills, now in writing with careful attribution.",
  "listenFor": "Misattribution (crediting a claim to the wrong side); a recommendation that suddenly breaks neutral tone after two paragraphs of careful balance.",
  "likelyResponses": [
    "A fairly balanced two-paragraph summary that ends with \"I think we should just go with what Team A wants\" — tone snaps from neutral-analytic to personal-casual in the last line."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "attribution accuracy"
    },
    {
      "dimension": "Register Control",
      "note": "sustained neutral-analytic tone through to the recommendation"
    }
  ]
}$json$::jsonb,
  true
),
(
  '6bd41a97-31e5-40f4-86b2-5cd897260c50',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Tone snap → sustained register: replace \"I think we should just go with...\" with \"On balance, Team A's position better addresses the immediate risk, though Team B's cost concern should still be tracked.\"",
  "interventionPrompts": [
    "Check every sentence — whose claim is this, and did you say so?",
    "Your recommendation sentence sounds like a different person wrote it — match the tone of the paragraph before it.",
    "Acknowledge the losing side's point even while recommending against it."
  ]
}$json$::jsonb,
  true
),
(
  '6bd41a97-31e5-40f4-86b2-5cd897260c50',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner write the same brief for an audience that already favors one side, keeping the analysis identical but adjusting how the recommendation is framed.",
  "recovery": "If attribution keeps slipping, have the learner literally label each sentence \"[A]\" or \"[B]\" in a draft before smoothing it into prose."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8959082e-0fb9-4eb4-8d0a-5bae4e9a2769',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a decision summary (100-140 words) covering: what was agreed, why, and any conditions attached to it."
}$json$::jsonb,
  true
),
(
  '8959082e-0fb9-4eb4-8d0a-5bae4e9a2769',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Record a compromise, its reasoning, and any conditions for readers who weren't in the room — extends Lesson 4's neutral register into recording an already-reached agreement rather than recommending one.",
  "listenFor": "Whether conditions are stated as binding (\"provided that...\") rather than vague (\"hopefully...\"); whether the reasoning is present at all, or just the bare outcome.",
  "likelyResponses": [
    "Team A and Team B agreed to do X."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "explicit conditions"
    },
    {
      "dimension": "Discourse Control",
      "note": "outcome–reasoning–condition structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '8959082e-0fb9-4eb4-8d0a-5bae4e9a2769',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Bare outcome → reasoned record: add \"...on the grounds that it addressed both the timeline risk and the budget concern, provided that costs are reviewed again in Q2.\"",
  "interventionPrompts": [
    "An absent reader needs to know *why* — where's that sentence?",
    "Is this agreement conditional on anything? Say the condition explicitly, not just implied.",
    "Cut anything that isn't outcome, reasoning, or condition."
  ]
}$json$::jsonb,
  true
),
(
  '8959082e-0fb9-4eb4-8d0a-5bae4e9a2769',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a short \"what happens if the condition isn't met\" clause.",
  "recovery": "Supply the three-part frame (Decision: ___ / Reasoning: ___ / Condition: ___) for a first draft, then have them rewrite it as connected prose."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0e34fccf-863f-4c88-9859-003d8a1b8b79',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a reflective piece (about 150 words) on how to handle a recurring type of conflict — for example, when priorities clash between departments. Draw on the patterns you've noticed across this unit."
}$json$::jsonb,
  true
),
(
  '0e34fccf-863f-4c88-9859-003d8a1b8b79',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Synthesize across multiple mediation cases into a reflective piece about how to handle a *type* of conflict, not just one instance — the unit's shift from case-mediation to pattern-recognition.",
  "listenFor": "Whether the piece stays at the level of one example (a case study) or actually generalizes to a pattern; whether any general claim is still backed by a concrete illustration.",
  "likelyResponses": [
    "A piece that retells one specific conflict in detail without ever stepping back to say what it illustrates more broadly."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "generalization/exemplification structures — \"tends to,\" \"more often than not\""
    },
    {
      "dimension": "Discourse Control",
      "note": "pattern-then-example architecture"
    }
  ]
}$json$::jsonb,
  true
),
(
  '0e34fccf-863f-4c88-9859-003d8a1b8b79',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Single-case retelling → generalized pattern with example: add a framing sentence (\"This kind of conflict usually comes down to unclear ownership, not bad intent\") before or after the illustrative case.",
  "interventionPrompts": [
    "This is one story — what's the general pattern it's an example of?",
    "State the pattern first, in one sentence, then use your example to support it.",
    "Don't lose the concrete detail entirely — a pure abstraction is just as weak as a pure anecdote."
  ]
}$json$::jsonb,
  true
),
(
  '0e34fccf-863f-4c88-9859-003d8a1b8b79',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Ask for a second, different example of the same pattern to confirm it generalizes.",
  "recovery": "If generalizing feels too abstract, ask directly: \"If this happened again with different people, what would probably still be true?\" — their answer usually is the pattern sentence."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '80bac7fa-2ff8-4bc3-9379-0e8cfba2fab3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Give a quick personal take on this: who should decide school reopening policy — parents, teachers, or government? Then immediately reformulate your answer to sound more neutral."
}$json$::jsonb,
  true
),
(
  '80bac7fa-2ff8-4bc3-9379-0e8cfba2fab3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Return neutrality to live, unscripted speech under time pressure — harder than the guided Model/Output work because there's no text to lean on.",
  "listenFor": "Whether the live, unprepared version is noticeably less neutral than the written work from Lessons 4–6 (expected — this is the point of the lesson, not a failure).",
  "likelyResponses": [
    "Honestly I think parents should decide, because teachers don't know each family."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "neutral framing that doesn't sound stilted"
    },
    {
      "dimension": "Pragmatics",
      "note": "acknowledging opposing concerns credibly"
    }
  ]
}$json$::jsonb,
  true
),
(
  '80bac7fa-2ff8-4bc3-9379-0e8cfba2fab3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Raw opinion → framed-as-complexity: \"There's a real tension here between local family knowledge and consistent public-health judgment — I lean toward parents having more say, but I get why that worries public-health people.\"",
  "interventionPrompts": [
    "That was a straight opinion — now reframe it as: 'there's a tension between X and Y.'",
    "Say what worries the side you disagree with, in their own terms.",
    "Keep your lean, but surround it with the complexity you just skipped."
  ]
}$json$::jsonb,
  true
),
(
  '80bac7fa-2ff8-4bc3-9379-0e8cfba2fab3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Push to a second, more polarizing topic to see if the framing move holds up under stronger personal pull.",
  "recovery": "If the reformulation just repeats the original opinion with softer words, supply the frame \"There's a real tension between ___ and ___\" as a sentence starter."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '256909a3-4277-4bb5-a985-ce990e38f76b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Propose how to handle a conflict. Two partners will challenge you, one from each side's perspective, in quick succession — hold your mediating position without switching sides."
}$json$::jsonb,
  true
),
(
  '256909a3-4277-4bb5-a985-ce990e38f76b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Hold a mediating position — not an advocacy position — while being challenged from both sides at once, the hardest interaction-control task in the unit.",
  "listenFor": "Whether the learner drifts into defending one side once challenged (common under pressure); whether they can absorb challenge from both directions without contradicting their own prior statement.",
  "likelyResponses": [
    "After being pushed by side A: \"Okay, maybe you're right, we should prioritize that instead.\" (fully caves to whichever side just spoke — loses the mediating position entirely.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "holding a position under bidirectional pressure"
    },
    {
      "dimension": "Pragmatics",
      "note": "face-saving for both challengers"
    }
  ]
}$json$::jsonb,
  true
),
(
  '256909a3-4277-4bb5-a985-ce990e38f76b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Full cave → held position with acknowledgment: \"That's a fair concern, and I'd factor it in, but I don't think it changes the overall balance I proposed.\"",
  "interventionPrompts": [
    "You just switched sides — what happened to your original proposal?",
    "Acknowledge the concern without abandoning your position. Try again.",
    "Say what would actually need to change for you to revise your proposal."
  ]
}$json$::jsonb,
  true
),
(
  '256909a3-4277-4bb5-a985-ce990e38f76b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have both challengers push simultaneously (overlapping turns) to raise the difficulty further.",
  "recovery": "If the learner freezes, let them use a stalling-but-controlled phrase (\"Let me take those one at a time...\") to buy processing time without losing the floor."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '54fc5999-9cab-4693-b89d-71a5b4048ecf',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You have 60-90 seconds. Propose a middle-ground resolution to a conflict, addressed to both parties at once."
}$json$::jsonb,
  true
),
(
  '54fc5999-9cab-4693-b89d-71a5b4048ecf',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Close the unit by articulating a middle ground live and under time pressure — the full synthesis of everything mediated in Lessons 1–8.",
  "listenFor": "Whether the middle ground is a real synthesis (takes something from both sides) or just a vague non-answer (\"let's all just compromise somehow\").",
  "likelyResponses": [
    "I think you should both just meet in the middle."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "concrete proposal structure"
    },
    {
      "dimension": "Interaction Control",
      "note": "closing decisively under time pressure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '54fc5999-9cab-4693-b89d-71a5b4048ecf',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Empty compromise → specified middle ground: \"Team A keeps the earlier deadline, Team B gets the extra reviewer they asked for — that addresses the main concern on both sides.\"",
  "interventionPrompts": [
    "'Meet in the middle' isn't a proposal — what does that actually look like?",
    "Name one thing each side gets to keep.",
    "Say it as a single sentence both sides could sign off on."
  ]
}$json$::jsonb,
  true
),
(
  '54fc5999-9cab-4693-b89d-71a5b4048ecf',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Introduce a late complication (one side reveals a new constraint) and require the proposal to be revised on the spot.",
  "recovery": "If the proposal stays vague, ask directly: \"What's one concrete thing you'd give Team A, and one concrete thing you'd give Team B?\" and build the sentence from those two answers."
}$json$::jsonb,
  true
);

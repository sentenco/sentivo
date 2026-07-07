-- Sentivo C1 Adults -- Unit 1, Lessons 2-9: Argument and Disagreement
-- Continues the pilot lesson (Lesson 1, already live). Content sourced
-- from docs/curriculum/c1-adults.md and c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'daabeed4-b8b5-4eaa-901c-483a268f83d3',
  'Holding Your Ground',
  'C1',
  'adults',
  1,
  2,
  'Practice holding, softening, or refining a position in real time when directly challenged — the core C1 skill of staying composed and precise under interpersonal pressure.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1aa76673-b22b-4a78-badd-10c8c4357da7',
  'Reaching an Agreement',
  'C1',
  'adults',
  1,
  3,
  'Move from defending one''s own opinion to reaching a joint decision when priorities conflict — introduces compromise language ahead of Unit 5''s full negotiation focus.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4dbafe9a-8f85-49cb-9711-e99ab6035314',
  'Notice the Shape of a Strong Opinion',
  'C1',
  'adults',
  1,
  4,
  'Shift from producing to noticing — analyze how a strong opinion piece or short talk opens, structures, and closes an argument, then reuse those moves in shorter framed turns.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '66398ae0-daa7-4645-b0d9-a3a44f4a7ae8',
  'Finding the Real Disagreement',
  'C1',
  'adults',
  1,
  5,
  'Practice fair, accurate summarizing of two opposing viewpoints before showing where they diverge — the core move of mediation, introduced here through guided analysis rather than free production.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5f08a84c-7731-4f62-ad7b-a2c47ee03155',
  'Reading a Negotiation',
  'C1',
  'adults',
  1,
  6,
  'Map how a model speaker proposes, concedes, and reframes during a decision dialogue, building the pattern vocabulary Lesson 3 used more instinctively.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1aea4455-c3f0-43f6-a8ab-a9c4ecf5a227',
  'Writing a Mediation Note',
  'C1',
  'adults',
  1,
  7,
  'Transfer the Lesson 5 mediation skill into writing — a short note that fairly frames a dispute and recommends a balanced course of action for a reader who wasn''t present.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b2ae215-c00b-445a-ba52-77b7986e0526',
  'Recording a Decision',
  'C1',
  'adults',
  1,
  8,
  'Write up the outcome of a negotiation (like Lesson 3''s) for stakeholders who weren''t in the room — requires stating not just the decision but the reasoning and trade-offs accepted.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '89caccb1-93fb-4728-b01a-29f618573fa8',
  'Writing Your Argument',
  'C1',
  'adults',
  1,
  9,
  'Close the unit by converting a spoken stance (Lesson 1-style) into a structured written opinion or reflection piece — the unit''s full speaking-to-writing arc completes here.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'daabeed4-b8b5-4eaa-901c-483a268f83d3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "State your position on smartphones in meetings from last lesson. Your partner will push back with a pointed objection — respond within a few seconds, holding your ground or adjusting it."
}$json$::jsonb,
  true
),
(
  'daabeed4-b8b5-4eaa-901c-483a268f83d3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Practice holding, softening, or refining a position in real time when directly challenged — the core C1 skill of staying composed and precise under interpersonal pressure.",
  "listenFor": "Does the learner concede too fast (abandons position) or too slow (repeats the same point louder)? Do they acknowledge the challenge before responding? Is the pushback response substantive or just a hedge?",
  "likelyResponses": [
    "No, I don't agree, I still think remote work is better.",
    "Yes but, um, not everyone has a good place to work at home."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "face-saving, tact"
    },
    {
      "dimension": "Interaction Control",
      "note": "recovering/holding a turn under challenge"
    }
  ]
}$json$::jsonb,
  true
),
(
  'daabeed4-b8b5-4eaa-901c-483a268f83d3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Flat disagreement → acknowledged disagreement: \"No, I don't agree\" → \"That's fair, but I'd still say...\" Bare concession → conditional concession: \"Not everyone has a good place\" → \"You're right that it depends on the setup — for people without a proper workspace, the case weakens.\"",
  "interventionPrompts": [
    "Don't say 'no' first — acknowledge what's true in their point, then push back.",
    "Give me a condition under which you'd actually change your mind.",
    "That was a full retreat — find one part of your original point you can still defend."
  ]
}$json$::jsonb,
  true
),
(
  'daabeed4-b8b5-4eaa-901c-483a268f83d3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Partner issues a second, sharper challenge that specifically targets the concession just made.",
  "recovery": "If the student goes silent, supply a starter: \"That's a fair point, but...\" and let them complete it before retrying unaided."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1aa76673-b22b-4a78-badd-10c8c4357da7',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You and your partner each have a different priority. Choose between two options with real trade-offs and agree on one — you have 3 minutes."
}$json$::jsonb,
  true
),
(
  '1aa76673-b22b-4a78-badd-10c8c4357da7',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Move from defending one's own opinion to reaching a joint decision when priorities conflict — introduces compromise language ahead of Unit 5's full negotiation focus.",
  "listenFor": "Whether learners propose (not just object), whether they name the trade-off explicitly, whether the final agreement is stated clearly by both sides.",
  "likelyResponses": [
    "I think we should choose A because it's cheaper.",
    "Okay, maybe B is also fine."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "proposing/conceding structure"
    },
    {
      "dimension": "Interaction Control",
      "note": "closing a negotiation cleanly"
    }
  ]
}$json$::jsonb,
  true
),
(
  '1aa76673-b22b-4a78-badd-10c8c4357da7',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Bare proposal → justified proposal with a concession offered up front: \"I think we should choose A\" → \"I'd lean toward A for the cost — I know that means slower delivery, which I can live with if you can.\" Vague agreement → explicit agreement: \"maybe B is also fine\" → \"Let's go with B, on the condition that we revisit cost in a month.\"",
  "interventionPrompts": [
    "Name the trade-off out loud before you propose.",
    "Don't just agree — restate what you're each giving up.",
    "Close it: say the final decision in one sentence you both confirm."
  ]
}$json$::jsonb,
  true
),
(
  '1aa76673-b22b-4a78-badd-10c8c4357da7',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third, higher-stakes priority card mid-negotiation and have them re-open the agreement.",
  "recovery": "If neither proposes, prompt one side directly: \"You go first — what's your opening offer?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4dbafe9a-8f85-49cb-9711-e99ab6035314',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a strong opinion example with you. Notice how it states its stance, gives two reasons, acknowledges a counterpoint, and restates its stance — then give your own 30-second opinion on a new topic using the same shape."
}$json$::jsonb,
  true
),
(
  '4dbafe9a-8f85-49cb-9711-e99ab6035314',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Shift from producing to noticing — analyze how a strong opinion piece or short talk opens, structures, and closes an argument, then reuse those moves in shorter framed turns.",
  "listenFor": "Can learners name what the model does at each stage (not just \"it's a good argument\")? Do their own framed turns borrow the structural moves (not just the topic)?",
  "likelyResponses": [
    "The speaker gives their opinion and then says two reasons."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "signposting, concession placement"
    },
    {
      "dimension": "Advanced Range",
      "note": "noticing, not yet producing, contrastive framing"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4dbafe9a-8f85-49cb-9711-e99ab6035314',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Push noticing past \"reasons\" toward discourse moves: where does the speaker signal a shift to the counterpoint (\"That said,\" \"To be fair,\")? How do they close without just repeating the opening line?",
  "interventionPrompts": [
    "Find the sentence where the speaker admits the other side has a point. What word signals that shift?",
    "The ending isn't just a repeat — what's different about how it's said the second time?",
    "Now do the same shape, your topic, 30 seconds."
  ]
}$json$::jsonb,
  true
),
(
  '4dbafe9a-8f85-49cb-9711-e99ab6035314',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compare two models with different structures (one concedes early, one concedes late) and ask which is more persuasive and why.",
  "recovery": "If annotation stalls, give a partially-filled structure map (stance / reason 1 / reason 2 / ___ / close) and have them find just the missing piece."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '66398ae0-daa7-4645-b0d9-a3a44f4a7ae8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two short contrasting texts on one issue. Summarize both sides fairly, out loud, then state exactly where they disagree — not just that they disagree."
}$json$::jsonb,
  true
),
(
  '66398ae0-daa7-4645-b0d9-a3a44f4a7ae8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Practice fair, accurate summarizing of two opposing viewpoints before showing where they diverge — the core move of mediation, introduced here through guided analysis rather than free production.",
  "listenFor": "Loaded language that reveals the learner's own bias while \"summarizing\"; whether the disagreement point is precisely located (not just \"they disagree\").",
  "likelyResponses": [
    "One person thinks it's good and the other person thinks it's bad."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "locating the exact point of divergence"
    },
    {
      "dimension": "Pragmatics",
      "note": "neutral framing, avoiding leaked stance"
    }
  ]
}$json$::jsonb,
  true
),
(
  '66398ae0-daa7-4645-b0d9-a3a44f4a7ae8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague opposition → precisely located disagreement: \"one thinks good, one thinks bad\" → \"they actually agree the policy helps efficiency — the real disagreement is over who bears the cost.\"",
  "interventionPrompts": [
    "Where exactly do they stop agreeing? Point to the sentence.",
    "You used 'obviously' just now — that's your opinion leaking in. Say it neutrally.",
    "Summarize side A in one sentence with no adjectives."
  ]
}$json$::jsonb,
  true
),
(
  '66398ae0-daa7-4645-b0d9-a3a44f4a7ae8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third source that partially agrees with each side and ask the learner to place it accurately.",
  "recovery": "If bias keeps leaking, have the learner summarize the side they personally disagree with first, out loud, before touching the other."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5f08a84c-7731-4f62-ad7b-a2c47ee03155',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will play or read you a model negotiation. Label each turn as propose, concede, reframe, or close — then explain what makes one concession sound genuine and another sound grudging."
}$json$::jsonb,
  true
),
(
  '5f08a84c-7731-4f62-ad7b-a2c47ee03155',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how a model speaker proposes, concedes, and reframes during a decision dialogue, building the pattern vocabulary Lesson 3 used more instinctively.",
  "listenFor": "Whether learners can distinguish a real concession from a token one; whether they notice reframing (restating the other's point in more workable terms) as distinct from just agreeing.",
  "likelyResponses": [
    "This person agrees with that person."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "labeling functional moves"
    },
    {
      "dimension": "Advanced Range",
      "note": "reframing language, conditional structures"
    }
  ]
}$json$::jsonb,
  true
),
(
  '5f08a84c-7731-4f62-ad7b-a2c47ee03155',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Push toward the distinction: agreeing = accepting the point as-is; reframing = restating it in a way that opens a new option. Have them find one reframe and explain what changed.",
  "interventionPrompts": [
    "Is that a real concession or just a filler agreement? What's the difference?",
    "Find where someone takes the other person's complaint and turns it into a new option — that's reframing, not agreeing.",
    "Label all four moves in this exchange."
  ]
}$json$::jsonb,
  true
),
(
  '5f08a84c-7731-4f62-ad7b-a2c47ee03155',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners rewrite one grudging concession in the model to sound genuine, and one genuine one to sound grudging — compare what changed linguistically.",
  "recovery": "If labeling is inconsistent, restrict to just propose vs. concede first, add reframe once that distinction is solid."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1aea4455-c3f0-43f6-a8ab-a9c4ecf5a227',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a mediation note (120-160 words) about a dispute from this unit's topics, addressed to a named decision-maker. Represent both sides fairly, then recommend a next step."
}$json$::jsonb,
  true
),
(
  '1aea4455-c3f0-43f6-a8ab-a9c4ecf5a227',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Transfer the Lesson 5 mediation skill into writing — a short note that fairly frames a dispute and recommends a balanced course of action for a reader who wasn't present.",
  "listenFor": "Whether both sides get proportionate space (not one paragraph vs. one sentence); whether the recommendation follows logically from the stated trade-offs rather than appearing out of nowhere; register appropriate to a workplace note, not a casual opinion.",
  "likelyResponses": [
    "A note that summarizes both sides adequately but ends with \"So I think we should do A\" with no bridge from the trade-offs just described."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "earned conclusions, proportion"
    },
    {
      "dimension": "Register Control",
      "note": "professional written tone"
    }
  ]
}$json$::jsonb,
  true
),
(
  '1aea4455-c3f0-43f6-a8ab-a9c4ecf5a227',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unearned conclusion → earned conclusion: insert a transition that explicitly weighs the trade-offs before the recommendation (\"Given that cost matters more here than speed, ___\"). Casual closer (\"So I think...\") → professional closer (\"On balance, I'd recommend...\").",
  "interventionPrompts": [
    "Your recommendation appears with no bridge — add one sentence that weighs what you just described.",
    "'So I think' is too casual for this reader — try 'On balance' or 'Given the above.'",
    "Side B gets one sentence and side A gets four — even it out."
  ]
}$json$::jsonb,
  true
),
(
  '1aea4455-c3f0-43f6-a8ab-a9c4ecf5a227',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Rewrite the same note for a more senior/skeptical reader who will push back on the recommendation.",
  "recovery": "If the student can't bridge trade-off to recommendation, supply the connector phrase bank (\"Given that... / On balance... / Weighing both...\") and have them pick and complete one."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b2ae215-c00b-445a-ba52-77b7986e0526',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a short decision summary (100-140 words): what was decided, why, and one trade-off you knowingly accepted."
}$json$::jsonb,
  true
),
(
  '4b2ae215-c00b-445a-ba52-77b7986e0526',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write up the outcome of a negotiation (like Lesson 3's) for stakeholders who weren't in the room — requires stating not just the decision but the reasoning and trade-offs accepted.",
  "listenFor": "Whether the trade-off is stated as a trade-off (acknowledged cost) rather than omitted or buried; whether the summary reads as a record for someone who wasn't there, not a diary of the conversation.",
  "likelyResponses": [
    "We decided to choose A because it was cheaper."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "stating trade-offs exactly"
    },
    {
      "dimension": "Register Control",
      "note": "decision-record tone vs. conversational recount"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4b2ae215-c00b-445a-ba52-77b7986e0526',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Omitted trade-off → stated trade-off: add \"...though this means slower delivery, which we agreed was an acceptable cost given the budget.\" Conversational recount (\"we talked about...\") → decision record register (\"The team selected... on the basis that...\").",
  "interventionPrompts": [
    "A stakeholder reading this needs to know what you gave up — where's that sentence?",
    "'We talked about' is a narration of the meeting — this needs to read like a record, not a diary.",
    "Cut this by a third — decision summaries are read by busy people."
  ]
}$json$::jsonb,
  true
),
(
  '4b2ae215-c00b-445a-ba52-77b7986e0526',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a one-sentence contingency (\"if X happens, we'll revisit\") to the summary.",
  "recovery": "If the trade-off is missing, ask directly: \"What did the losing option have that this one doesn't?\" and have them write that sentence first."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '89caccb1-93fb-4728-b01a-29f618573fa8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a structured opinion piece (150-180 words) on a disagreement that comes up again and again, not a one-off dispute. Use the shape from Lesson 4: stance, two distinct reasons, an acknowledged counterpoint, then restate your stance with something new added."
}$json$::jsonb,
  true
),
(
  '89caccb1-93fb-4728-b01a-29f618573fa8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Close the unit by converting a spoken stance (Lesson 1-style) into a structured written opinion or reflection piece — the unit's full speaking-to-writing arc completes here.",
  "listenFor": "Whether the structure noticed in Lesson 4 actually shows up in the learner's own writing; whether the restated stance at the end adds something (nuance, condition) rather than just repeating the opening sentence verbatim.",
  "likelyResponses": [
    "A piece with a clear stance and two reasons but no counterpoint acknowledgment, and a closing sentence identical to the opening."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "full argument shape, earned closing"
    },
    {
      "dimension": "Advanced Range",
      "note": "concession framing, conditional restatement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '89caccb1-93fb-4728-b01a-29f618573fa8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Missing counterpoint → inserted concession paragraph using a Lesson 4-style signal (\"That said, / To be fair,\"). Repeated closer → earned closer: restate the stance with an added condition or consequence (\"...which is why, unless X changes, I'd still choose Y.\")",
  "interventionPrompts": [
    "Where's the sentence that admits the other side has a point? This piece doesn't have one yet.",
    "Your last sentence is your first sentence again — what can you add this time that you couldn't say at the start?",
    "Read Lesson 4's model closing again — what's different about how it restates the stance?"
  ]
}$json$::jsonb,
  true
),
(
  '89caccb1-93fb-4728-b01a-29f618573fa8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner write a one-paragraph rebuttal to their own piece, then a one-sentence response to that rebuttal.",
  "recovery": "If the counterpoint paragraph is missing under time pressure, allow it as a single added sentence rather than a full paragraph — partial credit for the move, refine length next time."
}$json$::jsonb,
  true
);

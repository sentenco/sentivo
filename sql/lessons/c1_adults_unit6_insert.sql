-- Sentivo C1 Adults -- Unit 6: Register, Nuance, and Diplomatic Control
-- Mode order: Output -> Performance -> Model
-- Content sourced from docs/curriculum/c1-adults.md and
-- c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f23d7ab6-a43f-4d2c-8e93-bcff7a5a0b72',
  'Naming the Difference in Tone',
  'C1',
  'adults',
  6,
  1,
  'Write a short analytic note explaining how two messages differ in stance, tone, or register, and what would suit a target audience better — the unit''s diagnostic entry point.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '41ed617b-ae43-4c60-a1d8-d5db8af989fb',
  'Rewriting for Tact',
  'C1',
  'adults',
  6,
  2,
  'Rewrite a message so a decision, refusal, or condition is phrased with more tact, precision, and audience control.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f624b4b4-8f15-40fa-a709-96eb9ada12f2',
  'Shifting the Register',
  'C1',
  'adults',
  6,
  3,
  'Convert a spoken response into a piece showing deliberate register shifting — formalizing an informal point or softening an overly direct one.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f393b86a-1385-4412-bf3b-05fdd0c3aeaa',
  'Adjusting on Demand',
  'C1',
  'adults',
  6,
  4,
  'Respond quickly to sensitive prompts, then immediately reformulate to adjust strength, tact, certainty, or interpersonal tone.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '37a942b9-0769-49d0-92d5-1d3fb889ac1b',
  'Staying Diplomatic Under Pressure',
  'C1',
  'adults',
  6,
  5,
  'Defend or soften a position under pressure while practicing hedging, diplomatic disagreement, face-saving, and tone recalibration.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e3b17ed1-ab63-4094-93bc-199f77fa51cb',
  'The Decision Is Easy, the Phrasing Isn''t',
  'C1',
  'adults',
  6,
  6,
  'Work through a decision task where the challenge is not the content but how to phrase conditions, disagreement, and compromise appropriately — the unit''s core "form over substance" focus.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '27881680-6cea-4427-bee9-35e5c1aea417',
  'The Devices of Diplomacy',
  'C1',
  'adults',
  6,
  7,
  'Analyze model examples for stance-marking, hedging, tact, emphasis, understatement, and formality shifts.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8c2901ad-0baf-4560-b583-61cb7ef184b3',
  'Content and Tone, Separately',
  'C1',
  'adults',
  6,
  8,
  'Compare two texts/voices differing in tone or implied stance and brief a peer on how they differ not just in content but in register and interpersonal effect.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '068e6bd2-044d-402a-8ac2-d8724d97c01b',
  'Tactful or Weak? Finding the Line',
  'C1',
  'adults',
  6,
  9,
  'Notice how speakers soften claims, signal caution, disagree tactfully, and reframe sensitive points without sounding vague or weak — the unit''s and track''s closing synthesis point.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f23d7ab6-a43f-4d2c-8e93-bcff7a5a0b72',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Your teacher will give you two versions of the same message — one blunt, one tactful. Write a note (100-130 words) analyzing the difference and recommending which suits the stated audience."
}$json$::jsonb,
  true
),
(
  'f23d7ab6-a43f-4d2c-8e93-bcff7a5a0b72',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a short analytic note explaining how two messages differ in stance, tone, or register, and what would suit a target audience better — the unit's diagnostic entry point.",
  "listenFor": "Whether the analysis names specific linguistic features (hedges, modal choice, directness) or stays at the level of \"one is nicer than the other.\"",
  "likelyResponses": [
    "Message A sounds nicer and message B sounds rude."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "identifying specific tonal features"
    },
    {
      "dimension": "Register Control",
      "note": "matching register to a named audience"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f23d7ab6-a43f-4d2c-8e93-bcff7a5a0b72',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague judgment → feature-based analysis: \"Message A hedges the refusal with 'I'm afraid we're not able to at this time,' while B states it as a flat 'no' — that hedging is what reads as more tactful.\"",
  "interventionPrompts": [
    "What word or phrase makes A sound 'nicer'? Point to it.",
    "Is it the content that's different, or just how it's phrased?",
    "Name the specific hedge or softener being used."
  ]
}$json$::jsonb,
  true
),
(
  'f23d7ab6-a43f-4d2c-8e93-bcff7a5a0b72',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Provide a third message that's over-softened to the point of being unclear, and have the learner critique that failure mode too.",
  "recovery": "Give a short feature checklist (hedging, directness, personal pronouns, modal verbs) to scan for if analysis stays vague."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '41ed617b-ae43-4c60-a1d8-d5db8af989fb',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Your teacher will give you a blunt draft message — a refusal, a condition, or a difficult decision. Rewrite it with more tact and precision, keeping the same length and the same actual decision."
}$json$::jsonb,
  true
),
(
  '41ed617b-ae43-4c60-a1d8-d5db8af989fb',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Rewrite a message so a decision, refusal, or condition is phrased with more tact, precision, and audience control.",
  "listenFor": "Whether the rewrite actually preserves the original content and commitments (tact shouldn't blur the message) while softening delivery.",
  "likelyResponses": [
    "A rewrite so softened that the actual decision becomes unclear — tact achieved at the cost of the message itself."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "tact without ambiguity"
    },
    {
      "dimension": "Pragmatics",
      "note": "face-saving while preserving message clarity"
    }
  ]
}$json$::jsonb,
  true
),
(
  '41ed617b-ae43-4c60-a1d8-d5db8af989fb',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Over-softened/unclear → tactful-and-clear: keep the decision explicit (\"we won't be able to extend the deadline\") while softening only the framing around it, not the fact itself.",
  "interventionPrompts": [
    "Is the actual decision still clear in your rewrite? Check.",
    "You softened it so much I can't tell what you're actually saying — fix that.",
    "Tact changes the framing, not the content — keep the content intact."
  ]
}$json$::jsonb,
  true
),
(
  '41ed617b-ae43-4c60-a1d8-d5db8af989fb',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner rewrite the same message for a second, more senior audience requiring even more careful framing.",
  "recovery": "If clarity is lost, have the learner first state the bare decision in one blunt sentence, then add tact only around that fixed core."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f624b4b4-8f15-40fa-a709-96eb9ada12f2',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Take an informal stance you've stated out loud and rework it into a more formal register (120-150 words). Then add a few sentences on exactly what you changed."
}$json$::jsonb,
  true
),
(
  'f624b4b4-8f15-40fa-a709-96eb9ada12f2',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert a spoken response into a piece showing deliberate register shifting — formalizing an informal point or softening an overly direct one.",
  "listenFor": "Whether the reflection identifies actual linguistic changes (contractions removed, hedges added, vocabulary formalized) or just says \"I made it more formal.\"",
  "likelyResponses": [
    "I changed some words to make it sound more professional."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "demonstrated, not just claimed"
    },
    {
      "dimension": "Advanced Range",
      "note": "formal lexis, nominalisation, hedging"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f624b4b4-8f15-40fa-a709-96eb9ada12f2',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague self-report → specific linguistic accounting: \"I removed contractions, replaced 'a lot of people think' with 'there is broad consensus that,' and added a hedge before the strongest claim.\"",
  "interventionPrompts": [
    "Name three specific changes you made, not just 'more formal.'",
    "What's one word or phrase you specifically swapped, and why that swap?",
    "Could you do the reverse shift just as precisely?"
  ]
}$json$::jsonb,
  true
),
(
  'f624b4b4-8f15-40fa-a709-96eb9ada12f2',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner do a third version at an intermediate register, between the two extremes.",
  "recovery": "If specific accounting is hard, have the learner highlight the changed words/phrases directly on the page before describing them."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f393b86a-1385-4412-bf3b-05fdd0c3aeaa',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Respond live to a sensitive prompt — declining a request, or raising a concern with a superior. Then immediately reformulate it to be softer, more certain, or more tactful, whichever you're asked for."
}$json$::jsonb,
  true
),
(
  'f393b86a-1385-4412-bf3b-05fdd0c3aeaa',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Respond quickly to sensitive prompts, then immediately reformulate to adjust strength, tact, certainty, or interpersonal tone.",
  "listenFor": "Whether the reformulation actually shifts along the requested dimension, or just rephrases without changing the underlying register.",
  "likelyResponses": [
    "Asked to make it \"softer,\" the learner adds \"sorry\" or \"maybe\" without otherwise changing the sentence — a surface fix, not a real register shift."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "structural, not just lexical, softening"
    },
    {
      "dimension": "Advanced Range",
      "note": "indirect/hedged structures"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f393b86a-1385-4412-bf3b-05fdd0c3aeaa',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Surface softening → structural softening: replace a direct statement with a hedged/indirect structure (\"I wonder if we might reconsider...\" instead of \"I don't agree, sorry\").",
  "interventionPrompts": [
    "Adding 'sorry' isn't the same as softening the structure — try a different sentence shape.",
    "Say it again using 'I wonder if...' or 'it might be worth...'",
    "Now make that same sentence more direct again — show me you can go both ways."
  ]
}$json$::jsonb,
  true
),
(
  'f393b86a-1385-4412-bf3b-05fdd0c3aeaa',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Chain three reformulations in a row, each on a different requested dimension.",
  "recovery": "Supply 2–3 structural softening frames (\"I wonder if...\", \"it might be worth considering...\", \"one option could be...\") to plug into on request."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '37a942b9-0769-49d0-92d5-1d3fb889ac1b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Hold your position under sustained challenge — disagreeing with a superior, or declining a client's request. Stay diplomatic through every round, not just the first."
}$json$::jsonb,
  true
),
(
  '37a942b9-0769-49d0-92d5-1d3fb889ac1b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Defend or soften a position under pressure while practicing hedging, diplomatic disagreement, face-saving, and tone recalibration.",
  "listenFor": "Whether diplomatic tone holds under sustained (not just single) pressure — many learners manage one polite turn but crack by the second or third challenge.",
  "likelyResponses": [
    "Polite first response, then by the third challenge: \"Look, I already said no.\" (diplomatic control breaks down under sustained pressure — a realistic and expected pattern.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "sustained face-saving"
    },
    {
      "dimension": "Interaction Control",
      "note": "holding a position across multiple challenge rounds"
    }
  ]
}$json$::jsonb,
  true
),
(
  '37a942b9-0769-49d0-92d5-1d3fb889ac1b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Breakdown under sustained pressure → maintained control: \"I understand this is frustrating, and I want to help where I can, but the answer on this specific point hasn't changed.\"",
  "interventionPrompts": [
    "You held it together for one turn — the third challenge is where it matters. Try again.",
    "Acknowledge the frustration without abandoning the position.",
    "What's a phrase you can return to each time, so you don't run out of diplomatic language?"
  ]
}$json$::jsonb,
  true
),
(
  '37a942b9-0769-49d0-92d5-1d3fb889ac1b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Extend the challenge to five rounds instead of three to stress-test sustained control.",
  "recovery": "Give the learner one reusable \"anchor phrase\" (\"I hear you, and I want to find a way to help — but on this point specifically...\") they can return to whenever they feel control slipping."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e3b17ed1-ab63-4094-93bc-199f77fa51cb',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Deliver unwelcome news to a valued client while preserving the relationship. The decision itself is simple — the challenge is entirely in how you phrase it."
}$json$::jsonb,
  true
),
(
  'e3b17ed1-ab63-4094-93bc-199f77fa51cb',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Work through a decision task where the challenge is not the content but how to phrase conditions, disagreement, and compromise appropriately — the unit's core \"form over substance\" focus.",
  "listenFor": "Whether the learner focuses on getting the phrasing right under the assumption the content is simple, or gets distracted trying to solve the (easy) content problem instead.",
  "likelyResponses": [
    "A clear, correct decision delivered in blunt, undiplomatic phrasing — content is fine, form isn't."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "form independent of content difficulty"
    },
    {
      "dimension": "Pragmatics",
      "note": "relationship-preserving framing"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e3b17ed1-ab63-4094-93bc-199f77fa51cb',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Correct-but-blunt → correct-and-diplomatic: keep the decision, add relationship-preserving framing (\"we value this partnership, which is exactly why I want to be upfront that...\").",
  "interventionPrompts": [
    "The decision is fine — it's how you said it that needs work.",
    "How would you say this if you needed this client again next year?",
    "Add one sentence that protects the relationship without changing the decision."
  ]
}$json$::jsonb,
  true
),
(
  'e3b17ed1-ab63-4094-93bc-199f77fa51cb',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Repeat with a scenario where the content actually is hard, to contrast \"phrasing is the challenge\" vs. \"everything is the challenge.\"",
  "recovery": "If the learner fixates on the content, explicitly say \"the decision is already right — focus only on how you say it\" to redirect attention."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '27881680-6cea-4427-bee9-35e5c1aea417',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share model examples rich in diplomatic language. Identify the specific devices being used — hedges, understatement, emphasis markers — then reuse one in your own short response."
}$json$::jsonb,
  true
),
(
  '27881680-6cea-4427-bee9-35e5c1aea417',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze model examples for stance-marking, hedging, tact, emphasis, understatement, and formality shifts.",
  "listenFor": "Whether learners can name the device (not just its effect) — e.g. identifying \"somewhat\" as a downtoner, not just saying \"it sounds less strong.\"",
  "likelyResponses": [
    "This sentence sounds less certain."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "naming and using hedging/downtoning devices"
    },
    {
      "dimension": "Precision",
      "note": "device-level analysis"
    }
  ]
}$json$::jsonb,
  true
),
(
  '27881680-6cea-4427-bee9-35e5c1aea417',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Effect-noticing → device-naming: \"'Somewhat' and 'to some extent' are downtoners — they're what make the claim sound less certain, without changing the claim itself.\"",
  "interventionPrompts": [
    "What word is doing that work? Name it.",
    "Could you get the same effect with a different word or phrase?",
    "Use that same device in your own response now."
  ]
}$json$::jsonb,
  true
),
(
  '27881680-6cea-4427-bee9-35e5c1aea417',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners build a short personal reference list of downtoners/boosters they've identified across the unit.",
  "recovery": "Provide a short glossary of common hedging/downtoning devices to match against the model text if identification stalls."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8c2901ad-0baf-4560-b583-61cb7ef184b3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two texts on the same topic with different implied stances. Brief a partner on both — covering not just what they say, but how differently they say it."
}$json$::jsonb,
  true
),
(
  '8c2901ad-0baf-4560-b583-61cb7ef184b3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compare two texts/voices differing in tone or implied stance and brief a peer on how they differ not just in content but in register and interpersonal effect.",
  "listenFor": "Whether the briefing addresses register/stance at all, or collapses into a content-only summary (a recurring risk once content is present and salient).",
  "likelyResponses": [
    "A briefing that accurately compares what each text says but never mentions how each one says it."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "explicit content/tone separation"
    },
    {
      "dimension": "Discourse Control",
      "note": "dual-layer briefing structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '8c2901ad-0baf-4560-b583-61cb7ef184b3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Content-only → content-plus-register: add \"...and beyond the content, Text A comes across as more confident/certain, while Text B hedges more and leaves room for disagreement.\"",
  "interventionPrompts": [
    "You've covered what they say — now, how do they say it differently?",
    "Which one sounds more certain? What makes it sound that way?",
    "Brief me on tone specifically, separate from content."
  ]
}$json$::jsonb,
  true
),
(
  '8c2901ad-0baf-4560-b583-61cb7ef184b3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third text with a tone that contradicts its actual content (confident phrasing masking a weak claim) as a harder case.",
  "recovery": "If register keeps getting skipped, ask a forced-choice question first: \"which one sounds more certain?\" before asking for the full briefing."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '068e6bd2-044d-402a-8ac2-d8724d97c01b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model diplomatic disagreement. Map where the speaker softens, hedges, disagrees tactfully, or reframes — and find any moment where it tips from tactful into sounding weak."
}$json$::jsonb,
  true
),
(
  '068e6bd2-044d-402a-8ac2-d8724d97c01b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Notice how speakers soften claims, signal caution, disagree tactfully, and reframe sensitive points without sounding vague or weak — the unit's and track's closing synthesis point.",
  "listenFor": "Whether learners can identify the line between tactful and weak — a genuinely subtle C1/C2 judgment, not just spotting softening language in general.",
  "likelyResponses": [
    "This person is very polite."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "calibrating tact vs. weakness"
    },
    {
      "dimension": "Advanced Range",
      "note": "controlled vs. excessive hedging"
    }
  ]
}$json$::jsonb,
  true
),
(
  '068e6bd2-044d-402a-8ac2-d8724d97c01b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Broad politeness-noticing → precision judgment: \"Here, the hedge is doing real work — protecting the relationship while still making the point. But here, three hedges in one sentence start to bury the actual point — that's where it tips into sounding weak.\"",
  "interventionPrompts": [
    "Is this tactful, or has it become vague? Where's the line?",
    "Find a moment where hedging helps, and one where it's too much.",
    "Rewrite the over-hedged moment so it's tactful but still clear."
  ]
}$json$::jsonb,
  true
),
(
  '068e6bd2-044d-402a-8ac2-d8724d97c01b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners find or construct their own example of hedging that tips into weakness, as a diagnostic exercise for their own future writing/speech.",
  "recovery": "If the tactful/weak distinction is elusive, use a concrete test: \"if you removed one more hedge, would the point still be safe to make? if you added one more, would it disappear?\" — that boundary-testing usually locates the line."
}$json$::jsonb,
  true
);

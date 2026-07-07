-- Sentivo C1 Adults -- Unit 4: Presentation and Briefing
-- Mode order: Performance -> Model -> Output
-- Content sourced from docs/curriculum/c1-adults.md and
-- c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4fb1ab62-72b8-41ed-aa2f-3142a9053e79',
  'The Stand-Up Briefing',
  'C1',
  'adults',
  4,
  1,
  'Deliver a very short "stand-up" briefing under time pressure and immediately sharpen its narrative, audience framing, and call to action — the unit''s entry skill.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aceb6ae1-13da-4f71-b87d-b4f525f9f164',
  'Tough Questions From the Top',
  'C1',
  'adults',
  4,
  2,
  'Handle unscripted, skeptical Q&A from powerful stakeholders after a brief presentation — composure and concision under real social pressure.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c12695db-ee55-4399-b96e-ea80e60acdf3',
  'Presenting and Deciding',
  'C1',
  'adults',
  4,
  3,
  'Present options and then lead a decision-focused discussion that stays structured even as participants question assumptions and risks.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '70017df5-fe5d-481a-8808-34b721afe2ad',
  'Borrowing a Strong Structure',
  'C1',
  'adults',
  4,
  4,
  'Analyze a strong real-world high-stakes presentation for storyline, signposting, and Q&A strategy.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7a5c0ff9-b1c7-47bd-99f7-7715cebbe79e',
  'Comparing Presentations',
  'C1',
  'adults',
  4,
  5,
  'Compare presentation/briefing examples on similar issues and brief a peer on differences in tone, structure, and question-handling.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '72ae5273-959f-4eb4-be87-b2ee1ae8e5e4',
  'Handling the Room',
  'C1',
  'adults',
  4,
  6,
  'Study how a presenter in a board/steering-committee setting frames a decision, invites questions, and responds strategically to pushback.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '39bdfcf7-2fe5-40d7-98aa-82096002158d',
  'Building the Briefing',
  'C1',
  'adults',
  4,
  7,
  'Produce the written scaffold for a high-stakes presentation: context, stakes, key messages, anticipated questions, decision points.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1a10cdbd-ed04-4b48-b18d-8e0438d4e2b1',
  'Sequencing the Deck',
  'C1',
  'adults',
  4,
  8,
  'Design a slide sequence or script walking an audience through situation, options, risks, recommendation, with explicit Q&A/contingency slots.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '07d33fda-c6c1-43b3-bca0-e397ed8c89cd',
  'The Follow-Up',
  'C1',
  'adults',
  4,
  9,
  'Write a concise follow-up capturing questions raised, decisions made, and next steps — proof that Q&A outcomes were actually captured, not just survived.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4fb1ab62-72b8-41ed-aa2f-3142a9053e79',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Give a 45-60 second mini-briefing on a high-stakes topic — a change initiative, an incident, or a visible project. Then immediately reformulate it, sharper."
}$json$::jsonb,
  true
),
(
  '4fb1ab62-72b8-41ed-aa2f-3142a9053e79',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Deliver a very short \"stand-up\" briefing under time pressure and immediately sharpen its narrative, audience framing, and call to action — the unit's entry skill.",
  "listenFor": "Whether there's an identifiable call to action at all; whether the briefing opens with context (slow) or with the headline (fast).",
  "likelyResponses": [
    "A briefing that spends 30 of its 45 seconds on background before mentioning what's actually needed from the listener."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "headline-first structuring"
    },
    {
      "dimension": "Naturalness",
      "note": "briefing register vs. narrative register"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4fb1ab62-72b8-41ed-aa2f-3142a9053e79',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Context-first → headline-first: open with the ask or the key fact, then backfill only the context needed to support it.",
  "interventionPrompts": [
    "What do you need from me? Say that first, not last.",
    "Cut the background to one sentence — what's the minimum I need to understand the ask?",
    "Say it again, headline first."
  ]
}$json$::jsonb,
  true
),
(
  '4fb1ab62-72b8-41ed-aa2f-3142a9053e79',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compress the same briefing to 20 seconds.",
  "recovery": "If the ask never surfaces, ask directly: \"In one sentence, what do you want me to do?\" and build backward from that answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aceb6ae1-13da-4f71-b87d-b4f525f9f164',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "After your briefing, field 2-3 unscripted tough questions from a 'senior leadership' role-player. Stay composed and concise."
}$json$::jsonb,
  true
),
(
  'aceb6ae1-13da-4f71-b87d-b4f525f9f164',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Handle unscripted, skeptical Q&A from powerful stakeholders after a brief presentation — composure and concision under real social pressure.",
  "listenFor": "Over-explaining as a stress response; whether composure holds (measured pace, no defensive tone) or cracks (rushed, apologetic).",
  "likelyResponses": [
    "A rushed, run-on answer that tries to address every possible objection at once rather than the specific question asked."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "composure, turn discipline"
    },
    {
      "dimension": "Pragmatics",
      "note": "non-defensive tone under status pressure"
    }
  ]
}$json$::jsonb,
  true
),
(
  'aceb6ae1-13da-4f71-b87d-b4f525f9f164',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Scattershot defense → targeted answer: pause briefly, answer the specific question asked, stop — resist the urge to pre-emptively defend against unasked objections.",
  "interventionPrompts": [
    "Answer only the question I asked — not the three you're afraid I'll ask next.",
    "Take a breath before answering. You don't need to fill the silence immediately.",
    "That was defensive in tone — say it again, matter-of-fact."
  ]
}$json$::jsonb,
  true
),
(
  'aceb6ae1-13da-4f71-b87d-b4f525f9f164',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the \"senior leadership\" role-player interrupt mid-answer to raise difficulty further.",
  "recovery": "If composure breaks down, allow an explicit stalling move (\"That's a fair question — let me think for a second\") as a legitimate recovery tool, not a failure."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c12695db-ee55-4399-b96e-ea80e60acdf3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Present 2-3 options, then facilitate the discussion toward a decision or clear next steps — manage multiple questioners without losing the thread."
}$json$::jsonb,
  true
),
(
  'c12695db-ee55-4399-b96e-ea80e60acdf3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Present options and then lead a decision-focused discussion that stays structured even as participants question assumptions and risks.",
  "listenFor": "Whether the learner keeps steering back to a decision point or lets the discussion drift; whether assumptions get acknowledged rather than defended reflexively.",
  "likelyResponses": [
    "The discussion wanders across several tangents with the learner following each one rather than redirecting."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "facilitation, steering"
    },
    {
      "dimension": "Discourse Control",
      "note": "maintaining decision focus"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c12695db-ee55-4399-b96e-ea80e60acdf3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Passive following → active steering: \"That's a related but separate question — let's park it and come back to the decision in front of us.\"",
  "interventionPrompts": [
    "You're following every tangent — bring it back to the decision.",
    "Acknowledge that assumption instead of defending it immediately — is it actually solid?",
    "Name the decision point again before this drifts further."
  ]
}$json$::jsonb,
  true
),
(
  'c12695db-ee55-4399-b96e-ea80e60acdf3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a participant deliberately introduce a plausible but irrelevant tangent to test steering skill.",
  "recovery": "Give the learner an explicit parking-lot phrase (\"Let's note that and come back to it\") to use whenever they feel discussion drifting."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '70017df5-fe5d-481a-8808-34b721afe2ad',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a model presentation or briefing. Identify its narrative arc and signposting language — then give a short reflection on a new topic, reusing those same framing moves."
}$json$::jsonb,
  true
),
(
  '70017df5-fe5d-481a-8808-34b721afe2ad',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze a strong real-world high-stakes presentation for storyline, signposting, and Q&A strategy.",
  "listenFor": "Whether learners identify actual signposting language (\"turning to,\" \"the key question here is\") or just describe content (\"then they talked about costs\").",
  "likelyResponses": [
    "First they talked about the problem, then the solution."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "signposting language"
    },
    {
      "dimension": "Advanced Range",
      "note": "noticing rhetorical framing devices"
    }
  ]
}$json$::jsonb,
  true
),
(
  '70017df5-fe5d-481a-8808-34b721afe2ad',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Content summary → structural analysis: \"They signal the shift with 'the real question is' — that's what makes the transition feel deliberate rather than just sequential.\"",
  "interventionPrompts": [
    "That's what they said — now, how did they signal moving from one part to the next?",
    "Find the exact phrase that marks a transition.",
    "Reuse that phrase in your own 20-second version."
  ]
}$json$::jsonb,
  true
),
(
  '70017df5-fe5d-481a-8808-34b721afe2ad',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compare two model presentations with different signposting styles (question-led vs. statement-led) and evaluate which suits which context.",
  "recovery": "Supply a signposting phrase bank if learners can't self-identify transition language, then have them locate matches in the model."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7a5c0ff9-b1c7-47bd-99f7-7715cebbe79e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two or three presentation examples on a similar announcement. Brief a partner on how they differ."
}$json$::jsonb,
  true
),
(
  '7a5c0ff9-b1c7-47bd-99f7-7715cebbe79e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compare presentation/briefing examples on similar issues and brief a peer on differences in tone, structure, and question-handling.",
  "listenFor": "Whether differences noted are substantive (structure, tone, question-handling strategy) or superficial (one is \"more boring\").",
  "likelyResponses": [
    "This one is better because it's more interesting."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "substantive comparison criteria"
    },
    {
      "dimension": "Discourse Control",
      "note": "structured briefing to a peer"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7a5c0ff9-b1c7-47bd-99f7-7715cebbe79e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague preference → structural comparison: \"This one opens with the impact on people, the other opens with numbers — the people-first version probably lands better with a general audience.\"",
  "interventionPrompts": [
    "'More interesting' isn't a reason — what's actually different about how they open?",
    "How does each one handle a likely tough question?",
    "Which would you recommend for this specific audience, and why?"
  ]
}$json$::jsonb,
  true
),
(
  '7a5c0ff9-b1c7-47bd-99f7-7715cebbe79e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third example that's structurally strong but tonally mismatched to the audience.",
  "recovery": "Provide a comparison grid (opening move / structure / tone / Q&A handling) to fill in before speaking."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '72ae5273-959f-4eb4-be87-b2ee1ae8e5e4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model high-stakes meeting recording or transcript. Map how the presenter frames the ask, opens the floor to questions, and handles pushback without shutting it down."
}$json$::jsonb,
  true
),
(
  '72ae5273-959f-4eb4-be87-b2ee1ae8e5e4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study how a presenter in a board/steering-committee setting frames a decision, invites questions, and responds strategically to pushback.",
  "listenFor": "Whether learners notice the specific move of *inviting* pushback (\"What am I missing?\") as a deliberate credibility strategy, not just a passive Q&A moment.",
  "likelyResponses": [
    "Then people asked questions and the presenter answered them."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "pre-emptive invitation of challenge"
    },
    {
      "dimension": "Pragmatics",
      "note": "projecting confidence through openness"
    }
  ]
}$json$::jsonb,
  true
),
(
  '72ae5273-959f-4eb4-be87-b2ee1ae8e5e4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Passive Q&A description → strategic-invitation noticing: \"The presenter asks 'what am I missing' before anyone objects — that pre-empts pushback and signals confidence.\"",
  "interventionPrompts": [
    "Does the presenter wait for questions, or actively invite them? Find the moment.",
    "Why would inviting pushback before it happens be a smart move here?",
    "Try that move yourself in a 30-second mini-briefing."
  ]
}$json$::jsonb,
  true
),
(
  '72ae5273-959f-4eb4-be87-b2ee1ae8e5e4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners identify a moment where the presenter declines to answer fully and evaluate whether that was the right call.",
  "recovery": "If the strategic-invitation move is hard to spot, point directly to the timestamp/line and ask only \"why do this here?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '39bdfcf7-2fe5-40d7-98aa-82096002158d',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a briefing note or slide outline covering: context, stakes, 2-3 key messages, an anticipated question with a prepared answer, and a decision point. Structured, not prose-heavy."
}$json$::jsonb,
  true
),
(
  '39bdfcf7-2fe5-40d7-98aa-82096002158d',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce the written scaffold for a high-stakes presentation: context, stakes, key messages, anticipated questions, decision points.",
  "listenFor": "Whether \"anticipated questions\" are genuinely anticipated (specific, plausible) or generic filler (\"Are there any questions?\").",
  "likelyResponses": [
    "An outline with solid context and messages but an anticipated-questions section reading \"some people might have questions about cost.\""
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "specific anticipated questions and answers"
    },
    {
      "dimension": "Discourse Control",
      "note": "outline structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '39bdfcf7-2fe5-40d7-98aa-82096002158d',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Generic filler → specific anticipation: \"Likely question: why not delay six months instead? Prepared answer: delay risks missing the Q3 window entirely.\"",
  "interventionPrompts": [
    "What's the actual, specific question someone will ask? Not 'questions about cost' — the real one.",
    "Have you prepared an answer, or just flagged that a question exists?",
    "Pick the toughest likely question and answer it right now."
  ]
}$json$::jsonb,
  true
),
(
  '39bdfcf7-2fe5-40d7-98aa-82096002158d',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a second, harder anticipated question from a different stakeholder perspective.",
  "recovery": "If anticipation stays generic, ask \"who in the room would push back hardest, and on what?\" as a concrete starting point."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1a10cdbd-ed04-4b48-b18d-8e0438d4e2b1',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a short slide sequence or script (5-7 slides' worth) that walks through situation, options, and recommendation — with a built-in checkpoint for questions and a fallback if the room pushes back."
}$json$::jsonb,
  true
),
(
  '1a10cdbd-ed04-4b48-b18d-8e0438d4e2b1',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Design a slide sequence or script walking an audience through situation, options, risks, recommendation, with explicit Q&A/contingency slots.",
  "listenFor": "Whether Q&A/contingency slots are placed deliberately (after the recommendation, before close) or just tacked onto the end without integration.",
  "likelyResponses": [
    "A sequence that presents everything and then has one final slide titled \"Questions?\" with no other integration."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "integrated pacing/checkpoints"
    },
    {
      "dimension": "Interaction Control",
      "note": "planned audience engagement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '1a10cdbd-ed04-4b48-b18d-8e0438d4e2b1',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Tacked-on Q&A → integrated checkpoints: insert a mid-sequence pause slide after the options (\"Before I give my recommendation — any concerns about these options so far?\").",
  "interventionPrompts": [
    "'Questions?' at the end isn't a strategy — where could you check in earlier?",
    "What's your contingency if the room pushes back on the recommendation itself?",
    "Build that checkpoint into the sequence, not just at the end."
  ]
}$json$::jsonb,
  true
),
(
  '1a10cdbd-ed04-4b48-b18d-8e0438d4e2b1',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a branch: \"if the room rejects the recommendation, what's slide 6?\"",
  "recovery": "If integration is hard, have the learner mark on their existing sequence just one place a checkpoint could go, then build out from there."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '07d33fda-c6c1-43b3-bca0-e397ed8c89cd',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a follow-up email (100-130 words) after a high-stakes briefing: key questions raised, decisions made, and next steps — each with a named owner and a date."
}$json$::jsonb,
  true
),
(
  '07d33fda-c6c1-43b3-bca0-e397ed8c89cd',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a concise follow-up capturing questions raised, decisions made, and next steps — proof that Q&A outcomes were actually captured, not just survived.",
  "listenFor": "Whether next steps have named owners and timing, or are left as vague intentions (\"we'll look into it\").",
  "likelyResponses": [
    "We'll follow up on the budget question soon."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "owner + timing on every action item"
    },
    {
      "dimension": "Register Control",
      "note": "concise professional follow-up tone"
    }
  ]
}$json$::jsonb,
  true
),
(
  '07d33fda-c6c1-43b3-bca0-e397ed8c89cd',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague intention → owned action: \"Finance will confirm the budget figure by Friday.\"",
  "interventionPrompts": [
    "Who owns that? Name a person or team.",
    "'Soon' isn't a timeline — when, specifically?",
    "If someone read only this email, could they act on it? Fix what's missing."
  ]
}$json$::jsonb,
  true
),
(
  '07d33fda-c6c1-43b3-bca0-e397ed8c89cd',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a line addressing a question that was raised but not fully answered live.",
  "recovery": "Supply the frame \"[Owner] will [action] by [date]\" for each next step if the learner struggles to make them concrete."
}$json$::jsonb,
  true
);

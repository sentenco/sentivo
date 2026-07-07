-- Sentivo C1 Adults -- Unit 5: Problem-Solving and Negotiation
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c1-adults.md and
-- c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b35876c0-6632-4d8b-8684-b46ff686dc9b',
  'How the Problem Gets Framed',
  'C1',
  'adults',
  5,
  1,
  'Notice how a model problem-solving discussion frames problems and options, before learners attempt this themselves in Lesson 7.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0c47c5eb-d7bd-47c6-a7d5-c5016a31301a',
  'Two Sides of the Problem',
  'C1',
  'adults',
  5,
  2,
  'Summarize two stakeholders'' problem descriptions for a decision-maker who needs the full picture — extends Unit 2''s mediation skill into a problem-solving context.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cabae8bd-dcd3-4693-ba5a-73281b846cd9',
  'Reading a Negotiation''s Moves',
  'C1',
  'adults',
  5,
  3,
  'Identify how proposals, concessions, and conditional offers are sequenced and phrased in a model negotiation — direct prerequisite to Lesson 9''s live negotiation.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2b84598e-3fb9-4b27-b681-54c4a9259c78',
  'Laying Out the Problem',
  'C1',
  'adults',
  5,
  4,
  'Write a structured problem brief a manager could act on: situation, key constraints, possible options.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '911ab45b-7126-4722-a44c-f42c3dc19acd',
  'Recommending a Solution',
  'C1',
  'adults',
  5,
  5,
  'Recommend a solution with supporting arguments and contingency plans — the natural next step from Lesson 4''s neutral options note.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '09fd5fd5-c901-4493-bb57-d39e099e2ec3',
  'Why This, Not That',
  'C1',
  'adults',
  5,
  6,
  'Convert a spoken defense of a chosen solution into a structured rationale suitable for email or slide outline — closes the written arc of the unit.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9be77aaa-b0f8-4bf8-9e44-98b62715dbd6',
  'Is It Actually Feasible?',
  'C1',
  'adults',
  5,
  7,
  'Take quick live positions on handling practical problems and refine for clarity and feasibility — moves the unit''s analytic work back into spontaneous speech.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ef3a0faf-2cf0-4a65-872a-1dd28472cd3e',
  'Defending Your Solution',
  'C1',
  'adults',
  5,
  8,
  'Propose solutions and handle pushback on cost, risk, or fairness — direct rehearsal for Lesson 9''s full negotiation.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd3e0ce7b-00a2-4aa7-a259-21113205a00d',
  'Negotiating to a Close',
  'C1',
  'adults',
  5,
  9,
  'Run a short, high-pressure negotiation with clear but conflicting priorities — the unit''s full-synthesis closing task.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b35876c0-6632-4d8b-8684-b46ff686dc9b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model discussion about solving a practical problem. Notice how the problem and the options are framed — then give your own opinion turn on a new problem, reusing that framing."
}$json$::jsonb,
  true
),
(
  'b35876c0-6632-4d8b-8684-b46ff686dc9b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Notice how a model problem-solving discussion frames problems and options, before learners attempt this themselves in Lesson 7.",
  "listenFor": "Whether learners notice framing choices (how a problem is defined shapes which solutions seem reasonable) or just summarize the content.",
  "likelyResponses": [
    "They talk about the problem and then give some solutions."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "analyzing framing as rhetorical choice"
    },
    {
      "dimension": "Precision",
      "note": "identifying what a frame includes/excludes"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b35876c0-6632-4d8b-8684-b46ff686dc9b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Content summary → framing analysis: \"By defining the problem as 'a cost issue,' they automatically rule out solutions that would cost more, even good ones — that's a framing choice, not a neutral description.\"",
  "interventionPrompts": [
    "How is the problem defined here — and what does that framing rule out?",
    "Would a different framing open up different solutions?",
    "Reuse that framing move in your own opinion turn."
  ]
}$json$::jsonb,
  true
),
(
  'b35876c0-6632-4d8b-8684-b46ff686dc9b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners reframe the same problem a second way and generate a different solution set from it.",
  "recovery": "If framing analysis is too abstract, ask concretely: \"If we called this a 'time problem' instead of a 'cost problem,' what would change?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0c47c5eb-d7bd-47c6-a7d5-c5016a31301a',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two short stakeholder problem descriptions. Summarize both, out loud, for a decision-maker who needs the full picture — name what each stakeholder actually cares about."
}$json$::jsonb,
  true
),
(
  '0c47c5eb-d7bd-47c6-a7d5-c5016a31301a',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Summarize two stakeholders' problem descriptions for a decision-maker who needs the full picture — extends Unit 2's mediation skill into a problem-solving context.",
  "listenFor": "Whether the summary preserves each stakeholder's actual priority, or flattens both into a generic \"there's a disagreement.\"",
  "likelyResponses": [
    "Both sides have different problems and want different things."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "naming specific priorities"
    },
    {
      "dimension": "Discourse Control",
      "note": "dual-perspective summary structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '0c47c5eb-d7bd-47c6-a7d5-c5016a31301a',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague flattening → specific dual-priority summary: \"Stakeholder A's real concern is delivery speed; Stakeholder B's is long-term maintenance cost — those are the two things any solution needs to address.\"",
  "interventionPrompts": [
    "What does each stakeholder actually care about — name it precisely.",
    "A decision-maker can't act on 'they want different things' — be specific.",
    "Say both priorities in one sentence each."
  ]
}$json$::jsonb,
  true
),
(
  '0c47c5eb-d7bd-47c6-a7d5-c5016a31301a',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third stakeholder with a priority that conflicts with both existing ones.",
  "recovery": "Ask \"if you could only tell the decision-maker one thing each side cares about, what would it be?\" to force specificity."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cabae8bd-dcd3-4693-ba5a-73281b846cd9',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model negotiation transcript. Label each move as propose, concede, or conditional offer — and find the exact phrasing used for conditional offers ('if X, then I could...')."
}$json$::jsonb,
  true
),
(
  'cabae8bd-dcd3-4693-ba5a-73281b846cd9',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Identify how proposals, concessions, and conditional offers are sequenced and phrased in a model negotiation — direct prerequisite to Lesson 9's live negotiation.",
  "listenFor": "Whether learners can distinguish an unconditional concession from a conditional offer — a distinction that matters a great deal in real negotiation.",
  "likelyResponses": [
    "This person offers something."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "conditional vs. unconditional language"
    },
    {
      "dimension": "Advanced Range",
      "note": "conditional structures — \"were X to happen, I'd be willing to...\""
    }
  ]
}$json$::jsonb,
  true
),
(
  'cabae8bd-dcd3-4693-ba5a-73281b846cd9',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Undifferentiated \"offering\" → conditional-vs-unconditional distinction: \"This isn't a free concession — it's conditional: they'll only do it if the other side also moves on price.\"",
  "interventionPrompts": [
    "Is that offer free, or does it come with a condition? Find the exact words.",
    "What's the 'if... then...' structure here?",
    "Try phrasing your own conditional offer using that structure."
  ]
}$json$::jsonb,
  true
),
(
  'cabae8bd-dcd3-4693-ba5a-73281b846cd9',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners rewrite an unconditional concession in the model as a conditional offer instead, and discuss the strategic difference.",
  "recovery": "If the distinction doesn't land, use a simple test question: \"does this only happen if something else happens too?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b84598e-3fb9-4b27-b681-54c4a9259c78',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a problem brief (120-150 words): the situation, the constraints, and 2-3 options. No recommendation yet — that comes next lesson."
}$json$::jsonb,
  true
),
(
  '2b84598e-3fb9-4b27-b681-54c4a9259c78',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a structured problem brief a manager could act on: situation, key constraints, possible options.",
  "listenFor": "Whether constraints are stated as real limits (with consequences if violated) or just listed as facts with no bearing on the options that follow.",
  "likelyResponses": [
    "A list of options that doesn't visibly connect to the constraints stated earlier — as if the constraints section and options section were written independently."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "constraint-to-option connection"
    },
    {
      "dimension": "Precision",
      "note": "explicit trade-off flagging"
    }
  ]
}$json$::jsonb,
  true
),
(
  '2b84598e-3fb9-4b27-b681-54c4a9259c78',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Disconnected sections → constraint-driven options: each option should visibly respect or explicitly violate a named constraint (\"Option B exceeds the budget constraint but meets the deadline\").",
  "interventionPrompts": [
    "Does each option respect the constraints you just listed? Check.",
    "If an option breaks a constraint, say so explicitly — don't hide it.",
    "Constraints should shape the options, not just sit above them."
  ]
}$json$::jsonb,
  true
),
(
  '2b84598e-3fb9-4b27-b681-54c4a9259c78',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a constraint that eliminates one of the options entirely, and have the learner note that explicitly.",
  "recovery": "Have the learner draw a literal line connecting each constraint to the option(s) it affects before finalizing prose."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '911ab45b-7126-4722-a44c-f42c3dc19acd',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a recommendation (130-160 words): your preferred solution, two supporting arguments, and at least one real contingency plan — a specific trigger and a specific response."
}$json$::jsonb,
  true
),
(
  '911ab45b-7126-4722-a44c-f42c3dc19acd',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Recommend a solution with supporting arguments and contingency plans — the natural next step from Lesson 4's neutral options note.",
  "listenFor": "Whether the contingency plan is a real \"if this goes wrong, then...\" plan, or a vague reassurance (\"we'll monitor closely\").",
  "likelyResponses": [
    "If there are problems, we will address them as they come up."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "specific trigger-response contingency"
    },
    {
      "dimension": "Discourse Control",
      "note": "argument-then-contingency structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '911ab45b-7126-4722-a44c-f42c3dc19acd',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague reassurance → real contingency: \"If adoption is below 50% after month one, we'll revert to the previous process while we investigate.\"",
  "interventionPrompts": [
    "'We'll address it' isn't a plan — what would you actually do?",
    "Name a specific trigger and a specific response.",
    "Would this contingency actually help someone six months from now?"
  ]
}$json$::jsonb,
  true
),
(
  '911ab45b-7126-4722-a44c-f42c3dc19acd',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a second contingency for a different failure mode.",
  "recovery": "Supply the frame \"If [specific trigger], then we will [specific action]\" if the contingency stays vague."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '09fd5fd5-c901-4493-bb57-d39e099e2ec3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a rationale (100-130 words) explaining why your solution was chosen over the alternative — for a reader who wasn't part of the decision."
}$json$::jsonb,
  true
),
(
  '09fd5fd5-c901-4493-bb57-d39e099e2ec3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert a spoken defense of a chosen solution into a structured rationale suitable for email or slide outline — closes the written arc of the unit.",
  "listenFor": "Whether the rationale explains the *choice* (why this over the alternatives) or just restates the *solution* (what it is).",
  "likelyResponses": [
    "A clear description of the solution with no comparison to what wasn't chosen — reads like a proposal, not a rationale for a decision already made."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "comparative rationale structure"
    },
    {
      "dimension": "Precision",
      "note": "naming the actual trade-off accepted"
    }
  ]
}$json$::jsonb,
  true
),
(
  '09fd5fd5-c901-4493-bb57-d39e099e2ec3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Solution description → comparative rationale: add \"... rather than [alternative], which would have addressed X but not Y.\"",
  "interventionPrompts": [
    "This describes the solution — now say why it beat the alternative.",
    "What did the alternative solve that this one doesn't, and why was that an acceptable trade-off?",
    "A rationale answers 'why this, not that' — does yours?"
  ]
}$json$::jsonb,
  true
),
(
  '09fd5fd5-c901-4493-bb57-d39e099e2ec3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner write the rationale a rejected alternative's advocate would find hardest to argue with.",
  "recovery": "Ask directly: \"What was the second-best option, and why didn't it win?\" — the answer is usually the missing sentence."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9be77aaa-b0f8-4bf8-9e44-98b62715dbd6',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "In 30-45 seconds, give your position on how to handle a practical problem. Then immediately reformulate it — this time, focus on whether it's actually feasible, not just clear."
}$json$::jsonb,
  true
),
(
  '9be77aaa-b0f8-4bf8-9e44-98b62715dbd6',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Take quick live positions on handling practical problems and refine for clarity and feasibility — moves the unit's analytic work back into spontaneous speech.",
  "listenFor": "Whether the reformulated version is more feasible, or just more fluently worded while remaining just as impractical.",
  "likelyResponses": [
    "We should just give everyone more training."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "feasibility-testing a proposal"
    },
    {
      "dimension": "Naturalness",
      "note": "fluent live delivery under refinement pressure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9be77aaa-b0f8-4bf8-9e44-98b62715dbd6',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unfeasible-but-fluent → feasibility-tested: \"Training helps, but only if the root issue is skill, not workload — worth checking that before committing budget to it.\"",
  "interventionPrompts": [
    "Is that actually feasible, or just the first thing that comes to mind?",
    "What would need to be true for your solution to actually work?",
    "Say it again, addressing the feasibility problem I just raised."
  ]
}$json$::jsonb,
  true
),
(
  '9be77aaa-b0f8-4bf8-9e44-98b62715dbd6',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Introduce a resource constraint (half the budget assumed) and require the position to be revised live.",
  "recovery": "If feasibility-testing is hard live, ask a single diagnostic question (\"what could stop this from working?\") before asking for the reformulation."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ef3a0faf-2cf0-4a65-872a-1dd28472cd3e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Propose a solution. Your partner will push back specifically on cost, risk, or fairness — justify your solution or adapt it in response."
}$json$::jsonb,
  true
),
(
  'ef3a0faf-2cf0-4a65-872a-1dd28472cd3e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Propose solutions and handle pushback on cost, risk, or fairness — direct rehearsal for Lesson 9's full negotiation.",
  "listenFor": "Whether justification engages the specific objection raised (cost/risk/fairness) or defaults to a generic defense of the original idea.",
  "likelyResponses": [
    "Pushback: \"That's not fair to the smaller teams.\" Response: \"I still think it's the best solution overall.\" (talks past the fairness objection entirely.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "engaging objections on their own terms"
    },
    {
      "dimension": "Interaction Control",
      "note": "adapting a proposal live"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ef3a0faf-2cf0-4a65-872a-1dd28472cd3e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Talking-past → direct engagement: \"You're right that it puts more burden on smaller teams — here's how I'd adjust it to balance that.\"",
  "interventionPrompts": [
    "You didn't actually respond to the fairness point — address it directly.",
    "Adapt the proposal, don't just restate it louder.",
    "Say what you'd change, specifically, in response to that objection."
  ]
}$json$::jsonb,
  true
),
(
  'ef3a0faf-2cf0-4a65-872a-1dd28472cd3e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Stack a second, different objection (now on risk) right after the first is resolved.",
  "recovery": "If the learner keeps defaulting to restating the original proposal, explicitly ask \"what would you change to fix that specific problem?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd3e0ce7b-00a2-4aa7-a259-21113205a00d',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You have 2-3 minutes. Negotiate with your partner — you each have a different priority — and reach a concrete, specific agreement."
}$json$::jsonb,
  true
),
(
  'd3e0ce7b-00a2-4aa7-a259-21113205a00d',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Run a short, high-pressure negotiation with clear but conflicting priorities — the unit's full-synthesis closing task.",
  "listenFor": "Whether proposals get more specific over the course of the negotiation (a sign of real progress) or stay at the same level of vagueness throughout; whether the final agreement is stated explicitly by both sides.",
  "likelyResponses": [
    "A negotiation that ends with \"okay, I guess that's fine\" with neither side stating what was actually agreed."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "closing explicitly under time pressure"
    },
    {
      "dimension": "Discourse Control",
      "note": "concrete final agreement"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd3e0ce7b-00a2-4aa7-a259-21113205a00d',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unstated agreement → explicit close: \"So to confirm: we're doing X, with condition Y — agreed?\"",
  "interventionPrompts": [
    "Time's almost up — what exactly have you agreed to?",
    "Say the final agreement out loud, both of you.",
    "Is there a condition attached? State it."
  ]
}$json$::jsonb,
  true
),
(
  'd3e0ce7b-00a2-4aa7-a259-21113205a00d',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a hard deadline (60 seconds left) partway through to force faster convergence.",
  "recovery": "If time runs out with no agreement, have both sides state \"the one thing I need\" and build a minimal agreement from those two statements."
}$json$::jsonb,
  true
);

-- Sentivo C1 Adults -- Unit 3: Professional and Formal Writing
-- Mode order: Output -> Performance -> Model
-- Content sourced from docs/curriculum/c1-adults.md and
-- c1-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b832b8f5-8443-47fa-bbb3-158addbdaa2f',
  'Bringing Sources Together',
  'C1',
  'adults',
  3,
  1,
  'Open the unit''s writing-first arc: produce a short synthesis note that integrates multiple sources/viewpoints accurately, before any spoken rehearsal.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '510d97b4-0ce6-47af-baaf-8b5abfbede49',
  'Options and a Recommendation',
  'C1',
  'adults',
  3,
  2,
  'Practice the classic executive-writing move: lay out 2–3 real options, evaluate briefly, recommend one — the backbone shape of Lesson 7''s model analysis.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b2953d85-c8c7-4e0f-8101-6013934d488f',
  'Say It in One Paragraph',
  'C1',
  'adults',
  3,
  3,
  'Compress a spoken stance into a single paragraph or email with no padding — the unit''s core "economy of language" skill.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4bef18ed-33a9-4fbc-a44c-61dd5bd89580',
  'Defending It Out Loud',
  'C1',
  'adults',
  3,
  4,
  'Orally defend a written recommendation to a senior audience who has only skimmed it — requires re-deriving and compressing the argument live, not just reading it back.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '85786495-d845-44ca-b49b-875ef4c8e4bf',
  'Answering Under Scrutiny',
  'C1',
  'adults',
  3,
  5,
  'Handle pointed, skeptical questions about a written recommendation concisely, without retreating into long explanations — the C1 skill of staying brief under scrutiny.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5281c606-9b8a-40d9-a907-de0f2b588a5a',
  'Reconciling Two Notes',
  'C1',
  'adults',
  3,
  6,
  'Reconcile conflicting written recommendations from different stakeholders live, while keeping references to the documents clear and economical — bridges written and spoken control.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c1524128-1526-490b-8739-58f9d0d72f7a',
  'What Got Left Out',
  'C1',
  'adults',
  3,
  7,
  'Analyze exemplary executive texts for structure, density, stance, and — critically — what gets deliberately left out.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '964eda9e-7504-48ea-9a13-d0b37ee8163d',
  'Comparing Strong Writing',
  'C1',
  'adults',
  3,
  8,
  'Compare strong examples of concise professional writing and brief a peer on which suits which audience — analytic precursor to producing audience-calibrated writing.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '60d97962-3225-470d-9078-66137ae4458e',
  'From Packet to Decision',
  'C1',
  'adults',
  3,
  9,
  'Map how written briefs frame a meeting and how written follow-up captures the decision — closing the loop on writing''s role in a live decision process.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b832b8f5-8443-47fa-bbb3-158addbdaa2f',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a synthesis note (120-160 words) that integrates at least two viewpoints or sources on a practical issue, and ends with a recommendation."
}$json$::jsonb,
  true
),
(
  'b832b8f5-8443-47fa-bbb3-158addbdaa2f',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Open the unit's writing-first arc: produce a short synthesis note that integrates multiple sources/viewpoints accurately, before any spoken rehearsal.",
  "listenFor": "Whether integration is genuine (sources are put in conversation with each other) or just sequential (\"Source A says... Source B says...\") with no synthesis sentence connecting them.",
  "likelyResponses": [
    "Two well-summarized but entirely separate paragraphs with no connecting sentence at all."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "synthesis, not sequencing"
    },
    {
      "dimension": "Precision",
      "note": "accurate representation of each source"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b832b8f5-8443-47fa-bbb3-158addbdaa2f',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Sequential summary → true synthesis: add a linking sentence that states what the two sources jointly imply, not just what each says alone.",
  "interventionPrompts": [
    "These two paragraphs never talk to each other — add a sentence that connects them.",
    "What do both sources agree matters, even if they disagree on the answer?",
    "If a reader only had time for one sentence, what would it be?"
  ]
}$json$::jsonb,
  true
),
(
  'b832b8f5-8443-47fa-bbb3-158addbdaa2f',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third source that complicates the synthesis and require it to be integrated, not just appended.",
  "recovery": "Provide a sentence frame: \"Taken together, these suggest ___\" and have the learner complete it before revising the rest around it."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '510d97b4-0ce6-47af-baaf-8b5abfbede49',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a compressed options note (120-150 words): 2-3 options, one line evaluating each, and one clear recommendation."
}$json$::jsonb,
  true
),
(
  '510d97b4-0ce6-47af-baaf-8b5abfbede49',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Practice the classic executive-writing move: lay out 2–3 real options, evaluate briefly, recommend one — the backbone shape of Lesson 7's model analysis.",
  "listenFor": "Whether evaluation is comparative (this option vs. that one, on a named criterion) or just descriptive (restating what each option is).",
  "likelyResponses": [
    "Option A costs less. Option B is faster. I recommend Option A."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "naming the deciding criterion"
    },
    {
      "dimension": "Discourse Control",
      "note": "evaluation before recommendation, not after"
    }
  ]
}$json$::jsonb,
  true
),
(
  '510d97b4-0ce6-47af-baaf-8b5abfbede49',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Descriptive listing → comparative evaluation with a stated criterion: \"Given that budget is the binding constraint this quarter, Option A's lower cost outweighs Option B's speed advantage.\"",
  "interventionPrompts": [
    "You've described the options — now compare them on one criterion that actually matters here.",
    "Why does that criterion win over the others? Say it.",
    "Cut anything that isn't option, evaluation, or recommendation."
  ]
}$json$::jsonb,
  true
),
(
  '510d97b4-0ce6-47af-baaf-8b5abfbede49',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a constraint that flips the recommendation (e.g. \"the deadline just moved up\") and have them rewrite the conclusion only.",
  "recovery": "Supply the criterion explicitly (\"cost is the priority here\") if the learner can't identify one, then have them build the comparison around it."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b2953d85-c8c7-4e0f-8101-6013934d488f',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a single paragraph or short email (60-90 words) that captures your position, key reasons, and the next step — no padding."
}$json$::jsonb,
  true
),
(
  'b2953d85-c8c7-4e0f-8101-6013934d488f',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compress a spoken stance into a single paragraph or email with no padding — the unit's core \"economy of language\" skill.",
  "listenFor": "Padding — throat-clearing openers (\"I wanted to write to let you know that...\"), redundant reason restatement, a next step that's implied but never actually stated.",
  "likelyResponses": [
    "An email that opens with \"I hope this finds you well, I wanted to reach out regarding...\" before getting to any actual content in sentence three."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "professional brevity vs. politeness padding"
    },
    {
      "dimension": "Discourse Control",
      "note": "explicit next step"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b2953d85-c8c7-4e0f-8101-6013934d488f',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Padded opener → direct opener: cut straight to the position in sentence one; move any pleasantry (if needed at all) to a single clause, not a sentence.",
  "interventionPrompts": [
    "Cut your first sentence entirely — does the email still work? It usually does.",
    "Where's the next step? It's implied, but say it.",
    "Read this aloud in 15 seconds — if you can't, cut more."
  ]
}$json$::jsonb,
  true
),
(
  'b2953d85-c8c7-4e0f-8101-6013934d488f',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compress the same email to 40 words without losing the position, reasons, or next step.",
  "recovery": "If cutting feels risky, have the learner draft the padded version first, then physically cross out every sentence that doesn't contain position, reason, or next step."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4bef18ed-33a9-4fbc-a44c-61dd5bd89580',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "In under 60 seconds, explain your Lesson 2 recommendation out loud to someone who only skimmed it and cares about risk, cost, optics, and timing. Then reformulate to better match what they care about."
}$json$::jsonb,
  true
),
(
  '4bef18ed-33a9-4fbc-a44c-61dd5bd89580',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Orally defend a written recommendation to a senior audience who has only skimmed it — requires re-deriving and compressing the argument live, not just reading it back.",
  "listenFor": "Whether the spoken defense just repeats written phrasing verbatim (a sign it wasn't internalized) or genuinely re-derives the point for a listening audience; whether it's framed around what the listener cares about or around what the writer wanted to say.",
  "likelyResponses": [
    "A word-for-word recitation of the written note's first paragraph, delivered as if reading, with no adaptation to the \"only skimmed it\" listener."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "spoken vs. written register shift"
    },
    {
      "dimension": "Pragmatics",
      "note": "framing around listener priorities"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4bef18ed-33a9-4fbc-a44c-61dd5bd89580',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Recitation → listener-framed defense: \"You'll have seen the cost numbers — the short version is, this is the lower-risk option given the timeline we're under.\"",
  "interventionPrompts": [
    "You're reciting your note — talk to me like I only have 30 seconds.",
    "Lead with what I care about, not what you wrote first.",
    "Say the same point in half the words."
  ]
}$json$::jsonb,
  true
),
(
  '4bef18ed-33a9-4fbc-a44c-61dd5bd89580',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Switch the listener's stated priority mid-turn (from cost to optics) and require an on-the-fly reframe.",
  "recovery": "If the learner can't detach from the written text, take the note away physically and have them explain \"from memory, in your own words\" as a first step."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '85786495-d845-44ca-b49b-875ef4c8e4bf',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Defend your note against pointed questions — why didn't you mention X? What evidence underlies this? What happens if this fails? Each answer: 15 seconds, no more."
}$json$::jsonb,
  true
),
(
  '85786495-d845-44ca-b49b-875ef4c8e4bf',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Handle pointed, skeptical questions about a written recommendation concisely, without retreating into long explanations — the C1 skill of staying brief under scrutiny.",
  "listenFor": "Over-explaining as a nervous response to challenge (a classic B2-ceiling pattern — more words instead of sharper ones); whether the answer to \"what if it fails\" is a real contingency or a vague reassurance.",
  "likelyResponses": [
    "A 45-second answer to \"why didn't you mention X\" that circles the point three times before landing on \"...so that's basically why I didn't include it.\""
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "concision under pressure"
    },
    {
      "dimension": "Pragmatics",
      "note": "non-defensive justification"
    }
  ]
}$json$::jsonb,
  true
),
(
  '85786495-d845-44ca-b49b-875ef4c8e4bf',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Circling explanation → direct, capped answer: \"X was out of scope for this decision — it matters, but it doesn't change the recommendation.\"",
  "interventionPrompts": [
    "That took 45 seconds — say it again in 15.",
    "'What if it fails' needs a real answer — what would you actually do?",
    "You don't need to justify the omission at length — just say why it didn't change the call."
  ]
}$json$::jsonb,
  true
),
(
  '85786495-d845-44ca-b49b-875ef4c8e4bf',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Stack two challenges back-to-back with no recovery time between them.",
  "recovery": "If answers keep running long, use a visible timer and stop the learner mid-sentence at 15 seconds, then have them restart with the core point first."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5281c606-9b8a-40d9-a907-de0f2b588a5a',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You and a partner have conflicting written recommendations. Discuss and work toward a reconciled position — refer back to specific points in each other's notes."
}$json$::jsonb,
  true
),
(
  '5281c606-9b8a-40d9-a907-de0f2b588a5a',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reconcile conflicting written recommendations from different stakeholders live, while keeping references to the documents clear and economical — bridges written and spoken control.",
  "listenFor": "Whether references to the written documents are precise (\"your note's second point\") or vague (\"what you said before\"); whether reconciliation actually resolves the conflict or just states both positions side by side.",
  "likelyResponses": [
    "I still think my note is right, but okay, maybe we can do both."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "specific document references"
    },
    {
      "dimension": "Discourse Control",
      "note": "genuine resolution vs. surface agreement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '5281c606-9b8a-40d9-a907-de0f2b588a5a',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Non-reconciliation → real resolution: \"Your note's concern about cost and mine about timeline aren't actually incompatible — if we phase the rollout, we address both.\"",
  "interventionPrompts": [
    "'Maybe we can do both' — what does that actually mean concretely?",
    "Point to the exact sentence in their note you're responding to.",
    "Is this resolved, or are you just avoiding the disagreement?"
  ]
}$json$::jsonb,
  true
),
(
  '5281c606-9b8a-40d9-a907-de0f2b588a5a',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third stakeholder's note mid-discussion that complicates the reconciliation.",
  "recovery": "If reconciliation stalls, have each learner state one thing they'd be willing to give up from their own note before continuing."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c1524128-1526-490b-8739-58f9d0d72f7a',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a strong one-page memo or leadership email. Find something relevant that was left out on purpose — then explain out loud why leaving it out makes the text stronger."
}$json$::jsonb,
  true
),
(
  'c1524128-1526-490b-8739-58f9d0d72f7a',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze exemplary executive texts for structure, density, stance, and — critically — what gets deliberately left out.",
  "listenFor": "Whether learners can name a *specific* omission (not just \"it's short\") and explain why leaving it out helps rather than just noting that it happened.",
  "likelyResponses": [
    "It doesn't have a lot of details."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "analyzing omission as a rhetorical choice"
    },
    {
      "dimension": "Discourse Control",
      "note": "selection/prioritization"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c1524128-1526-490b-8739-58f9d0d72f7a',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague brevity-noticing → specific omission analysis: \"It never explains the backstory of the decision — because the reader who matters here just needs the outcome and the ask.\"",
  "interventionPrompts": [
    "What's one thing you'd expect in this memo that isn't there?",
    "Why does leaving that out make it stronger, not weaker?",
    "Now give your own 20-second reflection using that same discipline."
  ]
}$json$::jsonb,
  true
),
(
  'c1524128-1526-490b-8739-58f9d0d72f7a',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners find a text that includes the omitted material and compare which version serves the stated audience better.",
  "recovery": "If nothing seems omitted, prompt with a specific candidate: \"Where's the history of how we got here? Why isn't it in this memo?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '964eda9e-7504-48ea-9a13-d0b37ee8163d',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two or three strong short texts on similar issues. Brief a partner on how they differ in density, tone, and prioritization — and which one fits which audience."
}$json$::jsonb,
  true
),
(
  '964eda9e-7504-48ea-9a13-d0b37ee8163d',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compare strong examples of concise professional writing and brief a peer on which suits which audience — analytic precursor to producing audience-calibrated writing.",
  "listenFor": "Whether \"which fits which audience\" is justified by a specific textual feature, or just asserted.",
  "likelyResponses": [
    "This one is more formal, so it's better for the board."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "evidence-backed claims about register"
    },
    {
      "dimension": "Discourse Control",
      "note": "structured audience-fit briefing"
    }
  ]
}$json$::jsonb,
  true
),
(
  '964eda9e-7504-48ea-9a13-d0b37ee8163d',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unsupported assertion → evidenced claim: \"This one uses passive constructions and avoids first person — that distancing suits a board audience more than the direct, first-person voice in the other.\"",
  "interventionPrompts": [
    "What specific feature makes you say 'more formal'? Point to it.",
    "Why does that feature matter for this particular audience?",
    "Brief me on this like I'm choosing which one to send."
  ]
}$json$::jsonb,
  true
),
(
  '964eda9e-7504-48ea-9a13-d0b37ee8163d',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a text that's well-written but mismatched to any plausible audience, and ask the learner to diagnose the mismatch.",
  "recovery": "Give a feature checklist (person, passive/active, sentence length, jargon level) to work through systematically if unstructured comparison stalls."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '60d97962-3225-470d-9078-66137ae4458e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you a written packet plus a transcript of the meeting it informed. Trace what from the packet got picked up in the meeting, what got ignored, and how the follow-up note recorded the outcome."
}$json$::jsonb,
  true
),
(
  '60d97962-3225-470d-9078-66137ae4458e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how written briefs frame a meeting and how written follow-up captures the decision — closing the loop on writing's role in a live decision process.",
  "listenFor": "Whether learners notice *specific* moments where the meeting departed from the packet's framing (not just \"the meeting covered similar ground\").",
  "likelyResponses": [
    "The meeting talked about the same things as the packet."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "tracking framing across documents and live discussion"
    },
    {
      "dimension": "Advanced Range",
      "note": "noticing implicit shifts in emphasis"
    }
  ]
}$json$::jsonb,
  true
),
(
  '60d97962-3225-470d-9078-66137ae4458e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Sameness-noticing → divergence-tracking: \"The packet led with cost, but the meeting actually spent most of its time on the timeline risk — the follow-up note should reflect that shift, not just restate the packet.\"",
  "interventionPrompts": [
    "Where did the meeting go somewhere the packet didn't predict?",
    "Does the follow-up note capture that shift, or does it just repeat the packet?",
    "What should the next packet do differently, given this?"
  ]
}$json$::jsonb,
  true
),
(
  '60d97962-3225-470d-9078-66137ae4458e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners draft the improved follow-up note themselves.",
  "recovery": "If divergence is hard to spot, isolate one agenda item and compare packet framing to meeting discussion for that item alone."
}$json$::jsonb,
  true
);

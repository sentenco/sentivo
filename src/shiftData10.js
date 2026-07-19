// SHIFT Lesson 10 — Integrated tense control (capstone)
// Theme: real conversation challenge

export default {
  id: "shift-10",
  code: "L10",
  title: "Integrated Tense Control",
  tenses: "All tenses from the track, mixed",
  theme: "Real conversation challenge",
  mainGoal: "The learner chooses tenses accurately across familiar conversational topics with minimal support.",
  tag: "Final",

  warmup: {
    onScreen: "What has been happening in your life recently?",
    teacherPrompt: "Follow-up: What did you do yesterday? What are you doing this weekend?",
  },
  contrast: {
    examples: ["Routine", "Now", "Finished past", "Background past", "Experience or result now", "Future plan or arrangement"],
    prompt: "Quick recap of meaning labels only — no new teaching.",
  },
  makeIt: {
    onScreen: "No long rule box — just \"choose by meaning, then build the form.\"",
    models: ["Habit", "Now", "Finished time", "Background", "Life experience", "Arrangement"],
    note: "Mini reminder list only.",
  },
  trigger: {
    prompts: ["Mixed topics: school/work, food, travel, family, routines, weekend plans."],
    cue: "Rule: answer without seeing the target tense name.",
  },
  interrupt: {
    onScreen: "Natural conversation with minimal interruption.",
    teacherMove: "Cue with “time?” “still true now?” “finished event?” “arrangement?”",
  },
  samestory: {
    rounds: ["Routine", "Recent change", "Specific event"],
    purpose: "Flexible tense switching across one topic, three angles.",
  },
  clockturn: {
    baseSentence: "I visit my cousin.",
    cueChain: ["every month", "right now", "last weekend", "this year", "tomorrow at 3", "while I was there"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: ["Answer 6 rapid mixed questions.", "Then speak for 45 seconds about your week using different time references."],
    rule: "Mostly delayed feedback.",
  },
  scorecard: {
    teacherNote: "End-of-cycle score using the same /18 rubric so performance can be compared directly to Lesson 1.",
    canDoLine: "I can choose tenses accurately across familiar conversation topics with minimal support.",
    compareLine: "Compare this score to your baseline from Lesson 1 — how far have you come?",
  },
  retention: {
    homework: "Create a personal tense log with 6 example sentences, one per major time/function area, to use as review before the next course block.",
  },

  teacherGuide: {
    cover: {
      goal: "Final lesson — capstone. Compare to L1 at the end.",
      say: ["This is it — your last SHIFT lesson. Today is a real mixed conversation, and at the end we'll compare your score to Lesson 1."],
      do: ["Set a celebratory, capstone tone.", "Bring your L1 scorecard — you'll need the exact number for the comparison."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit a naturally mixed-tense update.",
      say: ["What has been happening in your life recently?"],
      do: ["Follow up with: “What did you do yesterday?” and “What are you doing this weekend?”", "Just listen — no correction yet."],
      timing: "2 min",
    },
    contrast: {
      goal: "Fast recap of all 6 meaning labels from the whole track — no new teaching today.",
      say: ["Routine.", "Now.", "Finished past.", "Background past.", "Experience or result now.", "Future plan or arrangement."],
      do: ["This is pure recap — move quickly, this is not new content."],
      timing: "2 min",
    },
    makeit: {
      goal: "Reinforce meaning-first choice with no visible tense-name labels.",
      say: ["No long rule box today — just choose by meaning, then build the form.", "Habit, now, finished time, background, life experience, arrangement."],
      do: ["Keep this to a bare reminder list — the real test is production without labels."],
      timing: "2 min",
    },
    trigger: {
      goal: "Fast reps across every familiar topic from the track, mixed at random.",
      say: ["Topics: school or work, food, travel, family, routines, weekend plans — I'll mix them up."],
      do: ["He must answer without ever seeing the target tense named — meaning cue only."],
      timing: "3 min",
    },
    interrupt: {
      goal: "As close to real natural conversation as this track gets.",
      say: ["Let's just talk — tell me what's going on with you."],
      do: ["Minimal interruption.", "Cue bank if needed: “time?” “still true now?” “finished event?” “arrangement?”"],
      timing: "3 min",
    },
    samestory: {
      goal: "One topic, three time angles, fully mixed control.",
      say: ["Tell me about it as a routine.", "Now tell me about a recent change.", "Now tell me about one specific event."],
      do: ["This is the fullest flexibility test in the track — same content, three tense angles."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate across the widest cue chain in the track — past, present, and future markers mixed.",
      say: ["I visit my cousin.", "every month...", "right now...", "last weekend...", "this year...", "tomorrow at 3...", "while I was there..."],
      do: ["No pause between cues — this chain deliberately spans all three time zones."],
      timing: "3 min",
    },
    pressure: {
      goal: "The hardest production test in the track — rapid mixed Qs, then a 45-second free turn.",
      say: ["Answer 6 rapid mixed questions.", "Then speak for 45 seconds about your week, using different time references."],
      do: ["Mostly delayed feedback — let the 45-second turn run uninterrupted."],
      timing: "4 min",
    },
    scorecard: {
      goal: "Score today, then compare directly to the L1 baseline — this is the headline moment of the whole track.",
      say: ["Let's score today — and then let's look at how far you've come since Lesson 1."],
      do: ["Score normally on the /18 rubric, then explicitly recall the L1 score and say the comparison out loud."],
      timing: "3 min",
    },
    retention: {
      goal: "Close the track with a personal reference tool, not new homework.",
      say: ["Create a personal tense log — 6 example sentences, one per major time or function area — to use as review before your next course block."],
      do: ["No new content to preview — congratulate him on finishing the track."],
      timing: "1 min",
    },
  },
};

// SHIFT Lesson 4 — Present Perfect vs Past Simple (stronger contrast)
// Theme: travel, achievements, and memorable experiences

export default {
  id: "shift-4",
  code: "L4",
  title: "Present Perfect vs Past Simple",
  tenses: "Present Perfect vs Past Simple (stronger contrast)",
  theme: "Travel, achievements, and memorable experiences",
  mainGoal: "The learner answers follow-up questions quickly and switches correctly between the two tenses.",
  tag: "Progress",

  warmup: {
    onScreen: "Have you ever won something? When did you win it?",
    expectedOutput: "Present perfect + past simple follow-up.",
  },
  contrast: {
    examples: ["ever, never, already, yet", "yesterday, in 2023, last summer, two days ago"],
    prompt: "Which side usually goes with which tense?",
  },
  makeIt: {
    onScreen: "Fast question chain model",
    models: ["Have you ever…?", "Yes, I have.", "When did you…?", "I… in…"],
    note: "Goal: build an automatic conversation pattern.",
  },
  trigger: {
    prompts: ["Achievements, food, travel, school experiences — teacher picks the topic each round."],
    cue: "4 seconds, then an instant follow-up time question.",
  },
  interrupt: {
    onScreen: "Mini interview: 6 quick questions.",
    teacherMove: "Cue with “finished time?” “not specific?” “again.”",
  },
  samestory: {
    task: "One topic, two versions: “I have visited…” / “I visited… when…”",
    purpose: "Deepen contrast with personal content.",
  },
  clockturn: {
    baseSentence: "I see that movie.",
    cueChain: ["ever", "last month", "already", "when I was in college", "never", "this year"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "Have you ever changed schools or jobs?",
      "When did you last learn something difficult?",
      "Tell me one experience and then give the exact time.",
    ],
  },
  scorecard: {
    teacherNote: "Track whether the learner still overuses past simple after “ever.”",
    canDoLine: "I can switch quickly and correctly between present perfect and past simple in a real exchange.",
  },
  retention: {
    homework: "Write 4 experience questions and answer them with both short and expanded versions.",
  },

  teacherGuide: {
    cover: {
      goal: "Same contrast as L3, now under real conversational speed.",
      say: ["Same two tenses as last time — today it's about speed, in a real back-and-forth."],
      do: ["Skip re-explaining the rule unless he's clearly lost it."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit the pattern live before drilling it.",
      say: ["Have you ever won something?", "When did you win it?"],
      do: ["Expect present perfect then past simple follow-up, same shape as L3's warm-up."],
      timing: "2 min",
    },
    contrast: {
      goal: "Sort time-word families by which tense they trigger.",
      say: ["ever, never, already, yet", "yesterday, in 2023, last summer, two days ago", "Which side usually goes with which tense?"],
      do: ["Have him sort them out loud, not just recognize them passively."],
      timing: "2 min",
    },
    makeit: {
      goal: "Build the automatic question-chain pattern.",
      say: ["Have you ever…?", "Yes, I have.", "When did you…?", "I… in…"],
      do: ["Run this chain 2-3 times with different topics until it feels automatic."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast topic-driven reps with instant time follow-up.",
      say: ["Achievements, food, travel, school experiences — pick whichever comes to mind first."],
      do: ["4 seconds for the first answer, then immediately ask the time follow-up."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Quick-fire mini interview, correcting only tense-marker mismatches.",
      say: ["Six quick questions — answer fast, I'll ask as we go."],
      do: ["Cue with “finished time?” “not specific?” “again.”"],
      timing: "3 min",
    },
    samestory: {
      goal: "One topic told as pure experience, then with a specific time.",
      say: ["I have visited…", "I visited… when…"],
      do: ["Use his real travel or achievement content to deepen the contrast."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate across a longer, mixed cue chain.",
      say: ["I see that movie.", "ever...", "last month...", "already...", "when I was in college...", "never...", "this year..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live production, no support shown.",
      say: ["Have you ever changed schools or jobs?", "When did you last learn something difficult?", "Tell me one experience and then give the exact time."],
      do: ["Delay feedback until the full answer is done."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score with a specific eye on the “ever + past simple” overuse error.",
      say: ["Let's score today."],
      do: ["Specifically track whether he still overuses past simple right after “ever” — that's the error this lesson targets."],
      timing: "2 min",
    },
    retention: {
      goal: "Push written-to-spoken transfer with both short and expanded answers.",
      say: ["Before next time: write 4 experience questions, and answer each one in both a short and an expanded version."],
      do: ["This builds material for spontaneous use, not just recognition."],
      timing: "1 min",
    },
  },
};

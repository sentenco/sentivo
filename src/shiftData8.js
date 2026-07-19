// SHIFT Lesson 8 — Past Simple vs Present Perfect vs Present Perfect Continuous
// Theme: changes and recent life patterns

export default {
  id: "shift-8",
  code: "L8",
  title: "Past Simple vs Present Perfect vs Present Perfect Continuous",
  tenses: "Past Simple vs Present Perfect vs Present Perfect Continuous",
  theme: "Changes and recent life patterns",
  mainGoal: "The learner chooses among finished past, present relevance, and duration up to now.",
  tag: "Progress",

  warmup: {
    onScreen: "What changed in your life this year? How long have you been doing it?",
    expectedOutput: "Present perfect or present perfect continuous, with optional past simple contrast.",
  },
  contrast: {
    examples: [
      "I started exercising in January.",
      "I have exercised a lot this year.",
      "I have been exercising since January.",
    ],
    prompt: "Which one gives a finished past point? Which one shows experience or result? Which one shows duration?",
  },
  makeIt: {
    onScreen: "past simple = finished time; present perfect = experience/result now; present perfect continuous = activity continuing until now",
    models: ["have/has + past participle", "have/has been + verb-ing"],
  },
  trigger: {
    prompts: [
      "What have you changed recently?",
      "When did you start that?",
      "How long have you been doing it?",
      "Have you improved this year?",
    ],
    cue: "“Finished time?” / “Result now?” / “Duration?”",
  },
  interrupt: {
    onScreen: "Theme: exercise, study habits, hobbies, health, work or study routines.",
    teacherMove: "Require quick repair after brief prompts.",
  },
  samestory: {
    task: "Describe one life change three ways.",
    example: "“I started learning guitar last year.” / “I've learned a lot this year.” / “I've been learning guitar for eight months.”",
  },
  clockturn: {
    baseSentence: "I study English.",
    cueChain: ["in 2025", "this year", "for six months", "last month", "since January"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "What have you improved recently?",
      "When did you begin it?",
      "How long have you been working on it?",
    ],
  },
  scorecard: {
    teacherNote: "Check whether duration expressions trigger present perfect continuous correctly.",
    canDoLine: "I can choose correctly among a finished past point, present relevance, and duration up to now.",
  },
  retention: {
    homework: "Write one 3-sentence progress update using all three target forms.",
  },

  teacherGuide: {
    cover: {
      goal: "Three-way contrast — the hardest tense-selection lesson so far.",
      say: ["Three tenses today, not two — this is the hardest choice we've done in this track so far."],
      do: ["Set expectations: this is meant to be genuinely harder than L1-L7."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit a natural change-in-life answer to sample all three forms.",
      say: ["What changed in your life this year?", "How long have you been doing it?"],
      do: ["Expect present perfect or present perfect continuous, maybe with a past simple contrast — listen before correcting."],
      timing: "2 min",
    },
    contrast: {
      goal: "Sort three near-identical sentences by which time-function each expresses.",
      say: ["I started exercising in January.", "I have exercised a lot this year.", "I have been exercising since January.", "Which one gives a finished past point? Which shows experience or result? Which shows duration?"],
      do: ["Take this slowly — three-way sorting is genuinely harder than a pair."],
      timing: "2 min",
    },
    makeit: {
      goal: "Anchor the three-way rule and both perfect forms.",
      say: ["Past simple = finished time.", "Present perfect = experience or result now.", "Present perfect continuous = activity continuing until now."],
      do: ["Drill have/has + past participle and have/has been + verb-ing back to back."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast reps forcing a three-way choice each time.",
      say: ["What have you changed recently?", "When did you start that?", "How long have you been doing it?", "Have you improved this year?"],
      do: ["Cue with “finished time?” “result now?” or “duration?” as needed."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Free talk on personal-change topics, correcting only tense-choice errors.",
      say: ["Tell me about exercise, study habits, a hobby, health, or a work/study routine — your choice."],
      do: ["Require a quick repair after each brief prompt, not a full restart."],
      timing: "3 min",
    },
    samestory: {
      goal: "One life change, told three ways using all three target forms.",
      say: ["I started learning guitar last year.", "I've learned a lot this year.", "I've been learning guitar for eight months."],
      do: ["Have him build his own three-way version using a real personal change."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate as the cue shifts between finished-time, result, and duration markers.",
      say: ["I study English.", "in 2025...", "this year...", "for six months...", "last month...", "since January..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live three-way production, no support.",
      say: ["What have you improved recently?", "When did you begin it?", "How long have you been working on it?"],
      do: ["Delay feedback until the full turn is done."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score with a specific eye on whether duration language correctly triggers present perfect continuous.",
      say: ["Let's score today."],
      do: ["Check specifically whether duration expressions (“for…”, “since…”) trigger present perfect continuous, not plain present perfect."],
      timing: "2 min",
    },
    retention: {
      goal: "Push a combined three-form written update.",
      say: ["Before next time: write one 3-sentence progress update using all three target forms."],
      do: ["Reused as review material at the start of Lesson 9."],
      timing: "1 min",
    },
  },
};

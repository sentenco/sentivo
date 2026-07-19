// SHIFT Lesson 7 — Going to vs Present Continuous (future)
// Theme: plans vs fixed arrangements

export default {
  id: "shift-7",
  code: "L7",
  title: "Going to vs Present Continuous",
  tenses: "Going to vs Present Continuous (future)",
  theme: "Plans vs fixed arrangements",
  mainGoal: "The learner distinguishes personal intention from scheduled arrangement.",
  tag: "Progress",

  warmup: {
    onScreen: "What are you going to do this weekend? What are you doing on Saturday afternoon?",
    expectedOutput: "Intention and arrangement.",
  },
  contrast: {
    examples: ["I'm going to study tonight.", "I'm meeting my cousin at 3 p.m. tomorrow."],
    prompt: "Which one is a plan in your head? Which one sounds arranged?",
  },
  makeIt: {
    onScreen: "be going to + base verb / present continuous + future time",
    models: ["I'm not going to stay home.", "Are you meeting anyone after class?"],
  },
  trigger: {
    prompts: [
      "What are you going to do during your next holiday?",
      "Who are you meeting this week?",
      "Are you going to start anything new soon?",
      "What are you doing tomorrow evening?",
    ],
    cue: "“Plan?” / “Arrangement?”",
  },
  interrupt: {
    onScreen: "Calendar strip with times and names — talk through your week.",
    teacherMove: "Talk through plans and fixed meetings.",
  },
  samestory: {
    task: "Say one future idea first as a plan, then as an arrangement.",
    example: "“I'm going to see the dentist.” / “I'm seeing the dentist on Friday at 2.”",
  },
  clockturn: {
    baseSentence: "I see my teacher.",
    cueChain: ["someday", "tomorrow at 4", "maybe next month", "on Monday at 10", "not fixed yet"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "What are you going to do during your next break?",
      "What are you doing tomorrow after lunch?",
      "Tell me one intention and one fixed arrangement.",
    ],
  },
  scorecard: {
    teacherNote: "Track whether the learner can signal arrangement with a concrete future time.",
    canDoLine: "I can tell apart a personal intention from a scheduled arrangement.",
  },
  retention: {
    homework: "Make 3 plan sentences and 3 arrangement sentences about the next 7 days.",
  },

  teacherGuide: {
    cover: {
      goal: "A finer distinction than L6 — both sides are future, the difference is fixedness.",
      say: ["New pair today: going to vs present continuous for the future — this is a finer distinction than last time."],
      do: ["Flag that this is subtler than will vs going to — both sides sound similar."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit one intention and one arrangement.",
      say: ["What are you going to do this weekend?", "What are you doing on Saturday afternoon?"],
      do: ["Expect an intention, then an arrangement — listen before correcting."],
      timing: "2 min",
    },
    contrast: {
      goal: "Land the plan-in-your-head vs arranged distinction.",
      say: ["I'm going to study tonight.", "I'm meeting my cousin at 3 p.m. tomorrow.", "Which one is a plan in your head? Which one sounds arranged?"],
      do: ["A concrete time + person is usually the tell for arrangement — point that out explicitly."],
      timing: "2 min",
    },
    makeit: {
      goal: "Quick form drill for both forms.",
      say: ["I'm not going to stay home.", "Are you meeting anyone after class?"],
      do: ["Keep this brief — move to production quickly."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast reps distinguishing plan from arrangement.",
      say: ["What are you going to do during your next holiday?", "Who are you meeting this week?", "Are you going to start anything new soon?", "What are you doing tomorrow evening?"],
      do: ["Cue with “plan?” or “arrangement?” as needed."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Talk through a real-feeling week of plans and fixed meetings.",
      say: ["Talk me through your week — plans and any fixed meetings you have."],
      do: ["Correct only meaning mismatches between the two forms."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same future idea as both an intention and an arrangement.",
      say: ["I'm going to see the dentist.", "I'm seeing the dentist on Friday at 2."],
      do: ["Have him add a concrete time/person to shift from plan to arrangement."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate as fixedness cues change.",
      say: ["I see my teacher.", "someday...", "tomorrow at 4...", "maybe next month...", "on Monday at 10...", "not fixed yet..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live production, no support.",
      say: ["What are you going to do during your next break?", "What are you doing tomorrow after lunch?", "Tell me one intention and one fixed arrangement."],
      do: ["Delay feedback until the full turn is done."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score with a focus on whether concrete future times signal arrangement correctly.",
      say: ["Let's score today."],
      do: ["Track specifically whether he uses a concrete future time to signal arrangement — that's the tell for this lesson."],
      timing: "2 min",
    },
    retention: {
      goal: "Recyclable plan/arrangement task for next lesson.",
      say: ["Before next time: make 3 plan sentences and 3 arrangement sentences about the next 7 days."],
      do: ["Reused as review material at the start of Lesson 8."],
      timing: "1 min",
    },
  },
};

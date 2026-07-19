// SHIFT Lesson 3 — Present Perfect vs Past Simple
// Theme: life experiences vs finished-time events

export default {
  id: "shift-3",
  code: "L3",
  title: "Present Perfect vs Past Simple",
  tenses: "Present Perfect vs Past Simple",
  theme: "Life experiences vs finished-time events",
  mainGoal: "The learner distinguishes unspecified life experience from completed events at a specific past time.",
  tag: "Progress",

  warmup: {
    onScreen: "Have you ever tried a food you didn't like? When did you try it?",
    expectedOutput: "First answer in present perfect, follow-up in past simple.",
  },
  contrast: {
    examples: ["I have visited Cebu.", "I visited Cebu in 2024."],
    prompt: "Which sentence gives a finished time? Which one is just life experience?",
  },
  makeIt: {
    onScreen: "have/has + past participle vs past form + finished time marker",
    models: ["Have you ever eaten sushi?", "I haven't eaten sushi.", "I ate sushi last month."],
    note: "Model trio: affirmative, negative, question.",
  },
  trigger: {
    prompts: [
      "Have you ever met a famous person?",
      "When did you last travel somewhere new?",
      "Have you ever lost something important?",
      "When did that happen?",
    ],
    cue: "“Specific time?” / “Life experience?”",
  },
  interrupt: {
    onScreen: "Theme: travel, food, achievements, mistakes.",
    teacherMove: "Learner gives short answers; interrupt if a finished-time marker appears with present perfect.",
  },
  samestory: {
    task: "Say one experience in two ways: life experience version, specific past-time version.",
    example: "“I have ridden a horse.” / “I rode a horse when I visited my uncle last year.”",
  },
  clockturn: {
    baseSentence: "I visit Baguio.",
    cueChain: ["ever", "last year", "already", "in 2025", "never", "yesterday"],
    goal: "Learner changes tense according to the time marker.",
  },
  pressure: {
    prompts: [
      "Have you ever done something scary?",
      "When did you last feel proud of yourself?",
      "Tell me one experience and one finished-time event.",
    ],
    rule: "No written support.",
  },
  scorecard: {
    teacherNote: "Emphasize time-marker sensitivity and tense choice.",
    canDoLine: "I can tell apart an unspecified life experience from a completed event at a specific past time.",
  },
  retention: {
    homework: "Record 3 “Have you ever…?” questions and 3 finished-time follow-ups.",
  },

  teacherGuide: {
    cover: {
      goal: "New tense pair — from time-in-progress contrast to time-specificity contrast.",
      say: ["New pair today: present perfect vs past simple — this time it's about whether the exact time matters."],
      do: ["Frame this as a new gap, not a continuation of L1/L2."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit one natural present-perfect-then-past-simple exchange.",
      say: ["Have you ever tried a food you didn't like?", "When did you try it?"],
      do: ["Expect present perfect first, then past simple on the follow-up — don't correct yet, just listen."],
      timing: "2 min",
    },
    contrast: {
      goal: "Show the finished-time vs unspecified-experience distinction directly.",
      say: ["I have visited Cebu.", "I visited Cebu in 2024.", "Which one gives a finished time? Which one is just life experience?"],
      do: ["Land the rule before moving to form."],
      timing: "2 min",
    },
    makeit: {
      goal: "Drill the form trio quickly.",
      say: ["Have you ever eaten sushi?", "I haven't eaten sushi.", "I ate sushi last month."],
      do: ["Have/has + past participle vs past form + finished-time marker — say it once, then move to production."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast reps forcing the specific-time follow-up.",
      say: ["Have you ever met a famous person?", "When did you last travel somewhere new?", "Have you ever lost something important?", "When did that happen?"],
      do: ["Cue with “specific time?” or “life experience?” when he stalls."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Free talk on travel/food/achievements/mistakes, correcting only the finished-time-marker error.",
      say: ["Tell me about travel, food, an achievement, or a mistake — your choice."],
      do: ["Interrupt only if a finished-time marker (yesterday, last year, in 2020...) appears with present perfect."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same experience, told as pure experience then as a specific-time event.",
      say: ["I have ridden a horse.", "I rode a horse when I visited my uncle last year."],
      do: ["Have him produce his own version of both, using one real experience."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate one base idea across a chain of mixed time markers.",
      say: ["I visit Baguio.", "ever...", "last year...", "already...", "in 2025...", "never...", "yesterday..."],
      do: ["No pause between cues — the marker should instantly trigger the right tense."],
      timing: "3 min",
    },
    pressure: {
      goal: "No written support — live production only.",
      say: ["Have you ever done something scary?", "When did you last feel proud of yourself?", "Tell me one experience and one finished-time event."],
      do: ["No written support.", "Delay feedback until the full turn is done."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score with a specific eye on time-marker sensitivity.",
      say: ["Let's score today."],
      do: ["Emphasize time-marker sensitivity and tense choice as the main signal, not just raw accuracy."],
      timing: "2 min",
    },
    retention: {
      goal: "Recyclable production task for next lesson's warm-up.",
      say: ["Before next time: record 3 ‘Have you ever…?’ questions and 3 finished-time follow-ups."],
      do: ["This becomes the review material at the start of Lesson 4."],
      timing: "1 min",
    },
  },
};

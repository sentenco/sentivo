// FORGE lessons: one-to-one adult speaking lessons, independent of the
// IGNITE curriculum system (no Supabase, no lesson/lesson_slides tables --
// static content like storybookData.js, rendered by Forge.jsx).
//
// FORGE is for learners who understand English and can speak, but lack
// vocabulary. Each lesson drills 5 target words through one named speaking
// technique. This file holds Lesson 1: "A Day at Work" / "Say the Picture".

export const WORDS = [
  {
    word: "arrive",
    imageNote: "Someone arriving at work in the morning, walking in the door with a coffee.",
    starter: "In the morning, I arrive…",
    meaning: "to get to a place",
    example: "She arrives at the office at 9 a.m.",
  },
  {
    word: "review",
    imageNote: "Someone looking closely at a computer screen, reading through something.",
    starter: "First, I review…",
    meaning: "to look at something carefully",
    example: "I review my messages every morning.",
  },
  {
    word: "solve",
    imageNote: "Someone fixing a problem or debugging code, focused and thinking.",
    starter: "When something breaks, I solve…",
    meaning: "to find the answer to a problem",
    example: "She solved the bug in under an hour.",
  },
  {
    word: "develop",
    imageNote: "A small team working together around a laptop on a project.",
    starter: "With my team, I develop…",
    meaning: "to build or create something over time",
    example: "Our team develops a new feature every month.",
  },
  {
    word: "wrap up",
    imageNote: "Someone leaving work in the evening, a wall clock showing 5 o'clock.",
    starter: "At the end of the day, I wrap up…",
    meaning: "to finish something",
    example: "Let's wrap up the meeting in five minutes.",
  },
];

export default {
  id: "forge-1",
  code: "L1",
  title: "A Day at Work",
  technique: "Say the Picture",
  format: "picture",
  tag: "Baseline",
  subtitle: "Talk about your day — morning to evening.",
  techniqueLine: "Say the Picture — look, then talk.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "What’s your job?",
      "Where do you work?",
      "What time do you arrive?",
    ],
  },

  yourTurn: {
    prompt: "Walk me through your day — from arrive to wrap up. (3–4 sentences)",
    guiderail: true,
  },

  pushIt: {
    prompt: "Which part of your day do you like most — and why?",
    modelFrame: "I like… because…",
  },

  scorecard: {
    canDoLine: "I can describe my workday using: arrive, review, solve, develop, wrap up.",
    rows: [
      { label: "Range", max: 3 },
      { label: "Accuracy", max: 3 },
      { label: "Fluency", max: 6 },
      { label: "Interaction", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "baseline",
  },

  teacherGuide: {
    cover: {
      goal: "Set the frame — this is the diagnostic/intake lesson. Keep it warm, not test-like.",
      say: [
        "Today we're just going to talk about your day, from morning to evening — nothing to prepare, nothing to get wrong.",
        "I'll show you five words as we go, and by the end you'll use all of them.",
      ],
      do: ["Let the title sit for a moment before moving on.", "This is also your first real listen to him — treat it like a relaxed conversation."],
      timing: "1 min",
    },
    warmup: {
      goal: "Live intake — your first real listen to this student, not just a warm-up.",
      say: ["Let's start easy — just tell me a bit about your work.", "What's your job?", "Where do you work?", "What time do you arrive?"],
      do: ["Let him talk freely, don't correct.", "This is quiet intake — note his baseline level, vocabulary gaps, and confidence as he answers."],
      timing: "3 min",
    },
    wordload: {
      goal: "Introduce the 5 words with picture + fixed starter, no translations.",
      say: ["I'm going to show you five words for today. Each one has a picture and a starter sentence — the starter is fixed, you'll use the same shape every time you see a similar picture."],
      do: ["Go through each row once, pointing at the picture and reading the starter aloud.", "Don't ask him to produce anything yet — this is just introduction."],
      timing: "3 min",
    },
    picture: {
      goal: "One picture at a time — he narrates using the starter, you model once first.",
      say: [
        "Picture, then starter, then the full sentence — that's the whole move.",
        "First, I review my screen. Then I solve the problem.",
        "Now it's your turn — look at the picture and finish the starter.",
      ],
      do: [
        "Model the first picture yourself before handing over.",
        "For each of the 5 pictures: show it, let him complete the starter, gently correct only real errors.",
        "Note which words he hedges on — those become homework targets.",
      ],
      timing: "6 min",
    },
    yourturn: {
      goal: "The diagnostic — walk through the whole day unaided, note fluency and freezes.",
      say: ["Now put it all together — walk me through your day, from arrive to wrap up. Three or four sentences."],
      do: ["This is the actual baseline measurement — don't help unless he's fully stuck.", "Note turn length, hesitations, and any words he skips or avoids — this defines his starting point."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional bonus — only if time allows, no pressure.",
      say: ["One more, just for fun if we have time — which part of your day do you like most, and why?"],
      do: ["Skip if short on time.", "Model 'I like… because…' if he needs a nudge."],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score the baseline honestly — this is the number every future lesson is measured against.",
      say: ["Let's put a number on today. This isn't a test — it's just where we're starting from."],
      do: ["Score Range/Accuracy/Fluency/Interaction based on the Your Turn diagnostic performance.", "Total becomes the baseline — write it down somewhere you'll remember for L10."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L2's words with real definitions and examples before he leaves.",
      say: ["Before next class, look over these five new words — read the meaning and the example sentence for each."],
      do: ["Point out these are a new kind of word — describing places and people, not actions.", "Make sure he's seen all 5 before the slide ends."],
      timing: "1 min",
    },
  },
};

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

  homework: {
    heading: "Grow your words before next class.",
    passage: [
      "It's 9 a.m. and Maya ",
      { word: "arrive", text: "arrives" },
      " at the office with a coffee in hand. She sits down and ",
      { word: "review", text: "reviews" },
      " her messages from the night before. A few minutes later, a teammate calls — the app is crashing for users in Europe. Maya ",
      { word: "solve", text: "solves" },
      " the bug in under an hour and pushes a fix. In the afternoon, she and her team ",
      { word: "develop", text: "develop" },
      " a new feature for the mobile app. By 5 p.m., she ",
      { word: "wrap up", text: "wraps up" },
      " her tasks, saves her work, and heads home.",
    ],
  },
};

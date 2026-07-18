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
  },
  {
    word: "review",
    imageNote: "Someone looking closely at a computer screen, reading through something.",
    starter: "First, I review…",
  },
  {
    word: "solve",
    imageNote: "Someone fixing a problem or debugging code, focused and thinking.",
    starter: "When something breaks, I solve…",
  },
  {
    word: "develop",
    imageNote: "A small team working together around a laptop on a project.",
    starter: "With my team, I develop…",
  },
  {
    word: "wrap up",
    imageNote: "Someone leaving work in the evening, a wall clock showing 5 o'clock.",
    starter: "At the end of the day, I wrap up…",
  },
];

export default {
  id: "forge-1",
  code: "L1",
  title: "A Day at Work",
  technique: "Say the Picture",
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

  spotlight: {
    line: "Picture → starter → full sentence.",
    demoImageNote: "An engineer sitting at a desk, looking at a screen.",
    example: "First, I review my screen. Then I solve the problem.",
  },

  tapAndSay: {
    sceneImageNote: "An engineer's full workday shown as one wide scene, with five distinct moments visible left to right: arriving at the office, reviewing a screen, solving a problem at a whiteboard, developing something with teammates, and wrapping up as they leave at a clock reading 5 o'clock.",
    instruction: "Tap a moment → say the full sentence.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Walk me through your day — from arrive to wrap up. (3–4 sentences)",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
    teacherNote: "This is the diagnostic — assess fluency, turn length, missing words.",
  },

  pushIt: {
    prompt: "Which part of your day do you like most — and why?",
    modelFrame: "I like… because…",
  },

  selfCheck: {
    canDoLine: "I can describe my workday using: arrive, review, solve, develop, wrap up.",
    scorecard: [
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
    items: [
      { label: "Read your passage", detail: "Passage to be added." },
      { label: "Next words", detail: "crowded · quiet · busy · friendly · tall" },
      { label: "Record a voice note", detail: "3 minutes, describing your office and the people you work with." },
    ],
  },
};

// FORGE Lesson 7 — "Health & Habits" / "Echoing"
// Grammar: present simple habits + frequency. Final lesson of the Echoing format group.

export const WORDS = [
  {
    word: "cut down",
    question: "What do you want to cut down on?",
    answer: "I want to cut down on ______.",
    meaning: "to reduce how much of something you do or have",
    example: "I want to cut down on coffee.",
  },
  {
    word: "keep up",
    question: "What habit do you keep up?",
    answer: "I keep up ______ every ______.",
    meaning: "to continue doing something regularly",
    example: "I keep up running every week.",
  },
  {
    word: "skip",
    question: "Do you ever skip meals?",
    answer: "I sometimes skip ______, when ______.",
    meaning: "to not do something you usually do",
    example: "I sometimes skip breakfast, when I'm in a hurry.",
  },
  {
    word: "stick to",
    question: "What routine do you stick to?",
    answer: "I stick to ______ because ______.",
    meaning: "to continue following a plan or routine",
    example: "I stick to a morning routine because it keeps me focused.",
  },
  {
    word: "quit",
    question: "Is there anything you want to quit?",
    answer: "I want to quit ______.",
    meaning: "to stop doing something completely",
    example: "I want to quit checking my phone before bed.",
  },
];

export default {
  id: "forge-7",
  code: "L7",
  title: "Health & Habits",
  technique: "Echoing",
  gameLabel: "Echo Round",
  format: "echo",
  tag: "Progress",
  subtitle: "Talk about your health and habits.",
  techniqueLine: "Echoing — start your answer with my words, then keep going.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "How often do you exercise?",
      "What's one healthy habit you have?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Hear the question → repeat the key words → finish the sentence.",
    demoQ: "What do you want to cut down on?",
    demoA: "I want to cut down on coffee.",
  },

  game: {
    instruction: "Repeat my words to start, then answer in a full sentence.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "I'll ask about your health and habits. Echo my words, then keep the answer going.",
    guiderail: false,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Echo one question, answer it, then add one more sentence I didn't ask for.",
    modelFrame: "I want to cut down on coffee. I usually have three cups a day, so I'm trying to stop after lunch.",
  },

  scorecard: {
    canDoLine: "I can talk about my habits using: cut down, keep up, skip, stick to, quit.",
    rows: [
      { label: "Range", max: 3 },
      { label: "Accuracy", max: 3 },
      { label: "Fluency", max: 6 },
      { label: "Interaction", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
  },

  homework: {
    heading: "Grow your words before next class.",
    items: [
      { label: "Read your passage", detail: "Passage to be added." },
      { label: "Next lesson's 5 words", detail: "head to · get off · transfer · book · miss" },
      { label: "Record a voice note", detail: "Answer 3 questions about your daily habits. Echo each question, then add one extra sentence on your own." },
    ],
  },
};

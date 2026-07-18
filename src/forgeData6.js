// FORGE Lesson 6 — "Opinions & Preferences" / "Echoing"
// Grammar: prefer / would rather + reasons. Second lesson of the Echoing format group.

export const WORDS = [
  {
    word: "prefer",
    question: "Where do you prefer to work?",
    answer: "I prefer to work ______, because ______.",
    meaning: "to like one thing more than another",
    example: "I prefer to work from home, because it's quiet.",
  },
  {
    word: "enjoy",
    question: "What do you enjoy on weekends?",
    answer: "I enjoy ______ on weekends.",
    meaning: "to get pleasure from doing something",
    example: "I enjoy hiking on weekends.",
  },
  {
    word: "mind",
    question: "Do you mind working late?",
    answer: "I don't mind ______, but ______.",
    meaning: "to feel annoyed or bothered by something",
    example: "I don't mind working late, but I need a break first.",
  },
  {
    word: "rather",
    question: "Would you rather stay in or go out?",
    answer: "I'd rather ______ than ______.",
    meaning: "to prefer one choice over another",
    example: "I'd rather stay in than go out tonight.",
  },
  {
    word: "depends",
    question: "Do you like your job?",
    answer: "It depends — ______.",
    meaning: "the answer changes based on something else",
    example: "It depends — some days are better than others.",
  },
];

export default {
  id: "forge-6",
  code: "L6",
  title: "Opinions & Preferences",
  technique: "Echoing",
  gameLabel: "Echo Round",
  format: "echo",
  tag: "Progress",
  subtitle: "Talk about your opinions and preferences.",
  techniqueLine: "Echoing — start your answer with my words, then keep going.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "Do you prefer mornings or evenings?",
      "What's something you really enjoy doing?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Hear the question → repeat the key words → finish the sentence.",
    demoQ: "Where do you prefer to work?",
    demoA: "I prefer to work from home, because it's quiet.",
  },

  game: {
    instruction: "Repeat my words to start, then answer in a full sentence.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "I'll ask about your opinions. Echo my words, then give a reason each time.",
    guiderail: false,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Echo one question, answer it, then add one more sentence I didn't ask for.",
    modelFrame: "I prefer to work from home, because it's quiet. I also get more done without interruptions.",
  },

  scorecard: {
    canDoLine: "I can talk about my opinions using: prefer, enjoy, mind, rather, depends.",
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
      { label: "Next lesson's 5 words", detail: "cut down · keep up · skip · stick to · quit" },
      { label: "Record a voice note", detail: "Answer 3 questions about your habits. Echo each question, then add a reason." },
    ],
  },
};

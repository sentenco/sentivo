// FORGE Lesson 5 — "Mix: Errands & Plans" / "Echoing"
// Recycles words from Lessons 1-4. First lesson of the Echoing format group (L5-L7).

export const WORDS = [
  {
    word: "order",
    question: "What do you usually order?",
    answer: "I usually order ______, because ______.",
    meaning: "to ask for food or something to be brought to you",
    example: "I usually order pizza, because it's quick.",
  },
  {
    word: "visited",
    question: "Where did you visit recently?",
    answer: "I visited ______ last ______.",
    meaning: "went to see a place",
    example: "I visited Lisbon last spring.",
  },
  {
    word: "meet up",
    question: "Who do you meet up with?",
    answer: "I meet up with ______ on ______.",
    meaning: "to see someone you arranged to see",
    example: "I meet up with my sister on Sundays.",
  },
  {
    word: "book",
    question: "What do you book online?",
    answer: "I book ______ when ______.",
    meaning: "to arrange or reserve something in advance",
    example: "I book tickets online when I plan a trip.",
  },
  {
    word: "plan",
    question: "What are you planning this week?",
    answer: "This week, I'm planning to ______.",
    meaning: "to decide what to do before doing it",
    example: "This week, I'm planning to clean the apartment.",
  },
];

export default {
  id: "forge-5",
  code: "L5",
  title: "Mix: Errands & Plans",
  technique: "Echoing",
  gameLabel: "Echo Round",
  format: "echo",
  tag: "Progress",
  subtitle: "Talk about your errands and plans.",
  techniqueLine: "Echoing — start your answer with my words, then keep going.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "What do you usually do after work?",
      "What errands do you have this week?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Hear the question → repeat the key words → finish the sentence.",
    demoQ: "What do you usually order?",
    demoA: "I usually order pizza, because it's quick.",
  },

  game: {
    instruction: "Repeat my words to start, then answer in a full sentence.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "I'll ask about your week — errands and plans. Echo my words, then keep talking.",
    guiderail: false,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Echo one of my questions, answer it, then add one more sentence I didn't ask for.",
    modelFrame: "I usually order pizza, because it's quick. I also like it because I can share it with friends.",
  },

  scorecard: {
    canDoLine: "I can answer questions about errands and plans using: order, visited, meet up, book, plan.",
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
      { label: "Next lesson's 5 words", detail: "prefer · enjoy · mind · rather · depends" },
      { label: "Record a voice note", detail: "Answer 3 questions about what you like. Start each answer by repeating my question words." },
    ],
  },
};

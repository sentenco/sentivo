// FORGE Lesson 8 — "Travel & Directions" / "Question Chain"
// Grammar: prepositions of movement. First lesson of the Question Chain format group (L8-L10).

const CHAIN_DEMO = {
  line: "1 question → (silently think 2 follow-ups) → 1 folded answer.",
  demoQ: "What did you do this weekend?",
  demoFollowups: ["Who with?", "Why did you like it?"],
  demoA: "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect.",
};

export const WORDS = [
  {
    word: "head to",
    question: "How do you usually get to work?",
    followups: ["Where?", "When?"],
    example: "I usually head to the station in the morning, because it's near my office.",
    meaning: "to go toward a place",
  },
  {
    word: "get off",
    question: "Where do you usually get off?",
    followups: ["Which stop?", "Why?"],
    example: "I get off at the third stop, because it's closest to work.",
    meaning: "to leave a bus, train, or other vehicle",
  },
  {
    word: "transfer",
    question: "Do you have to transfer on your way to work?",
    followups: ["Where?", "How often?"],
    example: "I transfer at the main station every day, and it takes ten minutes.",
    meaning: "to change from one bus or train to another",
  },
  {
    word: "book",
    question: "How do you book your travel tickets?",
    followups: ["What?", "When?"],
    example: "I book my tickets online the night before, so I don't wait in line.",
    meaning: "to arrange or reserve something in advance",
  },
  {
    word: "miss",
    question: "Have you ever missed a train or bus?",
    followups: ["What happened?", "What next?"],
    example: "Once I missed my train, so I had to wait, but I still arrived on time.",
    meaning: "to not catch a bus, train, or flight in time",
  },
];

export default {
  id: "forge-8",
  code: "L8",
  title: "Travel & Directions",
  technique: "Question Chain",
  gameLabel: "Chain It",
  format: "chain",
  tag: "Progress",
  subtitle: "Talk about how you travel.",
  techniqueLine: "Question Chain — one question from me. You answer it, and the two I didn't ask yet.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "How do you usually get to work?",
      "Do you like traveling by train or car?",
    ],
  },

  homeworkCheck: {
    line: "Tell me the whole story.",
  },

  howItWorks: CHAIN_DEMO,

  game: {
    instruction: "I ask ONE question and stop. You answer it — and the two questions I didn't ask. Join your sentences with because, and, so, or but.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Tell me about how you travel to work or on a trip.",
    guiderail: false,
    note: "Before you speak, think — what two things would I naturally ask next? Answer those too.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Chain three follow-ups this time, or tell a 5–6 sentence mini-story from one prompt.",
    modelFrame: "I traveled to Rome last spring. I went with two friends because we wanted a short break, we stayed near the center so we could walk everywhere, and we loved it so much that we're already planning to go back.",
  },

  scorecard: {
    canDoLine: "I can tell a connected story about travel using: head to, get off, transfer, book, miss.",
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
      { label: "Next lesson's 5 words", detail: "download · update · back up · log in · crash" },
      { label: "Record a voice note", detail: "Answer one question about a recent trip. Fold in two follow-ups." },
    ],
  },
};

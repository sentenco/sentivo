// FORGE Lesson 3 — "Past Experiences" / "Fill the Gap"
// Grammar: past simple. First lesson of the Fill the Gap format group (L3+L4).

export const WORDS = [
  {
    word: "visited",
    imageNote: "Someone standing in front of a famous landmark, looking amazed, camera in hand.",
    frame: "Last month, I visited ______.",
    meaning: "went to see a place",
    example: "She visited Lisbon last summer.",
  },
  {
    word: "tried",
    imageNote: "Someone tasting new food for the first time, curious expression.",
    frame: "For the first time, I tried ______.",
    meaning: "did or tasted something new",
    example: "I tried sushi for the first time last week.",
  },
  {
    word: "met",
    imageNote: "Two people shaking hands and smiling, meeting for the first time.",
    frame: "Last week, I met ______.",
    meaning: "saw and talked to someone for the first time",
    example: "I met my new neighbor yesterday.",
  },
  {
    word: "stayed",
    imageNote: "Someone checking into a hotel room, suitcase beside them.",
    frame: "On my trip, I stayed ______.",
    meaning: "lived somewhere for a short time",
    example: "We stayed at a small hotel near the beach.",
  },
  {
    word: "lost",
    imageNote: "Someone searching through their bag, looking worried.",
    frame: "One time, I lost ______.",
    meaning: "could not find something anymore",
    example: "I lost my keys on the train once.",
  },
];

export default {
  id: "forge-3",
  code: "L3",
  title: "Past Experiences",
  technique: "Fill the Gap",
  gameLabel: "Gap Sprint",
  format: "gap",
  tag: "Progress",
  subtitle: "Talk about something you did recently.",
  techniqueLine: "Fill the Gap — I give you the start, you finish it out loud.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "What did you do last weekend?",
      "When was the last time you tried something new?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Read the start → fill the blank → say the whole sentence.",
    demoQ: "Last month, I visited ______.",
    demoA: "Last month, I visited Lisbon.",
  },

  game: {
    instruction: "Finish each sentence out loud, then go to the next.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Tell me about something you did recently. (3–4 sentences)",
    guiderail: true,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Tell me about two things that happened on the same day — join them with because, but, or so.",
    modelFrame: "I visited the museum, but it was closed, so I went to the park instead.",
  },

  scorecard: {
    canDoLine: "I can talk about things I did recently using: visited, tried, met, stayed, lost.",
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
      { label: "Next lesson's 5 words", detail: "meet up · book · cancel · plan · join" },
      { label: "Record a voice note", detail: "Talk about a plan you have. Use each new word once." },
    ],
  },
};

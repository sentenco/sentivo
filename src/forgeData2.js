// FORGE Lesson 2 — "Around the Office" / "Say the Picture"
// Same technique as L1 (Say the Picture), different topic: describing
// people and places. Grammar-in-use: There is/are + adjectives; previews
// "because" (L2's skill focus: giving a reason).

export const WORDS = [
  {
    word: "crowded",
    imageNote: "A busy open-plan office full of people in the morning, everyone arriving at once.",
    starter: "In the morning, the office is crowded.",
    meaning: "full of people",
    example: "The train is crowded every morning.",
  },
  {
    word: "quiet",
    imageNote: "An empty meeting room, calm and still, no one inside.",
    starter: "In the meeting room, it's quiet.",
    meaning: "not noisy, calm",
    example: "The library is always quiet.",
  },
  {
    word: "busy",
    imageNote: "Someone at a desk full of notes and sticky notes, looking occupied with many tasks.",
    starter: "On Mondays, everyone is busy.",
    meaning: "having a lot to do",
    example: "She's busy with a new project this week.",
  },
  {
    word: "tall",
    imageNote: "A tall office building or skyscraper seen from the street, reaching high into the sky.",
    starter: "My office is in a tall building.",
    meaning: "having great height",
    example: "That's the tallest building in the city.",
  },
  {
    word: "friendly",
    imageNote: "Coworkers smiling and chatting warmly at a desk.",
    starter: "My coworkers are very friendly.",
    meaning: "kind and welcoming",
    example: "Everyone on my team is really friendly.",
  },
];

export default {
  id: "forge-2",
  code: "L2",
  title: "Around the Office",
  technique: "Say the Picture",
  format: "picture",
  tag: "Progress",
  subtitle: "Describe the people and places around you.",
  techniqueLine: "Say the Picture — look, then talk.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "Is your office big or small?",
      "Are your coworkers friendly?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  yourTurn: {
    prompt: "Describe your office and the people you work with. (3–4 sentences)",
    guiderail: true,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "What's your favorite part of your office — and why?",
    modelFrame: "I like the kitchen, because it's quiet and friendly.",
  },

  scorecard: {
    canDoLine: "I can describe my office and the people in it using: crowded, quiet, busy, tall, friendly.",
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
      { label: "Read your passage", detail: "A short story about visiting a new place, using this lesson's 5 words." },
      { label: "Next lesson's 5 words", detail: "visited · tried · met · stayed · lost" },
      { label: "Record a voice note", detail: "Describe a place you visited recently. Use each new word once." },
    ],
  },
};

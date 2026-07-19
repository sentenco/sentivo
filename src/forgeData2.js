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

  teacherGuide: {
    cover: {
      goal: "Same technique as L1, new topic — describing people and places.",
      say: ["Same game as last time — look at a picture, say the sentence. New topic today: your office and the people in it."],
      do: ["Quick recap of the Say-the-Picture move if he seems to have forgotten it."],
      timing: "1 min",
    },
    warmup: {
      goal: "Light warm-up questions to prime the topic before the homework check.",
      say: ["Is your office big or small?", "Are your coworkers friendly?"],
      do: ["Keep this brief — just enough to get him thinking about his workplace."],
      timing: "1 min",
    },
    homeworkcheck: {
      goal: "Check the L1 homework landed before teaching anything new.",
      say: ["Last time I gave you five new words to look at. Tell me one thing you remember or recorded."],
      do: ["Accept any genuine attempt — this isn't a test, just a bridge into today's words.", "If he's blank, that's fine — move straight into Word Load, the words are about to be taught properly anyway."],
      timing: "2 min",
    },
    wordload: {
      goal: "Introduce crowded/quiet/busy/tall/friendly with picture + starter.",
      say: ["Five new words today, same format — picture, then a starter sentence."],
      do: ["Go through each row, reading the starter aloud once."],
      timing: "3 min",
    },
    picture: {
      goal: "Narrate each picture using its starter — model once first.",
      say: ["In the morning, the office is crowded.", "Now you try the next one."],
      do: ["Model the first picture, then hand over for the remaining four.", "Note any word he avoids — flag it for homework."],
      timing: "6 min",
    },
    yourturn: {
      goal: "Describe the office and coworkers unaided, 3-4 sentences.",
      say: ["Now describe your own office and the people you work with — three or four sentences."],
      do: ["Let him build it himself; only use the guiderail starters if he freezes."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — favorite part of the office and why.",
      say: ["If we have a minute — what's your favorite part of your office, and why?"],
      do: ["Model 'I like the kitchen, because it's quiet and friendly' if needed."],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today and compare informally to L1's energy and fluency.",
      say: ["Let's score today — see how this compares to last time."],
      do: ["Score normally; no formal L1 comparison line yet, but it's worth mentioning out loud if he seems more fluent."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L3's words (visited, tried, met, stayed, lost) with definitions and examples.",
      say: ["Next lesson we start talking about the past — look over these five words before we meet again."],
      do: ["Flag that these are past-tense action words, different from today's descriptive words."],
      timing: "1 min",
    },
  },
};

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

  teacherGuide: {
    cover: {
      goal: "New technique — Echoing. No picture, no blank — catch my words and answer in full.",
      say: ["New move today — no picture, no blank to fill. I'll ask a question, and you repeat the key part of my question to start your answer."],
      do: ["Explain clearly: this is harder than before because there's no visual scaffold — the shape comes from listening."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime the mixed errands/plans topic.",
      say: ["What do you usually do after work?", "What errands do you have this week?"],
      do: ["Let him answer naturally."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L4's homework landed.",
      say: ["Tell me one thing you recorded about your plan."],
      do: ["Accept any attempt, move on."],
      timing: "1 min",
    },
    wordload: {
      goal: "Show the 5 recycled words with teacher question + echoed answer shape.",
      say: ["These are words you already know from earlier lessons — today we reuse them in a new way."],
      do: ["Read each question + answer pair aloud once."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model hearing the question, catching the key words, and finishing in a full sentence.",
      say: ["What do you usually order?", "I usually order pizza, because it's quick."],
      do: ["Ask the demo question, then answer it yourself exactly the way you want him to."],
      timing: "2 min",
    },
    game: {
      goal: "Fire each question, he echoes + completes.",
      say: ["I'll ask, you echo my words to start, then finish the sentence."],
      do: ["Ask each of the 5 questions in turn, let him echo + answer, use escape hatches if stuck."],
      timing: "4 min",
    },
    yourturn: {
      goal: "A short linked conversation, no guiderail shown.",
      say: ["I'll ask about your week — errands and plans. Echo my words, then keep talking."],
      do: ["Ask 2-3 natural follow-up questions live; this is unscaffolded, so give him room."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — echo, answer, then add an extra unprompted sentence.",
      say: ["Echo one of my questions, answer it, then add one more sentence I didn't ask for."],
      do: ["Model: 'I usually order pizza, because it's quick. I also like it because I can share it with friends.'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today — first lesson of the Echoing block.",
      say: ["Let's score today's echoing."],
      do: ["Score normally; no prior benchmark since this is a new block."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L6's words (prefer, enjoy, mind, rather, depends).",
      say: ["Next lesson is about opinions and preferences — take a look at these words first."],
      do: ["No structural flag needed — same technique continues into L6."],
      timing: "1 min",
    },
  },
};

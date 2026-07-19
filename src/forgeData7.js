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

  teacherGuide: {
    cover: {
      goal: "Final Echoing lesson — health & habits.",
      say: ["Last echoing lesson — today it's about your health and habits."],
      do: ["Quick recap of echoing if needed."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime the habits topic.",
      say: ["How often do you exercise?", "What's one healthy habit you have?"],
      do: ["Let him answer freely."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L6's homework landed.",
      say: ["Tell me one thing you recorded about your opinions."],
      do: ["Accept any attempt, move on."],
      timing: "1 min",
    },
    wordload: {
      goal: "Show cut down/keep up/skip/stick to/quit with question + answer shape.",
      say: ["Five habit words today, same format as before."],
      do: ["Read each pair aloud once."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model the echo move for habits.",
      say: ["What do you want to cut down on?", "I want to cut down on coffee."],
      do: ["Ask, then answer yourself."],
      timing: "2 min",
    },
    game: {
      goal: "Drill all 5 habit questions.",
      say: ["I'll ask, you echo, then answer."],
      do: ["Fire each question in turn, use escape hatches if stuck."],
      timing: "4 min",
    },
    yourturn: {
      goal: "A short habits conversation, closes the Echoing block.",
      say: ["I'll ask about your health and habits. Echo my words, then keep the answer going."],
      do: ["Ask 2-3 live follow-ups; this closes the block, so let him carry more of the talking."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — echo, answer, add an extra sentence.",
      say: ["Echo one question, answer it, then add one more sentence I didn't ask for."],
      do: ["Model: 'I want to cut down on coffee. I usually have three cups a day, so I'm trying to stop after lunch.'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today — closes the Echoing block.",
      say: ["This closes our Echoing block — let's see the score."],
      do: ["Score normally; note aloud if fluency has grown across L5-L7."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L8's words (head to, get off, transfer, book, miss) — new technique next time.",
      say: ["Next lesson is the hardest move yet — I'll ask one question, and you'll answer it plus two questions I didn't ask. Take a look at these travel words first."],
      do: ["Flag explicitly: L8 introduces Question Chain, a new and harder technique."],
      timing: "1 min",
    },
  },
};

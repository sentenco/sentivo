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

  teacherGuide: {
    cover: {
      goal: "Same technique as L5 — Echoing — new topic: opinions & preferences.",
      say: ["Same move as last time, new topic — today it's about what you prefer and enjoy."],
      do: ["Quick recap of echoing if needed."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime opinion-sharing before the drill.",
      say: ["Do you prefer mornings or evenings?", "What's something you really enjoy doing?"],
      do: ["Let him answer freely."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L5's homework landed.",
      say: ["Tell me one thing you recorded about your week."],
      do: ["Accept any attempt, move on."],
      timing: "1 min",
    },
    wordload: {
      goal: "Show prefer/enjoy/mind/rather/depends with question + answer shape.",
      say: ["Five opinion words today, same format."],
      do: ["Read each pair aloud once."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model the echo + reason move.",
      say: ["Where do you prefer to work?", "I prefer to work from home, because it's quiet."],
      do: ["Ask, then answer yourself with a reason attached — reasons are the focus this lesson."],
      timing: "2 min",
    },
    game: {
      goal: "Drill all 5 opinion questions.",
      say: ["I'll ask, you echo, then answer with a reason."],
      do: ["Fire each question, insist on a reason in the answer, not just the echo."],
      timing: "4 min",
    },
    yourturn: {
      goal: "A short opinion conversation, reason required each time.",
      say: ["I'll ask about your opinions. Echo my words, then give a reason each time."],
      do: ["Ask 2-3 live follow-ups; push gently for 'because' every time."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — echo, answer, add an extra sentence.",
      say: ["Echo one question, answer it, then add one more sentence I didn't ask for."],
      do: ["Model: 'I prefer to work from home, because it's quiet. I also get more done without interruptions.'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today.",
      say: ["Let's score today's opinions round."],
      do: ["Score normally."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L7's words (cut down, keep up, skip, stick to, quit).",
      say: ["Next lesson is about health and habits — take a look at these words first."],
      do: ["No structural flag needed."],
      timing: "1 min",
    },
  },
};

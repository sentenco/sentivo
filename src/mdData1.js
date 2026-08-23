// Modals -- Lesson 1: Ability

export default {
  number: 1,
  code: "1",
  title: "Ability",
  modals: ["can", "could"],
  leadIn: "What's something you can do now that you couldn't do five years ago?",
  teach: [
    {
      name: "Can — Present Ability",
      definition: "Shows what someone is capable of doing now or in general.",
      examples: ["I can swim.", "She can speak three languages.", "They can solve the puzzle."],
    },
    {
      name: "Could — Past Ability",
      definition: "Shows a general ability someone had in the past — a skill they had over time, not one specific success.",
      examples: ["I could swim when I was five.", "She could read by age four.", "We could hear the music from outside."],
    },
  ],
  compareLeftLabel: "Can — present",
  compareRightLabel: "Could — past",
  compareNote: "Can places the ability now. Could moves the exact same idea into the past.",
  comparePairs: [
    { left: "I can play the piano.", right: "I could play the piano as a kid." },
    { left: "He can run fast.", right: "He could run fast when he was younger." },
  ],
  guided: [
    { prompt: "He ___ speak Japanese fluently. (present ability)", answer: "can" },
    { prompt: "My brother ___ fix computers really well. (present ability)", answer: "can" },
    { prompt: "I ___ hold my breath for a minute. (present ability)", answer: "can" },
    { prompt: "I ___ drive when I was sixteen. (past, general ability)", answer: "could" },
    { prompt: "She ___ climb trees when she was a kid.", answer: "could" },
    { prompt: "They ___ run much faster when they were younger.", answer: "could" },
  ],
  practice: [
    "Write one sentence about something you can do now.",
    "Write one sentence about something you could do as a child.",
    "Write one sentence comparing a skill then and now, using can and could.",
  ],
  wrapup: "Can shows present ability. Could shows a general ability someone had in the past.",
  nextHint: "Permission and requests, where can, could, and may ask for something instead of describing ability.",
};

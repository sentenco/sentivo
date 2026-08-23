// Conditionals -- Lesson 2: First Conditional

export default {
  number: 2,
  code: "2",
  title: "First Conditional",
  formula: "If + present simple, will + base verb",
  leadIn: "What will you do this weekend if the weather is good?",
  teach: [
    {
      name: "Real Future Possibilities",
      definition: "Talks about a realistic situation in the future and its likely result.",
      examples: ["If it rains tomorrow, I will stay home.", "If she studies tonight, she will pass the test.", "If we leave now, we will catch the bus."],
    },
    {
      name: "Softening the Result",
      definition: "Might, could, or should can replace will when the result is less certain, not guaranteed.",
      examples: ["If it rains, I might stay home.", "If she studies tonight, she could pass the test.", "If we leave now, we should catch the bus."],
    },
  ],
  compareLeftLabel: "Will — certain result",
  compareRightLabel: "Might / Could — less certain result",
  compareNote: "Will presents the result as a sure thing. Might or could keep the same real-future structure but admit some doubt.",
  comparePairs: [
    { left: "If it rains, I will stay home.", right: "If it rains, I might stay home." },
    { left: "If she studies, she will pass.", right: "If she studies, she could pass." },
  ],
  guided: [
    { prompt: "If I ___ (finish) my homework early, I will watch a movie.", answer: "finish" },
    { prompt: "If you don't hurry, you ___ (miss) the bus. (certain result)", answer: "will miss" },
    { prompt: "If she ___ (study) tonight, she will pass the test.", answer: "studies" },
    { prompt: "If the traffic is bad, we ___ be late. (less certain — use might)", answer: "might" },
    { prompt: "If we leave now, we ___ catch the bus. (less certain — use could)", answer: "could" },
    { prompt: "If it rains tomorrow, I ___ stay home. (less certain — use might)", answer: "might" },
  ],
  practice: [
    "Write one sentence about a real plan for this weekend, using if and will.",
    "Write one sentence with a less certain result, using might or could.",
    "Write one warning to a friend using if, like 'if you don't study, you'll fail'.",
  ],
  wrapup: "The first conditional talks about real future possibilities. Will makes the result feel certain — might or could soften it.",
  nextHint: "The second conditional, where if imagines something unreal in the present or future instead of something realistic.",
};

// Conditionals -- Lesson 4: Third Conditional

export default {
  number: 4,
  code: "4",
  title: "Third Conditional",
  formula: "If + past perfect, would have + past participle",
  leadIn: "Think of a test or exam you once did badly on. What would have happened if you had studied more?",
  teach: [
    {
      name: "Imagining a Different Past",
      definition: "Talks about a hypothetical past — something that didn't happen, and its imagined result.",
      examples: ["If I had studied, I would have passed the exam.", "If she had left earlier, she would have caught the train.", "If we had known, we would have helped."],
    },
    {
      name: "Softening the Past Result",
      definition: "Could have or might have replace would have when the past result is less certain.",
      examples: ["If I had studied, I might have passed the exam.", "If she had left earlier, she could have caught the train.", "If we had known, we might have helped."],
    },
  ],
  compareLeftLabel: "Would have — certain result",
  compareRightLabel: "Might have / Could have — less certain result",
  compareNote: "Would have presents the imagined past result as a sure thing. Might have or could have admit some doubt about what would have happened.",
  comparePairs: [
    { left: "If I had studied, I would have passed.", right: "If I had studied, I might have passed." },
    { left: "If she had left earlier, she would have caught the train.", right: "If she had left earlier, she could have caught the train." },
  ],
  guided: [
    { prompt: "If I ___ (know) about the party, I would have gone.", answer: "had known" },
    { prompt: "If he had studied medicine, he ___ (become) a doctor. (certain)", answer: "would have become" },
    { prompt: "If she ___ (leave) earlier, she would have caught the train.", answer: "had left" },
    { prompt: "If we had left earlier, we ___ have avoided the traffic. (less certain — use might)", answer: "might" },
    { prompt: "If she had left earlier, she ___ have caught the train. (less certain — use could)", answer: "could" },
    { prompt: "If we had known, we ___ have helped. (less certain — use might)", answer: "might" },
  ],
  practice: [
    "Write one sentence about a real regret, using if and would have.",
    "Write one sentence with a less certain past result, using might have or could have.",
    "Write one sentence imagining a completely different past decision.",
  ],
  wrapup: "The third conditional imagines a different past. Would have makes the imagined result certain — might have or could have soften it.",
  nextHint: "The mixed conditional, where a past condition and a present result — or the reverse — combine in one sentence.",
};

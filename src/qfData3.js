// Question Formation -- Lesson 3: Question Tags

export default {
  number: 3,
  code: "3",
  title: "Question Tags",
  formula: "positive statement, negative tag?  ·  negative statement, positive tag?",
  leadIn: "Say one true statement about yourself, and add a question tag to check if your partner agrees.",
  teach: [
    {
      name: "Matching the Auxiliary, Flipping the Polarity",
      definition: "A question tag repeats the sentence's auxiliary but flips positive to negative or negative to positive, to check or confirm something.",
      examples: ["You're coming, aren't you?", "She doesn't like tea, does she?", "They can swim, can't they?"],
    },
    {
      name: "Watch the Exceptions",
      definition: "A few common patterns don't follow the rule exactly — I am uses aren't I, and imperatives use will you or shall we.",
      examples: ["I'm right, aren't I?", "Close the door, will you?", "Let's go, shall we?"],
    },
  ],
  compareLeftLabel: "Positive statement",
  compareRightLabel: "Negative statement",
  compareNote: "The tag almost always flips the polarity of the main statement — positive gets a negative tag, and negative gets a positive tag.",
  comparePairs: [
    { left: "You like pizza, don't you?", right: "You don't like pizza, do you?" },
    { left: "He is your brother, isn't he?", right: "He isn't your brother, is he?" },
  ],
  guided: [
    { prompt: "You're a teacher, ___?", answer: "aren't you" },
    { prompt: "She doesn't drive, ___?", answer: "does she" },
    { prompt: "They can swim, ___?", answer: "can't they" },
    { prompt: "I'm late, ___? (exception)", answer: "aren't I" },
    { prompt: "Close the door, ___? (imperative)", answer: "will you" },
    { prompt: "Let's go, ___? (imperative)", answer: "shall we" },
  ],
  practice: [
    "Write one positive statement with a negative question tag.",
    "Write one negative statement with a positive question tag.",
    "Write one imperative sentence with a will you? or shall we? tag.",
  ],
  wrapup: "A question tag repeats the auxiliary and flips the polarity. Watch for the exceptions — aren't I and imperative tags don't follow the pattern exactly.",
  nextHint: "Indirect questions, where the same idea gets wrapped in a more polite, embedded form.",
};

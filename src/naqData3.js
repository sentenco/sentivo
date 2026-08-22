// Nouns, Articles & Quantifiers -- Lesson 3: Zero Article

export default {
  number: 3,
  code: "3",
  title: "Zero Article",
  formula: "no article — general statements, fixed expressions, most place names",
  leadIn: "Where did you go this morning, right after waking up? (school, work, the gym...)",
  teach: [
    {
      name: "No Article for General Statements & Fixed Expressions",
      definition: "Plural and uncountable nouns speaking in general take no article, and some common expressions skip the article entirely.",
      examples: ["Dogs are loyal.", "I like music.", "She goes to school every day."],
    },
    {
      name: "Geographic Name Exceptions",
      definition: "Most countries and cities take no article, but plural-form countries, unions, and some natural landmarks use the.",
      examples: ["I live in Japan.", "She visited Manila last year.", "He works in the Philippines, near the Amazon River."],
    },
  ],
  compareLeftLabel: "No article — most places",
  compareRightLabel: "The — plural or landmark names",
  compareNote: "Most single-word country and city names skip the article entirely. The shows up for plural-form countries, unions, rivers, and mountain ranges.",
  comparePairs: [
    { left: "She was born in France.", right: "She was born in the United States." },
    { left: "They visited Egypt.", right: "They visited the Alps." },
  ],
  guided: [
    { prompt: "I need to go to ___ bed early tonight. (fixed expression)", answer: "(no article)" },
    { prompt: "He grew up in ___ Netherlands. (plural-form country)", answer: "the" },
    { prompt: "___ cats sleep a lot. (general statement)", answer: "(no article)" },
  ],
  practice: [
    "Write one general statement about animals or people, using no article.",
    "Write one sentence with a fixed expression, like go to work or go to bed.",
    "Write one sentence about a country or landmark that needs the, like the Philippines or the Amazon.",
  ],
  wrapup: "General statements, fixed expressions, and most place names take no article. Plural-form countries and major landmarks are the main exceptions that use the.",
  nextHint: "Precise quantifiers, where much/many and few/little sharpen exactly how much you mean.",
};

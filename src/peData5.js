// Punctuation Essentials -- Lesson 5: Quotation Marks & Direct Speech

export default {
  number: 5,
  code: "5",
  title: "Quotation Marks & Direct Speech",
  formula: "\"Exact words,\" said the speaker.  ·  Said the speaker, \"Exact words.\"",
  leadIn: "Think of something someone said to you today. How would you write down their exact words?",
  teach: [
    {
      name: "Punctuating a Quote",
      definition: "The exact words go inside quotation marks, and the punctuation that ends the quote — a comma or period — goes inside the closing quotation mark.",
      examples: ["\"I'll be there soon,\" she said.", "He said, \"Let's go now.\"", "\"That's amazing!\" I exclaimed."],
    },
    {
      name: "Capitalizing & Splitting Quotes",
      definition: "The first word of a quote is capitalized. When a quote is split by the reporting phrase, the second half only starts with a capital if it begins a new sentence.",
      examples: ["\"Wait,\" she said, \"I forgot my keys.\" (new sentence, capital I)", "\"Wait,\" she said, \"for me.\" (same sentence, lowercase for)", "\"Come here,\" he called."],
    },
  ],
  compareLeftLabel: "Quote first",
  compareRightLabel: "Reporting phrase first",
  compareNote: "The exact wording and punctuation placement stay the same either way — only the order of the quote and the reporting phrase (she said, he asked) changes, and the comma placement shifts with it.",
  comparePairs: [
    { left: "\"I'm on my way,\" she said.", right: "She said, \"I'm on my way.\"" },
    { left: "\"Watch out!\" he shouted.", right: "He shouted, \"Watch out!\"" },
  ],
  guided: [
    { prompt: "Punctuate correctly: I'll be there soon she said", answer: "\"I'll be there soon,\" she said." },
    { prompt: "Punctuate correctly: He said Let's go now", answer: "He said, \"Let's go now.\"" },
    { prompt: "Punctuate correctly: That's amazing I exclaimed", answer: "\"That's amazing!\" I exclaimed." },
    { prompt: "Capitalize correctly: \"wait,\" she said, \"i forgot my keys.\" (new sentence)", answer: "\"Wait,\" she said, \"I forgot my keys.\"" },
    { prompt: "Capitalize correctly: \"wait,\" she said, \"for me.\" (same sentence)", answer: "\"Wait,\" she said, \"for me.\"" },
    { prompt: "Punctuate correctly: Come here he called", answer: "\"Come here,\" he called." },
  ],
  practice: [
    "Write one sentence with the quote first, then the reporting phrase.",
    "Write one sentence with the reporting phrase first, then the quote.",
    "Write one quote that's split into two parts by the reporting phrase in the middle.",
  ],
  wrapup: "Quotation marks wrap someone's exact words, with the punctuation tucked inside the closing mark. The first word of a quote is capitalized — unless it's the second half of a quote split by a reporting phrase mid-sentence.",
  nextHint: null,
};

// Punctuation Essentials -- Lesson 3: Apostrophes

export default {
  number: 3,
  code: "3",
  title: "Apostrophes",
  formula: "add 's for possession (the dog's bone)  ·  add an apostrophe for a missing letter in a contraction (don't = do not)",
  leadIn: "Say these two out loud: 'the dog's bone' and 'the dog doesn't bark.' Both use an apostrophe — but for two completely different reasons.",
  teach: [
    {
      name: "Apostrophes for Possession",
      definition: "Add 's to show that something belongs to someone or something. If the noun is plural and already ends in -s, just add the apostrophe alone.",
      examples: ["the dog's bone", "my sister's car", "the students' books (plural, already ends in -s)"],
    },
    {
      name: "Apostrophes for Contractions",
      definition: "The apostrophe replaces one or more missing letters when two words are squeezed into one.",
      examples: ["don't (do not)", "it's (it is)", "they're (they are)"],
    },
  ],
  compareLeftLabel: "Possession — 's shows ownership",
  compareRightLabel: "Contraction — apostrophe replaces missing letters",
  compareNote: "The classic trap is its vs it's — its (no apostrophe) shows possession, like his or her; it's (with an apostrophe) always means it is or it has. There's no exception.",
  comparePairs: [
    { left: "The cat licked its paw. (possession, no apostrophe)", right: "It's raining outside. (it is)" },
    { left: "My friend's book is on the table. (possession)", right: "My friend's already read it. (my friend has)" },
  ],
  guided: [
    { prompt: "Whose bone is it? Add the apostrophe: 'the dog bone'", answer: "the dog's bone" },
    { prompt: "Show possession: 'my sister car'", answer: "my sister's car" },
    { prompt: "The students already own -s. Show possession: 'the students books'", answer: "the students' books" },
    { prompt: "Contract it: 'do not'", answer: "don't" },
    { prompt: "Contract it: 'they are'", answer: "they're" },
    { prompt: "Choose correctly: 'The cat licked ___ (its/it's) paw.' (possession)", answer: "its" },
  ],
  practice: [
    "Write one sentence showing possession with 's.",
    "Write one sentence using a contraction, like don't or it's.",
    "Write two sentences using its and it's correctly, side by side.",
  ],
  wrapup: "Apostrophes do two completely different jobs — 's shows possession, and a plain apostrophe replaces missing letters in a contraction. Its vs it's is the classic trap: its shows possession, it's always means it is or it has.",
  nextHint: "Semicolons and colons — two marks that do very different jobs, even though they look similar.",
};

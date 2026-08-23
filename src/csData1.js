// Comparatives & Superlatives -- Lesson 1: Short Adjectives

export default {
  number: 1,
  code: "1",
  title: "Short Adjectives",
  formula: "adjective + -er (comparative)  ·  adjective + -est (superlative)",
  leadIn: "Compare your height to a friend's — who is taller?",
  teach: [
    {
      name: "Regular Short Adjectives",
      definition: "One-syllable adjectives, and most two-syllable ones ending in -y, simply add -er for the comparative and -est for the superlative.",
      examples: ["Tall → taller → tallest.", "Fast → faster → fastest.", "Old → older → oldest."],
    },
    {
      name: "Spelling Changes",
      definition: "A few short adjectives change their spelling before adding -er/-est — double the final consonant, change y to i, or just add r/st if the word already ends in e.",
      examples: ["Big → bigger → biggest. (double the g)", "Happy → happier → happiest. (y becomes i)", "Nice → nicer → nicest. (just add r/st)"],
    },
  ],
  compareLeftLabel: "Regular -er/-est",
  compareRightLabel: "Spelling change first",
  compareNote: "Most short adjectives just add the ending directly. A few need a small spelling adjustment first, based on how the word ends.",
  comparePairs: [
    { left: "Tall → taller", right: "Big → bigger" },
    { left: "Fast → fastest", right: "Happy → happiest" },
  ],
  guided: [
    { prompt: "Today is ___ (cold) than yesterday.", answer: "colder" },
    { prompt: "This car is ___ (fast) than mine.", answer: "faster" },
    { prompt: "He is the ___ (tall) player on the team.", answer: "tallest" },
    { prompt: "This bag is ___ (heavy) than that one.", answer: "heavier" },
    { prompt: "She is the ___ (thin) person on the team.", answer: "thinnest" },
    { prompt: "This cafe is ___ (nice) than the one down the street.", answer: "nicer" },
  ],
  practice: [
    "Write one comparative sentence using a regular short adjective.",
    "Write one comparative or superlative sentence using an adjective that needs a spelling change.",
    "Compare two things you own, using a short adjective.",
  ],
  wrapup: "Short adjectives add -er and -est directly, though some need a small spelling change first — doubling the consonant, swapping y for i, or just adding r/st after a silent e.",
  nextHint: "Long adjectives and irregular forms, where more/most and a handful of totally unpredictable words take over.",
};

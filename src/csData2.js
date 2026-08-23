// Comparatives & Superlatives -- Lesson 2: Long Adjectives & Irregular Forms

export default {
  number: 2,
  code: "2",
  title: "Long Adjectives & Irregular Forms",
  formula: "more + adjective (comparative)  ·  most + adjective (superlative)  ·  irregulars: good→better→best",
  leadIn: "Name something you think is more interesting than watching TV.",
  teach: [
    {
      name: "Long Adjectives — More & Most",
      definition: "Adjectives with two or more syllables that don't end in -y use more before them for the comparative and most for the superlative, instead of changing the word itself.",
      examples: ["Expensive → more expensive → most expensive.", "Beautiful → more beautiful → most beautiful.", "Careful → more careful → most careful."],
    },
    {
      name: "Irregular Forms — No Pattern to Follow",
      definition: "A handful of very common adjectives don't follow either rule — their comparative and superlative forms just have to be memorized.",
      examples: ["Good → better → best.", "Bad → worse → worst.", "Far → farther/further → farthest/furthest."],
    },
  ],
  compareLeftLabel: "Long adjective — add more/most",
  compareRightLabel: "Irregular — memorize it",
  compareNote: "If the adjective is long, more/most decides the form for you. If it's irregular, no rule helps — you just have to know the word.",
  comparePairs: [
    { left: "This movie is more exciting than that one.", right: "This meal is better than that one." },
    { left: "That was the most difficult exam.", right: "That was the worst exam." },
  ],
  guided: [
    { prompt: "This book is ___ (interesting) than the last one.", answer: "more interesting" },
    { prompt: "This exam was ___ (difficult) than the last one.", answer: "more difficult" },
    { prompt: "That was the ___ (expensive) restaurant in town.", answer: "most expensive" },
    { prompt: "That was the ___ (bad) day of my life.", answer: "worst" },
    { prompt: "She is ___ (good) at math than her brother.", answer: "better" },
    { prompt: "It's a ___ (far) walk from here than I thought.", answer: "farther / further" },
  ],
  practice: [
    "Write one comparative sentence using a long adjective with more.",
    "Write one superlative sentence using a long adjective with most.",
    "Write one sentence using an irregular form like better, worse, or farthest.",
  ],
  wrapup: "Long adjectives take more/most instead of changing form. A small set of common adjectives are irregular and simply have to be memorized.",
  nextHint: "Equality and degree modifiers, for comparing things that are the same, or saying exactly how much bigger something is.",
};

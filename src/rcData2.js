// Relative Clauses -- Lesson 2: Whose, Where & When

export default {
  number: 2,
  code: "2",
  title: "Whose, Where & When",
  formula: "whose + noun (possession)  ·  where/when (place/time, replacing preposition + which)",
  leadIn: "Think of someone whose house you've visited. Describe it in one sentence starting with 'That's the person whose...'",
  teach: [
    {
      name: "Whose — Showing Possession",
      definition: "Whose connects a person or thing to something that belongs to them, right before the noun it's describing.",
      examples: ["That's the man whose car was stolen.", "She's the teacher whose class I love.", "This is the company whose logo you designed."],
    },
    {
      name: "Where & When — Replacing a Preposition",
      definition: "Where and when stand in for a place or time, replacing a clunkier phrase like 'in which' or 'at which.'",
      examples: ["This is the restaurant where we met.", "I remember the day when we first met.", "That's the town where I grew up."],
    },
  ],
  compareLeftLabel: "Whose — possession",
  compareRightLabel: "Where / When — place & time",
  compareNote: "Whose always sits right before a noun showing ownership. Where and when replace a whole prepositional phrase about location or time.",
  comparePairs: [
    { left: "That's the girl whose bike was stolen.", right: "That's the park where the bike was stolen." },
    { left: "He's the man whose speech impressed everyone.", right: "That was the moment when his speech impressed everyone." },
  ],
  guided: [
    { prompt: "That's the boy ___ backpack is red. (possession)", answer: "whose" },
    { prompt: "She's the teacher ___ class I love. (possession)", answer: "whose" },
    { prompt: "This is the company ___ logo you designed. (possession)", answer: "whose" },
    { prompt: "This is the cafe ___ we had our first date. (place)", answer: "where" },
    { prompt: "That's the town ___ I grew up. (place)", answer: "where" },
    { prompt: "I'll never forget the day ___ I graduated. (time)", answer: "when" },
  ],
  practice: [
    "Write one sentence using whose to show possession.",
    "Write one sentence using where to describe a place.",
    "Write one sentence using when to describe a time or moment.",
  ],
  wrapup: "Whose shows possession right before a noun. Where and when replace a preposition-plus-which phrase for places and times.",
  nextHint: "Non-defining relative clauses, where the same words add extra information instead of essential information.",
};

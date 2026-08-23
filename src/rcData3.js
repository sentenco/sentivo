// Relative Clauses -- Lesson 3: Non-Defining Relative Clauses

export default {
  number: 3,
  code: "3",
  title: "Non-Defining Relative Clauses",
  formula: "..., who/which + extra info, ... (commas, never 'that')",
  leadIn: "Tell your partner one extra fact about a family member — something interesting, but not essential to know who they are.",
  teach: [
    {
      name: "Extra Information, Set Off by Commas",
      definition: "A non-defining clause adds interesting but non-essential information about something already clearly identified — it's separated from the rest of the sentence by commas.",
      examples: ["My brother, who lives in Tokyo, is visiting next week.", "This book, which took me a year to write, is finally finished.", "Paris, where I studied abroad, is beautiful in spring."],
    },
    {
      name: "No 'That' Allowed",
      definition: "Unlike defining clauses, non-defining clauses can never use that — only who, which, whose, where, or when.",
      examples: ["My sister, who is a doctor, lives nearby. (not 'that')", "This car, which I bought last year, still runs well.", "The hotel, where we stayed, had a great view."],
    },
  ],
  compareLeftLabel: "Defining — no commas, that OK",
  compareRightLabel: "Non-defining — commas, no that",
  compareNote: "The exact same sentence can mean two different things depending on the commas — defining clauses narrow down which one you mean; non-defining clauses just add a bonus fact.",
  comparePairs: [
    { left: "The students who studied hard passed. (only some students)", right: "The students, who studied hard, passed. (all of them, and by the way, they studied)" },
    { left: "My brother who lives in Tokyo is a doctor. (implies more than one brother)", right: "My brother, who lives in Tokyo, is a doctor. (only one brother)" },
  ],
  guided: [
    { prompt: "My mom, ___ is a nurse, works night shifts. (extra info)", answer: "who" },
    { prompt: "This book, ___ took me a year to write, is finally finished. (extra info)", answer: "which" },
    { prompt: "Paris, ___ I studied abroad, is beautiful in spring. (extra info)", answer: "where" },
    { prompt: "Is 'that' allowed in: 'My car, that I bought new, broke down.'?", answer: "No — must be 'which,' since it's non-defining (has commas)" },
    { prompt: "My sister, ___ is a doctor, lives nearby. (not 'that')", answer: "who" },
    { prompt: "This car, ___ I bought last year, still runs well. (not 'that')", answer: "which" },
  ],
  practice: [
    "Write one non-defining sentence about a family member, using commas.",
    "Write one non-defining sentence about a place, using where.",
    "Take one of your sentences and check: could you accidentally use 'that' here? Why not?",
  ],
  wrapup: "Non-defining clauses add extra, non-essential information, set off by commas — and they can never use that.",
  nextHint: "Reducing relative clauses, where the whole clause shrinks down into a shorter phrase.",
};

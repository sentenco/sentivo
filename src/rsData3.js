// Reported Speech -- Lesson 3: Reported Questions

export default {
  number: 3,
  code: "3",
  title: "Reported Questions",
  formula: "if/whether + statement order (yes/no)  ·  wh-word + statement order (wh-)",
  leadIn: "Think of a question someone asked you recently. How would you report it to a friend?",
  teach: [
    {
      name: "Reported Yes/No Questions",
      definition: "Add if or whether, then use normal statement word order — no auxiliary inversion, and no question mark.",
      examples: ["\"Are you coming?\" she asked. → She asked if I was coming.", "\"Do you like coffee?\" he asked. → He asked whether I liked coffee.", "\"Have you finished?\" she asked. → She asked if I had finished."],
    },
    {
      name: "Reported Wh-Questions",
      definition: "Keep the question word, then switch straight to statement word order — the same no-inversion rule from indirect questions, just backshifted and without the polite lead-in.",
      examples: ["\"Where do you live?\" he asked. → He asked where I lived.", "\"What happened?\" she asked. → She asked what had happened.", "\"Why are you late?\" he asked. → He asked why I was late."],
    },
  ],
  compareLeftLabel: "Yes/No — needs if/whether",
  compareRightLabel: "Wh- — keeps its own question word",
  compareNote: "Both drop the inversion and the question mark — the only real difference is whether you add if/whether or keep the original question word.",
  comparePairs: [
    { left: "She asked if I was hungry.", right: "She asked what I wanted to eat." },
    { left: "He asked whether I had called.", right: "He asked who had called." },
  ],
  guided: [
    { prompt: "\"Do you speak French?\" she asked. → She asked ___ I spoke French.", answer: "if / whether" },
    { prompt: "\"Where is the station?\" he asked. → He asked ___ the station was.", answer: "where" },
    { prompt: "\"Are you ready?\" she asked. → She asked if I ___ ready.", answer: "was" },
  ],
  practice: [
    "Report a yes/no question someone asked you, using if or whether.",
    "Report a wh-question someone asked you, keeping the question word.",
    "Compare your two sentences — do they both use statement word order?",
  ],
  wrapup: "Reported questions drop the inversion and the question mark. Yes/no questions need if or whether; wh-questions just keep their own question word.",
  nextHint: "Reported commands and requests, where told and asked replace the imperative entirely.",
};

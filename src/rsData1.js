// Reported Speech -- Lesson 1: Reported Statements

export default {
  number: 1,
  code: "1",
  title: "Reported Statements",
  formula: "say → said (backshift)  ·  tell + person, say (no person)",
  leadIn: "Think of something a friend told you recently. How would you report it to someone else?",
  teach: [
    {
      name: "Tense Backshift",
      definition: "When reporting what someone said, most verb tenses shift one step back into the past — present becomes past, past becomes past perfect, will becomes would.",
      examples: ["\"I am tired,\" she said. → She said she was tired.", "\"I finished the report,\" he said. → He said he had finished the report.", "\"I will call you,\" she said. → She said she would call me."],
    },
    {
      name: "Say vs Tell",
      definition: "Tell always needs a person as its object; say usually doesn't — that's the quickest way to choose between them.",
      examples: ["She said she was busy.", "She told me she was busy.", "He said (that) he was leaving. (not 'said me')"],
    },
  ],
  compareLeftLabel: "Say — no person needed",
  compareRightLabel: "Tell — needs a person",
  compareNote: "Try adding a person right after the verb. If it sounds natural, use tell; if it sounds wrong, use say.",
  comparePairs: [
    { left: "He said he was hungry.", right: "He told me he was hungry." },
    { left: "She said it was raining.", right: "She told us it was raining." },
  ],
  guided: [
    { prompt: "\"I am leaving,\" he said. → He said he ___ leaving.", answer: "was" },
    { prompt: "She ___ me she was tired. (needs a person)", answer: "told" },
    { prompt: "\"I will help you,\" she said. → She said she ___ help me.", answer: "would" },
  ],
  practice: [
    "Report a statement a friend made to you recently, backshifting the tense.",
    "Write one sentence using said, and one using told, about the same idea.",
    "Write one sentence with will → would in reported speech.",
  ],
  wrapup: "Most tenses shift one step into the past when reporting speech. Tell needs a person as its object; say usually doesn't.",
  nextHint: "Time and place changes, where words like now, here, and this shift along with the tense.",
};

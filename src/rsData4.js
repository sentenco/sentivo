// Reported Speech -- Lesson 4: Reported Commands & Requests

export default {
  number: 4,
  code: "4",
  title: "Reported Commands & Requests",
  formula: "told/asked + person + to + base verb  ·  told/asked + person + not to + base verb",
  leadIn: "Think of an instruction a teacher or boss gave you. How would you report it to someone else?",
  teach: [
    {
      name: "Reporting a Command",
      definition: "An imperative becomes told or asked plus a person plus to and the base verb — no backshift needed, since infinitives don't change tense.",
      examples: ["\"Close the door,\" she said. → She told me to close the door.", "\"Sit down,\" he said. → He told us to sit down.", "\"Please help me,\" she said. → She asked me to help her."],
    },
    {
      name: "Reporting a Negative Command",
      definition: "For a negative instruction, not simply goes right before to.",
      examples: ["\"Don't touch that,\" he said. → He told me not to touch it.", "\"Don't be late,\" she said. → She told him not to be late.", "\"Please don't shout,\" he said. → He asked me not to shout."],
    },
  ],
  compareLeftLabel: "Positive command",
  compareRightLabel: "Negative command",
  compareNote: "The only change between the two is adding not right before to — everything else about the structure stays the same.",
  comparePairs: [
    { left: "She told me to wait.", right: "She told me not to wait." },
    { left: "He asked us to leave.", right: "He asked us not to leave." },
  ],
  guided: [
    { prompt: "\"Open your books,\" she said. → She told us ___ open our books.", answer: "to" },
    { prompt: "\"Don't run,\" he said. → He told them ___ run.", answer: "not to" },
    { prompt: "\"Please call me,\" she said. → She asked me ___ her.", answer: "to call" },
  ],
  practice: [
    "Report a positive command someone gave you, using told or asked.",
    "Report a negative command, using not to.",
    "Write one sentence reporting a polite request, using asked.",
  ],
  wrapup: "Commands become told/asked plus a person plus to and the base verb. A negative command just adds not before to.",
  nextHint: "When backshift isn't needed, and reporting verbs beyond said and told.",
};

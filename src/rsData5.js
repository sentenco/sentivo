// Reported Speech -- Lesson 5: When Backshift Isn't Needed + More Reporting Verbs

export default {
  number: 5,
  code: "5",
  title: "No Backshift & More Reporting Verbs",
  formula: "still true → no backshift  ·  suggested, warned, promised, advised",
  leadIn: "What's one fact you're completely sure is still true today that you might tell someone about?",
  teach: [
    {
      name: "When Backshift Isn't Needed",
      definition: "If the original statement is a general truth or is still true right now, the tense doesn't have to shift back.",
      examples: ["\"The Earth is round,\" she said. → She said the Earth is round.", "\"I work at a bank,\" he said. → He said he works at a bank. (still true)", "\"Water boils at 100 degrees,\" the teacher said. → The teacher said water boils at 100 degrees."],
    },
    {
      name: "More Reporting Verbs",
      definition: "Beyond said and told, verbs like suggested, warned, promised, and advised carry their own extra meaning and often their own grammar pattern.",
      examples: ["She suggested going to the beach.", "He warned me not to be late.", "They promised to help."],
    },
  ],
  compareLeftLabel: "Said — neutral",
  compareRightLabel: "Warned / Promised / Advised — extra meaning",
  compareNote: "Said just reports the words. A more specific reporting verb adds the speaker's tone or intention — a warning, a promise, or a piece of advice.",
  comparePairs: [
    { left: "She said I should leave early.", right: "She advised me to leave early." },
    { left: "He said he would call.", right: "He promised to call." },
  ],
  guided: [
    { prompt: "\"Two plus two is four,\" the teacher said. → The teacher said two plus two ___ four. (still true)", answer: "is" },
    { prompt: "\"Don't swim there, it's dangerous,\" he said. → He ___ me not to swim there.", answer: "warned" },
    { prompt: "\"Let's watch a movie,\" she said. → She ___ watching a movie.", answer: "suggested" },
  ],
  practice: [
    "Write one sentence reporting a fact that's still true, with no backshift.",
    "Write one sentence using warned or advised instead of said.",
    "Write one sentence using promised or suggested.",
  ],
  wrapup: "Still-true facts and general truths don't need backshift. Reporting verbs like suggested, warned, promised, and advised carry more meaning than said or told.",
  nextHint: null,
};

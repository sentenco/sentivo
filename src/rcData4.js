// Relative Clauses -- Lesson 4: Reducing Relative Clauses

export default {
  number: 4,
  code: "4",
  title: "Reducing Relative Clauses",
  formula: "who/which + be + verb-ing → verb-ing  ·  who/which + be + past participle → past participle",
  leadIn: "Look around you — describe one thing using a shortened phrase, like 'the man standing by the door,' instead of a full clause.",
  teach: [
    {
      name: "Reducing with -ing — Active Meaning",
      definition: "When the relative clause has an active, ongoing action, drop the pronoun and be, and use the -ing form alone.",
      examples: ["The man who is standing there is my uncle. → The man standing there is my uncle.", "The kids who are playing outside are my students. → The kids playing outside are my students.", "Anyone who wants to join should sign up. → Anyone wanting to join should sign up."],
    },
    {
      name: "Reducing with the Past Participle — Passive Meaning",
      definition: "When the clause has a passive meaning, drop the pronoun and be, and use the past participle alone.",
      examples: ["The car which was damaged in the storm is mine. → The car damaged in the storm is mine.", "The letter that was written by hand felt personal. → The letter written by hand felt personal.", "The players who were chosen for the team celebrated. → The players chosen for the team celebrated."],
    },
  ],
  compareLeftLabel: "-ing — active",
  compareRightLabel: "Past participle — passive",
  compareNote: "If the noun is doing the action, reduce with -ing. If the action is being done to the noun, reduce with the past participle instead.",
  comparePairs: [
    { left: "The woman leading the meeting is new.", right: "The proposal rejected by the board needs revising." },
    { left: "The dog barking outside is scared.", right: "The window broken last night is fixed now." },
  ],
  guided: [
    { prompt: "The man who is waiting outside is my father. → The man ___ outside is my father.", answer: "waiting" },
    { prompt: "Students who are studying for finals should get enough sleep. → Students ___ for finals should get enough sleep.", answer: "studying" },
    { prompt: "The kids who are playing outside are my students. → The kids ___ outside are my students.", answer: "playing" },
    { prompt: "The report that was finished yesterday is on your desk. → The report ___ yesterday is on your desk.", answer: "finished" },
    { prompt: "The car which was damaged in the storm is mine. → The car ___ in the storm is mine.", answer: "damaged" },
    { prompt: "The players who were chosen for the team celebrated. → The players ___ for the team celebrated.", answer: "chosen" },
  ],
  practice: [
    "Write a full relative clause with -ing, then reduce it.",
    "Write a full relative clause with a past participle, then reduce it.",
    "Look at a sentence from an earlier lesson in this course and try reducing it.",
  ],
  wrapup: "A relative clause with an active meaning reduces to -ing. One with a passive meaning reduces to the past participle. Both drop the pronoun and be.",
  nextHint: null,
};

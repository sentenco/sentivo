// Relative Clauses -- Lesson 1: Defining Relative Clauses

export default {
  number: 1,
  code: "1",
  title: "Defining Relative Clauses",
  formula: "who/which/that + clause (essential info)  ·  object pronoun can be dropped",
  leadIn: "Describe a person in this room using 'who' — for example, 'The person who is wearing glasses.'",
  teach: [
    {
      name: "Choosing Who, Which, or That",
      definition: "Who refers to people, which refers to things, and that can replace either in casual, defining clauses — all three identify exactly which person or thing you mean.",
      examples: ["The woman who called is my sister.", "The book which is on the table is mine.", "The car that broke down is at the shop."],
    },
    {
      name: "Dropping the Object Pronoun",
      definition: "When the relative pronoun is the object of its own clause, not the subject, it can often be left out completely — this happens constantly in natural spoken English.",
      examples: ["The movie (that) I watched was great.", "The people (who) we met were friendly.", "The book (which) she recommended was excellent."],
    },
  ],
  compareLeftLabel: "Pronoun as subject — stays",
  compareRightLabel: "Pronoun as object — can drop",
  compareNote: "If the pronoun is followed directly by a verb, it's the subject and must stay. If it's followed by another noun or pronoun doing the action, it's the object and can often disappear.",
  comparePairs: [
    { left: "The man who called is my neighbor. (who = subject)", right: "The man I called is my neighbor. (who dropped, object)" },
    { left: "The book that arrived is mine. (that = subject)", right: "The book I ordered arrived. (that dropped, object)" },
  ],
  guided: [
    { prompt: "The woman ___ teaches us is very kind. (subject, referring to a person)", answer: "who" },
    { prompt: "The dog ___ is barking belongs to my neighbor. (subject, referring to a thing/animal)", answer: "which / that" },
    { prompt: "The book ___ is on the table is mine. (subject, referring to a thing)", answer: "which / that" },
    { prompt: "This is the restaurant ___ we ate last night. (object — can this be dropped?)", answer: "that / which (optional, can be dropped)" },
    { prompt: "The movie ___ I watched was great. (object — can this be dropped?)", answer: "that / which (optional, can be dropped)" },
    { prompt: "The people ___ we met were friendly. (object — can this be dropped?)", answer: "who / that (optional, can be dropped)" },
  ],
  practice: [
    "Write one sentence defining a person using who.",
    "Write one sentence defining a thing using which or that.",
    "Write one sentence where the relative pronoun is the object, then rewrite it without the pronoun.",
  ],
  wrapup: "Who, which, and that identify exactly which person or thing you mean. When the pronoun is the object of its clause, it can often be dropped entirely.",
  nextHint: "Whose, where, and when, the relative words that replace possession, place, and time.",
};

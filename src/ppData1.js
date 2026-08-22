// Pronouns & Possessives -- Lesson 1: Personal Pronouns

export default {
  number: 1,
  code: "1",
  title: "Personal Pronouns",
  formula: "subject: I, you, he, she, it, we, they  ·  object: me, you, him, her, it, us, them",
  leadIn: "Say one sentence about what you did today, then one sentence about what someone did to you.",
  teach: [
    {
      name: "Subject Pronouns — The Doer",
      definition: "Replaces the noun doing the action, and appears before the verb.",
      examples: ["I called her.", "He works at the bank.", "They arrived late."],
    },
    {
      name: "Object Pronouns — The Receiver",
      definition: "Replaces the noun receiving the action, and appears after the verb or a preposition.",
      examples: ["She called me.", "I gave it to him.", "We saw them at the mall."],
    },
  ],
  compareLeftLabel: "Subject — before the verb",
  compareRightLabel: "Object — after the verb",
  compareNote: "The classic mistake is mixing them up in compound subjects — 'Me and him went' should be 'He and I went,' since both are doing the action.",
  comparePairs: [
    { left: "He and I went to the store.", right: "The teacher gave the book to him and me." },
    { left: "She and they finished first.", right: "Please call her and them tonight." },
  ],
  guided: [
    { prompt: "___ (I/me) am going to the party tonight.", answer: "I" },
    { prompt: "Can you help ___ (I/me) with this box?", answer: "me" },
    { prompt: "___ (He/Him) and ___ (I/me) are best friends. (compound subject)", answer: "He ... I" },
  ],
  practice: [
    "Write one sentence using a subject pronoun as the doer.",
    "Write one sentence using an object pronoun as the receiver.",
    "Write one sentence with a compound subject, like 'He and I' or 'She and they'.",
  ],
  wrapup: "Subject pronouns do the action; object pronouns receive it. Compound subjects are the classic trap — check each pronoun on its own.",
  nextHint: "Possessive adjectives vs possessive pronouns, where 'my' and 'mine' look related but work completely differently in a sentence.",
};

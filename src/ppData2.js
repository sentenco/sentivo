// Pronouns & Possessives -- Lesson 2: Possessive Adjectives vs Possessive Pronouns

export default {
  number: 2,
  code: "2",
  title: "Possessive Adjectives vs Pronouns",
  formula: "possessive adjective + noun  ·  possessive pronoun stands alone",
  leadIn: "Point to something that belongs to you and say 'This is my ___.' Then say the same thing without naming the object.",
  teach: [
    {
      name: "Possessive Adjectives — Always Need a Noun",
      definition: "My, your, his, her, its, our, and their sit directly before a noun to show ownership.",
      examples: ["This is my bag.", "Is that your car?", "Their house is huge."],
    },
    {
      name: "Possessive Pronouns — Stand Alone",
      definition: "Mine, yours, his, hers, ours, and theirs replace the noun entirely — no noun follows them.",
      examples: ["This bag is mine.", "Is that car yours?", "The huge house is theirs."],
    },
  ],
  compareLeftLabel: "Possessive adjective + noun",
  compareRightLabel: "Possessive pronoun alone",
  compareNote: "If a noun comes right after the possessive word, it's an adjective. If the word stands completely on its own, it's a pronoun.",
  comparePairs: [
    { left: "This is my phone.", right: "This phone is mine." },
    { left: "Is this your seat?", right: "Is this seat yours?" },
  ],
  guided: [
    { prompt: "That's not ___ (her/hers) umbrella, it's ___ (my/mine). (adjective then pronoun)", answer: "her ... mine" },
    { prompt: "Is this jacket ___ (your/yours)?", answer: "yours" },
    { prompt: "___ (Our/Ours) team won the game.", answer: "Our" },
  ],
  practice: [
    "Write one sentence using a possessive adjective before a noun.",
    "Write one sentence using a possessive pronoun that stands alone.",
    "Rewrite one of your sentences, swapping the possessive adjective for the matching possessive pronoun.",
  ],
  wrapup: "Possessive adjectives always need a noun right after them. Possessive pronouns replace the noun completely and stand on their own.",
  nextHint: "Reflexive and intensive pronouns, where the same words like myself and himself do two very different jobs.",
};

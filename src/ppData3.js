// Pronouns & Possessives -- Lesson 3: Reflexive & Intensive Pronouns

export default {
  number: 3,
  code: "3",
  title: "Reflexive & Intensive Pronouns",
  formula: "reflexive: action reflects back on the subject  ·  intensive: added only for emphasis",
  leadIn: "Have you ever hurt yourself doing something clumsy? What happened?",
  teach: [
    {
      name: "Reflexive Pronouns — The Action Comes Back",
      definition: "Myself, yourself, himself, herself, itself, ourselves, and themselves are used when the subject and the object of the action are the same person or thing.",
      examples: ["I cut myself while cooking.", "She taught herself to play guitar.", "They blamed themselves for the mistake."],
    },
    {
      name: "Intensive Pronouns — Added for Emphasis",
      definition: "The exact same words can be added right after a noun or pronoun just to emphasize that someone did something alone or personally — removing the word doesn't change the core meaning.",
      examples: ["I fixed the car myself.", "The president himself answered the phone.", "We built this house ourselves."],
    },
  ],
  compareLeftLabel: "Reflexive — necessary",
  compareRightLabel: "Intensive — just emphasis",
  compareNote: "Try removing the -self word. If the sentence breaks or loses its meaning, it's reflexive. If the sentence still makes complete sense, it's intensive.",
  comparePairs: [
    { left: "She hurt herself. (can't remove herself)", right: "She fixed it herself. (can remove herself)" },
    { left: "He introduced himself to the class.", right: "He himself introduced the new policy." },
  ],
  guided: [
    { prompt: "I taught ___ (myself/me) how to cook. (reflexive)", answer: "myself" },
    { prompt: "The manager ___ approved the request. (added only for emphasis)", answer: "himself / herself" },
    { prompt: "They enjoyed ___ (themselves/them) at the party. (reflexive)", answer: "themselves" },
  ],
  practice: [
    "Write one reflexive sentence where the action comes back to the subject.",
    "Write one intensive sentence adding emphasis with a -self word that could be removed.",
    "Test one of your sentences by removing the -self word — does it still make sense?",
  ],
  wrapup: "Reflexive pronouns are necessary when the subject and object are the same. Intensive pronouns are the same words, added only to emphasize who did something.",
  nextHint: "Demonstrative and indefinite pronouns, for pointing at things and talking about unspecified people or objects.",
};

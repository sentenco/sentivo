// Pronouns & Possessives -- Lesson 4: Demonstrative & Indefinite Pronouns

export default {
  number: 4,
  code: "4",
  title: "Demonstrative & Indefinite Pronouns",
  formula: "this/that/these/those — pointing  ·  someone/anyone/everyone — unspecified",
  leadIn: "Point to something near you and something far away, and describe each one in a sentence.",
  teach: [
    {
      name: "Demonstrative Pronouns — Near or Far, One or Many",
      definition: "This and these point to things close by, while that and those point to things farther away — singular vs plural decides the rest.",
      examples: ["This is my favorite book.", "Those are your keys, over there.", "I'll take these, not that."],
    },
    {
      name: "Indefinite Pronouns — Someone, Anyone, No One",
      definition: "Refer to unspecified people or things, and follow the same affirmative/question/negative pattern as some, any, and no.",
      examples: ["Someone left their bag here.", "Did anyone call while I was out?", "There's nothing left in the fridge."],
    },
  ],
  compareLeftLabel: "This / These — near",
  compareRightLabel: "That / Those — far",
  compareNote: "The same singular/plural split applies to both distances — this and that are singular, these and those are plural.",
  comparePairs: [
    { left: "This is delicious.", right: "That was delicious." },
    { left: "These are my shoes.", right: "Those are your shoes, over there." },
  ],
  guided: [
    { prompt: "___ (This/These) shoes right here are mine.", answer: "These" },
    { prompt: "___ (That/Those) over there are your keys.", answer: "Those" },
    { prompt: "___ (This/That) is my favorite book right here.", answer: "This" },
    { prompt: "___ ate the last cookie? (unspecified person, question)", answer: "Someone / Anyone" },
    { prompt: "There's ___ I can do about the weather. (unspecified thing, negative)", answer: "nothing" },
    { prompt: "___ left their bag here. (unspecified person, affirmative)", answer: "Someone" },
  ],
  practice: [
    "Write one sentence with a demonstrative pronoun pointing at something near you.",
    "Write one sentence with a demonstrative pronoun pointing at something far away.",
    "Write one sentence with an indefinite pronoun like someone, anyone, or nothing.",
  ],
  wrapup: "Demonstrative pronouns point by distance and number. Indefinite pronouns refer to unspecified people or things, following the same some/any/no logic as quantifiers.",
  nextHint: "Possessive 's with nouns, where an apostrophe does the same job possessive pronouns just did — but attached directly to a noun.",
};

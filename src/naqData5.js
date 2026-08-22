// Nouns, Articles & Quantifiers -- Lesson 5: Some, Any & No

export default {
  number: 5,
  code: "5",
  title: "Some, Any & No",
  formula: "some — affirmative  ·  any — questions/negatives  ·  no — negative on its own",
  leadIn: "Would you like some coffee or tea right now?",
  teach: [
    {
      name: "Some vs Any",
      definition: "Some usually appears in affirmative statements. Any usually appears in questions and negatives — the sentence type decides which one fits.",
      examples: ["I have some good news.", "Do you have any questions?", "I don't have any money left."],
    },
    {
      name: "No vs Not Any",
      definition: "No and not any express the same negative idea, but no attaches directly to the noun without needing a separate not.",
      examples: ["I have no money left.", "I don't have any money left.", "There is no reason to worry."],
    },
  ],
  compareLeftLabel: "Some — even in a question",
  compareRightLabel: "Any — the expected question form",
  compareNote: "Some breaks its own rule in offers and polite requests — a question that's really an invitation still sounds better with some, not any.",
  comparePairs: [
    { left: "Would you like some water?", right: "Do you have any water?" },
    { left: "Can I get you some help?", right: "Do you need any help?" },
  ],
  guided: [
    { prompt: "I don't have ___ time today. (negative)", answer: "any" },
    { prompt: "Would you like ___ cake? (polite offer, question form)", answer: "some" },
    { prompt: "There are ___ mistakes in this report. (no + noun, negative)", answer: "no" },
  ],
  practice: [
    "Write one affirmative sentence using some.",
    "Write one question using any, and one polite offer using some instead.",
    "Write one negative sentence twice — once with no, once with not any.",
  ],
  wrapup: "Some fits affirmative statements and polite offers; any fits questions and negatives. No and not any say the same negative thing in two different ways.",
  nextHint: null,
};

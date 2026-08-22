// Sentence Patterns -- Lesson 5: SVOC

export default {
  number: 5,
  code: "5",
  patternLabel: "SVOC",
  title: "SVOC",
  objective: "Recognize sentences where an object complement describes or renames the object — not the subject, and not an action being done to it.",
  leadIn: "“They elected her president.” Did “president” receive an action, or describe “her”?",
  teach: [
    {
      name: "SVOC — Subject + Verb + Object + Complement",
      definition: "The complement gives more information about the object, not the subject. Common verbs: make, call, elect, find, consider.",
      examples: ["John made Jane angry.", "They elected her president.", "The news made us happy."],
    },
    {
      name: "SVOC vs SVOA",
      definition: "They can look similar, but the final part does a different job: a complement describes the object, while an adverbial adds place, time, or manner.",
      examples: ["We found the movie boring. (SVOC — describes the movie)", "We met our teacher in the library. (SVOA — where we met)"],
    },
  ],
  compareLeftLabel: "SVOC — describes the object",
  compareRightLabel: "SVOA — tells where, when, or how",
  compareNote: "Ask what the last part is doing: describing the object (SVOC), or telling where, when, or how the action happened (SVOA)?",
  comparePairs: [
    { left: "They elected her president.", right: "We met our teacher in the library." },
    { left: "We found the movie boring.", right: "He placed the bag under the chair." },
  ],
  practice: [
    "Complete with a suitable complement: “The class made her ___.”",
    "Write one SVOC sentence using make, call, or consider.",
    "Compare: is “They painted the wall blue” SVOC or SVOA? Why?",
  ],
  assessment: [
    { type: "mc", q: "John made Jane angry. — which part is the complement?", options: ["John", "made", "angry"], correct: 2 },
    { type: "mc", q: "They elected her president. — SVOC or SVOA?", options: ["SVOC", "SVOA"], correct: 0 },
    { type: "mc", q: "We found the movie boring. — which word describes “the movie”?", options: ["found", "boring", "We"], correct: 1 },
    { type: "mc", q: "He placed the bag under the chair. — SVOC or SVOA?", options: ["SVOC", "SVOA"], correct: 1 },
    { type: "reveal", q: "Label the parts: “The news made us happy.”", answer: "The news = S · made = V · us = O · happy = C" },
    { type: "reveal", q: "Write one SVOC sentence of your own.", answer: "Any valid sentence works — e.g. “The team called him captain.”" },
  ],
  wrapup: "SVOC sentences end with a complement that describes or renames the object — different from SVOA, where the final part tells us where, when, or how.",
  nextHint: "All seven patterns together in one mixed review.",
};

// Sentence Patterns -- Lesson 3: SVA and SVOA

export default {
  number: 3,
  code: "3",
  patternLabel: "SVA · SVOA",
  title: "SVA and SVOA",
  objective: "Identify adverbials that add place, time, or manner information, and recognize them after both SV and SVO sentences.",
  leadIn: "“My house is there.” and “She put the book on the table.” What kind of information do “there” and “on the table” add?",
  teach: [
    {
      name: "SVA — Subject + Verb + Adverbial",
      definition: "The adverbial usually answers where, when, or how. Some verbs — like be — often need one to complete the sentence.",
      examples: ["My house is there.", "The children are outside.", "She arrived late."],
    },
    {
      name: "SVOA — Subject + Verb + Object + Adverbial",
      definition: "Same idea, but now there's an object first, and the adverbial — often a place — comes after it.",
      examples: ["She put the book on the table.", "He placed the bag under the chair.", "We met our teacher in the library."],
    },
  ],
  compareLeftLabel: "SVA — no object",
  compareRightLabel: "SVOA — object + adverbial",
  compareNote: "Check for an object before the adverbial. No object means SVA; an object right before the place or time phrase means SVOA.",
  comparePairs: [
    { left: "My house is there.", right: "She put the book on the table." },
    { left: "The children are outside.", right: "He placed the bag under the chair." },
  ],
  practice: [
    "Add a place or time phrase to finish: “The keys are ___.”",
    "Write one SVA sentence about where something is.",
    "Write one SVOA sentence about where you put something.",
  ],
  assessment: [
    { type: "mc", q: "My house is there. — which pattern?", options: ["SVA", "SVOA"], correct: 0 },
    { type: "mc", q: "She put the book on the table. — which pattern?", options: ["SVA", "SVOA"], correct: 1 },
    { type: "mc", q: "We met our teacher in the library. — which pattern?", options: ["SVA", "SVOA"], correct: 1 },
    { type: "mc", q: "The children are outside. — which pattern?", options: ["SVA", "SVOA"], correct: 0 },
    { type: "reveal", q: "Label the parts: “He placed the bag under the chair.”", answer: "He = S · placed = V · the bag = O · under the chair = A" },
    { type: "reveal", q: "Write one sentence with a place adverbial.", answer: "Any valid sentence works — e.g. “The cat is sleeping on the sofa.”" },
  ],
  wrapup: "SVA and SVOA both close with an adverbial that tells us where, when, or how — the only difference is whether an object comes before it.",
  nextHint: "SVOO, where a sentence carries two objects at once.",
};

// Sentence Patterns -- Lesson 1: SV and SVO

export default {
  number: 1,
  code: "1",
  patternLabel: "SV · SVO",
  title: "SV and SVO",
  objective: "Spot the difference between a sentence that only needs a subject and a verb, and one that also needs an object to receive the action.",
  leadIn: "Look at these two sentences: “Birds fly.” and “I like rice.” What's different about them?",
  teach: [
    {
      name: "SV — Subject + Verb",
      definition: "The subject does the action, the verb names it, and that's the whole sentence — nothing else required.",
      examples: ["Birds fly.", "The baby cried.", "She smiled."],
    },
    {
      name: "SVO — Subject + Verb + Object",
      definition: "The object sits right after the verb and receives the action. It answers the question “verb + what?” or “verb + whom?”",
      examples: ["I like rice.", "She reads books.", "They watch TV."],
    },
  ],
  compareLeftLabel: "SV — nothing after the verb",
  compareRightLabel: "SVO — an object after the verb",
  compareNote: "Ask “verb + what?” right after the verb. If there's an answer, you've got an object — and an SVO sentence.",
  comparePairs: [
    { left: "Birds fly.", right: "Birds eat seeds." },
    { left: "She smiled.", right: "She read a letter." },
    { left: "We arrived.", right: "We packed our bags." },
  ],
  practice: [
    "Turn this SV sentence into SVO: “He runs.” (Add something he runs — a mile? a business?)",
    "Write one SV sentence about your morning.",
    "Write one SVO sentence about your morning.",
  ],
  assessment: [
    { type: "mc", q: "Birds fly. — which pattern?", options: ["SV", "SVO"], correct: 0 },
    { type: "mc", q: "I like rice. — which pattern?", options: ["SV", "SVO"], correct: 1 },
    { type: "mc", q: "They watch TV. — which pattern?", options: ["SV", "SVO"], correct: 1 },
    { type: "mc", q: "The baby cried. — which pattern?", options: ["SV", "SVO"], correct: 0 },
    { type: "reveal", q: "Label the parts: “She reads books.”", answer: "She = S · reads = V · books = O" },
    { type: "reveal", q: "Write one SV sentence and one SVO sentence.", answer: "Any valid pair works — e.g. “He sleeps.” (SV) and “He eats breakfast.” (SVO)." },
  ],
  wrapup: "SV sentences are complete with just a subject and a verb. SVO sentences add an object that receives the action.",
  nextHint: "SVC, where the subject gets described instead of acted on.",
};

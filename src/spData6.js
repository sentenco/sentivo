// Sentence Patterns -- Lesson 6: Mixed pattern review

export default {
  number: 6,
  code: "6",
  patternLabel: "SV · SVO · SVC · SVA · SVOA · SVOO · SVOC",
  title: "Mixed Pattern Review",
  objective: "Tell all seven sentence patterns apart by asking what — if anything — comes after the verb, and what job it's doing.",
  leadIn: "Quick recall: what question do you ask to check for an object? And what's different between a complement and an adverbial?",
  teach: [
    {
      name: "The whole family, side by side",
      definition: "Every pattern is built from the same five parts — subject, verb, object, complement, adverbial — just combined differently.",
      examples: ["Birds fly. (SV)", "I like rice. (SVO)", "She is a teacher. (SVC)", "My house is there. (SVA)"],
    },
    {
      name: "The trickier four",
      definition: "These combine an object with something extra — another object, a complement, or an adverbial.",
      examples: ["She put the book on the table. (SVOA)", "John gave Jane a present. (SVOO)", "They elected her president. (SVOC)", "We found the movie boring. (SVOC)"],
    },
  ],
  guided: [
    { prompt: "She is a teacher. — which pattern?", answer: "SVC — “a teacher” describes she." },
    { prompt: "John gave Jane a present. — which pattern?", answer: "SVOO — two objects: Jane and a present." },
    { prompt: "We found the movie boring. — which pattern?", answer: "SVOC — “boring” describes the movie." },
    { prompt: "He placed the bag under the chair. — which pattern?", answer: "SVOA — “under the chair” is the adverbial." },
  ],
  practice: [
    "Sort these into patterns: “The dog barks.” / “I love pizza.” / “He seems tired.”",
    "Fix the mislabeled sentence: “She is a teacher.” was labeled SVO — what's the correct pattern, and why?",
    "Write two sentences using two different patterns of your choice, and label them.",
  ],
  assessment: [
    { type: "mc", q: "Birds fly. — which pattern?", options: ["SV", "SVO", "SVC"], correct: 0 },
    { type: "mc", q: "She is a teacher. — which pattern?", options: ["SVO", "SVC", "SVA"], correct: 1 },
    { type: "mc", q: "She put the book on the table. — which pattern?", options: ["SVA", "SVOA", "SVOC"], correct: 1 },
    { type: "mc", q: "John gave Jane a present. — which pattern?", options: ["SVOO", "SVOC", "SVOA"], correct: 0 },
    { type: "mc", q: "They elected her president. — which pattern?", options: ["SVOA", "SVOC", "SVOO"], correct: 1 },
    { type: "mc", q: "My house is there. — which pattern?", options: ["SV", "SVA", "SVC"], correct: 1 },
    { type: "reveal", q: "Label the parts: “He placed the bag under the chair.”", answer: "He = S · placed = V · the bag = O · under the chair = A (SVOA)" },
    { type: "reveal", q: "Write one sentence for any two different patterns, and label each.", answer: "Any valid pair works — e.g. “The kids play.” (SV) and “The kids play games.” (SVO)." },
  ],
  wrapup: "All seven patterns come down to one question: what, if anything, follows the verb — and what job is it doing? Object, complement, or adverbial.",
  nextHint: null,
};

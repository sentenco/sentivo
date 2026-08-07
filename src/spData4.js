// Sentence Patterns -- Lesson 4: SVOO

export default {
  number: 4,
  code: "4",
  patternLabel: "SVOO",
  title: "SVOO",
  objective: "Recognize sentences with two objects — an indirect object (usually a person) and a direct object (usually a thing).",
  leadIn: "“John gave Jane a present.” Who received the present, and what was given?",
  teach: [
    {
      name: "SVOO — Subject + Verb + Indirect Object + Direct Object",
      definition: "The indirect object usually receives something — often a person. The direct object is the thing being given, sent, shown, or told.",
      examples: ["John gave Jane a present.", "She sent me a message.", "They told us a story.", "My father bought me a bike."],
    },
    {
      name: "Common SVOO verbs",
      definition: "Verbs like give, send, show, tell, and buy naturally take two objects — one for the receiver, one for the thing.",
      examples: ["He showed her the photos.", "We taught them the rules.", "She offered him a seat.", "I lent my friend a book."],
    },
  ],
  guided: [
    { prompt: "John gave Jane a present. — which is the indirect object?", answer: "Jane — the person who receives it." },
    { prompt: "She sent me a message. — which is the direct object?", answer: "a message — the thing that was sent." },
    { prompt: "They told us ___. (complete with a direct object)", answer: "Any noun works — e.g. “a story.”" },
  ],
  practice: [
    "Rearrange into an SVOO sentence: bike / bought / me / my father.",
    "Write one sentence using give, send, or tell with two objects.",
    "Swap the objects: “She sent me a message” — try it with “him” instead of “me.”",
  ],
  assessment: [
    { type: "mc", q: "John gave Jane a present. — which word is the direct object?", options: ["John", "Jane", "a present"], correct: 2 },
    { type: "mc", q: "They told us a story. — which word is the indirect object?", options: ["They", "us", "a story"], correct: 1 },
    { type: "mc", q: "My father bought me a bike. — which word is the direct object?", options: ["me", "a bike", "father"], correct: 1 },
    { type: "reveal", q: "Label the parts: “She sent me a message.”", answer: "She = S · sent = V · me = indirect object · a message = direct object" },
    { type: "reveal", q: "Rearrange: bought / a bike / my father / me", answer: "My father bought me a bike." },
    { type: "reveal", q: "Write one SVOO sentence of your own.", answer: "Any valid sentence works — e.g. “He showed me his drawings.”" },
  ],
  wrapup: "SVOO sentences carry two objects: an indirect object, usually the receiver, and a direct object, the thing being given, sent, shown, or told.",
  nextHint: "SVOC, where the sentence ends with a complement describing the object.",
};

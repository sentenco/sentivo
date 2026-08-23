// Sentence Patterns -- Lesson 2: SVC

export default {
  number: 2,
  code: "2",
  patternLabel: "SVC",
  title: "SVC",
  objective: "Recognize sentences where a linking verb connects the subject to a complement that describes or renames it — instead of an object receiving an action.",
  leadIn: "“She is a teacher.” Is “a teacher” receiving an action, or describing “she”?",
  teach: [
    {
      name: "SVC — Subject + Verb + Complement",
      definition: "The verb is usually a linking verb — be, seem, become, look, feel. The complement doesn't receive an action; it describes or renames the subject.",
      examples: ["John is tall.", "She is a teacher.", "The soup tastes good."],
    },
    {
      name: "Complement: noun or adjective",
      definition: "A complement can be an adjective (tall, good) or a noun (a teacher, friends) — either way, it circles back to describe the subject.",
      examples: ["He seems tired. (adjective)", "This is my sister. (noun)", "The milk smells sour. (adjective)"],
    },
  ],
  guided: [
    { prompt: "John is tall. — what's the complement?", answer: "tall — it describes John." },
    { prompt: "The soup tastes good. — SVC or SVO?", answer: "SVC — “good” describes the soup, it doesn't receive an action." },
    { prompt: "She is a ___. (complete with a job)", answer: "Any job noun works — e.g. “She is a nurse.”" },
    { prompt: "He seems tired. — is the complement an adjective or a noun?", answer: "adjective — “tired” describes he." },
    { prompt: "This is my sister. — is the complement an adjective or a noun?", answer: "noun — “my sister” renames this." },
    { prompt: "The milk smells sour. — what's the complement, and is it adjective or noun?", answer: "sour — an adjective complement." },
  ],
  practice: [
    "Complete with a suitable complement: “The movie was ___.”",
    "Write one sentence with be + an adjective complement.",
    "Write one sentence with be + a noun complement.",
  ],
  assessment: [
    { type: "mc", q: "John is tall. — which part is the complement?", options: ["John", "is", "tall"], correct: 2 },
    { type: "mc", q: "She is a teacher. — SVC or SVO?", options: ["SVC", "SVO"], correct: 0 },
    { type: "mc", q: "They became friends. — which part is the complement?", options: ["They", "became", "friends"], correct: 2 },
    { type: "mc", q: "He called his mom. — SVC or SVO?", options: ["SVC", "SVO"], correct: 1 },
    { type: "reveal", q: "Label the parts: “The soup tastes good.”", answer: "The soup = S · tastes = V · good = C" },
    { type: "reveal", q: "Write one sentence using be plus a complement.", answer: "Any valid sentence works — e.g. “This cake is delicious.”" },
  ],
  wrapup: "SVC sentences use a linking verb to connect the subject to a complement that describes or renames it — the complement never receives an action the way an object does.",
  nextHint: "SVA and SVOA, where an adverbial adds place, time, or manner.",
};

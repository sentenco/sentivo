// Nouns, Articles & Quantifiers -- Lesson 2: A/An vs The

export default {
  number: 2,
  code: "2",
  title: "A/An vs The",
  formula: "a / an — first mention  ·  the — already known",
  leadIn: "Describe your bedroom to a partner without letting them see it — what's the first object you mention?",
  teach: [
    {
      name: "A/An — Introducing Something New",
      definition: "Use a or an the first time you mention a singular countable noun — a is for consonant sounds, an is for vowel sounds.",
      examples: ["I saw a dog in the park.", "She bought an umbrella.", "He works at a university. (sounds like 'yoo', so a, not an)"],
    },
    {
      name: "The — Something Already Known",
      definition: "Use the once something has already been mentioned, or when it's specific, unique, or obvious from context.",
      examples: ["I saw a dog. The dog was brown.", "The sun rose over the mountains.", "Please close the door. (there's only one)"],
    },
  ],
  compareLeftLabel: "First mention",
  compareRightLabel: "Already known",
  compareNote: "The same noun often gets a/an the first time, then the every time after — the listener now knows exactly which one you mean.",
  comparePairs: [
    { left: "I bought a laptop yesterday.", right: "The laptop was very expensive." },
    { left: "There's a cafe on this street.", right: "The cafe closes at 9pm." },
  ],
  guided: [
    { prompt: "I met ___ interesting person today. (first mention)", answer: "an" },
    { prompt: "He works at ___ university. (a/an sound rule)", answer: "a" },
    { prompt: "She bought ___ umbrella before it started raining. (first mention)", answer: "an" },
    { prompt: "I met a teacher yesterday. ___ teacher was very kind. (already known)", answer: "The" },
    { prompt: "Can you pass me ___ salt? (only one on the table)", answer: "the" },
    { prompt: "___ sun rose over the mountains this morning. (unique — there's only one)", answer: "The" },
  ],
  practice: [
    "Write two sentences about an object — introduce it with a/an, then refer back to it with the.",
    "Write one sentence using the for something unique, like the sun or the internet.",
    "Write one sentence using a/an for the sound rule — like an hour or a university.",
  ],
  wrapup: "A/an introduces something new. The refers back to something already mentioned, or something specific and obvious from context.",
  nextHint: "Zero article, for the times a noun needs no article at all.",
};

// Prepositions -- Lesson 6: Instrument, Agent & Means

export default {
  number: 6,
  code: "6",
  title: "Instrument, Agent & Means",
  formula: "by (agent/method)  ·  with/without (instrument/accompaniment)",
  leadIn: "Name one tool you used today, and how you got to where you are right now (by car, on foot...).",
  teach: [
    {
      name: "By — Agent or Method",
      definition: "By introduces who did something or how an action was carried out, especially in passive sentences and for methods of transport or communication.",
      examples: ["This novel was written by a famous author.", "I go to work by bus.", "She contacted me by email."],
    },
    {
      name: "With & Without — Instrument or Accompaniment",
      definition: "With shows the tool used to do something, or who's accompanying someone; without shows the absence of either.",
      examples: ["She cut the paper with scissors.", "I went to the party with my sister.", "He left without saying goodbye."],
    },
  ],
  compareLeftLabel: "By — the agent or method",
  compareRightLabel: "With — the tool or company",
  compareNote: "By usually answers 'who did it, or how' at a broader level (a method, a doer). With usually answers 'using what, or together with whom' at a more specific, hands-on level.",
  comparePairs: [
    { left: "The bridge was built by engineers.", right: "They built it with steel and concrete." },
    { left: "I travel by train.", right: "I travel with my best friend." },
  ],
  guided: [
    { prompt: "This painting was created ___ a famous artist. (agent)", answer: "by" },
    { prompt: "She opened the letter ___ a knife. (instrument)", answer: "with" },
    { prompt: "He left the meeting ___ saying a word. (absence)", answer: "without" },
  ],
  practice: [
    "Write one sentence using by to describe a method of transport or communication.",
    "Write one sentence using with to describe a tool you used.",
    "Write one sentence using without to describe something missing from an action.",
  ],
  wrapup: "By introduces an agent or a method. With shows a tool or accompaniment, and without shows its absence.",
  nextHint: null,
};

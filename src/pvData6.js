// Passive Voice -- Lesson 6: The By Agent -- When to Use Passive

export default {
  number: 6,
  code: "6",
  title: "The By Agent",
  formula: "passive + (by + agent) — only when the doer matters",
  leadIn: "Think of a famous painting, book, or building. Do you know who made it?",
  teach: [
    {
      name: "When to Drop the Agent",
      definition: "Most passive sentences leave out by + agent, because the doer is unknown, unimportant, or obvious from context.",
      examples: ["My wallet was stolen.", "The bridge was built in 1990.", "Dinner is served at 7pm."],
    },
    {
      name: "When to Include the Agent",
      definition: "Include by + agent when the doer is specific, important information the listener actually needs.",
      examples: ["The novel was written by Jane Austen.", "The Mona Lisa was painted by Leonardo da Vinci.", "This bridge was designed by a famous engineer."],
    },
  ],
  compareLeftLabel: "No agent — doer unknown or unimportant",
  compareRightLabel: "With agent — doer is the key information",
  compareNote: "The same sentence can go either way. Add by + agent only when naming the doer actually adds something useful.",
  comparePairs: [
    { left: "The window was broken.", right: "The window was broken by the kids next door." },
    { left: "The email was sent.", right: "The email was sent by the marketing team, not IT." },
  ],
  guided: [
    { prompt: "The Mona Lisa was painted ___ Leonardo da Vinci. (agent matters)", answer: "by" },
    { prompt: "This song was written ___ a famous singer. (agent matters)", answer: "by" },
    { prompt: "The novel was written ___ Jane Austen. (agent matters)", answer: "by" },
    { prompt: "My phone was stolen ___. (doer unknown — no agent needed)", answer: "(no by-phrase)" },
    { prompt: "The bridge was built ___. (doer unimportant — no agent needed)", answer: "(no by-phrase)" },
    { prompt: "Dinner is served ___ at 7pm. (doer obvious from context — no agent needed)", answer: "(no by-phrase)" },
  ],
  practice: [
    "Write one passive sentence about a famous piece of art or writing, including the agent.",
    "Write one passive sentence about something that happened to you where the doer is unknown, leaving out the agent.",
    "Take one of your earlier passive sentences from this course and decide whether it needs a by-phrase or not.",
  ],
  wrapup: "Passive voice usually drops the doer. Add by + agent only when naming who did it is genuinely useful information.",
  nextHint: null,
};

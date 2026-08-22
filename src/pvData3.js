// Passive Voice -- Lesson 3: Present Perfect Passive

export default {
  number: 3,
  code: "3",
  title: "Present Perfect Passive",
  formula: "has / have been + past participle",
  leadIn: "Look around you — what's one thing that has already been done today?",
  teach: [
    {
      name: "Present Perfect Passive — Formula",
      definition: "has / have been + past participle. Describes something completed at an unspecified time, with a result that still matters right now.",
      examples: ["The report has been finished.", "The tickets have been sold.", "My car has been repaired."],
    },
    {
      name: "Has vs Have",
      definition: "Has agrees with singular subjects (he, she, it); have agrees with plural subjects and I/you/we/they — the same agreement rule as the active voice.",
      examples: ["The house has been sold.", "The keys have been found.", "She has been promoted."],
    },
  ],
  compareLeftLabel: "Present Simple Passive — routine fact",
  compareRightLabel: "Present Perfect Passive — completed, matters now",
  compareNote: "Present simple passive describes something that's generally true. Present perfect passive points at one specific action whose result is relevant right now.",
  comparePairs: [
    { left: "The office is cleaned every day.", right: "The office has been cleaned today." },
    { left: "Reports are checked weekly.", right: "The report has been checked." },
  ],
  guided: [
    { prompt: "The package ___ (deliver) already.", answer: "has been delivered" },
    { prompt: "All the seats ___ (book) for tonight's show.", answer: "have been booked" },
    { prompt: "The problem ___ (fix). You can use the printer now.", answer: "has been fixed" },
  ],
  practice: [
    "Write one sentence about something that has already been done today, using present perfect passive.",
    "Write one sentence about a change that has recently happened to something, like a price or a schedule.",
    "Compare a routine fact and a recent completed action about the same thing, using both present simple and present perfect passive.",
  ],
  wrapup: "The present perfect passive — has/have been + past participle — points to a completed action whose result still matters now.",
  nextHint: "Future passive, where the same receiver-first focus moves forward instead of back.",
};

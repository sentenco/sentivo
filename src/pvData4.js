// Passive Voice -- Lesson 4: Future Passive

export default {
  number: 4,
  code: "4",
  title: "Future Passive",
  formula: "will be + past participle",
  leadIn: "What's something you think will be different about technology in ten years?",
  teach: [
    {
      name: "Future Passive — Formula",
      definition: "will be + past participle. Describes something that will happen to the receiver in the future.",
      examples: ["The results will be announced tomorrow.", "The bridge will be finished next year.", "New employees will be trained next month."],
    },
    {
      name: "Going To Be — An Alternative Future",
      definition: "going to + be + past participle expresses a planned or expected passive action, often something already decided rather than a fresh prediction.",
      examples: ["The building is going to be demolished.", "The event is going to be cancelled.", "The contract is going to be signed tomorrow."],
    },
  ],
  compareLeftLabel: "Will be — prediction or decision now",
  compareRightLabel: "Going to be — already planned",
  compareNote: "Will be often signals a prediction or a decision made in the moment. Going to be signals a plan that was already set before now.",
  comparePairs: [
    { left: "I think the match will be postponed.", right: "The match is going to be postponed — it's already been decided." },
    { left: "The report will be sent later.", right: "The report is going to be sent this afternoon, as planned." },
  ],
  guided: [
    { prompt: "The new store ___ (open) next month. (planned already)", answer: "is going to be opened" },
    { prompt: "I'm sure the flight ___ (delay). (prediction)", answer: "will be delayed" },
    { prompt: "The award ___ (present) at the ceremony tonight.", answer: "will be presented" },
  ],
  practice: [
    "Write one prediction about the future using will be + past participle.",
    "Write one sentence about a decision that's already been made, using going to be.",
    "Write one sentence about your school or workplace's plans for next year.",
  ],
  wrapup: "The future passive — will be + past participle — makes a prediction or decision. Going to be signals a plan already in place.",
  nextHint: "Modal passive, where can, must, and should add ability, obligation, or advice to a passive sentence.",
};

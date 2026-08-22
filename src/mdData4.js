// Modals -- Lesson 4: Obligation and Necessity

export default {
  number: 4,
  code: "4",
  title: "Obligation and Necessity",
  modals: ["must", "mustn't"],
  leadIn: "Name one rule at your school or job that you absolutely must follow.",
  teach: [
    {
      name: "Must — Strong Obligation",
      definition: "Shows something is necessary or required, often based on the speaker's own sense of importance or urgency.",
      examples: ["I must finish this by Friday.", "You must wear a seatbelt.", "We must leave now."],
    },
    {
      name: "Mustn't — Prohibition",
      definition: "Shows something is forbidden. Mustn't is the opposite of must, not a weaker version of it.",
      examples: ["You mustn't smoke here.", "Students mustn't cheat on the exam.", "You mustn't touch that wire."],
    },
  ],
  compareLeftLabel: "Must — required",
  compareRightLabel: "Mustn't — forbidden",
  compareNote: "Must pushes an action forward. Mustn't blocks it completely — they point in opposite directions.",
  comparePairs: [
    { left: "Everyone must wear a helmet on this site.", right: "Visitors mustn't feed the animals." },
    { left: "You must show your ID at the door.", right: "You mustn't park in front of the exit." },
  ],
  guided: [
    { prompt: "You ___ touch that wire — it's dangerous. (forbidden)", answer: "mustn't" },
    { prompt: "Everyone ___ wear a helmet on this site. (required)", answer: "must" },
    { prompt: "Students ___ cheat during the exam. (forbidden)", answer: "mustn't" },
  ],
  practice: [
    "Write one rule using must.",
    "Write one sentence using mustn't to show something is forbidden.",
    "Write one sentence contrasting must and mustn't about the same place, like a classroom.",
  ],
  wrapup: "Must shows something is required. Mustn't shows something is forbidden — the two are opposites.",
  nextHint: "Advice and suggestions, where should and shall offer a recommendation instead of a rule.",
};

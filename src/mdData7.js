// Modals -- Lesson 7: Offers and Promises

export default {
  number: 7,
  code: "7",
  title: "Offers and Promises",
  modals: ["will", "would"],
  leadIn: "A friend is struggling to carry a heavy box. What would you say to offer help?",
  teach: [
    {
      name: "Will — Offers and Promises",
      definition: "Will makes an offer or promise decided right in the moment of speaking — a quick, direct \"I'll do it.\"",
      examples: ["I'll carry that for you.", "I'll call you as soon as I land.", "Don't worry, I'll help you finish this."],
    },
    {
      name: "Would — Softer, More Tentative Offers",
      definition: "Would often makes an offer feel gentler or more hypothetical — a classic way to offer something politely.",
      examples: ["Would you like some coffee?", "I would love to join, if that's okay.", "Would you like a hand with that?"],
    },
  ],
  compareLeftLabel: "Will — direct offer",
  compareRightLabel: "Would — softer offer",
  compareNote: "Will jumps straight to the offer. Would wraps the same offer in something gentler and more polite.",
  comparePairs: [
    { left: "I'll get that for you.", right: "Would you like me to get that for you?" },
    { left: "I'll help you move this weekend.", right: "I would be happy to help you move this weekend." },
  ],
  guided: [
    { prompt: "Don't worry, I ___ take care of it. (direct promise)", answer: "will (often contracted to I'll)" },
    { prompt: "I ___ carry that box for you, it's too heavy. (direct offer)", answer: "will (often contracted to I'll)" },
    { prompt: "I ___ call you the second I land. (direct promise)", answer: "will (often contracted to I'll)" },
    { prompt: "___ you like something to drink? (soft offer)", answer: "Would" },
    { prompt: "I ___ love to come, thank you for asking.", answer: "would" },
    { prompt: "___ you like a hand with those bags? (soft offer)", answer: "Would" },
  ],
  practice: [
    "Offer to help a classmate, using I'll.",
    "Offer something politely, using would you like.",
    "Make a promise to a friend, using will.",
  ],
  wrapup: "Will makes a direct, in-the-moment offer or promise. Would softens the same offer, especially in polite questions like Would you like...?",
  nextHint: null,
};

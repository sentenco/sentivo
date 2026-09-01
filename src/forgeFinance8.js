// FORGE, Finance & Banking Track, Lesson 8: "Planning for a Big Purchase"

export default {
  id: "forge-finance-8",
  code: "L8",
  category: "Finance & Banking",
  situation: "Planning for a Big Purchase",
  hasCallback: true,
  callback: {
    fromSituation: "Handling a Billing Dispute",
    words: ["refund", "escalate", "resolve"],
  },
  words: [
    { word: "save up", meaning: "to gradually collect money for something specific", example: "I'm saving up for a new car.", question: "Are you currently saving up for anything big?" },
    { word: "down payment", meaning: "the first, upfront payment made on something expensive", example: "I made a down payment on my apartment.", question: "Have you ever made a down payment on something?" },
    { word: "compare prices", meaning: "to check different prices before buying", example: "I always compare prices before a big purchase.", question: "Do you compare prices before making a big purchase?" },
    { word: "worth it", meaning: "valuable enough to justify the cost", example: "The extra cost was worth it for better quality.", question: "Tell me about a big purchase that felt worth it." },
    { word: "impulse buy", meaning: "something bought suddenly, without planning", example: "That was an impulse buy I regretted.", question: "Have you ever made an impulse buy you regretted, or one you loved?" },
    { word: "financing", meaning: "a way of paying for something over time instead of all at once", example: "I used financing to buy my laptop.", question: "Have you ever used financing for a big purchase?" },
  ],
  storytellingPrompt: "Tell me about a big purchase you planned for, or one you're planning now.",
};

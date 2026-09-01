// FORGE, Finance & Banking Track, Lesson 7: "Handling a Billing Dispute"

export default {
  id: "forge-finance-7",
  code: "L7",
  category: "Finance & Banking",
  situation: "Handling a Billing Dispute",
  hasCallback: true,
  callback: {
    fromSituation: "Talking About Savings and Investments",
    words: ["savings", "invest", "goal"],
  },
  words: [
    { word: "overcharge", meaning: "to charge someone more than the correct amount", example: "I noticed I was overcharged on my bill.", question: "Have you ever been overcharged for something?" },
    { word: "refund", meaning: "money given back to you", example: "I received a refund after the mistake was fixed.", question: "Tell me about a time you received a refund." },
    { word: "customer service", meaning: "help provided to customers by a company", example: "I called customer service to fix the issue.", question: "How do you usually feel about calling customer service?" },
    { word: "escalate", meaning: "to move a problem to someone with more authority", example: "I had to escalate my complaint to a manager.", question: "Have you ever had to escalate a complaint?" },
    { word: "resolve", meaning: "to successfully deal with and end a problem", example: "The issue was resolved within a few days.", question: "Tell me about a billing issue that was resolved well, or not so well." },
    { word: "patient", meaning: "able to stay calm and wait without getting upset", example: "I tried to stay patient while waiting for a response.", question: "How patient are you when dealing with a billing problem?" },
  ],
  storytellingPrompt: "Tell me about a time you had to resolve a billing dispute.",
};

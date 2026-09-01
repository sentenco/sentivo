// FORGE, Finance & Banking Track, Lesson 6: "Talking About Savings and Investments"

export default {
  id: "forge-finance-6",
  code: "L6",
  category: "Finance & Banking",
  situation: "Talking About Savings and Investments",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with an Unexpected Bill",
    words: ["emergency fund", "dispute", "installment plan"],
  },
  words: [
    { word: "savings", meaning: "money set aside instead of spent", example: "I add a little to my savings every month.", question: "Do you have a regular savings habit?" },
    { word: "invest", meaning: "to put money into something hoping it will grow", example: "I started investing a small amount each month.", question: "Have you ever invested money? In what?" },
    { word: "retirement", meaning: "the time in life when you stop working", example: "I'm saving for retirement.", question: "Do you think about saving for retirement?" },
    { word: "risk", meaning: "the chance of losing something, like money", example: "Some investments come with more risk than others.", question: "How comfortable are you with financial risk?" },
    { word: "goal", meaning: "something you're aiming to achieve", example: "My savings goal is to buy a car.", question: "What's a savings goal you have right now?" },
    { word: "compound interest", meaning: "interest earned on both the original amount and the interest already added", example: "Compound interest helped my savings grow faster.", question: "How much do you know about compound interest?" },
  ],
  storytellingPrompt: "Tell me about your approach to saving or investing money.",
};

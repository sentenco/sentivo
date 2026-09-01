// FORGE, Finance & Banking Track, Lesson 3: "Budgeting Monthly Expenses"

export default {
  id: "forge-finance-3",
  code: "L3",
  category: "Finance & Banking",
  situation: "Budgeting Monthly Expenses",
  hasCallback: true,
  callback: {
    fromSituation: "Understanding a Pay Slip",
    words: ["net pay", "benefits", "pay period"],
  },
  words: [
    { word: "budget", meaning: "a plan for how to spend and save money", example: "I made a budget for this month.", question: "Do you follow a monthly budget?" },
    { word: "essential", meaning: "absolutely necessary", example: "Rent is an essential expense.", question: "What do you consider an essential expense?" },
    { word: "leftover", meaning: "remaining after other things are used or paid", example: "I try to save whatever's leftover at the end of the month.", question: "Do you usually have money leftover at the end of the month?" },
    { word: "overspend", meaning: "to spend more money than you planned", example: "I overspent on groceries this month.", question: "What do you tend to overspend on?" },
    { word: "track", meaning: "to record and follow something closely", example: "I track my spending with an app.", question: "Do you track your spending? How?" },
    { word: "cut back", meaning: "to reduce how much you spend on something", example: "I had to cut back on eating out.", question: "Have you ever had to cut back on a monthly expense?" },
  ],
  storytellingPrompt: "Tell me about how you manage your monthly budget.",
};

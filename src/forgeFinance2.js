// FORGE, Finance & Banking Track, Lesson 2: "Understanding a Pay Slip"

export default {
  id: "forge-finance-2",
  code: "L2",
  category: "Finance & Banking",
  situation: "Understanding a Pay Slip",
  hasCallback: true,
  callback: {
    fromSituation: "Opening a Bank Account",
    words: ["deposit", "balance", "minimum"],
  },
  words: [
    { word: "gross pay", meaning: "your total earnings before anything is taken out", example: "My gross pay is higher than what I actually take home.", question: "Do you usually check your gross pay or your take-home pay?" },
    { word: "deduction", meaning: "an amount taken out of your pay, like taxes", example: "Taxes are the biggest deduction on my pay slip.", question: "What deductions show up on your pay slip?" },
    { word: "net pay", meaning: "the amount you actually receive after deductions", example: "My net pay goes straight into my account.", question: "Is your net pay what you expected when you took the job?" },
    { word: "benefits", meaning: "extra things a job offers besides salary, like health insurance", example: "My job's benefits include health insurance.", question: "What benefits matter most to you in a job?" },
    { word: "overtime pay", meaning: "extra money for working beyond regular hours", example: "I got overtime pay for the extra shift.", question: "Have you ever earned overtime pay?" },
    { word: "pay period", meaning: "the length of time a pay slip covers", example: "My pay period is every two weeks.", question: "What's your pay period: weekly, biweekly, or monthly?" },
  ],
  storytellingPrompt: "Tell me about understanding your pay slip for the first time, or something confusing about one.",
};

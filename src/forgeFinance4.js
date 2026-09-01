// FORGE, Finance & Banking Track, Lesson 4: "Applying for a Loan or Credit Card"

export default {
  id: "forge-finance-4",
  code: "L4",
  category: "Finance & Banking",
  situation: "Applying for a Loan or Credit Card",
  hasCallback: true,
  callback: {
    fromSituation: "Budgeting Monthly Expenses",
    words: ["budget", "track", "cut back"],
  },
  words: [
    { word: "credit score", meaning: "a number showing how reliable you are at repaying money", example: "A good credit score helped me get approved.", question: "How much do you know about your credit score?" },
    { word: "interest rate", meaning: "the extra cost of borrowing money, shown as a percentage", example: "The interest rate on my loan is quite low.", question: "How much do interest rates affect your decisions about borrowing?" },
    { word: "approve", meaning: "to officially accept or allow something", example: "The bank approved my loan application.", question: "Have you ever applied for something and been approved or denied?" },
    { word: "installment", meaning: "one of several regular payments", example: "I pay my loan back in monthly installments.", question: "Do you prefer paying in one lump sum or in installments?" },
    { word: "limit", meaning: "the maximum amount allowed, like on a credit card", example: "I try not to get close to my credit limit.", question: "Do you keep a close eye on your credit limit?" },
    { word: "debt", meaning: "money that you owe to someone", example: "I paid off my debt last year.", question: "How do you feel about carrying debt?" },
  ],
  storytellingPrompt: "Tell me about applying for a loan or credit card, or your thoughts on borrowing money.",
};

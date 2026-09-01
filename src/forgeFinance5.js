// FORGE, Finance & Banking Track, Lesson 5: "Dealing with an Unexpected Bill"

export default {
  id: "forge-finance-5",
  code: "L5",
  category: "Finance & Banking",
  situation: "Dealing with an Unexpected Bill",
  hasCallback: true,
  callback: {
    fromSituation: "Applying for a Loan or Credit Card",
    words: ["approve", "limit", "debt"],
  },
  words: [
    { word: "unexpected", meaning: "surprising, not planned for", example: "I got an unexpected medical bill.", question: "Tell me about an unexpected bill you've received." },
    { word: "dispute", meaning: "to formally disagree with a charge or decision", example: "I disputed a charge on my credit card.", question: "Have you ever disputed a bill or charge?" },
    { word: "overdue", meaning: "past the date it should have been paid", example: "My phone bill was overdue by a few days.", question: "Has a bill ever become overdue by accident?" },
    { word: "late fee", meaning: "extra money charged for paying after the due date", example: "I paid a late fee because I forgot the deadline.", question: "Have you ever paid a late fee? What happened?" },
    { word: "emergency fund", meaning: "money saved for unexpected situations", example: "My emergency fund covered the surprise repair.", question: "Do you have an emergency fund? How did you build it?" },
    { word: "installment plan", meaning: "an arrangement to pay a large bill in smaller parts over time", example: "I set up an installment plan for the medical bill.", question: "Have you ever set up an installment plan for a big bill?" },
  ],
  storytellingPrompt: "Tell me about a time you had to deal with an unexpected bill.",
};

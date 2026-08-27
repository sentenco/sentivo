// FORGE, Health Track, Lesson 6: "Health Insurance & Billing Questions"

export default {
  id: "forge-health-6",
  code: "L6",
  category: "Health",
  situation: "Health Insurance & Billing Questions",
  hasCallback: true,
  callback: {
    fromSituation: "Talking About a Follow-up Visit",
    words: ["improve", "monitor", "results"],
  },
  words: [
    { word: "coverage", meaning: "what your insurance pays for", example: "My coverage includes regular checkups.", question: "Do you know what your health coverage includes?" },
    { word: "claim", meaning: "a request for your insurance to pay", example: "I submitted a claim after my visit.", question: "Have you ever had to file an insurance claim?" },
    { word: "deductible", meaning: "the amount you pay before insurance helps", example: "Our deductible is quite high this year.", question: "Do you know your deductible amount?" },
    { word: "copay", meaning: "a small fixed payment you make at a visit", example: "The copay for a regular visit is twenty dollars.", question: "Tell me about a copay you've had to pay recently." },
    { word: "reimburse", meaning: "to pay someone back for money they spent", example: "The company reimbursed her for the medical bill.", question: "Have you ever been reimbursed for a medical expense?" },
    { word: "provider", meaning: "a doctor or clinic in your insurance network", example: "Make sure your provider is in your network.", question: "How do you usually choose a healthcare provider?" },
  ],
  storytellingPrompt: "Tell me about a time you had a question about insurance or a medical bill.",
};

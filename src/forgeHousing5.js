// FORGE, Housing & Apartment Life Track, Lesson 5: "Splitting Bills with a Roommate"

export default {
  id: "forge-housing-5",
  code: "L5",
  category: "Housing & Apartment Life",
  situation: "Splitting Bills with a Roommate",
  hasCallback: true,
  callback: {
    fromSituation: "Reporting a Maintenance Issue",
    words: ["urgent", "inconvenient", "resolved"],
  },
  words: [
    { word: "roommate", meaning: "someone you share a home with", example: "My roommate and I split the rent evenly.", question: "Have you ever had a roommate? What was it like?" },
    { word: "split", meaning: "to divide something between people", example: "We split the utility bill in half.", question: "How do you usually split expenses with a roommate?" },
    { word: "reimburse", meaning: "to pay someone back money they spent", example: "I reimbursed my roommate for groceries.", question: "Have you ever had to reimburse someone for a shared expense?" },
    { word: "fair", meaning: "treating everyone equally and reasonably", example: "We agreed on a fair way to split the bills.", question: "What's a fair way to split expenses in a shared home?" },
    { word: "awkward", meaning: "uncomfortable or embarrassing", example: "Talking about money can feel awkward sometimes.", question: "Have you ever had an awkward money conversation with a roommate?" },
    { word: "agreement", meaning: "a decision or arrangement reached by two or more people", example: "We made an agreement about who pays for what.", question: "Have you ever made a clear agreement with a roommate about bills?" },
  ],
  storytellingPrompt: "Tell me about splitting bills or expenses with a roommate.",
};

// FORGE, Housing & Apartment Life Track, Lesson 6: "Dealing with Noise Complaints"

export default {
  id: "forge-housing-6",
  code: "L6",
  category: "Housing & Apartment Life",
  situation: "Dealing with Noise Complaints",
  hasCallback: true,
  callback: {
    fromSituation: "Splitting Bills with a Roommate",
    words: ["reimburse", "fair", "agreement"],
  },
  words: [
    { word: "noise", meaning: "sound, especially loud or unwanted sound", example: "The noise from upstairs woke me up.", question: "Has noise from neighbors ever bothered you?" },
    { word: "complain", meaning: "to say you are unhappy about something", example: "I complained to the building manager about the noise.", question: "Have you ever complained about noise? What happened?" },
    { word: "respectful", meaning: "showing care and consideration for someone", example: "Most neighbors are respectful about noise at night.", question: "How respectful are your neighbors about noise?" },
    { word: "quiet hours", meaning: "a set time when noise should be kept low", example: "Our building has quiet hours after 10 PM.", question: "Does your building or neighborhood have quiet hours?" },
    { word: "disturb", meaning: "to interrupt someone's peace or rest", example: "I try not to disturb my neighbors late at night.", question: "Have you ever worried about disturbing a neighbor?" },
    { word: "settle", meaning: "to reach an agreement and end a disagreement", example: "We settled the noise issue by talking it through.", question: "Have you ever settled a disagreement with a neighbor peacefully?" },
  ],
  storytellingPrompt: "Tell me about a noise issue you've experienced or handled.",
};

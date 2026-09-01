// FORGE, Housing & Apartment Life Track, Lesson 7: "Renewing or Ending a Lease"

export default {
  id: "forge-housing-7",
  code: "L7",
  category: "Housing & Apartment Life",
  situation: "Renewing or Ending a Lease",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with Noise Complaints",
    words: ["quiet hours", "disturb", "settle"],
  },
  words: [
    { word: "extend", meaning: "to make something last longer", example: "I decided to extend my lease for six more months.", question: "Have you ever extended a lease or agreement?" },
    { word: "move out", meaning: "to leave a place you were living in", example: "I'm planning to move out at the end of the month.", question: "Tell me about a time you moved out of a place." },
    { word: "notice period", meaning: "the amount of time you must inform someone before a change", example: "My lease requires a 30-day notice period.", question: "What notice period does your lease require, if you have one?" },
    { word: "inspection", meaning: "an official check of the condition of something", example: "We had a move-out inspection.", question: "Have you ever had a move-out inspection?" },
    { word: "downsize", meaning: "to move to a smaller home", example: "We decided to downsize after the kids moved out.", question: "Would you ever downsize, or have you already?" },
    { word: "upgrade", meaning: "to move to something better", example: "I upgraded to a bigger apartment this year.", question: "Have you ever upgraded your living situation?" },
  ],
  storytellingPrompt: "Tell me about a time you renewed, ended, or changed a living situation.",
};

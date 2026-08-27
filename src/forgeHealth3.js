// FORGE, Health Track, Lesson 3: "At the Pharmacy"

export default {
  id: "forge-health-3",
  code: "L3",
  category: "Health",
  situation: "At the Pharmacy",
  hasCallback: true,
  callback: {
    fromSituation: "Booking or Rescheduling an Appointment",
    words: ["reschedule", "urgent", "follow-up"],
  },
  words: [
    { word: "prescription", meaning: "a doctor's written order for medicine", example: "The doctor gave me a prescription for antibiotics.", question: "Have you ever needed a prescription? What was it for?" },
    { word: "dosage", meaning: "how much medicine to take and how often", example: "Always check the dosage before taking any medicine.", question: "Do you always check the dosage before taking medicine?" },
    { word: "refill", meaning: "to get more of the same medicine again", example: "I need to refill my prescription this week.", question: "Tell me about a time you needed to refill a prescription." },
    { word: "side effect", meaning: "an unwanted result of taking medicine", example: "Feeling tired is a common side effect of this medicine.", question: "Have you ever had a side effect from medicine?" },
    { word: "pharmacist", meaning: "the person who prepares and gives out medicine", example: "The pharmacist explained how to take the tablets.", question: "Do you ever ask a pharmacist for advice?" },
    { word: "over-the-counter", meaning: "medicine you can buy without a prescription", example: "Pain relievers are usually available over-the-counter.", question: "What over-the-counter medicine do you usually keep at home?" },
  ],
  storytellingPrompt: "Tell me about a trip to the pharmacy.",
};

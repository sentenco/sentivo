// FORGE, Travel & Transportation Track, Lesson 5: "Dealing with a Travel Delay"

export default {
  id: "forge-travel-5",
  code: "L5",
  category: "Travel & Transportation",
  situation: "Dealing with a Travel Delay",
  hasCallback: true,
  callback: {
    fromSituation: "Renting a Car",
    words: ["insurance", "return", "unfamiliar"],
  },
  words: [
    { word: "cancellation", meaning: "the act of stopping something planned, like a flight", example: "We got a notification about the cancellation.", question: "Have you ever experienced a flight or trip cancellation?" },
    { word: "reschedule", meaning: "to change the time of something planned", example: "I had to reschedule my connecting flight.", question: "Have you ever had to reschedule part of a trip?" },
    { word: "compensation", meaning: "money or something else given to make up for a problem", example: "The airline offered compensation for the delay.", question: "Have you ever received compensation for a travel problem?" },
    { word: "patience", meaning: "the ability to stay calm and wait without getting upset", example: "Dealing with delays takes a lot of patience.", question: "How is your patience when dealing with travel delays?" },
    { word: "alternative", meaning: "another option, different from the original plan", example: "We found an alternative flight the next morning.", question: "Have you ever found a good alternative during a travel delay?" },
    { word: "stranded", meaning: "unable to leave a place, stuck", example: "We were stranded at the airport overnight.", question: "Have you ever been stranded somewhere during a trip?" },
  ],
  storytellingPrompt: "Tell me about a time you dealt with a travel delay or cancellation.",
};

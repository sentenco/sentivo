// FORGE, Travel & Transportation Track, Lesson 3: "Navigating Public Transportation"

export default {
  id: "forge-travel-3",
  code: "L3",
  category: "Travel & Transportation",
  situation: "Navigating Public Transportation",
  hasCallback: true,
  callback: {
    fromSituation: "Going Through Airport Security",
    words: ["carry-on", "delay", "gate"],
  },
  words: [
    { word: "route", meaning: "the path or way to get somewhere", example: "I looked up the fastest route to the station.", question: "Do you usually plan your route in advance?" },
    { word: "fare", meaning: "the price you pay to use transportation", example: "The bus fare was cheaper than I expected.", question: "How do you usually pay the fare for public transportation?" },
    { word: "transfer", meaning: "to change from one bus, train, or line to another", example: "I had to transfer trains twice.", question: "Have you ever had to transfer between different lines or buses?" },
    { word: "rush hour", meaning: "the busiest time of day for traffic or transit", example: "The subway was packed during rush hour.", question: "What's rush hour like where you live or travel?" },
    { word: "crowded", meaning: "full of people", example: "The train was really crowded that morning.", question: "Tell me about a time public transportation was really crowded." },
    { word: "missed", meaning: "failed to catch something on time", example: "I missed my connecting train by a minute.", question: "Have you ever missed a bus or train? What did you do?" },
  ],
  storytellingPrompt: "Tell me about navigating public transportation in an unfamiliar place.",
};

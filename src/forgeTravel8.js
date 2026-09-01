// FORGE, Travel & Transportation Track, Lesson 8: "Coming Home from a Trip"

export default {
  id: "forge-travel-8",
  code: "L8",
  category: "Travel & Transportation",
  situation: "Coming Home from a Trip",
  hasCallback: true,
  callback: {
    fromSituation: "Asking for Directions in a New City",
    words: ["local", "map", "detour"],
  },
  words: [
    { word: "jet lag", meaning: "tiredness caused by traveling across time zones", example: "I had bad jet lag after the long flight.", question: "Have you ever experienced jet lag? How did you deal with it?" },
    { word: "reflect", meaning: "to think carefully about something that happened", example: "I like to reflect on the trip once I'm back home.", question: "Do you usually reflect on a trip once you're home?" },
    { word: "souvenir", meaning: "an object you keep to remember a trip", example: "I brought back a small souvenir for my sister.", question: "Do you usually bring back a souvenir from a trip?" },
    { word: "readjust", meaning: "to get used to your normal routine again", example: "It took a few days to readjust after the trip.", question: "How long does it usually take you to readjust after traveling?" },
    { word: "memorable", meaning: "worth remembering, special", example: "That trip was one of the most memorable ones I've had.", question: "Tell me about the most memorable part of a recent trip." },
    { word: "homesick", meaning: "missing home while away, or missing travel once back", example: "I felt a little homesick by the end of the trip.", question: "Have you ever felt homesick during or after a trip?" },
  ],
  storytellingPrompt: "Tell me about coming home after a trip, and how you felt.",
};

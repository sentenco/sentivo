// FORGE, Travel & Transportation Track, Lesson 7: "Asking for Directions in a New City"

export default {
  id: "forge-travel-7",
  code: "L7",
  category: "Travel & Transportation",
  situation: "Asking for Directions in a New City",
  hasCallback: true,
  callback: {
    fromSituation: "Checking Into a Hotel",
    words: ["front desk", "checkout time", "complimentary"],
  },
  words: [
    { word: "lost", meaning: "not knowing where you are or how to get somewhere", example: "I got a little lost on the way to the museum.", question: "Have you ever gotten lost in a new city?" },
    { word: "landmark", meaning: "a well-known building or feature used to find your way", example: "I used the tower as a landmark.", question: "Do you use landmarks to find your way in a new place?" },
    { word: "local", meaning: "a person who lives in or knows a particular area", example: "A local helped me find the right street.", question: "Have you ever asked a local for directions?" },
    { word: "straight ahead", meaning: "directly in front, without turning", example: "The station is straight ahead, past the bridge.", question: "How comfortable are you giving directions like 'straight ahead' or 'turn left'?" },
    { word: "map", meaning: "a drawing or app showing the layout of a place", example: "I checked the map before heading out.", question: "Do you prefer using a map app or asking someone directly?" },
    { word: "detour", meaning: "a different, often longer route than usual", example: "We took a detour because of construction.", question: "Have you ever taken a detour during a trip?" },
  ],
  storytellingPrompt: "Tell me about asking for directions or getting a little lost somewhere new.",
};

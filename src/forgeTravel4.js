// FORGE, Travel & Transportation Track, Lesson 4: "Renting a Car"

export default {
  id: "forge-travel-4",
  code: "L4",
  category: "Travel & Transportation",
  situation: "Renting a Car",
  hasCallback: true,
  callback: {
    fromSituation: "Navigating Public Transportation",
    words: ["route", "fare", "crowded"],
  },
  words: [
    { word: "rental agency", meaning: "a company that rents out cars", example: "I picked up the car from the rental agency at the airport.", question: "Have you ever used a car rental agency?" },
    { word: "insurance", meaning: "protection you pay for in case something goes wrong", example: "I added extra insurance for the rental.", question: "Do you usually add extra insurance when renting a car?" },
    { word: "mileage", meaning: "the distance a vehicle travels, often measured for cost", example: "The rental had unlimited mileage.", question: "Does mileage affect your decision when renting a car?" },
    { word: "GPS", meaning: "a device or app that gives directions using satellite location", example: "I used the GPS to find our hotel.", question: "Do you rely on GPS when driving somewhere new?" },
    { word: "return", meaning: "to bring something back, like a rented car", example: "I have to return the car by noon.", question: "Have you ever been late to return a rental car?" },
    { word: "unfamiliar", meaning: "not known or recognized", example: "Driving in an unfamiliar city was a little stressful.", question: "How do you feel driving in an unfamiliar place?" },
  ],
  storytellingPrompt: "Tell me about renting a car, or your thoughts on driving somewhere new.",
};

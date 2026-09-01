// FORGE, Travel & Transportation Track, Lesson 1: "Booking a Flight or Hotel"
// First lesson in the category -- no Callback stage (nothing to call back to yet).

export default {
  id: "forge-travel-1",
  code: "L1",
  category: "Travel & Transportation",
  situation: "Booking a Flight or Hotel",
  hasCallback: false,
  callback: null,
  words: [
    { word: "book", meaning: "to arrange and pay for something in advance", example: "I booked my flight two months early.", question: "How far in advance do you usually book a flight?" },
    { word: "itinerary", meaning: "a planned schedule of places to go and things to do", example: "I made an itinerary for the whole trip.", question: "Do you like planning a detailed itinerary, or keeping things flexible?" },
    { word: "layover", meaning: "a stop between flights", example: "I had a two-hour layover in Tokyo.", question: "Tell me about a layover you've experienced." },
    { word: "accommodation", meaning: "a place to stay, like a hotel", example: "We found affordable accommodation near the beach.", question: "What kind of accommodation do you usually look for?" },
    { word: "confirmation", meaning: "an official message showing a booking is complete", example: "I received a confirmation email right after booking.", question: "Do you always double-check your booking confirmation?" },
    { word: "budget", meaning: "the amount of money you plan to spend", example: "We kept a strict travel budget.", question: "How do you usually budget for a trip?" },
  ],
  storytellingPrompt: "Tell me about booking a flight or hotel for a trip.",
};

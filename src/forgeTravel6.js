// FORGE, Travel & Transportation Track, Lesson 6: "Checking Into a Hotel"

export default {
  id: "forge-travel-6",
  code: "L6",
  category: "Travel & Transportation",
  situation: "Checking Into a Hotel",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with a Travel Delay",
    words: ["compensation", "alternative", "stranded"],
  },
  words: [
    { word: "reservation", meaning: "an arrangement made in advance to secure a room", example: "I had a reservation for two nights.", question: "Do you always make a reservation before arriving at a hotel?" },
    { word: "front desk", meaning: "the area in a hotel where guests check in", example: "I asked the front desk about breakfast hours.", question: "What do you usually ask the front desk when you check in?" },
    { word: "amenity", meaning: "a useful or enjoyable feature, like a pool or gym", example: "The hotel had a nice rooftop amenity.", question: "What hotel amenity matters most to you?" },
    { word: "checkout time", meaning: "the time by which you must leave your room", example: "Checkout time was eleven in the morning.", question: "Have you ever been rushed by checkout time?" },
    { word: "view", meaning: "what you can see from a window or place", example: "Our room had a beautiful view of the city.", question: "Tell me about a great view you've had from a hotel room." },
    { word: "complimentary", meaning: "given for free", example: "Breakfast was complimentary at our hotel.", question: "What's something complimentary you've enjoyed at a hotel?" },
  ],
  storytellingPrompt: "Tell me about checking into a hotel, or a memorable hotel stay.",
};

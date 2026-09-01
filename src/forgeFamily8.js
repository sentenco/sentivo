// FORGE, Family & Home Life Track, Lesson 8: "Planning a Family Trip or Outing"

export default {
  id: "forge-family-8",
  code: "L8",
  category: "Family & Home Life",
  situation: "Planning a Family Trip or Outing",
  hasCallback: true,
  callback: {
    fromSituation: "Handling Screen Time Rules",
    words: ["limit", "negotiate", "balance"],
  },
  words: [
    { word: "destination", meaning: "the place you are traveling to", example: "Our family's summer destination is the beach.", question: "What's a destination your family has visited or wants to visit?" },
    { word: "pack", meaning: "to put things into a bag or suitcase for a trip", example: "I need to pack my bag before we leave.", question: "Are you usually an early packer or a last-minute packer?" },
    { word: "itinerary", meaning: "a planned list of places to visit or things to do", example: "My dad made an itinerary for our whole trip.", question: "Does your family usually plan an itinerary, or decide as you go?" },
    { word: "squeeze in", meaning: "to fit something into a busy schedule", example: "We squeezed in a visit to my grandparents on the way.", question: "Have you ever squeezed in an extra stop during a family trip?" },
    { word: "carsick", meaning: "feeling sick from riding in a car", example: "My little sister gets carsick on long drives.", question: "Do you or anyone in your family get carsick?" },
    { word: "memorable", meaning: "worth remembering, special", example: "That road trip was one of the most memorable ones we've had.", question: "Tell me about a memorable family trip or outing." },
  ],
  storytellingPrompt: "Tell me about a family trip or outing you remember well.",
};

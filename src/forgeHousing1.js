// FORGE, Housing & Apartment Life Track, Lesson 1: "Apartment Hunting"
// First lesson in the category -- no Callback stage (nothing to call back to yet).

export default {
  id: "forge-housing-1",
  code: "L1",
  category: "Housing & Apartment Life",
  situation: "Apartment Hunting",
  hasCallback: false,
  callback: null,
  words: [
    { word: "listing", meaning: "an advertisement for a property available to rent or buy", example: "I found a great listing online.", question: "Where do you usually look for apartment listings?" },
    { word: "tour", meaning: "a visit to see a place before deciding", example: "We scheduled a tour of the apartment.", question: "What do you look for during an apartment tour?" },
    { word: "budget-friendly", meaning: "affordable, within your price range", example: "I was looking for something budget-friendly.", question: "How important is budget-friendly pricing when you're looking for a place?" },
    { word: "amenities", meaning: "useful or enjoyable features of a place, like a gym or pool", example: "The building has great amenities.", question: "What amenities matter most to you in a home?" },
    { word: "commute", meaning: "the trip you make regularly, especially to work", example: "The commute from this apartment would be short.", question: "How much does commute distance affect where you choose to live?" },
    { word: "deposit", meaning: "money paid in advance to secure a rental", example: "I paid a deposit to hold the apartment.", question: "Have you ever paid a deposit to hold a place?" },
  ],
  storytellingPrompt: "Tell me about a time you looked for an apartment or a place to live.",
};

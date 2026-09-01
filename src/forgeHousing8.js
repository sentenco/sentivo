// FORGE, Housing & Apartment Life Track, Lesson 8: "Moving to a New Place"

export default {
  id: "forge-housing-8",
  code: "L8",
  category: "Housing & Apartment Life",
  situation: "Moving to a New Place",
  hasCallback: true,
  callback: {
    fromSituation: "Renewing or Ending a Lease",
    words: ["move out", "inspection", "upgrade"],
  },
  words: [
    { word: "pack", meaning: "to put things into boxes or bags for moving", example: "I spent the whole weekend packing.", question: "How do you usually pack when you move?" },
    { word: "moving truck", meaning: "a large vehicle used to transport belongings", example: "We rented a moving truck for the day.", question: "Have you ever rented a moving truck?" },
    { word: "unpack", meaning: "to take things out of boxes after moving", example: "It took me a week to fully unpack.", question: "How long does it usually take you to unpack after moving?" },
    { word: "adjust", meaning: "to become used to a new situation", example: "It took a while to adjust to the new neighborhood.", question: "How long does it usually take you to adjust to a new place?" },
    { word: "new chapter", meaning: "a new period or phase in life", example: "This move felt like a new chapter for me.", question: "Has a move ever felt like the start of a new chapter?" },
    { word: "overwhelming", meaning: "causing too much stress or difficulty at once", example: "Moving day always feels overwhelming.", question: "What part of moving feels most overwhelming to you?" },
  ],
  storytellingPrompt: "Tell me about a time you moved to a new place.",
};

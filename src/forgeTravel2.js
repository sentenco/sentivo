// FORGE, Travel & Transportation Track, Lesson 2: "Going Through Airport Security"

export default {
  id: "forge-travel-2",
  code: "L2",
  category: "Travel & Transportation",
  situation: "Going Through Airport Security",
  hasCallback: true,
  callback: {
    fromSituation: "Booking a Flight or Hotel",
    words: ["layover", "accommodation", "confirmation"],
  },
  words: [
    { word: "boarding pass", meaning: "a document that lets you get on a flight", example: "I showed my boarding pass at the gate.", question: "Do you prefer a paper or digital boarding pass?" },
    { word: "security check", meaning: "the process of checking passengers and bags before flying", example: "The security check took longer than usual.", question: "How do you feel about airport security checks?" },
    { word: "carry-on", meaning: "a bag you bring with you onto the plane", example: "I only brought a carry-on for this trip.", question: "Do you usually pack a carry-on, or check a bag?" },
    { word: "delay", meaning: "when something happens later than planned", example: "Our flight had a two-hour delay.", question: "Tell me about a flight delay you've experienced." },
    { word: "gate", meaning: "the area where passengers board a specific flight", example: "Our gate changed at the last minute.", question: "Has your gate ever changed at the last minute?" },
    { word: "announcement", meaning: "a message given to a group of people, often over a speaker", example: "I almost missed the boarding announcement.", question: "Have you ever almost missed an announcement at an airport?" },
  ],
  storytellingPrompt: "Tell me about going through airport security or getting to your gate.",
};

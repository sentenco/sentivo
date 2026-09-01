// FORGE, Housing & Apartment Life Track, Lesson 4: "Reporting a Maintenance Issue"

export default {
  id: "forge-housing-4",
  code: "L4",
  category: "Housing & Apartment Life",
  situation: "Reporting a Maintenance Issue",
  hasCallback: true,
  callback: {
    fromSituation: "Meeting New Neighbors",
    words: ["considerate", "common area", "keep in touch"],
  },
  words: [
    { word: "leak", meaning: "water escaping from where it shouldn't", example: "I noticed a leak under the sink.", question: "Have you ever dealt with a leak at home?" },
    { word: "repair", meaning: "to fix something that's broken", example: "The landlord sent someone to repair it the next day.", question: "How quickly does something usually get repaired where you live?" },
    { word: "maintenance", meaning: "the work of keeping something in good condition", example: "I submitted a maintenance request online.", question: "How do you usually report a maintenance issue?" },
    { word: "urgent", meaning: "needing attention right away", example: "The broken heater felt urgent in winter.", question: "Tell me about a maintenance issue that felt urgent." },
    { word: "inconvenient", meaning: "causing trouble or difficulty", example: "The repair happened at an inconvenient time.", question: "Has a repair ever happened at an inconvenient time for you?" },
    { word: "resolved", meaning: "fixed, no longer a problem", example: "The issue was resolved within a day.", question: "Tell me about a maintenance issue that got resolved quickly, or one that didn't." },
  ],
  storytellingPrompt: "Tell me about a maintenance issue you've had to report.",
};

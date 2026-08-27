// FORGE, Health Track, Lesson 4: "Understanding a Diagnosis or Instructions"

export default {
  id: "forge-health-4",
  code: "L4",
  category: "Health",
  situation: "Understanding a Diagnosis or Instructions",
  hasCallback: true,
  callback: {
    fromSituation: "At the Pharmacy",
    words: ["prescription", "refill", "side effect"],
  },
  words: [
    { word: "diagnosis", meaning: "the doctor's explanation of what's wrong", example: "The diagnosis explained why she'd been so tired.", question: "Tell me about a time you or someone you know received a diagnosis." },
    { word: "condition", meaning: "a health problem or illness", example: "He's had the same condition for years.", question: "Do you know anyone with a long-term health condition?" },
    { word: "treatment", meaning: "the care given to make you better", example: "The treatment lasted about six weeks.", question: "Tell me about a treatment you or someone you know has had." },
    { word: "recover", meaning: "to get better after being sick", example: "It took her a month to fully recover.", question: "How long did it take you to recover from a cold or injury?" },
    { word: "chronic", meaning: "lasting a long time or coming back often", example: "Chronic back pain can affect daily life.", question: "Do you know someone who deals with a chronic illness?" },
    { word: "prevent", meaning: "to stop something from happening", example: "Washing your hands helps prevent illness.", question: "What do you do to prevent getting sick?" },
  ],
  storytellingPrompt: "Tell me about a time a doctor explained a diagnosis or gave you instructions.",
};

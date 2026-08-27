// FORGE, Health Track, Lesson 5: "Talking About a Follow-up Visit"

export default {
  id: "forge-health-5",
  code: "L5",
  category: "Health",
  situation: "Talking About a Follow-up Visit",
  hasCallback: true,
  callback: {
    fromSituation: "Understanding a Diagnosis or Instructions",
    words: ["condition", "treatment", "recover"],
  },
  words: [
    { word: "improve", meaning: "to get better", example: "Her symptoms have improved since she started the treatment.", question: "Tell me about a health habit that has improved recently." },
    { word: "worsen", meaning: "to get worse", example: "His cough worsened over the weekend.", question: "Has a small health problem ever worsened before you saw a doctor?" },
    { word: "adjust", meaning: "to change slightly to make something better", example: "The doctor adjusted his medication dosage.", question: "Have you ever had to adjust your medicine or treatment?" },
    { word: "monitor", meaning: "to watch closely over time", example: "She monitors her blood pressure every morning.", question: "Do you monitor anything about your health, like sleep or steps?" },
    { word: "checkup", meaning: "a regular visit to check your health", example: "I have a checkup scheduled next month.", question: "When was your last checkup?" },
    { word: "results", meaning: "the information from a test", example: "The results should be ready by Friday.", question: "Tell me about a time you waited for test results." },
  ],
  storytellingPrompt: "Tell me about a follow-up visit or checkup you've had.",
};

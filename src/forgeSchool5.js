// FORGE, School Life Track, Lesson 5: "Studying for a Big Test"

export default {
  id: "forge-school-5",
  code: "L5",
  category: "School Life",
  situation: "Studying for a Big Test",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with a Difficult Teacher",
    words: ["strict", "complain", "approach"],
  },
  words: [
    { word: "cram", meaning: "to study a lot in a short time, usually right before a test", example: "I ended up cramming the night before the exam.", question: "Have you ever crammed for a test? Did it work?" },
    { word: "flashcard", meaning: "a small card used to help you remember information", example: "I made flashcards to study new vocabulary.", question: "Do you use flashcards or another method to study?" },
    { word: "nervous", meaning: "worried or anxious about something that's about to happen", example: "I always get nervous right before a big test.", question: "What makes you feel nervous before a test?" },
    { word: "review session", meaning: "a class or meeting where you go over material together", example: "The review session before the exam really helped me.", question: "Do review sessions usually help you, or do you prefer studying alone?" },
    { word: "ace", meaning: "to do extremely well on something", example: "She aced her math test last week.", question: "Tell me about a test you feel like you aced." },
    { word: "blank", meaning: "of your mind, suddenly unable to remember anything", example: "My mind went blank during the exam.", question: "Has your mind ever gone blank during a test? What did you do?" },
  ],
  storytellingPrompt: "Tell me about how you prepared for a big test and how it went.",
};

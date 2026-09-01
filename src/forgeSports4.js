// FORGE, Sports & Fitness Track, Lesson 4: "Staying Motivated to Train"

export default {
  id: "forge-sports-4",
  code: "L4",
  category: "Sports & Fitness",
  situation: "Staying Motivated to Train",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with Losing",
    words: ["sportsmanship", "bounce back", "learn from"],
  },
  words: [
    { word: "motivate", meaning: "to give someone a reason to want to do something", example: "My coach really knows how to motivate the team.", question: "What motivates you to keep training?" },
    { word: "exhausted", meaning: "extremely tired", example: "I was exhausted after practice today.", question: "What's a practice or workout that left you exhausted?" },
    { word: "push yourself", meaning: "to make yourself try harder than usual", example: "I try to push myself a little more every practice.", question: "Tell me about a time you pushed yourself during training." },
    { word: "consistent", meaning: "doing something the same way, regularly, over time", example: "Being consistent with training matters more than one great practice.", question: "Are you usually consistent with your training or practice routine?" },
    { word: "burned out", meaning: "extremely tired and unmotivated from doing too much", example: "I felt burned out after training every single day.", question: "Have you ever felt burned out from a sport or activity?" },
    { word: "progress", meaning: "improvement or movement toward a goal", example: "I can really see my progress since last season.", question: "What kind of progress have you noticed in yourself lately?" },
  ],
  storytellingPrompt: "Tell me about how you stay motivated to train or practice.",
};

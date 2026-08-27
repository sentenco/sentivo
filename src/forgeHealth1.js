// FORGE, Health Track, Lesson 1: "Describing Symptoms to a Doctor"
// First lesson in the category -- no Callback stage (nothing to call back to yet).

export default {
  id: "forge-health-1",
  code: "L1",
  category: "Health",
  situation: "Describing Symptoms to a Doctor",
  hasCallback: false,
  callback: null,
  words: [
    { word: "ache", meaning: "a dull, continuous pain", example: "My back has been aching all day.", question: "Do you ever get a headache or a backache? When?" },
    { word: "dizzy", meaning: "feeling like everything is spinning", example: "I felt dizzy when I stood up too fast.", question: "Tell me about a time you felt dizzy." },
    { word: "nauseous", meaning: "feeling like you might be sick", example: "The smell made her feel nauseous.", question: "When was the last time you felt nauseous?" },
    { word: "swollen", meaning: "bigger than normal, from injury or illness", example: "His ankle was swollen after the fall.", question: "Have you ever had a swollen ankle, hand, or eye?" },
    { word: "sore", meaning: "painful when touched or used", example: "My legs are sore after running yesterday.", question: "Tell me about a time your body felt sore." },
    { word: "exhausted", meaning: "extremely tired", example: "I was exhausted after the night shift.", question: "When was the last time you felt completely exhausted?" },
  ],
  storytellingPrompt: "Tell me about a visit to the doctor. Use as many of today's words as you can.",
};

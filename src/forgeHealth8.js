// FORGE, Health Track, Lesson 8: "Talking About Mental Health & Wellness"

export default {
  id: "forge-health-8",
  code: "L8",
  category: "Health",
  situation: "Talking About Mental Health & Wellness",
  hasCallback: true,
  callback: {
    fromSituation: "Explaining a Health Emergency",
    words: ["bleeding", "emergency", "ambulance"],
  },
  words: [
    { word: "overwhelmed", meaning: "feeling like there's too much to handle", example: "She felt overwhelmed by all the deadlines at once.", question: "Tell me about a time you felt overwhelmed." },
    { word: "anxious", meaning: "feeling worried or nervous", example: "He felt anxious before the big presentation.", question: "What usually makes you feel anxious?" },
    { word: "cope", meaning: "to deal with a difficult situation", example: "Exercise helps me cope with stress.", question: "How do you usually cope with stress?" },
    { word: "support", meaning: "help from other people", example: "Talking to a friend gave her the support she needed.", question: "Who do you go to for support when things are hard?" },
    { word: "burnout", meaning: "extreme exhaustion from stress, especially work", example: "He took a break to avoid burnout.", question: "Have you ever experienced burnout? What happened?" },
    { word: "balance", meaning: "a healthy mix of different parts of life", example: "Finding a good work-life balance isn't easy.", question: "How do you try to balance work and rest?" },
  ],
  storytellingPrompt: "Tell me about how you take care of your mental health or manage stress.",
};

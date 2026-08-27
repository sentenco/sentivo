// FORGE, Friends & Social Life Track, Lesson 3: "Resolving an Argument with a Friend"

export default {
  id: "forge-friends-3",
  code: "L3",
  category: "Friends & Social Life",
  situation: "Resolving an Argument with a Friend",
  hasCallback: true,
  callback: {
    fromSituation: "Texting and Group Chats",
    words: ["reply", "awkward", "unread"],
  },
  words: [
    { word: "misunderstand", meaning: "to get the wrong idea about what someone meant", example: "I think you misunderstood what I said.", question: "Tell me about a time someone misunderstood you." },
    { word: "apologize", meaning: "to say sorry", example: "I want to apologize for what happened yesterday.", question: "Is it easy or hard for you to apologize first?" },
    { word: "forgive", meaning: "to stop being angry at someone", example: "She forgave me after I explained everything.", question: "Tell me about a time you forgave a friend." },
    { word: "explain", meaning: "to make something clear", example: "Let me explain why I couldn't come.", question: "Do you usually explain yourself calmly when you're upset?" },
    { word: "upset", meaning: "feeling sad or angry about something", example: "He was upset that I forgot his birthday.", question: "What usually makes you feel upset with a friend?" },
    { word: "make up", meaning: "to become friends again after an argument", example: "We made up after talking it through.", question: "Tell me about a time you and a friend made up." },
  ],
  storytellingPrompt: "Tell me about a time you had an argument with a friend and made up.",
};

// FORGE, Online & Gaming Track, Lesson 5: "Asking for a New Game or Subscription"

export default {
  id: "forge-gaming-5",
  code: "L5",
  category: "Online & Gaming",
  situation: "Asking for a New Game or Subscription",
  hasCallback: true,
  callback: {
    fromSituation: "Watching Your Favorite Streamer or YouTuber",
    words: ["content", "clip", "inspired"],
  },
  words: [
    { word: "afford", meaning: "to have enough money to pay for something", example: "I'm saving up so I can afford the new game.", question: "Is there something you're saving up to afford right now?" },
    { word: "justify", meaning: "to give good reasons for something", example: "I tried to justify why I needed the new subscription.", question: "How would you justify asking your parents for something you want?" },
    { word: "wishlist", meaning: "a list of things you'd like to receive as gifts", example: "The new console is at the top of my wishlist.", question: "What's on your birthday or holiday wishlist right now?" },
    { word: "splurge", meaning: "to spend more money than usual on something you want", example: "I decided to splurge on the special edition game.", question: "Have you ever splurged on something you really wanted?" },
    { word: "chip in", meaning: "to give some money toward something, along with others", example: "My friends and I chipped in to buy the game together.", question: "Have you ever chipped in with friends to buy something?" },
    { word: "deal", meaning: "a good price or special offer", example: "There was a great deal on the game this weekend.", question: "Tell me about a good deal you found recently." },
  ],
  storytellingPrompt: "Tell me about a time you asked for or saved up for a game, subscription, or something similar.",
};

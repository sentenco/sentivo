// FORGE, Sports & Fitness Track, Lesson 3: "Dealing with Losing"

export default {
  id: "forge-sports-3",
  code: "L3",
  category: "Sports & Fitness",
  situation: "Dealing with Losing",
  hasCallback: true,
  callback: {
    fromSituation: "Talking About a Big Game",
    words: ["opponent", "score", "rivalry"],
  },
  words: [
    { word: "defeat", meaning: "a loss in a game or competition", example: "It was a hard defeat to accept.", question: "Tell me about a defeat that was hard for you to accept." },
    { word: "frustrated", meaning: "annoyed or upset because something isn't going well", example: "I felt frustrated after missing the final shot.", question: "What makes you feel frustrated during a game?" },
    { word: "sportsmanship", meaning: "fair and respectful behavior in sports, win or lose", example: "Shaking hands after the game shows good sportsmanship.", question: "How do you show good sportsmanship after a loss?" },
    { word: "bounce back", meaning: "to recover quickly after something bad happens", example: "Our team bounced back after a rough start to the season.", question: "Tell me about a time you bounced back after a loss." },
    { word: "dwell on", meaning: "to keep thinking about something, usually something negative", example: "I try not to dwell on my mistakes too long.", question: "Do you tend to dwell on a loss, or move on quickly?" },
    { word: "learn from", meaning: "to understand a lesson from an experience", example: "We learned from our mistakes and played better next time.", question: "What's something you've learned from a loss or mistake?" },
  ],
  storytellingPrompt: "Tell me about a game or competition you lost and how you handled it.",
};

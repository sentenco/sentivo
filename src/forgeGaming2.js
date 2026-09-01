// FORGE, Online & Gaming Track, Lesson 2: "Playing Online with Friends"

export default {
  id: "forge-gaming-2",
  code: "L2",
  category: "Online & Gaming",
  situation: "Playing Online with Friends",
  hasCallback: true,
  callback: {
    fromSituation: "Choosing What to Play or Watch",
    words: ["hyped", "spoiler", "rewatch"],
  },
  words: [
    { word: "squad", meaning: "a group of friends who play together", example: "My squad and I play every Friday night.", question: "Do you have a squad you usually play with?" },
    { word: "lag", meaning: "a delay that makes a game slow or glitchy", example: "The lag made it impossible to win that round.", question: "Does lag ever ruin your games?" },
    { word: "rage quit", meaning: "to suddenly stop playing because you're angry", example: "He rage quit after losing three games in a row.", question: "Have you ever rage quit, or seen someone rage quit?" },
    { word: "carry", meaning: "to help your team win, especially by playing really well", example: "She carried the whole team to victory.", question: "Have you ever carried a team, or been carried?" },
    { word: "voice chat", meaning: "talking to other players through a microphone while gaming", example: "We stay on voice chat the whole game.", question: "Do you usually play with voice chat on or off?" },
    { word: "backup", meaning: "extra help or support when you need it", example: "I called for backup when things got tough.", question: "Tell me about a time a friend gave you backup in a game." },
  ],
  storytellingPrompt: "Tell me about a time you played online with friends.",
};

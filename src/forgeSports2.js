// FORGE, Sports & Fitness Track, Lesson 2: "Talking About a Big Game"

export default {
  id: "forge-sports-2",
  code: "L2",
  category: "Sports & Fitness",
  situation: "Talking About a Big Game",
  hasCallback: true,
  callback: {
    fromSituation: "Trying Out for a Team",
    words: ["compete", "coach", "confident"],
  },
  words: [
    { word: "opponent", meaning: "the person or team you compete against", example: "Our opponent was really strong this year.", question: "Tell me about a tough opponent you've faced." },
    { word: "score", meaning: "the points earned in a game", example: "The score was tied until the last minute.", question: "Tell me about a game with a close score." },
    { word: "tension", meaning: "a feeling of stress or excitement before something important", example: "You could feel the tension before the final whistle.", question: "Have you felt tension during a close game? What was it like?" },
    { word: "clutch", meaning: "performing well at an important, high-pressure moment", example: "She made a clutch shot in the last second.", question: "Tell me about a clutch moment you saw or experienced." },
    { word: "crowd", meaning: "a large group of people watching or gathered together", example: "The crowd cheered when we scored.", question: "How does it feel to play in front of a crowd?" },
    { word: "rivalry", meaning: "a long-lasting competition between two teams or people", example: "Our school has a big rivalry with the team next door.", question: "Does your school or team have a rivalry with another one?" },
  ],
  storytellingPrompt: "Tell me about a big game you played in or watched.",
};

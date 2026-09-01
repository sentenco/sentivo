// FORGE, Family & Home Life Track, Lesson 2: "Asking Your Parents for Permission"

export default {
  id: "forge-family-2",
  code: "L2",
  category: "Family & Home Life",
  situation: "Asking Your Parents for Permission",
  hasCallback: true,
  callback: {
    fromSituation: "Sharing Chores at Home",
    words: ["chore", "fair share", "remind"],
  },
  words: [
    { word: "permission", meaning: "when someone allows you to do something", example: "I need permission to go to the party.", question: "What's something you recently asked permission for?" },
    { word: "curfew", meaning: "the time you must be home by", example: "My curfew on weekends is ten o'clock.", question: "Do you have a curfew? What time is it?" },
    { word: "convince", meaning: "to make someone believe or agree to something", example: "I tried to convince my dad to let me go.", question: "Tell me about a time you convinced your parents to let you do something." },
    { word: "trust", meaning: "a belief that someone is honest and reliable", example: "My parents trust me to be responsible.", question: "How do you show your parents that they can trust you?" },
    { word: "compromise", meaning: "an agreement where both sides give up a little", example: "We reached a compromise about my curfew.", question: "Have you ever had to compromise with your parents about something?" },
    { word: "earn", meaning: "to get something because of what you did", example: "I earned some extra freedom by being responsible.", question: "What's something you've earned by being responsible?" },
  ],
  storytellingPrompt: "Tell me about a time you asked your parents for permission to do something.",
};

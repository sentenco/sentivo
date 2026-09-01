// FORGE, Sports & Fitness Track, Lesson 5: "Recovering from an Injury"

export default {
  id: "forge-sports-5",
  code: "L5",
  category: "Sports & Fitness",
  situation: "Recovering from an Injury",
  hasCallback: true,
  callback: {
    fromSituation: "Staying Motivated to Train",
    words: ["exhausted", "consistent", "progress"],
  },
  words: [
    { word: "injury", meaning: "physical damage or harm to your body", example: "She's recovering from a knee injury.", question: "Have you or someone you know had a sports injury?" },
    { word: "sprain", meaning: "an injury to a joint caused by twisting it", example: "I sprained my ankle during the game.", question: "Have you ever sprained something? What happened?" },
    { word: "rest", meaning: "to stop being active so your body can recover", example: "The doctor told me to rest for two weeks.", question: "How do you feel about resting when you're injured?" },
    { word: "physical therapy", meaning: "exercises that help your body heal and get strong again", example: "I go to physical therapy twice a week.", question: "Do you know anyone who has done physical therapy?" },
    { word: "sidelined", meaning: "unable to play because of injury or another reason", example: "He was sidelined for the rest of the season.", question: "Have you ever been sidelined from something you wanted to do?" },
    { word: "comeback", meaning: "a return to playing or performing after time away", example: "Her comeback game was really emotional for the whole team.", question: "Tell me about a comeback you've seen or been part of." },
  ],
  storytellingPrompt: "Tell me about a time you or someone you know recovered from an injury.",
};

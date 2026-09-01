// FORGE, School Life Track, Lesson 3: "Working on a Group Project"

export default {
  id: "forge-school-3",
  code: "L3",
  category: "School Life",
  situation: "Working on a Group Project",
  hasCallback: true,
  callback: {
    fromSituation: "Asking for Help with Homework",
    words: ["stuck", "tutor", "deadline"],
  },
  words: [
    { word: "teammate", meaning: "someone you work with on the same team or project", example: "My teammate finished her part early.", question: "What's it like working with your teammates on a project?" },
    { word: "divide", meaning: "to split something into separate parts", example: "We divided the project into three parts.", question: "How do you usually divide the work in a group project?" },
    { word: "contribute", meaning: "to give your own part or effort to something shared", example: "Everyone needs to contribute equally to the project.", question: "Do you feel like everyone contributes equally in your group projects?" },
    { word: "slack off", meaning: "to stop working hard or put in less effort", example: "One person in our group kept slacking off.", question: "Has anyone in your group ever slacked off? How did it feel?" },
    { word: "present", meaning: "to show or explain something to a group", example: "We have to present our project on Monday.", question: "How do you feel about presenting in front of the class?" },
    { word: "combine", meaning: "to put different things together to make one", example: "We combined our ideas into one final presentation.", question: "Tell me about a time you combined your ideas with someone else's." },
  ],
  storytellingPrompt: "Tell me about a group project you worked on, from planning to presenting.",
};

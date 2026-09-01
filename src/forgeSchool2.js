// FORGE, School Life Track, Lesson 2: "Asking for Help with Homework"

export default {
  id: "forge-school-2",
  code: "L2",
  category: "School Life",
  situation: "Asking for Help with Homework",
  hasCallback: true,
  callback: {
    fromSituation: "Talking About Your Class Schedule",
    words: ["schedule", "period", "packed"],
  },
  words: [
    { word: "stuck", meaning: "unable to continue or solve something", example: "I'm stuck on question five.", question: "What's a subject where you often get stuck?" },
    { word: "explain", meaning: "to make something clear so someone understands", example: "Can you explain how to solve this problem?", question: "Who do you usually ask to explain something you don't understand?" },
    { word: "tutor", meaning: "someone who teaches or helps one student", example: "My sister tutors me in math.", question: "Have you ever had a tutor, or would you want one?" },
    { word: "due", meaning: "needing to be finished or handed in by a certain time", example: "This essay is due on Friday.", question: "What's something that's due soon for you?" },
    { word: "review", meaning: "to look at something again to understand or remember it", example: "Let's review the notes before the test.", question: "Do you usually review your notes before class or after?" },
    { word: "deadline", meaning: "the final time something must be finished", example: "I almost missed the deadline for my project.", question: "Have you ever almost missed a deadline? What happened?" },
  ],
  storytellingPrompt: "Tell me about a time you got stuck on your homework and how you got help.",
};

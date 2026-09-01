// FORGE, School Life Track, Lesson 6: "Explaining Why You're Late or Absent"

export default {
  id: "forge-school-6",
  code: "L6",
  category: "School Life",
  situation: "Explaining Why You're Late or Absent",
  hasCallback: true,
  callback: {
    fromSituation: "Studying for a Big Test",
    words: ["cram", "nervous", "ace"],
  },
  words: [
    { word: "overslept", meaning: "slept longer than you planned to", example: "I overslept and missed the bus.", question: "Have you ever overslept for school? What happened?" },
    { word: "traffic", meaning: "cars and vehicles on the road, especially when it's slow", example: "We got stuck in traffic on the way to school.", question: "Has traffic ever made you late for something?" },
    { word: "excuse", meaning: "a reason you give for why something happened", example: "I told my teacher a good excuse for being late.", question: "What's an excuse you've used or heard for being absent?" },
    { word: "makeup work", meaning: "schoolwork you complete later because you missed class", example: "I had to do makeup work after being sick.", question: "Have you ever had to do makeup work? Was it hard to catch up?" },
    { word: "notify", meaning: "to tell someone about something officially", example: "My mom notified the school that I was sick.", question: "Who notifies your school when you're absent?" },
    { word: "catch up", meaning: "to do extra work to reach the same level as others", example: "It took me a week to catch up after being absent.", question: "How do you usually catch up after missing school?" },
  ],
  storytellingPrompt: "Tell me about a time you were late or absent from school, and what happened.",
};

// ASCEND (Push mechanic), Sports & Activities Track, Lesson 1: "Talking About Sports & Activities"
// A2 -> B1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-sports-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Sports & Activities",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a sport or activity you do.",
      answer: "It's fun.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than fun, good, or nice.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of fun/good/nice", "A reason or detail added to the sentence"],
    },
    {
      question: "How often do you practice or play?",
      answer: "A few times a week.",
      pushes: [
        "That's clear, but plain. Tell us more, like where or with who.",
        "Now add how that schedule feels to you.",
      ],
      skills: ["A place or companion detail added", "An opinion about the schedule added"],
    },
    {
      question: "Tell me about your last game or practice.",
      answer: "It was okay.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you felt that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Did anything interesting happen?",
      answer: "We won.",
      pushes: [
        "'Won' is fine, but give us more. How did it happen?",
        "Now tell us how that felt.",
      ],
      skills: ["A specific detail about how it happened", "A feeling word added"],
    },
    {
      question: "Who do you usually play or practice with?",
      answer: "My friends.",
      pushes: [
        "Give us more. Tell us something about them as teammates.",
        "Now add a detail about how you all work together.",
      ],
      skills: ["A detail about the teammates added", "A teamwork detail added"],
    },
    {
      question: "What's something you're trying to improve?",
      answer: "My speed, I guess.",
      pushes: [
        "Good start. Now tell us why that matters, or how you're working on it.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason or plan added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your plans for your next game or practice?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do differently, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "A plan or companion detail added"],
    },
    {
      question: "Is there anything about this sport you're looking forward to?",
      answer: "Maybe the next tournament.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a sport or activity you do.", fromPrompt: 0 },
    { question: "How often do you practice or play?", fromPrompt: 1 },
    { question: "Tell me about your last game or practice.", fromPrompt: 2 },
  ],
};

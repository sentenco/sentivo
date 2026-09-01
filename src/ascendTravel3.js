// ASCEND, Talking About Travel Track, Lesson 3: "When Travel Goes Wrong"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-travel-3",
  code: "L3",
  mechanic: "push",
  title: "When Travel Goes Wrong",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a time travel didn't go smoothly for you.",
      answer: "There was a problem.",
      pushes: [
        "Tell us exactly what the problem was.",
        "Now tell us when and where this happened.",
      ],
      skills: ["A specific problem named", "A time and place detail added"],
    },
    {
      question: "When did you realize something was wrong?",
      answer: "Pretty quickly.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us how you felt right then.",
      ],
      skills: ["A more detailed description", "A feeling word added"],
    },
    {
      question: "What was your first reaction?",
      answer: "I panicked a little.",
      pushes: [
        "Give us a more precise feeling word.",
        "Now tell us what your first thought was about what to do.",
      ],
      skills: ["A precise feeling word", "A first-response thought described"],
    },
    {
      question: "What did you do to solve it?",
      answer: "I figured something out.",
      pushes: [
        "Tell us exactly what you did, step by step.",
        "Now tell us if you had help from anyone.",
      ],
      skills: ["A step-by-step description", "A help detail added"],
    },
    {
      question: "How long did it take to sort out?",
      answer: "A while.",
      pushes: [
        "Give us a rough timeframe.",
        "Now tell us what that wait was like.",
      ],
      skills: ["A specific timeframe", "A detail about the waiting experience"],
    },
    {
      question: "Did it affect the rest of your trip?",
      answer: "A bit.",
      pushes: [
        "Tell us specifically how it affected things.",
        "Now tell us how you adjusted.",
      ],
      skills: ["A specific effect described", "An adjustment detail added"],
    },
    {
      question: "Looking back, how do you feel about it now?",
      answer: "It's kind of funny now.",
      pushes: [
        "Tell us why it feels that way now, compared to then.",
        "Now tell us if it makes a good story to tell people.",
      ],
      skills: ["A then-versus-now comparison", "A storytelling detail added"],
    },
    {
      question: "What would you do differently to avoid it next time?",
      answer: "Plan ahead more.",
      pushes: [
        "Give us one exact thing you'd change.",
        "Now use 'Next time I will...'",
      ],
      skills: ["A specific change named", "A clear future-plan structure"],
    },
  ],
  recall: [
    { question: "Tell me about a time travel didn't go smoothly for you.", fromPrompt: 0 },
    { question: "What did you do to solve it?", fromPrompt: 3 },
    { question: "Did it affect the rest of your trip?", fromPrompt: 5 },
  ],
};

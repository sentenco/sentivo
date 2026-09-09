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
      leveledAnswer: "My flight got delayed by six hours, and this happened last year at the airport in Cebu.",
      pushes: [
        "Tell us exactly what the problem was.",
        "Now tell us when and where this happened.",
      ],
      skills: ["A specific problem named", "A time and place detail added"],
    },
    {
      question: "When did you realize something was wrong?",
      answer: "Pretty quickly.",
      leveledAnswer: "I noticed as soon as the departure board changed to 'delayed,' and I felt my heart sink.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us how you felt right then.",
      ],
      skills: ["A more detailed description", "A feeling word added"],
    },
    {
      question: "What was your first reaction?",
      answer: "I panicked a little.",
      leveledAnswer: "I felt really anxious, and my first thought was whether I'd miss my connecting flight.",
      pushes: [
        "Give us a more precise feeling word.",
        "Now tell us what your first thought was about what to do.",
      ],
      skills: ["A precise feeling word", "A first-response thought described"],
    },
    {
      question: "What did you do to solve it?",
      answer: "I figured something out.",
      leveledAnswer: "I went straight to the airline counter and asked to be rebooked, and a staff member there helped me find a later connection.",
      pushes: [
        "Tell us exactly what you did, step by step.",
        "Now tell us if you had help from anyone.",
      ],
      skills: ["A step-by-step description", "A help detail added"],
    },
    {
      question: "How long did it take to sort out?",
      answer: "A while.",
      leveledAnswer: "It took about two hours to get everything rebooked, and the waiting was pretty tense the whole time.",
      pushes: [
        "Give us a rough timeframe.",
        "Now tell us what that wait was like.",
      ],
      skills: ["A specific timeframe", "A detail about the waiting experience"],
    },
    {
      question: "Did it affect the rest of your trip?",
      answer: "A bit.",
      leveledAnswer: "It meant I missed my first night's hotel booking, so I had to rearrange my whole itinerary for the next day.",
      pushes: [
        "Tell us specifically how it affected things.",
        "Now tell us how you adjusted.",
      ],
      skills: ["A specific effect described", "An adjustment detail added"],
    },
    {
      question: "Looking back, how do you feel about it now?",
      answer: "It's kind of funny now.",
      leveledAnswer: "I was so stressed at the time, but now it actually makes a pretty good story to tell at dinner parties.",
      pushes: [
        "Tell us why it feels that way now, compared to then.",
        "Now tell us if it makes a good story to tell people.",
      ],
      skills: ["A then-versus-now comparison", "A storytelling detail added"],
    },
    {
      question: "What would you do differently to avoid it next time?",
      answer: "Plan ahead more.",
      leveledAnswer: "Next time I will build in a longer layover so a delay doesn't ruin my connection.",
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

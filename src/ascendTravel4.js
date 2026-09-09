// ASCEND, Talking About Travel Track, Lesson 4: "A Trip That Changed Your Perspective"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-travel-4",
  code: "L4",
  mechanic: "push",
  title: "A Trip That Changed Your Perspective",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a trip that changed how you see something.",
      answer: "It taught me something.",
      leveledAnswer: "I traveled to Vietnam, and that was about two years ago.",
      pushes: [
        "Tell us exactly where you went.",
        "Now tell us roughly when this was.",
      ],
      skills: ["A specific destination named", "A time detail added"],
    },
    {
      question: "What did you expect before you went?",
      answer: "Something normal.",
      leveledAnswer: "I expected it to feel similar to home, and that idea mostly came from what I'd seen in movies.",
      pushes: [
        "Give us a specific detail of what you expected.",
        "Now tell us where that expectation came from.",
      ],
      skills: ["A specific detail about the expectation", "A source for the expectation"],
    },
    {
      question: "What actually surprised you while you were there?",
      answer: "A few things.",
      leveledAnswer: "I was surprised by how friendly complete strangers were, and it honestly made me feel really welcome.",
      pushes: [
        "Tell us about one specific thing that surprised you.",
        "Now tell us how you reacted to it.",
      ],
      skills: ["A specific detail named", "A reaction described"],
    },
    {
      question: "Did you meet anyone who changed your thinking?",
      answer: "Maybe one person.",
      leveledAnswer: "I met a local guide who showed me around for a day, and the way he talked about simple living really stuck with me.",
      pushes: [
        "Tell us about that person, specifically.",
        "Now tell us what they said or did that stuck with you.",
      ],
      skills: ["A specific person described", "A specific detail about the impact"],
    },
    {
      question: "How did you feel by the end of the trip, compared to the start?",
      answer: "Different, somehow.",
      leveledAnswer: "I felt a lot calmer by the end, because I'd stopped worrying so much about having every hour planned.",
      pushes: [
        "Give us a more precise word for that difference.",
        "Now tell us what specifically changed.",
      ],
      skills: ["A precise feeling word", "A specific detail about the change"],
    },
    {
      question: "What's something you still think about from that trip?",
      answer: "One moment.",
      leveledAnswer: "I still think about watching the sunrise over the rice terraces, because it was the first time I'd felt truly at peace.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us why it stuck with you specifically.",
      ],
      skills: ["A more detailed description", "A specific reason it stuck"],
    },
    {
      question: "Has it changed anything about how you live now?",
      answer: "A little, maybe.",
      leveledAnswer: "I've started slowing down and appreciating small moments more, and my family has definitely noticed the difference.",
      pushes: [
        "Give us a specific example of that change.",
        "Now tell us if people around you have noticed.",
      ],
      skills: ["A concrete example given", "A social-feedback detail added"],
    },
    {
      question: "Would you recommend that kind of trip to someone else?",
      answer: "Yes, probably.",
      leveledAnswer: "I'd recommend it because it really changes your perspective, especially for anyone who feels stuck in a routine.",
      pushes: [
        "Give us a real reason, not just 'yes'.",
        "Now tell us what kind of person would benefit most from it.",
      ],
      skills: ["A genuine reason added", "A specific audience described"],
    },
  ],
  recall: [
    { question: "Tell me about a trip that changed how you see something.", fromPrompt: 0 },
    { question: "Did you meet anyone who changed your thinking?", fromPrompt: 3 },
    { question: "Has it changed anything about how you live now?", fromPrompt: 6 },
  ],
};

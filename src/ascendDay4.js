// ASCEND, Talking About Your Day Track, Lesson 4: "A Day That Went Wrong"
// A2 -> B1, Teens. Push mechanic. Heavier push toward past-narrative connectors.

export default {
  id: "ascend-day-4",
  code: "L4",
  mechanic: "push",
  title: "A Day That Went Wrong",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a day when something went wrong.",
      answer: "It was a bad day.",
      pushes: [
        "Bad day is very general. Tell us the actual problem.",
        "Now tell us when it happened.",
      ],
      skills: ["A specific problem named", "A time detail added"],
    },
    {
      question: "What exactly happened first?",
      answer: "I was late.",
      pushes: [
        "Late for what? Be specific.",
        "Now tell us why you were late.",
      ],
      skills: ["A specific detail (late for what)", "A cause explained"],
    },
    {
      question: "What happened after that?",
      answer: "Then more things went wrong.",
      pushes: [
        "Give us at least one exact thing that went wrong.",
        "Now connect it to the first problem using 'so' or 'as a result'.",
      ],
      skills: ["A specific second event named", "A connector (so/as a result) used"],
    },
    {
      question: "How did you feel while it was happening?",
      answer: "Stressed.",
      pushes: [
        "Give us a more precise feeling word than stressed.",
        "Now tell us how your body or mind reacted.",
      ],
      skills: ["A precise feeling word", "A physical or mental reaction detail"],
    },
    {
      question: "How did you deal with it?",
      answer: "I just kept going.",
      pushes: [
        "Tell us the actual thing you did to fix or handle it.",
        "Now tell us if it worked.",
      ],
      skills: ["A specific action described", "An outcome stated"],
    },
    {
      question: "Did anyone help you?",
      answer: "A friend helped a bit.",
      pushes: [
        "Tell us exactly what they did.",
        "Now tell us how that made you feel.",
      ],
      skills: ["A specific action from the other person", "A feeling word added"],
    },
    {
      question: "Looking back, what would you do differently?",
      answer: "I would plan better.",
      pushes: [
        "Give us one exact thing you'd change.",
        "Now use 'If I had...' to talk about that day.",
      ],
      skills: ["A specific change named", "A past conditional (If I had...) attempted"],
    },
    {
      question: "Has anything like that happened again since?",
      answer: "No, not really.",
      pushes: [
        "Even if not exactly the same, tell us about a similar smaller moment.",
        "Now tell us what you did differently that time.",
      ],
      skills: ["A related example given", "A comparison to the earlier day"],
    },
  ],
  recall: [
    { question: "Tell me about a day when something went wrong.", fromPrompt: 0 },
    { question: "What happened after that?", fromPrompt: 2 },
    { question: "How did you deal with it?", fromPrompt: 4 },
  ],
};

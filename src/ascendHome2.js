// ASCEND, Talking About Home Track, Lesson 2: "Moving or Redecorating"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-home-2",
  code: "L2",
  mechanic: "push",
  title: "Moving or Redecorating",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a time you moved home, or a change you made to your place.",
      answer: "I changed something.",
      leveledAnswer: "I repainted the bedroom, and that happened just last month.",
      pushes: [
        "Tell us exactly what you changed or moved.",
        "Now tell us when this happened.",
      ],
      skills: ["A specific detail named", "A time detail added"],
    },
    {
      question: "What made you decide to do it?",
      answer: "I wanted a change.",
      leveledAnswer: "The old color felt outdated to me, and I'd actually been thinking about it for almost a year.",
      pushes: [
        "Give us a fuller, more specific reason.",
        "Now tell us how long you'd been thinking about it.",
      ],
      skills: ["A fuller specific reason", "A duration detail added"],
    },
    {
      question: "How did you plan for it?",
      answer: "I just started.",
      leveledAnswer: "I had to pick a color and buy the supplies first, and the whole thing took about a weekend.",
      pushes: [
        "Tell us one specific thing you had to plan or organize.",
        "Now tell us how long the whole process took.",
      ],
      skills: ["A specific planning detail", "A duration detail added"],
    },
    {
      question: "Did anything go wrong during the process?",
      answer: "A few things.",
      leveledAnswer: "I accidentally got paint on the carpet, so I had to clean it up right away before it dried.",
      pushes: [
        "Give us one specific thing that went wrong.",
        "Now tell us how you handled it.",
      ],
      skills: ["A specific detail named", "A response described"],
    },
    {
      question: "Did anyone help you with it?",
      answer: "Yes, a bit.",
      leveledAnswer: "My neighbor helped me move the furniture, and I really appreciated having the extra hands.",
      pushes: [
        "Tell us who, and what they did.",
        "Now tell us how you felt about their help.",
      ],
      skills: ["A specific person and action", "A feeling word added"],
    },
    {
      question: "How do you feel about the result now?",
      answer: "Pretty happy.",
      leveledAnswer: "I feel really satisfied with it, and I'm especially glad I chose a lighter color that makes the room feel bigger.",
      pushes: [
        "Give us a more precise word than happy.",
        "Now tell us what specifically you're glad you did.",
      ],
      skills: ["A precise feeling word", "A specific detail about the result"],
    },
    {
      question: "Is there anything you'd do differently?",
      answer: "Maybe one thing.",
      leveledAnswer: "If I did it again, I would tape off the edges more carefully to avoid the mess.",
      pushes: [
        "Tell us exactly what that would be.",
        "Now use 'If I did it again, I would...'",
      ],
      skills: ["A specific detail named", "A conditional structure used"],
    },
    {
      question: "Is there another change you'd like to make to your home in the future?",
      answer: "Maybe something.",
      leveledAnswer: "I'd like to replace the old flooring eventually, but it's stopping me because it's a lot more expensive.",
      pushes: [
        "Tell us what it is, exactly.",
        "Now tell us what's stopping you from doing it yet.",
      ],
      skills: ["A specific plan named", "An honest obstacle named"],
    },
  ],
  recall: [
    { question: "Tell me about a time you moved home, or a change you made to your place.", fromPrompt: 0 },
    { question: "Did anything go wrong during the process?", fromPrompt: 3 },
    { question: "How do you feel about the result now?", fromPrompt: 5 },
  ],
};

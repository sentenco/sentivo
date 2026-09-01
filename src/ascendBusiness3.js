// ASCEND, Technology & the Modern Workplace Track, Lesson 3: "Remote Work and Company Culture"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-business-3",
  code: "L3",
  mechanic: "push",
  title: "Remote Work and Company Culture",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think remote work has weakened company culture?",
      answer: "Kind of, yeah.",
      pushes: [
        "Give a specific example of what's actually been lost.",
        "Now acknowledge something remote work has actually improved instead.",
      ],
      skills: ["A specific concrete loss named", "A genuine counterbalancing improvement"],
    },
    {
      question: "How does your own team try to maintain connection remotely?",
      answer: "We have calls and stuff.",
      pushes: [
        "Give a specific, concrete example of what that involves.",
        "Now tell us honestly whether it actually works.",
      ],
      skills: ["A specific concrete example", "An honest evaluation of effectiveness"],
    },
    {
      question: "Do you think leaders should require people back in the office?",
      answer: "It depends, I think.",
      pushes: [
        "Give a specific condition under which you'd support requiring it.",
        "Now give a specific condition under which you wouldn't.",
      ],
      skills: ["A specific condition in favor", "A specific condition against"],
    },
    {
      question: "What's harder to do remotely that used to be easy in person?",
      answer: "Casual conversations, mentoring, stuff like that.",
      pushes: [
        "Pick one and explain specifically why it's harder to replicate remotely.",
        "Now propose a way to partly solve that.",
      ],
      skills: ["A specific mechanism for the difficulty", "A concrete proposed solution"],
    },
    {
      question: "Do you think trust between managers and employees changes with remote work?",
      answer: "It can, yeah.",
      pushes: [
        "Explain specifically how it changes, and in which direction.",
        "Now acknowledge a case where remote work has actually built trust.",
      ],
      skills: ["A specific directional explanation", "A counterexample acknowledged"],
    },
    {
      question: "How would you describe your own company's culture right now?",
      answer: "Pretty good, overall.",
      pushes: [
        "Give a specific example that illustrates that.",
        "Now name one thing about it that could genuinely be better.",
      ],
      skills: ["A specific illustrative example", "A genuine, specific critique"],
    },
    {
      question: "Should culture even be the same thing in a remote-first company as in an office-based one?",
      answer: "Maybe not exactly.",
      pushes: [
        "Explain specifically how it should differ.",
        "Now name one core value that should stay the same regardless.",
      ],
      skills: ["A specific proposed difference", "A stable, unifying value named"],
    },
    {
      question: "What would you personally change about how your workplace handles remote or hybrid work?",
      answer: "A few small things.",
      pushes: [
        "Name one specific, concrete change.",
        "Now tell us why leadership might resist making it.",
      ],
      skills: ["A specific concrete change proposed", "A realistic organizational obstacle acknowledged"],
    },
  ],
  recall: [
    { question: "Do you think remote work has weakened company culture?", fromPrompt: 0 },
    { question: "Do you think leaders should require people back in the office?", fromPrompt: 2 },
    { question: "What would you personally change about how your workplace handles remote or hybrid work?", fromPrompt: 7 },
  ],
};

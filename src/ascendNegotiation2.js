// ASCEND, Getting to an Agreement Track, Lesson 2: "Negotiating a Salary or Raise"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-negotiation-2",
  code: "L2",
  mechanic: "push",
  title: "Negotiating a Salary or Raise",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Have you ever negotiated your salary or a raise?",
      answer: "Yeah, once or twice.",
      pushes: [
        "Give a specific example of that negotiation.",
        "Now tell us how it actually turned out.",
      ],
      skills: ["A specific concrete example", "A clear outcome stated"],
    },
    {
      question: "How did you prepare for that conversation?",
      answer: "I thought about what I wanted.",
      pushes: [
        "Give a more specific detail of your preparation, research, numbers, examples.",
        "Now tell us what you wish you'd prepared better.",
      ],
      skills: ["A specific preparation detail", "An honest self-critique"],
    },
    {
      question: "What's the hardest part about asking for more money, in your experience?",
      answer: "Just bringing it up.",
      pushes: [
        "Go deeper. What specifically makes that moment hard for you?",
        "Now tell us what's helped you get past that discomfort.",
      ],
      skills: ["A specific underlying reason named", "A concrete strategy that helps"],
    },
    {
      question: "How do you justify your value in that kind of conversation?",
      answer: "I talk about what I've done.",
      pushes: [
        "Give a specific example of an achievement you'd actually cite.",
        "Now tell us how you connect that achievement to the number you're asking for.",
      ],
      skills: ["A specific concrete achievement", "A clear connection to the ask"],
    },
    {
      question: "What do you do if the other side says no, or offers less than you wanted?",
      answer: "I try to stay calm and ask why.",
      pushes: [
        "Give a specific example of a follow-up question you'd actually ask.",
        "Now tell us what you'd be willing to accept instead, and why.",
      ],
      skills: ["A specific concrete follow-up question", "A reasoned fallback position"],
    },
    {
      question: "Is there anything besides salary you'd negotiate for?",
      answer: "Maybe flexibility or time off.",
      pushes: [
        "Name one specifically, not just 'flexibility'.",
        "Now tell us why that might matter more to you than the money itself.",
      ],
      skills: ["A specific concrete benefit named", "A reasoned personal priority explained"],
    },
    {
      question: "Do you think the way people negotiate salary is fair across the board?",
      answer: "Not really, no.",
      pushes: [
        "Give a specific reason it isn't fair.",
        "Now propose one specific change that could make it fairer.",
      ],
      skills: ["A specific reason for unfairness", "A concrete proposed improvement"],
    },
    {
      question: "What advice would you give someone about to negotiate their salary for the first time?",
      answer: "Just be confident.",
      pushes: [
        "Give more specific, actionable advice than 'be confident'.",
        "Now name one mistake you'd warn them not to make.",
      ],
      skills: ["Concrete, actionable advice", "A specific mistake named as a warning"],
    },
  ],
  recall: [
    { question: "Have you ever negotiated your salary or a raise?", fromPrompt: 0 },
    { question: "What do you do if the other side says no, or offers less than you wanted?", fromPrompt: 4 },
    { question: "What advice would you give someone about to negotiate their salary for the first time?", fromPrompt: 7 },
  ],
};

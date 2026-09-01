// ASCEND, Arguing for Change Track, Lesson 3: "Balancing Individual Rights and Public Good"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-law-3",
  code: "L3",
  mechanic: "push",
  title: "Balancing Individual Rights and Public Good",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Can you think of a law that limits individual freedom for the sake of the public good?",
      answer: "Yeah, a few examples.",
      pushes: [
        "Name one specifically.",
        "Now explain precisely what freedom it limits and what good it protects.",
      ],
      skills: ["A specific law named", "A precise trade-off described"],
    },
    {
      question: "Do you think that trade-off is usually justified?",
      answer: "Usually, yeah.",
      pushes: [
        "Give a specific case where it clearly is justified.",
        "Now give a case where you think it goes too far.",
      ],
      skills: ["A specific justified example", "A contrasting overreach example"],
    },
    {
      question: "Who should decide where that line gets drawn?",
      answer: "Lawmakers, I suppose.",
      pushes: [
        "Justify that with a specific reason they're well positioned to decide.",
        "Now acknowledge a limitation in trusting lawmakers with that decision.",
      ],
      skills: ["A specific supporting reason", "A genuine limitation acknowledged"],
    },
    {
      question: "Does this balance shift during a crisis, like a pandemic or emergency?",
      answer: "Yeah, it can.",
      pushes: [
        "Give a specific example of that shift happening.",
        "Now tell us if you think that shift was justified in that case.",
      ],
      skills: ["A specific historical example", "A reasoned evaluation of it"],
    },
    {
      question: "Is there a right you personally would never want limited, no matter the justification?",
      answer: "Probably freedom of speech.",
      pushes: [
        "Explain precisely why that one matters most to you.",
        "Now acknowledge a case where even that right gets some limits.",
      ],
      skills: ["A precise personal justification", "A genuine limiting counter-case acknowledged"],
    },
    {
      question: "Do you think this balance differs a lot between different countries?",
      answer: "Yeah, definitely.",
      pushes: [
        "Give a specific example comparing two countries or systems.",
        "Now explain what cultural or historical factor drives that difference.",
      ],
      skills: ["A specific comparative example", "A causal factor for the difference named"],
    },
    {
      question: "How do you personally weigh your own rights against the good of the wider community?",
      answer: "It depends on the situation.",
      pushes: [
        "Give a specific situation where you'd prioritize your own rights.",
        "Now give one where you'd prioritize the community instead.",
      ],
      skills: ["A specific self-prioritizing example", "A contrasting community-prioritizing example"],
    },
    {
      question: "What would you say defines a healthy balance between the two?",
      answer: "Something fair to both sides.",
      pushes: [
        "Make that concrete, describe what fairness would actually look like here.",
        "Now acknowledge that reasonable people might define fairness differently.",
      ],
      skills: ["A specific, concrete definition", "An acknowledgment of reasonable disagreement"],
    },
  ],
  recall: [
    { question: "Can you think of a law that limits individual freedom for the sake of the public good?", fromPrompt: 0 },
    { question: "Does this balance shift during a crisis, like a pandemic or emergency?", fromPrompt: 3 },
    { question: "What would you say defines a healthy balance between the two?", fromPrompt: 7 },
  ],
};

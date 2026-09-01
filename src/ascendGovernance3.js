// ASCEND, Accountability & Risk Track, Lesson 3: "Regulation vs. Self-Governance"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-governance-3",
  code: "L3",
  mechanic: "push",
  title: "Regulation vs. Self-Governance",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think industries can be trusted to regulate themselves?",
      answer: "Not really, no.",
      pushes: [
        "Give a specific example that supports that view.",
        "Now acknowledge a case where self-regulation has actually worked well.",
      ],
      skills: ["A specific supporting example", "A genuine counterexample acknowledged"],
    },
    {
      question: "What's the strongest argument in favor of letting companies govern themselves?",
      answer: "They understand their own industry best.",
      pushes: [
        "Support that with a specific example.",
        "Now respond to it with a specific counterargument.",
      ],
      skills: ["A specific supporting example", "A direct counterargument given"],
    },
    {
      question: "Does external regulation always slow down progress or innovation?",
      answer: "Sometimes, maybe.",
      pushes: [
        "Give a specific example where regulation genuinely slowed things down.",
        "Now give an example where regulation actually enabled progress instead.",
      ],
      skills: ["A specific example of slowing", "A contrasting enabling example"],
    },
    {
      question: "How do you think a company should be held accountable when it breaks its own internal rules?",
      answer: "There should be consequences.",
      pushes: [
        "Name a specific consequence you'd consider appropriate.",
        "Now tell us who should be responsible for enforcing it.",
      ],
      skills: ["A specific concrete consequence", "A responsible enforcing party identified"],
    },
    {
      question: "Have you seen a real case where self-regulation clearly failed?",
      answer: "Yeah, probably.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what external oversight, if any, could have prevented it.",
      ],
      skills: ["A specific concrete example", "A specific preventive measure proposed"],
    },
    {
      question: "Do you think government regulators usually understand the industries they oversee well enough?",
      answer: "Not always, no.",
      pushes: [
        "Give a specific reason for that gap in understanding.",
        "Now propose one way that gap could be reduced.",
      ],
      skills: ["A specific reason for the gap", "A concrete proposal to reduce it"],
    },
    {
      question: "What would a healthy middle ground between regulation and self-governance look like?",
      answer: "A mix of both.",
      pushes: [
        "Make that concrete, describe specifically what each side would handle.",
        "Now acknowledge a tension that could arise between the two.",
      ],
      skills: ["A specific, concrete division described", "A genuine tension acknowledged"],
    },
    {
      question: "How much do you personally trust the companies you interact with to police themselves?",
      answer: "Not that much, honestly.",
      pushes: [
        "Give a specific example that shapes that view.",
        "Now tell us what would need to change for that trust to improve.",
      ],
      skills: ["A specific concrete example", "A concrete condition for improved trust"],
    },
  ],
  recall: [
    { question: "Do you think industries can be trusted to regulate themselves?", fromPrompt: 0 },
    { question: "Have you seen a real case where self-regulation clearly failed?", fromPrompt: 4 },
    { question: "What would a healthy middle ground between regulation and self-governance look like?", fromPrompt: 6 },
  ],
};

// ASCEND, Technology & Right and Wrong Track, Lesson 4: "Who Should Regulate Technology?"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-tech-ethics-4",
  code: "L4",
  mechanic: "push",
  title: "Who Should Regulate Technology?",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Who do you think should be in charge of setting rules for new technology?",
      answer: "The government, probably.",
      leveledAnswer: "The government is probably better positioned, mainly because it isn't driven by profit the way companies are, though I'd admit government regulation often moves far too slowly to keep up with fast-changing technology.",
      pushes: [
        "Give a specific reason government is better positioned than, say, the companies themselves.",
        "Now acknowledge a limitation of government regulation.",
      ],
      skills: ["A specific supporting reason", "A limitation of the choice acknowledged"],
    },
    {
      question: "Do you trust tech companies to regulate themselves?",
      answer: "Not really, no.",
      leveledAnswer: "Not really, since companies are fundamentally incentivized to prioritize growth over user safety, though there have been a few cases, like certain platforms voluntarily tightening their own data policies, where self-regulation has genuinely worked.",
      pushes: [
        "Give a specific example or reason for that distrust.",
        "Now acknowledge a case where self-regulation has actually worked.",
      ],
      skills: ["A specific reason or example given", "A counterexample acknowledged"],
    },
    {
      question: "Is it possible for regulation to keep up with how fast technology changes?",
      answer: "Probably not.",
      leveledAnswer: "Probably not, mainly because lawmakers usually don't fully understand new technology until it's already widespread and causing real problems, though creating dedicated expert advisory bodies could realistically help close that gap faster.",
      pushes: [
        "Explain specifically why regulation tends to lag behind.",
        "Now propose one way that gap could realistically be narrowed.",
      ],
      skills: ["A specific explanation for the lag", "A realistic proposal to narrow it"],
    },
    {
      question: "Should different countries have different rules for the same technology?",
      answer: "Maybe, I'm not sure.",
      leveledAnswer: "Different countries might need different rules since cultural attitudes toward privacy genuinely vary, but I'd also argue a shared global standard makes more sense for technology that operates across borders regardless of where it was built.",
      pushes: [
        "Give a reason in favor of different rules per country.",
        "Now give a reason in favor of one shared global standard instead.",
      ],
      skills: ["A specific reason for local rules", "A contrasting reason for a global standard"],
    },
    {
      question: "Have you seen a case where a lack of regulation caused a real problem?",
      answer: "Maybe one example.",
      leveledAnswer: "I remember a case where a company's data was massively leaked because of weak security requirements, and stricter mandatory security standards beforehand could have realistically prevented that entire breach.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what regulation, if any, could have prevented it.",
      ],
      skills: ["A specific concrete example", "A specific preventive measure proposed"],
    },
    {
      question: "Does regulation risk slowing down useful innovation?",
      answer: "Maybe sometimes.",
      leveledAnswer: "It can, like when strict data laws slow down how quickly new health apps can be developed and tested, though I'd still say that trade-off is worth it whenever the safety risk to users is genuinely significant.",
      pushes: [
        "Give a specific example where that trade-off has come up.",
        "Now tell us how you'd balance that risk against the need for safety.",
      ],
      skills: ["A specific concrete example", "A reasoned balance between the two"],
    },
    {
      question: "Who should have the final say when experts and the public disagree about new technology?",
      answer: "Experts, probably.",
      leveledAnswer: "Experts probably should have the final say, since they actually understand the technical risks involved, though I'd acknowledge that leaving the public out entirely risks decisions that ignore how technology actually affects people's everyday lives.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a legitimate concern with leaving the public out of it.",
      ],
      skills: ["A specific supporting reason", "A legitimate counterpoint acknowledged"],
    },
    {
      question: "What's one piece of technology you think urgently needs better regulation?",
      answer: "AI, probably.",
      leveledAnswer: "I'd say specifically how AI is used in decisions like hiring or loan approvals urgently needs regulation, and I'd want to see a concrete rule requiring companies to explain exactly how those automated decisions are made.",
      pushes: [
        "Name a specific aspect of it that needs regulating, not just 'AI' broadly.",
        "Now propose one concrete rule you'd want to see put in place.",
      ],
      skills: ["A specific aspect named", "A concrete proposed rule"],
    },
  ],
  recall: [
    { question: "Who do you think should be in charge of setting rules for new technology?", fromPrompt: 0 },
    { question: "Is it possible for regulation to keep up with how fast technology changes?", fromPrompt: 2 },
    { question: "What's one piece of technology you think urgently needs better regulation?", fromPrompt: 7 },
  ],
};

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
      leveledAnswer: "Yeah, mandatory seatbelt laws come to mind, they limit personal freedom of choice, but they protect public health by reducing traffic fatalities and the healthcare costs that follow.",
      pushes: [
        "Name one specifically.",
        "Now explain precisely what freedom it limits and what good it protects.",
      ],
      skills: ["A specific law named", "A precise trade-off described"],
    },
    {
      question: "Do you think that trade-off is usually justified?",
      answer: "Usually, yeah.",
      leveledAnswer: "Usually, yeah, restrictions on drunk driving are clearly justified given the direct risk to others, though I think some surveillance laws passed after 9/11 went further than was actually necessary.",
      pushes: [
        "Give a specific case where it clearly is justified.",
        "Now give a case where you think it goes too far.",
      ],
      skills: ["A specific justified example", "A contrasting overreach example"],
    },
    {
      question: "Who should decide where that line gets drawn?",
      answer: "Lawmakers, I suppose.",
      leveledAnswer: "Lawmakers are well positioned because they're accountable to voters through elections, though the limitation is that they're not always experts in the specific issue they're regulating.",
      pushes: [
        "Justify that with a specific reason they're well positioned to decide.",
        "Now acknowledge a limitation in trusting lawmakers with that decision.",
      ],
      skills: ["A specific supporting reason", "A genuine limitation acknowledged"],
    },
    {
      question: "Does this balance shift during a crisis, like a pandemic or emergency?",
      answer: "Yeah, it can.",
      leveledAnswer: "Yeah, during the pandemic, governments imposed lockdown measures that restricted movement far more than usual, and while I think that was justified given the immediate public health risk, some of those restrictions arguably lasted longer than necessary.",
      pushes: [
        "Give a specific example of that shift happening.",
        "Now tell us if you think that shift was justified in that case.",
      ],
      skills: ["A specific historical example", "A reasoned evaluation of it"],
    },
    {
      question: "Is there a right you personally would never want limited, no matter the justification?",
      answer: "Probably freedom of speech.",
      leveledAnswer: "Probably freedom of speech, because it underpins every other form of civic participation, though I'd acknowledge even that right gets limited when it crosses into direct incitement of violence.",
      pushes: [
        "Explain precisely why that one matters most to you.",
        "Now acknowledge a case where even that right gets some limits.",
      ],
      skills: ["A precise personal justification", "A genuine limiting counter-case acknowledged"],
    },
    {
      question: "Do you think this balance differs a lot between different countries?",
      answer: "Yeah, definitely.",
      leveledAnswer: "Yeah, definitely, Germany restricts certain kinds of political speech far more than the US does, largely because of its specific historical experience with fascism.",
      pushes: [
        "Give a specific example comparing two countries or systems.",
        "Now explain what cultural or historical factor drives that difference.",
      ],
      skills: ["A specific comparative example", "A causal factor for the difference named"],
    },
    {
      question: "How do you personally weigh your own rights against the good of the wider community?",
      answer: "It depends on the situation.",
      leveledAnswer: "If it's something like my right to express an unpopular opinion, I'd prioritize my own rights, but during a public health emergency, I'd generally prioritize the community's wellbeing instead.",
      pushes: [
        "Give a specific situation where you'd prioritize your own rights.",
        "Now give one where you'd prioritize the community instead.",
      ],
      skills: ["A specific self-prioritizing example", "A contrasting community-prioritizing example"],
    },
    {
      question: "What would you say defines a healthy balance between the two?",
      answer: "Something fair to both sides.",
      leveledAnswer: "A healthy balance would mean restrictions are narrowly tailored to a genuine public harm, not just convenience, though I recognize reasonable people can define that fairness differently.",
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

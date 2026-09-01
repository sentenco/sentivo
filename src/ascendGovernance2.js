// ASCEND, Accountability & Risk Track, Lesson 2: "Whistleblowing and Loyalty"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-governance-2",
  code: "L2",
  mechanic: "push",
  title: "Whistleblowing and Loyalty",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "What's your honest opinion on employees who go public about wrongdoing at their company?",
      answer: "I respect it, mostly.",
      pushes: [
        "Give a specific condition under which you'd respect it most.",
        "Now name a condition under which you'd be more hesitant to support it.",
      ],
      skills: ["A specific supporting condition", "A specific limiting condition"],
    },
    {
      question: "Do you think loyalty to a company should ever outweigh reporting wrongdoing?",
      answer: "No, not really.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a case where loyalty might be a reasonable competing value.",
      ],
      skills: ["A specific supporting reason", "A genuine counter-case acknowledged"],
    },
    {
      question: "What risks does someone take on by speaking up about problems at work?",
      answer: "They could lose their job.",
      pushes: [
        "Name a more specific risk beyond losing the job.",
        "Now tell us how significant you think that risk actually is, in practice.",
      ],
      skills: ["A specific additional risk named", "A reasoned evaluation of the risk"],
    },
    {
      question: "Should companies do more to protect people who report problems internally?",
      answer: "Yeah, definitely.",
      pushes: [
        "Name one specific protection or policy they should have.",
        "Now acknowledge a reason companies might resist putting it in place.",
      ],
      skills: ["A specific proposed protection", "A realistic organizational counterpoint"],
    },
    {
      question: "Have you ever been in a situation where you considered speaking up about something?",
      answer: "Maybe once.",
      pushes: [
        "Tell us, without naming anyone, roughly what the situation was.",
        "Now tell us what ultimately made you decide what to do.",
      ],
      skills: ["A specific concrete situation described", "A reasoned explanation of the decision"],
    },
    {
      question: "Do you think going to the media is ever justified, instead of reporting internally first?",
      answer: "Sometimes, maybe.",
      pushes: [
        "Give a specific condition under which that would be justified.",
        "Now give a condition under which internal reporting should be tried first.",
      ],
      skills: ["A specific justifying condition", "A contrasting condition favoring internal reporting"],
    },
    {
      question: "How should the public treat someone who's accused of being disloyal for speaking out?",
      answer: "Give them the benefit of the doubt.",
      pushes: [
        "Make that concrete, what would that actually look like?",
        "Now acknowledge a case where skepticism toward them might be fair.",
      ],
      skills: ["A specific, concrete description", "A fair counter-case acknowledged"],
    },
    {
      question: "What would need to be true for you to personally report wrongdoing at your own workplace?",
      answer: "It would have to be serious.",
      pushes: [
        "Define 'serious' more precisely for yourself.",
        "Now tell us what would actually stop you, even if it met that bar.",
      ],
      skills: ["A precise personal threshold defined", "An honest obstacle acknowledged"],
    },
  ],
  recall: [
    { question: "What's your honest opinion on employees who go public about wrongdoing at their company?", fromPrompt: 0 },
    { question: "Have you ever been in a situation where you considered speaking up about something?", fromPrompt: 4 },
    { question: "What would need to be true for you to personally report wrongdoing at your own workplace?", fromPrompt: 7 },
  ],
};

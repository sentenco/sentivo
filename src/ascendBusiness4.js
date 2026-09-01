// ASCEND, Technology & the Modern Workplace Track, Lesson 4: "Ethical Use of AI at Work"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-business-4",
  code: "L4",
  mechanic: "push",
  title: "Ethical Use of AI at Work",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Does your workplace have clear guidelines on how AI tools should be used?",
      answer: "Sort of, not really formal.",
      pushes: [
        "Give a specific example of a gap or gray area in the current guidance.",
        "Now propose one specific rule that's missing.",
      ],
      skills: ["A specific gap identified", "A concrete missing rule proposed"],
    },
    {
      question: "What's a scenario where using AI at work could raise an ethical concern?",
      answer: "Using it to make decisions about people, maybe.",
      pushes: [
        "Make that concrete, give a specific example of that kind of decision.",
        "Now explain precisely what makes it ethically risky.",
      ],
      skills: ["A specific concrete example", "A precise explanation of the risk"],
    },
    {
      question: "Do you think AI tools can introduce bias into workplace decisions?",
      answer: "Yeah, probably.",
      pushes: [
        "Explain specifically how that bias could enter the system.",
        "Now propose one way it could be checked or reduced.",
      ],
      skills: ["A specific mechanism for bias explained", "A concrete mitigation proposed"],
    },
    {
      question: "Who should be accountable when an AI tool makes a costly or harmful mistake at work?",
      answer: "Probably the company.",
      pushes: [
        "Be more precise, which part of the company, specifically?",
        "Now acknowledge a case where more responsibility should fall on the individual user.",
      ],
      skills: ["A more precise allocation of responsibility", "A counter-case acknowledged"],
    },
    {
      question: "Should employees be required to disclose when they've used AI to complete work?",
      answer: "Probably, yeah.",
      pushes: [
        "Give a specific reason disclosure matters here.",
        "Now acknowledge a case where it might not really matter.",
      ],
      skills: ["A specific supporting reason", "A limiting counter-case acknowledged"],
    },
    {
      question: "Have you seen AI used at work in a way that felt like it crossed a line?",
      answer: "Maybe once.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what should have been done differently.",
      ],
      skills: ["A specific concrete example", "A specific alternative proposed"],
    },
    {
      question: "How much oversight should there be on how employees use these tools?",
      answer: "Some, but not too much.",
      pushes: [
        "Define that more precisely, what specific level of oversight would you propose?",
        "Now weigh that against the risk of slowing people down too much.",
      ],
      skills: ["A specific, concrete level proposed", "A weighed trade-off acknowledged"],
    },
    {
      question: "What would responsible AI use look like in your ideal workplace?",
      answer: "Clear rules and some training.",
      pushes: [
        "Name one specific rule and what that training would actually cover.",
        "Now tell us who should be responsible for setting it up.",
      ],
      skills: ["A specific rule and training content", "A responsible party identified"],
    },
  ],
  recall: [
    { question: "Does your workplace have clear guidelines on how AI tools should be used?", fromPrompt: 0 },
    { question: "Who should be accountable when an AI tool makes a costly or harmful mistake at work?", fromPrompt: 3 },
    { question: "What would responsible AI use look like in your ideal workplace?", fromPrompt: 7 },
  ],
};

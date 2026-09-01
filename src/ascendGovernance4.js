// ASCEND, Accountability & Risk Track, Lesson 4: "Leading Through a Crisis"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-governance-4",
  code: "L4",
  mechanic: "push",
  title: "Leading Through a Crisis",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Can you think of a company that handled a public crisis particularly well or badly?",
      answer: "Yeah, one comes to mind.",
      pushes: [
        "Name it, and describe specifically what the crisis was.",
        "Now tell us exactly what they did that stood out to you, good or bad.",
      ],
      skills: ["A specific concrete example", "A specific action described"],
    },
    {
      question: "What do you think matters most in the first hours of a crisis response?",
      answer: "Being honest and quick.",
      pushes: [
        "Make that concrete, what would 'quick and honest' actually look like in practice?",
        "Now name something that could go wrong even with good intentions.",
      ],
      skills: ["A specific, concrete description", "A realistic pitfall acknowledged"],
    },
    {
      question: "Should a leader always take public responsibility, even if the fault lies elsewhere in the company?",
      answer: "Probably, yeah.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a case where that might feel unfair to the leader.",
      ],
      skills: ["A specific supporting reason", "A genuine counter-case acknowledged"],
    },
    {
      question: "How should a company balance transparency with legal or reputational risk during a crisis?",
      answer: "It's a difficult balance.",
      pushes: [
        "Give a specific example of that tension playing out.",
        "Now tell us which side you think should generally win out, and why.",
      ],
      skills: ["A specific concrete example", "A reasoned position with justification"],
    },
    {
      question: "Have you ever had to manage a smaller version of this kind of situation yourself?",
      answer: "Maybe once, at work.",
      pushes: [
        "Tell us, briefly, what happened.",
        "Now tell us what you learned from how you handled it.",
      ],
      skills: ["A specific concrete example", "A reflective lesson identified"],
    },
    {
      question: "What role does public trust play in how quickly a company can recover from a crisis?",
      answer: "A big role, I think.",
      pushes: [
        "Explain the mechanism, specifically how trust affects recovery speed.",
        "Now give an example of a company that recovered because of, or despite, public trust.",
      ],
      skills: ["A specific causal mechanism explained", "A concrete illustrative example"],
    },
    {
      question: "Do you think apologies from companies are usually genuine?",
      answer: "Not always, no.",
      pushes: [
        "Give a specific detail that would tell you an apology is genuine versus performative.",
        "Now name an example, real or hypothetical, of each kind.",
      ],
      skills: ["A specific distinguishing detail", "Two contrasting concrete examples"],
    },
    {
      question: "If you were leading a company through a crisis tomorrow, what would you prioritize first?",
      answer: "Figuring out what actually happened.",
      pushes: [
        "Make that concrete, what specific first actions would that involve?",
        "Now tell us what you'd want to communicate publicly, and when.",
      ],
      skills: ["A specific, concrete first action", "A specific communication plan described"],
    },
  ],
  recall: [
    { question: "Can you think of a company that handled a public crisis particularly well or badly?", fromPrompt: 0 },
    { question: "Should a leader always take public responsibility, even if the fault lies elsewhere in the company?", fromPrompt: 2 },
    { question: "If you were leading a company through a crisis tomorrow, what would you prioritize first?", fromPrompt: 7 },
  ],
};

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
      leveledAnswer: "Yeah, Johnson & Johnson's handling of the Tylenol tampering crisis in the eighties comes to mind, what stood out to me was how quickly they pulled the product nationwide, even before regulators required it.",
      pushes: [
        "Name it, and describe specifically what the crisis was.",
        "Now tell us exactly what they did that stood out to you, good or bad.",
      ],
      skills: ["A specific concrete example", "A specific action described"],
    },
    {
      question: "What do you think matters most in the first hours of a crisis response?",
      answer: "Being honest and quick.",
      leveledAnswer: "In practice, that means issuing a factual statement within hours rather than waiting for every detail to be confirmed, though even with good intentions, releasing incomplete information too early can end up looking worse if it later needs correcting.",
      pushes: [
        "Make that concrete, what would 'quick and honest' actually look like in practice?",
        "Now name something that could go wrong even with good intentions.",
      ],
      skills: ["A specific, concrete description", "A realistic pitfall acknowledged"],
    },
    {
      question: "Should a leader always take public responsibility, even if the fault lies elsewhere in the company?",
      answer: "Probably, yeah.",
      leveledAnswer: "Probably, yeah, taking public responsibility signals accountability regardless of where the fault technically lies, though that can feel genuinely unfair to a leader who inherited the problem from a predecessor's decisions.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a case where that might feel unfair to the leader.",
      ],
      skills: ["A specific supporting reason", "A genuine counter-case acknowledged"],
    },
    {
      question: "How should a company balance transparency with legal or reputational risk during a crisis?",
      answer: "It's a difficult balance.",
      leveledAnswer: "A company disclosing a data breach immediately risks giving attackers useful information, yet delaying disclosure risks legal liability, and I'd generally say transparency should win out, since trust, once lost, is far harder to rebuild than a short-term legal setback.",
      pushes: [
        "Give a specific example of that tension playing out.",
        "Now tell us which side you think should generally win out, and why.",
      ],
      skills: ["A specific concrete example", "A reasoned position with justification"],
    },
    {
      question: "Have you ever had to manage a smaller version of this kind of situation yourself?",
      answer: "Maybe once, at work.",
      leveledAnswer: "Maybe once, at work, I had to tell a client we'd missed a deadline due to an internal error, and what I learned is that owning the mistake immediately actually preserved more trust than trying to soften it.",
      pushes: [
        "Tell us, briefly, what happened.",
        "Now tell us what you learned from how you handled it.",
      ],
      skills: ["A specific concrete example", "A reflective lesson identified"],
    },
    {
      question: "What role does public trust play in how quickly a company can recover from a crisis?",
      answer: "A big role, I think.",
      leveledAnswer: "Public trust essentially acts as a buffer, giving a company the benefit of the doubt while it corrects course, and Toyota's relatively fast recovery after its recall crisis is a good example of that buffer working in their favor.",
      pushes: [
        "Explain the mechanism, specifically how trust affects recovery speed.",
        "Now give an example of a company that recovered because of, or despite, public trust.",
      ],
      skills: ["A specific causal mechanism explained", "A concrete illustrative example"],
    },
    {
      question: "Do you think apologies from companies are usually genuine?",
      answer: "Not always, no.",
      leveledAnswer: "Not always, no, a genuine apology usually comes with a concrete, specific corrective action attached, whereas a performative one tends to stay vague, more focused on managing perception than actually fixing the harm.",
      pushes: [
        "Give a specific detail that would tell you an apology is genuine versus performative.",
        "Now name an example, real or hypothetical, of each kind.",
      ],
      skills: ["A specific distinguishing detail", "Two contrasting concrete examples"],
    },
    {
      question: "If you were leading a company through a crisis tomorrow, what would you prioritize first?",
      answer: "Figuring out what actually happened.",
      leveledAnswer: "That would involve immediately assembling a small internal team to establish the verified facts, and I'd want to communicate a brief, honest holding statement to the public within the first few hours, even before every detail is confirmed.",
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

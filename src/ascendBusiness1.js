// ASCEND (Push mechanic), Business & AI Track, Lesson 1: "Technology & the Modern Workplace"
// B2 -> C1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-business-1",
  code: "L1",
  mechanic: "push",
  title: "Technology & the Modern Workplace",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about how technology has changed your industry.",
      answer: "It's changed a lot, mostly with new software.",
      pushes: [
        "'New software' is pretty generic. Name what kind of technology specifically, and how it's used.",
        "Now add the effect this had, not just what changed.",
      ],
      skills: ["A specific technology or tool named instead of a vague generic term", "A cause-effect structure added (this led to / as a result)"],
    },
    {
      question: "What's your opinion on AI in the workplace?",
      answer: "I think it's useful, but a bit scary too.",
      pushes: [
        "'Scary' is too casual for this context. Give us a more precise, professional word for that concern.",
        "Now frame that as a balanced argument, not just two feelings side by side.",
      ],
      skills: ["A precise, register-appropriate word instead of scary", "A balanced/contrastive structure (while..., on the other hand...)"],
    },
    {
      question: "How do you think AI will affect jobs in the next few years?",
      answer: "Some jobs will probably disappear.",
      pushes: [
        "'Disappear' is vague. Which kinds of roles, specifically, and why?",
        "Now hedge that prediction more precisely, this isn't a certainty.",
      ],
      skills: ["A specific job category and reasoning added", "A sophisticated hedge (it's likely that / this could result in) instead of just probably"],
    },
    {
      question: "Describe a time your company adopted a new system or tool.",
      answer: "We got a new tool and it was hard at first.",
      pushes: [
        "'Hard' doesn't say much. What exactly made the transition difficult?",
        "Now describe how the situation was resolved, using more formal connecting language.",
      ],
      skills: ["A specific challenge named instead of hard", "A formal resolution structure (eventually / over time, the team...)"],
    },
    {
      question: "What skills do you think will matter most in the future workplace?",
      answer: "Being good with technology, I think.",
      pushes: [
        "'Good with technology' is vague for a professional context. Name the actual skill.",
        "Now explain why that skill will matter, connecting it to a real trend.",
      ],
      skills: ["A precise named skill instead of good with technology", "A reasoned justification tied to a broader trend"],
    },
    {
      question: "Do you think businesses are moving too fast or too slow with new technology?",
      answer: "Maybe too fast, I guess.",
      pushes: [
        "Good instinct. Now commit to that opinion with a stronger stance, not just 'maybe' and 'I guess'.",
        "Now support it with a specific reason or example.",
      ],
      skills: ["A confident, register-appropriate stance (arguably / in my view) replacing maybe/I guess", "A supporting example or reason added"],
    },
    {
      question: "What do you think a company should consider before adopting AI tools?",
      answer: "They should think about if it's a good idea.",
      pushes: [
        "That's circular, it doesn't say anything new. Name an actual consideration, like cost, ethics, or training.",
        "Now put two considerations together in one sentence, using a connector like 'not only... but also'.",
      ],
      skills: ["A specific named consideration instead of a circular statement", "A sophisticated connector combining two ideas (not only...but also / in addition to)"],
    },
    {
      question: "Where do you see your industry in ten years?",
      answer: "It'll probably be really different.",
      pushes: [
        "'Really different' says nothing concrete. Predict something specific.",
        "Now put it all together in one fluent, C1-level sentence with a clear structure.",
      ],
      skills: ["A specific, concrete prediction instead of really different", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about how technology has changed your industry.", fromPrompt: 0 },
    { question: "What's your opinion on AI in the workplace?", fromPrompt: 1 },
    { question: "How do you think AI will affect jobs in the next few years?", fromPrompt: 2 },
  ],
};

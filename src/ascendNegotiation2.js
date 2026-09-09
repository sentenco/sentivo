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
      leveledAnswer: "Yeah, once or twice, I negotiated a ten percent raise after taking on additional project management responsibilities, and it ultimately worked out in my favor.",
      pushes: [
        "Give a specific example of that negotiation.",
        "Now tell us how it actually turned out.",
      ],
      skills: ["A specific concrete example", "A clear outcome stated"],
    },
    {
      question: "How did you prepare for that conversation?",
      answer: "I thought about what I wanted.",
      leveledAnswer: "I researched comparable salaries for my role in the industry and wrote down specific achievements to cite, though I wish I'd prepared a clearer counteroffer in case they pushed back.",
      pushes: [
        "Give a more specific detail of your preparation, research, numbers, examples.",
        "Now tell us what you wish you'd prepared better.",
      ],
      skills: ["A specific preparation detail", "An honest self-critique"],
    },
    {
      question: "What's the hardest part about asking for more money, in your experience?",
      answer: "Just bringing it up.",
      leveledAnswer: "What makes that moment hard is the fear it might come across as ungrateful, but framing it around my measurable contributions has really helped me get past that discomfort.",
      pushes: [
        "Go deeper. What specifically makes that moment hard for you?",
        "Now tell us what's helped you get past that discomfort.",
      ],
      skills: ["A specific underlying reason named", "A concrete strategy that helps"],
    },
    {
      question: "How do you justify your value in that kind of conversation?",
      answer: "I talk about what I've done.",
      leveledAnswer: "I'd cite leading the project that came in under budget, and I connect that directly to my ask by pointing out the concrete revenue it generated for the company.",
      pushes: [
        "Give a specific example of an achievement you'd actually cite.",
        "Now tell us how you connect that achievement to the number you're asking for.",
      ],
      skills: ["A specific concrete achievement", "A clear connection to the ask"],
    },
    {
      question: "What do you do if the other side says no, or offers less than you wanted?",
      answer: "I try to stay calm and ask why.",
      leveledAnswer: "I'd ask specifically what would need to change for them to reconsider in six months, and in the meantime, I'd be willing to accept extra professional development opportunities instead of the raise itself.",
      pushes: [
        "Give a specific example of a follow-up question you'd actually ask.",
        "Now tell us what you'd be willing to accept instead, and why.",
      ],
      skills: ["A specific concrete follow-up question", "A reasoned fallback position"],
    },
    {
      question: "Is there anything besides salary you'd negotiate for?",
      answer: "Maybe flexibility or time off.",
      leveledAnswer: "I'd specifically push for an extra day of remote work each week, since that might actually matter more to me than a modest raise given how much commuting time it would save.",
      pushes: [
        "Name one specifically, not just 'flexibility'.",
        "Now tell us why that might matter more to you than the money itself.",
      ],
      skills: ["A specific concrete benefit named", "A reasoned personal priority explained"],
    },
    {
      question: "Do you think the way people negotiate salary is fair across the board?",
      answer: "Not really, no.",
      leveledAnswer: "Not really, no, salary transparency is still rare, which puts people who don't negotiate confidently at a real disadvantage, and requiring companies to publish salary bands could help make that fairer.",
      pushes: [
        "Give a specific reason it isn't fair.",
        "Now propose one specific change that could make it fairer.",
      ],
      skills: ["A specific reason for unfairness", "A concrete proposed improvement"],
    },
    {
      question: "What advice would you give someone about to negotiate their salary for the first time?",
      answer: "Just be confident.",
      leveledAnswer: "I'd tell them to come in with specific numbers backed by market research rather than relying on confidence alone, and to avoid the mistake of accepting the first offer just to end the conversation quickly.",
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

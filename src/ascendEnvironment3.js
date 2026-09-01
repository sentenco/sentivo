// ASCEND, Our Changing Planet Track, Lesson 3: "Greenwashing & Corporate Claims"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-environment-3",
  code: "L3",
  mechanic: "push",
  title: "Greenwashing & Corporate Claims",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Have you ever noticed a company making environmental claims that seemed exaggerated?",
      answer: "Yeah, a few times.",
      pushes: [
        "Give a specific example, a brand, a product, or a type of claim.",
        "Now tell us exactly what made it seem exaggerated to you.",
      ],
      skills: ["A specific concrete example", "A precise reason for suspicion"],
    },
    {
      question: "Why do you think companies use this kind of marketing?",
      answer: "To look good.",
      pushes: [
        "Push past the obvious. What's the actual business incentive behind it?",
        "Now use 'without actually...' to name what they're avoiding doing.",
      ],
      skills: ["A concrete business incentive named", "A precise 'without actually...' contrast"],
    },
    {
      question: "How can consumers tell the difference between real sustainability and marketing?",
      answer: "It's hard to tell.",
      pushes: [
        "Give one specific, practical way to tell the difference.",
        "Now acknowledge a limitation of that method.",
      ],
      skills: ["A specific, practical method named", "A limitation of the method acknowledged"],
    },
    {
      question: "Do you think this kind of marketing should be regulated more strictly?",
      answer: "Yeah, probably.",
      pushes: [
        "Name one specific rule or requirement you'd want to see.",
        "Now acknowledge a difficulty in enforcing it.",
      ],
      skills: ["A specific proposed rule", "A realistic enforcement difficulty"],
    },
    {
      question: "Have exaggerated claims ever affected your own purchasing decisions?",
      answer: "Maybe a little.",
      pushes: [
        "Give a specific example of a purchase influenced this way.",
        "Now tell us how you felt once you realized, if you did.",
      ],
      skills: ["A specific concrete example", "An honest reflection on realizing it"],
    },
    {
      question: "Do you trust sustainability labels or certifications on products?",
      answer: "Not fully.",
      pushes: [
        "Give a specific reason for that distrust.",
        "Now name one label or certification you do trust, and why it's different.",
      ],
      skills: ["A specific reason for distrust", "A contrasting trusted example"],
    },
    {
      question: "Who's responsible for stopping misleading environmental claims, regulators or the public?",
      answer: "Probably both.",
      pushes: [
        "Divide the responsibility precisely between them.",
        "Now weigh which one you think matters more, and why.",
      ],
      skills: ["A precise division of responsibility", "A weighted opinion with reasoning"],
    },
    {
      question: "Do you think this issue will get better as people become more aware?",
      answer: "Hopefully.",
      pushes: [
        "Give a specific reason for that hope, based on a real trend.",
        "Now name one thing that could prevent that improvement from happening.",
      ],
      skills: ["A specific trend as evidence", "A realistic counter-risk named"],
    },
  ],
  recall: [
    { question: "Have you ever noticed a company making environmental claims that seemed exaggerated?", fromPrompt: 0 },
    { question: "Do you think this kind of marketing should be regulated more strictly?", fromPrompt: 3 },
    { question: "Who's responsible for stopping misleading environmental claims, regulators or the public?", fromPrompt: 6 },
  ],
};

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
      leveledAnswer: "Yeah, I remember a clothing brand marketing a collection as 'eco-friendly' with barely any real explanation, which made me suspicious since there was no actual evidence behind the claim.",
      pushes: [
        "Give a specific example, a brand, a product, or a type of claim.",
        "Now tell us exactly what made it seem exaggerated to you.",
      ],
      skills: ["A specific concrete example", "A precise reason for suspicion"],
    },
    {
      question: "Why do you think companies use this kind of marketing?",
      answer: "To look good.",
      leveledAnswer: "The real incentive is that appearing environmentally responsible attracts more customers and boosts sales without actually requiring the company to change how it produces things.",
      pushes: [
        "Push past the obvious. What's the actual business incentive behind it?",
        "Now use 'without actually...' to name what they're avoiding doing.",
      ],
      skills: ["A concrete business incentive named", "A precise 'without actually...' contrast"],
    },
    {
      question: "How can consumers tell the difference between real sustainability and marketing?",
      answer: "It's hard to tell.",
      leveledAnswer: "One practical way is checking whether a company publishes actual third-party certified data, though even that has its limits since certification standards themselves can vary a lot in how strict they really are.",
      pushes: [
        "Give one specific, practical way to tell the difference.",
        "Now acknowledge a limitation of that method.",
      ],
      skills: ["A specific, practical method named", "A limitation of the method acknowledged"],
    },
    {
      question: "Do you think this kind of marketing should be regulated more strictly?",
      answer: "Yeah, probably.",
      leveledAnswer: "I'd want to see a requirement that companies back up any environmental claim with independently verified data, although enforcing that consistently across every industry would honestly be really difficult.",
      pushes: [
        "Name one specific rule or requirement you'd want to see.",
        "Now acknowledge a difficulty in enforcing it.",
      ],
      skills: ["A specific proposed rule", "A realistic enforcement difficulty"],
    },
    {
      question: "Have exaggerated claims ever affected your own purchasing decisions?",
      answer: "Maybe a little.",
      leveledAnswer: "I once bought a 'sustainable' skincare product because of its packaging, and I felt genuinely frustrated once I found out the claim wasn't backed by anything real.",
      pushes: [
        "Give a specific example of a purchase influenced this way.",
        "Now tell us how you felt once you realized, if you did.",
      ],
      skills: ["A specific concrete example", "An honest reflection on realizing it"],
    },
    {
      question: "Do you trust sustainability labels or certifications on products?",
      answer: "Not fully.",
      leveledAnswer: "Not fully, mainly because so many labels are self-awarded without independent verification, though I do trust certifications like Fair Trade since they're backed by an actual external auditing process.",
      pushes: [
        "Give a specific reason for that distrust.",
        "Now name one label or certification you do trust, and why it's different.",
      ],
      skills: ["A specific reason for distrust", "A contrasting trusted example"],
    },
    {
      question: "Who's responsible for stopping misleading environmental claims, regulators or the public?",
      answer: "Probably both.",
      leveledAnswer: "Regulators should be responsible for setting and enforcing clear legal standards, while the public plays a role by staying skeptical and calling out obvious exaggerations, though I'd say regulators matter more since individual awareness alone can't hold companies accountable.",
      pushes: [
        "Divide the responsibility precisely between them.",
        "Now weigh which one you think matters more, and why.",
      ],
      skills: ["A precise division of responsibility", "A weighted opinion with reasoning"],
    },
    {
      question: "Do you think this issue will get better as people become more aware?",
      answer: "Hopefully.",
      leveledAnswer: "Hopefully, especially since younger consumers are getting noticeably better at spotting greenwashing online, although companies finding new, subtler ways to disguise the same tactics could easily prevent real progress.",
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

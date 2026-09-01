// ASCEND, Our Changing Planet Track, Lesson 2: "Individual vs. Systemic Responsibility"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-environment-2",
  code: "L2",
  mechanic: "push",
  title: "Individual vs. Systemic Responsibility",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Who's more responsible for climate change, individuals or big companies?",
      answer: "Companies, mostly.",
      pushes: [
        "Support that with a specific fact or reasoning, not just an assertion.",
        "Now acknowledge the counterargument that individual choices still matter.",
      ],
      skills: ["A specific supporting fact or reason", "A counterargument acknowledged"],
    },
    {
      question: "Do you think focusing on individual actions distracts from bigger systemic issues?",
      answer: "Kind of, yeah.",
      pushes: [
        "Explain the mechanism, how does focusing on individuals actually distract from the bigger issue?",
        "Now hedge it, since individual action isn't completely pointless either.",
      ],
      skills: ["A clear causal mechanism explained", "A hedged, balanced claim"],
    },
    {
      question: "Do you personally try to reduce your environmental impact?",
      answer: "I try a little.",
      pushes: [
        "Give a specific example of what you actually do.",
        "Now be honest about a limitation, something you know you should do but don't.",
      ],
      skills: ["A specific concrete example", "An honest self-critical admission"],
    },
    {
      question: "Does it ever feel pointless to make small individual changes?",
      answer: "Sometimes, yeah.",
      pushes: [
        "Describe a specific moment that feeling hit you.",
        "Now tell us what, if anything, changes your mind about it.",
      ],
      skills: ["A specific moment described", "A counter-thought that shifts the feeling"],
    },
    {
      question: "What should governments be doing that they aren't?",
      answer: "More regulation.",
      pushes: [
        "Name one specific policy or type of regulation.",
        "Now acknowledge a realistic obstacle to that policy happening.",
      ],
      skills: ["A specific policy named", "A realistic political or economic obstacle"],
    },
    {
      question: "Do you think companies would change without pressure from consumers or regulation?",
      answer: "Probably not.",
      pushes: [
        "Give a specific reason companies are incentivized not to change.",
        "Now name one exception, a case where a company did change on its own.",
      ],
      skills: ["A specific incentive-based reason", "A counter-example acknowledged"],
    },
    {
      question: "How do you personally balance guilt about this with feeling like it's not all on you?",
      answer: "I just try not to think about it too much.",
      pushes: [
        "Give a more honest, specific answer about how you actually reconcile that tension.",
        "Now tell us if that balance feels sustainable to you.",
      ],
      skills: ["A more specific, honest reflection", "An evaluation of sustainability"],
    },
    {
      question: "What would meaningful progress on this issue actually look like to you?",
      answer: "Big changes happening faster.",
      pushes: [
        "Make that concrete, name one specific marker of progress.",
        "Now tell us what timeframe you'd consider realistic.",
      ],
      skills: ["A specific, concrete marker named", "A realistic timeframe given"],
    },
  ],
  recall: [
    { question: "Who's more responsible for climate change, individuals or big companies?", fromPrompt: 0 },
    { question: "What should governments be doing that they aren't?", fromPrompt: 4 },
    { question: "What would meaningful progress on this issue actually look like to you?", fromPrompt: 7 },
  ],
};

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
      leveledAnswer: "Mostly companies, since a relatively small number of corporations are responsible for the bulk of global emissions, although I'd admit individual choices still add up and aren't completely meaningless.",
      pushes: [
        "Support that with a specific fact or reasoning, not just an assertion.",
        "Now acknowledge the counterargument that individual choices still matter.",
      ],
      skills: ["A specific supporting fact or reason", "A counterargument acknowledged"],
    },
    {
      question: "Do you think focusing on individual actions distracts from bigger systemic issues?",
      answer: "Kind of, yeah.",
      leveledAnswer: "It kind of does, because it shifts public attention and blame onto personal habits like recycling, which distracts from pushing for the much bigger systemic changes that actually matter, though individual action isn't entirely pointless either.",
      pushes: [
        "Explain the mechanism, how does focusing on individuals actually distract from the bigger issue?",
        "Now hedge it, since individual action isn't completely pointless either.",
      ],
      skills: ["A clear causal mechanism explained", "A hedged, balanced claim"],
    },
    {
      question: "Do you personally try to reduce your environmental impact?",
      answer: "I try a little.",
      leveledAnswer: "I try to use public transport instead of asking for rides, though I'll admit I still buy more fast fashion than I probably should.",
      pushes: [
        "Give a specific example of what you actually do.",
        "Now be honest about a limitation, something you know you should do but don't.",
      ],
      skills: ["A specific concrete example", "An honest self-critical admission"],
    },
    {
      question: "Does it ever feel pointless to make small individual changes?",
      answer: "Sometimes, yeah.",
      leveledAnswer: "It felt pointless once when I read that a single company produces more emissions than millions of individuals combined, though remembering that collective habits still shift markets helps me push past that feeling.",
      pushes: [
        "Describe a specific moment that feeling hit you.",
        "Now tell us what, if anything, changes your mind about it.",
      ],
      skills: ["A specific moment described", "A counter-thought that shifts the feeling"],
    },
    {
      question: "What should governments be doing that they aren't?",
      answer: "More regulation.",
      leveledAnswer: "Governments should cap emissions for heavy industry specifically, although that kind of regulation is realistically hard to pass when those same industries fund so much political lobbying.",
      pushes: [
        "Name one specific policy or type of regulation.",
        "Now acknowledge a realistic obstacle to that policy happening.",
      ],
      skills: ["A specific policy named", "A realistic political or economic obstacle"],
    },
    {
      question: "Do you think companies would change without pressure from consumers or regulation?",
      answer: "Probably not.",
      leveledAnswer: "Probably not, since companies are fundamentally incentivized to prioritize profit over sustainability, though there are a few exceptions, like companies that rebuilt their whole brand around genuine environmental responsibility.",
      pushes: [
        "Give a specific reason companies are incentivized not to change.",
        "Now name one exception, a case where a company did change on its own.",
      ],
      skills: ["A specific incentive-based reason", "A counter-example acknowledged"],
    },
    {
      question: "How do you personally balance guilt about this with feeling like it's not all on you?",
      answer: "I just try not to think about it too much.",
      leveledAnswer: "Honestly, I try to focus on the small things I can control and remind myself that systemic change matters more than my personal guilt, though I'm not sure that balance is something I've really figured out sustainably yet.",
      pushes: [
        "Give a more honest, specific answer about how you actually reconcile that tension.",
        "Now tell us if that balance feels sustainable to you.",
      ],
      skills: ["A more specific, honest reflection", "An evaluation of sustainability"],
    },
    {
      question: "What would meaningful progress on this issue actually look like to you?",
      answer: "Big changes happening faster.",
      leveledAnswer: "I'd say meaningful progress means seeing renewable energy overtake fossil fuels as the primary global power source, and honestly, I think that needs to happen within the next couple of decades to make a real difference.",
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

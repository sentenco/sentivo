// ASCEND, Thinking About the Future Track, Lesson 4: "Defining Success on Your Own Terms"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-future-4",
  code: "L4",
  mechanic: "push",
  title: "Defining Success on Your Own Terms",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "What does success actually mean to you?",
      answer: "Being happy, I guess.",
      pushes: [
        "That's fairly vague. Make it more concrete, happy doing what, specifically?",
        "Now tell us if that definition has changed for you over time.",
      ],
      skills: ["A concrete, specific definition", "A reflection on how it's changed"],
    },
    {
      question: "How much does other people's definition of success influence your own?",
      answer: "Probably a lot.",
      pushes: [
        "Name specifically whose definition influences you most.",
        "Now tell us if you've ever pushed back against that influence.",
      ],
      skills: ["A specific influencing source named", "An example of pushing back described"],
    },
    {
      question: "Do you think society's version of success is realistic for most people?",
      answer: "Not really, no.",
      pushes: [
        "Give a specific reason it's unrealistic.",
        "Now name who it might actually be realistic for.",
      ],
      skills: ["A specific reason given", "A qualification about who it fits"],
    },
    {
      question: "Is there a risk in defining success too much on your own terms?",
      answer: "Maybe, yeah.",
      pushes: [
        "Name a specific risk of that approach.",
        "Now weigh it against the risk of following society's definition instead.",
      ],
      skills: ["A specific risk named", "A weighed comparison between the two risks"],
    },
    {
      question: "Has your definition of success ever clashed with what someone close to you expects?",
      answer: "A little, yeah.",
      pushes: [
        "Give a specific example of that clash.",
        "Now tell us how you've handled it, or plan to.",
      ],
      skills: ["A specific concrete example", "A strategy for handling it described"],
    },
    {
      question: "Do you think financial security is necessary for success, or separate from it?",
      answer: "Necessary, probably.",
      pushes: [
        "Justify that with a specific reason, not just an assertion.",
        "Now acknowledge a counterexample where someone felt successful without much money.",
      ],
      skills: ["A specific supporting reason", "A counterexample acknowledged"],
    },
    {
      question: "How will you know, personally, if you've achieved success?",
      answer: "I'll just feel it.",
      pushes: [
        "Make that more concrete, what specific sign or milestone would tell you?",
        "Now tell us if that marker could change again in the future.",
      ],
      skills: ["A specific, concrete marker named", "An acknowledgment that it might evolve"],
    },
    {
      question: "What would you say to someone who feels behind compared to their peers?",
      answer: "Don't compare yourself.",
      pushes: [
        "Give more specific, useful advice than that.",
        "Now acknowledge why that comparison happens so naturally in the first place.",
      ],
      skills: ["Concrete, specific advice", "An honest acknowledgment of why comparison happens"],
    },
  ],
  recall: [
    { question: "What does success actually mean to you?", fromPrompt: 0 },
    { question: "Do you think society's version of success is realistic for most people?", fromPrompt: 2 },
    { question: "How will you know, personally, if you've achieved success?", fromPrompt: 6 },
  ],
};

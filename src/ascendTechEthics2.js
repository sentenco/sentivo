// ASCEND, Technology & Right and Wrong Track, Lesson 2: "AI and Academic Integrity"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-tech-ethics-2",
  code: "L2",
  mechanic: "push",
  title: "AI and Academic Integrity",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Where do you think the line is between using AI to help with schoolwork and cheating?",
      answer: "It depends on how you use it.",
      leveledAnswer: "Using AI to check your grammar after writing your own essay feels acceptable, but having it write the whole essay for you crosses the line, and the real distinction is whether the final thinking is genuinely still yours.",
      pushes: [
        "Make that concrete. Give one specific example of acceptable use, and one that crosses the line.",
        "Now explain precisely what separates the two examples.",
      ],
      skills: ["Two specific contrasting examples given", "A precise explanation of the distinction"],
    },
    {
      question: "Have you or people you know used AI tools for schoolwork?",
      answer: "Yeah, sometimes.",
      leveledAnswer: "Yeah, I once used it to help organize my ideas before writing a history essay, and honestly I felt fine about it since I still did all the actual writing myself.",
      pushes: [
        "Give a specific, honest example of how.",
        "Now tell us how you felt about it afterward, honestly.",
      ],
      skills: ["A specific concrete example", "An honest self-reflection"],
    },
    {
      question: "Do you think schools are handling this issue well?",
      answer: "Not really, no.",
      leveledAnswer: "Not really, since a lot of schools are just banning AI outright instead of teaching students how to use it responsibly, when they could instead redesign assignments to focus more on in-class reasoning and discussion.",
      pushes: [
        "Give a specific way schools are getting it wrong.",
        "Now propose a specific alternative approach.",
      ],
      skills: ["A specific criticism given", "A concrete alternative proposed"],
    },
    {
      question: "Does using AI to help you learn undermine the learning itself?",
      answer: "Sometimes, maybe.",
      leveledAnswer: "It undermines learning when someone has AI solve math problems for them without understanding the steps, but it actually supports learning when it's used to explain a concept you're genuinely stuck on.",
      pushes: [
        "Give a specific scenario where it does undermine learning.",
        "Now give one where it actually supports learning instead.",
      ],
      skills: ["A specific undermining scenario", "A contrasting supportive scenario"],
    },
    {
      question: "Is it fair for teachers to use AI-detection tools on student work?",
      answer: "Kind of, yeah.",
      leveledAnswer: "Kind of, though these detection tools are honestly still unreliable and have wrongly flagged genuine student work before, so that risk needs to be weighed carefully against how badly schools want to catch real cheating.",
      pushes: [
        "Name a specific concern with how reliable those tools actually are.",
        "Now weigh that concern against the need to catch real cheating.",
      ],
      skills: ["A specific reliability concern named", "A weighed comparison of the two concerns"],
    },
    {
      question: "Do you think the definition of 'cheating' needs to change now that AI exists?",
      answer: "Probably, yeah.",
      leveledAnswer: "Probably, I'd say the new boundary should be based on whether a student can explain and defend their own work afterward, though that's genuinely difficult to enforce consistently across every classroom.",
      pushes: [
        "Propose a specific new definition or boundary.",
        "Now acknowledge a difficulty in enforcing that new boundary.",
      ],
      skills: ["A specific proposed boundary", "A realistic enforcement difficulty acknowledged"],
    },
    {
      question: "How should students be taught to use these tools responsibly?",
      answer: "Just teach them the rules.",
      leveledAnswer: "Beyond just the rules, students need to understand why relying on AI too heavily actually weakens their own thinking long-term, and I'd say that's a responsibility teachers specifically need to build into how they design assignments.",
      pushes: [
        "Go beyond rules. What understanding, not just rules, should they be taught?",
        "Now name who's actually responsible for teaching that, specifically.",
      ],
      skills: ["A deeper conceptual teaching point named", "A specific responsible party identified"],
    },
    {
      question: "Where do you personally draw your own line with tools like this?",
      answer: "I try to be reasonable about it.",
      leveledAnswer: "My actual rule is that I'll use AI to brainstorm or check my work, but never to write something I'm going to submit as entirely my own, although I'll admit I've been tempted to cross that line during a particularly stressful week.",
      pushes: [
        "Make that concrete, describe your actual personal rule.",
        "Now tell us if you've ever been tempted to cross it.",
      ],
      skills: ["A specific personal rule described", "An honest admission about temptation"],
    },
  ],
  recall: [
    { question: "Where do you think the line is between using AI to help with schoolwork and cheating?", fromPrompt: 0 },
    { question: "Do you think the definition of 'cheating' needs to change now that AI exists?", fromPrompt: 5 },
    { question: "Where do you personally draw your own line with tools like this?", fromPrompt: 7 },
  ],
};

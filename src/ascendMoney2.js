// ASCEND, Talking About Money Track, Lesson 2: "Budgeting for a Goal"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-money-2",
  code: "L2",
  mechanic: "push",
  title: "Budgeting for a Goal",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about something you're currently saving for.",
      answer: "Something I want.",
      leveledAnswer: "I'm saving up for a new laptop, and it costs around forty thousand pesos.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us roughly how much it costs.",
      ],
      skills: ["A specific item named", "A cost detail added"],
    },
    {
      question: "How did you decide to save for it instead of just buying it?",
      answer: "It's expensive.",
      leveledAnswer: "It's a big amount to spend all at once, and my partner also suggested I save instead of using a credit card.",
      pushes: [
        "Give us a fuller reason than just the price.",
        "Now tell us if anything else influenced the decision.",
      ],
      skills: ["A fuller reason given", "An additional influence named"],
    },
    {
      question: "How are you managing your budget to save for it?",
      answer: "I'm spending less.",
      leveledAnswer: "I've cut back on eating out, and I'm setting aside about two thousand pesos a week.",
      pushes: [
        "Tell us specifically what you've cut back on.",
        "Now tell us how much you're setting aside, roughly.",
      ],
      skills: ["A specific cutback named", "A specific savings amount"],
    },
    {
      question: "Has it been hard to stick to the plan?",
      answer: "Sometimes.",
      leveledAnswer: "It was really hard the week my friends invited me on a trip, but I just told myself the goal was more important.",
      pushes: [
        "Tell us about one specific moment it was hard.",
        "Now tell us how you got through it.",
      ],
      skills: ["A specific moment described", "A strategy detail added"],
    },
    {
      question: "How much progress have you made so far?",
      answer: "Some.",
      leveledAnswer: "I've saved about half of what I need, and I'm actually pretty proud of how far I've come.",
      pushes: [
        "Give us a rough percentage or amount.",
        "Now tell us how you feel about that progress.",
      ],
      skills: ["A specific quantity estimate", "A feeling word attached"],
    },
    {
      question: "Have you had any tempting distractions along the way?",
      answer: "A few.",
      leveledAnswer: "There was a big sale on shoes last month, and I managed to resist buying anything.",
      pushes: [
        "Tell us about one specific thing that tempted you.",
        "Now tell us how you resisted, or if you didn't.",
      ],
      skills: ["A specific temptation named", "A resistance detail added"],
    },
    {
      question: "When do you expect to reach your goal?",
      answer: "Not sure exactly.",
      leveledAnswer: "I'll probably reach it by next month, and once I do, I'm going to treat myself to a nice dinner.",
      pushes: [
        "Give us a rough estimate, using 'probably by...'",
        "Now tell us what you'll do once you reach it.",
      ],
      skills: ["A rough timeframe estimate", "A future-plan detail added"],
    },
    {
      question: "Has this experience changed how you think about spending in general?",
      answer: "A little.",
      leveledAnswer: "I've started checking prices more carefully before buying anything, and I think that habit will stick.",
      pushes: [
        "Give us a specific example of that change.",
        "Now tell us if you think it'll last.",
      ],
      skills: ["A concrete example given", "A prediction about lasting change"],
    },
  ],
  recall: [
    { question: "Tell me about something you're currently saving for.", fromPrompt: 0 },
    { question: "How are you managing your budget to save for it?", fromPrompt: 2 },
    { question: "How much progress have you made so far?", fromPrompt: 4 },
  ],
};

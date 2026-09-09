// ASCEND, Talking About Money Track, Lesson 3: "An Unexpected Expense"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-money-3",
  code: "L3",
  mechanic: "push",
  title: "An Unexpected Expense",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about an unexpected expense you've had recently.",
      answer: "Something broke.",
      leveledAnswer: "My washing machine broke down, and it cost about eight thousand pesos to repair.",
      pushes: [
        "Tell us exactly what it was.",
        "Now tell us roughly how much it cost.",
      ],
      skills: ["A specific item named", "A cost detail added"],
    },
    {
      question: "How did you find out about it?",
      answer: "I just noticed.",
      leveledAnswer: "I noticed water leaking onto the floor while doing laundry, and I felt my stomach drop.",
      pushes: [
        "Tell us the moment you realized, exactly.",
        "Now tell us how you felt in that moment.",
      ],
      skills: ["A specific moment described", "A feeling word added"],
    },
    {
      question: "How did you react at first?",
      answer: "I was annoyed.",
      leveledAnswer: "I felt really frustrated, and my first thought was wondering how I'd fit the repair into this month's budget.",
      pushes: [
        "Give us a more precise feeling word than annoyed.",
        "Now tell us what your first thought was about what to do.",
      ],
      skills: ["A precise feeling word", "A first-response thought described"],
    },
    {
      question: "How did you cover the cost?",
      answer: "I just paid for it.",
      leveledAnswer: "I used money from my emergency fund, and it meant I had to postpone buying new shoes I wanted.",
      pushes: [
        "Tell us specifically where the money came from.",
        "Now tell us if that affected your other plans.",
      ],
      skills: ["A specific source of funds", "An impact-on-plans detail"],
    },
    {
      question: "Did it affect your budget for anything else that month?",
      answer: "A bit.",
      leveledAnswer: "I had to skip eating out for a few weeks, but honestly it felt worth it to fix the machine quickly.",
      pushes: [
        "Tell us specifically what you had to cut or delay.",
        "Now tell us how you felt about that trade-off.",
      ],
      skills: ["A specific cutback named", "An opinion on the trade-off"],
    },
    {
      question: "Could it have been prevented?",
      answer: "Maybe.",
      leveledAnswer: "It probably could have been prevented with regular maintenance, so now I plan to get it checked once a year.",
      pushes: [
        "Give us a specific reason why or why not.",
        "Now tell us if you'll do anything differently to prevent it next time.",
      ],
      skills: ["A specific reason given", "A preventive plan named"],
    },
    {
      question: "Do you keep any money aside for situations like this?",
      answer: "A little.",
      leveledAnswer: "I keep about ten thousand pesos in a separate savings account, but honestly I don't think it's quite enough.",
      pushes: [
        "Tell us roughly how much, or how it works.",
        "Now tell us if you think it's enough.",
      ],
      skills: ["A specific detail about the savings", "An honest evaluation"],
    },
    {
      question: "How do you feel about your finances now, looking back at it?",
      answer: "Okay, I think.",
      leveledAnswer: "I feel fairly secure now, but I'd like to build up my emergency fund even more going forward.",
      pushes: [
        "Give us a more precise word than okay.",
        "Now tell us one thing you'd like to change going forward.",
      ],
      skills: ["A more precise evaluative word", "A concrete change named"],
    },
  ],
  recall: [
    { question: "Tell me about an unexpected expense you've had recently.", fromPrompt: 0 },
    { question: "How did you cover the cost?", fromPrompt: 3 },
    { question: "Could it have been prevented?", fromPrompt: 5 },
  ],
};

// SHIFT, Banking & Finance Track, Lesson 4: "Planning the Budget"
// Financial Advisor & customer. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "banking-4",
  code: "L4",
  title: "Planning the Budget",
  tenses: "Will vs Going to",
  tag: "Banking",
  roles: { them: "Financial Advisor", me: "You" },
  themEmoji: "🏦",

  scene: {
    title: "The Advisor's Office",
    context: "You're meeting with a financial advisor to plan your budget for the year.",
  },

  scenarioSet: {
    say: "You're meeting with a financial advisor to plan your budget and savings goals for the year.",
  },

  chain: [
    {
      question: "Are you still going to save for a house this year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, I am. I'm going to save every month.",
      nextLine: "Good. How much are you going to put aside each month?",
    },
    {
      question: "How much are you going to put aside each month?",
      shortAnswer: false,
      clue: "Going to (planned amount): <b>going to save</b>.",
      model: "I'm going to save five hundred a month.",
      nextLine: "How much do you think you'll have saved by the end of the year?",
    },
    {
      question: "How much do you think you'll have saved by the end of the year?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will have</b>.",
      model: "I think I'll have about six thousand saved.",
      nextLine: "If an unexpected expense comes up, what will you do?",
    },
    {
      question: "If an unexpected expense comes up, what will you do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will dip</b> / <b>'ll dip</b>.",
      model: "I'll dip into my emergency fund.",
      nextLine: "Good plan. Are you going to cut back on any spending?",
    },
    {
      question: "Are you going to cut back on any spending?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to cut back on eating out.",
      nextLine: "Will you check in with me every few months?",
    },
    {
      question: "Will you check in with me every few months?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll schedule regular check-ins.",
      nextLine: "What are you going to do with any extra income this year?",
    },
    {
      question: "What are you going to do with any extra income this year?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to put</b>.",
      model: "I'm going to put it toward savings.",
      nextLine: "If your income increases, will your savings goal change?",
    },
    {
      question: "If your income increases, will your savings goal change?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, it will. I'll save even more.",
      nextLine: "Great, I think we have a solid plan.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about savings? What will you do if something unexpected comes up? What did you decide?",
  },

  transfer: {
    question: "Forget the budget. What are you going to do with your money this month? And what do you think will happen to your savings by the end of the year?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to save five hundred a month, I'm going to cut back on eating out), and \"will\" for decisions made in the moment or predictions (I'll dip into my emergency fund, I think I'll have six thousand saved). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real planning session, practical and collaborative, not an abstract grammar drill.",
      say: ["We're meeting to plan your budget for the year. I'm your financial advisor, let's map it out."],
      do: ["Keep it professional and collaborative, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like an advisor genuinely helping plan the budget."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole plan together unaided?",
      say: ["Now tell me the whole plan again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with this budget session.",
      say: ["Forget the budget. What are you going to do with your money this month? What do you think will happen to your savings by the end of the year?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Going to for a plan already decided. Will for a decision made right now or a prediction."],
      do: ["Ask them to notice a real plan-vs-spontaneous moment before next lesson."],
      timing: "1 min",
    },
  },
};

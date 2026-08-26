// SHIFT, Banking & Finance Track, Lesson 2: "The Loan Application"
// Loan Officer & customer. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "banking-2",
  code: "L2",
  title: "The Loan Application",
  tenses: "Past Simple vs Present Perfect",
  tag: "Banking",
  roles: { them: "Loan Officer", me: "You" },
  themEmoji: "🏦",

  scene: {
    title: "The Loan Office",
    context: "You're applying for a loan. The loan officer is reviewing your financial history.",
  },

  scenarioSet: {
    say: "You're applying for a loan. The loan officer is reviewing your financial history and asking a few questions.",
  },

  chain: [
    {
      question: "Did you pay off your last loan on time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I paid it off last year.",
      nextLine: "Have you applied for a loan with us before?",
    },
    {
      question: "Have you applied for a loan with us before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This is my first time.",
      nextLine: "What did you use your last loan for?",
    },
    {
      question: "What did you use your last loan for?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>used</b>.",
      model: "I used it to buy a car.",
      nextLine: "Have you ever missed a payment on anything?",
    },
    {
      question: "Have you ever missed a payment on anything?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. I've always paid on time.",
      nextLine: "Did your income change recently?",
    },
    {
      question: "Did your income change recently?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, it did. I got a raise this year.",
      nextLine: "Have you checked your credit score recently?",
    },
    {
      question: "Have you checked your credit score recently?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>have</b>.",
      model: "Yes, I have. I checked it last week.",
      nextLine: "When did you start your current job?",
    },
    {
      question: "When did you start your current job?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>started</b>.",
      model: "I started it three years ago.",
      nextLine: "Have you gathered all the documents we need yet?",
    },
    {
      question: "Have you gathered all the documents we need yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I'll bring them next time.",
      nextLine: "That's fine, we can continue from there.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What did you use your last loan for? Have you ever missed a payment? What's still missing for this application?",
  },

  transfer: {
    question: "Forget the loan. Did anything change about your finances recently? And have you checked anything about your money lately?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I paid it off last year, I started three years ago), Present Perfect for something connected to now with no exact time (I've always paid on time, I haven't gathered the documents yet). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a routine loan-review conversation, businesslike but not intimidating.",
      say: ["You're applying for a loan. I'm the loan officer, reviewing your history and asking a few questions."],
      do: ["Keep it professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a loan officer genuinely reviewing the file."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole review conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with this loan.",
      say: ["Forget the loan. Did anything change about your finances recently? Have you checked anything about your money lately?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"yet\" or \"ever\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

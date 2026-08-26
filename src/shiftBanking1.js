// SHIFT, Banking & Finance Track, Lesson 1: "Opening an Account"
// Bank Teller & customer. Present Simple (habit/routine) vs Present Continuous (right now / current situation).

export default {
  id: "banking-1",
  code: "L1",
  title: "Opening an Account",
  tenses: "Present Simple vs Present Continuous",
  tag: "Banking",
  roles: { them: "Bank Teller", me: "You" },
  themEmoji: "🏦",

  scene: {
    title: "The Bank, Mid-Morning",
    context: "You're at the bank to open a new account. The teller is getting your information.",
  },

  scenarioSet: {
    say: "You're at the bank to open a new account. The teller is asking a few questions to get things set up.",
  },

  chain: [
    {
      question: "Are you opening this account for personal use?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current action): <b>am</b>.",
      model: "Yes, I am. I'm opening it for myself.",
      nextLine: "Great. Do you currently bank with anyone else?",
    },
    {
      question: "Do you currently bank with anyone else?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general fact): <b>do</b>.",
      model: "Yes, I do. I have an account somewhere else too.",
      nextLine: "What are you hoping to use this account for?",
    },
    {
      question: "What are you hoping to use this account for?",
      shortAnswer: false,
      clue: "Present Continuous (current, ongoing intention): <b>am hoping</b>.",
      model: "I'm hoping to use it for savings.",
      nextLine: "Do you usually save a set amount every month?",
    },
    {
      question: "Do you usually save a set amount every month?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I usually save around ten percent.",
      nextLine: "Are you working right now, or between jobs?",
    },
    {
      question: "Are you working right now, or between jobs?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current situation): <b>am</b>.",
      model: "Yes, I am. I'm working full-time.",
      nextLine: "Who usually handles the finances in your household?",
    },
    {
      question: "Who usually handles the finances in your household?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>handle</b>.",
      model: "I usually handle the finances.",
      nextLine: "Are you setting up online banking today as well?",
    },
    {
      question: "Are you setting up online banking today as well?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now/today): <b>am</b>.",
      model: "Yes, I am. I'm setting that up too.",
      nextLine: "Do you ever use the mobile app to check your balance?",
    },
    {
      question: "Do you ever use the mobile app to check your balance?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. I check it almost every day.",
      nextLine: "Perfect, let's get your account set up.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you setting up today? What do you usually do with your money? What's your current work situation?",
  },

  transfer: {
    question: "Forget the bank. What are you doing right now, at this exact moment? And what do you usually do with your money each month?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually save ten percent, I check the app almost every day), Present Continuous for what's happening right now or your current situation (I'm opening this account, I'm working full-time). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a routine, practical bank visit, low stakes, easy entry into the chain.",
      say: ["You're at the bank to open a new account. I'm the teller, let's get the basics set up."],
      do: ["Keep it friendly and efficient, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (current situation or happening right now).",
      say: ["Ask each question in character, like a teller genuinely walking through account setup."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole account-opening conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real money habits.",
      say: ["Forget the bank. What are you doing right now? What do you usually do with your money each month?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or your current situation."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

// SHIFT, Banking & Finance Track, Lesson 5: "The Year-End Check-In"
// Financial Advisor, capstone. Full mix of Present Simple, Present Continuous,
// Past Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "banking-5",
  code: "L5",
  title: "The Year-End Check-In",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Banking",
  roles: { them: "Financial Advisor", me: "You" },
  themEmoji: "🏦",

  scene: {
    title: "The Year-End Review",
    context: "It's the end of the year. Your financial advisor wants to review how things went.",
  },

  scenarioSet: {
    say: "It's the end of the year. You're meeting with your financial advisor to review how things went. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, did you hit your savings goal this year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I hit it right on time.",
      nextLine: "Have you ever saved this much in one year before?",
    },
    {
      question: "Have you ever saved this much in one year before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was a record for me.",
      nextLine: "What were you thinking at the start of the year about your budget?",
    },
    {
      question: "What were you thinking at the start of the year about your budget?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it looked impossible.",
      nextLine: "Do you usually check your budget every week?",
    },
    {
      question: "Do you usually check your budget every week?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I check it every Sunday.",
      nextLine: "Are you saving for anything specific right now?",
    },
    {
      question: "Are you saving for anything specific right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm saving for a vacation.",
      nextLine: "Are you going to raise your savings goal next year?",
    },
    {
      question: "Are you going to raise your savings goal next year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>am</b>.",
      model: "Yes, I am. I'm definitely going to raise it.",
      nextLine: "Will you stick to the plan even if things get tight?",
    },
    {
      question: "Will you stick to the plan even if things get tight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll stick to it no matter what.",
      nextLine: "What did we focus on most this year, do you remember?",
    },
    {
      question: "What did we focus on most this year, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>focused</b>.",
      model: "We focused on building an emergency fund mostly.",
      nextLine: "That's exactly right. You've made real progress this year.",
    },
  ],

  retell: {
    prompt: "Retell the whole year from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this year. Tell me about your typical week, something you did recently, and one plan you have for next year, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's the end-of-year review. I'm your financial advisor, let's look back on the whole year."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like an advisor genuinely proud of the year's progress."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole year together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole year again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this year specifically.",
      say: ["Forget this year. Tell me about your typical week, something you did recently, and a plan for next year."],
      do: ["This is the real proof the whole track landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "Close out the track with one clear takeaway.",
      say: ["You've now drilled every tense pair in this track live, in conversation. That's the skill: choosing the right tense without stopping to think."],
      do: ["Congratulate them on finishing the track."],
      timing: "1 min",
    },
  },
};

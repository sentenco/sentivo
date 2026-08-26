// SHIFT, School Day Track, Lesson 5: "End of Year"
// Teacher & teen, capstone. Full mix of Present Simple, Present Continuous,
// Past Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "school-5",
  code: "L5",
  title: "End of Year",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "🧑‍🏫",

  scene: {
    title: "The Last Day of Class",
    context: "It's the last day of the school year. Your teacher wants to look back on it with you.",
  },

  scenarioSet: {
    say: "It's the last day of the school year. Your teacher is looking back on the year with you before everyone heads out. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was this year, did you enjoy it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed it.",
      nextLine: "Have you ever had a year this busy before?",
    },
    {
      question: "Have you ever had a year this busy before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was definitely the busiest.",
      nextLine: "What were you thinking on the very first day?",
    },
    {
      question: "What were you thinking on the very first day?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it looked like a hard year.",
      nextLine: "Do you usually get nervous on the first day of school?",
    },
    {
      question: "Do you usually get nervous on the first day of school?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It happens every year.",
      nextLine: "Are you taking any of the same classes again next year?",
    },
    {
      question: "Are you taking any of the same classes again next year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed future plan): <b>am</b>.",
      model: "Yes, I am. I'm taking history again.",
      nextLine: "Are you going to keep in touch with your classmates over the summer?",
    },
    {
      question: "Are you going to keep in touch with your classmates over the summer?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to stay in touch.",
      nextLine: "Will you remember this class next year?",
    },
    {
      question: "Will you remember this class next year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll always remember it.",
      nextLine: "What did we talk about most this year, do you remember?",
    },
    {
      question: "What did we talk about most this year, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>talked</b>.",
      model: "We talked about our goals mostly.",
      nextLine: "That's exactly right. Have a great summer, I'm proud of you.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this year. Tell me about your typical week, something you did recently, and one plan you have for the summer, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's the last day of the year. I'm your teacher, let's look back on it together."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely warm teacher reflecting on the year."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole reflection together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole year again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this year specifically.",
      say: ["Forget this year. Tell me about your typical week, something you did recently, and a plan for the summer."],
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

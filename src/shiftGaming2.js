// SHIFT, Online & Gaming Track, Lesson 2: "Where've You Been?"
// Teammate & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "gaming-2",
  code: "L2",
  title: "Where've You Been?",
  tenses: "Past Simple vs Present Perfect",
  tag: "Gaming",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🎮",

  scene: {
    title: "Back Online",
    context: "You just logged back on after being away for a while. A teammate wants to catch up.",
  },

  scenarioSet: {
    say: "You just logged back online after being away for a while. A teammate is catching up on what you missed.",
  },

  chain: [
    {
      question: "Hey, you're back! Did you take a break from the game?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I took a break for a few weeks.",
      nextLine: "Have you seen the new update yet?",
    },
    {
      question: "Have you seen the new update yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I just logged on.",
      nextLine: "What did you do instead while you were gone?",
    },
    {
      question: "What did you do instead while you were gone?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>focused</b>.",
      model: "I focused on school for a while.",
      nextLine: "Have you played any other games recently?",
    },
    {
      question: "Have you played any other games recently?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>have</b>.",
      model: "Yes, I have. I tried a new one last week.",
      nextLine: "Did you miss playing with the squad?",
    },
    {
      question: "Did you miss playing with the squad?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past feeling): <b>did</b>.",
      model: "Yes, I did. I missed it a lot.",
      nextLine: "Have you ever taken a break this long before?",
    },
    {
      question: "Have you ever taken a break this long before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. This was the longest.",
      nextLine: "When did you decide to come back?",
    },
    {
      question: "When did you decide to come back?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>decided</b>.",
      model: "I decided to come back yesterday.",
      nextLine: "Have you checked your old rank yet?",
    },
    {
      question: "Have you checked your old rank yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I'm scared to look.",
      nextLine: "Ha, fair. Let's just queue up and see.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What did you do while you were away? What have you seen or tried since coming back? What haven't you checked yet?",
  },

  transfer: {
    question: "Forget the game. Did you do anything different last month? And have you tried anything new recently?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I took a break, I decided yesterday), Present Perfect for something connected to now with no exact time (I haven't seen the update yet, I've tried a new game). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a genuine welcome-back moment, warm and curious, not interrogative.",
      say: ["You just logged back online after a break. I'm your teammate, I want to hear what you've been up to."],
      do: ["Keep it under a minute, genuinely glad to see them back."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a teammate genuinely catching up."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole catch-up together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with the game.",
      say: ["Forget the game. Did you do anything different last month? Have you tried anything new recently?"],
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

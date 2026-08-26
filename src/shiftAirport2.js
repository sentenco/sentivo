// SHIFT, Airport Track, Lesson 2: "The Delayed Flight"
// Gate Agent & traveler. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "airport-2",
  code: "L2",
  title: "The Delayed Flight",
  tenses: "Past Simple vs Present Perfect",
  tag: "Airport",
  roles: { them: "Gate Agent", me: "You" },
  themEmoji: "🛫",

  scene: {
    title: "The Gate, Two Hours Later",
    context: "Your flight has been delayed. You're at the gate asking for an update.",
  },

  scenarioSet: {
    say: "Your flight has been delayed for two hours. You're at the gate asking the agent for an update.",
  },

  chain: [
    {
      question: "Did you already check the departure board?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I checked it a few minutes ago.",
      nextLine: "Have you announced a new departure time yet?",
    },
    {
      question: "Have you announced a new departure time yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, we haven't. We're still waiting on information.",
      nextLine: "What did they say caused the delay?",
    },
    {
      question: "What did they say caused the delay?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>said</b>.",
      model: "They said it was a weather issue.",
      nextLine: "Have you experienced a delay this long before?",
    },
    {
      question: "Have you experienced a delay this long before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>have</b>.",
      model: "Yes, I have. It happened once last year.",
      nextLine: "Did you miss a connecting flight because of this?",
    },
    {
      question: "Did you miss a connecting flight because of this?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>didn't</b>.",
      model: "No, I didn't. I have plenty of time.",
      nextLine: "Have you eaten anything while you've been waiting?",
    },
    {
      question: "Have you eaten anything while you've been waiting?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>haven't</b>.",
      model: "No, I haven't. I haven't had a chance yet.",
      nextLine: "When did you first arrive at the gate?",
    },
    {
      question: "When did you first arrive at the gate?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>arrived</b>.",
      model: "I arrived about three hours ago.",
      nextLine: "Have you spoken to anyone about compensation yet?",
    },
    {
      question: "Have you spoken to anyone about compensation yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I wanted to ask you about that.",
      nextLine: "Let me look into that for you right now.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What did you find out about the delay? What have you done or not done yet while waiting?",
  },

  transfer: {
    question: "Forget the flight. Did you experience any delays or waiting recently? And have you dealt with something frustrating like this before?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I checked it a few minutes ago, I arrived three hours ago), Present Perfect for something connected to now with no exact time (I haven't eaten yet, I've experienced a delay before). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a frustrating but realistic delay scene, patient but wanting answers.",
      say: ["Your flight is delayed two hours. I'm the gate agent, you've come up to ask for an update."],
      do: ["Keep it a little tense but professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like an agent trying to give useful updates."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole delay conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with this flight.",
      say: ["Forget the flight. Did you experience any delays or waiting recently? Have you dealt with something frustrating like this before?"],
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

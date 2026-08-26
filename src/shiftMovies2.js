// SHIFT, Movies Track, Lesson 2: "How Was It?"
// Friend & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "movies-2",
  code: "L2",
  title: "How Was It?",
  tenses: "Past Simple vs Present Perfect",
  tag: "Movies",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🍿",

  scene: {
    title: "Walking Out of the Theater",
    context: "The movie just ended. A friend wants to know what you thought.",
  },

  scenarioSet: {
    say: "The movie just ended and you're walking out of the theater. A friend wants to hear what you thought.",
  },

  chain: [
    {
      question: "Did you like the ending?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I really liked it.",
      nextLine: "Have you seen the first movie in this series?",
    },
    {
      question: "Have you seen the first movie in this series?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was my first one.",
      nextLine: "What did you think of the main actor?",
    },
    {
      question: "What did you think of the main actor?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>thought</b>.",
      model: "I thought he was really good.",
      nextLine: "Have you ever seen a plot twist like that before?",
    },
    {
      question: "Have you ever seen a plot twist like that before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. That one really surprised me.",
      nextLine: "Did you cry at any part?",
    },
    {
      question: "Did you cry at any part?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>didn't</b>.",
      model: "No, I didn't. But I almost did.",
      nextLine: "Have you followed this director's other movies?",
    },
    {
      question: "Have you followed this director's other movies?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>have</b>.",
      model: "Yes, I have. I've seen two of his other films.",
      nextLine: "When did you first hear about this movie?",
    },
    {
      question: "When did you first hear about this movie?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>heard</b>.",
      model: "I heard about it a few weeks ago.",
      nextLine: "Have you decided if you're watching it again?",
    },
    {
      question: "Have you decided if you're watching it again?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (recent, connected to now): <b>have</b>.",
      model: "Yes, I have. I've decided I'll watch it again.",
      nextLine: "Same, let's go grab something to eat.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What did you think of the movie? What have you seen or experienced before that compares to it?",
  },

  transfer: {
    question: "Forget this movie. Did you watch anything else recently? And have you ever seen a plot twist that really surprised you?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I heard about it a few weeks ago, I thought he was good), Present Perfect for an experience or change with no specific time (I haven't seen the first one, I've seen two of his other films). Before next lesson, notice a moment where \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a genuine post-movie reaction moment, excited and chatty.",
      say: ["The movie just ended, you're walking out. I'm your friend, I want to hear everything you thought."],
      do: ["Keep it energetic, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a friend genuinely eager for the reaction."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole reaction conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with this movie.",
      say: ["Forget this movie. Did you watch anything else recently? Have you ever seen a plot twist that surprised you?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"ever\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

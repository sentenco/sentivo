// SHIFT, Sports Team Track, Lesson 2: "The Big Game Recap"
// Teammate & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "sports-2",
  code: "L2",
  title: "The Big Game Recap",
  tenses: "Past Simple vs Present Perfect",
  tag: "Sports",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🏃",

  scene: {
    title: "The Locker Room, After the Game",
    context: "You just won a big game. A teammate wants to relive it play by play.",
  },

  scenarioSet: {
    say: "You just won a big game. You're in the locker room, and a teammate wants to relive it play by play.",
  },

  chain: [
    {
      question: "Did you score in that last quarter?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I scored twice.",
      nextLine: "Have you ever scored that many points in one game before?",
    },
    {
      question: "Have you ever scored that many points in one game before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. That was a new record for me.",
      nextLine: "What did the coach say after the game?",
    },
    {
      question: "What did the coach say after the game?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>said</b>.",
      model: "She said we played really well.",
      nextLine: "Have you texted your parents about the win yet?",
    },
    {
      question: "Have you texted your parents about the win yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I'm doing it right after this.",
      nextLine: "Did the other team give you a hard time?",
    },
    {
      question: "Did the other team give you a hard time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, they did. It was a tough game.",
      nextLine: "Have you ever played against a team that tough?",
    },
    {
      question: "Have you ever played against a team that tough?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>have</b>.",
      model: "Yes, I have. Once, last season.",
      nextLine: "When did you realize you were going to win?",
    },
    {
      question: "When did you realize you were going to win?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>realized</b>.",
      model: "I realized it in the final minute.",
      nextLine: "Have you seen the highlights yet?",
    },
    {
      question: "Have you seen the highlights yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. Send them to me!",
      nextLine: "This is going to be a great one to watch back.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What happened in the game? What have you done or not done yet since the win?",
  },

  transfer: {
    question: "Forget the game. Did you do anything you're proud of recently? And have you told anyone about it yet?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I scored twice, she said we played well), Present Perfect for something connected to now with no exact time (I haven't texted my parents yet, I've played a tough team before). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a high-energy, just-won-the-game moment.",
      say: ["You just won a big game. I'm your teammate, I want to relive every second of it."],
      do: ["Keep it hyped, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a teammate genuinely reliving the game."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole recap together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with the game.",
      say: ["Forget the game. Did you do anything you're proud of recently? Have you told anyone about it yet?"],
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

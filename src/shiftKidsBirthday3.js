// SHIFT KIDS, Birthday Party Track, Lesson 3: "Party Games"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-birthday-3",
  code: "L3",
  title: "Party Games",
  tenses: "Present Simple vs Present Continuous",
  tag: "Birthday",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🎉",

  scene: {
    title: "Backyard, Party Time",
    context: "The party is happening. Everyone is playing games in the backyard.",
  },

  scenarioSet: {
    say: "The party has started. You and your friends are playing games in the backyard.",
  },

  chain: [
    {
      question: "Are you playing musical chairs right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm playing right now.",
      nextLine: "Fun! Do you always play musical chairs at parties?",
    },
    {
      question: "Do you always play musical chairs at parties?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. It's a party favorite.",
      nextLine: "What are you doing with the balloon right now?",
    },
    {
      question: "What are you doing with the balloon right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am throwing</b>.",
      model: "I'm throwing the balloon.",
      nextLine: "Do you always play with balloons at parties?",
    },
    {
      question: "Do you always play with balloons at parties?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Balloons are always fun.",
      nextLine: "Is the music playing right now?",
    },
    {
      question: "Is the music playing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's playing loudly.",
      nextLine: "Does the music always stop suddenly in this game?",
    },
    {
      question: "Does the music always stop suddenly in this game?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. That's the fun part.",
      nextLine: "Let's play one more round before cake!",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What game were you playing? What do you always play at parties?",
  },

  transfer: {
    question: "What are you doing right now? And what game do you always play at parties?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite party game before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a lively party-games scene.",
      say: ["The party has started. I'm your best friend, playing games with you."],
      do: ["Sound energetic and fun."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question with excitement, like a friend mid-game."],
      do: ["Show the clue only if stuck.", "Praise every correct answer."],
      timing: "8-10 min",
    },
    retell: {
      goal: "Retell the scene unaided.",
      say: ["Tell me the whole story again."],
      do: ["Let them try before helping."],
      timing: "2 min",
    },
    transfer: {
      goal: "Real-life version of the same two tenses.",
      say: ["What are you doing right now? What game do you always play at parties?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite party game before next time."],
      timing: "1 min",
    },
  },
};

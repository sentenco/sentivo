// SHIFT KIDS, Birthday Party Track, Lesson 4: "Cake Time"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-birthday-4",
  code: "L4",
  title: "Cake Time",
  tenses: "Present Simple vs Present Continuous",
  tag: "Birthday",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🎉",

  scene: {
    title: "Dining Table, Party Time",
    context: "It's time for cake. Everyone is gathering around the table.",
  },

  scenarioSet: {
    say: "It's cake time! Everyone is sitting around the table, watching the candles.",
  },

  chain: [
    {
      question: "Are you blowing out the candles right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm blowing them out now.",
      nextLine: "Yay! Do you always make a wish first?",
    },
    {
      question: "Do you always make a wish first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I always make a wish.",
      nextLine: "What are you eating right now?",
    },
    {
      question: "What are you eating right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am eating</b>.",
      model: "I'm eating chocolate cake.",
      nextLine: "Do you always choose chocolate cake?",
    },
    {
      question: "Do you always choose chocolate cake?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Chocolate is my favorite.",
      nextLine: "Is everyone singing Happy Birthday right now?",
    },
    {
      question: "Is everyone singing Happy Birthday right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, they are. Everyone is singing loudly.",
      nextLine: "Does everyone always sing that song at parties?",
    },
    {
      question: "Does everyone always sing that song at parties?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, they do. It's a birthday tradition.",
      nextLine: "Happy Birthday! Let's cut the cake.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you eating? What do you always do with the candles?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always eat at a birthday party?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite cake flavor before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an exciting cake-time scene.",
      say: ["It's cake time! I'm your best friend, sitting with you at the table."],
      do: ["Sound joyful and celebratory."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question joyfully, like a friend at a birthday party."],
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
      say: ["What are you doing right now? What do you always eat at a party?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite cake flavor before next time."],
      timing: "1 min",
    },
  },
};

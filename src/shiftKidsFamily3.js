// SHIFT KIDS, Family & Home Track, Lesson 3: "Helping Dad Cook"
// Dad & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-family-3",
  code: "L3",
  title: "Helping Dad Cook",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Dad", me: "You" },
  themEmoji: "👨",

  scene: {
    title: "Kitchen, Dinner Time",
    context: "Dad is making dinner and you're helping him.",
  },

  scenarioSet: {
    say: "It's almost dinner time. You're in the kitchen helping Dad cook.",
  },

  chain: [
    {
      question: "Are you stirring the soup right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm stirring it slowly.",
      nextLine: "Great job. Do you always help me cook?",
    },
    {
      question: "Do you always help me cook?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I help every night.",
      nextLine: "What are you smelling right now?",
    },
    {
      question: "What are you smelling right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am smelling</b>.",
      model: "I'm smelling the bread.",
      nextLine: "Do you like the smell of fresh bread?",
    },
    {
      question: "Do you like the smell of fresh bread?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I love it.",
      nextLine: "Is the timer ringing right now?",
    },
    {
      question: "Is the timer ringing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's ringing loudly.",
      nextLine: "Does the timer always ring at seven?",
    },
    {
      question: "Does the timer always ring at seven?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. Dinner is always at seven.",
      nextLine: "Perfect timing! Let's set the table.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing? What do you always do to help Dad cook?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always help with at home?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one way you help at home every day before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a warm cooking scene with Dad.",
      say: ["It's dinner time. I'm your dad, and you're helping me cook."],
      do: ["Sound proud and encouraging."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a dad cooking with his kid."],
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
      say: ["What are you doing right now? What do you always help with at home?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a helping habit before next time."],
      timing: "1 min",
    },
  },
};

// SHIFT KIDS, School Day Track, Lesson 3: "Lunchtime"
// Teacher & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-school-3",
  code: "L3",
  title: "Lunchtime",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "👩‍🏫",

  scene: {
    title: "Cafeteria, Lunchtime",
    context: "It's lunchtime. You're sitting with your friends in the cafeteria.",
  },

  scenarioSet: {
    say: "It's lunchtime. You're sitting at a table with your friends.",
  },

  chain: [
    {
      question: "Are you eating a sandwich right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm eating a cheese sandwich.",
      nextLine: "Yum. Do you bring a sandwich every day?",
    },
    {
      question: "Do you bring a sandwich every day?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. Some days I buy lunch.",
      nextLine: "What are you sharing with your friend right now?",
    },
    {
      question: "What are you sharing with your friend right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am sharing</b>.",
      model: "I'm sharing my grapes.",
      nextLine: "Do you always share your food?",
    },
    {
      question: "Do you always share your food?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Sharing is fun.",
      nextLine: "Is your friend laughing right now?",
    },
    {
      question: "Is your friend laughing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's telling a funny joke.",
      nextLine: "Does she always tell jokes at lunch?",
    },
    {
      question: "Does she always tell jokes at lunch?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. She's very funny.",
      nextLine: "What a fun lunch! Time to go back to class.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you eating? What do you always do at lunchtime?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always eat for lunch?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite lunch food before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a cheerful lunchtime scene.",
      say: ["It's lunchtime. I'm your teacher, checking in at your table."],
      do: ["Sound friendly and relaxed."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a teacher on lunch duty."],
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
      say: ["What are you doing right now? What do you always eat for lunch?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite lunch food before next time."],
      timing: "1 min",
    },
  },
};

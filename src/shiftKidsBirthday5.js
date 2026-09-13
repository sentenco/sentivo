// SHIFT KIDS, Birthday Party Track, Lesson 5: "Opening Presents"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-birthday-5",
  code: "L5",
  title: "Opening Presents",
  tenses: "Present Simple vs Present Continuous",
  tag: "Birthday",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🎉",

  scene: {
    title: "Living Room, After Cake",
    context: "It's time to open presents. Everyone is watching you.",
  },

  scenarioSet: {
    say: "The cake is finished. Now it's time to open your birthday presents.",
  },

  chain: [
    {
      question: "Are you opening a present right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm opening it now.",
      nextLine: "Exciting! Do you always say thank you for presents?",
    },
    {
      question: "Do you always say thank you for presents?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I always say thank you.",
      nextLine: "What are you opening right now?",
    },
    {
      question: "What are you opening right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am opening</b>.",
      model: "I'm opening a big box.",
      nextLine: "Do you always like surprises?",
    },
    {
      question: "Do you always like surprises?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Surprises are exciting.",
      nextLine: "Is your friend smiling right now?",
    },
    {
      question: "Is your friend smiling right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's smiling big.",
      nextLine: "Does she always pick good presents?",
    },
    {
      question: "Does she always pick good presents?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. She knows me well.",
      nextLine: "What a wonderful birthday! Thank you for coming.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you opening? What do you always say when you get a present?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always say when someone gives you a gift?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice a present you always hoped for before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a joyful present-opening scene, closing the track.",
      say: ["It's present time. I'm your best friend, watching you open gifts."],
      do: ["Sound excited and warm."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a friend celebrating with you."],
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
      say: ["What are you doing right now? What do you always say when you get a gift?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a present they hoped for before next time."],
      timing: "1 min",
    },
  },
};

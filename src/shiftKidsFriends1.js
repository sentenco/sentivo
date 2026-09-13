// SHIFT KIDS, Friends Track, Lesson 1: "At the Park"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-friends-1",
  code: "L1",
  title: "At the Park",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🧒",

  scene: {
    title: "Park, Sunny Afternoon",
    context: "You and your best friend are playing at the park.",
  },

  scenarioSet: {
    say: "It's a sunny afternoon. You and your best friend are at the park.",
  },

  chain: [
    {
      question: "Are you running right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm running fast.",
      nextLine: "Cool! Do you always run at the park?",
    },
    {
      question: "Do you always run at the park?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I love to run here.",
      nextLine: "What are you holding right now?",
    },
    {
      question: "What are you holding right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am holding</b>.",
      model: "I'm holding a ball.",
      nextLine: "Do you always bring a ball to the park?",
    },
    {
      question: "Do you always bring a ball to the park?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I bring one every time.",
      nextLine: "Are the birds singing right now?",
    },
    {
      question: "Are the birds singing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>are</b>.",
      model: "Yes, they are. They're singing loudly.",
      nextLine: "Do the birds always sing here?",
    },
    {
      question: "Do the birds always sing here?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, they do. This park is full of birds.",
      nextLine: "So much fun! Let's play catch now.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing at the park? What do you always bring?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do with your best friend?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one thing you always do at the park before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a fun, active park scene between friends.",
      say: ["It's a sunny day at the park. I'm your best friend, playing with you."],
      do: ["Sound playful and excited."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question playfully, like an excited friend."],
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
      say: ["What are you doing right now? What do you always do with your best friend?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a park habit before next time."],
      timing: "1 min",
    },
  },
};

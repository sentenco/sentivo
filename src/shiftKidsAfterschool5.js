// SHIFT KIDS, After-School Fun Track, Lesson 5: "Dance Class"
// Coach & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-afterschool-5",
  code: "L5",
  title: "Dance Class",
  tenses: "Present Simple vs Present Continuous",
  tag: "After School",
  roles: { them: "Coach", me: "You" },
  themEmoji: "💃",

  scene: {
    title: "Dance Studio, Afternoon",
    context: "It's dance class. Your teacher is leading everyone through the steps.",
  },

  scenarioSet: {
    say: "It's after school. You're at dance class, learning new moves.",
  },

  chain: [
    {
      question: "Are you dancing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm dancing right now.",
      nextLine: "Great moves! Do you always come to dance class?",
    },
    {
      question: "Do you always come to dance class?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I come every Friday.",
      nextLine: "What move are you practicing right now?",
    },
    {
      question: "What move are you practicing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am practicing</b>.",
      model: "I'm practicing a spin.",
      nextLine: "Do you always like spins the most?",
    },
    {
      question: "Do you always like spins the most?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Spins are the most fun.",
      nextLine: "Is the music playing right now?",
    },
    {
      question: "Is the music playing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's playing loudly.",
      nextLine: "Does the class always dance to fast music?",
    },
    {
      question: "Does the class always dance to fast music?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>doesn't</b>.",
      model: "No, it doesn't. Sometimes it's slow music.",
      nextLine: "Wonderful dancing today! See you next week.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What move were you practicing? What do you always do at dance class?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always practice at your favorite after-school class?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite dance move before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an upbeat dance-class scene, closing the track.",
      say: ["It's dance class. I'm your teacher, leading the steps."],
      do: ["Sound energetic and encouraging."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question with energy, like a dance teacher."],
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
      say: ["What are you doing right now? What do you always practice in your after-school class?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite dance move before next time."],
      timing: "1 min",
    },
  },
};

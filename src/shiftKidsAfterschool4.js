// SHIFT KIDS, After-School Fun Track, Lesson 4: "Music Lesson"
// Coach & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-afterschool-4",
  code: "L4",
  title: "Music Lesson",
  tenses: "Present Simple vs Present Continuous",
  tag: "After School",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🎹",

  scene: {
    title: "Music Room, Afternoon",
    context: "It's your piano lesson. Your teacher is sitting beside you.",
  },

  scenarioSet: {
    say: "It's after school. You're at your piano lesson in the music room.",
  },

  chain: [
    {
      question: "Are you playing the piano right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm playing a new song.",
      nextLine: "Wonderful! Do you always practice piano after school?",
    },
    {
      question: "Do you always practice piano after school?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I practice every Thursday.",
      nextLine: "What song are you playing right now?",
    },
    {
      question: "What song are you playing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am playing</b>.",
      model: "I'm playing a happy song.",
      nextLine: "Do you always like happy songs best?",
    },
    {
      question: "Do you always like happy songs best?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Happy songs are fun to play.",
      nextLine: "Are your fingers moving fast right now?",
    },
    {
      question: "Are your fingers moving fast right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>are</b>.",
      model: "Yes, they are. They're moving fast now.",
      nextLine: "Do you always practice the fast parts slowly first?",
    },
    {
      question: "Do you always practice the fast parts slowly first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Slow first helps me learn.",
      nextLine: "Great practice today! See you next week.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What song were you playing? What do you always practice first?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always practice in your favorite hobby?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite song before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a focused music-lesson scene.",
      say: ["It's piano lesson time. I'm your teacher, sitting beside you."],
      do: ["Sound patient and warm."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a music teacher."],
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
      say: ["What are you doing right now? What do you always practice in your hobby?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite song before next time."],
      timing: "1 min",
    },
  },
};

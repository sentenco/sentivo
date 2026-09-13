// SHIFT KIDS, After-School Fun Track, Lesson 2: "Swimming Lesson"
// Coach & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-afterschool-2",
  code: "L2",
  title: "Swimming Lesson",
  tenses: "Present Simple vs Present Continuous",
  tag: "After School",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🏊",

  scene: {
    title: "Swimming Pool, Afternoon",
    context: "It's your swimming lesson. Your coach is watching you in the pool.",
  },

  scenarioSet: {
    say: "It's after school. You're at the pool for your swimming lesson.",
  },

  chain: [
    {
      question: "Are you kicking your legs right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm kicking hard.",
      nextLine: "Great! Do you always practice kicking first?",
    },
    {
      question: "Do you always practice kicking first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. We always start with kicking.",
      nextLine: "What are you wearing right now?",
    },
    {
      question: "What are you wearing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am wearing</b>.",
      model: "I'm wearing goggles.",
      nextLine: "Do you always wear goggles in the pool?",
    },
    {
      question: "Do you always wear goggles in the pool?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. They help me see underwater.",
      nextLine: "Are you floating on your back right now?",
    },
    {
      question: "Are you floating on your back right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm floating right now.",
      nextLine: "Do you always float well?",
    },
    {
      question: "Do you always float well?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. I'm still learning.",
      nextLine: "That's okay, you're getting better every week!",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you practicing? What do you always wear in the pool?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always practice at your after-school activity?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one thing you're getting better at before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an encouraging swimming-lesson scene.",
      say: ["It's swim lesson time. I'm your coach, watching you in the pool."],
      do: ["Sound patient and encouraging."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a swim coach."],
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
      say: ["What are you doing right now? What do you always practice after school?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice something they're improving at before next time."],
      timing: "1 min",
    },
  },
};

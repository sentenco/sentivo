// SHIFT KIDS, School Day Track, Lesson 4: "Recess Time"
// Teacher & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-school-4",
  code: "L4",
  title: "Recess Time",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "👩‍🏫",

  scene: {
    title: "Playground, Recess",
    context: "It's recess. You're playing on the playground.",
  },

  scenarioSet: {
    say: "It's recess time. You're outside on the playground with your class.",
  },

  chain: [
    {
      question: "Are you climbing the slide right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm climbing up now.",
      nextLine: "Careful! Do you always play on the slide at recess?",
    },
    {
      question: "Do you always play on the slide at recess?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. It's my favorite.",
      nextLine: "What are you doing on the swing right now?",
    },
    {
      question: "What are you doing on the swing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am swinging</b>.",
      model: "I'm swinging very high.",
      nextLine: "Do you always swing that high?",
    },
    {
      question: "Do you always swing that high?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. Today I feel brave.",
      nextLine: "Are your friends running around right now?",
    },
    {
      question: "Are your friends running around right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>are</b>.",
      model: "Yes, they are. They're playing tag.",
      nextLine: "Do they always play tag at recess?",
    },
    {
      question: "Do they always play tag at recess?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, they do. Tag is their favorite game.",
      nextLine: "Sounds fun! Time to line up and go inside.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing at recess? What do you always play?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always play at recess?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite playground game before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an active, outdoor recess scene.",
      say: ["It's recess. I'm your teacher, watching the playground."],
      do: ["Sound energetic and attentive."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a teacher on playground duty."],
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
      say: ["What are you doing right now? What do you always play at recess?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite playground game before next time."],
      timing: "1 min",
    },
  },
};

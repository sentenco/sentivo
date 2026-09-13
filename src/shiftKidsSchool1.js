// SHIFT KIDS, School Day Track, Lesson 1: "Morning Circle"
// Teacher & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-school-1",
  code: "L1",
  title: "Morning Circle",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "👩‍🏫",

  scene: {
    title: "Classroom, Morning Circle",
    context: "The class sits in a circle every morning. Your teacher is asking questions.",
  },

  scenarioSet: {
    say: "It's morning circle time. You're sitting in a circle with your classmates.",
  },

  chain: [
    {
      question: "Are you sitting next to your best friend right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm sitting right next to her.",
      nextLine: "Nice. Do you always sit together at circle time?",
    },
    {
      question: "Do you always sit together at circle time?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, we do. We sit together every day.",
      nextLine: "What are you holding right now?",
    },
    {
      question: "What are you holding right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am holding</b>.",
      model: "I'm holding my name card.",
      nextLine: "Do you always bring your name card to circle time?",
    },
    {
      question: "Do you always bring your name card to circle time?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I bring it every morning.",
      nextLine: "Is the class singing the good morning song right now?",
    },
    {
      question: "Is the class singing the good morning song right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. We're singing it now.",
      nextLine: "Does the class always sing that song first?",
    },
    {
      question: "Does the class always sing that song first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. We sing it every morning.",
      nextLine: "Great singing! Let's start our lessons.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing at circle time? What do you always do every morning?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do first thing at school?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your morning school routine before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a familiar morning-circle scene.",
      say: ["It's morning circle time. I'm your teacher, asking the class questions."],
      do: ["Sound cheerful and encouraging."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a teacher at circle time."],
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
      say: ["What are you doing right now? What do you always do first at school?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their morning routine before next time."],
      timing: "1 min",
    },
  },
};

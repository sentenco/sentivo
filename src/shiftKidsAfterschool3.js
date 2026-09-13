// SHIFT KIDS, After-School Fun Track, Lesson 3: "Art Club"
// Coach & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-afterschool-3",
  code: "L3",
  title: "Art Club",
  tenses: "Present Simple vs Present Continuous",
  tag: "After School",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🎨",

  scene: {
    title: "Art Room, Afternoon",
    context: "It's art club after school. Your teacher is checking on everyone's work.",
  },

  scenarioSet: {
    say: "It's after school. You're at art club, working on a project.",
  },

  chain: [
    {
      question: "Are you painting a picture right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm painting a rainbow.",
      nextLine: "Beautiful! Do you always come to art club?",
    },
    {
      question: "Do you always come to art club?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I come every Wednesday.",
      nextLine: "What are you making right now?",
    },
    {
      question: "What are you making right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am making</b>.",
      model: "I'm making a clay pot.",
      nextLine: "Do you always like working with clay?",
    },
    {
      question: "Do you always like working with clay?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Clay is my favorite.",
      nextLine: "Is your friend painting too right now?",
    },
    {
      question: "Is your friend painting too right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's painting a flower.",
      nextLine: "Does she always paint flowers?",
    },
    {
      question: "Does she always paint flowers?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. She loves flowers.",
      nextLine: "Amazing work today! Let's clean up our brushes.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you making? What do you always do at art club?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always like to make in art class?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite art material before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a creative after-school art scene.",
      say: ["It's art club. I'm your teacher, checking on your project."],
      do: ["Sound curious and admiring."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a teacher admiring art."],
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
      say: ["What are you doing right now? What do you always like to make in art class?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite art material before next time."],
      timing: "1 min",
    },
  },
};

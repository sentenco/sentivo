// SHIFT KIDS, School Day Track, Lesson 2: "Art Class"
// Teacher & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-school-2",
  code: "L2",
  title: "Art Class",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "👩‍🏫",

  scene: {
    title: "Classroom, Art Time",
    context: "It's art class. You're painting a picture at your desk.",
  },

  scenarioSet: {
    say: "It's art time. You're sitting at your desk with paint and paper.",
  },

  chain: [
    {
      question: "Are you painting a picture right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm painting a sun.",
      nextLine: "Lovely. Do you like art class every week?",
    },
    {
      question: "Do you like art class every week?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I like it every week.",
      nextLine: "What color are you using right now?",
    },
    {
      question: "What color are you using right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am using</b>.",
      model: "I'm using yellow.",
      nextLine: "Do you always choose yellow first?",
    },
    {
      question: "Do you always choose yellow first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. Sometimes I choose blue first.",
      nextLine: "Is your friend drawing a house right now?",
    },
    {
      question: "Is your friend drawing a house right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, he is. He's drawing a big house.",
      nextLine: "Does he always draw houses?",
    },
    {
      question: "Does he always draw houses?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. Houses are his favorite.",
      nextLine: "Beautiful pictures, everyone! Let's clean up the paint.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you painting? What do you always like about art class?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always draw or paint when you get the chance?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite color before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a fun, colorful art-class scene.",
      say: ["It's art time. I'm your teacher, walking around the classroom."],
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
      say: ["What are you doing right now? What do you always like to draw?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite color before next time."],
      timing: "1 min",
    },
  },
};

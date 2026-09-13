// SHIFT KIDS, School Day Track, Lesson 5: "Story Time"
// Teacher & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-school-5",
  code: "L5",
  title: "Story Time",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "👩‍🏫",

  scene: {
    title: "Reading Corner, Afternoon",
    context: "It's story time. The class sits on the rug to listen.",
  },

  scenarioSet: {
    say: "It's the afternoon. You're sitting on the rug for story time.",
  },

  chain: [
    {
      question: "Are you sitting on the rug right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm sitting on the blue rug.",
      nextLine: "Good. Do we always sit on the rug for stories?",
    },
    {
      question: "Do we always sit on the rug for stories?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, we do. We sit here every afternoon.",
      nextLine: "What are you looking at right now?",
    },
    {
      question: "What are you looking at right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am looking</b>.",
      model: "I'm looking at the pictures.",
      nextLine: "Do you always like the pictures in books?",
    },
    {
      question: "Do you always like the pictures in books?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Pictures help me understand.",
      nextLine: "Is your friend listening quietly right now?",
    },
    {
      question: "Is your friend listening quietly right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, he is. He's listening carefully.",
      nextLine: "Does he always listen so well?",
    },
    {
      question: "Does he always listen so well?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. He loves stories.",
      nextLine: "Great listening, class! Let's finish the story.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing during story time? What do you always like about stories?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do when someone reads you a story?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite story before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a calm, cozy story-time scene, closing the track.",
      say: ["It's story time. I'm your teacher, reading to the class."],
      do: ["Sound warm and gentle."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a teacher during story time."],
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
      say: ["What are you doing right now? What do you always do during story time?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite story before next time."],
      timing: "1 min",
    },
  },
};

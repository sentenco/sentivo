// SHIFT KIDS, Pets & Animals Track, Lesson 4: "Bath Time for the Dog"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-pets-4",
  code: "L4",
  title: "Bath Time for the Dog",
  tenses: "Present Simple vs Present Continuous",
  tag: "Pets",
  roles: { them: "Mom", me: "You" },
  themEmoji: "🐶",

  scene: {
    title: "Backyard, Saturday",
    context: "It's bath day for your dog. You and Mom are washing him outside.",
  },

  scenarioSet: {
    say: "It's Saturday, bath day. You're washing your dog in the backyard with Mom.",
  },

  chain: [
    {
      question: "Are you washing the dog right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm washing his back.",
      nextLine: "Nice. Do you always give him a bath on Saturdays?",
    },
    {
      question: "Do you always give him a bath on Saturdays?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, we do. Saturday is bath day.",
      nextLine: "What is he doing right now?",
    },
    {
      question: "What is he doing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>is shaking</b>.",
      model: "He's shaking the water off.",
      nextLine: "Does he always shake like that?",
    },
    {
      question: "Does he always shake like that?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. Every single time.",
      nextLine: "Are you getting wet right now?",
    },
    {
      question: "Are you getting wet right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm getting very wet!",
      nextLine: "Does bath day always end like this?",
    },
    {
      question: "Does bath day always end like this?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. It's always messy and fun.",
      nextLine: "Ha! Let's dry him off with a towel now.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing? What does your dog always do after a bath?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do on bath day for your pet?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice something funny your pet always does before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a splashy, funny bath-time scene.",
      say: ["It's bath day. I'm your mom, washing the dog with you."],
      do: ["Sound playful and amused."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question playfully, like a parent enjoying the mess."],
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
      say: ["What are you doing right now? What do you always do on pet bath day?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice something funny their pet always does before next time."],
      timing: "1 min",
    },
  },
};

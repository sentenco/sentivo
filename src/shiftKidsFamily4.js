// SHIFT KIDS, Family & Home Track, Lesson 4: "Grandma's Visit"
// Grandma & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-family-4",
  code: "L4",
  title: "Grandma's Visit",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Grandma", me: "You" },
  themEmoji: "👵",

  scene: {
    title: "Living Room, Sunday Afternoon",
    context: "Grandma is visiting. You're showing her your favorite game.",
  },

  scenarioSet: {
    say: "It's Sunday afternoon. Grandma is visiting and sitting with you in the living room.",
  },

  chain: [
    {
      question: "Are you showing me your favorite game right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm showing you now.",
      nextLine: "Lovely. Do you play this game every Sunday?",
    },
    {
      question: "Do you play this game every Sunday?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I play it every Sunday.",
      nextLine: "What are you doing with the pieces right now?",
    },
    {
      question: "What are you doing with the pieces right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am moving</b>.",
      model: "I'm moving the pieces.",
      nextLine: "Do you always win this game?",
    },
    {
      question: "Do you always win this game?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. Sometimes I lose.",
      nextLine: "Is your dog watching us play right now?",
    },
    {
      question: "Is your dog watching us play right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's watching from the floor.",
      nextLine: "Does your dog always watch you play?",
    },
    {
      question: "Does your dog always watch you play?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. It loves to watch.",
      nextLine: "What a sweet dog! Let's finish the game together.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you showing Grandma? What do you always do on Sundays?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do when family visits?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one thing your family always does together before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a warm family-visit scene.",
      say: ["It's Sunday, Grandma is visiting. I'm Grandma, sitting with you."],
      do: ["Sound warm and interested."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a grandma enjoying the visit."],
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
      say: ["What are you doing right now? What do you always do when family visits?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a family habit before next time."],
      timing: "1 min",
    },
  },
};

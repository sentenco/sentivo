// SHIFT KIDS, Family & Home Track, Lesson 2: "Cleaning Up"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-family-2",
  code: "L2",
  title: "Cleaning Up",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Mom", me: "You" },
  themEmoji: "👩",

  scene: {
    title: "Bedroom, After Playtime",
    context: "Your toys are everywhere. Mom comes in to check on you.",
  },

  scenarioSet: {
    say: "You just finished playing. Your room is messy and Mom walks in.",
  },

  chain: [
    {
      question: "Are you cleaning your room right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm putting my toys away.",
      nextLine: "Good. Do you clean your room every day?",
    },
    {
      question: "Do you clean your room every day?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. I clean it on weekends.",
      nextLine: "What are you picking up right now?",
    },
    {
      question: "What are you picking up right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am picking up</b>.",
      model: "I'm picking up my blocks.",
      nextLine: "Do you always play with blocks?",
    },
    {
      question: "Do you always play with blocks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Blocks are my favorite toy.",
      nextLine: "Is your teddy bear sitting on the bed right now?",
    },
    {
      question: "Is your teddy bear sitting on the bed right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's sitting on my pillow.",
      nextLine: "Does your teddy bear always sleep there?",
    },
    {
      question: "Does your teddy bear always sleep there?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. It sleeps there every night.",
      nextLine: "Nice and tidy! Let's go wash up for dinner.",
    },
  ],

  retell: {
    prompt: "Tell the story again by yourself. What were you doing? What do you always do with your toys?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do when you clean your room?",
  },

  wrap: {
    prompt: "Remember: always/every day = Present Simple, right now = Present Continuous. Notice something you do every weekend before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a cozy, familiar cleaning-up scene.",
      say: ["Your room is messy after playtime. I'm your mom, checking in."],
      do: ["Keep it playful, not like a scolding."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly."],
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
      say: ["What are you doing right now? What do you always do when you clean up?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a weekend habit before next time."],
      timing: "1 min",
    },
  },
};

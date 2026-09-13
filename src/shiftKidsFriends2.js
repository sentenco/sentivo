// SHIFT KIDS, Friends Track, Lesson 2: "Building Blocks"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-friends-2",
  code: "L2",
  title: "Building Blocks",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🧒",

  scene: {
    title: "Playroom, Rainy Day",
    context: "It's raining outside. You and your best friend are building with blocks.",
  },

  scenarioSet: {
    say: "It's a rainy day. You and your best friend are inside, building with blocks.",
  },

  chain: [
    {
      question: "Are you building a tower right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm building it tall.",
      nextLine: "Wow! Do you always build towers with blocks?",
    },
    {
      question: "Do you always build towers with blocks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Towers are my favorite.",
      nextLine: "What color block are you using right now?",
    },
    {
      question: "What color block are you using right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am using</b>.",
      model: "I'm using a red block.",
      nextLine: "Do you always like red blocks best?",
    },
    {
      question: "Do you always like red blocks best?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. I like green too.",
      nextLine: "Is the tower falling down right now?",
    },
    {
      question: "Is the tower falling down right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's falling right now!",
      nextLine: "Does it always fall this much?",
    },
    {
      question: "Does it always fall this much?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. We build it again every time.",
      nextLine: "Let's build it again together!",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you building? What do you always like about blocks?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always build or play when you're inside?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite indoor game before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a cozy indoor building scene between friends.",
      say: ["It's raining. I'm your best friend, building blocks with you inside."],
      do: ["Sound playful and curious."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question playfully, like a friend building together."],
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
      say: ["What are you doing right now? What do you always build or play inside?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a favorite indoor game before next time."],
      timing: "1 min",
    },
  },
};

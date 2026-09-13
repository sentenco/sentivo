// SHIFT KIDS, Pets & Animals Track, Lesson 5: "Visiting the Zoo"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-pets-5",
  code: "L5",
  title: "Visiting the Zoo",
  tenses: "Present Simple vs Present Continuous",
  tag: "Pets",
  roles: { them: "Mom", me: "You" },
  themEmoji: "🦁",

  scene: {
    title: "The Zoo, Saturday",
    context: "You and Mom are visiting the zoo, looking at the animals.",
  },

  scenarioSet: {
    say: "It's Saturday. You and Mom are at the zoo, looking at the animals together.",
  },

  chain: [
    {
      question: "Are you looking at the lions right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm looking at them now.",
      nextLine: "Cool! Do you always like the lions best at the zoo?",
    },
    {
      question: "Do you always like the lions best at the zoo?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. I like the elephants too.",
      nextLine: "What is the monkey doing right now?",
    },
    {
      question: "What is the monkey doing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>is climbing</b>.",
      model: "It's climbing the tree.",
      nextLine: "Do monkeys always climb trees?",
    },
    {
      question: "Do monkeys always climb trees?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, they do. They climb every day.",
      nextLine: "Is the lion sleeping right now?",
    },
    {
      question: "Is the lion sleeping right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's sleeping in the sun.",
      nextLine: "Do lions always sleep a lot?",
    },
    {
      question: "Do lions always sleep a lot?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, they do. Lions sleep most of the day.",
      nextLine: "What a fun trip! Let's go see the giraffes next.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you looking at? What do lions always do at the zoo?",
  },

  transfer: {
    question: "What are you doing right now? And what is your favorite animal, and what does it always do?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite zoo animal before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an exciting zoo scene, closing the track.",
      say: ["It's Saturday at the zoo. I'm your mom, looking at animals with you."],
      do: ["Sound curious and amazed."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question with wonder, like a parent at the zoo."],
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
      say: ["What are you doing right now? What's your favorite animal and what does it always do?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite zoo animal before next time."],
      timing: "1 min",
    },
  },
};

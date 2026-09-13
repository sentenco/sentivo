// SHIFT KIDS, Pets & Animals Track, Lesson 3: "Playing with the Cat"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-pets-3",
  code: "L3",
  title: "Playing with the Cat",
  tenses: "Present Simple vs Present Continuous",
  tag: "Pets",
  roles: { them: "Mom", me: "You" },
  themEmoji: "🐱",

  scene: {
    title: "Living Room, After School",
    context: "You're playing with your cat and its favorite toy.",
  },

  scenarioSet: {
    say: "You're home from school. You're playing with your cat in the living room.",
  },

  chain: [
    {
      question: "Are you playing with the toy mouse right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm playing with it now.",
      nextLine: "Fun. Do you always play with your cat after school?",
    },
    {
      question: "Do you always play with your cat after school?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I play with her every day.",
      nextLine: "What is the cat doing right now?",
    },
    {
      question: "What is the cat doing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>is chasing</b>.",
      model: "She's chasing the toy.",
      nextLine: "Does she always chase toys?",
    },
    {
      question: "Does she always chase toys?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. She loves to chase things.",
      nextLine: "Is she sleeping right now?",
    },
    {
      question: "Is she sleeping right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>isn't</b>.",
      model: "No, she isn't. She's wide awake.",
      nextLine: "Does she always sleep in the afternoon?",
    },
    {
      question: "Does she always sleep in the afternoon?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. But not today.",
      nextLine: "She loves playing with you. Let's give her a treat.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What was the cat doing? What do you always do together after school?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always play with your pet?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your pet's favorite toy before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a playful after-school pet scene.",
      say: ["You're home from school. I'm your mom, watching you play with the cat."],
      do: ["Sound warm and amused."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a parent watching playtime."],
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
      say: ["What are you doing right now? What do you always play with your pet?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their pet's favorite toy before next time."],
      timing: "1 min",
    },
  },
};

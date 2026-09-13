// SHIFT KIDS, Friends Track, Lesson 4: "Drawing Together"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-friends-4",
  code: "L4",
  title: "Drawing Together",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🧒",

  scene: {
    title: "Living Room, Afternoon",
    context: "You and your best friend are drawing pictures together.",
  },

  scenarioSet: {
    say: "It's a quiet afternoon. You and your best friend are drawing on the floor.",
  },

  chain: [
    {
      question: "Are you drawing a dog right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm drawing a little dog.",
      nextLine: "Cute! Do you always draw animals?",
    },
    {
      question: "Do you always draw animals?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Animals are fun to draw.",
      nextLine: "What crayon are you using right now?",
    },
    {
      question: "What crayon are you using right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am using</b>.",
      model: "I'm using brown.",
      nextLine: "Do you always start with brown?",
    },
    {
      question: "Do you always start with brown?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. It depends on the picture.",
      nextLine: "Is your friend drawing a cat right now?",
    },
    {
      question: "Is your friend drawing a cat right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's drawing a fluffy cat.",
      nextLine: "Does she always draw cats?",
    },
    {
      question: "Does she always draw cats?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. Cats are her favorite.",
      nextLine: "Great drawings! Let's hang them on the wall.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you drawing? What do you always like to draw?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always draw when you have free time?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite thing to draw before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a quiet, creative drawing scene between friends.",
      say: ["It's a calm afternoon. I'm your best friend, drawing with you."],
      do: ["Sound calm and interested."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a friend drawing together."],
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
      do: ["Ask them to notice their favorite thing to draw before next time."],
      timing: "1 min",
    },
  },
};

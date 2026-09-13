// SHIFT KIDS, Pets & Animals Track, Lesson 2: "Walking the Dog"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-pets-2",
  code: "L2",
  title: "Walking the Dog",
  tenses: "Present Simple vs Present Continuous",
  tag: "Pets",
  roles: { them: "Mom", me: "You" },
  themEmoji: "🐶",

  scene: {
    title: "Neighborhood, Afternoon",
    context: "You and Mom are walking the dog around the block.",
  },

  scenarioSet: {
    say: "It's a nice afternoon. You're walking the dog with Mom around the neighborhood.",
  },

  chain: [
    {
      question: "Are you holding the leash right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm holding it tight.",
      nextLine: "Good. Do you always hold the leash on walks?",
    },
    {
      question: "Do you always hold the leash on walks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I hold it every time.",
      nextLine: "What is the dog smelling right now?",
    },
    {
      question: "What is the dog smelling right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>is smelling</b>.",
      model: "He's smelling a flower.",
      nextLine: "Does he always smell everything on walks?",
    },
    {
      question: "Does he always smell everything on walks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. He smells everything.",
      nextLine: "Is he running right now?",
    },
    {
      question: "Is he running right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>isn't</b>.",
      model: "No, he isn't. He's walking slowly.",
      nextLine: "Does he always walk slowly?",
    },
    {
      question: "Does he always walk slowly?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>doesn't</b>.",
      model: "No, he doesn't. Sometimes he runs fast.",
      nextLine: "Let's head home, he must be thirsty.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What was the dog doing? What do you always do on walks?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do when you walk your pet or go outside?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice something your pet always does before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a relaxed outdoor dog-walking scene.",
      say: ["It's a nice day. I'm your mom, walking the dog with you."],
      do: ["Sound calm and pleasant."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question calmly, like a parent on a walk."],
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
      say: ["What are you doing right now? What do you always do outside with your pet?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a pet habit before next time."],
      timing: "1 min",
    },
  },
};

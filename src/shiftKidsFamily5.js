// SHIFT KIDS, Family & Home Track, Lesson 5: "Bedtime Story"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-family-5",
  code: "L5",
  title: "Bedtime Story",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Mom", me: "You" },
  themEmoji: "👩",

  scene: {
    title: "Bedroom, Night Time",
    context: "It's time for bed. Mom is reading you a story.",
  },

  scenarioSet: {
    say: "It's bedtime. You're in bed and Mom is reading you a story.",
  },

  chain: [
    {
      question: "Are you listening to the story right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm listening carefully.",
      nextLine: "Good. Do we always read a story at bedtime?",
    },
    {
      question: "Do we always read a story at bedtime?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, we do. We read every night.",
      nextLine: "What are you holding right now?",
    },
    {
      question: "What are you holding right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am holding</b>.",
      model: "I'm holding my teddy bear.",
      nextLine: "Do you always sleep with your teddy bear?",
    },
    {
      question: "Do you always sleep with your teddy bear?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. He sleeps with me every night.",
      nextLine: "Is the moon shining through your window right now?",
    },
    {
      question: "Is the moon shining through your window right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's shining brightly.",
      nextLine: "Does the moon always look like that?",
    },
    {
      question: "Does the moon always look like that?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>doesn't</b>.",
      model: "No, it doesn't. It changes shape every night.",
      nextLine: "What a good noticer! Sweet dreams, time to sleep.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing at bedtime? What do you always do before you sleep?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do before bed?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your own bedtime routine before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a calm, cozy bedtime scene.",
      say: ["It's bedtime. I'm your mom, reading you a story."],
      do: ["Keep your voice soft and calm."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question gently, like a bedtime chat."],
      do: ["Show the clue only if stuck.", "Praise every correct answer softly."],
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
      say: ["What are you doing right now? What do you always do before bed?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their own bedtime routine before next time."],
      timing: "1 min",
    },
  },
};

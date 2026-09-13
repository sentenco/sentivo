// SHIFT KIDS, Family & Home Track, Lesson 1: "Breakfast Time"
// Mom & kid. Present Simple (habit/routine) vs Present Continuous (right now).
// Kids-level: same tense pair as every lesson in this track, 6-exchange chain,
// simple vocabulary, short sentences.

export default {
  id: "kids-family-1",
  code: "L1",
  title: "Breakfast Time",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Mom", me: "You" },
  themEmoji: "👩",

  scene: {
    title: "Kitchen, Morning",
    context: "It's breakfast time. Mom is talking to you at the table.",
  },

  scenarioSet: {
    say: "It's morning. You're sitting at the table eating breakfast with Mom.",
  },

  chain: [
    {
      question: "Are you eating your cereal right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm eating it now.",
      nextLine: "Good. Do you eat cereal every morning?",
    },
    {
      question: "Do you eat cereal every morning?",
      shortAnswer: true,
      clue: "Short answer. Present Simple (every day): <b>do</b>.",
      model: "Yes, I do. I eat it every morning.",
      nextLine: "What are you drinking right now?",
    },
    {
      question: "What are you drinking right now?",
      shortAnswer: false,
      clue: "Present Continuous (right now): <b>am drinking</b>.",
      model: "I'm drinking milk.",
      nextLine: "Do you always drink milk at breakfast?",
    },
    {
      question: "Do you always drink milk at breakfast?",
      shortAnswer: true,
      clue: "Short answer. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I always drink milk.",
      nextLine: "Is your sister eating breakfast right now too?",
    },
    {
      question: "Is your sister eating breakfast right now too?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous (right now): <b>is</b>.",
      model: "Yes, she is. She's eating toast.",
      nextLine: "Does she usually eat toast?",
    },
    {
      question: "Does she usually eat toast?",
      shortAnswer: true,
      clue: "Short answer. Present Simple (habit): <b>does</b>.",
      model: "Yes, she does. She loves toast.",
      nextLine: "Great! Let's finish breakfast and get ready for school.",
    },
  ],

  retell: {
    prompt: "Tell the whole story again, no help this time. What were you eating? What do you always eat for breakfast?",
  },

  transfer: {
    question: "What are you doing right now, at this exact moment? And what do you usually eat for breakfast at home?",
  },

  wrap: {
    prompt: "Remember: Present Simple for things you always do (I always drink milk), Present Continuous for right now (I'm eating it now). Notice one thing you do every day before the next lesson.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a warm, easy breakfast scene the child can picture right away.",
      say: ["It's morning, you're eating breakfast. I'm your mom, sitting with you at the table."],
      do: ["Keep your tone warm and playful. Under a minute."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating Present Simple (habits) and Present Continuous (right now).",
      say: ["Ask each question warmly, like a real mom at breakfast."],
      do: ["Repeat the question slowly if needed.", "Only show the clue if the child is stuck.", "Praise every correct answer before moving on."],
      timing: "8-10 min",
    },
    retell: {
      goal: "Can the child retell the scene alone?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Let them try fully before helping."],
      timing: "2 min",
    },
    transfer: {
      goal: "Same two tenses, real life this time.",
      say: ["What are you doing right now? What do you always eat for breakfast?"],
      do: ["This shows the grammar really landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One simple takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice one everyday habit before next time."],
      timing: "1 min",
    },
  },
};

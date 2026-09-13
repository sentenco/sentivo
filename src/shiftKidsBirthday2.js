// SHIFT KIDS, Birthday Party Track, Lesson 2: "Decorating the Room"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-birthday-2",
  code: "L2",
  title: "Decorating the Room",
  tenses: "Present Simple vs Present Continuous",
  tag: "Birthday",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🎉",

  scene: {
    title: "Living Room, Party Morning",
    context: "It's the morning of your party. You and your friend are putting up decorations.",
  },

  scenarioSet: {
    say: "It's party morning. You and your best friend are decorating the living room.",
  },

  chain: [
    {
      question: "Are you blowing up balloons right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm blowing up a red one.",
      nextLine: "Nice! Do you always help decorate for parties?",
    },
    {
      question: "Do you always help decorate for parties?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I love decorating.",
      nextLine: "What are you hanging on the wall right now?",
    },
    {
      question: "What are you hanging on the wall right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am hanging</b>.",
      model: "I'm hanging a banner.",
      nextLine: "Do you always hang a banner for your birthday?",
    },
    {
      question: "Do you always hang a banner for your birthday?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. It says Happy Birthday.",
      nextLine: "Is your friend blowing up balloons too right now?",
    },
    {
      question: "Is your friend blowing up balloons too right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's blowing up a yellow one.",
      nextLine: "Does she always choose yellow?",
    },
    {
      question: "Does she always choose yellow?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, she does. Yellow is her favorite.",
      nextLine: "It looks amazing! Guests will be here soon.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you decorating with? What do you always hang up for your birthday?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always use to decorate for a party?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite decoration before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an energetic party-morning scene.",
      say: ["It's party morning. I'm your best friend, decorating with you."],
      do: ["Sound excited and busy."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question excitedly, like a friend decorating together."],
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
      say: ["What are you doing right now? What do you always use to decorate?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite decoration before next time."],
      timing: "1 min",
    },
  },
};

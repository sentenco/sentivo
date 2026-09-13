// SHIFT KIDS, After-School Fun Track, Lesson 1: "Soccer Practice"
// Coach & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-afterschool-1",
  code: "L1",
  title: "Soccer Practice",
  tenses: "Present Simple vs Present Continuous",
  tag: "After School",
  roles: { them: "Coach", me: "You" },
  themEmoji: "⚽",

  scene: {
    title: "Soccer Field, Afternoon",
    context: "It's soccer practice. Your coach is talking to you on the field.",
  },

  scenarioSet: {
    say: "It's after school. You're at soccer practice on the field.",
  },

  chain: [
    {
      question: "Are you kicking the ball right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm kicking it now.",
      nextLine: "Nice kick! Do you always practice soccer after school?",
    },
    {
      question: "Do you always practice soccer after school?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I practice every Tuesday.",
      nextLine: "What are you wearing right now?",
    },
    {
      question: "What are you wearing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am wearing</b>.",
      model: "I'm wearing my soccer shoes.",
      nextLine: "Do you always wear those shoes to practice?",
    },
    {
      question: "Do you always wear those shoes to practice?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. They're my favorite.",
      nextLine: "Is your team running laps right now?",
    },
    {
      question: "Is your team running laps right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. We're running now.",
      nextLine: "Does your team always run laps first?",
    },
    {
      question: "Does your team always run laps first?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. We warm up every time.",
      nextLine: "Great warm-up! Let's practice passing now.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing at practice? What do you always do first?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do at your favorite activity after school?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one thing you always do at practice before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an energetic soccer-practice scene.",
      say: ["It's soccer practice. I'm your coach, talking to you on the field."],
      do: ["Sound encouraging and energetic."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question with energy, like a coach on the field."],
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
      say: ["What are you doing right now? What do you always do at your favorite activity?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a practice habit before next time."],
      timing: "1 min",
    },
  },
};

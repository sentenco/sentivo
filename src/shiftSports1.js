// SHIFT, Sports Team Track, Lesson 1: "Practice Check-In"
// Coach & teen. Present Simple (habit/routine) vs Present Continuous (right now / fixed plan for later).

export default {
  id: "sports-1",
  code: "L1",
  title: "Practice Check-In",
  tenses: "Present Simple vs Present Continuous",
  tag: "Sports",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🧢",

  scene: {
    title: "The Field, Before Practice",
    context: "Practice is about to start. Your coach is checking in before you begin.",
  },

  scenarioSet: {
    say: "You're on the field, about to start practice. Your coach comes over to check in before things get going.",
  },

  chain: [
    {
      question: "Are you stretching right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm stretching before we start.",
      nextLine: "Good. Do you usually stretch before every practice?",
    },
    {
      question: "Do you usually stretch before every practice?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It's part of my routine.",
      nextLine: "What are you working on today?",
    },
    {
      question: "What are you working on today?",
      shortAnswer: false,
      clue: "Present Continuous (right now / for this session): <b>am working</b>.",
      model: "I'm working on my footwork.",
      nextLine: "Do you always focus on footwork on Mondays?",
    },
    {
      question: "Do you always focus on footwork on Mondays?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. We usually start the week with that.",
      nextLine: "Is your knee feeling okay right now?",
    },
    {
      question: "Is your knee feeling okay right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>is</b>.",
      model: "Yes, it is. It's feeling much better.",
      nextLine: "Who usually leads the warm-up?",
    },
    {
      question: "Who usually leads the warm-up?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>leads</b>.",
      model: "Jordan usually leads the warm-up.",
      nextLine: "Are the other players arriving right now?",
    },
    {
      question: "Are the other players arriving right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>are</b>.",
      model: "Yes, they are. A few are showing up now.",
      nextLine: "Do you ever get nervous before practice?",
    },
    {
      question: "Do you ever get nervous before practice?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>don't</b>.",
      model: "No, I don't. Just before real games.",
      nextLine: "Good to hear. Let's get started.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you doing right now to warm up? What do you usually work on? Who's arriving?",
  },

  transfer: {
    question: "Forget practice. What are you doing right now, at this exact moment? And what do you usually do to get ready before something important?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (Jordan usually leads the warm-up, I always focus on footwork on Mondays), Present Continuous for what's happening right now or already set up for today (I'm stretching, I'm working on my footwork). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a familiar pre-practice check-in, low stakes, easy entry into the chain.",
      say: ["You're on the field before practice starts. I'm your coach, let's check in."],
      do: ["Keep it brisk and practical, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or fixed for today).",
      say: ["Ask each question in character, like a coach genuinely checking in before practice starts."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole check-in together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real pre-activity habits.",
      say: ["Forget practice. What are you doing right now? What do you usually do to get ready before something important?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or something already set up for today."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

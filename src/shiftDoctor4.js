// SHIFT, Doctor's Office Track, Lesson 4: "Planning Treatment"
// Doctor & patient. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "doctor-4",
  code: "L4",
  title: "Planning Treatment",
  tenses: "Will vs Going to",
  tag: "Doctor",
  roles: { them: "Doctor", me: "You" },
  themEmoji: "🩺",

  scene: {
    title: "Discussing Next Steps",
    context: "You're discussing a treatment plan with your doctor.",
  },

  scenarioSet: {
    say: "The doctor has a diagnosis and wants to talk through a treatment plan with you.",
  },

  chain: [
    {
      question: "Are you going to start physical therapy this week?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, I am. I'm going to start on Monday.",
      nextLine: "Good. How many sessions are you going to do each week?",
    },
    {
      question: "How many sessions are you going to do each week?",
      shortAnswer: false,
      clue: "Going to (planned amount): <b>going to do</b>.",
      model: "I'm going to do two sessions a week.",
      nextLine: "How long do you think the recovery will take?",
    },
    {
      question: "How long do you think the recovery will take?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will take</b>.",
      model: "I think it will take about six weeks.",
      nextLine: "If the pain gets worse, what will you do?",
    },
    {
      question: "If the pain gets worse, what will you do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will call</b> / <b>'ll call</b>.",
      model: "I'll call the office right away.",
      nextLine: "Good. Are you going to avoid heavy lifting for a while?",
    },
    {
      question: "Are you going to avoid heavy lifting for a while?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to avoid it completely.",
      nextLine: "Will you keep track of your symptoms each day?",
    },
    {
      question: "Will you keep track of your symptoms each day?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll write them down every day.",
      nextLine: "What are you going to do differently at work?",
    },
    {
      question: "What are you going to do differently at work?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to take</b>.",
      model: "I'm going to take more breaks.",
      nextLine: "If you need more time off, will that be possible?",
    },
    {
      question: "If you need more time off, will that be possible?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, it will. My job is pretty flexible.",
      nextLine: "Great, let's check in again in a few weeks.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do for treatment? What will you do if things change? What did you decide about work?",
  },

  transfer: {
    question: "Forget the treatment plan. What are you going to do to take care of yourself this week? And what do you think will happen if you keep up with it?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to start on Monday, I'm going to avoid heavy lifting), and \"will\" for decisions made in the moment or predictions and promises (I'll call the office, I'll write them down every day). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real treatment-planning conversation, supportive and practical.",
      say: ["I have a diagnosis and want to talk through a treatment plan with you. I'm the doctor, let's map it out."],
      do: ["Keep it warm and clear, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a doctor genuinely planning the recovery with the patient."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole treatment plan together unaided?",
      say: ["Now tell me the whole plan again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with this treatment plan.",
      say: ["Forget the treatment plan. What are you going to do to take care of yourself this week? What do you think will happen if you keep up with it?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Going to for a plan already decided. Will for a decision made right now or a prediction."],
      do: ["Ask them to notice a real plan-vs-spontaneous moment before next lesson."],
      timing: "1 min",
    },
  },
};

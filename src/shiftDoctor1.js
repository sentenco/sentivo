// SHIFT, Doctor's Office Track, Lesson 1: "The Checkup"
// Doctor & patient. Present Simple (habit/routine) vs Present Continuous (right now / current state).

export default {
  id: "doctor-1",
  code: "L1",
  title: "The Checkup",
  tenses: "Present Simple vs Present Continuous",
  tag: "Doctor",
  roles: { them: "Doctor", me: "You" },
  themEmoji: "🩺",

  scene: {
    title: "The Exam Room",
    context: "You're at the doctor's office for a routine checkup.",
  },

  scenarioSet: {
    say: "You're at the doctor's office for a routine checkup. The doctor is asking a few questions before the exam.",
  },

  chain: [
    {
      question: "Are you feeling okay today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current state): <b>am</b>.",
      model: "Yes, I am. I'm feeling pretty good.",
      nextLine: "Good. Do you usually exercise during the week?",
    },
    {
      question: "Do you usually exercise during the week?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I usually go for a run.",
      nextLine: "What are you eating these days?",
    },
    {
      question: "What are you eating these days?",
      shortAnswer: false,
      clue: "Present Continuous (current, temporary habit): <b>am eating</b>.",
      model: "I'm eating a lot more vegetables lately.",
      nextLine: "Do you always sleep well at night?",
    },
    {
      question: "Do you always sleep well at night?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually wake up a few times.",
      nextLine: "Are you taking any medication right now?",
    },
    {
      question: "Are you taking any medication right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current state): <b>am not</b>.",
      model: "No, I'm not. I'm not taking anything.",
      nextLine: "Who usually cooks the meals at home?",
    },
    {
      question: "Who usually cooks the meals at home?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>cook</b>.",
      model: "I usually cook most of our meals.",
      nextLine: "Are you feeling any pain right now?",
    },
    {
      question: "Are you feeling any pain right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am not</b>.",
      model: "No, I'm not. Nothing hurts right now.",
      nextLine: "Do you ever get headaches?",
    },
    {
      question: "Do you ever get headaches?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. Every once in a while.",
      nextLine: "Good to know. Let's start the exam.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. How are you feeling right now? What do you usually do for your health? What's changed lately?",
  },

  transfer: {
    question: "Forget the checkup. How are you feeling right now, at this exact moment? And what do you usually do to stay healthy?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually go for a run, I usually cook most meals), Present Continuous for what's happening right now or a current, temporary situation (I'm feeling good, I'm eating more vegetables lately). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a routine checkup, calm and low stakes, easy entry into the chain.",
      say: ["You're at the doctor's office for a routine checkup. I'm the doctor, let's go through a few questions first."],
      do: ["Keep it warm and professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or a current situation).",
      say: ["Ask each question in character, like a doctor genuinely getting a health picture."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole checkup conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real health habits.",
      say: ["Forget the checkup. How are you feeling right now? What do you usually do to stay healthy?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or a current, temporary situation."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

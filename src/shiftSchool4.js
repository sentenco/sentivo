// SHIFT, School Day Track, Lesson 4: "Asking for an Extension"
// Teacher & teen. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "school-4",
  code: "L4",
  title: "Asking for an Extension",
  tenses: "Will vs Going to",
  tag: "School",
  roles: { them: "Teacher", me: "You" },
  themEmoji: "🧑‍🏫",

  scene: {
    title: "After Class, at the Teacher's Desk",
    context: "You need more time on an assignment. You've stayed after class to ask your teacher.",
  },

  scenarioSet: {
    say: "You need more time on an assignment. Class just ended, and you've stayed behind to ask your teacher for an extension.",
  },

  chain: [
    {
      question: "So, are you going to need more time on this assignment?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan/intention): <b>am</b>.",
      model: "Yes, I am. I'm going to need a couple more days.",
      nextLine: "Okay, when are you going to have it done by?",
    },
    {
      question: "When are you going to have it done by?",
      shortAnswer: false,
      clue: "Going to (planned target): <b>going to finish</b>.",
      model: "I'm going to finish it by Friday.",
      nextLine: "What do you think will happen if you turn it in late without asking?",
    },
    {
      question: "What do you think will happen if you turn it in late without asking?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will lose</b> / <b>'ll lose</b>.",
      model: "I think I'll lose points for being late.",
      nextLine: "That's right. If I say yes, will you keep working on it every day?",
    },
    {
      question: "If I say yes, will you keep working on it every day?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll work on it a little every day.",
      nextLine: "Good. Are you going to tell your parents about the extension?",
    },
    {
      question: "Are you going to tell your parents about the extension?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned action): <b>am</b>.",
      model: "Yes, I am. I'm going to tell them tonight.",
      nextLine: "If something else comes up, will you let me know right away?",
    },
    {
      question: "If something else comes up, will you let me know right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll email you immediately.",
      nextLine: "What are you going to focus on first?",
    },
    {
      question: "What are you going to focus on first?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to start</b>.",
      model: "I'm going to start with the research section.",
      nextLine: "If you finish early, will you turn it in right away?",
    },
    {
      question: "If you finish early, will you turn it in right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (spontaneous decision/prediction): <b>will</b>.",
      model: "Yes, I will. I won't wait until the deadline.",
      nextLine: "Sounds like a solid plan. I'll give you until Friday.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation from the start, no help this time. What are you going to do about the assignment? What will you keep doing? What did you decide about the deadline?",
  },

  transfer: {
    question: "Forget the assignment. What are you going to do after school today? And what do you think will happen in class tomorrow?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to finish it by Friday), and \"will\" for decisions made in the moment or predictions and promises (I'll work on it every day, I think I'll lose points). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real, slightly nervous negotiation, not an abstract grammar drill.",
      say: ["You've stayed after class to ask for an extension. I'm your teacher, let's talk it through."],
      do: ["Keep it fair but a little firm, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions/promises).",
      say: ["Ask each question in character, like a teacher genuinely weighing whether to grant the extension."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole negotiation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with the assignment.",
      say: ["Forget the assignment. What are you going to do after school today? What do you think will happen in class tomorrow?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Going to for a plan already decided. Will for a decision made right now, a promise, or a prediction."],
      do: ["Ask them to notice a real plan-vs-spontaneous moment before next lesson."],
      timing: "1 min",
    },
  },
};

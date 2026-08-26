// SHIFT, Job Interview Track, Lesson 4: "Negotiating the Offer"
// Interviewer & candidate. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "interview-4",
  code: "L4",
  title: "Negotiating the Offer",
  tenses: "Will vs Going to",
  tag: "Interview",
  roles: { them: "Interviewer", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "The Offer Call",
    context: "You've been offered the job. Now you're discussing the details.",
  },

  scenarioSet: {
    say: "You've just been offered the job. Now you're on a call discussing salary, start date, and next steps.",
  },

  chain: [
    {
      question: "So, are you going to accept the offer?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, I am. I'm going to accept it.",
      nextLine: "Great. When are you going to be able to start?",
    },
    {
      question: "When are you going to be able to start?",
      shortAnswer: false,
      clue: "Going to (planned target): <b>going to start</b>.",
      model: "I'm going to start in two weeks.",
      nextLine: "What do you think the first few weeks will be like?",
    },
    {
      question: "What do you think the first few weeks will be like?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will be</b>.",
      model: "I think it will be pretty busy.",
      nextLine: "If anything comes up before then, will you let us know?",
    },
    {
      question: "If anything comes up before then, will you let us know?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll reach out right away.",
      nextLine: "Are you going to give notice at your current job today?",
    },
    {
      question: "Are you going to give notice at your current job today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to tell them this afternoon.",
      nextLine: "Will you send over the signed contract by Friday?",
    },
    {
      question: "Will you send over the signed contract by Friday?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll send it as soon as I sign it.",
      nextLine: "What are you going to do to prepare before your first day?",
    },
    {
      question: "What are you going to do to prepare before your first day?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to read</b>.",
      model: "I'm going to read up on the team's current projects.",
      nextLine: "If your start date needs to change, will that be a problem?",
    },
    {
      question: "If your start date needs to change, will that be a problem?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>won't</b>.",
      model: "No, it won't. I have some flexibility.",
      nextLine: "Perfect, welcome to the team.",
    },
  ],

  retell: {
    prompt: "Retell the whole call from the start, no help this time. What are you going to do about the offer? What will you keep them updated on? What did you decide about the start date?",
  },

  transfer: {
    question: "Forget the offer. What are you going to do this week? And what do you think will happen at your current job when you give notice?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to start in two weeks, I'm going to tell them this afternoon), and \"will\" for decisions made in the moment or predictions and promises (I'll send it right away, I think it will be busy). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a genuinely exciting moment, the offer call, and get straight into the logistics.",
      say: ["You've just been offered the job. I'm the interviewer, calling to talk through the details."],
      do: ["Keep it upbeat and professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions/promises).",
      say: ["Ask each question in character, like an interviewer walking through the offer logistics."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole offer conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with this offer.",
      say: ["Forget the offer. What are you going to do this week? What do you think will happen when you give notice?"],
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

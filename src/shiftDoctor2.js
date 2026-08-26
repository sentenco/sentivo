// SHIFT, Doctor's Office Track, Lesson 2: "The Follow-Up Visit"
// Doctor & patient. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "doctor-2",
  code: "L2",
  title: "The Follow-Up Visit",
  tenses: "Past Simple vs Present Perfect",
  tag: "Doctor",
  roles: { them: "Doctor", me: "You" },
  themEmoji: "🩺",

  scene: {
    title: "Two Weeks Later",
    context: "You're back for a follow-up visit after your last appointment.",
  },

  scenarioSet: {
    say: "You're back at the doctor's office for a follow-up visit, two weeks after your last appointment.",
  },

  chain: [
    {
      question: "Did you start taking the medication I prescribed?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I started it the next day.",
      nextLine: "Have you noticed any side effects?",
    },
    {
      question: "Have you noticed any side effects?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (no specific time, still relevant now): <b>haven't</b>.",
      model: "No, I haven't. Nothing so far.",
      nextLine: "What did the medication help with the most?",
    },
    {
      question: "What did the medication help with the most?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>helped</b>.",
      model: "It helped with the pain the most.",
      nextLine: "Have you been able to sleep better since then?",
    },
    {
      question: "Have you been able to sleep better since then?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period, \"since\"): <b>have</b>.",
      model: "Yes, I have. I've slept much better.",
      nextLine: "Did you follow the diet changes we talked about?",
    },
    {
      question: "Did you follow the diet changes we talked about?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, I did. I cut back on sugar.",
      nextLine: "Have you ever had a reaction to medication before?",
    },
    {
      question: "Have you ever had a reaction to medication before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. This is the first time I've taken this.",
      nextLine: "When did the symptoms first improve?",
    },
    {
      question: "When did the symptoms first improve?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>improved</b>.",
      model: "They improved about a week ago.",
      nextLine: "Have you scheduled your next blood test yet?",
    },
    {
      question: "Have you scheduled your next blood test yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I'll do that at the front desk.",
      nextLine: "Sounds like real progress. Let's keep going.",
    },
  ],

  retell: {
    prompt: "Retell the whole visit, no help this time. What did the medication help with? Have you noticed any changes since then? What's still left to schedule?",
  },

  transfer: {
    question: "Forget the medication. Did anything about your health change recently? And have you tried anything new for your health lately?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I started it the next day, they improved a week ago), Present Perfect for something connected to now with no exact time (I haven't noticed side effects, I've slept much better). Before next lesson, notice a moment where \"yet\" or \"since\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a familiar follow-up visit, warm and attentive.",
      say: ["You're back for a follow-up visit, two weeks after your last appointment. I'm the doctor, let's check in."],
      do: ["Keep it warm and professional, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a doctor genuinely tracking progress."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole follow-up together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with this visit.",
      say: ["Forget the medication. Did anything about your health change recently? Have you tried anything new for your health lately?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"yet\" or \"since\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

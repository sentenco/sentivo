// SHIFT, Doctor's Office Track, Lesson 3: "What Happened?"
// Doctor & patient. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "doctor-3",
  code: "L3",
  title: "What Happened?",
  tenses: "Past Continuous vs Past Simple",
  tag: "Doctor",
  roles: { them: "Doctor", me: "You" },
  themEmoji: "🩺",

  scene: {
    title: "The Urgent Care Room",
    context: "You hurt yourself at home. The doctor wants to know exactly what happened.",
  },

  scenarioSet: {
    say: "You hurt yourself at home and came in to get it checked out. The doctor wants to know exactly what happened.",
  },

  chain: [
    {
      question: "What happened to your wrist?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>fell</b>.",
      model: "I fell off a ladder.",
      nextLine: "What were you doing on the ladder?",
    },
    {
      question: "What were you doing on the ladder?",
      shortAnswer: false,
      clue: "Past Continuous (in progress when it happened): <b>was fixing</b>.",
      model: "I was fixing a light in the kitchen.",
      nextLine: "Did you lose your balance suddenly?",
    },
    {
      question: "Did you lose your balance suddenly?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. It happened really fast.",
      nextLine: "Was anyone holding the ladder at the time?",
    },
    {
      question: "Was anyone holding the ladder at the time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing state): <b>wasn't</b>.",
      model: "No, there wasn't. I was doing it alone.",
      nextLine: "Did you feel pain right away?",
    },
    {
      question: "Did you feel pain right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. It hurt immediately.",
      nextLine: "What were you thinking right after you fell?",
    },
    {
      question: "What were you thinking right after you fell?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking I might have broken it.",
      nextLine: "Did you put ice on it right away?",
    },
    {
      question: "Did you put ice on it right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I iced it right away.",
      nextLine: "Were you able to move your fingers at the time?",
    },
    {
      question: "Were you able to move your fingers at the time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was moving them a little.",
      nextLine: "Okay, let's get an X-ray to be safe.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened to your wrist? What were you doing when it happened? What did you do right after?",
  },

  transfer: {
    question: "Forget the ladder. Tell me about a time you got hurt somewhere else. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (fell, felt, iced), Past Continuous for what was already in progress around them (was fixing, was thinking, was moving). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a calm, caring tone, the doctor is gathering facts to help, not to judge.",
      say: ["You hurt yourself at home and came in to get it checked out. I'm the doctor, I want to know exactly what happened."],
      do: ["Keep it calm and caring, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely trying to piece together what happened."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole story together unaided?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with this injury.",
      say: ["Forget the ladder. Tell me about a time you got hurt somewhere else. What were you doing when it happened?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple moves the story forward. Past Continuous sets the scene around it."],
      do: ["Ask them to notice a real moment this week where two things were happening at once."],
      timing: "1 min",
    },
  },
};

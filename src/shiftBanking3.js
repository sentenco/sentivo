// SHIFT, Banking & Finance Track, Lesson 3: "The Disputed Charge"
// Bank Rep & customer. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "banking-3",
  code: "L3",
  title: "The Disputed Charge",
  tenses: "Past Continuous vs Past Simple",
  tag: "Banking",
  roles: { them: "Bank Rep", me: "You" },
  themEmoji: "🏦",

  scene: {
    title: "On the Phone, Fraud Department",
    context: "You noticed a strange charge on your account. You're on the phone explaining what happened.",
  },

  scenarioSet: {
    say: "You noticed a strange charge on your account. You've called the bank, and a representative wants to understand exactly what happened.",
  },

  chain: [
    {
      question: "What happened when you first saw the charge?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>called</b>.",
      model: "I saw it and called right away.",
      nextLine: "What were you doing when you noticed it?",
    },
    {
      question: "What were you doing when you noticed it?",
      shortAnswer: false,
      clue: "Past Continuous (in progress when noticed): <b>was checking</b>.",
      model: "I was checking my account online.",
      nextLine: "Did you recognize the store name?",
    },
    {
      question: "Did you recognize the store name?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. I'd never heard of it.",
      nextLine: "Was your card with you at the time of the charge?",
    },
    {
      question: "Was your card with you at the time of the charge?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing state): <b>was</b>.",
      model: "Yes, it was. It was in my wallet the whole time.",
      nextLine: "Did you make any online purchases that day?",
    },
    {
      question: "Did you make any online purchases that day?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. I didn't buy anything online.",
      nextLine: "Were you using public wifi around that time?",
    },
    {
      question: "Were you using public wifi around that time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background action): <b>was</b>.",
      model: "Yes, I was. I was using it at a coffee shop.",
      nextLine: "Did you freeze your card after you saw it?",
    },
    {
      question: "Did you freeze your card after you saw it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I froze it immediately.",
      nextLine: "Were you worried about other charges showing up?",
    },
    {
      question: "Were you worried about other charges showing up?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was worried the whole time.",
      nextLine: "Okay, let's get this sorted out for you right now.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened when you saw the charge? What were you doing at the time? What did you do about it?",
  },

  transfer: {
    question: "Forget the charge. Tell me about a time you noticed something wrong somewhere else. What were you doing when you noticed it?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (saw, called, froze), Past Continuous for what was already in progress around them (was checking, was using, was worried). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a calm, reassuring tone, this is fact-finding to help, not an accusation.",
      say: ["You noticed a strange charge on your account. I'm the bank representative, I want to understand exactly what happened."],
      do: ["Keep it calm and reassuring, under a minute."],
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
      goal: "Same tense pair, a personal story with nothing to do with this charge.",
      say: ["Forget the charge. Tell me about a time you noticed something wrong somewhere else. What were you doing when you noticed it?"],
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

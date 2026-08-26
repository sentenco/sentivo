// SHIFT, Sports Team Track, Lesson 3: "The Injury"
// Coach & teen. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "sports-3",
  code: "L3",
  title: "The Injury",
  tenses: "Past Continuous vs Past Simple",
  tag: "Sports",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🧢",

  scene: {
    title: "The Sideline",
    context: "You just got hurt during the game. Your coach wants to know exactly what happened.",
  },

  scenarioSet: {
    say: "You just got hurt during the game and had to come off the field. Your coach wants to know exactly what happened.",
  },

  chain: [
    {
      question: "What happened to your ankle?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>twisted</b>.",
      model: "I twisted it on the turn.",
      nextLine: "What were you doing right before it happened?",
    },
    {
      question: "What were you doing right before it happened?",
      shortAnswer: false,
      clue: "Past Continuous (in progress right before): <b>was chasing</b>.",
      model: "I was chasing the ball.",
      nextLine: "Did you hear anything, like a pop or a crack?",
    },
    {
      question: "Did you hear anything, like a pop or a crack?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. It just hurt right away.",
      nextLine: "Was another player running near you at the time?",
    },
    {
      question: "Was another player running near you at the time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background action): <b>was</b>.",
      model: "Yes, there was. Someone was right beside me.",
      nextLine: "Did you try to keep playing?",
    },
    {
      question: "Did you try to keep playing?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I tried for a minute.",
      nextLine: "What were you thinking when the pain didn't go away?",
    },
    {
      question: "What were you thinking when the pain didn't go away?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking something was really wrong.",
      nextLine: "Did you tell the ref right away?",
    },
    {
      question: "Did you tell the ref right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I called a timeout.",
      nextLine: "Were you in a lot of pain when you sat down?",
    },
    {
      question: "Were you in a lot of pain when you sat down?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was in a lot of pain for a while.",
      nextLine: "Okay, let's get some ice on that and have someone look at it.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened to your ankle? What were you doing when it happened? What did you do about it?",
  },

  transfer: {
    question: "Forget the injury. Tell me about a time you got hurt or something went wrong somewhere else. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (twisted, tried, called), Past Continuous for what was already in progress around them (was chasing, was thinking, was in pain). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a caring, concerned tone, a coach wants the facts to help, not to blame.",
      say: ["You just came off the field hurt. I'm your coach, I want to know exactly what happened."],
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
      say: ["Forget the injury. Tell me about a time something went wrong somewhere else. What were you doing when it happened?"],
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

// SHIFT, Sports Team Track, Lesson 5: "End of Season"
// Coach, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "sports-5",
  code: "L5",
  title: "End of Season",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Sports",
  roles: { them: "Coach", me: "You" },
  themEmoji: "🧢",

  scene: {
    title: "The Last Practice",
    context: "It's the last practice of the season. Your coach wants to look back on it with you.",
  },

  scenarioSet: {
    say: "It's the last practice of the season. Your coach is looking back on the whole season with you before everyone heads home. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was this season, did you enjoy it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed it.",
      nextLine: "Have you ever had a season this good before?",
    },
    {
      question: "Have you ever had a season this good before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was definitely my best.",
      nextLine: "What were you thinking before our very first game?",
    },
    {
      question: "What were you thinking before our very first game?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking I wasn't ready.",
      nextLine: "Do you usually get nervous before the first game of the season?",
    },
    {
      question: "Do you usually get nervous before the first game of the season?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It happens every year.",
      nextLine: "Are you playing again next season?",
    },
    {
      question: "Are you playing again next season?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm signing up again already.",
      nextLine: "Are we going to train together over the break?",
    },
    {
      question: "Are we going to train together over the break?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to keep training.",
      nextLine: "Will you remember this season?",
    },
    {
      question: "Will you remember this season?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll always remember it.",
      nextLine: "What did we work on most this season, do you remember?",
    },
    {
      question: "What did we work on most this season, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>worked</b>.",
      model: "We worked on teamwork mostly.",
      nextLine: "That's exactly right. Great season, I'm proud of all of you.",
    },
  ],

  retell: {
    prompt: "Retell the whole season from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this season. Tell me about your typical week, something you did recently, and one plan you have for the off-season, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's the last practice of the season. I'm your coach, let's look back on it together."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely proud coach reflecting on the season."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole season together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole season again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this season specifically.",
      say: ["Forget this season. Tell me about your typical week, something you did recently, and a plan for the off-season."],
      do: ["This is the real proof the whole track landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "Close out the track with one clear takeaway.",
      say: ["You've now drilled every tense pair in this track live, in conversation. That's the skill: choosing the right tense without stopping to think."],
      do: ["Congratulate them on finishing the track."],
      timing: "1 min",
    },
  },
};

// SHIFT, Online & Gaming Track, Lesson 5: "Tournament Recap"
// Teammate, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "gaming-5",
  code: "L5",
  title: "Tournament Recap",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Gaming",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🎮",

  scene: {
    title: "After the Final Match",
    context: "The tournament just ended. You and a teammate are looking back on the whole season.",
  },

  scenarioSet: {
    say: "The tournament just ended. You and a teammate are looking back on the whole season together in voice chat. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, did we do well this tournament?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, we did. We did really well.",
      nextLine: "Have you ever made it this far before?",
    },
    {
      question: "Have you ever made it this far before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was our best run.",
      nextLine: "What were you thinking before the first match?",
    },
    {
      question: "What were you thinking before the first match?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking we didn't have a chance.",
      nextLine: "Do you usually get this nervous before a big match?",
    },
    {
      question: "Do you usually get this nervous before a big match?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. Every single time.",
      nextLine: "Are you playing again in the next tournament?",
    },
    {
      question: "Are you playing again in the next tournament?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm signing up next week.",
      nextLine: "Are we going to practice more before then?",
    },
    {
      question: "Are we going to practice more before then?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to practice more.",
      nextLine: "Will you remember this tournament?",
    },
    {
      question: "Will you remember this tournament?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll never forget it.",
      nextLine: "What did we talk about most this season, do you remember?",
    },
    {
      question: "What did we talk about most this season, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>talked</b>.",
      model: "We talked about strategy mostly.",
      nextLine: "That's exactly right. GG, let's do it again next season.",
    },
  ],

  retell: {
    prompt: "Retell the whole tournament from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget the tournament. Tell me about your typical week, something you did recently, and one plan you have for next season, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["The tournament just ended. I'm your teammate, let's look back on the whole season."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely proud teammate reflecting on the run."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole season together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole tournament again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this tournament specifically.",
      say: ["Forget the tournament. Tell me about your typical week, something you did recently, and a plan for next season."],
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

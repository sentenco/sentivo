// SHIFT, Friend Group Hangout Track, Lesson 5: "Best Summer Ever"
// Friend, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "friends-5",
  code: "L5",
  title: "Best Summer Ever",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Friends",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Last Night of the Trip",
    context: "It's the last night of the trip. You and your friend are looking back on the whole summer.",
  },

  scenarioSet: {
    say: "It's the last night of the trip. You and your friend are sitting around, looking back on the whole summer together. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, did you have a good summer?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. It was one of the best.",
      nextLine: "Have you ever had a summer this good before?",
    },
    {
      question: "Have you ever had a summer this good before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This one was different.",
      nextLine: "What were you thinking on the first day of summer?",
    },
    {
      question: "What were you thinking on the first day of summer?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it would be boring.",
      nextLine: "Do you usually plan things this far ahead?",
    },
    {
      question: "Do you usually plan things this far ahead?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. This trip was different.",
      nextLine: "Are you seeing everyone again before school starts?",
    },
    {
      question: "Are you seeing everyone again before school starts?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. We're meeting up next week.",
      nextLine: "Are we going to do another trip like this next summer?",
    },
    {
      question: "Are we going to do another trip like this next summer?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're already planning it.",
      nextLine: "Will you remember this summer?",
    },
    {
      question: "Will you remember this summer?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll never forget it.",
      nextLine: "What did we talk about most this summer, do you remember?",
    },
    {
      question: "What did we talk about most this summer, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>talked</b>.",
      model: "We talked about our future mostly.",
      nextLine: "That's exactly right. Here's to more summers like this.",
    },
  ],

  retell: {
    prompt: "Retell the whole summer from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this summer. Tell me about your typical week, something you did recently, and one plan you have for next month, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's the last night of the trip. I'm your friend, let's look back on the whole summer."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely reflective friend on the last night of the trip."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole summer together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole summer again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this summer specifically.",
      say: ["Forget this summer. Tell me about your typical week, something you did recently, and a plan for next month."],
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

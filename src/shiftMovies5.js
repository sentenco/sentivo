// SHIFT, Movies Track, Lesson 5: "Best Movie Ever"
// Friend, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "movies-5",
  code: "L5",
  title: "Best Movie Ever",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Movies",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🍿",

  scene: {
    title: "After the Marathon",
    context: "The marathon just ended. You and your friend are talking about your all-time favorite movies.",
  },

  scenarioSet: {
    say: "The marathon just ended. You and your friend are talking about movies in general, past favorites and future watches. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, did you enjoy the marathon?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed it.",
      nextLine: "Have you ever watched this many movies in one day before?",
    },
    {
      question: "Have you ever watched this many movies in one day before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was a first.",
      nextLine: "What were you feeling during the final movie?",
    },
    {
      question: "What were you feeling during the final movie?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing state at that moment): <b>was feeling</b>.",
      model: "I was feeling really tired but happy.",
      nextLine: "Do you usually prefer movies over TV shows?",
    },
    {
      question: "Do you usually prefer movies over TV shows?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit/preference): <b>do</b>.",
      model: "Yes, I do. I usually prefer movies.",
      nextLine: "Are you watching anything else later tonight?",
    },
    {
      question: "Are you watching anything else later tonight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm watching one more episode.",
      nextLine: "Are we going to do this again next month?",
    },
    {
      question: "Are we going to do this again next month?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to do this again.",
      nextLine: "Will you recommend this trilogy to anyone?",
    },
    {
      question: "Will you recommend this trilogy to anyone?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll tell everyone about it.",
      nextLine: "What did we talk about most today, do you remember?",
    },
    {
      question: "What did we talk about most today, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>talked</b>.",
      model: "We talked about the plot twists mostly.",
      nextLine: "That's exactly right. Best movie day ever.",
    },
  ],

  retell: {
    prompt: "Retell the whole day from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget the marathon. Tell me about your typical week, something you watched recently, and one plan you have for this weekend, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["The marathon just ended. I'm your friend, let's talk about movies in general."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely happy, tired friend winding down after the marathon."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole day together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole day again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this marathon specifically.",
      say: ["Forget the marathon. Tell me about your typical week, something you watched recently, and a plan for this weekend."],
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

// SHIFT, Airport Track, Lesson 5: "Landing Back Home"
// Friend, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "airport-5",
  code: "L5",
  title: "Landing Back Home",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Airport",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Arrivals, Finally Home",
    context: "You just landed after a long trip. A friend picked you up and wants to hear everything.",
  },

  scenarioSet: {
    say: "You just landed after a long trip. A friend picked you up from the airport and wants to hear how it all went. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was the trip, did you have a good time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I had an amazing time.",
      nextLine: "Have you ever traveled somewhere that far before?",
    },
    {
      question: "Have you ever traveled somewhere that far before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was the farthest I've been.",
      nextLine: "What were you thinking when you landed at the first airport?",
    },
    {
      question: "What were you thinking when you landed at the first airport?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking everything looked so different.",
      nextLine: "Do you usually get jet lag after a long flight?",
    },
    {
      question: "Do you usually get jet lag after a long flight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It happens every time.",
      nextLine: "Are you seeing anyone else today to tell them about it?",
    },
    {
      question: "Are you seeing anyone else today to tell them about it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm meeting my family for dinner.",
      nextLine: "Are we going to plan a trip like this together sometime?",
    },
    {
      question: "Are we going to plan a trip like this together sometime?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to plan one.",
      nextLine: "Will you show me the photos?",
    },
    {
      question: "Will you show me the photos?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll show you right now.",
      nextLine: "What did you enjoy most about the trip, do you remember?",
    },
    {
      question: "What did you enjoy most about the trip, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>enjoyed</b>.",
      model: "I enjoyed the food most.",
      nextLine: "That's exactly right. I'm so glad you're back safe.",
    },
  ],

  retell: {
    prompt: "Retell the whole trip from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this trip. Tell me about your typical week, something you did recently, and one plan you have for your next trip, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["You just landed after a long trip. I'm your friend, I picked you up, let's hear all about it."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely excited friend hearing about the trip."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole trip together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole trip again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this trip specifically.",
      say: ["Forget this trip. Tell me about your typical week, something you did recently, and a plan for your next trip."],
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

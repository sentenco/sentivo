// SHIFT, Family & Home Life Track, Lesson 5: "How Was the Trip?"
// Grandma & teen, capstone. Full mix of Present Simple, Present Continuous,
// Past Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "family-5",
  code: "L5",
  title: "How Was the Trip?",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Family",
  roles: { them: "Grandma", me: "You" },
  themEmoji: "👵",

  scene: {
    title: "The Porch, After the Trip",
    context: "You're back from a family road trip. Grandma wants to hear all about it.",
  },

  scenarioSet: {
    say: "You just got back from a family road trip. Grandma is sitting on the porch, eager to hear everything. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was the trip, did you enjoy it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed it.",
      nextLine: "Have you ever been to the mountains before this trip?",
    },
    {
      question: "Have you ever been to the mountains before this trip?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was actually my first time.",
      nextLine: "What were you thinking when you first saw the view?",
    },
    {
      question: "What were you thinking when you first saw the view?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it was the most beautiful thing I'd ever seen.",
      nextLine: "Do you usually get carsick on long drives?",
    },
    {
      question: "Do you usually get carsick on long drives?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I actually slept most of the way.",
      nextLine: "Are you seeing your friends later to tell them about it?",
    },
    {
      question: "Are you seeing your friends later to tell them about it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm meeting them tomorrow.",
      nextLine: "Are we going to go back there again next year?",
    },
    {
      question: "Are we going to go back there again next year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to go back.",
      nextLine: "Will you show me the photos?",
    },
    {
      question: "Will you show me the photos?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/offer): <b>will</b>.",
      model: "Yes, I will. I'll show you right now.",
      nextLine: "What did we talk about most on the drive, do you remember?",
    },
    {
      question: "What did we talk about most on the drive, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished conversation, specific occasion): <b>talked</b>.",
      model: "We talked about your old road trips mostly.",
      nextLine: "Ha, I do love telling those stories. I'm so glad you had a good time.",
    },
  ],

  retell: {
    prompt: "Retell the whole trip from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget the trip. Tell me about your typical week, something you did recently, and one plan you have for this weekend, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["You're back from the trip, sitting on the porch. I'm your grandma, let's talk about how it went."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely warm grandparent catching up."],
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
      goal: "Full mix, personal and unscripted, nothing to do with the trip.",
      say: ["Forget the trip. Tell me about your typical week, something you did recently, and a plan for this weekend."],
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

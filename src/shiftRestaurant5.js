// SHIFT, Restaurant Track, Lesson 5: "How Was Tonight?"
// Two friends recapping after the meal. Capstone: full mix of Past Simple,
// Past Continuous, Present Perfect, Present Simple, Present Continuous, Will/Going to.

export default {
  id: "restaurant-5",
  code: "L5",
  title: "How Was Tonight?",
  tenses: "Full Mix: Past Simple, Past Continuous, Present Perfect, Present Simple",
  tag: "Restaurant",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🙂",

  scene: {
    title: "Walking Out Together",
    context: "You and a friend just finished dinner and are walking out, recapping the whole night.",
  },

  scenarioSet: {
    say: "Dinner's done. You and your friend are walking out together, talking about how the night went and what's next. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was tonight, did you enjoy it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed it.",
      nextLine: "Have you been to this place before tonight?",
    },
    {
      question: "Have you been to this place before tonight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (experience, no specific time): <b>haven't</b>.",
      model: "No, I haven't. This was actually my first time.",
      nextLine: "What were you thinking when the food arrived?",
    },
    {
      question: "What were you thinking when the food arrived?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it looked amazing.",
      nextLine: "Do you usually order dessert?",
    },
    {
      question: "Do you usually order dessert?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. But I made an exception tonight.",
      nextLine: "Are you meeting anyone else later tonight?",
    },
    {
      question: "Are you meeting anyone else later tonight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am</b>.",
      model: "Yes, I am. I'm meeting my sister at nine.",
      nextLine: "Are we going to come back here again?",
    },
    {
      question: "Are we going to come back here again?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>are</b>.",
      model: "Yes, we are. We're definitely going to come back.",
      nextLine: "Will you recommend this place to anyone?",
    },
    {
      question: "Will you recommend this place to anyone?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (decision/promise): <b>will</b>.",
      model: "Yes, I will. I'll tell everyone about it.",
      nextLine: "What did we talk about most tonight, do you remember?",
    },
    {
      question: "What did we talk about most tonight, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished conversation, specific occasion): <b>talked</b>.",
      model: "We talked about work mostly.",
      nextLine: "Good night, this one. Let's do it again soon.",
    },
  ],

  retell: {
    prompt: "Retell the whole evening from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget tonight. Tell me about your typical week, something you did recently, and one plan you have for this weekend, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together tonight, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["Dinner's done, we're walking out. I'm your friend, let's talk about how tonight went."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Past Simple, Past Continuous, Present Perfect, Present Simple, Present Continuous, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuine friend recapping the night."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole night together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole evening again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with tonight's dinner.",
      say: ["Forget tonight. Tell me about your typical week, something you did recently, and a plan for this weekend."],
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

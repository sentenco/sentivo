// SHIFT, Doctor's Office Track, Lesson 5: "The Annual Physical"
// Doctor, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "doctor-5",
  code: "L5",
  title: "The Annual Physical",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Doctor",
  roles: { them: "Doctor", me: "You" },
  themEmoji: "🩺",

  scene: {
    title: "One Year Later",
    context: "It's time for your annual physical. Your doctor wants to review the whole year.",
  },

  scenarioSet: {
    say: "It's time for your annual physical. Your doctor is reviewing the whole year with you. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how was this year for your health overall, did it go well?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, it did. It went pretty well.",
      nextLine: "Have you ever had a healthier year than this one?",
    },
    {
      question: "Have you ever had a healthier year than this one?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was my healthiest year.",
      nextLine: "What were you thinking at the start of the year about your goals?",
    },
    {
      question: "What were you thinking at the start of the year about your goals?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking they looked unrealistic.",
      nextLine: "Do you usually come in for checkups every year?",
    },
    {
      question: "Do you usually come in for checkups every year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I never miss one.",
      nextLine: "Are you following any specific diet right now?",
    },
    {
      question: "Are you following any specific diet right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current/temporary): <b>am</b>.",
      model: "Yes, I am. I'm eating a lot cleaner these days.",
      nextLine: "Are you going to set new health goals for next year?",
    },
    {
      question: "Are you going to set new health goals for next year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>am</b>.",
      model: "Yes, I am. I'm definitely going to set new goals.",
      nextLine: "Will you keep up with your exercise routine?",
    },
    {
      question: "Will you keep up with your exercise routine?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll keep it up for sure.",
      nextLine: "What did we focus on most this year, do you remember?",
    },
    {
      question: "What did we focus on most this year, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>focused</b>.",
      model: "We focused on my sleep mostly.",
      nextLine: "That's exactly right. You've made real progress this year.",
    },
  ],

  retell: {
    prompt: "Retell the whole year from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this year. Tell me about your typical week, something you did recently for your health, and one plan you have for next year, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's your annual physical. I'm the doctor, let's look back on the whole year together."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a doctor genuinely reviewing the year's health picture."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole year together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole year again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this year specifically.",
      say: ["Forget this year. Tell me about your typical week, something you did recently for your health, and a plan for next year."],
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

// SHIFT, Job Interview Track, Lesson 5: "The 90-Day Check-In"
// Manager, capstone. Full mix of Present Simple, Present Continuous, Past
// Simple, Past Continuous, Present Perfect, Will/Going to.

export default {
  id: "interview-5",
  code: "L5",
  title: "The 90-Day Check-In",
  tenses: "Full Mix: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect",
  tag: "Interview",
  roles: { them: "Manager", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "The Quarterly Review",
    context: "It's been 90 days since you started. Your manager wants to check in on how it's going.",
  },

  scenarioSet: {
    say: "It's been 90 days since you started the job. Your manager is checking in on how things are going. No hints on which tense this time, you'll hear it and choose.",
  },

  chain: [
    {
      question: "So, how have the first 90 days been, did you enjoy them?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I really enjoyed them.",
      nextLine: "Have you ever started a job this fast-paced before?",
    },
    {
      question: "Have you ever started a job this fast-paced before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience): <b>haven't</b>.",
      model: "No, I haven't. This was a new pace for me.",
      nextLine: "What were you thinking on your first day?",
    },
    {
      question: "What were you thinking on your first day?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing thought at that moment): <b>was thinking</b>.",
      model: "I was thinking it looked overwhelming.",
      nextLine: "Do you usually take notes during meetings?",
    },
    {
      question: "Do you usually take notes during meetings?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It helps me keep track.",
      nextLine: "Are you working on any big projects right now?",
    },
    {
      question: "Are you working on any big projects right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future/current plan): <b>am</b>.",
      model: "Yes, I am. I'm leading a new client project.",
      nextLine: "Are you going to take on more responsibility next quarter?",
    },
    {
      question: "Are you going to take on more responsibility next quarter?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (intention): <b>am</b>.",
      model: "Yes, I am. I'm definitely going to take on more.",
      nextLine: "Will you keep me updated on your progress?",
    },
    {
      question: "Will you keep me updated on your progress?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll send updates every week.",
      nextLine: "What did we talk about most in your first week, do you remember?",
    },
    {
      question: "What did we talk about most in your first week, do you remember?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific occasion): <b>talked</b>.",
      model: "We talked about the team's goals mostly.",
      nextLine: "That's exactly right. You've done great work so far.",
    },
  ],

  retell: {
    prompt: "Retell the whole 90 days from start to finish, using whatever tenses feel natural. No hints this time.",
  },

  transfer: {
    question: "Forget this job. Tell me about your typical week, something you did recently, and one plan you have for next quarter, mixing tenses naturally.",
  },

  wrap: {
    prompt: "You've now practiced every tense pair across this track: present tenses, Past Simple vs Present Perfect, Past Simple vs Past Continuous, and Will vs Going to. Notice how naturally they mixed together just now, that's the real goal, not perfect isolated drills.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Frame this as the capstone: no tense hinted in advance, everything from the track can appear.",
      say: ["It's your 90-day check-in. I'm your manager, let's talk through how things have gone."],
      do: ["Let them know upfront this pulls from every tense in the track."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges mixing Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, and Will/Going to, unscaffolded.",
      say: ["Ask each question in character, like a genuinely supportive manager reviewing progress."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole 90 days together unaided, switching tenses naturally?",
      say: ["Now tell me about the whole 90 days again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Full mix, personal and unscripted, nothing to do with this job specifically.",
      say: ["Forget this job. Tell me about your typical week, something you did recently, and a plan for next quarter."],
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

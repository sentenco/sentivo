// SHIFT, Family & Home Life Track, Lesson 2: "Catching Up After School"
// Dad & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "family-2",
  code: "L2",
  title: "Catching Up After School",
  tenses: "Past Simple vs Present Perfect",
  tag: "Family",
  roles: { them: "Dad", me: "You" },
  themEmoji: "🧔",

  scene: {
    title: "The Front Hall, After School",
    context: "You just got home from school. Dad wants to hear about your day.",
  },

  scenarioSet: {
    say: "You just walked in the door after school. Dad is catching up on your day and what's been going on lately.",
  },

  chain: [
    {
      question: "Hey, how was school today? Did you turn in your project?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I turned it in this morning.",
      nextLine: "Nice work. Have you gotten the grade back yet?",
    },
    {
      question: "Have you gotten the grade back yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (no specific time, still relevant now): <b>haven't</b>.",
      model: "No, I haven't. We won't know until next week.",
      nextLine: "Okay, fingers crossed. What did you do at lunch?",
    },
    {
      question: "What did you do at lunch?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>ate</b>.",
      model: "I ate lunch with my friends.",
      nextLine: "Have you made any new friends this year?",
    },
    {
      question: "Have you made any new friends this year?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (unfinished time period): <b>have</b>.",
      model: "Yes, I have. I met a new friend in art class.",
      nextLine: "That's great. Did anything interesting happen today?",
    },
    {
      question: "Did anything interesting happen today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, it did. We had a surprise fire drill.",
      nextLine: "Ha, exciting. Have you ever had a fire drill during a test before?",
    },
    {
      question: "Have you ever had a fire drill during a test before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. That was actually the first time.",
      nextLine: "What a day. When did you get home?",
    },
    {
      question: "When did you get home?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>got</b>.",
      model: "I got home a few minutes ago.",
      nextLine: "Have you eaten anything since school ended?",
    },
    {
      question: "Have you eaten anything since school ended?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"since,\" unfinished time up to now): <b>haven't</b>.",
      model: "No, I haven't. I'm starving.",
      nextLine: "Let's get you a snack, then.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What happened at school today? What have you done or experienced lately? What's still unknown?",
  },

  transfer: {
    question: "Forget school. Did you do anything interesting yesterday? And have you tried anything new this month?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I turned it in this morning, I got home a few minutes ago), Present Perfect for something connected to now with no exact time, or within a period that isn't finished yet (I haven't gotten the grade back, I've made a new friend this year). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a familiar after-school catch-up, warm and curious, not interrogative.",
      say: ["You just walked in the door after school. I'm your dad, I want to hear about your day."],
      do: ["Keep it under a minute, genuinely warm."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a parent who's actually curious about the day."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole catch-up together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with school today.",
      say: ["Forget school. Did you do anything interesting yesterday? Have you tried anything new this month?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time, or within a period that's still open."],
      do: ["Ask them to notice a real \"yet\" or \"ever\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

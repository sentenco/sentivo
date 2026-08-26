// SHIFT, School Day Track, Lesson 2: "The Group Project"
// Classmate & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "school-2",
  code: "L2",
  title: "The Group Project",
  tenses: "Past Simple vs Present Perfect",
  tag: "School",
  roles: { them: "Classmate", me: "You" },
  themEmoji: "🧑‍🎓",

  scene: {
    title: "Study Hall, Project Check-In",
    context: "You and a classmate are checking in on your shared group project.",
  },

  scenarioSet: {
    say: "You and a classmate are working on a group project together. They've stopped by your table to check on progress.",
  },

  chain: [
    {
      question: "Did you finish the research part?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I finished it last night.",
      nextLine: "Nice. Have you started the slides yet?",
    },
    {
      question: "Have you started the slides yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (no specific time, still relevant now): <b>haven't</b>.",
      model: "No, I haven't. I'm doing that tonight.",
      nextLine: "Okay, no rush. What did you find in your research?",
    },
    {
      question: "What did you find in your research?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>found</b>.",
      model: "I found three good sources.",
      nextLine: "Have you ever done a project like this before?",
    },
    {
      question: "Have you ever done a project like this before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. This is actually my first big group project.",
      nextLine: "Same here. Did you talk to the teacher about the deadline?",
    },
    {
      question: "Did you talk to the teacher about the deadline?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I asked her this morning.",
      nextLine: "Have you emailed the rest of the group yet?",
    },
    {
      question: "Have you emailed the rest of the group yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. I'll do it after school.",
      nextLine: "Sounds good. When did you two split up the sections?",
    },
    {
      question: "When did you two split up the sections?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>split</b>.",
      model: "We split them up on Monday.",
      nextLine: "Have you finished your section completely?",
    },
    {
      question: "Have you finished your section completely?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (recent, still-open time period): <b>have</b>.",
      model: "Yes, I have. I finished it this afternoon.",
      nextLine: "Great, we're actually ahead of schedule.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What did you finish? What have you done or not done yet? What's still left?",
  },

  transfer: {
    question: "Forget the project. Did you finish anything yesterday? And have you tried anything new this month?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I finished it last night, we split them up on Monday), Present Perfect for something connected to now with no exact time, or within a period that isn't finished yet (I haven't started the slides yet, I've finished my section). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a familiar group-project check-in, collaborative and practical.",
      say: ["You're working on a group project together. I'm your classmate, I've stopped by to check on progress."],
      do: ["Keep it under a minute, businesslike but friendly."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a classmate genuinely tracking progress."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole check-in together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with the project.",
      say: ["Forget the project. Did you finish anything yesterday? Have you tried anything new this month?"],
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

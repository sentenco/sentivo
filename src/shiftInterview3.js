// SHIFT, Job Interview Track, Lesson 3: "Tell Me About a Time..."
// Interviewer & candidate. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "interview-3",
  code: "L3",
  title: "Tell Me About a Time...",
  tenses: "Past Continuous vs Past Simple",
  tag: "Interview",
  roles: { them: "Interviewer", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "The Behavioral Question",
    context: "The interviewer asks you to describe a difficult situation from a past job.",
  },

  scenarioSet: {
    say: "The interviewer wants to hear about a real challenge you faced at work. Walk them through exactly what happened.",
  },

  chain: [
    {
      question: "Tell me about a time something went wrong at work. What happened?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>cancelled</b>.",
      model: "A client cancelled a project last minute.",
      nextLine: "What were you working on when it happened?",
    },
    {
      question: "What were you working on when it happened?",
      shortAnswer: false,
      clue: "Past Continuous (in progress when interrupted): <b>was finishing</b>.",
      model: "I was finishing the final report.",
      nextLine: "Did you tell your manager right away?",
    },
    {
      question: "Did you tell your manager right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I told her immediately.",
      nextLine: "Was your team relying on that project at the time?",
    },
    {
      question: "Was your team relying on that project at the time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background state): <b>was</b>.",
      model: "Yes, they were. Everyone was counting on it.",
      nextLine: "Did you come up with a solution?",
    },
    {
      question: "Did you come up with a solution?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I found a new client within a week.",
      nextLine: "What were you thinking during that first difficult conversation?",
    },
    {
      question: "What were you thinking during that first difficult conversation?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking we'd lose a lot of money.",
      nextLine: "Did the situation improve after that?",
    },
    {
      question: "Did the situation improve after that?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, it did. It actually improved a lot.",
      nextLine: "Were you nervous presenting the update to your team?",
    },
    {
      question: "Were you nervous presenting the update to your team?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was nervous the whole meeting.",
      nextLine: "That's a great example, thank you for sharing that.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened? What were you doing when it happened? How did it get resolved?",
  },

  transfer: {
    question: "Forget that story. Tell me about a different time something didn't go as planned. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (cancelled, told, found), Past Continuous for what was already in progress around them (was finishing, was thinking, was nervous). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real behavioral-interview moment, this is the classic \"tell me about a time\" question.",
      say: ["I'm your interviewer. I want to hear about a real challenge from a past job, walk me through it."],
      do: ["Keep it professional and genuinely curious, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, like an interviewer drawing out the full story."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole story together unaided?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a different personal story from their own experience.",
      say: ["Forget that story. Tell me about a different time something didn't go as planned. What were you doing when it happened?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple moves the story forward. Past Continuous sets the scene around it."],
      do: ["Ask them to notice a real moment this week where two things were happening at once."],
      timing: "1 min",
    },
  },
};

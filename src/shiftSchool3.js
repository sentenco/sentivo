// SHIFT, School Day Track, Lesson 3: "Exam Day Nerves"
// Friend & teen. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "school-3",
  code: "L3",
  title: "Exam Day Nerves",
  tenses: "Past Continuous vs Past Simple",
  tag: "School",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Outside the Exam Room",
    context: "You just walked out of a big exam. Your friend is waiting to hear how it went.",
  },

  scenarioSet: {
    say: "You just finished a big exam. Your friend was waiting outside and wants to hear everything about it.",
  },

  chain: [
    {
      question: "How did it go? Did you finish in time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I finished with five minutes to spare.",
      nextLine: "Nice. What were you doing right before the exam started?",
    },
    {
      question: "What were you doing right before the exam started?",
      shortAnswer: false,
      clue: "Past Continuous (in progress right before the exam): <b>was reviewing</b>.",
      model: "I was reviewing my notes one last time.",
      nextLine: "Did you get nervous during the exam?",
    },
    {
      question: "Did you get nervous during the exam?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I got nervous on the first question.",
      nextLine: "What were you thinking when you saw the first question?",
    },
    {
      question: "What were you thinking when you saw the first question?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking it looked way too hard.",
      nextLine: "Did the teacher give you extra time?",
    },
    {
      question: "Did the teacher give you extra time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, she didn't. We had the normal amount.",
      nextLine: "Was everyone else struggling too, or just you?",
    },
    {
      question: "Was everyone else struggling too, or just you?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background state): <b>was</b>.",
      model: "Yes, they were. Everyone was stressing out.",
      nextLine: "Did you check your answers before turning it in?",
    },
    {
      question: "Did you check your answers before turning it in?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I checked them twice.",
      nextLine: "Were you shaking when you turned it in?",
    },
    {
      question: "Were you shaking when you turned it in?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was shaking the whole walk out.",
      nextLine: "Well, it's over now. Let's go celebrate.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened during the exam? What were you doing right before it started? How did it end?",
  },

  transfer: {
    question: "Forget the exam. Tell me about a time you were nervous about something else. What were you doing right before it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (finished, checked, turned in), Past Continuous for what was already in progress around them (was reviewing, was thinking, was shaking). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set the stakes fast, a big exam just ended and a friend is eager to hear about it.",
      say: ["You just walked out of a big exam. I'm your friend, I was waiting outside for you."],
      do: ["Keep it energetic and warm, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely eager to hear the play-by-play."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole exam story together unaided?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with the exam.",
      say: ["Forget the exam. Tell me about a time you were nervous about something else. What were you doing right before it happened?"],
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

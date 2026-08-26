// SHIFT, Movies Track, Lesson 3: "The Scary Part"
// Friend & teen. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "movies-3",
  code: "L3",
  title: "The Scary Part",
  tenses: "Past Continuous vs Past Simple",
  tag: "Movies",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🍿",

  scene: {
    title: "Recapping the Jump Scare",
    context: "There was one scene that got everyone. A friend wants to relive it.",
  },

  scenarioSet: {
    say: "There was one scene in the movie that made everyone jump. A friend wants to relive exactly what happened.",
  },

  chain: [
    {
      question: "What happened right before the jump scare?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>stopped</b>.",
      model: "The music suddenly stopped.",
      nextLine: "What were you doing at that exact moment?",
    },
    {
      question: "What were you doing at that exact moment?",
      shortAnswer: false,
      clue: "Past Continuous (in progress at that moment): <b>was eating</b>.",
      model: "I was eating popcorn.",
      nextLine: "Did you scream?",
    },
    {
      question: "Did you scream?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I screamed really loud.",
      nextLine: "Were you holding your popcorn when it happened?",
    },
    {
      question: "Were you holding your popcorn when it happened?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing state): <b>was</b>.",
      model: "Yes, I was. I dropped it everywhere.",
      nextLine: "Did the people next to you jump too?",
    },
    {
      question: "Did the people next to you jump too?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, they did. Everyone jumped.",
      nextLine: "What were you thinking right before it happened?",
    },
    {
      question: "What were you thinking right before it happened?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking something was about to happen.",
      nextLine: "Did you close your eyes after that?",
    },
    {
      question: "Did you close your eyes after that?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I closed them for the next scene.",
      nextLine: "Were you still shaking after the scene ended?",
    },
    {
      question: "Were you still shaking after the scene ended?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was shaking for a while.",
      nextLine: "Ha, that was the best part of the whole movie.",
    },
  ],

  retell: {
    prompt: "Retell the whole scene from the start, no help this time. What happened right before it? What were you doing at that moment? What did you do right after?",
  },

  transfer: {
    question: "Forget the jump scare. Tell me about a time something startled you somewhere else. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (stopped, screamed, closed), Past Continuous for what was already in progress around them (was eating, was thinking, was shaking). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a fun, excitable tone, this is reliving the best/scariest moment, not a serious debrief.",
      say: ["There was a scene that made everyone jump. I'm your friend, let's relive it play by play."],
      do: ["Keep it playful and energetic, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely excited to relive the scare."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole scene together unaided?",
      say: ["Now tell me the whole scene again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with this movie.",
      say: ["Forget the jump scare. Tell me about a time something startled you somewhere else. What were you doing when it happened?"],
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

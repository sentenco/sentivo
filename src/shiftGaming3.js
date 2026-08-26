// SHIFT, Online & Gaming Track, Lesson 3: "That Was Close"
// Teammate & teen. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "gaming-3",
  code: "L3",
  title: "That Was Close",
  tenses: "Past Continuous vs Past Simple",
  tag: "Gaming",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🎮",

  scene: {
    title: "Post-Match Debrief",
    context: "You just finished a close match. A teammate wants to break down what happened.",
  },

  scenarioSet: {
    say: "You just finished an intense, close match. A teammate wants to break down exactly what happened at the end.",
  },

  chain: [
    {
      question: "What happened in that last round?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>won</b>.",
      model: "We won by one point.",
      nextLine: "What were you doing when the timer ran out?",
    },
    {
      question: "What were you doing when the timer ran out?",
      shortAnswer: false,
      clue: "Past Continuous (in progress when interrupted): <b>was defending</b>.",
      model: "I was defending the last point.",
      nextLine: "Did you see the enemy coming?",
    },
    {
      question: "Did you see the enemy coming?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I saw them at the last second.",
      nextLine: "Were you low on health at that point?",
    },
    {
      question: "Were you low on health at that point?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing state): <b>was</b>.",
      model: "Yes, I was. I was almost dead.",
      nextLine: "Did you use your special ability?",
    },
    {
      question: "Did you use your special ability?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I used it right on time.",
      nextLine: "What were you thinking in that final second?",
    },
    {
      question: "What were you thinking in that final second?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking we were about to lose.",
      nextLine: "Did the rest of the team back you up?",
    },
    {
      question: "Did the rest of the team back you up?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, they did. They rushed in right after.",
      nextLine: "Were you shaking after that round ended?",
    },
    {
      question: "Were you shaking after that round ended?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was shaking for a solid minute.",
      nextLine: "That was insane. Let's clip that for the highlights.",
    },
  ],

  retell: {
    prompt: "Retell the whole final round from the start, no help this time. What happened? What were you doing when it got close? How did it end?",
  },

  transfer: {
    question: "Forget the match. Tell me about a time something close or intense happened somewhere else. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (won, saw, used), Past Continuous for what was already in progress around them (was defending, was thinking, was shaking). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set the energy high, a close match just ended and the adrenaline is still up.",
      say: ["That match just ended, close one. I'm your teammate, let's break down exactly what happened."],
      do: ["Keep it energetic, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely hyped to relive the final round."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole final-round story together unaided?",
      say: ["Now tell me the whole thing again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with this match.",
      say: ["Forget the match. Tell me about a time something intense happened somewhere else. What were you doing when it happened?"],
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

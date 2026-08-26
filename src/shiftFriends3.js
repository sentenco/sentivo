// SHIFT, Friend Group Hangout Track, Lesson 3: "The Falling Out"
// Friend & teen. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "friends-3",
  code: "L3",
  title: "The Falling Out",
  tenses: "Past Continuous vs Past Simple",
  tag: "Friends",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "By the Lockers, Making Up",
    context: "You and a friend had a small argument. You're talking it through.",
  },

  scenarioSet: {
    say: "You and a friend had a small argument recently. You've decided to talk it through and figure out what actually happened.",
  },

  chain: [
    {
      question: "What happened between us at the party?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>said</b>.",
      model: "You said something that upset me.",
      nextLine: "What were you feeling when I said it?",
    },
    {
      question: "What were you feeling when I said it?",
      shortAnswer: false,
      clue: "Past Continuous (in progress at that moment): <b>was feeling</b>.",
      model: "I was feeling really embarrassed.",
      nextLine: "Did you say anything back?",
    },
    {
      question: "Did you say anything back?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I said something back too.",
      nextLine: "Were you already upset about something else that night?",
    },
    {
      question: "Were you already upset about something else that night?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background state): <b>was</b>.",
      model: "Yes, I was. I was already stressed about something.",
      nextLine: "Did you talk to anyone else about it after?",
    },
    {
      question: "Did you talk to anyone else about it after?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I talked to my sister about it.",
      nextLine: "What were you thinking on the walk home?",
    },
    {
      question: "What were you thinking on the walk home?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking I should text you and apologize.",
      nextLine: "Did you end up texting me that night?",
    },
    {
      question: "Did you end up texting me that night?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. I waited until morning.",
      nextLine: "Were you nervous about how I would react?",
    },
    {
      question: "Were you nervous about how I would react?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was nervous the whole morning.",
      nextLine: "Well, I'm really glad we're talking now.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened between you two? What were you feeling? What did you do about it?",
  },

  transfer: {
    question: "Forget the argument. Tell me about a time you disagreed with someone else. What were you feeling when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (said, talked, waited), Past Continuous for what was already in progress around them (was feeling, was thinking, was nervous). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an honest, low-drama tone, this is a repair conversation, not a reenactment of the fight.",
      say: ["You and I had a small argument recently. I'm your friend, let's talk it through."],
      do: ["Keep it warm and a little vulnerable, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely trying to understand what happened and why."],
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
      goal: "Same tense pair, a personal story with nothing to do with this argument.",
      say: ["Forget the argument. Tell me about a time you disagreed with someone else. What were you feeling when it happened?"],
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

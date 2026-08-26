// SHIFT, Friend Group Hangout Track, Lesson 2: "The Party Recap"
// Friend & teen. Past Simple (finished, specific-time past) vs Present Perfect
// (experience/recent change, no specific time).

export default {
  id: "friends-2",
  code: "L2",
  title: "The Party Recap",
  tenses: "Past Simple vs Present Perfect",
  tag: "Friends",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "The Morning After",
    context: "You're catching up with a friend the day after a big party.",
  },

  scenarioSet: {
    say: "It's the day after a big party. You're catching up with a friend about how it went.",
  },

  chain: [
    {
      question: "Did you have fun at the party?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past moment): <b>did</b>.",
      model: "Yes, I did. I had a great time.",
      nextLine: "Have you talked to Maria since then?",
    },
    {
      question: "Have you talked to Maria since then?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (no specific time, still relevant now): <b>haven't</b>.",
      model: "No, I haven't. I'll text her later.",
      nextLine: "What did you think of the music?",
    },
    {
      question: "What did you think of the music?",
      shortAnswer: false,
      clue: "Past Simple (specific past event): <b>thought</b>.",
      model: "I thought it was really good.",
      nextLine: "Have you seen the photos from last night yet?",
    },
    {
      question: "Have you seen the photos from last night yet?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (\"yet,\" no specific time): <b>haven't</b>.",
      model: "No, I haven't. Send them to me.",
      nextLine: "What time did you leave?",
    },
    {
      question: "What time did you leave?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>left</b>.",
      model: "I left around midnight.",
      nextLine: "Have you ever stayed at a party that late before?",
    },
    {
      question: "Have you ever stayed at a party that late before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (life experience, \"ever\"): <b>haven't</b>.",
      model: "No, I haven't. That was a first.",
      nextLine: "Did anything funny happen while you were there?",
    },
    {
      question: "Did anything funny happen while you were there?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple (specific past event): <b>did</b>.",
      model: "Yes, it did. Someone knocked over the snack table.",
      nextLine: "Have you heard from anyone else who was there?",
    },
    {
      question: "Have you heard from anyone else who was there?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect (recent, connected to now): <b>have</b>.",
      model: "Yes, I have. A few people already texted me.",
      nextLine: "Sounds like it was a night to remember.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What happened at the party? What have you heard or seen since then? What's still left to catch up on?",
  },

  transfer: {
    question: "Forget the party. Did you do anything fun yesterday? And have you heard from any friends today?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for a specific finished moment (I had a great time, I left around midnight), Present Perfect for something connected to now with no exact time (I haven't talked to Maria yet, I've heard from a few people). Before next lesson, notice a moment where \"yet\" or \"ever\" would naturally show up.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a familiar morning-after catch-up, warm and gossipy, not interrogative.",
      say: ["It's the morning after a big party. I'm your friend, I want to hear all about it."],
      do: ["Keep it under a minute, genuinely curious."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific finished moment) and Present Perfect (an experience or unfinished-time-period change).",
      say: ["Ask each question in character, like a friend eager for the full recap."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole recap together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal question with nothing to do with the party.",
      say: ["Forget the party. Did you do anything fun yesterday? Have you heard from any friends today?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"yet\" or \"ever\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

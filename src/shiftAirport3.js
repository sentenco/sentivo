// SHIFT, Airport Track, Lesson 3: "The Missing Bag"
// Airline Staff & traveler. Past Continuous (was in progress) vs Past Simple (completed event).

export default {
  id: "airport-3",
  code: "L3",
  title: "The Missing Bag",
  tenses: "Past Continuous vs Past Simple",
  tag: "Airport",
  roles: { them: "Airline Staff", me: "You" },
  themEmoji: "🛫",

  scene: {
    title: "Baggage Claim",
    context: "Your bag didn't arrive. You're at the baggage counter explaining what happened.",
  },

  scenarioSet: {
    say: "Your bag didn't show up on the carousel. You're at the baggage counter, and staff want to understand exactly what happened.",
  },

  chain: [
    {
      question: "When did you first notice your bag was missing?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>noticed</b>.",
      model: "I noticed it right after the flight landed.",
      nextLine: "What were you doing while you waited at the carousel?",
    },
    {
      question: "What were you doing while you waited at the carousel?",
      shortAnswer: false,
      clue: "Past Continuous (in progress while waiting): <b>was checking</b>.",
      model: "I was checking my phone.",
      nextLine: "Did you check your bag at your original airport?",
    },
    {
      question: "Did you check your bag at your original airport?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I checked it there.",
      nextLine: "Were you connecting through another airport?",
    },
    {
      question: "Were you connecting through another airport?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing situation): <b>was</b>.",
      model: "Yes, I was. I was connecting through Denver.",
      nextLine: "Did you have a short layover?",
    },
    {
      question: "Did you have a short layover?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I had about forty minutes.",
      nextLine: "Were other bags coming through when you were waiting?",
    },
    {
      question: "Were other bags coming through when you were waiting?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background action): <b>were</b>.",
      model: "Yes, they were. Bags were still coming out.",
      nextLine: "Did you fill out a form at the counter already?",
    },
    {
      question: "Did you fill out a form at the counter already?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. This is my first stop.",
      nextLine: "Were you worried the bag was lost for good?",
    },
    {
      question: "Were you worried the bag was lost for good?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was pretty worried.",
      nextLine: "Let's fill out this form and track it down for you.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. When did you notice the bag was missing? What were you doing at the time? What have you done so far?",
  },

  transfer: {
    question: "Forget the bag. Tell me about a time you lost something or noticed something missing somewhere else. What were you doing when you noticed?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (noticed, checked, had), Past Continuous for what was already in progress around them (was checking, was connecting, was worried). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a calm, helpful tone, staff are trying to solve the problem, not deflect it.",
      say: ["Your bag didn't show up. I'm airline staff, I want to understand exactly what happened."],
      do: ["Keep it calm and solution-focused, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely trying to trace the bag's journey."],
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
      goal: "Same tense pair, a personal story with nothing to do with this bag.",
      say: ["Forget the bag. Tell me about a time you lost something somewhere else. What were you doing when you noticed?"],
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

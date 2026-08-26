// SHIFT, Restaurant Track, Lesson 2: "You Again?"
// Waiter & a returning regular. Past Simple (finished, specific-time past)
// vs Present Perfect (experience/recent change, no specific time).

export default {
  id: "restaurant-2",
  code: "L2",
  title: "You Again?",
  tenses: "Past Simple vs Present Perfect",
  tag: "Restaurant",
  roles: { them: "Waiter", me: "You" },
  themEmoji: "🧑‍🍳",

  scene: {
    title: "Table 7, Regular Spot",
    context: "You're a regular here. The waiter remembers you and wants to catch up.",
  },

  scenarioSet: {
    say: "You've been to this restaurant many times. The waiter recognizes you and is catching up while you settle in.",
  },

  chain: [
    {
      question: "Hey, welcome back! Did you enjoy the dish you had last time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. It was delicious.",
      nextLine: "Glad to hear it. Have you tried anything new since then?",
    },
    {
      question: "Have you tried anything new since then?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect: <b>haven't</b>.",
      model: "No, I haven't. I always order the same thing.",
      nextLine: "Ha, fair enough. What did you order the last time you were here?",
    },
    {
      question: "What did you order the last time you were here?",
      shortAnswer: false,
      clue: "Past Simple (finished, specific past visit): <b>ordered</b>.",
      model: "I ordered the grilled salmon.",
      nextLine: "Good choice. Have you been anywhere else good recently?",
    },
    {
      question: "Have you been anywhere else good recently?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect: <b>have</b>.",
      model: "Yes, I have. I tried a new Italian place.",
      nextLine: "Oh nice, did you like it?",
    },
    {
      question: "Did you like it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>didn't</b>.",
      model: "No, I didn't. It wasn't as good as here.",
      nextLine: "Good answer. Has anything changed in your life since we last saw you?",
    },
    {
      question: "Has anything changed in your life since we last saw you?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect: <b>has</b>.",
      model: "Yes, it has. I started a new job.",
      nextLine: "Congratulations! When did you start?",
    },
    {
      question: "When did you start?",
      shortAnswer: false,
      clue: "Past Simple (specific past time): <b>started</b> + when.",
      model: "I started two weeks ago.",
      nextLine: "Exciting. Have you had lunch yet today?",
    },
    {
      question: "Have you had lunch yet today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect: <b>haven't</b> yet.",
      model: "No, I haven't. That's why I'm here!",
      nextLine: "Perfect, let's get you fed then.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation in one go, no help this time. What did you order last time? What have you tried since then? What's new in your life?",
  },

  transfer: {
    question: "Forget the restaurant. Have you done anything new this month? And what did you do last weekend?",
  },

  wrap: {
    prompt: "One thing to remember: use Past Simple for finished actions at a specific past time (I ordered..., I started two weeks ago), and Present Perfect for experiences or recent changes with no specific time attached (I've tried..., I've started...). Before next lesson, notice a moment where you'd naturally choose \"have you ever\" over \"did you.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Establish familiarity fast, this is a returning customer, not a first visit.",
      say: ["You've been here many times before. I'm your waiter and I remember you, let's catch up while you settle in."],
      do: ["Keep it warm and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (a specific past visit/action) and Present Perfect (an experience or recent change with no specific time).",
      say: ["Ask each question in character, genuinely curious, like you actually remember this customer."],
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
      goal: "Same tense pair, a personal question with nothing to do with the restaurant.",
      say: ["Forget the restaurant. Have you done anything new this month? What did you do last weekend?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple for a specific past moment. Present Perfect for an experience or change with no specific time."],
      do: ["Ask them to notice a real \"have you ever\" vs \"did you\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

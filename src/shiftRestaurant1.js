// SHIFT, Restaurant Track, Lesson 1: "First Time Here?"
// Waiter & new customer. Present Simple (habit/fact) vs Present Continuous
// (happening right now), plus a Present Perfect opener. Teacher-marked
// live-speaking mechanic, see Shift.jsx for how `chain` is played.

export default {
  id: "restaurant-1",
  code: "L1",
  title: "First Time Here?",
  tenses: "Present Simple vs Present Continuous",
  tag: "Restaurant",
  roles: { them: "Waiter", me: "You" },
  themEmoji: "🧑‍🍳",

  scene: {
    title: "Table 4, Casual Dining",
    context: "You're a new customer. The waiter is making conversation while you decide what to order.",
  },

  scenarioSet: {
    say: "You're at a restaurant for the first time. The waiter is friendly and chatty while you look at the menu. Answer naturally, out loud, as yourself at this table.",
  },

  // The Cold Chain: each question's tense stays hidden from the student.
  // The teacher types what the student actually said and marks it. The
  // clue only appears if the teacher taps it, and it changes per question.
  chain: [
    {
      question: "Have you been here before?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Perfect: <b>haven't</b>.",
      model: "No, I haven't. This is my first time.",
      nextLine: "Welcome! So, what do you usually order at places like this?",
    },
    {
      question: "So, what do you usually order at places like this?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>usually</b> + base verb.",
      model: "I usually order pasta, something simple.",
      nextLine: "Nice choice. Are you thinking about pasta tonight too, or something else?",
    },
    {
      question: "Are you thinking about pasta tonight too, or something else?",
      shortAnswer: false,
      clue: "Present Continuous (happening right now): am/is/are + verb-<b>ing</b>.",
      model: "I'm thinking about the chicken tonight, actually.",
      nextLine: "Great pick. Quick question, do you like spicy food?",
    },
    {
      question: "Do you like spicy food?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple: <b>do/don't</b>.",
      model: "Yes, I do. I love spicy food.",
      nextLine: "Good to know. Are you eating alone today?",
    },
    {
      question: "Are you eating alone today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous: <b>am/'m not</b>.",
      model: "No, I'm not. I'm eating with a friend.",
      nextLine: "Nice! Does your friend eat meat, or should I mention our vegetarian options?",
    },
    {
      question: "Does your friend eat meat, or should I mention our vegetarian options?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple: <b>doesn't</b>.",
      model: "No, she doesn't. She's vegetarian.",
      nextLine: "Perfect, I'll bring that menu too. Is she joining you soon?",
    },
    {
      question: "Is she joining you soon?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous: <b>is</b>.",
      model: "Yes, she is. She's parking the car right now.",
      nextLine: "No rush at all. Last thing, what do you usually drink with dinner?",
    },
    {
      question: "What do you usually drink with dinner?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>usually</b> + base verb.",
      model: "I usually drink water, but I'll try your lemonade tonight.",
      nextLine: "Great choice. I'll get that started for you both.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation in one go, no help this time. What did the waiter ask you? What do you usually order? What are you thinking about tonight? Who's joining you, and what is she doing right now?",
  },

  transfer: {
    question: "Forget the restaurant for a second. Tell me: what do you usually do after school or work? And what are you doing this weekend?",
  },

  wrap: {
    prompt: "One thing to remember: use Present Simple for what's usually true (I usually order...), and Present Continuous for what's happening right now or this week (I'm thinking about..., I'm eating with...). Before next lesson, notice one moment where you almost mixed the two up in real life.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set the scene fast, don't over-explain. The student should feel like they just sat down, not like class started.",
      say: ["You're at a restaurant for the first time. I'm your waiter. Just answer naturally, like you're really here."],
      do: ["Keep this under a minute. Don't preview the grammar focus, let the chain surface it naturally."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 connected exchanges, alternating Present Simple (habit/fact) and Present Continuous (right now), plus one Present Perfect opener. Type what the student says, mark it, only reveal the clue if they're stuck.",
      say: ["Ask each question as written, in character, warm and chatty, not like you're reading a test."],
      do: ["Type the student's actual words into the field, don't paraphrase.", "Only tap Show clue if they're genuinely stuck, not automatically on every miss.", "The next question only appears once you mark an answer correct, retry as many times as needed."],
      timing: "12-15 min",
    },
    retell: {
      goal: "The real diagnostic: can they hold the whole story together unaided, no clues, no question-by-question prompting?",
      say: ["Now tell me the whole thing again, from the start, in your own words."],
      do: ["Don't interrupt mid-retell. Note tense slips to mention after, not during."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Prove the tense pair survived outside this one scene, a personal question with nothing to do with the restaurant.",
      say: ["Forget the restaurant. What do you usually do after school or work? What are you doing this weekend?"],
      do: ["Same tense pair, brand new topic, this is what tells you if it actually landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway, not a summary of everything covered.",
      say: ["Present Simple for what's usually true. Present Continuous for what's happening right now or this week."],
      do: ["Ask them to notice one real mix-up moment before next lesson, that's the homework."],
      timing: "1 min",
    },
  },
};

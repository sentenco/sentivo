// SHIFT, Restaurant Track, Lesson 3: "Something's Wrong With This Order"
// Customer & manager, a complaint scene. Past Continuous (was in progress)
// vs Past Simple (completed event).

export default {
  id: "restaurant-3",
  code: "L3",
  title: "Something's Wrong With This Order",
  tenses: "Past Continuous vs Past Simple",
  tag: "Restaurant",
  roles: { them: "Manager", me: "You" },
  themEmoji: "🧑‍💼",

  scene: {
    title: "Table 9, A Complaint",
    context: "Your order arrived wrong. The manager comes over to sort it out.",
  },

  scenarioSet: {
    say: "Something went wrong with your order. The manager has come to your table to understand what happened and fix it.",
  },

  chain: [
    {
      question: "I'm so sorry about this, what happened with your order?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>brought</b>.",
      model: "The waiter brought the wrong dish.",
      nextLine: "I see. What were you doing when it arrived?",
    },
    {
      question: "What were you doing when it arrived?",
      shortAnswer: false,
      clue: "Past Continuous (in progress, interrupted by the arrival): <b>was talking</b>.",
      model: "I was talking to my friend when it arrived.",
      nextLine: "Did you notice the mistake right away?",
    },
    {
      question: "Did you notice the mistake right away?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I noticed immediately.",
      nextLine: "What were you expecting instead?",
    },
    {
      question: "What were you expecting instead?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was expecting</b>.",
      model: "I was expecting the chicken pasta.",
      nextLine: "Did you say anything to the waiter?",
    },
    {
      question: "Did you say anything to the waiter?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I told him right away.",
      nextLine: "Were you waiting a long time before someone helped?",
    },
    {
      question: "Were you waiting a long time before someone helped?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (duration in progress): <b>was</b>.",
      model: "Yes, I was. I was waiting for almost ten minutes.",
      nextLine: "What happened after that?",
    },
    {
      question: "What happened after that?",
      shortAnswer: false,
      clue: "Past Simple (completed events): <b>apologized</b>, <b>called</b>.",
      model: "He apologized and called you over.",
      nextLine: "Was the kitchen busy when this happened, do you know?",
    },
    {
      question: "Was the kitchen busy when this happened, do you know?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (background state): <b>was</b>.",
      model: "Yes, it was. It was very busy tonight.",
      nextLine: "Thank you for explaining, let me fix this for you right now.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened with your order? What were you doing when it arrived? What did you do about it?",
  },

  transfer: {
    question: "Forget the restaurant. Tell me about a time something went wrong somewhere else. What were you doing when it happened, and what did you do next?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (brought, told, apologized), Past Continuous for what was already in progress around them (was talking, was waiting, was busy). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set the stakes fast, something went wrong and the manager is here to fix it.",
      say: ["Something went wrong with your order. I'm the manager, I've come to your table to find out what happened."],
      do: ["Keep it under a minute, concerned but not dramatic."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely trying to understand the sequence of events."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole complaint story together unaided?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with the restaurant.",
      say: ["Forget the restaurant. Tell me about a time something went wrong somewhere else. What were you doing when it happened?"],
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

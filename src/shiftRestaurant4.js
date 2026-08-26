// SHIFT, Restaurant Track, Lesson 4: "Booking the Group Dinner"
// Two coworkers planning a reservation. Will (spontaneous decision/prediction)
// vs Going to (plan already decided).

export default {
  id: "restaurant-4",
  code: "L4",
  title: "Booking the Group Dinner",
  tenses: "Will vs Going to",
  tag: "Restaurant",
  roles: { them: "Coworker", me: "You" },
  themEmoji: "🧑‍💻",

  scene: {
    title: "The Break Room",
    context: "You and a coworker are planning a group dinner reservation.",
  },

  scenarioSet: {
    say: "You and a coworker are organizing a group dinner for the team. Talk through the plans together.",
  },

  chain: [
    {
      question: "Are we still going to book that restaurant for Friday?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to call them today.",
      nextLine: "Great. Who's going to send the invite to everyone?",
    },
    {
      question: "Who's going to send the invite to everyone?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to send</b>.",
      model: "I'm going to send it after lunch.",
      nextLine: "How many people do you think will come?",
    },
    {
      question: "How many people do you think will come?",
      shortAnswer: false,
      clue: "Will (prediction/guess): <b>will come</b>.",
      model: "I think about ten people will come.",
      nextLine: "If they don't have a table for ten, what will we do?",
    },
    {
      question: "If they don't have a table for ten, what will we do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will split</b> / <b>'ll split</b>.",
      model: "We'll just split into two tables.",
      nextLine: "Good call. Are you going to invite the new intern too?",
    },
    {
      question: "Are you going to invite the new intern too?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to ask her now.",
      nextLine: "Perfect. Will you text me the final headcount tonight?",
    },
    {
      question: "Will you text me the final headcount tonight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise/offer): <b>will</b>.",
      model: "Yes, I will. I'll send it by 6.",
      nextLine: "What are you going to order, do you already know?",
    },
    {
      question: "What are you going to order, do you already know?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to try</b>.",
      model: "I'm going to try the steak.",
      nextLine: "If it rains Friday, will the plan change?",
    },
    {
      question: "If it rains Friday, will the plan change?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>won't</b>.",
      model: "No, it won't. We booked an indoor table.",
      nextLine: "Good thinking, sounds like we're all set.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the reservation? Who will come? What did you decide about the table?",
  },

  transfer: {
    question: "Forget the dinner. What are you going to do after work today? And what do you think the weather will be like tomorrow?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to call them), and \"will\" for decisions made in the moment or predictions (I'll check, I think they'll come). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real planning task, not an abstract grammar drill.",
      say: ["We're organizing a group dinner together. I'm your coworker, let's plan it out."],
      do: ["Keep it collaborative and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a real coworker actually planning this dinner."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole plan together unaided?",
      say: ["Now tell me the whole plan again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with the dinner.",
      say: ["Forget the dinner. What are you going to do after work? What do you think the weather will be like tomorrow?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Going to for a plan already decided. Will for a decision made right now or a prediction."],
      do: ["Ask them to notice a real plan-vs-spontaneous moment before next lesson."],
      timing: "1 min",
    },
  },
};

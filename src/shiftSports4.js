// SHIFT, Sports Team Track, Lesson 4: "Planning the Tournament"
// Teammate & teen. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "sports-4",
  code: "L4",
  title: "Planning the Tournament",
  tenses: "Will vs Going to",
  tag: "Sports",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🏃",

  scene: {
    title: "Team Group Chat",
    context: "Your team is planning logistics for the upcoming tournament.",
  },

  scenarioSet: {
    say: "Your team is planning the upcoming tournament together. You're chatting with a teammate about the details.",
  },

  chain: [
    {
      question: "Are we still going to carpool to the tournament?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to drive this time.",
      nextLine: "Good. Who's going to bring the extra water bottles?",
    },
    {
      question: "Who's going to bring the extra water bottles?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to bring</b>.",
      model: "I'm going to bring a whole case.",
      nextLine: "How many teams do you think will show up?",
    },
    {
      question: "How many teams do you think will show up?",
      shortAnswer: false,
      clue: "Will (prediction/guess): <b>will show up</b>.",
      model: "I think about eight teams will show up.",
      nextLine: "If we win the first round, what will we do to celebrate?",
    },
    {
      question: "If we win the first round, what will we do to celebrate?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will grab</b> / <b>'ll grab</b>.",
      model: "We'll just grab pizza after.",
      nextLine: "Good plan. Are you going to warm up early before our first match?",
    },
    {
      question: "Are you going to warm up early before our first match?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to get there an hour early.",
      nextLine: "Smart. Will you save me a spot on the bus?",
    },
    {
      question: "Will you save me a spot on the bus?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll save the seat next to me.",
      nextLine: "What are you going to eat before the games start?",
    },
    {
      question: "What are you going to eat before the games start?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to eat</b>.",
      model: "I'm going to eat a big breakfast.",
      nextLine: "If it's raining that day, will the tournament still happen?",
    },
    {
      question: "If it's raining that day, will the tournament still happen?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, it will. It's an indoor tournament.",
      nextLine: "Perfect, I think we're ready.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the tournament? What will happen if things go wrong? What did you decide?",
  },

  transfer: {
    question: "Forget the tournament. What are you going to do this weekend? And what do you think will happen at our next practice?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to drive, I'm going to eat a big breakfast), and \"will\" for decisions made in the moment or predictions (we'll grab pizza, I think eight teams will show up). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real logistics-planning task, not an abstract grammar drill.",
      say: ["We're planning the tournament together. I'm your teammate, let's sort out the details in chat."],
      do: ["Keep it collaborative and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a real teammate actually planning this tournament."],
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
      goal: "Same tense pair, personal questions with nothing to do with the tournament.",
      say: ["Forget the tournament. What are you going to do this weekend? What do you think will happen at our next practice?"],
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

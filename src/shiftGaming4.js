// SHIFT, Online & Gaming Track, Lesson 4: "Planning the Stream"
// Teammate & teen. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "gaming-4",
  code: "L4",
  title: "Planning the Stream",
  tenses: "Will vs Going to",
  tag: "Gaming",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🎮",

  scene: {
    title: "Group Chat, Setting It Up",
    context: "You and a teammate are planning a stream together for the weekend.",
  },

  scenarioSet: {
    say: "You and a teammate are planning to stream together this weekend. You're setting up the details in chat.",
  },

  chain: [
    {
      question: "Are we still going to stream on Saturday?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to set it up tonight.",
      nextLine: "Good. Who's going to host the stream?",
    },
    {
      question: "Who's going to host the stream?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to host</b>.",
      model: "I'm going to host it this time.",
      nextLine: "How many viewers do you think will show up?",
    },
    {
      question: "How many viewers do you think will show up?",
      shortAnswer: false,
      clue: "Will (prediction/guess): <b>will watch</b>.",
      model: "I think about fifty people will watch.",
      nextLine: "If the game crashes, what will we do?",
    },
    {
      question: "If the game crashes, what will we do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will switch</b> / <b>'ll switch</b>.",
      model: "We'll just switch to a different game.",
      nextLine: "Good backup plan. Are you going to invite the rest of the squad?",
    },
    {
      question: "Are you going to invite the rest of the squad?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to message them now.",
      nextLine: "Smart. Will you test your mic before we start?",
    },
    {
      question: "Will you test your mic before we start?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll test it right now.",
      nextLine: "What are you going to play first?",
    },
    {
      question: "What are you going to play first?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to start</b>.",
      model: "I'm going to start with ranked matches.",
      nextLine: "If we lose the first few games, will you keep streaming?",
    },
    {
      question: "If we lose the first few games, will you keep streaming?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, I will. We won't stop just because we lose.",
      nextLine: "Perfect, this is going to be a good one.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the stream? What will happen if things go wrong? What did you decide?",
  },

  transfer: {
    question: "Forget the stream. What are you going to do this weekend? And what do you think will happen at school tomorrow?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to host it, I'm going to start with ranked), and \"will\" for decisions made in the moment or predictions (we'll switch games, I think fifty people will watch). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real planning task, not an abstract grammar drill.",
      say: ["We're planning a stream together for Saturday. I'm your teammate, let's set it up in chat."],
      do: ["Keep it collaborative and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a real teammate actually planning this stream."],
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
      goal: "Same tense pair, personal questions with nothing to do with the stream.",
      say: ["Forget the stream. What are you going to do this weekend? What do you think will happen at school tomorrow?"],
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

// SHIFT, Friend Group Hangout Track, Lesson 4: "Planning the Trip"
// Friend & teen. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "friends-4",
  code: "L4",
  title: "Planning the Trip",
  tenses: "Will vs Going to",
  tag: "Friends",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Video Call, Mapping It Out",
    context: "You and a friend are planning a weekend trip with the group.",
  },

  scenarioSet: {
    say: "You and a friend are planning a weekend trip together. You're on a call mapping out the details.",
  },

  chain: [
    {
      question: "Are we still going to go camping this weekend?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to pack tonight.",
      nextLine: "Good. Who's going to bring the tent?",
    },
    {
      question: "Who's going to bring the tent?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to borrow</b>.",
      model: "I'm going to borrow my brother's tent.",
      nextLine: "How many people do you think will actually show up?",
    },
    {
      question: "How many people do you think will actually show up?",
      shortAnswer: false,
      clue: "Will (prediction/guess): <b>will come</b>.",
      model: "I think about six people will come.",
      nextLine: "If it rains, what will we do?",
    },
    {
      question: "If it rains, what will we do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will stay</b> / <b>'ll stay</b>.",
      model: "We'll just stay in a cabin instead.",
      nextLine: "Good backup plan. Are you going to invite Jake too?",
    },
    {
      question: "Are you going to invite Jake too?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to text him now.",
      nextLine: "Smart. Will you send me the directions tonight?",
    },
    {
      question: "Will you send me the directions tonight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll send them right after this call.",
      nextLine: "What are you going to bring for food?",
    },
    {
      question: "What are you going to bring for food?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to bring</b>.",
      model: "I'm going to bring snacks and drinks.",
      nextLine: "If someone cancels last minute, will the trip still happen?",
    },
    {
      question: "If someone cancels last minute, will the trip still happen?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, it will. We're going either way.",
      nextLine: "Perfect, I think we're all set.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the trip? Who will come? What did you decide about the backup plan?",
  },

  transfer: {
    question: "Forget the trip. What are you going to do this weekend? And what do you think will happen at school tomorrow?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to pack tonight), and \"will\" for decisions made in the moment or predictions (we'll stay in a cabin, I think six people will come). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a fun, real planning task, not an abstract grammar drill.",
      say: ["We're planning a camping trip together. I'm your friend, let's map it out on this call."],
      do: ["Keep it collaborative and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a real friend actually planning this trip."],
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
      goal: "Same tense pair, personal questions with nothing to do with the trip.",
      say: ["Forget the trip. What are you going to do this weekend? What do you think will happen at school tomorrow?"],
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

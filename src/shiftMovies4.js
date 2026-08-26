// SHIFT, Movies Track, Lesson 4: "Planning a Movie Marathon"
// Friend & teen. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "movies-4",
  code: "L4",
  title: "Planning a Movie Marathon",
  tenses: "Will vs Going to",
  tag: "Movies",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🍿",

  scene: {
    title: "Group Chat, Planning the Marathon",
    context: "You and a friend are planning a movie marathon for the weekend.",
  },

  scenarioSet: {
    say: "You and a friend are planning a movie marathon together for the weekend. You're chatting about the details.",
  },

  chain: [
    {
      question: "Are we still going to watch the whole trilogy?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to start with the first one.",
      nextLine: "Good. Who's going to bring the snacks?",
    },
    {
      question: "Who's going to bring the snacks?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to bring</b>.",
      model: "I'm going to bring the popcorn and candy.",
      nextLine: "How long do you think the whole marathon will take?",
    },
    {
      question: "How long do you think the whole marathon will take?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will take</b>.",
      model: "I think it will take about seven hours.",
      nextLine: "If we get tired halfway through, what will we do?",
    },
    {
      question: "If we get tired halfway through, what will we do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will take</b> / <b>'ll take</b>.",
      model: "We'll just take a break and order pizza.",
      nextLine: "Good plan. Are you going to invite anyone else?",
    },
    {
      question: "Are you going to invite anyone else?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to invite Maya.",
      nextLine: "Will you text me the exact time?",
    },
    {
      question: "Will you text me the exact time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll send it tonight.",
      nextLine: "What are you going to wear, pajamas or normal clothes?",
    },
    {
      question: "What are you going to wear, pajamas or normal clothes?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to wear</b>.",
      model: "I'm going to wear my pajamas.",
      nextLine: "If one of the movies is boring, will we skip it?",
    },
    {
      question: "If one of the movies is boring, will we skip it?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>won't</b>.",
      model: "No, we won't. We'll watch them all in order.",
      nextLine: "Perfect, I can't wait for this.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the marathon? What will you do if you get tired? What did you decide about skipping movies?",
  },

  transfer: {
    question: "Forget the marathon. What are you going to do this weekend? And what do you think will happen if your plans change last minute?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to bring the snacks, I'm going to invite Maya), and \"will\" for decisions made in the moment or predictions and promises (we'll take a break, I think it will take seven hours). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a fun, real planning task, not an abstract grammar drill.",
      say: ["We're planning a movie marathon together. I'm your friend, let's map it out."],
      do: ["Keep it excited and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a friend genuinely planning this marathon."],
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
      goal: "Same tense pair, personal questions with nothing to do with the marathon.",
      say: ["Forget the marathon. What are you going to do this weekend? What do you think will happen if plans change last minute?"],
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

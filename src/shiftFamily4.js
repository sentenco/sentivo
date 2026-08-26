// SHIFT, Family & Home Life Track, Lesson 4: "Planning the Surprise"
// Sibling & teen, planning a surprise party. Will (spontaneous decision/
// prediction) vs Going to (plan already decided).

export default {
  id: "family-4",
  code: "L4",
  title: "Planning the Surprise",
  tenses: "Will vs Going to",
  tag: "Family",
  roles: { them: "Sibling", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Your Bedroom, Whispering",
    context: "You and your sibling are planning a surprise party for Mom's birthday.",
  },

  scenarioSet: {
    say: "Mom's birthday is coming up. You and your sibling are planning a surprise party together, whispering so she doesn't hear.",
  },

  chain: [
    {
      question: "Are we still going to throw the party on Saturday?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, we are. I'm going to book the cake today.",
      nextLine: "Good. Who's going to invite Grandma and Grandpa?",
    },
    {
      question: "Who's going to invite Grandma and Grandpa?",
      shortAnswer: false,
      clue: "Going to (planned action): <b>going to call</b>.",
      model: "I'm going to call them tonight.",
      nextLine: "How many people do you think will show up?",
    },
    {
      question: "How many people do you think will show up?",
      shortAnswer: false,
      clue: "Will (prediction/guess): <b>will come</b>.",
      model: "I think about fifteen people will come.",
      nextLine: "If Mom finds out early, what will we do?",
    },
    {
      question: "If Mom finds out early, what will we do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will tell</b> / <b>'ll tell</b>.",
      model: "We'll just tell her it's a small dinner instead.",
      nextLine: "Good backup plan. Are you going to hide the decorations in your room?",
    },
    {
      question: "Are you going to hide the decorations in your room?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to keep them under my bed.",
      nextLine: "Smart. Will you text me once you find the cake?",
    },
    {
      question: "Will you text me once you find the cake?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll message you as soon as I order it.",
      nextLine: "What are you going to say to distract her that day?",
    },
    {
      question: "What are you going to say to distract her that day?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to tell</b>.",
      model: "I'm going to tell her we're just going for a walk.",
      nextLine: "If she gets suspicious, will the plan fall apart?",
    },
    {
      question: "If she gets suspicious, will the plan fall apart?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>won't</b>.",
      model: "No, it won't. We've thought of everything.",
      nextLine: "I think we're ready. This is going to be great.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do about the party? Who will come? What did you decide about the distraction plan?",
  },

  transfer: {
    question: "Forget the party. What are you going to do this weekend? And what do you think will happen at school tomorrow?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to call them tonight), and \"will\" for decisions made in the moment or predictions (we'll tell her, I think they'll come). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a fun, conspiratorial planning task, not an abstract grammar drill.",
      say: ["We're planning a surprise party for Mom together. I'm your sibling, let's plan it out, quietly."],
      do: ["Keep it playful and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like a real sibling actually planning this surprise."],
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
      goal: "Same tense pair, personal questions with nothing to do with the party.",
      say: ["Forget the party. What are you going to do this weekend? What do you think will happen at school tomorrow?"],
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

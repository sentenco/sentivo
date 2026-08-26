// SHIFT, Airport Track, Lesson 4: "Planning the Next Leg"
// Travel Agent & traveler. Will (spontaneous decision/prediction/promise) vs Going to (plan already decided).

export default {
  id: "airport-4",
  code: "L4",
  title: "Planning the Next Leg",
  tenses: "Will vs Going to",
  tag: "Airport",
  roles: { them: "Travel Agent", me: "You" },
  themEmoji: "🛫",

  scene: {
    title: "The Travel Desk",
    context: "Part of your trip got disrupted. You're working with an agent to plan the next leg.",
  },

  scenarioSet: {
    say: "Part of your trip got disrupted. You're working with a travel agent to plan the next leg of your journey.",
  },

  chain: [
    {
      question: "Are you still going to make it to the conference on time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (plan already decided): <b>am</b>.",
      model: "Yes, I am. I'm going to catch the next flight.",
      nextLine: "Good. Which city are you going to fly through instead?",
    },
    {
      question: "Which city are you going to fly through instead?",
      shortAnswer: false,
      clue: "Going to (planned route): <b>going to fly</b>.",
      model: "I'm going to fly through Miami instead.",
      nextLine: "How long do you think the new route will take?",
    },
    {
      question: "How long do you think the new route will take?",
      shortAnswer: false,
      clue: "Will (prediction): <b>will take</b>.",
      model: "I think it will take about five hours.",
      nextLine: "If this flight gets delayed too, what will you do?",
    },
    {
      question: "If this flight gets delayed too, what will you do?",
      shortAnswer: false,
      clue: "Will (spontaneous decision): <b>will book</b> / <b>'ll book</b>.",
      model: "I'll just book a hotel and rebook in the morning.",
      nextLine: "Good backup plan. Are you going to need a hotel tonight either way?",
    },
    {
      question: "Are you going to need a hotel tonight either way?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Going to (planned): <b>am</b>.",
      model: "Yes, I am. I'm going to book one just in case.",
      nextLine: "Will you let your hotel know about the change?",
    },
    {
      question: "Will you let your hotel know about the change?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (promise): <b>will</b>.",
      model: "Yes, I will. I'll call them right after this.",
      nextLine: "What are you going to do about your rental car reservation?",
    },
    {
      question: "What are you going to do about your rental car reservation?",
      shortAnswer: false,
      clue: "Going to (intention already formed): <b>going to push</b>.",
      model: "I'm going to push it back a day.",
      nextLine: "If everything works out, will you still make the opening session?",
    },
    {
      question: "If everything works out, will you still make the opening session?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Will (prediction): <b>will</b>.",
      model: "Yes, I will. I'll just barely make it.",
      nextLine: "Okay, let's get you rebooked right now.",
    },
  ],

  retell: {
    prompt: "Retell the whole plan from the start, no help this time. What are you going to do to get there? What will you do if things go wrong again? What did you decide about the hotel and car?",
  },

  transfer: {
    question: "Forget this trip. What are you going to do this weekend? And what do you think will happen if your plans get disrupted?",
  },

  wrap: {
    prompt: "One thing to remember: use \"going to\" for plans already decided before now (I'm going to fly through Miami, I'm going to book a hotel), and \"will\" for decisions made in the moment or predictions and promises (I'll book a hotel and rebook, I think it will take five hours). Before next lesson, notice a moment where you mix up a plan versus a spontaneous decision.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a real problem-solving conversation, calm but urgent.",
      say: ["Part of your trip got disrupted. I'm the travel agent, let's plan the next leg together."],
      do: ["Keep it calm and solution-focused, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Going to (decided plans) and Will (spontaneous decisions/predictions).",
      say: ["Ask each question in character, like an agent genuinely helping rebuild the itinerary."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole rebooking plan together unaided?",
      say: ["Now tell me the whole plan again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, personal questions with nothing to do with this trip.",
      say: ["Forget this trip. What are you going to do this weekend? What do you think will happen if your plans get disrupted?"],
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

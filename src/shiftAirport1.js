// SHIFT, Airport Track, Lesson 1: "Checking In"
// Gate Agent & traveler. Present Simple (habit/routine) vs Present Continuous (right now / current situation).

export default {
  id: "airport-1",
  code: "L1",
  title: "Checking In",
  tenses: "Present Simple vs Present Continuous",
  tag: "Airport",
  roles: { them: "Gate Agent", me: "You" },
  themEmoji: "🛫",

  scene: {
    title: "The Check-In Counter",
    context: "You're checking in for your flight. The gate agent is confirming your details.",
  },

  scenarioSet: {
    say: "You're at the check-in counter for your flight. The gate agent is confirming a few details before printing your boarding pass.",
  },

  chain: [
    {
      question: "Are you traveling with any checked bags today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (current action): <b>am</b>.",
      model: "Yes, I am. I'm checking one bag.",
      nextLine: "Do you usually pack light, or bring a lot?",
    },
    {
      question: "Do you usually pack light, or bring a lot?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>pack</b>.",
      model: "I usually pack pretty light.",
      nextLine: "What are you traveling for this time?",
    },
    {
      question: "What are you traveling for this time?",
      shortAnswer: false,
      clue: "Present Continuous (current, specific trip): <b>am traveling</b>.",
      model: "I'm traveling for a wedding.",
      nextLine: "Do you always fly with this airline?",
    },
    {
      question: "Do you always fly with this airline?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually fly with a few different ones.",
      nextLine: "Are you sitting with anyone else on this flight?",
    },
    {
      question: "Are you sitting with anyone else on this flight?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (this specific flight): <b>am not</b>.",
      model: "No, I'm not. I'm flying alone this time.",
      nextLine: "Who usually books your flights?",
    },
    {
      question: "Who usually books your flights?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>book</b>.",
      model: "I usually book them myself.",
      nextLine: "Are you connecting to another flight today?",
    },
    {
      question: "Are you connecting to another flight today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (today's trip): <b>am</b>.",
      model: "Yes, I am. I'm connecting in Chicago.",
      nextLine: "Do you ever get nervous before flying?",
    },
    {
      question: "Do you ever get nervous before flying?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. A little, every time.",
      nextLine: "Here's your boarding pass, have a great flight.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you doing for this trip? What do you usually do when you fly? What's different about today?",
  },

  transfer: {
    question: "Forget the airport. What are you doing right now, at this exact moment? And what do you usually do to prepare before a trip?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually pack light, I usually book my own flights), Present Continuous for what's happening right now or this specific trip (I'm checking one bag, I'm traveling for a wedding). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a routine check-in moment, efficient and friendly.",
      say: ["You're checking in for your flight. I'm the gate agent, let's confirm a few details."],
      do: ["Keep it brisk and friendly, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or this specific trip).",
      say: ["Ask each question in character, like an agent genuinely confirming travel details."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole check-in conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real travel habits.",
      say: ["Forget the airport. What are you doing right now? What do you usually do to prepare before a trip?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or this specific trip."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

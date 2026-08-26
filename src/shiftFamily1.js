// SHIFT, Family & Home Life Track, Lesson 1: "Chore Check-In"
// Mom & teen. Present Simple (habit/routine) vs Present Continuous (right now / fixed plan for later).

export default {
  id: "family-1",
  code: "L1",
  title: "Chore Check-In",
  tenses: "Present Simple vs Present Continuous",
  tag: "Family",
  roles: { them: "Mom", me: "You" },
  themEmoji: "👩",

  scene: {
    title: "Kitchen, Saturday Morning",
    context: "Your mom walks into the kitchen while you're in the middle of breakfast, and wants to talk about chores.",
  },

  scenarioSet: {
    say: "It's Saturday morning. You're eating breakfast in the kitchen when your mom comes in to check in about chores.",
  },

  chain: [
    {
      question: "Are you doing your homework right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am not</b>.",
      model: "No, I'm not. I'm still eating breakfast.",
      nextLine: "Okay. Do you usually finish your homework before breakfast?",
    },
    {
      question: "Do you usually finish your homework before breakfast?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually do it after school.",
      nextLine: "Fair enough. What are you eating right now?",
    },
    {
      question: "What are you eating right now?",
      shortAnswer: false,
      clue: "Present Continuous (right now): <b>am eating</b>.",
      model: "I'm eating cereal.",
      nextLine: "Do you always eat cereal for breakfast?",
    },
    {
      question: "Do you always eat cereal for breakfast?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually have toast.",
      nextLine: "Speaking of chores, are you taking out the trash today?",
    },
    {
      question: "Speaking of chores, are you taking out the trash today?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed plan for later today): <b>am</b>.",
      model: "Yes, I am. I'm doing it after breakfast.",
      nextLine: "Good. Who usually does the dishes in this house?",
    },
    {
      question: "Who usually does the dishes in this house?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>does</b>.",
      model: "Dad usually does the dishes.",
      nextLine: "Ha, good answer. Is he doing them right now?",
    },
    {
      question: "Is he doing them right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>isn't</b>.",
      model: "No, he isn't. He's reading the newspaper.",
      nextLine: "Typical Saturday. Do you ever help him with the dishes?",
    },
    {
      question: "Do you ever help him with the dishes?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. I help him most weekends.",
      nextLine: "Good to know. Let's get this kitchen cleaned up.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What were you doing when your mom came in? What do you usually do on Saturdays? What's the plan for chores today?",
  },

  transfer: {
    question: "Forget breakfast. What are you doing right now, at this exact moment? And what do you usually do on weekend mornings?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually eat toast, Dad does the dishes), Present Continuous for what's happening right now or already fixed for later today (I'm eating cereal, I'm doing it after breakfast). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up an ordinary Saturday-morning moment, low stakes, easy entry into the chain.",
      say: ["It's Saturday morning, you're eating breakfast in the kitchen. I'm your mom, I've just walked in to check in about chores."],
      do: ["Keep it warm and casual, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or fixed for later today).",
      say: ["Ask each question in character, like a genuinely curious parent on a Saturday morning."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole morning check-in together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real weekend habits.",
      say: ["Forget breakfast. What are you doing right now? What do you usually do on weekend mornings?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or something already planned for later today."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

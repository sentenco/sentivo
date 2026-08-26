// SHIFT, School Day Track, Lesson 1: "Locker Chat"
// Classmate & teen. Present Simple (habit/routine) vs Present Continuous (right now / fixed plan for later).

export default {
  id: "school-1",
  code: "L1",
  title: "Locker Chat",
  tenses: "Present Simple vs Present Continuous",
  tag: "School",
  roles: { them: "Classmate", me: "You" },
  themEmoji: "🧑‍🎓",

  scene: {
    title: "Hallway, Between Classes",
    context: "A classmate stops by your locker to chat before the bell rings.",
  },

  scenarioSet: {
    say: "It's between classes. A classmate has stopped by your locker to chat for a minute before the bell rings.",
  },

  chain: [
    {
      question: "Hey, are you rushing to class right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am not</b>.",
      model: "No, I'm not. I have a few minutes.",
      nextLine: "Cool. Do you usually get to class early?",
    },
    {
      question: "Do you usually get to class early?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I'm usually right on time.",
      nextLine: "Ha, same. What are you looking for in your locker?",
    },
    {
      question: "What are you looking for in your locker?",
      shortAnswer: false,
      clue: "Present Continuous (right now): <b>am looking</b>.",
      model: "I'm looking for my math book.",
      nextLine: "Do you always forget your books?",
    },
    {
      question: "Do you always forget your books?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It happens all the time.",
      nextLine: "Ha, relatable. Are you going to lunch after this class?",
    },
    {
      question: "Are you going to lunch after this class?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed plan for later today): <b>am</b>.",
      model: "Yes, I am. I'm meeting my friends at the usual table.",
      nextLine: "Nice. Where do you usually sit at lunch?",
    },
    {
      question: "Where do you usually sit at lunch?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>sit</b>.",
      model: "I usually sit by the window.",
      nextLine: "Is the bell about to ring, do you know?",
    },
    {
      question: "Is the bell about to ring, do you know?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (happening right now): <b>is</b>.",
      model: "Yes, it is. It's about to ring any second.",
      nextLine: "Do you ever make it to class right when the bell rings?",
    },
    {
      question: "Do you ever make it to class right when the bell rings?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. I cut it close most days.",
      nextLine: "Ha, same here. See you at lunch!",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What were you doing at your locker? What do you usually do between classes? What's the plan for lunch?",
  },

  transfer: {
    question: "Forget the hallway. What are you doing right now, at this exact moment? And what do you usually do between classes?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually sit by the window, it happens all the time), Present Continuous for what's happening right now or already fixed for later today (I'm looking for my book, I'm meeting my friends). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a quick, casual hallway moment, low stakes, easy entry into the chain.",
      say: ["You're at your locker between classes. I'm a classmate, I've stopped by to chat for a minute."],
      do: ["Keep it light and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or fixed for later today).",
      say: ["Ask each question in character, like a genuinely chatty classmate killing time before the bell."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole hallway chat together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real school-day habits.",
      say: ["Forget the hallway. What are you doing right now? What do you usually do between classes?"],
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

// SHIFT, Online & Gaming Track, Lesson 1: "Squad Up"
// Teammate & teen. Present Simple (habit/routine) vs Present Continuous (right now / fixed plan for later).

export default {
  id: "gaming-1",
  code: "L1",
  title: "Squad Up",
  tenses: "Present Simple vs Present Continuous",
  tag: "Gaming",
  roles: { them: "Teammate", me: "You" },
  themEmoji: "🎮",

  scene: {
    title: "Voice Chat, Before the Match",
    context: "You and a teammate are getting ready to queue up for a match.",
  },

  scenarioSet: {
    say: "You're on voice chat with a teammate, getting ready to queue up for a match together.",
  },

  chain: [
    {
      question: "Are you loading into the game right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm loading in now.",
      nextLine: "Nice. Do you usually play this character?",
    },
    {
      question: "Do you usually play this character?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually play someone else.",
      nextLine: "What are you picking for this match?",
    },
    {
      question: "What are you picking for this match?",
      shortAnswer: false,
      clue: "Present Continuous (right now): <b>am picking</b>.",
      model: "I'm picking the healer this time.",
      nextLine: "Do you always play healer when we lose a round?",
    },
    {
      question: "Do you always play healer when we lose a round?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. It's kind of a habit.",
      nextLine: "Is anyone else joining our team right now?",
    },
    {
      question: "Is anyone else joining our team right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>are</b>.",
      model: "Yes, they are. Two more are joining now.",
      nextLine: "Who usually calls the shots in our squad?",
    },
    {
      question: "Who usually calls the shots in our squad?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>call</b>.",
      model: "You usually call the shots.",
      nextLine: "Are you checking the map right now?",
    },
    {
      question: "Are you checking the map right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm checking it now.",
      nextLine: "Do you ever get nervous before a ranked match?",
    },
    {
      question: "Do you ever get nervous before a ranked match?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. Every single time.",
      nextLine: "Ha, same. Let's go win this one.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you doing right now to get ready? What do you usually play? Who's joining the team?",
  },

  transfer: {
    question: "Forget the match. What are you doing right now, at this exact moment? And what do you usually do before you play?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (you usually call the shots, I always play healer), Present Continuous for what's happening right now or already fixed for the match (I'm loading in, I'm checking the map). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a quick pre-match voice chat moment, low stakes, easy entry into the chain.",
      say: ["You're on voice chat getting ready to queue up. I'm your teammate, let's talk through the setup."],
      do: ["Keep it energetic and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or fixed for the match).",
      say: ["Ask each question in character, like a genuinely focused teammate prepping for a match."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole pre-match setup together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real gaming habits.",
      say: ["Forget the match. What are you doing right now? What do you usually do before you play?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or something already set up for the match."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

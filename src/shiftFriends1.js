// SHIFT, Friend Group Hangout Track, Lesson 1: "Weekend Plans"
// Friend & teen. Present Simple (habit/routine) vs Present Continuous (right now / fixed plan for later).

export default {
  id: "friends-1",
  code: "L1",
  title: "Weekend Plans",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🧑",

  scene: {
    title: "Hanging Out After School",
    context: "You and a friend are figuring out what to do this weekend.",
  },

  scenarioSet: {
    say: "You're hanging out with a friend after school, trying to figure out weekend plans.",
  },

  chain: [
    {
      question: "Are you doing anything this weekend?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed near-future plan): <b>am not</b>.",
      model: "No, I'm not. I'm totally free.",
      nextLine: "Nice. Do you usually stay in on weekends?",
    },
    {
      question: "Do you usually stay in on weekends?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>don't</b>.",
      model: "No, I don't. I usually go out with friends.",
      nextLine: "What are you thinking for this weekend?",
    },
    {
      question: "What are you thinking for this weekend?",
      shortAnswer: false,
      clue: "Present Continuous (right now / ongoing thought): <b>am thinking</b>.",
      model: "I'm thinking about the new movie.",
      nextLine: "Do you always like going to the movies?",
    },
    {
      question: "Do you always like going to the movies?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit/preference): <b>do</b>.",
      model: "Yes, I do. It's basically my favorite thing.",
      nextLine: "Is anyone else joining us this weekend?",
    },
    {
      question: "Is anyone else joining us this weekend?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (fixed plan): <b>are</b>.",
      model: "Yes, they are. A few others are coming too.",
      nextLine: "Who usually picks the movie in our group?",
    },
    {
      question: "Who usually picks the movie in our group?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>pick</b>.",
      model: "You usually pick the movie.",
      nextLine: "Are you texting everyone right now to confirm?",
    },
    {
      question: "Are you texting everyone right now to confirm?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm messaging the group chat.",
      nextLine: "Do you ever get replies fast in that chat?",
    },
    {
      question: "Do you ever get replies fast in that chat?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>don't</b>.",
      model: "No, I don't. Everyone takes forever.",
      nextLine: "Ha, classic. Let's see what everyone says.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you doing this weekend? What do you usually do? Who's coming along?",
  },

  transfer: {
    question: "Forget this weekend. What are you doing right now, at this exact moment? And what do you usually do on a normal weekend?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually go out, you usually pick the movie), Present Continuous for what's happening right now or already fixed for later (I'm thinking about the movie, they're coming too). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a casual after-school hangout, low stakes, easy entry into the chain.",
      say: ["You're hanging out with a friend after school. I'm your friend, let's figure out weekend plans together."],
      do: ["Keep it light and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now or fixed for later).",
      say: ["Ask each question in character, like a genuinely chatty friend planning the weekend."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole planning conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real weekend habits.",
      say: ["Forget this weekend. What are you doing right now? What do you usually do on a normal weekend?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now or something already planned for later."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

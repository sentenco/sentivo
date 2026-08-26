// SHIFT, Movies Track, Lesson 1: "Picking a Movie"
// Friend & teen. Present Simple (habit/routine) vs Present Continuous (right now / current situation).

export default {
  id: "movies-1",
  code: "L1",
  title: "Picking a Movie",
  tenses: "Present Simple vs Present Continuous",
  tag: "Movies",
  roles: { them: "Friend", me: "You" },
  themEmoji: "🍿",

  scene: {
    title: "The Theater Lobby",
    context: "You and a friend are deciding what movie to watch tonight.",
  },

  scenarioSet: {
    say: "You're standing in the theater lobby with a friend, trying to decide what movie to watch.",
  },

  chain: [
    {
      question: "Are you checking the showtimes right now?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm checking them now.",
      nextLine: "Do you usually go for comedies or horror movies?",
    },
    {
      question: "Do you usually go for comedies or horror movies?",
      shortAnswer: false,
      clue: "Present Simple (habit): <b>go</b>.",
      model: "I usually go for comedies.",
      nextLine: "What are you thinking of watching tonight?",
    },
    {
      question: "What are you thinking of watching tonight?",
      shortAnswer: false,
      clue: "Present Continuous (current thought): <b>am thinking</b>.",
      model: "I'm thinking of the new superhero movie.",
      nextLine: "Do you always watch trailers before deciding?",
    },
    {
      question: "Do you always watch trailers before deciding?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (habit): <b>do</b>.",
      model: "Yes, I do. I always check the trailer first.",
      nextLine: "Are you buying popcorn before we go in?",
    },
    {
      question: "Are you buying popcorn before we go in?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (right now): <b>am</b>.",
      model: "Yes, I am. I'm getting popcorn now.",
      nextLine: "Who usually picks the seats when we come here?",
    },
    {
      question: "Who usually picks the seats when we come here?",
      shortAnswer: false,
      clue: "Present Simple (habit/routine): <b>pick</b>.",
      model: "You usually pick the seats.",
      nextLine: "Is the movie starting soon?",
    },
    {
      question: "Is the movie starting soon?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Continuous (imminent): <b>is</b>.",
      model: "Yes, it is. It's starting in five minutes.",
      nextLine: "Do you ever fall asleep during movies?",
    },
    {
      question: "Do you ever fall asleep during movies?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Present Simple (general habit): <b>do</b>.",
      model: "Yes, I do. Sometimes during boring parts.",
      nextLine: "Ha, let's hope this one keeps you awake. Let's go in.",
    },
  ],

  retell: {
    prompt: "Retell the whole conversation, no help this time. What are you deciding right now? What do you usually go for? What's the plan before the movie starts?",
  },

  transfer: {
    question: "Forget the movie. What are you doing right now, at this exact moment? And what do you usually do to decide what to watch?",
  },

  wrap: {
    prompt: "One thing to remember: Present Simple for habits and routines (I usually go for comedies, you usually pick the seats), Present Continuous for what's happening right now (I'm checking the showtimes, it's starting in five minutes). Before next lesson, notice a moment where you'd naturally say \"right now\" versus \"usually.\"",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set up a casual pre-movie moment, low stakes, easy entry into the chain.",
      say: ["You're in the theater lobby deciding what to watch. I'm your friend, let's figure it out together."],
      do: ["Keep it light and quick, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Present Simple (habits/routines) and Present Continuous (happening right now).",
      say: ["Ask each question in character, like a genuinely excited friend deciding on a movie."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole decision-making conversation together unaided?",
      say: ["Now tell me the whole conversation again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, questions about right now and their real movie-picking habits.",
      say: ["Forget the movie. What are you doing right now? What do you usually do to decide what to watch?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Present Simple for a routine. Present Continuous for right now."],
      do: ["Ask them to notice a real \"right now\" vs \"usually\" moment before next lesson."],
      timing: "1 min",
    },
  },
};

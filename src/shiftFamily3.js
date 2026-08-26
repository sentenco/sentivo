// SHIFT, Family & Home Life Track, Lesson 3: "Who Broke the Vase?"
// Mom & teen, a mystery scene. Past Continuous (was in progress) vs
// Past Simple (completed event).

export default {
  id: "family-3",
  code: "L3",
  title: "Who Broke the Vase?",
  tenses: "Past Continuous vs Past Simple",
  tag: "Family",
  roles: { them: "Mom", me: "You" },
  themEmoji: "👩",

  scene: {
    title: "The Living Room, A Mystery",
    context: "The vase in the living room is broken. Mom wants to know what happened.",
  },

  scenarioSet: {
    say: "The vase in the living room is broken. Your mom is trying to figure out what happened and wants your side of the story.",
  },

  chain: [
    {
      question: "What happened to the vase?",
      shortAnswer: false,
      clue: "Past Simple (a single completed event): <b>fell</b>.",
      model: "It fell off the shelf.",
      nextLine: "What were you doing when it fell?",
    },
    {
      question: "What were you doing when it fell?",
      shortAnswer: false,
      clue: "Past Continuous (in progress, interrupted by the fall): <b>was playing</b>.",
      model: "I was playing with the dog.",
      nextLine: "Did you see it happen?",
    },
    {
      question: "Did you see it happen?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I saw it from the hallway.",
      nextLine: "Was the dog running around at the time?",
    },
    {
      question: "Was the dog running around at the time?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (ongoing background action): <b>was</b>.",
      model: "Yes, he was. He was chasing his ball.",
      nextLine: "Did you try to catch it before it hit the floor?",
    },
    {
      question: "Did you try to catch it before it hit the floor?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Simple: <b>did</b>.",
      model: "Yes, I did. I tried, but I missed.",
      nextLine: "What were you thinking in that moment?",
    },
    {
      question: "What were you thinking in that moment?",
      shortAnswer: false,
      clue: "Past Continuous (ongoing mental state): <b>was thinking</b>.",
      model: "I was thinking it would break for sure.",
      nextLine: "What did you do right after it broke?",
    },
    {
      question: "What did you do right after it broke?",
      shortAnswer: false,
      clue: "Past Simple (completed events in sequence): <b>cleaned</b>.",
      model: "I cleaned it up right away.",
      nextLine: "Were you worried about telling me?",
    },
    {
      question: "Were you worried about telling me?",
      shortAnswer: true,
      clue: "Short answer + follow-up. Past Continuous (extended ongoing state): <b>was</b>.",
      model: "Yes, I was. I was worried the whole time.",
      nextLine: "Well, thank you for being honest. Accidents happen.",
    },
  ],

  retell: {
    prompt: "Retell the whole story from the start, no help this time. What happened to the vase? What were you doing when it fell? What did you do about it?",
  },

  transfer: {
    question: "Forget the vase. Tell me about a time something broke or went wrong at home. What were you doing when it happened?",
  },

  wrap: {
    prompt: "One thing to remember: Past Simple for the completed events that move the story forward (fell, cleaned, saw), Past Continuous for what was already in progress around them (was playing, was thinking, was worried). Before next lesson, notice a real moment where two things were happening at once.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set the stakes fast, something broke and mom's investigating, but keep it light, not a real punishment scene.",
      say: ["The vase in the living room is broken. I'm your mom, I've come to find out what happened."],
      do: ["Keep it curious and warm, not accusatory, under a minute."],
      timing: "1-2 min",
    },
    chain: {
      goal: "8 exchanges alternating Past Simple (completed events in the story) and Past Continuous (what was already in progress when they happened).",
      say: ["Ask each question in character, genuinely trying to piece together the sequence of events."],
      do: ["Type the student's actual words, don't paraphrase.", "Only reveal the clue if they're genuinely stuck.", "Next question only appears once you mark an answer correct."],
      timing: "12-15 min",
    },
    retell: {
      goal: "Can they hold the whole story together unaided?",
      say: ["Now tell me the whole story again, from the start."],
      do: ["Don't interrupt mid-retell, note slips to mention after."],
      timing: "3-4 min",
    },
    transfer: {
      goal: "Same tense pair, a personal story with nothing to do with the vase.",
      say: ["Forget the vase. Tell me about a time something went wrong at home. What were you doing when it happened?"],
      do: ["This is what actually proves it landed."],
      timing: "2-3 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Past Simple moves the story forward. Past Continuous sets the scene around it."],
      do: ["Ask them to notice a real moment this week where two things were happening at once."],
      timing: "1 min",
    },
  },
};

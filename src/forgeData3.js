// FORGE Lesson 3 — "Past Experiences" / "Fill the Gap"
// Grammar: past simple. First lesson of the Fill the Gap format group (L3+L4).

export const WORDS = [
  {
    word: "visited",
    imageNote: "Someone standing in front of a famous landmark, looking amazed, camera in hand.",
    frame: "Last month, I visited ______.",
    meaning: "went to see a place",
    example: "She visited Lisbon last summer.",
  },
  {
    word: "tried",
    imageNote: "Someone tasting new food for the first time, curious expression.",
    frame: "For the first time, I tried ______.",
    meaning: "did or tasted something new",
    example: "I tried sushi for the first time last week.",
  },
  {
    word: "met",
    imageNote: "Two people shaking hands and smiling, meeting for the first time.",
    frame: "Last week, I met ______.",
    meaning: "saw and talked to someone for the first time",
    example: "I met my new neighbor yesterday.",
  },
  {
    word: "stayed",
    imageNote: "Someone checking into a hotel room, suitcase beside them.",
    frame: "On my trip, I stayed ______.",
    meaning: "lived somewhere for a short time",
    example: "We stayed at a small hotel near the beach.",
  },
  {
    word: "lost",
    imageNote: "Someone searching through their bag, looking worried.",
    frame: "One time, I lost ______.",
    meaning: "could not find something anymore",
    example: "I lost my keys on the train once.",
  },
];

export default {
  id: "forge-3",
  code: "L3",
  title: "Past Experiences",
  technique: "Fill the Gap",
  gameLabel: "Gap Sprint",
  format: "gap",
  tag: "Progress",
  subtitle: "Talk about something you did recently.",
  techniqueLine: "Fill the Gap — I give you the start, you finish it out loud.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "What did you do last weekend?",
      "When was the last time you tried something new?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Read the start → fill the blank → say the whole sentence.",
    demoQ: "Last month, I visited ______.",
    demoA: "Last month, I visited Lisbon.",
  },

  game: {
    instruction: "Finish each sentence out loud, then go to the next.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Tell me about something you did recently. (3–4 sentences)",
    guiderail: true,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Tell me about two things that happened on the same day — join them with because, but, or so.",
    modelFrame: "I visited the museum, but it was closed, so I went to the park instead.",
  },

  scorecard: {
    canDoLine: "I can talk about things I did recently using: visited, tried, met, stayed, lost.",
    rows: [
      { label: "Range", max: 3 },
      { label: "Accuracy", max: 3 },
      { label: "Fluency", max: 6 },
      { label: "Interaction", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
  },

  teacherGuide: {
    cover: {
      goal: "New technique starts today — Fill the Gap. You give the start, he finishes it.",
      say: ["New move today — I'll give you the start of a sentence, and you finish it out loud."],
      do: ["Explain this is different from Say the Picture: now there's a sentence frame, not just a picture."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime past-tense storytelling before the technique is introduced.",
      say: ["What did you do last weekend?", "When was the last time you tried something new?"],
      do: ["Let him answer naturally — don't correct past tense errors yet, that's what today teaches."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L2's homework words landed.",
      say: ["Tell me one thing you recorded from the passage I gave you."],
      do: ["Accept any attempt; move on regardless."],
      timing: "1 min",
    },
    wordload: {
      goal: "Introduce the 5 gapped frames — picture cues the gap, no translation.",
      say: ["Each word has a half-sentence with a gap. Your job is just to finish it."],
      do: ["Read each frame aloud once, pointing at the picture cue."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model the exact move once before the game.",
      say: ["I give the frame, you fill the blank, then say the whole sentence out loud.", "Last month, I visited ______.", "Last month, I visited Lisbon."],
      do: ["Say the frame, pause, then model a completed example — make the gap-fill mechanic completely clear before handing over."],
      timing: "2 min",
    },
    game: {
      goal: "Drill all 5 frames — finish each sentence, move to the next.",
      say: ["Finish each sentence, then we move straight to the next one — quick and light."],
      do: ["Present each frame; let him complete it aloud.", "Use escape hatches (Describe it / Near enough / Buy time) if he's stuck rather than giving the answer."],
      timing: "4 min",
    },
    yourturn: {
      goal: "Unaided — something he did recently, 3-4 sentences.",
      say: ["Tell me about something you did recently — three or four sentences, in your own words."],
      do: ["Let him build freely; guiderail frames are there if he needs a nudge."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — join two events with because/but/so.",
      say: ["Tell me about two things that happened on the same day — join them with because, but, or so."],
      do: ["Model: 'I visited the museum, but it was closed, so I went to the park instead.'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today's past-simple performance.",
      say: ["Let's score how that went."],
      do: ["Score normally across the 4 dimensions."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L4's words (meet up, book, cancel, plan, join).",
      say: ["Next lesson we talk about plans for the future — look over these five words first."],
      do: ["Flag the grammar shift: past tense today, 'going to' + future plans next time."],
      timing: "1 min",
    },
  },
};

// FORGE Lesson 4 — "Making Plans" / "Fill the Gap"
// Grammar: going to + time. Second lesson of the Fill the Gap format group.

export const WORDS = [
  {
    word: "meet up",
    imageNote: "Two friends texting or talking about weekend plans, smiling at their phones.",
    frame: "This weekend, I'm going to meet up with ______.",
    meaning: "to see someone you arranged to see",
    example: "I'm meeting up with my sister on Saturday.",
  },
  {
    word: "book",
    imageNote: "Someone booking tickets on a laptop, confirmation screen visible.",
    frame: "First, I'm going to book ______.",
    meaning: "to arrange or reserve something in advance",
    example: "I need to book a table for dinner.",
  },
  {
    word: "cancel",
    imageNote: "Someone crossing out an event on a wall calendar.",
    frame: "If it rains, I'll cancel ______.",
    meaning: "to say an event will not happen",
    example: "We had to cancel the picnic because of the storm.",
  },
  {
    word: "plan",
    imageNote: "Someone writing in a planner or looking at a calendar, thinking.",
    frame: "Next, I'm going to plan ______.",
    meaning: "to decide what to do before doing it",
    example: "I'm planning a trip for next month.",
  },
  {
    word: "join",
    imageNote: "Someone waving, joining a group of people already gathered.",
    frame: "I'm going to ask ______ to join.",
    meaning: "to take part in something with other people",
    example: "Do you want to join us for lunch?",
  },
];

export default {
  id: "forge-4",
  code: "L4",
  title: "Making Plans",
  technique: "Fill the Gap",
  gameLabel: "Gap Sprint",
  format: "gap",
  tag: "Progress",
  subtitle: "Talk about your plans.",
  techniqueLine: "Fill the Gap — I give you the start, you finish it out loud.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "What are you going to do this weekend?",
      "Do you have any plans for next month?",
    ],
  },

  homeworkCheck: {
    line: "Tell me one thing you recorded.",
  },

  howItWorks: {
    line: "Read the start → fill the blank → say the whole sentence.",
    demoQ: "This weekend, I'm going to meet up with ______.",
    demoA: "This weekend, I'm going to meet up with my sister.",
  },

  game: {
    instruction: "Finish each sentence out loud, then go to the next.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Tell me about a plan you have coming up. (3–4 sentences)",
    guiderail: true,
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Tell me about a backup plan — what will you do if your first plan doesn't work?",
    modelFrame: "I'm going to book a table outside, but if it rains, I'll cancel it and go to a restaurant instead.",
  },

  scorecard: {
    canDoLine: "I can talk about my plans using: meet up, book, cancel, plan, join.",
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
      goal: "Same technique as L3 — Fill the Gap — new topic: making plans.",
      say: ["Same move as last time, new topic — today we're talking about plans, using 'going to'."],
      do: ["Quick recap of the fill-the-gap mechanic if needed."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime future-plan talk before the technique starts.",
      say: ["What are you going to do this weekend?", "Do you have any plans for next month?"],
      do: ["Let him answer freely, don't correct 'going to' errors yet."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L3's homework landed.",
      say: ["Tell me one thing you recorded about something you did recently."],
      do: ["Accept any attempt, move on."],
      timing: "1 min",
    },
    wordload: {
      goal: "Introduce meet up/book/cancel/plan/join with gapped frames.",
      say: ["Five new frames today, same format as last time."],
      do: ["Read each frame aloud with its picture cue."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model the frame → fill → say move once.",
      say: ["This weekend, I'm going to meet up with ______.", "This weekend, I'm going to meet up with my sister."],
      do: ["Say the frame, pause, model the completed sentence."],
      timing: "2 min",
    },
    game: {
      goal: "Drill all 5 plan frames.",
      say: ["Finish each one, then we move to the next."],
      do: ["Present each frame in turn, use escape hatches if stuck."],
      timing: "4 min",
    },
    yourturn: {
      goal: "Unaided — a real upcoming plan, 3-4 sentences.",
      say: ["Tell me about a plan you have coming up — three or four sentences."],
      do: ["Let him build freely."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — backup plan using if/will.",
      say: ["Tell me about a backup plan — what will you do if your first plan doesn't work?"],
      do: ["Model: 'I'm going to book a table outside, but if it rains, I'll cancel it and go to a restaurant instead.'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today — closes the Fill the Gap block.",
      say: ["Let's score today — this closes out our Fill the Gap block."],
      do: ["Score normally."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L5's recycled words (order, visited, meet up, book, plan) — new technique next time.",
      say: ["Next lesson is different — no more gaps, I'll ask you questions and you answer using words from the last few lessons. Take a look at these first."],
      do: ["Flag explicitly: L5 is a new technique (Echoing), recycling old words, not new vocabulary."],
      timing: "1 min",
    },
  },
};

// FORGE Lesson 8 — "Travel & Directions" / "Question Chain"
// Grammar: prepositions of movement. First lesson of the Question Chain format group (L8-L10).

const CHAIN_DEMO = {
  line: "1 question → (silently think 2 follow-ups) → 1 folded answer.",
  demoQ: "What did you do this weekend?",
  demoFollowups: ["Who with?", "Why did you like it?"],
  demoA: "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect.",
};

export const WORDS = [
  {
    word: "head to",
    question: "How do you usually get to work?",
    followups: ["Where?", "When?"],
    example: "I usually head to the station in the morning, because it's near my office.",
    meaning: "to go toward a place",
  },
  {
    word: "get off",
    question: "Where do you usually get off?",
    followups: ["Which stop?", "Why?"],
    example: "I get off at the third stop, because it's closest to work.",
    meaning: "to leave a bus, train, or other vehicle",
  },
  {
    word: "transfer",
    question: "Do you have to transfer on your way to work?",
    followups: ["Where?", "How often?"],
    example: "I transfer at the main station every day, and it takes ten minutes.",
    meaning: "to change from one bus or train to another",
  },
  {
    word: "book",
    question: "How do you book your travel tickets?",
    followups: ["What?", "When?"],
    example: "I book my tickets online the night before, so I don't wait in line.",
    meaning: "to arrange or reserve something in advance",
  },
  {
    word: "miss",
    question: "Have you ever missed a train or bus?",
    followups: ["What happened?", "What next?"],
    example: "Once I missed my train, so I had to wait, but I still arrived on time.",
    meaning: "to not catch a bus, train, or flight in time",
  },
];

export default {
  id: "forge-8",
  code: "L8",
  title: "Travel & Directions",
  technique: "Question Chain",
  gameLabel: "Chain It",
  format: "chain",
  tag: "Progress",
  subtitle: "Talk about how you travel.",
  techniqueLine: "Question Chain — one question from me. You answer it, and the two I didn't ask yet.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "How do you usually get to work?",
      "Do you like traveling by train or car?",
    ],
  },

  homeworkCheck: {
    line: "Tell me the whole story.",
  },

  howItWorks: CHAIN_DEMO,

  game: {
    instruction: "I ask ONE question and stop. You answer it — and the two questions I didn't ask. Join your sentences with because, and, so, or but.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  yourTurn: {
    prompt: "Tell me about how you travel to work or on a trip.",
    guiderail: false,
    note: "Before you speak, think — what two things would I naturally ask next? Answer those too.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Chain three follow-ups this time, or tell a 5–6 sentence mini-story from one prompt.",
    modelFrame: "I traveled to Rome last spring. I went with two friends because we wanted a short break, we stayed near the center so we could walk everywhere, and we loved it so much that we're already planning to go back.",
  },

  scorecard: {
    canDoLine: "I can tell a connected story about travel using: head to, get off, transfer, book, miss.",
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
      goal: "New technique — Question Chain. One question, two silent follow-ups, one folded answer.",
      say: ["New move, and it's the hardest one yet. I ask ONE question. In your head, think of two more questions I'd naturally ask next — then answer all three in one connected turn."],
      do: ["Take time to explain this clearly — it's a real jump in difficulty from Echoing."],
      timing: "2 min",
    },
    warmup: {
      goal: "Prime the travel topic.",
      say: ["How do you usually get to work?", "Do you like traveling by train or car?"],
      do: ["Let him answer freely."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L7's homework landed — now asking for the whole story, not just one detail.",
      say: ["Tell me the whole story from what you recorded."],
      do: ["This is a step up from earlier 'tell me one thing' checks — expect a fuller answer."],
      timing: "2 min",
    },
    wordload: {
      goal: "Show the 5 travel words with their two follow-ups and folded example.",
      say: ["Each word today comes with two follow-up questions it invites, and one example that folds all three together."],
      do: ["Read each row aloud, pointing out how the example answers all three questions at once."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Model the full chain move once, clearly.",
      say: ["What did you do this weekend?", "(silently: who with? why did you like it?)", "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect."],
      do: ["Ask the demo question, pause visibly as if thinking, then deliver the full folded answer — make the 'silent thinking' step visible."],
      timing: "3 min",
    },
    game: {
      goal: "Drill the chain move on all 5 travel questions.",
      say: ["I'll ask one question and stop. You give me the folded answer — join your sentences with because, and, so, or but."],
      do: ["Ask each question, let him build the full folded answer, use escape hatches only if he's stuck on vocabulary, not on the structure."],
      timing: "5 min",
    },
    yourturn: {
      goal: "One prompt, full chained turn, unaided.",
      say: ["Tell me about how you travel to work or on a trip.", "Before you speak, think — what two things would I naturally ask next? Answer those too."],
      do: ["Give him a moment to think before he starts — don't rush this one."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — chain three follow-ups or a longer mini-story.",
      say: ["This time, chain three follow-ups instead of two, or tell me a five or six sentence mini-story from one prompt."],
      do: ["Model the longer example if he needs a push: 'I traveled to Rome last spring. I went with two friends because we wanted a short break...'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today — first lesson of the hardest block.",
      say: ["Let's score today — this is the start of our hardest block, so don't worry if it feels tougher."],
      do: ["Score normally; reassure that Question Chain is meant to feel harder."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L9's words (download, update, back up, log in, crash).",
      say: ["Next lesson is about technology — take a look at these words first."],
      do: ["No structural flag needed — same technique continues."],
      timing: "1 min",
    },
  },
};

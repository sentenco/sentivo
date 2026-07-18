// FORGE Lesson 10 — "Solving a Small Problem" / "Question Chain" — FINAL LESSON
// Grammar: polite complaint forms. Closes the Question Chain format group and the track.

const CHAIN_DEMO = {
  line: "1 question → (silently think 2 follow-ups) → 1 folded answer.",
  demoQ: "What did you do this weekend?",
  demoFollowups: ["Who with?", "Why did you like it?"],
  demoA: "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect.",
};

export const WORDS = [
  {
    word: "complain",
    question: "Have you ever complained about something?",
    followups: ["About what?", "To whom?"],
    example: "I complained about a late delivery, and I spoke to the manager politely.",
    meaning: "to say you are unhappy about something",
  },
  {
    word: "refund",
    question: "Have you ever asked for a refund?",
    followups: ["Why?", "Did you get it?"],
    example: "I asked for a refund because the item was broken, and they agreed.",
    meaning: "money given back for something returned",
  },
  {
    word: "replace",
    question: "Have you ever had something replaced?",
    followups: ["What?", "How?"],
    example: "They offered to replace it, so I sent the old one back.",
    meaning: "to give a new one in place of a broken or lost one",
  },
  {
    word: "fix",
    question: "Have you ever had something fixed quickly?",
    followups: ["What?", "How long?"],
    example: "They fixed the problem in two days, which was faster than I expected.",
    meaning: "to repair something that's broken",
  },
  {
    word: "sort out",
    question: "Have you ever had to sort out a problem?",
    followups: ["How?", "Feeling?"],
    example: "In the end, we sorted it out, and I was happy with the result.",
    meaning: "to solve a problem or organize something",
  },
];

export default {
  id: "forge-10",
  code: "L10",
  title: "Solving a Small Problem",
  technique: "Question Chain",
  gameLabel: "Chain It",
  format: "chain",
  tag: "Final",
  subtitle: "Talk about solving a problem — your final lesson.",
  techniqueLine: "Question Chain — one question from me. You answer it, and the two I didn't ask yet.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "Have you ever had to complain about something?",
      "How do you usually solve a problem calmly?",
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
    prompt: "Tell me about a time you had to solve a problem or complain about something.",
    guiderail: false,
    note: "Before you speak, think — what two things would I naturally ask next? Answer those too.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Chain three follow-ups this time, or tell a 5–6 sentence mini-story from one prompt.",
    modelFrame: "I complained about a broken order last year. I called the company because the item arrived damaged, they offered a refund right away, and I was happy with how quickly they sorted it out.",
  },

  scorecard: {
    canDoLine: "I can tell a connected story about solving a problem using: complain, refund, replace, fix, sort out.",
    rows: [
      { label: "Range", max: 3 },
      { label: "Accuracy", max: 3 },
      { label: "Fluency", max: 6 },
      { label: "Interaction", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "final",
    compareLine: "Compare this score to your baseline from Lesson 1 — how far have you come?",
  },

  homework: {
    heading: "Grow your words before next class.",
    items: [
      { label: "Read your passage", detail: "Passage to be added." },
      { label: "Review your words", detail: "No new words this time — review your favourite words from all 10 lessons." },
      { label: "Record a voice note", detail: "Answer one question with a full chained turn — this is your final recording to show how far you've come." },
    ],
  },
};

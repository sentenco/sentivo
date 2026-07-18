// FORGE Lesson 9 — "Technology in Daily Life" / "Question Chain"
// Grammar: present perfect (have you ever...). Second lesson of the Question Chain format group.

const CHAIN_DEMO = {
  line: "1 question → (silently think 2 follow-ups) → 1 folded answer.",
  demoQ: "What did you do this weekend?",
  demoFollowups: ["Who with?", "Why did you like it?"],
  demoA: "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect.",
};

export const WORDS = [
  {
    word: "download",
    question: "Have you downloaded any apps recently?",
    followups: ["What?", "Why?"],
    example: "I've downloaded a few apps this week, because I needed them for work.",
    meaning: "to copy a file or program from the internet to your device",
  },
  {
    word: "update",
    question: "When did you last update your phone?",
    followups: ["When?", "What happened?"],
    example: "I updated my phone last night, and now it works faster.",
    meaning: "to change something to its newest version",
  },
  {
    word: "back up",
    question: "Do you back up your files?",
    followups: ["How often?", "Why?"],
    example: "I back up my files every week, so I never lose anything important.",
    meaning: "to make a copy of files in case the original is lost",
  },
  {
    word: "log in",
    question: "How often do you log in to your work system?",
    followups: ["Where?", "Any problem?"],
    example: "I log in to the system every morning, but sometimes it's slow.",
    meaning: "to enter your details to access an account or system",
  },
  {
    word: "crash",
    question: "Has your computer ever crashed on you?",
    followups: ["When?", "What did you do?"],
    example: "My laptop crashed yesterday, so I restarted it, and then it was fine.",
    meaning: "when a device or program suddenly stops working",
  },
];

export default {
  id: "forge-9",
  code: "L9",
  title: "Technology in Daily Life",
  technique: "Question Chain",
  gameLabel: "Chain It",
  format: "chain",
  tag: "Progress",
  subtitle: "Talk about technology in your daily life.",
  techniqueLine: "Question Chain — one question from me. You answer it, and the two I didn't ask yet.",
  words: WORDS,

  warmup: {
    heading: "Say it out loud.",
    questions: [
      "Have you ever had a problem with your phone?",
      "What apps do you use every day?",
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
    prompt: "Tell me about a time technology helped you or gave you a problem.",
    guiderail: false,
    note: "Before you speak, think — what two things would I naturally ask next? Answer those too.",
    escapeHatches: ["Describe it", "Near enough", "Buy time"],
  },

  pushIt: {
    prompt: "Chain three follow-ups this time, or tell a 5–6 sentence mini-story from one prompt.",
    modelFrame: "My phone crashed during an important call last month. I panicked because I was talking to a client, so I called back from my laptop instead, and luckily they understood.",
  },

  scorecard: {
    canDoLine: "I can tell a connected story about technology using: download, update, back up, log in, crash.",
    rows: [
      { label: "Range", max: 3 },
      { label: "Accuracy", max: 3 },
      { label: "Fluency", max: 6 },
      { label: "Interaction", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
  },

  homework: {
    heading: "Grow your words before next class.",
    items: [
      { label: "Read your passage", detail: "Passage to be added." },
      { label: "Next lesson's 5 words", detail: "complain · refund · replace · fix · sort out" },
      { label: "Record a voice note", detail: "Answer one question about your tech habits. Fold in two follow-ups." },
    ],
  },
};

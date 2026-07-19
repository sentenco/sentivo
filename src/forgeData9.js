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

  teacherGuide: {
    cover: {
      goal: "Same technique as L8 — Question Chain — new topic: technology.",
      say: ["Same move as last time, new topic — today it's about technology in daily life."],
      do: ["Quick recap of the chain move if needed."],
      timing: "1 min",
    },
    warmup: {
      goal: "Prime the tech topic.",
      say: ["Have you ever had a problem with your phone?", "What apps do you use every day?"],
      do: ["Let him answer freely."],
      timing: "2 min",
    },
    homeworkcheck: {
      goal: "Check L8's homework landed — the whole story.",
      say: ["Tell me the whole story from what you recorded."],
      do: ["Expect a fuller, connected answer by now."],
      timing: "2 min",
    },
    wordload: {
      goal: "Show the 5 tech words with follow-ups and folded example, present-perfect focus.",
      say: ["Five tech words today — notice the questions use 'have you ever' this time."],
      do: ["Read each row aloud, pointing out the present perfect question forms."],
      timing: "3 min",
    },
    howitworks: {
      goal: "Recap the chain move with the same demo.",
      say: ["What did you do this weekend?", "(silently: who with? why did you like it?)", "I went hiking. I went with my brother because he loves the mountains, and I liked it because the weather was perfect."],
      do: ["Quick model recap since this is his second chain lesson."],
      timing: "2 min",
    },
    game: {
      goal: "Drill the chain move on all 5 tech questions.",
      say: ["Same as before — one question from me, one folded answer from you."],
      do: ["Ask each question, let him build the folded answer, minimal intervention."],
      timing: "5 min",
    },
    yourturn: {
      goal: "One prompt, full chained turn about a tech story.",
      say: ["Tell me about a time technology helped you or gave you a problem.", "Think first — what two things would I naturally ask next?"],
      do: ["Give him space to think before starting."],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional — chain three follow-ups or a longer story.",
      say: ["Chain three follow-ups this time, or tell me a five or six sentence mini-story."],
      do: ["Model the longer example if needed: 'My phone crashed during an important call last month. I panicked because I was talking to a client...'"],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today.",
      say: ["Let's see the score today."],
      do: ["Score normally."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L10's words (complain, refund, replace, fix, sort out) — the final lesson.",
      say: ["Next lesson is your last one — take a look at these words about solving problems."],
      do: ["Flag that L10 is the capstone/final lesson — build a little anticipation."],
      timing: "1 min",
    },
  },
};

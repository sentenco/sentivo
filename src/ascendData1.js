// ASCEND Lesson 1 — "The Upgrade Reveal" — Upgrade — Baseline diagnostic

export default {
  id: "ascend-1",
  code: "L1",
  title: "The Upgrade Reveal",
  type: "Upgrade",
  tag: "Baseline",
  subtitle: "Find the exact words you're missing — then use them.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "questions",
    questions: [
      "What's the first thing that comes to mind when you think about AI in business?",
      "Do you think AI is helping or hurting most companies right now?",
    ],
  },

  gimmick: {
    kind: "upgrade",
    heading: "Level It Up",
    items: [
      { plain: "AI is getting really good at finding patterns.", upgraded: "AI is advancing at a remarkable pace in pattern recognition." },
      { plain: "A lot of companies are using AI now.", upgraded: "AI has seen widespread adoption across industries." },
      { plain: "AI is going to change a lot of jobs.", upgraded: "AI is set to reshape the labour market." },
      { plain: "AI still isn't perfect at everything.", upgraded: "AI still has notable limitations in certain tasks." },
      { plain: "Companies want to use AI to work faster.", upgraded: "Companies are turning to AI to drive efficiency gains." },
    ],
  },

  closing: {
    kind: "words",
    heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["streamline operations", "workforce displacement", "cost-benefit analysis"],
  },

  teacherGuide: {
    cover: {
      goal: "Set the frame — this is the baseline lesson, no pressure to get it right.",
      say: [
        "Today we're doing something a little different — we're finding the exact words you're missing, not new vocabulary, just more precise versions of what you already know.",
        "This is our baseline lesson, so don't worry about getting it right — we're just measuring where you are right now.",
      ],
      do: ["Let the title sit on screen for a few seconds before moving on."],
      timing: "1 min",
    },
    warmup: {
      goal: "Capture the student's raw, unedited answers for later use in Level It Up.",
      say: ["Quick questions — don't overthink it, just answer straight away."],
      do: [
        "Give zero prep time.",
        "Write down their exact wording somewhere — you'll want it later, and definitely in Lesson 5.",
        "Don't correct anything yet — just listen.",
      ],
      timing: "3 min",
    },
    gimmick: {
      goal: "Student attempts to upgrade each plain sentence before you reveal the model version.",
      say: [
        "I'll show you a plain sentence. Try upgrading it yourself, out loud, before I reveal ours.",
        "However it comes out is fine — we're comparing, not testing.",
      ],
      do: [
        "Read the plain sentence aloud.",
        "Let them attempt their own upgrade first.",
        "Reveal the model version and compare out loud.",
        "Repeat through all 5 using Next.",
      ],
      timing: "8 min",
    },
    levelup: {
      goal: "Take a rough sentence the student actually said today and upgrade it live, together.",
      say: [
        "Remember what you said earlier? Let's look at it together.",
        "Try saying that again, but sharper this time.",
      ],
      do: [
        "Type their real sentence from Warm-up (or anywhere in the lesson) into the first box.",
        "Give them a real attempt at improving it before you write the upgraded version.",
      ],
      timing: "4 min",
    },
    closing: {
      goal: "Hand off Lesson 2's 3 words for the student to write on a sticky note.",
      say: [
        "Here are three words for next lesson. Write them on a sticky note and keep it somewhere you'll see it.",
      ],
      do: ["Make sure they physically write the words down before ending, not just look at them."],
      timing: "1 min",
    },
  },
};

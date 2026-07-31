// ASCEND Lesson 2 — "The 90-Second Case" — Frame

export default {
  id: "ascend-2",
  code: "L2",
  title: "The 90-Second Case",
  type: "Frame",
  tag: "Framing",
  subtitle: "Structure a persuasive case on demand — not a rambling opinion.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "The company wants to ", word: "simplify things", post: " before the next quarter.", upgraded: "streamline operations" },
      { pre: "There's real concern about ", word: "people losing their jobs", post: " as automation spreads.", upgraded: "workforce displacement" },
      { pre: "Leadership is ", word: "weighing the pros and cons", post: " before deciding.", upgraded: "cost-benefit analysis" },
    ],
  },

  gimmick: {
    kind: "frame",
    heading: "Build your case in 90 seconds",
    template: ["Position", "2 Reasons", "Caveat", "Recommendation"],
    prompts: [
      "Should the company automate part of its hiring process?",
      "Should the customer service team be automated next?",
    ],
  },

  closing: {
    kind: "words",
    heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["raises serious concerns", "erode public trust", "strike the right balance"],
  },

  teacherGuide: {
    cover: {
      goal: "Introduce framing as a skill — structure over speaking freely.",
      say: ["Today's about structure. Not what you say, but the order you say it in."],
      do: [],
      timing: "1 min",
    },
    warmup: {
      goal: "Student tries to level up each easy phrase before seeing the target word from last lesson's sticky note.",
      say: ["I'll read a sentence with a simple word highlighted. Try to say it in a more polished way before I show you the target phrase."],
      do: [
        "Read each sentence aloud with emphasis on the highlighted phrase.",
        "Let them attempt the upgrade first, then reveal the target phrase — it should match their sticky note from last lesson.",
      ],
      timing: "4 min",
    },
    gimmick: {
      goal: "Student builds a 90-second case using Position → 2 Reasons → Caveat → Recommendation.",
      say: [
        "Here's the shape: your position, two reasons, one caveat, then a recommendation.",
        "Take 90 seconds and build your case out loud.",
      ],
      do: [
        "First attempt with the template visible.",
        "Switch to the second prompt and hide the template for round two — see how much of the structure they hold onto without it.",
        "Coach live — this isn't graded, just corrected in the moment.",
      ],
      timing: "10 min",
    },
    levelup: {
      goal: "Take a rough sentence from today's lesson and upgrade it live.",
      say: ["Something you said a minute ago — let's sharpen it."],
      do: ["Pull from anywhere in today's lesson, not just Warm-up."],
      timing: "4 min",
    },
    closing: {
      goal: "Hand off Lesson 3's 3 words.",
      say: ["Three new words for next time — sticky note, same as before."],
      do: [],
      timing: "1 min",
    },
  },
};

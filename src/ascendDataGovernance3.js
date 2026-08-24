// ASCEND Corporate Governance & Risk — Lesson 3 — "Concede-then-Counter" — Counter

export default {
  id: "ascend-governance-3",
  code: "L3",
  title: "Concede-then-Counter",
  type: "Counter",
  tag: "Diplomacy",
  subtitle: "Disagree without sounding blunt, acknowledge, then pivot.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "This isn't a small issue — it's a ", word: "risk serious enough to matter", post: ".", upgraded: "material risk" },
      { pre: "The board needs ", word: "proper watch over this decision", post: ".", upgraded: "board oversight" },
      { pre: "If this gets out, it could cause ", word: "harm to how people see us", post: ".", upgraded: "reputational damage" },
    ],
  },

  gimmick: {
    kind: "counter",
    heading: "Concede-then-Counter",
    claims: [
      "Legal always slows the business down with unnecessary caution.",
      "Compliance is just a box-ticking exercise that doesn't really prevent harm.",
      "If competitors are taking this risk, we should too.",
    ],
  },

  closing: { kind: "words", heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["duty of care", "whistleblower protection", "cost of non-compliance"] },

  teacherGuide: {
    cover: {
      goal: "Introduce diplomatic disagreement as the skill for today.",
      say: ["Today's move: disagree without sounding blunt. Acknowledge first, then pivot."],
      do: [],
      timing: "1 min",
    },
    warmup: {
      goal: "Same level-it-up mechanic as Lesson 2, new target words from last lesson's sticky notes.",
      say: ["Same game — I'll highlight the easy version, you try to level it up before I show you the target."],
      do: ["Let them attempt the upgrade before revealing the target phrase."],
      timing: "4 min",
    },
    gimmick: {
      goal: "Teach 'You're right that X. That said, Y.' and drill it against a series of claims.",
      say: [
        "The pattern is: 'You're right that ___. That said, ___.' Acknowledge something true, then pivot to your point.",
        "I'm going to give you three pushbacks a business leader might raise. Respond to each using the pattern.",
      ],
      do: [
        "First pass: keep the sentence starter visible, let them fill in the blanks.",
        "Second pass (repeat any claim): take the starter away, see if they hold the structure from memory.",
      ],
      timing: "10 min",
    },
    levelup: {
      goal: "Take a rough sentence from today's lesson and upgrade it live.",
      say: ["Let's take something you said and sharpen it."],
      do: [],
      timing: "4 min",
    },
    closing: {
      goal: "Hand off Lesson 4's 3 words.",
      say: ["Three new words — sticky note time."],
      do: [],
      timing: "1 min",
    },
  },
};

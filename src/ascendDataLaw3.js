// ASCEND Law & Advocacy — Lesson 3 — "Concede-then-Counter" — Counter

export default {
  id: "ascend-law-3",
  code: "L3",
  title: "Concede-then-Counter",
  type: "Counter",
  tag: "Diplomacy",
  subtitle: "Disagree without sounding blunt — acknowledge, then pivot.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "The lawyer couldn't take the case because of a ", word: "problem representing both sides fairly", post: ".", upgraded: "conflict of interest" },
      { pre: "It's ", word: "the prosecution's job to provide enough evidence", post: ".", upgraded: "burden of proof" },
      { pre: "Lawyers have to ", word: "keep what clients tell them private", post: ".", upgraded: "duty of confidentiality" },
    ],
  },

  gimmick: {
    kind: "counter",
    heading: "Concede-then-Counter",
    claims: [
      "Lawyers only care about winning, not about justice.",
      "Confidentiality shouldn't apply if a client is planning something dangerous.",
      "If a case is unpopular, a lawyer shouldn't be allowed to defend it.",
    ],
  },

  closing: { kind: "words", heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["due diligence", "good faith", "reasonable doubt"] },

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
        "I'm going to give you three opinions about the legal profession. Respond to each using the pattern.",
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

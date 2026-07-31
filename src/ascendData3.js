// ASCEND Lesson 3 — "Concede-then-Counter" — Counter

export default {
  id: "ascend-3",
  code: "L3",
  title: "Concede-then-Counter",
  type: "Counter",
  tag: "Diplomacy",
  subtitle: "Disagree without sounding blunt — acknowledge, then pivot.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "This ", word: "raises serious concerns", post: " among regulators.", synonyms: "worries people · draws sharp criticism · is a real cause for alarm" },
      { pre: "Mishandling data could ", word: "erode public trust", post: " in the company.", synonyms: "damage people's confidence · make people trust the company less · weaken its reputation" },
      { pre: "We need to ", word: "strike the right balance", post: " between innovation and privacy.", synonyms: "find the right compromise · balance both sides fairly · get the mix right" },
    ],
  },

  gimmick: {
    kind: "counter",
    heading: "Concede-then-Counter",
    claims: [
      "AI companies collect far too much personal data without real consent.",
      "Regulation will only slow down innovation and make us less competitive.",
      "People should just avoid using these tools if they're worried about privacy.",
    ],
  },

  closing: {
    kind: "words",
    heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["gain a competitive edge", "significant upfront investment", "long-term payoff"],
  },

  teacherGuide: {
    cover: {
      goal: "Introduce diplomatic disagreement as the skill for today.",
      say: ["Today's move: disagree without sounding blunt. Acknowledge first, then pivot."],
      do: [],
      timing: "1 min",
    },
    warmup: {
      goal: "Synonym warm-up, same mechanic as Lesson 2, new words.",
      say: ["Same game — I'll highlight a word, you give me another way to say it."],
      do: ["Let them attempt before revealing the examples."],
      timing: "4 min",
    },
    gimmick: {
      goal: "Teach 'You're right that X. That said, Y.' and drill it against a series of claims.",
      say: [
        "The pattern is: 'You're right that ___. That said, ___.' Acknowledge something true, then pivot to your point.",
        "I'm going to give you three opinions. Respond to each using the pattern.",
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

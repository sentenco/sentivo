// SEQUENCE, Finance & Banking Track, Lesson 7: "Talking About a Billing Dispute"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-finance-7",
  code: "L7",
  situation: "Talking About a Billing Dispute",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Investing",
      questions: [
        { q: "When did you first notice the incorrect charge?", parts: [
          { label: "Core", text: "I first noticed it" },
          { label: "Time", text: "while reviewing my statement" },
          { label: "Condition", text: "if I hadn't checked it closely that month" },
        ]},
        { q: "When did you contact customer service about it?", parts: [
          { label: "Core", text: "I contacted them" },
          { label: "Time", text: "the same day I noticed it" },
          { label: "Condition", text: "if I had waited too long, it might have been harder to fix" },
        ]},
        { q: "When was the issue finally resolved?", parts: [
          { label: "Core", text: "It was finally resolved" },
          { label: "Time", text: "about a week later" },
          { label: "Condition", text: "if I hadn't followed up again" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did you resolve the billing dispute?",
        parts: [
          { label: "Core", text: "I resolved it" },
          { label: "Manner", text: "by calling customer service and explaining clearly" },
          { label: "Condition", text: "if that hadn't worked, I would have escalated it further" },
        ],
      },
      questions: [
        { q: "How did you prepare before calling about the dispute?", parts: [
          { label: "Core", text: "I prepared" },
          { label: "Manner", text: "by gathering all my statements and receipts" },
          { label: "Condition", text: "if I hadn't had that proof ready" },
        ]},
        { q: "How did the company make it right?", parts: [
          { label: "Core", text: "They made it right" },
          { label: "Manner", text: "by refunding the incorrect charge" },
          { label: "Condition", text: "if they hadn't agreed, I would have disputed it with my bank" },
        ]},
        { q: "How do you avoid billing issues now?", parts: [
          { label: "Core", text: "I avoid them now" },
          { label: "Manner", text: "by reviewing my statements every month" },
          { label: "Condition", text: "if I keep catching things early" },
        ]},
      ],
    },
  ],
};

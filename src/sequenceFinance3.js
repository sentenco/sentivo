// SEQUENCE, Finance & Banking Track, Lesson 3: "Talking About an Unexpected Expense"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-finance-3",
  code: "L3",
  situation: "Talking About an Unexpected Expense",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Budget",
      questions: [
        { q: "Why was that expense so unexpected?", parts: [
          { label: "Core", text: "It was unexpected" },
          { label: "Reason", text: "because nothing like it had happened before" },
          { label: "Condition", text: "if I had planned for it in advance" },
        ]},
        { q: "Why did you have to dip into your savings?", parts: [
          { label: "Core", text: "I had to dip into it" },
          { label: "Reason", text: "because the expense was too large for my regular budget" },
          { label: "Condition", text: "if I hadn't had savings to fall back on" },
        ]},
        { q: "Why do you now keep an emergency fund?", parts: [
          { label: "Core", text: "I keep one now" },
          { label: "Reason", text: "because of that exact situation" },
          { label: "Condition", text: "if it hadn't happened, I probably wouldn't have started" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What happened with that unexpected expense?",
        parts: [
          { label: "Core", text: "My car needed a major repair" },
          { label: "Detail", text: "specifically the transmission" },
          { label: "Sequence", text: "before I could even drive it again" },
        ],
      },
      questions: [
        { q: "What did you do to cover the cost?", parts: [
          { label: "Core", text: "I used my emergency fund" },
          { label: "Detail", text: "specifically money I'd been saving for a while" },
          { label: "Sequence", text: "before it even felt like an emergency" },
        ]},
        { q: "What did you learn from that experience?", parts: [
          { label: "Core", text: "I learned to plan better" },
          { label: "Detail", text: "specifically for car and home repairs" },
          { label: "Sequence", text: "before something else comes up" },
        ]},
        { q: "What changed about your budget after that?", parts: [
          { label: "Core", text: "I added a repair fund category" },
          { label: "Detail", text: "specifically a small amount every month" },
          { label: "Sequence", text: "before the next surprise expense hits" },
        ]},
      ],
    },
  ],
};

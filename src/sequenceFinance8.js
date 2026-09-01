// SEQUENCE, Finance & Banking Track, Lesson 8: "Talking About Financial Plans for the Future"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-finance-8",
  code: "L8",
  situation: "Talking About Financial Plans for the Future",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Billing Dispute",
      questions: [
        { q: "How are you planning your finances for next year?", parts: [
          { label: "Core", text: "I'm planning them" },
          { label: "Manner", text: "by setting clearer savings goals" },
          { label: "Condition", text: "if I stay consistent throughout the year" },
        ]},
        { q: "How do you plan to pay off any remaining debt?", parts: [
          { label: "Core", text: "I plan to pay it off" },
          { label: "Manner", text: "by putting extra money toward it each month" },
          { label: "Condition", text: "if nothing unexpected comes up" },
        ]},
        { q: "How are you preparing for retirement?", parts: [
          { label: "Core", text: "I'm preparing" },
          { label: "Manner", text: "by contributing to a retirement account regularly" },
          { label: "Condition", text: "if I keep it consistent over the years" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your financial plans for the future?",
        parts: [
          { label: "Core", text: "I want to pay off my debt" },
          { label: "Sequence", text: "before focusing more on investing" },
          { label: "Purpose", text: "to build a stronger financial foundation" },
        ],
      },
      questions: [
        { q: "What's a financial goal you're working toward this year?", parts: [
          { label: "Core", text: "I'm working toward a bigger emergency fund" },
          { label: "Sequence", text: "before taking on any new expenses" },
          { label: "Purpose", text: "to feel more financially secure" },
        ]},
        { q: "What are you doing to prepare for a major purchase?", parts: [
          { label: "Core", text: "I'm saving steadily" },
          { label: "Sequence", text: "before interest rates change again" },
          { label: "Purpose", text: "to be ready when the time comes" },
        ]},
        { q: "What's something you want to achieve financially in the next few years?", parts: [
          { label: "Core", text: "I want to buy a home" },
          { label: "Sequence", text: "before renting stops making sense for me" },
          { label: "Purpose", text: "to finally invest in something long-term" },
        ]},
      ],
    },
  ],
};

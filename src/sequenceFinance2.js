// SEQUENCE, Finance & Banking Track, Lesson 2: "Talking About a Budget"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-finance-2",
  code: "L2",
  situation: "Talking About a Budget",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Opening a Bank Account",
      questions: [
        { q: "How did you create your monthly budget?", parts: [
          { label: "Core", text: "I created it" },
          { label: "Manner", text: "by listing all my fixed expenses first" },
          { label: "Purpose", text: "to see what's actually left over" },
        ]},
        { q: "How do you stick to your budget?", parts: [
          { label: "Core", text: "I stick to it" },
          { label: "Manner", text: "by checking in on it every week" },
          { label: "Purpose", text: "to catch overspending early" },
        ]},
        { q: "How do you adjust your budget when something changes?", parts: [
          { label: "Core", text: "I adjust it" },
          { label: "Manner", text: "by cutting back in one category" },
          { label: "Purpose", text: "to make room for the new expense" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why did you decide to start budgeting?",
        parts: [
          { label: "Core", text: "I decided to start" },
          { label: "Reason", text: "because I had no idea where my money was going" },
          { label: "Condition", text: "if I hadn't tracked it, I never would have noticed" },
        ],
      },
      questions: [
        { q: "Why do you think budgeting is harder than it sounds?", parts: [
          { label: "Core", text: "I think it's harder" },
          { label: "Reason", text: "because unexpected expenses always come up" },
          { label: "Condition", text: "if you don't build in some flexibility" },
        ]},
        { q: "Why did you go over budget last month?", parts: [
          { label: "Core", text: "I went over" },
          { label: "Reason", text: "because of a few unplanned purchases" },
          { label: "Condition", text: "if I had stuck to my usual routine" },
        ]},
        { q: "Why does having a budget reduce your stress?", parts: [
          { label: "Core", text: "It reduces my stress" },
          { label: "Reason", text: "because I always know where I stand financially" },
          { label: "Condition", text: "if I keep it updated regularly" },
        ]},
      ],
    },
  ],
};

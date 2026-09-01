// SEQUENCE, Finance & Banking Track, Lesson 4: "Talking About Saving for a Goal"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-finance-4",
  code: "L4",
  situation: "Talking About Saving for a Goal",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About an Unexpected Expense",
      questions: [
        { q: "What are you currently saving up for?", parts: [
          { label: "Core", text: "I'm saving up for a vacation" },
          { label: "Detail", text: "specifically a trip I've wanted to take for years" },
          { label: "Sequence", text: "before prices go up closer to the date" },
        ]},
        { q: "What did you cut back on to save more?", parts: [
          { label: "Core", text: "I cut back on eating out" },
          { label: "Detail", text: "specifically limiting it to once a week" },
          { label: "Sequence", text: "before I even noticed the savings adding up" },
        ]},
        { q: "What milestone did you recently hit in your savings?", parts: [
          { label: "Core", text: "I hit my halfway point" },
          { label: "Detail", text: "specifically toward my savings goal" },
          { label: "Sequence", text: "before I even expected to" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where do you keep the money you're saving for that goal?",
        parts: [
          { label: "Core", text: "I keep it" },
          { label: "Place", text: "in a separate savings account" },
          { label: "Detail", text: "specifically one I don't touch for anything else" },
        ],
      },
      questions: [
        { q: "Where did you learn about high-yield savings accounts?", parts: [
          { label: "Core", text: "I learned about them" },
          { label: "Place", text: "from a friend who works in finance" },
          { label: "Detail", text: "specifically after asking for advice" },
        ]},
        { q: "Where do you check your progress toward your savings goal?", parts: [
          { label: "Core", text: "I check it" },
          { label: "Place", text: "in my banking app" },
          { label: "Detail", text: "specifically a tracker I set up for that goal" },
        ]},
        { q: "Where did you find tips for saving money faster?", parts: [
          { label: "Core", text: "I found them" },
          { label: "Place", text: "on a personal finance blog" },
          { label: "Detail", text: "specifically one focused on realistic advice" },
        ]},
      ],
    },
  ],
};

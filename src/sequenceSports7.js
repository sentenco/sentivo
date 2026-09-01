// SEQUENCE, Sports & Activities Track, Lesson 7: "Talking About Balancing Sports and School"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-sports-7",
  code: "L7",
  situation: "Talking About Balancing Sports and School",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Big Competition",
      questions: [
        { q: "When do you usually find time to study during the season?", parts: [
          { label: "Core", text: "I find time to study" },
          { label: "Time", text: "late at night" },
          { label: "Condition", text: "if practice doesn't run too long" },
        ]},
        { q: "When is it hardest to balance sports and school?", parts: [
          { label: "Core", text: "It's hardest" },
          { label: "Time", text: "during exam week" },
          { label: "Condition", text: "if we also have a big game that week" },
        ]},
        { q: "When did you realize you needed better time management?", parts: [
          { label: "Core", text: "I realized it" },
          { label: "Time", text: "after falling behind on homework" },
          { label: "Condition", text: "if I hadn't caught up quickly" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How do you balance sports and school?",
        parts: [
          { label: "Core", text: "I balance them" },
          { label: "Manner", text: "by planning my week ahead of time" },
          { label: "Condition", text: "if I stick to the schedule" },
        ],
      },
      questions: [
        { q: "How do you catch up on missed schoolwork after a tournament?", parts: [
          { label: "Core", text: "I catch up" },
          { label: "Manner", text: "by asking teachers for extra help" },
          { label: "Condition", text: "if I fall too far behind" },
        ]},
        { q: "How does your coach support your schoolwork?", parts: [
          { label: "Core", text: "My coach supports it" },
          { label: "Manner", text: "by checking in on our grades" },
          { label: "Condition", text: "if anyone starts struggling" },
        ]},
        { q: "How do you make sure sports don't take over your life?", parts: [
          { label: "Core", text: "I make sure of that" },
          { label: "Manner", text: "by setting aside time for other things" },
          { label: "Condition", text: "if I notice I'm getting burned out" },
        ]},
      ],
    },
  ],
};

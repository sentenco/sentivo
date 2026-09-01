// SEQUENCE, Health & Wellness Track, Lesson 6: "Talking About Exercise"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-health-6",
  code: "L6",
  situation: "Talking About Exercise",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About Diet and Nutrition",
      questions: [
        { q: "Why did you start exercising regularly?", parts: [
          { label: "Core", text: "I started" },
          { label: "Purpose", text: "to build a healthier routine overall" },
          { label: "Reason", text: "because my energy levels were dropping" },
        ]},
        { q: "Why do you prefer a certain type of exercise?", parts: [
          { label: "Core", text: "I prefer it" },
          { label: "Purpose", text: "to actually enjoy staying active" },
          { label: "Reason", text: "because I stick with things I find fun" },
        ]},
        { q: "Why is consistency more important than intensity to you?", parts: [
          { label: "Core", text: "Consistency matters more" },
          { label: "Purpose", text: "to build a habit that lasts" },
          { label: "Reason", text: "because pushing too hard early leads to burnout" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When do you usually work out during the week?",
        parts: [
          { label: "Core", text: "I work out" },
          { label: "Time", text: "early in the morning" },
          { label: "Condition", text: "if I can wake up early enough" },
        ],
      },
      questions: [
        { q: "When did you notice exercise starting to feel easier?", parts: [
          { label: "Core", text: "I noticed it" },
          { label: "Time", text: "after about a month" },
          { label: "Condition", text: "if I kept showing up consistently" },
        ]},
        { q: "When do you take rest days?", parts: [
          { label: "Core", text: "I take rest days" },
          { label: "Time", text: "once or twice a week" },
          { label: "Condition", text: "if my body needs the recovery" },
        ]},
        { q: "When do you plan to increase your workout intensity?", parts: [
          { label: "Core", text: "I plan to increase it" },
          { label: "Time", text: "once I feel stronger" },
          { label: "Condition", text: "if my current routine starts feeling too easy" },
        ]},
      ],
    },
  ],
};

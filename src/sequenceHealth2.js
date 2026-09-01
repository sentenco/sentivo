// SEQUENCE, Health & Wellness Track, Lesson 2: "Talking About Daily Health Habits"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-health-2",
  code: "L2",
  situation: "Talking About Daily Health Habits",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Talking About a Doctor's Visit",
      questions: [
        { q: "How do you stay on top of your daily health habits?", parts: [
          { label: "Core", text: "I stay on top of them" },
          { label: "Manner", text: "by keeping a simple daily routine" },
          { label: "Purpose", text: "to make healthy choices automatic" },
        ]},
        { q: "How did you build a habit that stuck?", parts: [
          { label: "Core", text: "I built it" },
          { label: "Manner", text: "by starting really small at first" },
          { label: "Purpose", text: "to avoid burning out too quickly" },
        ]},
        { q: "How do you stay consistent when you're busy?", parts: [
          { label: "Core", text: "I stay consistent" },
          { label: "Manner", text: "by planning around my schedule" },
          { label: "Purpose", text: "to avoid skipping it entirely" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why did you start paying more attention to your health?",
        parts: [
          { label: "Core", text: "I started paying attention" },
          { label: "Reason", text: "because I wasn't feeling like myself" },
          { label: "Condition", text: "if I hadn't made a change" },
        ],
      },
      questions: [
        { q: "Why do you think small daily habits matter more than big changes?", parts: [
          { label: "Core", text: "I think they matter more" },
          { label: "Reason", text: "because they're easier to keep up long-term" },
          { label: "Condition", text: "if you actually stick with them" },
        ]},
        { q: "Why did you struggle to keep a health habit going?", parts: [
          { label: "Core", text: "I struggled" },
          { label: "Reason", text: "because I tried to change too much at once" },
          { label: "Condition", text: "if I hadn't scaled it back" },
        ]},
        { q: "Why does having a routine help you stay healthy?", parts: [
          { label: "Core", text: "It helps" },
          { label: "Reason", text: "because it removes the need to decide every day" },
          { label: "Condition", text: "if you build it into your schedule" },
        ]},
      ],
    },
  ],
};

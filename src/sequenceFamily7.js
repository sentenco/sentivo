// SEQUENCE, Family & Home Life Track, Lesson 7: "Talking About Family Traditions"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-family-7",
  code: "L7",
  situation: "Talking About Family Traditions",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Helping a Younger Sibling",
      questions: [
        { q: "When does your family celebrate a big tradition?", parts: [
          { label: "Core", text: "We celebrate" },
          { label: "Time", text: "once a year" },
          { label: "Condition", text: "if everyone can make it home" },
        ]},
        { q: "When did a family tradition start in your house?", parts: [
          { label: "Core", text: "That tradition started" },
          { label: "Time", text: "a few years ago" },
          { label: "Condition", text: "if I remember correctly" },
        ]},
        { q: "When do you look forward to a tradition the most?", parts: [
          { label: "Core", text: "I look forward to it most" },
          { label: "Time", text: "right around the holidays" },
          { label: "Condition", text: "if it's been a stressful few weeks" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How does your family usually celebrate a tradition?",
        parts: [
          { label: "Core", text: "We celebrate" },
          { label: "Manner", text: "by cooking a big meal together" },
          { label: "Condition", text: "if everyone is free that day" },
        ],
      },
      questions: [
        { q: "How did your family start that specific tradition?", parts: [
          { label: "Core", text: "It started" },
          { label: "Manner", text: "by accident, after a fun weekend" },
          { label: "Condition", text: "if my grandmother hadn't suggested doing it again" },
        ]},
        { q: "How do you plan to keep a tradition going?", parts: [
          { label: "Core", text: "I plan to keep it going" },
          { label: "Manner", text: "by doing it with my own family someday" },
          { label: "Condition", text: "if I ever move away" },
        ]},
        { q: "How does your family include new members in a tradition?", parts: [
          { label: "Core", text: "We include them" },
          { label: "Manner", text: "by explaining the story behind it" },
          { label: "Condition", text: "if it's their first time joining" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Travel & Transportation Track, Lesson 7: "Talking About a Memorable Trip"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-travel-7",
  code: "L7",
  situation: "Talking About a Memorable Trip",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Getting Lost",
      questions: [
        { q: "When did that trip become one of your favorites?", parts: [
          { label: "Core", text: "It became a favorite" },
          { label: "Time", text: "almost immediately" },
          { label: "Condition", text: "if I look back on it now" },
        ]},
        { q: "When did the most memorable moment of the trip happen?", parts: [
          { label: "Core", text: "It happened" },
          { label: "Time", text: "on the very last day" },
          { label: "Condition", text: "if we hadn't decided to stay one extra day" },
        ]},
        { q: "When do you think about that trip the most?", parts: [
          { label: "Core", text: "I think about it most" },
          { label: "Time", text: "whenever I need a good memory" },
          { label: "Condition", text: "if I'm having a stressful week" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did that trip end up being so memorable?",
        parts: [
          { label: "Core", text: "It became memorable" },
          { label: "Manner", text: "by not going exactly as planned" },
          { label: "Condition", text: "if we hadn't stayed flexible about it" },
        ],
      },
      questions: [
        { q: "How did you make the most of a short trip?", parts: [
          { label: "Core", text: "I made the most of it" },
          { label: "Manner", text: "by planning just a few key things" },
          { label: "Condition", text: "if I left room for spontaneous moments too" },
        ]},
        { q: "How did you and your travel companions get along?", parts: [
          { label: "Core", text: "We got along well" },
          { label: "Manner", text: "by compromising on what to do each day" },
          { label: "Condition", text: "if we hadn't disagreed too much" },
        ]},
        { q: "How do you usually preserve memories from a trip?", parts: [
          { label: "Core", text: "I preserve them" },
          { label: "Manner", text: "by keeping a small journal" },
          { label: "Condition", text: "if I actually remember to write in it" },
        ]},
      ],
    },
  ],
};

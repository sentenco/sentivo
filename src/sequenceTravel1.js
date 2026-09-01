// SEQUENCE, Travel & Transportation Track, Lesson 1: "Planning a Trip"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-travel-1",
  code: "L1",
  situation: "Planning a Trip",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about how you're planning your next trip.",
        parts: [
          { label: "Core", text: "I'm booking flights" },
          { label: "Time", text: "a few months in advance" },
          { label: "Sequence", text: "before prices go up closer to the date" },
          { label: "Reason", text: "because early booking usually saves money" },
        ],
      },
      questions: [
        { q: "When do you usually start planning a trip?", parts: [
          { label: "Core", text: "I start planning" },
          { label: "Time", text: "months ahead of time" },
          { label: "Sequence", text: "before deciding on smaller details" },
          { label: "Reason", text: "because it helps me budget properly" },
        ]},
        { q: "When do you book accommodation for a trip?", parts: [
          { label: "Core", text: "I book it" },
          { label: "Time", text: "right after the flights" },
          { label: "Sequence", text: "before availability runs out" },
          { label: "Reason", text: "because good places fill up fast" },
        ]},
        { q: "When do you usually pack for a trip?", parts: [
          { label: "Core", text: "I pack" },
          { label: "Time", text: "the night before" },
          { label: "Sequence", text: "before double-checking everything in the morning" },
          { label: "Reason", text: "because I always forget something otherwise" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you decide where to go on a trip?",
        parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by researching a few different destinations" },
          { label: "Purpose", text: "to compare cost and things to do" },
        ],
      },
      questions: [
        { q: "How do you find good deals on flights?", parts: [
          { label: "Core", text: "I find them" },
          { label: "Manner", text: "by comparing prices across sites" },
          { label: "Purpose", text: "to make sure I'm not overpaying" },
        ]},
        { q: "How do you plan an itinerary for a trip?", parts: [
          { label: "Core", text: "I plan it" },
          { label: "Manner", text: "by listing the top things I want to see" },
          { label: "Purpose", text: "to avoid wasting time once I'm there" },
        ]},
        { q: "How do you pack efficiently for a trip?", parts: [
          { label: "Core", text: "I pack efficiently" },
          { label: "Manner", text: "by using a checklist every time" },
          { label: "Purpose", text: "to avoid bringing too much or forgetting things" },
        ]},
      ],
    },
  ],
};

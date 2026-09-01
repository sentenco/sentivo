// SEQUENCE, Travel & Transportation Track, Lesson 6: "Talking About Getting Lost"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-travel-6",
  code: "L6",
  situation: "Talking About Getting Lost",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About a Hotel Stay",
      questions: [
        { q: "Why did you end up getting lost in that city?", parts: [
          { label: "Core", text: "I got lost" },
          { label: "Purpose", text: "to try finding a shortcut" },
          { label: "Reason", text: "because I thought I remembered the way" },
        ]},
        { q: "Why didn't you ask for directions right away?", parts: [
          { label: "Core", text: "I didn't ask right away" },
          { label: "Purpose", text: "to figure it out myself first" },
          { label: "Reason", text: "because I didn't want to bother anyone" },
        ]},
        { q: "Why did that experience end up being memorable?", parts: [
          { label: "Core", text: "It became memorable" },
          { label: "Purpose", text: "to discover a part of the city we hadn't planned to see" },
          { label: "Reason", text: "because getting lost led us somewhere unexpected" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When did you realize you were lost?",
        parts: [
          { label: "Core", text: "I realized it" },
          { label: "Time", text: "after walking for almost an hour" },
          { label: "Condition", text: "if the streets hadn't started looking unfamiliar" },
        ],
      },
      questions: [
        { q: "When did you finally find your way back?", parts: [
          { label: "Core", text: "I finally found it" },
          { label: "Time", text: "just as it was getting dark" },
          { label: "Condition", text: "if a local hadn't pointed me in the right direction" },
        ]},
        { q: "When do you usually double-check directions now?", parts: [
          { label: "Core", text: "I double-check now" },
          { label: "Time", text: "before I even leave the hotel" },
          { label: "Condition", text: "if I'm somewhere unfamiliar" },
        ]},
        { q: "When did you start relying more on offline maps?", parts: [
          { label: "Core", text: "I started relying on them" },
          { label: "Time", text: "after that trip" },
          { label: "Condition", text: "if my phone doesn't have signal" },
        ]},
      ],
    },
  ],
};

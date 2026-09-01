// SEQUENCE, Housing & Apartment Life Track, Lesson 6: "Talking About Moving In"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-housing-6",
  code: "L6",
  situation: "Talking About Moving In",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About Neighbors",
      questions: [
        { q: "Why did moving in take longer than expected?", parts: [
          { label: "Core", text: "It took longer" },
          { label: "Purpose", text: "to get everything organized properly" },
          { label: "Reason", text: "because we had more boxes than we thought" },
        ]},
        { q: "Why did you hire movers instead of doing it yourself?", parts: [
          { label: "Core", text: "I hired movers" },
          { label: "Purpose", text: "to save time and effort" },
          { label: "Reason", text: "because I had too much to carry alone" },
        ]},
        { q: "Why did you unpack the kitchen first?", parts: [
          { label: "Core", text: "I unpacked it first" },
          { label: "Purpose", text: "to be able to cook right away" },
          { label: "Reason", text: "because eating out every night gets expensive" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When did you finally finish unpacking?",
        parts: [
          { label: "Core", text: "I finally finished" },
          { label: "Time", text: "about two weeks later" },
          { label: "Condition", text: "if I hadn't kept procrastinating on the last few boxes" },
        ],
      },
      questions: [
        { q: "When did you start feeling settled in your new place?", parts: [
          { label: "Core", text: "I started feeling settled" },
          { label: "Time", text: "after the first month" },
          { label: "Condition", text: "if everything had felt familiar sooner" },
        ]},
        { q: "When do you plan to hang up decorations?", parts: [
          { label: "Core", text: "I plan to hang them" },
          { label: "Time", text: "this coming weekend" },
          { label: "Condition", text: "if I finally have the free time" },
        ]},
        { q: "When did you have your first guests over?", parts: [
          { label: "Core", text: "I had guests over" },
          { label: "Time", text: "a few weeks after moving in" },
          { label: "Condition", text: "if the place hadn't still felt too messy" },
        ]},
      ],
    },
  ],
};

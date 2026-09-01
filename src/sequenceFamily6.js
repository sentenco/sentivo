// SEQUENCE, Family & Home Life Track, Lesson 6: "Talking About Helping a Younger Sibling"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-family-6",
  code: "L6",
  situation: "Talking About Helping a Younger Sibling",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About a Family Trip",
      questions: [
        { q: "Why do you help your younger sibling with homework?", parts: [
          { label: "Core", text: "I help with homework" },
          { label: "Purpose", text: "to make sure they don't fall behind" },
          { label: "Reason", text: "because our parents work late sometimes" },
        ]},
        { q: "Why does your sibling come to you instead of your parents?", parts: [
          { label: "Core", text: "They come to me" },
          { label: "Purpose", text: "to get a quicker answer" },
          { label: "Reason", text: "because I explain things more simply" },
        ]},
        { q: "Why do you sometimes get frustrated helping them?", parts: [
          { label: "Core", text: "I get frustrated sometimes" },
          { label: "Purpose", text: "to just finish my own work too" },
          { label: "Reason", text: "because helping takes longer than I expect" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When do you usually look after your younger sibling?",
        parts: [
          { label: "Core", text: "I look after them" },
          { label: "Time", text: "in the afternoons" },
          { label: "Condition", text: "if my parents are still at work" },
        ],
      },
      questions: [
        { q: "When did you last babysit your sibling alone?", parts: [
          { label: "Core", text: "I babysat alone" },
          { label: "Time", text: "last weekend" },
          { label: "Condition", text: "if my parents needed to run errands" },
        ]},
        { q: "When do you help your sibling get ready for school?", parts: [
          { label: "Core", text: "I help them get ready" },
          { label: "Time", text: "every morning" },
          { label: "Condition", text: "if they're running late" },
        ]},
        { q: "When does your sibling usually listen to you?", parts: [
          { label: "Core", text: "They usually listen" },
          { label: "Time", text: "right before bedtime" },
          { label: "Condition", text: "if I explain why calmly" },
        ]},
      ],
    },
  ],
};

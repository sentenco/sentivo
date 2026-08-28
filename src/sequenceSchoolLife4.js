// SEQUENCE, School Life Track, Lesson 4: "Talking About a Teacher or Coach You Admire"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-schoollife-4",
  code: "L4",
  situation: "Talking About a Teacher or Coach You Admire",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About a Group Project",
      questions: [
        { q: "What detail makes your coach stand out?", parts: [
          { label: "Core", text: "My coach stands out" },
          { label: "Detail", text: "especially how patient she is" },
          { label: "Sequence", text: "before every single practice" },
        ]},
        { q: "What's a specific thing your teacher does that helps you?", parts: [
          { label: "Core", text: "My teacher explains things clearly" },
          { label: "Detail", text: "especially with real examples" },
          { label: "Sequence", text: "before moving to the next topic" },
        ]},
        { q: "What moment made you really respect them?", parts: [
          { label: "Core", text: "I really respected my coach" },
          { label: "Detail", text: "especially after a tough loss" },
          { label: "Sequence", text: "before he even said a word about the game" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "Tell me about a coach or teacher you admire.",
        parts: [
          { label: "Core", text: "My coach always believes in us" },
          { label: "Time", text: "every single season" },
          { label: "Condition", text: "if we ever start to doubt ourselves" },
        ],
      },
      questions: [
        { q: "Tell me about a teacher who helped you improve.", parts: [
          { label: "Core", text: "My teacher helped me improve" },
          { label: "Time", text: "throughout the whole semester" },
          { label: "Condition", text: "if I ever fell behind" },
        ]},
        { q: "Tell me about a time a teacher noticed you were struggling.", parts: [
          { label: "Core", text: "My teacher noticed I was struggling" },
          { label: "Time", text: "during a really hard week" },
          { label: "Condition", text: "if I hadn't said anything myself" },
        ]},
        { q: "Tell me about a coach who pushed you to do better.", parts: [
          { label: "Core", text: "My coach pushed me" },
          { label: "Time", text: "all through the season" },
          { label: "Condition", text: "if I ever wanted to give up" },
        ]},
      ],
    },
  ],
};

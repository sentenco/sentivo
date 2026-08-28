// SEQUENCE, School Life Track, Lesson 5: "Talking About a Friendship"
// Callback to Lesson 4's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-schoollife-5",
  code: "L5",
  situation: "Talking About a Friendship",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Teacher or Coach You Admire",
      questions: [
        { q: "When did you become close with your best friend?", parts: [
          { label: "Core", text: "We became close" },
          { label: "Time", text: "back in middle school" },
          { label: "Condition", text: "if we hadn't been in the same class" },
        ]},
        { q: "When do you usually hang out with your friends?", parts: [
          { label: "Core", text: "We usually hang out" },
          { label: "Time", text: "on weekends" },
          { label: "Condition", text: "if no one has other plans" },
        ]},
        { q: "When did a friend really support you?", parts: [
          { label: "Core", text: "A friend really supported me" },
          { label: "Time", text: "during a hard time last year" },
          { label: "Condition", text: "if I hadn't reached out first" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where do you and your friends usually hang out?",
        parts: [
          { label: "Core", text: "We usually hang out" },
          { label: "Place", text: "at the park near school" },
          { label: "Detail", text: "especially after practice" },
        ],
      },
      questions: [
        { q: "Where did you meet your best friend?", parts: [
          { label: "Core", text: "I met my best friend" },
          { label: "Place", text: "in homeroom" },
          { label: "Detail", text: "on the very first day of school" },
        ]},
        { q: "Where do you go when you need to talk to someone?", parts: [
          { label: "Core", text: "I go to my friend's house" },
          { label: "Place", text: "just a few blocks away" },
          { label: "Detail", text: "especially when things feel overwhelming" },
        ]},
        { q: "Where do you and your friends usually study together?", parts: [
          { label: "Core", text: "We usually study" },
          { label: "Place", text: "at the library" },
          { label: "Detail", text: "especially before big tests" },
        ]},
      ],
    },
  ],
};

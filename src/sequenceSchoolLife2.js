// SEQUENCE, School Life Track, Lesson 2: "Talking About a Class You Like or Dislike"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-schoollife-2",
  code: "L2",
  situation: "Talking About a Class You Like or Dislike",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Describing Your School Day",
      questions: [
        { q: "How does your favorite teacher make class more interesting?", parts: [
          { label: "Core", text: "My favorite teacher makes it fun" },
          { label: "Manner", text: "by using real examples" },
          { label: "Purpose", text: "to help us actually understand" },
        ]},
        { q: "How do you push through a class you don't enjoy?", parts: [
          { label: "Core", text: "I push through it" },
          { label: "Manner", text: "by focusing on small goals" },
          { label: "Purpose", text: "to keep my grade up" },
        ]},
        { q: "How do you stay motivated in a hard class?", parts: [
          { label: "Core", text: "I stay motivated" },
          { label: "Manner", text: "by studying with friends" },
          { label: "Purpose", text: "to make it less boring" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why do you like that class so much?",
        parts: [
          { label: "Core", text: "I really like that class" },
          { label: "Reason", text: "because the teacher makes it fun" },
          { label: "Condition", text: "if we're doing a hands-on project" },
        ],
      },
      questions: [
        { q: "Why is math your favorite or least favorite subject?", parts: [
          { label: "Core", text: "Math is my favorite subject" },
          { label: "Reason", text: "because I like solving problems" },
          { label: "Condition", text: "if the problems aren't too repetitive" },
        ]},
        { q: "Why do you enjoy art class?", parts: [
          { label: "Core", text: "I enjoy art class" },
          { label: "Reason", text: "because I can be creative" },
          { label: "Condition", text: "if I have enough time to finish my work" },
        ]},
        { q: "Why do you struggle with a certain subject?", parts: [
          { label: "Core", text: "I struggle with that subject" },
          { label: "Reason", text: "because it moves really fast" },
          { label: "Condition", text: "if I miss even one class" },
        ]},
      ],
    },
  ],
};

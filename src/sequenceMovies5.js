// SEQUENCE, Movies & Entertainment Track, Lesson 5: "Talking About Watching With Friends or Family"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-movies-5",
  code: "L5",
  situation: "Talking About Watching With Friends or Family",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Plot Twist",
      questions: [
        { q: "Where do you usually watch movies with friends?", parts: [
          { label: "Core", text: "We usually watch" },
          { label: "Place", text: "at someone's house" },
          { label: "Detail", text: "specifically whoever has the biggest TV" },
        ]},
        { q: "Where does your family usually gather to watch something?", parts: [
          { label: "Core", text: "My family gathers" },
          { label: "Place", text: "in the living room" },
          { label: "Detail", text: "specifically on Friday movie nights" },
        ]},
        { q: "Where did you last watch a movie in a theater?", parts: [
          { label: "Core", text: "I last watched one" },
          { label: "Place", text: "at the mall theater nearby" },
          { label: "Detail", text: "specifically for a big new release" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why do you enjoy watching movies with other people?",
        parts: [
          { label: "Core", text: "I enjoy it" },
          { label: "Purpose", text: "to react to things together" },
          { label: "Reason", text: "because it's more fun than watching alone" },
        ],
      },
      questions: [
        { q: "Why did you choose that movie for a group watch?", parts: [
          { label: "Core", text: "I chose it" },
          { label: "Purpose", text: "to make sure everyone would enjoy it" },
          { label: "Reason", text: "because it works for different tastes" },
        ]},
        { q: "Why do you sometimes prefer watching alone instead?", parts: [
          { label: "Core", text: "I sometimes prefer it" },
          { label: "Purpose", text: "to focus on the story completely" },
          { label: "Reason", text: "because talking during a movie distracts me" },
        ]},
        { q: "Why does your family have a weekly movie night?", parts: [
          { label: "Core", text: "We have one" },
          { label: "Purpose", text: "to spend time together" },
          { label: "Reason", text: "because everyone's usually busy during the week" },
        ]},
      ],
    },
  ],
};

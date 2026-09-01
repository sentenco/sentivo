// SEQUENCE, Movies & Entertainment Track, Lesson 3: "Talking About a Favorite Character"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-movies-3",
  code: "L3",
  situation: "Talking About a Favorite Character",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Movie You Saw",
      questions: [
        { q: "Why is that character your favorite?", parts: [
          { label: "Core", text: "They're my favorite" },
          { label: "Reason", text: "because they grow so much throughout the story" },
          { label: "Condition", text: "if you watch it all the way through" },
        ]},
        { q: "Why do you relate to that character?", parts: [
          { label: "Core", text: "I relate to them" },
          { label: "Reason", text: "because they struggle with something I understand" },
          { label: "Condition", text: "if you've ever felt that way yourself" },
        ]},
        { q: "Why did that character's decision surprise you?", parts: [
          { label: "Core", text: "It surprised me" },
          { label: "Reason", text: "because it went against everything before" },
          { label: "Condition", text: "if you weren't paying close attention" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What's a moment that made you love that character?",
        parts: [
          { label: "Core", text: "There's one scene" },
          { label: "Detail", text: "specifically when they finally stand up for themselves" },
          { label: "Sequence", text: "before the story's biggest turning point" },
        ],
      },
      questions: [
        { q: "What happened to that character that stuck with you?", parts: [
          { label: "Core", text: "Something happened" },
          { label: "Detail", text: "specifically a loss they had to deal with" },
          { label: "Sequence", text: "before they changed completely" },
        ]},
        { q: "What does that character usually do in a tense moment?", parts: [
          { label: "Core", text: "They usually stay calm" },
          { label: "Detail", text: "specifically no matter how bad things get" },
          { label: "Sequence", text: "before making the right call" },
        ]},
        { q: "What's something that character says that you love?", parts: [
          { label: "Core", text: "There's a line they say" },
          { label: "Detail", text: "specifically near the very end" },
          { label: "Sequence", text: "before the credits roll" },
        ]},
      ],
    },
  ],
};

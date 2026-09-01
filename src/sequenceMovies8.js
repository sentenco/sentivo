// SEQUENCE, Movies & Entertainment Track, Lesson 8: "Talking About What You Want to Watch Next"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-movies-8",
  code: "L8",
  situation: "Talking About What You Want to Watch Next",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About an Actor or Director You Like",
      questions: [
        { q: "How are you deciding what to watch next?", parts: [
          { label: "Core", text: "I'm deciding" },
          { label: "Manner", text: "by asking friends for recommendations" },
          { label: "Condition", text: "if I can't decide on my own" },
        ]},
        { q: "How do you plan to catch up on a show you missed?", parts: [
          { label: "Core", text: "I plan to catch up" },
          { label: "Manner", text: "by binge-watching over a weekend" },
          { label: "Condition", text: "if I have enough free time" },
        ]},
        { q: "How are you narrowing down your watchlist?", parts: [
          { label: "Core", text: "I'm narrowing it down" },
          { label: "Manner", text: "by picking based on genre first" },
          { label: "Condition", text: "if I'm in a specific mood" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What do you want to watch next?",
        parts: [
          { label: "Core", text: "I want to start that new series" },
          { label: "Sequence", text: "before everyone spoils it for me" },
          { label: "Purpose", text: "to see what all the hype is about" },
        ],
      },
      questions: [
        { q: "What's on your watchlist right now?", parts: [
          { label: "Core", text: "I have a new movie saved" },
          { label: "Sequence", text: "before it leaves the streaming service" },
          { label: "Purpose", text: "to finally cross it off my list" },
        ]},
        { q: "What are you and your friends planning to watch together?", parts: [
          { label: "Core", text: "We're planning to watch a new season" },
          { label: "Sequence", text: "before it gets spoiled online" },
          { label: "Purpose", text: "to experience it together" },
        ]},
        { q: "What's something you're excited to watch this year?", parts: [
          { label: "Core", text: "I'm excited for the sequel" },
          { label: "Sequence", text: "before the original leaves my memory" },
          { label: "Purpose", text: "to see how the story continues" },
        ]},
      ],
    },
  ],
};

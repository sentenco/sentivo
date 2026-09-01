// SEQUENCE, Online & Gaming Track, Lesson 8: "Talking About Gaming Plans"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-gaming-8",
  code: "L8",
  situation: "Talking About Gaming Plans",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Meeting Someone From an Online Community",
      questions: [
        { q: "How are you planning to spend more time with your online friends?", parts: [
          { label: "Core", text: "I'm planning to" },
          { label: "Manner", text: "by scheduling regular game nights" },
          { label: "Condition", text: "if everyone's schedules line up" },
        ]},
        { q: "How do you plan to improve at your favorite game?", parts: [
          { label: "Core", text: "I plan to improve" },
          { label: "Manner", text: "by practicing specific skills daily" },
          { label: "Condition", text: "if I stay consistent about it" },
        ]},
        { q: "How are you preparing for an upcoming tournament or event?", parts: [
          { label: "Core", text: "I'm preparing" },
          { label: "Manner", text: "by playing with a more serious team" },
          { label: "Condition", text: "if I can find the right teammates" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your gaming plans for the near future?",
        parts: [
          { label: "Core", text: "I want to reach a higher rank" },
          { label: "Sequence", text: "before the season resets" },
          { label: "Purpose", text: "to prove how much I've improved" },
        ],
      },
      questions: [
        { q: "What's one game goal you're working toward?", parts: [
          { label: "Core", text: "I want to finish the whole game" },
          { label: "Sequence", text: "before the sequel comes out" },
          { label: "Purpose", text: "to be ready for the next one" },
        ]},
        { q: "What are you and your squad planning to do together?", parts: [
          { label: "Core", text: "We're planning to enter a tournament" },
          { label: "Sequence", text: "before summer ends" },
          { label: "Purpose", text: "to see how we compare to other teams" },
        ]},
        { q: "What's something you hope to try in gaming this year?", parts: [
          { label: "Core", text: "I want to try streaming" },
          { label: "Sequence", text: "before the school year gets too busy" },
          { label: "Purpose", text: "to see if I actually enjoy it" },
        ]},
      ],
    },
  ],
};

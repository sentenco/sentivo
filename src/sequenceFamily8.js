// SEQUENCE, Family & Home Life Track, Lesson 8: "Talking About Plans With Your Family"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-family-8",
  code: "L8",
  situation: "Talking About Plans With Your Family",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Family Traditions",
      questions: [
        { q: "How are you planning to spend more time with family?", parts: [
          { label: "Core", text: "I'm planning to spend more time" },
          { label: "Manner", text: "by joining family dinners more often" },
          { label: "Condition", text: "if my schedule allows it" },
        ]},
        { q: "How does your family plan future get-togethers?", parts: [
          { label: "Core", text: "We plan them" },
          { label: "Manner", text: "by picking a date months in advance" },
          { label: "Condition", text: "if everyone's calendars line up" },
        ]},
        { q: "How do you plan to include your family in a big decision?", parts: [
          { label: "Core", text: "I plan to include them" },
          { label: "Manner", text: "by asking for their advice first" },
          { label: "Condition", text: "if it's something that affects all of us" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your plans with your family this year?",
        parts: [
          { label: "Core", text: "We're planning a trip" },
          { label: "Sequence", text: "before summer ends" },
          { label: "Purpose", text: "to spend time together before I get busier with school" },
        ],
      },
      questions: [
        { q: "What's something your family wants to do together soon?", parts: [
          { label: "Core", text: "We want to visit my cousins" },
          { label: "Sequence", text: "before the school year starts" },
          { label: "Purpose", text: "to catch up before things get busy" },
        ]},
        { q: "What are you hoping to do with your family this weekend?", parts: [
          { label: "Core", text: "I'm hoping we cook together" },
          { label: "Sequence", text: "before everyone gets busy with their own plans" },
          { label: "Purpose", text: "to actually spend real time as a family" },
        ]},
        { q: "What's a family goal you're working toward together?", parts: [
          { label: "Core", text: "We're saving up for a trip" },
          { label: "Sequence", text: "before next summer" },
          { label: "Purpose", text: "to finally go somewhere we've always wanted to go" },
        ]},
      ],
    },
  ],
};

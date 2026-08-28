// SEQUENCE, Job Interviews Track, Lesson 4: "Talking About a Challenge You Overcame"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-4",
  code: "L4",
  situation: "Talking About a Challenge You Overcame",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Describing Your Strengths",
      questions: [
        { q: "What detail made that challenge harder?", parts: [
          { label: "Core", text: "The tight budget made it harder" },
          { label: "Detail", text: "especially with a shrinking team" },
          { label: "Sequence", text: "before we found a workaround" },
        ]},
        { q: "What was the turning point?", parts: [
          { label: "Core", text: "The turning point was a client call" },
          { label: "Detail", text: "especially once we heard their real concern" },
          { label: "Sequence", text: "before the deadline arrived" },
        ]},
        { q: "What made you confident you'd solve it?", parts: [
          { label: "Core", text: "Our team's experience made me confident" },
          { label: "Detail", text: "especially after similar situations before" },
          { label: "Sequence", text: "before panic could set in" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "Tell me about a challenge you overcame.",
        parts: [
          { label: "Core", text: "We had a difficult deadline" },
          { label: "Time", text: "last year" },
          { label: "Condition", text: "if we hadn't reorganized the team, we would have missed it" },
        ],
      },
      questions: [
        { q: "Tell me about a time you fixed a mistake.", parts: [
          { label: "Core", text: "I made a mistake" },
          { label: "Time", text: "early in the project" },
          { label: "Condition", text: "if I hadn't caught it, it would have affected the client" },
        ]},
        { q: "Tell me about handling an unexpected problem.", parts: [
          { label: "Core", text: "We lost a key vendor" },
          { label: "Time", text: "right before launch" },
          { label: "Condition", text: "if we hadn't found a backup quickly, the launch would have slipped" },
        ]},
        { q: "Tell me about working with limited resources.", parts: [
          { label: "Core", text: "We had a small budget" },
          { label: "Time", text: "for most of the quarter" },
          { label: "Condition", text: "if we hadn't prioritized carefully, we would have run out" },
        ]},
      ],
    },
  ],
};

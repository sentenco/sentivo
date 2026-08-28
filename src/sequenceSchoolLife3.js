// SEQUENCE, School Life Track, Lesson 3: "Talking About a Group Project"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-schoollife-3",
  code: "L3",
  situation: "Talking About a Group Project",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Class You Like or Dislike",
      questions: [
        { q: "Why did your group work well together?", parts: [
          { label: "Core", text: "Our group worked well" },
          { label: "Reason", text: "because everyone did their part" },
          { label: "Condition", text: "if we planned things out early" },
        ]},
        { q: "Why was a certain teammate helpful?", parts: [
          { label: "Core", text: "One teammate was really helpful" },
          { label: "Reason", text: "because she kept us on track" },
          { label: "Condition", text: "if we were about to miss a deadline" },
        ]},
        { q: "Why did the project take longer than expected?", parts: [
          { label: "Core", text: "The project took longer" },
          { label: "Reason", text: "because we changed our idea halfway through" },
          { label: "Condition", text: "if we hadn't started early" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What was your group project about?",
        parts: [
          { label: "Core", text: "Our project was about recycling" },
          { label: "Detail", text: "specifically plastic waste at school" },
          { label: "Sequence", text: "before we presented it to the whole class" },
        ],
      },
      questions: [
        { q: "What part of the project did you work on?", parts: [
          { label: "Core", text: "I worked on the research part" },
          { label: "Detail", text: "specifically finding good sources" },
          { label: "Sequence", text: "before my partner made the slides" },
        ]},
        { q: "What was the hardest part of the project?", parts: [
          { label: "Core", text: "The hardest part was the deadline" },
          { label: "Detail", text: "especially with everyone's different schedules" },
          { label: "Sequence", text: "before we finally found a time that worked" },
        ]},
        { q: "What made your presentation stand out?", parts: [
          { label: "Core", text: "Our presentation stood out" },
          { label: "Detail", text: "especially the visuals we used" },
          { label: "Sequence", text: "before the teacher even asked a question" },
        ]},
      ],
    },
  ],
};

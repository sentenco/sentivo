// SEQUENCE, Job Interviews Track, Lesson 3: "Describing Your Strengths"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-3",
  code: "L3",
  situation: "Describing Your Strengths",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Explaining Why You Left Your Last Job",
      questions: [
        { q: "Why do you consider yourself a strong communicator?", parts: [
          { label: "Core", text: "I'd call myself a clear communicator" },
          { label: "Reason", text: "because I always confirm expectations" },
          { label: "Condition", text: "if the situation is complex" },
        ]},
        { q: "Why are you good under pressure?", parts: [
          { label: "Core", text: "I handle pressure well" },
          { label: "Reason", text: "because I stay organized" },
          { label: "Condition", text: "if I have even a little planning time" },
        ]},
        { q: "Why do people trust your judgment?", parts: [
          { label: "Core", text: "People tend to trust my judgment" },
          { label: "Reason", text: "because I explain my reasoning" },
          { label: "Condition", text: "if the decision affects the whole team" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What's an example of a strength you rely on?",
        parts: [
          { label: "Core", text: "I rely on my problem-solving skills" },
          { label: "Detail", text: "especially in high-pressure situations" },
          { label: "Sequence", text: "before anyone else notices something is wrong" },
        ],
      },
      questions: [
        { q: "What's a skill you use every day?", parts: [
          { label: "Core", text: "I use my organizational skills" },
          { label: "Detail", text: "especially when juggling several projects" },
          { label: "Sequence", text: "before deadlines start piling up" },
        ]},
        { q: "What's something colleagues say about you?", parts: [
          { label: "Core", text: "Colleagues often mention my patience" },
          { label: "Detail", text: "especially when training someone new" },
          { label: "Sequence", text: "before they even ask for help" },
        ]},
        { q: "What's a strength that surprises people?", parts: [
          { label: "Core", text: "People are often surprised by my attention to detail" },
          { label: "Detail", text: "especially in fast-moving projects" },
          { label: "Sequence", text: "before small errors become big problems" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, School Life Track, Lesson 8: "Talking About Plans After Graduation"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-schoollife-8",
  code: "L8",
  situation: "Talking About Plans After Graduation",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Challenge at School",
      questions: [
        { q: "How do you plan to choose a college or path?", parts: [
          { label: "Core", text: "I plan to choose" },
          { label: "Manner", text: "by visiting a few campuses first" },
          { label: "Condition", text: "if I can't decide, I'll ask my counselor for advice" },
        ]},
        { q: "How are you preparing for life after high school?", parts: [
          { label: "Core", text: "I'm preparing" },
          { label: "Manner", text: "by saving money from a part-time job" },
          { label: "Condition", text: "if I end up moving away for school" },
        ]},
        { q: "How do you plan to stay in touch with friends after graduation?", parts: [
          { label: "Core", text: "I plan to stay in touch" },
          { label: "Manner", text: "by keeping a group chat going" },
          { label: "Condition", text: "if everyone ends up in different cities" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your plans right after graduation?",
        parts: [
          { label: "Core", text: "I'm planning to take a gap year" },
          { label: "Sequence", text: "before starting college" },
          { label: "Purpose", text: "to figure out what I actually want to study" },
        ],
      },
      questions: [
        { q: "What will you do this summer before starting the next chapter?", parts: [
          { label: "Core", text: "I'm going to get a summer job" },
          { label: "Sequence", text: "before school starts again" },
          { label: "Purpose", text: "to save up some money" },
        ]},
        { q: "What's the first thing you want to do after finishing exams?", parts: [
          { label: "Core", text: "I want to relax for a week" },
          { label: "Sequence", text: "before thinking about anything else" },
          { label: "Purpose", text: "to recover from all the stress" },
        ]},
        { q: "What's something you want to try before you graduate?", parts: [
          { label: "Core", text: "I want to join one more club" },
          { label: "Sequence", text: "before senior year ends" },
          { label: "Purpose", text: "to make the most of my last year" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, School Life Track, Lesson 1: "Describing Your School Day"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-schoollife-1",
  code: "L1",
  situation: "Describing Your School Day",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about your school day.",
        parts: [
          { label: "Core", text: "I have math class" },
          { label: "Time", text: "every morning" },
          { label: "Sequence", text: "before lunch" },
          { label: "Reason", text: "because it's easier when I'm not tired yet" },
        ],
      },
      questions: [
        { q: "What do you usually do after school?", parts: [
          { label: "Core", text: "I go to the library" },
          { label: "Time", text: "for an hour" },
          { label: "Sequence", text: "before I head home" },
          { label: "Reason", text: "because it's quiet and I can focus" },
        ]},
        { q: "When do you usually do your homework?", parts: [
          { label: "Core", text: "I do my homework" },
          { label: "Time", text: "in the evening" },
          { label: "Sequence", text: "before dinner" },
          { label: "Reason", text: "because I think better after a break" },
        ]},
        { q: "How do you get to school?", parts: [
          { label: "Core", text: "I take the bus" },
          { label: "Time", text: "for twenty minutes" },
          { label: "Sequence", text: "before walking the last part" },
          { label: "Reason", text: "because it drops me close to home" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you usually study for a big test?",
        parts: [
          { label: "Core", text: "I study" },
          { label: "Manner", text: "by making flashcards" },
          { label: "Purpose", text: "to remember key facts" },
        ],
      },
      questions: [
        { q: "How do you stay organized with homework?", parts: [
          { label: "Core", text: "I stay organized" },
          { label: "Manner", text: "by writing everything in a planner" },
          { label: "Purpose", text: "to avoid forgetting assignments" },
        ]},
        { q: "How do you deal with a subject you find hard?", parts: [
          { label: "Core", text: "I deal with it" },
          { label: "Manner", text: "by asking my teacher for extra help" },
          { label: "Purpose", text: "to catch up before the test" },
        ]},
        { q: "How do you prepare for a presentation?", parts: [
          { label: "Core", text: "I prepare" },
          { label: "Manner", text: "by practicing in front of my family" },
          { label: "Purpose", text: "to feel less nervous" },
        ]},
      ],
    },
  ],
};

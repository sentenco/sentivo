// SEQUENCE, Movies & Entertainment Track, Lesson 7: "Talking About an Actor or Director You Like"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-movies-7",
  code: "L7",
  situation: "Talking About an Actor or Director You Like",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Show You Stopped Watching",
      questions: [
        { q: "When did you first notice that actor's work?", parts: [
          { label: "Core", text: "I first noticed them" },
          { label: "Time", text: "a couple years ago" },
          { label: "Condition", text: "if I hadn't seen that one specific role" },
        ]},
        { q: "When do you usually check what a director has made before?", parts: [
          { label: "Core", text: "I usually check" },
          { label: "Time", text: "before watching their newest movie" },
          { label: "Condition", text: "if I've liked their past work" },
        ]},
        { q: "When does that actor usually release new projects?", parts: [
          { label: "Core", text: "They usually release something" },
          { label: "Time", text: "about once a year" },
          { label: "Condition", text: "if they're not working on multiple things at once" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did that actor or director earn your respect?",
        parts: [
          { label: "Core", text: "They earned my respect" },
          { label: "Manner", text: "by taking on really different roles" },
          { label: "Condition", text: "if you watch enough of their work" },
        ],
      },
      questions: [
        { q: "How does that director usually tell a story?", parts: [
          { label: "Core", text: "They usually tell it" },
          { label: "Manner", text: "by focusing on small character details" },
          { label: "Condition", text: "if you're paying close attention" },
        ]},
        { q: "How do you decide to watch something just because of the actor?", parts: [
          { label: "Core", text: "I decide to watch it" },
          { label: "Manner", text: "by trusting their past performances" },
          { label: "Condition", text: "if they've never let me down before" },
        ]},
        { q: "How did that actor prepare for a challenging role?", parts: [
          { label: "Core", text: "They prepared" },
          { label: "Manner", text: "by researching the real story behind it" },
          { label: "Condition", text: "if the role was based on something true" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, School Life Track, Lesson 7: "Talking About a Challenge at School"
// Callback to Lesson 6's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-schoollife-7",
  code: "L7",
  situation: "Talking About a Challenge at School",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About an Extracurricular Activity",
      questions: [
        { q: "Why was that assignment so difficult for you?", parts: [
          { label: "Core", text: "That assignment was difficult" },
          { label: "Purpose", text: "to finish on time" },
          { label: "Reason", text: "because I didn't understand the instructions at first" },
        ]},
        { q: "Why did you decide to ask for help?", parts: [
          { label: "Core", text: "I decided to ask for help" },
          { label: "Purpose", text: "to avoid falling further behind" },
          { label: "Reason", text: "because I knew I couldn't figure it out alone" },
        ]},
        { q: "Why did you feel proud after getting through it?", parts: [
          { label: "Core", text: "I felt proud" },
          { label: "Purpose", text: "to finally understand it" },
          { label: "Reason", text: "because I almost gave up halfway through" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "Tell me about a challenge you faced at school.",
        parts: [
          { label: "Core", text: "I struggled with a big project" },
          { label: "Manner", text: "by leaving it until the last minute" },
          { label: "Condition", text: "if I had started earlier, it wouldn't have been so stressful" },
        ],
      },
      questions: [
        { q: "Tell me about a time you failed a test.", parts: [
          { label: "Core", text: "I failed a test once" },
          { label: "Manner", text: "by not studying enough" },
          { label: "Condition", text: "if I had reviewed my notes, I probably would have passed" },
        ]},
        { q: "Tell me about handling a disagreement with a classmate.", parts: [
          { label: "Core", text: "I handled a disagreement" },
          { label: "Manner", text: "by talking it out calmly" },
          { label: "Condition", text: "if I had ignored it, it would have gotten worse" },
        ]},
        { q: "Tell me about overcoming stage fright.", parts: [
          { label: "Core", text: "I overcame my stage fright" },
          { label: "Manner", text: "by practicing over and over" },
          { label: "Condition", text: "if I hadn't practiced, I would have frozen up" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Health & Wellness Track, Lesson 7: "Talking About Recovering From an Illness"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-health-7",
  code: "L7",
  situation: "Talking About Recovering From an Illness",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Exercise",
      questions: [
        { q: "When did you first realize you were getting sick?", parts: [
          { label: "Core", text: "I realized it" },
          { label: "Time", text: "a couple days before staying home" },
          { label: "Condition", text: "if I hadn't ignored the early symptoms" },
        ]},
        { q: "When did you start feeling better?", parts: [
          { label: "Core", text: "I started feeling better" },
          { label: "Time", text: "after about a week" },
          { label: "Condition", text: "if I had rested properly from the start" },
        ]},
        { q: "When do you usually go back to your normal routine after being sick?", parts: [
          { label: "Core", text: "I go back" },
          { label: "Time", text: "once I'm fully symptom-free" },
          { label: "Condition", text: "if I don't rush it too soon" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did you recover from being sick?",
        parts: [
          { label: "Core", text: "I recovered" },
          { label: "Manner", text: "by resting and staying hydrated" },
          { label: "Condition", text: "if I hadn't pushed myself to keep working" },
        ],
      },
      questions: [
        { q: "How do you take care of yourself when you're sick?", parts: [
          { label: "Core", text: "I take care of myself" },
          { label: "Manner", text: "by giving my body time to rest" },
          { label: "Condition", text: "if I actually listen to it" },
        ]},
        { q: "How did your doctor help you recover faster?", parts: [
          { label: "Core", text: "They helped" },
          { label: "Manner", text: "by prescribing the right treatment early" },
          { label: "Condition", text: "if I hadn't waited too long to go in" },
        ]},
        { q: "How do you avoid getting sick as often now?", parts: [
          { label: "Core", text: "I avoid it" },
          { label: "Manner", text: "by washing my hands more and sleeping enough" },
          { label: "Condition", text: "if I stay consistent with those habits" },
        ]},
      ],
    },
  ],
};

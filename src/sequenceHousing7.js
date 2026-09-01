// SEQUENCE, Housing & Apartment Life Track, Lesson 7: "Talking About a Noise Complaint"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-housing-7",
  code: "L7",
  situation: "Talking About a Noise Complaint",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Moving In",
      questions: [
        { q: "When did the noise start becoming a problem?", parts: [
          { label: "Core", text: "It started becoming a problem" },
          { label: "Time", text: "a few weeks after they moved in" },
          { label: "Condition", text: "if it had just been a one-time thing" },
        ]},
        { q: "When do you usually hear the noise?", parts: [
          { label: "Core", text: "I usually hear it" },
          { label: "Time", text: "late at night" },
          { label: "Condition", text: "if I'm trying to sleep early" },
        ]},
        { q: "When did you decide to file a formal complaint?", parts: [
          { label: "Core", text: "I decided to file one" },
          { label: "Time", text: "after talking to them didn't help" },
          { label: "Condition", text: "if the noise had stopped after our conversation" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did you handle the noise complaint?",
        parts: [
          { label: "Core", text: "I handled it" },
          { label: "Manner", text: "by talking to my neighbor directly first" },
          { label: "Condition", text: "if that hadn't worked, I would have contacted the landlord" },
        ],
      },
      questions: [
        { q: "How did the landlord respond to your complaint?", parts: [
          { label: "Core", text: "They responded" },
          { label: "Manner", text: "by sending a written notice to the tenant" },
          { label: "Condition", text: "if the issue continues, further action can be taken" },
        ]},
        { q: "How do you usually try to resolve conflicts with neighbors?", parts: [
          { label: "Core", text: "I usually try" },
          { label: "Manner", text: "by staying calm and polite" },
          { label: "Condition", text: "if the conversation stays respectful" },
        ]},
        { q: "How did the situation eventually get resolved?", parts: [
          { label: "Core", text: "It eventually got resolved" },
          { label: "Manner", text: "by both sides agreeing to quiet hours" },
          { label: "Condition", text: "if everyone actually follows them" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Health & Wellness Track, Lesson 1: "Talking About a Doctor's Visit"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-health-1",
  code: "L1",
  situation: "Talking About a Doctor's Visit",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about your last doctor's visit.",
        parts: [
          { label: "Core", text: "I went in for a checkup" },
          { label: "Time", text: "earlier this month" },
          { label: "Sequence", text: "before my results even came back" },
          { label: "Reason", text: "because it had been over a year since my last one" },
        ],
      },
      questions: [
        { q: "When do you usually schedule routine checkups?", parts: [
          { label: "Core", text: "I schedule them" },
          { label: "Time", text: "once a year" },
          { label: "Sequence", text: "before anything feels wrong" },
          { label: "Reason", text: "because it's easier to catch problems early" },
        ]},
        { q: "When did you last need to see a specialist?", parts: [
          { label: "Core", text: "I saw a specialist" },
          { label: "Time", text: "a few months ago" },
          { label: "Sequence", text: "before my regular doctor referred me" },
          { label: "Reason", text: "because my symptoms needed a closer look" },
        ]},
        { q: "When do you usually get lab work done?", parts: [
          { label: "Core", text: "I get lab work done" },
          { label: "Time", text: "every few months" },
          { label: "Sequence", text: "before my follow-up appointment" },
          { label: "Reason", text: "because my doctor wants to track my progress" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you prepare for a doctor's appointment?",
        parts: [
          { label: "Core", text: "I prepare" },
          { label: "Manner", text: "by writing down my symptoms beforehand" },
          { label: "Purpose", text: "to make sure I don't forget anything" },
        ],
      },
      questions: [
        { q: "How do you decide when a symptom needs a doctor's attention?", parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by watching how long it lasts" },
          { label: "Purpose", text: "to avoid overreacting to something minor" },
        ]},
        { q: "How does your doctor usually explain a diagnosis to you?", parts: [
          { label: "Core", text: "They explain it" },
          { label: "Manner", text: "by using simple, clear language" },
          { label: "Purpose", text: "to make sure I actually understand" },
        ]},
        { q: "How do you keep track of your medical history?", parts: [
          { label: "Core", text: "I keep track" },
          { label: "Manner", text: "by using a health app" },
          { label: "Purpose", text: "to have everything in one place" },
        ]},
      ],
    },
  ],
};

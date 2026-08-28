// SEQUENCE, Job Interviews Track, Lesson 2: "Explaining Why You Left Your Last Job"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-2",
  code: "L2",
  situation: "Explaining Why You Left Your Last Job",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Describing Your Work Experience",
      questions: [
        { q: "How did you handle the transition when you decided to leave?", parts: [
          { label: "Core", text: "I gave plenty of notice" },
          { label: "Manner", text: "by talking to my manager early" },
          { label: "Purpose", text: "to make the handover smooth" },
        ]},
        { q: "How did you stay professional during your last weeks?", parts: [
          { label: "Core", text: "I finished all my projects" },
          { label: "Manner", text: "by working extra hours" },
          { label: "Purpose", text: "to leave on good terms" },
        ]},
        { q: "How did you look for your next opportunity?", parts: [
          { label: "Core", text: "I researched companies carefully" },
          { label: "Manner", text: "by talking to people in the industry" },
          { label: "Purpose", text: "to find the right fit" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why are you interested in this position?",
        parts: [
          { label: "Core", text: "I'm drawn to this role" },
          { label: "Reason", text: "because it matches my skills" },
          { label: "Condition", text: "if the team culture is as collaborative as I've heard" },
        ],
      },
      questions: [
        { q: "Why did you apply to this company specifically?", parts: [
          { label: "Core", text: "I chose to apply here" },
          { label: "Reason", text: "because I admire your products" },
          { label: "Condition", text: "if the values really are what the website describes" },
        ]},
        { q: "Why do you think you're a good fit?", parts: [
          { label: "Core", text: "I believe I'm a strong match" },
          { label: "Reason", text: "because my background lines up closely" },
          { label: "Condition", text: "if you're looking for someone who can start quickly" },
        ]},
        { q: "Why are you open to relocating?", parts: [
          { label: "Core", text: "I'd be willing to relocate" },
          { label: "Reason", text: "because I'm ready for a new environment" },
          { label: "Condition", text: "if the offer includes reasonable support" },
        ]},
      ],
    },
  ],
};

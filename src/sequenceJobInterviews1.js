// SEQUENCE, Job Interviews Track, Lesson 1: "Describing Your Work Experience"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-jobinterviews-1",
  code: "L1",
  situation: "Describing Your Work Experience",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about your last job.",
        parts: [
          { label: "Core", text: "I worked at a company" },
          { label: "Time", text: "for three years" },
          { label: "Sequence", text: "before I moved here" },
          { label: "Reason", text: "because I wanted new experience" },
        ],
      },
      questions: [
        { q: "What did you do before this role?", parts: [
          { label: "Core", text: "I worked in sales" },
          { label: "Time", text: "for two years" },
          { label: "Sequence", text: "before I switched to marketing" },
          { label: "Reason", text: "because I wanted a new challenge" },
        ]},
        { q: "How did you end up in this field?", parts: [
          { label: "Core", text: "I studied something different" },
          { label: "Time", text: "for a while" },
          { label: "Sequence", text: "before I changed direction" },
          { label: "Reason", text: "because I discovered I loved this work" },
        ]},
        { q: "How long were you at your previous company?", parts: [
          { label: "Core", text: "I was there" },
          { label: "Time", text: "for four years" },
          { label: "Sequence", text: "before I got promoted" },
          { label: "Reason", text: "because I earned it through consistent results" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How did you approach managing your team?",
        parts: [
          { label: "Core", text: "I managed my team" },
          { label: "Manner", text: "by checking in daily" },
          { label: "Purpose", text: "to catch problems early" },
        ],
      },
      questions: [
        { q: "How did you handle tight deadlines?", parts: [
          { label: "Core", text: "I prioritized the most urgent tasks" },
          { label: "Manner", text: "by working closely with my manager" },
          { label: "Purpose", text: "to stay on schedule" },
        ]},
        { q: "How did you build relationships with clients?", parts: [
          { label: "Core", text: "I stayed in regular contact" },
          { label: "Manner", text: "by sending weekly updates" },
          { label: "Purpose", text: "to keep them informed" },
        ]},
        { q: "How did you support new team members?", parts: [
          { label: "Core", text: "I paired them with a mentor" },
          { label: "Manner", text: "by setting up weekly check-ins" },
          { label: "Purpose", text: "to help them settle in faster" },
        ]},
      ],
    },
  ],
};

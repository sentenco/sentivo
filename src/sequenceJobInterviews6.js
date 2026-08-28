// SEQUENCE, Job Interviews Track, Lesson 6: "Asking About the Role"
// Callback to Lesson 5's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-6",
  code: "L6",
  situation: "Asking About the Role",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Explaining Your Availability",
      questions: [
        { q: "Where would this role sit within the company?", parts: [
          { label: "Core", text: "I'd like to know where this role sits" },
          { label: "Place", text: "within the broader team" },
          { label: "Detail", text: "and who it reports to" },
        ]},
        { q: "Where does the team usually work from?", parts: [
          { label: "Core", text: "I'm curious where the team is based" },
          { label: "Place", text: "in the office or remote" },
          { label: "Detail", text: "and how often people meet in person" },
        ]},
        { q: "Where do most new hires struggle at first?", parts: [
          { label: "Core", text: "I'd like to know where new hires struggle" },
          { label: "Place", text: "in the first few months" },
          { label: "Detail", text: "so I can prepare for it" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "What would you like to know about the role?",
        parts: [
          { label: "Core", text: "I'd like to know how the team is structured" },
          { label: "Purpose", text: "to understand where I'd fit in" },
          { label: "Reason", text: "because that shapes how I'd approach the first few months" },
        ],
      },
      questions: [
        { q: "What do you want to understand about the day-to-day?", parts: [
          { label: "Core", text: "I want to understand a typical day" },
          { label: "Purpose", text: "to know what to expect" },
          { label: "Reason", text: "because that helps me picture myself in the role" },
        ]},
        { q: "What would you ask about the team's current priorities?", parts: [
          { label: "Core", text: "I'd ask what the team is focused on right now" },
          { label: "Purpose", text: "to align my first goals with theirs" },
          { label: "Reason", text: "because starting in sync matters" },
        ]},
        { q: "What would you like to know about growth opportunities?", parts: [
          { label: "Core", text: "I'd like to know about growth paths" },
          { label: "Purpose", text: "to plan my next few years" },
          { label: "Reason", text: "because long-term fit matters to me" },
        ]},
      ],
    },
  ],
};

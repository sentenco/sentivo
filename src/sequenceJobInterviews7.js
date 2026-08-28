// SEQUENCE, Job Interviews Track, Lesson 7: "Describing Your Career Goals"
// Callback to Lesson 6's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-7",
  code: "L7",
  situation: "Describing Your Career Goals",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Asking About the Role",
      questions: [
        { q: "Why do you want to grow into a leadership role?", parts: [
          { label: "Core", text: "I want to grow into leadership" },
          { label: "Purpose", text: "to have a bigger impact on outcomes" },
          { label: "Reason", text: "because I enjoy helping others do their best work" },
        ]},
        { q: "Why are you focused on this particular skill area?", parts: [
          { label: "Core", text: "I'm focused on developing this skill" },
          { label: "Purpose", text: "to become a stronger specialist" },
          { label: "Reason", text: "because it's where I add the most value" },
        ]},
        { q: "Why does this next step matter to you?", parts: [
          { label: "Core", text: "This next step matters to me" },
          { label: "Purpose", text: "to keep building on what I've learned" },
          { label: "Reason", text: "because I don't want to plateau" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How do you plan to grow in the next few years?",
        parts: [
          { label: "Core", text: "I plan to grow into a leadership role" },
          { label: "Manner", text: "by taking on more responsibility" },
          { label: "Condition", text: "if the right opportunities come up" },
        ],
      },
      questions: [
        { q: "How would you approach your first 90 days?", parts: [
          { label: "Core", text: "I'd approach the first 90 days" },
          { label: "Manner", text: "by listening before making changes" },
          { label: "Condition", text: "if the team welcomes that approach" },
        ]},
        { q: "How do you plan to develop new skills here?", parts: [
          { label: "Core", text: "I plan to develop new skills" },
          { label: "Manner", text: "by seeking out stretch projects" },
          { label: "Condition", text: "if my manager supports that" },
        ]},
        { q: "How would you measure your own success?", parts: [
          { label: "Core", text: "I'd measure my success" },
          { label: "Manner", text: "by the impact on team results" },
          { label: "Condition", text: "if the goals are clearly defined upfront" },
        ]},
      ],
    },
  ],
};

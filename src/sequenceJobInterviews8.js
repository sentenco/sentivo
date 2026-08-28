// SEQUENCE, Job Interviews Track, Lesson 8: "Negotiating Salary or Benefits"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-8",
  code: "L8",
  situation: "Negotiating Salary or Benefits",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Describing Your Career Goals",
      questions: [
        { q: "How did you arrive at your salary expectations?", parts: [
          { label: "Core", text: "I arrived at this number" },
          { label: "Manner", text: "by researching market rates" },
          { label: "Condition", text: "if the role matches this level of scope" },
        ]},
        { q: "How flexible are you on benefits versus base pay?", parts: [
          { label: "Core", text: "I'm flexible" },
          { label: "Manner", text: "by weighing the full package" },
          { label: "Condition", text: "if the benefits genuinely offset a lower base" },
        ]},
        { q: "How would you like to handle a follow-up conversation?", parts: [
          { label: "Core", text: "I'd like to handle it" },
          { label: "Manner", text: "by staying in open communication" },
          { label: "Condition", text: "if there's room to revisit this after six months" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "Was there a higher salary you were hoping for?",
        parts: [
          { label: "Core", text: "I was hoping for a bit more" },
          { label: "Sequence", text: "before we finalize anything" },
          { label: "Purpose", text: "to make sure it reflects my experience" },
        ],
      },
      questions: [
        { q: "Is there anything else you'd like to discuss before accepting?", parts: [
          { label: "Core", text: "I'd like to go over the benefits" },
          { label: "Sequence", text: "before signing anything" },
          { label: "Purpose", text: "to make sure everything is clear" },
        ]},
        { q: "Would you like time to consider the offer?", parts: [
          { label: "Core", text: "I'd like a little time" },
          { label: "Sequence", text: "before giving a final answer" },
          { label: "Purpose", text: "to review everything carefully" },
        ]},
        { q: "Is there a follow-up you'd like to schedule?", parts: [
          { label: "Core", text: "I'd like to schedule a quick call" },
          { label: "Sequence", text: "before next week" },
          { label: "Purpose", text: "to go over a few remaining questions" },
        ]},
      ],
    },
  ],
};

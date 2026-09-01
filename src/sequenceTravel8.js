// SEQUENCE, Travel & Transportation Track, Lesson 8: "Talking About Future Travel Plans"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-travel-8",
  code: "L8",
  situation: "Talking About Future Travel Plans",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Memorable Trip",
      questions: [
        { q: "How are you planning your next trip?", parts: [
          { label: "Core", text: "I'm planning it" },
          { label: "Manner", text: "by researching destinations I haven't been to" },
          { label: "Condition", text: "if I can find the time off work" },
        ]},
        { q: "How do you plan to save money for future travel?", parts: [
          { label: "Core", text: "I plan to save" },
          { label: "Manner", text: "by setting aside a bit each month" },
          { label: "Condition", text: "if I stick with the habit" },
        ]},
        { q: "How are you deciding between a few destinations?", parts: [
          { label: "Core", text: "I'm deciding" },
          { label: "Manner", text: "by comparing cost and travel time" },
          { label: "Condition", text: "if I can't choose based on interest alone" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your travel plans for the near future?",
        parts: [
          { label: "Core", text: "I want to visit somewhere new" },
          { label: "Sequence", text: "before life gets too busy again" },
          { label: "Purpose", text: "to keep exploring while I still can" },
        ],
      },
      questions: [
        { q: "What's a destination you're hoping to visit soon?", parts: [
          { label: "Core", text: "I'm hoping to visit a new country" },
          { label: "Sequence", text: "before the year ends" },
          { label: "Purpose", text: "to finally check it off my list" },
        ]},
        { q: "What are you doing to prepare for your next trip?", parts: [
          { label: "Core", text: "I'm learning some basic phrases" },
          { label: "Sequence", text: "before I even book anything" },
          { label: "Purpose", text: "to feel more comfortable once I'm there" },
        ]},
        { q: "What's a travel goal you're working toward?", parts: [
          { label: "Core", text: "I want to visit every continent" },
          { label: "Sequence", text: "before I turn forty" },
          { label: "Purpose", text: "to give myself something exciting to work toward" },
        ]},
      ],
    },
  ],
};

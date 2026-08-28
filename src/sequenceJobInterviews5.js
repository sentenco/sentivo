// SEQUENCE, Job Interviews Track, Lesson 5: "Explaining Your Availability"
// Callback to Lesson 4's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-jobinterviews-5",
  code: "L5",
  situation: "Explaining Your Availability",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Challenge You Overcame",
      questions: [
        { q: "When could you realistically start?", parts: [
          { label: "Core", text: "I could start" },
          { label: "Time", text: "in two weeks" },
          { label: "Condition", text: "if I need to give shorter notice, I can arrange that" },
        ]},
        { q: "When are you least flexible with your schedule?", parts: [
          { label: "Core", text: "I'm least flexible" },
          { label: "Time", text: "during the first month" },
          { label: "Condition", text: "if there's a major project wrapping up" },
        ]},
        { q: "When would you need advance notice for changes?", parts: [
          { label: "Core", text: "I'd need notice" },
          { label: "Time", text: "a few days ahead" },
          { label: "Condition", text: "if the schedule changes significantly" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Are you open to remote work?",
        parts: [
          { label: "Core", text: "I'm open to working remotely" },
          { label: "Place", text: "from home a few days a week" },
          { label: "Detail", text: "as long as I have a reliable setup" },
        ],
      },
      questions: [
        { q: "Are you willing to travel for this role?", parts: [
          { label: "Core", text: "I'm willing to travel" },
          { label: "Place", text: "to client sites when needed" },
          { label: "Detail", text: "a few times a quarter" },
        ]},
        { q: "Would you consider relocating for the right offer?", parts: [
          { label: "Core", text: "I'd consider relocating" },
          { label: "Place", text: "to a city with a strong tech scene" },
          { label: "Detail", text: "for the right long-term opportunity" },
        ]},
        { q: "Do you have a preferred work environment?", parts: [
          { label: "Core", text: "I do best" },
          { label: "Place", text: "in a collaborative open office" },
          { label: "Detail", text: "with room for focused work too" },
        ]},
      ],
    },
  ],
};

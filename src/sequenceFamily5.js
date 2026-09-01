// SEQUENCE, Family & Home Life Track, Lesson 5: "Talking About a Family Trip"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-family-5",
  code: "L5",
  situation: "Talking About a Family Trip",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Sibling Argument",
      questions: [
        { q: "Where did your family go on your last trip?", parts: [
          { label: "Core", text: "We went to the beach" },
          { label: "Place", text: "a few hours from home" },
          { label: "Detail", text: "specifically a spot my parents used to visit" },
        ]},
        { q: "Where do you usually stay during family trips?", parts: [
          { label: "Core", text: "We usually stay" },
          { label: "Place", text: "at a small rented house" },
          { label: "Detail", text: "specifically because it's cheaper than a hotel" },
        ]},
        { q: "Where was the most memorable part of a family trip?", parts: [
          { label: "Core", text: "The most memorable part was" },
          { label: "Place", text: "on a hiking trail" },
          { label: "Detail", text: "specifically when we saw a waterfall" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why does your family go on trips together?",
        parts: [
          { label: "Core", text: "We go on trips" },
          { label: "Purpose", text: "to spend real time together" },
          { label: "Reason", text: "because everyone's usually too busy during the school year" },
        ],
      },
      questions: [
        { q: "Why did your family choose that particular destination?", parts: [
          { label: "Core", text: "We chose that place" },
          { label: "Purpose", text: "to try something new" },
          { label: "Reason", text: "because we'd been to the same spot for years" },
        ]},
        { q: "Why do you look forward to family trips?", parts: [
          { label: "Core", text: "I look forward to them" },
          { label: "Purpose", text: "to get a break from routine" },
          { label: "Reason", text: "because school and chores get repetitive" },
        ]},
        { q: "Why did your parents plan the trip around your schedule?", parts: [
          { label: "Core", text: "They planned it around my schedule" },
          { label: "Purpose", text: "to make sure I wouldn't miss it" },
          { label: "Reason", text: "because I had exams the week before" },
        ]},
      ],
    },
  ],
};

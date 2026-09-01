// SEQUENCE, Housing & Apartment Life Track, Lesson 4: "Talking About a Maintenance Issue"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-housing-4",
  code: "L4",
  situation: "Talking About a Maintenance Issue",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About a Roommate",
      questions: [
        { q: "What happened when something broke in your apartment?", parts: [
          { label: "Core", text: "The heater stopped working" },
          { label: "Detail", text: "specifically right in the middle of winter" },
          { label: "Sequence", text: "before I even had a chance to call about it" },
        ]},
        { q: "What did you do to report the issue?", parts: [
          { label: "Core", text: "I submitted a request" },
          { label: "Detail", text: "specifically through the building's online portal" },
          { label: "Sequence", text: "before hearing back the next day" },
        ]},
        { q: "What happened while you waited for the repair?", parts: [
          { label: "Core", text: "I used space heaters" },
          { label: "Detail", text: "specifically just to get by" },
          { label: "Sequence", text: "before someone finally came to fix it" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where did the maintenance issue happen?",
        parts: [
          { label: "Core", text: "It happened" },
          { label: "Place", text: "in the bathroom" },
          { label: "Detail", text: "specifically a leak under the sink" },
        ],
      },
      questions: [
        { q: "Where do you usually report maintenance issues?", parts: [
          { label: "Core", text: "I report them" },
          { label: "Place", text: "through the building's app" },
          { label: "Detail", text: "specifically with photos attached" },
        ]},
        { q: "Where did the maintenance worker have to check first?", parts: [
          { label: "Core", text: "They had to check" },
          { label: "Place", text: "in the unit above mine" },
          { label: "Detail", text: "specifically to find where the leak started" },
        ]},
        { q: "Where do you keep emergency contact numbers for your building?", parts: [
          { label: "Core", text: "I keep them" },
          { label: "Place", text: "saved in my phone" },
          { label: "Detail", text: "specifically in case something happens after hours" },
        ]},
      ],
    },
  ],
};

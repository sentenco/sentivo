// SEQUENCE, Travel & Transportation Track, Lesson 4: "Talking About a Road Trip"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-travel-4",
  code: "L4",
  situation: "Talking About a Road Trip",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About Public Transportation",
      questions: [
        { q: "What happened during your last road trip?", parts: [
          { label: "Core", text: "We took a wrong turn" },
          { label: "Detail", text: "specifically missing an exit" },
          { label: "Sequence", text: "before finding our way back on route" },
        ]},
        { q: "What did you pack for the road trip?", parts: [
          { label: "Core", text: "We packed snacks and music" },
          { label: "Detail", text: "specifically enough for a long drive" },
          { label: "Sequence", text: "before we even left the driveway" },
        ]},
        { q: "What was the best part of the road trip?", parts: [
          { label: "Core", text: "The best part was a random stop" },
          { label: "Detail", text: "specifically a small town we hadn't planned to visit" },
          { label: "Sequence", text: "before continuing the drive" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where did you stop along the way on your road trip?",
        parts: [
          { label: "Core", text: "We stopped" },
          { label: "Place", text: "at a small diner off the highway" },
          { label: "Detail", text: "specifically one a local recommended" },
        ],
      },
      questions: [
        { q: "Where did you get gas during the trip?", parts: [
          { label: "Core", text: "We got gas" },
          { label: "Place", text: "at a station in a tiny town" },
          { label: "Detail", text: "specifically the only one for miles" },
        ]},
        { q: "Where did you take the most photos during the trip?", parts: [
          { label: "Core", text: "We took the most photos" },
          { label: "Place", text: "at a scenic overlook" },
          { label: "Detail", text: "specifically right before sunset" },
        ]},
        { q: "Where did you end up spending the night?", parts: [
          { label: "Core", text: "We ended up staying" },
          { label: "Place", text: "at a roadside motel" },
          { label: "Detail", text: "specifically since we hadn't planned that far ahead" },
        ]},
      ],
    },
  ],
};

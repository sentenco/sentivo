// SEQUENCE, Health & Wellness Track, Lesson 4: "Talking About Sleep"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-health-4",
  code: "L4",
  situation: "Talking About Sleep",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About Managing Stress",
      questions: [
        { q: "What affects your sleep the most?", parts: [
          { label: "Core", text: "Screen time affects it" },
          { label: "Detail", text: "specifically scrolling right before bed" },
          { label: "Sequence", text: "before I finally decide to put my phone down" },
        ]},
        { q: "What did you change to sleep better?", parts: [
          { label: "Core", text: "I changed my bedtime routine" },
          { label: "Detail", text: "specifically going to bed at the same time" },
          { label: "Sequence", text: "before I noticed a real difference" },
        ]},
        { q: "What happens when you don't get enough sleep?", parts: [
          { label: "Core", text: "I feel foggy all day" },
          { label: "Detail", text: "specifically unable to focus at work" },
          { label: "Sequence", text: "before I catch up on rest that weekend" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where do you usually have trouble falling asleep?",
        parts: [
          { label: "Core", text: "I have trouble" },
          { label: "Place", text: "in a room that's too bright or loud" },
          { label: "Detail", text: "specifically when there's light coming through the blinds" },
        ],
      },
      questions: [
        { q: "Where do you keep your phone at night?", parts: [
          { label: "Core", text: "I keep it" },
          { label: "Place", text: "outside the bedroom now" },
          { label: "Detail", text: "specifically to avoid checking it before bed" },
        ]},
        { q: "Where do you sleep best, at home or away?", parts: [
          { label: "Core", text: "I sleep best" },
          { label: "Place", text: "in my own bed at home" },
          { label: "Detail", text: "specifically because I know the environment" },
        ]},
        { q: "Where did you learn about better sleep habits?", parts: [
          { label: "Core", text: "I learned about them" },
          { label: "Place", text: "from an article my doctor recommended" },
          { label: "Detail", text: "specifically about screen time and sleep" },
        ]},
      ],
    },
  ],
};

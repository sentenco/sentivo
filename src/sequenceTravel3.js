// SEQUENCE, Travel & Transportation Track, Lesson 3: "Talking About Public Transportation"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-travel-3",
  code: "L3",
  situation: "Talking About Public Transportation",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Flight Delay",
      questions: [
        { q: "Why do you prefer public transportation in a new city?", parts: [
          { label: "Core", text: "I prefer it" },
          { label: "Reason", text: "because it's cheaper than taxis" },
          { label: "Condition", text: "if the city has a reliable system" },
        ]},
        { q: "Why did you get confused using the subway at first?", parts: [
          { label: "Core", text: "I got confused" },
          { label: "Reason", text: "because the signs were in a language I didn't know" },
          { label: "Condition", text: "if I hadn't downloaded a map app" },
        ]},
        { q: "Why is rush hour the worst time to use public transit?", parts: [
          { label: "Core", text: "It's the worst time" },
          { label: "Reason", text: "because everything gets so crowded" },
          { label: "Condition", text: "if you can avoid traveling then" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What happened when you used public transportation abroad?",
        parts: [
          { label: "Core", text: "I got on the wrong train" },
          { label: "Detail", text: "specifically going the opposite direction" },
          { label: "Sequence", text: "before realizing my mistake" },
        ],
      },
      questions: [
        { q: "What did you do when you couldn't figure out the ticket machine?", parts: [
          { label: "Core", text: "I asked a local for help" },
          { label: "Detail", text: "specifically someone waiting nearby" },
          { label: "Sequence", text: "before finally buying the right ticket" },
        ]},
        { q: "What surprised you about public transportation there?", parts: [
          { label: "Core", text: "I was surprised by how clean it was" },
          { label: "Detail", text: "specifically compared to back home" },
          { label: "Sequence", text: "before I even got used to it" },
        ]},
        { q: "What made a bus or train ride memorable?", parts: [
          { label: "Core", text: "I had a great conversation" },
          { label: "Detail", text: "specifically with someone sitting next to me" },
          { label: "Sequence", text: "before we both got off at our stops" },
        ]},
      ],
    },
  ],
};

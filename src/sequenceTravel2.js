// SEQUENCE, Travel & Transportation Track, Lesson 2: "Talking About a Flight Delay"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-travel-2",
  code: "L2",
  situation: "Talking About a Flight Delay",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Planning a Trip",
      questions: [
        { q: "How did you find out about the flight delay?", parts: [
          { label: "Core", text: "I found out" },
          { label: "Manner", text: "by checking the airline's app" },
          { label: "Purpose", text: "to see the updated departure time" },
        ]},
        { q: "How did you pass the time during the delay?", parts: [
          { label: "Core", text: "I passed the time" },
          { label: "Manner", text: "by reading and grabbing some food" },
          { label: "Purpose", text: "to stay calm instead of getting frustrated" },
        ]},
        { q: "How did the airline handle the delay?", parts: [
          { label: "Core", text: "They handled it" },
          { label: "Manner", text: "by offering a meal voucher" },
          { label: "Purpose", text: "to make up for the inconvenience" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why was your flight delayed?",
        parts: [
          { label: "Core", text: "It was delayed" },
          { label: "Reason", text: "because of bad weather at the airport" },
          { label: "Condition", text: "if the storm hadn't cleared when it did" },
        ],
      },
      questions: [
        { q: "Why do delays sometimes cause you to miss a connection?", parts: [
          { label: "Core", text: "They cause that" },
          { label: "Reason", text: "because layovers are often too short" },
          { label: "Condition", text: "if the delay is longer than expected" },
        ]},
        { q: "Why did you stay calm during such a long delay?", parts: [
          { label: "Core", text: "I stayed calm" },
          { label: "Reason", text: "because getting upset wouldn't change anything" },
          { label: "Condition", text: "if I focus on what I can control instead" },
        ]},
        { q: "Why do airlines sometimes overbook flights?", parts: [
          { label: "Core", text: "They overbook them" },
          { label: "Reason", text: "because some passengers don't show up" },
          { label: "Condition", text: "if too many people do show up, it causes problems" },
        ]},
      ],
    },
  ],
};

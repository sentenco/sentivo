// SEQUENCE, Online & Gaming Track, Lesson 6: "Buying or Saving for a Game"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-gaming-6",
  code: "L6",
  situation: "Buying or Saving for a Game",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Balancing Gaming and Responsibilities",
      questions: [
        { q: "Why did you decide to save up for that game?", parts: [
          { label: "Core", text: "I decided to save up" },
          { label: "Purpose", text: "to buy it on release day" },
          { label: "Reason", text: "because I didn't want to wait for a sale" },
        ]},
        { q: "Why do you sometimes wait for a sale instead of buying right away?", parts: [
          { label: "Core", text: "I wait for a sale" },
          { label: "Purpose", text: "to save some money" },
          { label: "Reason", text: "because prices usually drop within a few months" },
        ]},
        { q: "Why did you ask your parents for help buying it?", parts: [
          { label: "Core", text: "I asked them for help" },
          { label: "Purpose", text: "to cover the rest of the cost" },
          { label: "Reason", text: "because I was still a little short" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When are you planning to buy that game?",
        parts: [
          { label: "Core", text: "I'm planning to buy it" },
          { label: "Time", text: "next month" },
          { label: "Condition", text: "if I save enough by then" },
        ],
      },
      questions: [
        { q: "When did you finally save enough for it?", parts: [
          { label: "Core", text: "I finally saved enough" },
          { label: "Time", text: "after a few weeks" },
          { label: "Condition", text: "if I hadn't spent money on anything else" },
        ]},
        { q: "When do game prices usually drop?", parts: [
          { label: "Core", text: "Prices usually drop" },
          { label: "Time", text: "during big sales events" },
          { label: "Condition", text: "if you're willing to wait a bit" },
        ]},
        { q: "When do you plan to start playing once you get it?", parts: [
          { label: "Core", text: "I plan to start" },
          { label: "Time", text: "the same day it arrives" },
          { label: "Condition", text: "if I don't have too much homework" },
        ]},
      ],
    },
  ],
};

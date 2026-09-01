// SEQUENCE, Finance & Banking Track, Lesson 6: "Talking About Investing"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-finance-6",
  code: "L6",
  situation: "Talking About Investing",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About a Credit Card",
      questions: [
        { q: "Why did you start investing?", parts: [
          { label: "Core", text: "I started investing" },
          { label: "Purpose", text: "to grow my money over time" },
          { label: "Reason", text: "because keeping it all in savings wasn't enough" },
        ]},
        { q: "Why do you invest a set amount every month?", parts: [
          { label: "Core", text: "I invest a set amount" },
          { label: "Purpose", text: "to stay consistent no matter the market" },
          { label: "Reason", text: "because trying to time it perfectly rarely works" },
        ]},
        { q: "Why did you choose a particular type of investment?", parts: [
          { label: "Core", text: "I chose it" },
          { label: "Purpose", text: "to match my comfort level with risk" },
          { label: "Reason", text: "because I wanted something I wouldn't stress over" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When did you start investing?",
        parts: [
          { label: "Core", text: "I started investing" },
          { label: "Time", text: "in my mid-twenties" },
          { label: "Condition", text: "if I had started later, I'd have less time to grow it" },
        ],
      },
      questions: [
        { q: "When do you usually check your investment accounts?", parts: [
          { label: "Core", text: "I check them" },
          { label: "Time", text: "once a month" },
          { label: "Condition", text: "if I checked more often, I'd probably overreact to small changes" },
        ]},
        { q: "When do you plan to increase how much you invest?", parts: [
          { label: "Core", text: "I plan to increase it" },
          { label: "Time", text: "once I get a raise" },
          { label: "Condition", text: "if my expenses don't go up at the same time" },
        ]},
        { q: "When did the market drop affect your investments?", parts: [
          { label: "Core", text: "It affected them" },
          { label: "Time", text: "earlier this year" },
          { label: "Condition", text: "if I had panicked and sold, I would have lost more" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Finance & Banking Track, Lesson 1: "Opening a Bank Account"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-finance-1",
  code: "L1",
  situation: "Opening a Bank Account",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about the last time you opened a bank account.",
        parts: [
          { label: "Core", text: "I opened a savings account" },
          { label: "Time", text: "a few years ago" },
          { label: "Sequence", text: "before I even had a full-time job" },
          { label: "Reason", text: "because I wanted to start building good habits early" },
        ],
      },
      questions: [
        { q: "When do you usually check your account balance?", parts: [
          { label: "Core", text: "I check it" },
          { label: "Time", text: "a few times a week" },
          { label: "Sequence", text: "before making any big purchases" },
          { label: "Reason", text: "because it helps me stay on top of my spending" },
        ]},
        { q: "When did you switch to a different bank?", parts: [
          { label: "Core", text: "I switched banks" },
          { label: "Time", text: "last year" },
          { label: "Sequence", text: "before my old bank raised its fees" },
          { label: "Reason", text: "because I found better terms elsewhere" },
        ]},
        { q: "When do you usually deposit your paycheck?", parts: [
          { label: "Core", text: "I deposit it" },
          { label: "Time", text: "as soon as it comes in" },
          { label: "Sequence", text: "before setting aside money for savings" },
          { label: "Reason", text: "because it's easier to manage that way" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you decide which bank to use?",
        parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by comparing fees and interest rates" },
          { label: "Purpose", text: "to make sure I'm getting a good deal" },
        ],
      },
      questions: [
        { q: "How do you keep your account information secure?", parts: [
          { label: "Core", text: "I keep it secure" },
          { label: "Manner", text: "by using two-factor authentication" },
          { label: "Purpose", text: "to protect against fraud" },
        ]},
        { q: "How do you track your spending each month?", parts: [
          { label: "Core", text: "I track it" },
          { label: "Manner", text: "by using a budgeting app" },
          { label: "Purpose", text: "to see exactly where my money goes" },
        ]},
        { q: "How do you decide how much to keep in savings?", parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by setting aside a fixed percentage each month" },
          { label: "Purpose", text: "to build an emergency fund steadily" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Sports & Activities Track, Lesson 6: "Talking About a Big Competition"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-sports-6",
  code: "L6",
  situation: "Talking About a Big Competition",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About a Teammate",
      questions: [
        { q: "Why was that competition such a big deal?", parts: [
          { label: "Core", text: "It was a big deal" },
          { label: "Purpose", text: "to prove we belonged at that level" },
          { label: "Reason", text: "because we'd never made it that far before" },
        ]},
        { q: "Why did your team prepare differently for it?", parts: [
          { label: "Core", text: "We prepared differently" },
          { label: "Purpose", text: "to be ready for tougher competition" },
          { label: "Reason", text: "because the stakes were much higher" },
        ]},
        { q: "Why were you nervous before the competition?", parts: [
          { label: "Core", text: "I was nervous" },
          { label: "Purpose", text: "to not let my team down" },
          { label: "Reason", text: "because everyone was counting on each other" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When is your next big competition?",
        parts: [
          { label: "Core", text: "Our next competition is" },
          { label: "Time", text: "in about a month" },
          { label: "Condition", text: "if we make it through the qualifiers" },
        ],
      },
      questions: [
        { q: "When did you find out you qualified?", parts: [
          { label: "Core", text: "We found out" },
          { label: "Time", text: "last week" },
          { label: "Condition", text: "if we hadn't won our last match, we wouldn't have" },
        ]},
        { q: "When do you start preparing for a competition like that?", parts: [
          { label: "Core", text: "We start preparing" },
          { label: "Time", text: "weeks in advance" },
          { label: "Condition", text: "if it's a really important one" },
        ]},
        { q: "When will you know the results?", parts: [
          { label: "Core", text: "We'll know" },
          { label: "Time", text: "right after the final round" },
          { label: "Condition", text: "if the scoring doesn't take too long" },
        ]},
      ],
    },
  ],
};

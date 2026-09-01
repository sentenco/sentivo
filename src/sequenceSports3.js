// SEQUENCE, Sports & Activities Track, Lesson 3: "Talking About Staying Motivated"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-sports-3",
  code: "L3",
  situation: "Talking About Staying Motivated",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Recent Game",
      questions: [
        { q: "Why do you keep training even when you're tired?", parts: [
          { label: "Core", text: "I keep training" },
          { label: "Reason", text: "because I don't want to fall behind" },
          { label: "Condition", text: "if I skip too many days" },
        ]},
        { q: "Why does your team stay motivated during a losing streak?", parts: [
          { label: "Core", text: "We stay motivated" },
          { label: "Reason", text: "because we trust the process" },
          { label: "Condition", text: "if we keep showing up to practice" },
        ]},
        { q: "Why is a coach's encouragement important to you?", parts: [
          { label: "Core", text: "It's important" },
          { label: "Reason", text: "because it reminds me why I started" },
          { label: "Condition", text: "if I'm having a rough week" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What keeps you motivated to train?",
        parts: [
          { label: "Core", text: "My goal keeps me motivated" },
          { label: "Detail", text: "specifically making the varsity team" },
          { label: "Sequence", text: "before tryouts happen next season" },
        ],
      },
      questions: [
        { q: "What's something that pushed you to train harder recently?", parts: [
          { label: "Core", text: "Losing that game pushed me" },
          { label: "Detail", text: "specifically missing the final shot" },
          { label: "Sequence", text: "before our next matchup with them" },
        ]},
        { q: "What do you focus on when you feel like giving up?", parts: [
          { label: "Core", text: "I focus on my progress" },
          { label: "Detail", text: "specifically how far I've come this year" },
          { label: "Sequence", text: "before I let one bad practice discourage me" },
        ]},
        { q: "What does your coach say to keep the team motivated?", parts: [
          { label: "Core", text: "Our coach reminds us" },
          { label: "Detail", text: "specifically how much we've improved" },
          { label: "Sequence", text: "before every big game" },
        ]},
      ],
    },
  ],
};

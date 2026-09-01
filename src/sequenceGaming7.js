// SEQUENCE, Online & Gaming Track, Lesson 7: "Meeting Someone From an Online Community"
// Callback to Lesson 6's second pattern (Core + Time + Condition), 3 fresh questions.

export default {
  id: "sequence-gaming-7",
  code: "L7",
  situation: "Meeting Someone From an Online Community",
  patterns: [
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: true,
      fromSituation: "Buying or Saving for a Game",
      questions: [
        { q: "When did you first talk to that online friend?", parts: [
          { label: "Core", text: "I first talked to them" },
          { label: "Time", text: "a few months ago" },
          { label: "Condition", text: "if I remember the exact game we met in" },
        ]},
        { q: "When do you usually chat with your online friends?", parts: [
          { label: "Core", text: "We usually chat" },
          { label: "Time", text: "after school" },
          { label: "Condition", text: "if we're both online at the same time" },
        ]},
        { q: "When would you consider meeting an online friend in person?", parts: [
          { label: "Core", text: "I'd consider it" },
          { label: "Time", text: "only when I'm older" },
          { label: "Condition", text: "if a parent could come with me" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: false,
      example: {
        q: "How did you meet that friend from an online community?",
        parts: [
          { label: "Core", text: "I met them" },
          { label: "Manner", text: "by joining a game's community server" },
          { label: "Condition", text: "if I hadn't joined, we never would have talked" },
        ],
      },
      questions: [
        { q: "How do you make sure an online friend is trustworthy?", parts: [
          { label: "Core", text: "I make sure" },
          { label: "Manner", text: "by only sharing general information at first" },
          { label: "Condition", text: "if something feels off, I stop talking to them" },
        ]},
        { q: "How do you stay in touch with online friends outside the game?", parts: [
          { label: "Core", text: "I stay in touch" },
          { label: "Manner", text: "by adding them on other apps" },
          { label: "Condition", text: "if we both agree it's okay" },
        ]},
        { q: "How do you explain online friendships to people who don't get it?", parts: [
          { label: "Core", text: "I explain it" },
          { label: "Manner", text: "by comparing it to a regular friendship" },
          { label: "Condition", text: "if they're willing to actually listen" },
        ]},
      ],
    },
  ],
};

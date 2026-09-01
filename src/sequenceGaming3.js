// SEQUENCE, Online & Gaming Track, Lesson 3: "Dealing With a Toxic Player"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-gaming-3",
  code: "L3",
  situation: "Dealing With a Toxic Player",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Streaming or Watching Content",
      questions: [
        { q: "Why did that match turn toxic?", parts: [
          { label: "Core", text: "It turned toxic" },
          { label: "Reason", text: "because someone kept blaming the team" },
          { label: "Condition", text: "if nobody had said anything back" },
        ]},
        { q: "Why do some players get so aggressive online?", parts: [
          { label: "Core", text: "They get aggressive" },
          { label: "Reason", text: "because they feel anonymous" },
          { label: "Condition", text: "if there's no consequence for it" },
        ]},
        { q: "Why did you decide to report that player?", parts: [
          { label: "Core", text: "I decided to report them" },
          { label: "Reason", text: "because their behavior crossed a line" },
          { label: "Condition", text: "if it happens again to someone else" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What happened when you ran into a toxic player?",
        parts: [
          { label: "Core", text: "Someone started trash-talking" },
          { label: "Detail", text: "specifically after I made one mistake" },
          { label: "Sequence", text: "before I just muted them" },
        ],
      },
      questions: [
        { q: "What did you do after being trash-talked?", parts: [
          { label: "Core", text: "I stayed calm" },
          { label: "Detail", text: "specifically by not responding at all" },
          { label: "Sequence", text: "before focusing back on the game" },
        ]},
        { q: "What happened after you reported the player?", parts: [
          { label: "Core", text: "I got a message back" },
          { label: "Detail", text: "specifically confirming they were banned" },
          { label: "Sequence", text: "before I even finished my next match" },
        ]},
        { q: "What changed after that experience?", parts: [
          { label: "Core", text: "I started using the mute button more" },
          { label: "Detail", text: "specifically whenever chat gets negative" },
          { label: "Sequence", text: "before it can ruin my mood" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Sports & Activities Track, Lesson 2: "Talking About a Recent Game"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-sports-2",
  code: "L2",
  situation: "Talking About a Recent Game",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Talking About Practice Schedule",
      questions: [
        { q: "How did your team perform in the last game?", parts: [
          { label: "Core", text: "We performed well" },
          { label: "Manner", text: "by sticking to our game plan" },
          { label: "Purpose", text: "to keep the other team off balance" },
        ]},
        { q: "How did you personally play in that game?", parts: [
          { label: "Core", text: "I played well" },
          { label: "Manner", text: "by staying calm under pressure" },
          { label: "Purpose", text: "to help my team in a close moment" },
        ]},
        { q: "How did your coach react after the game?", parts: [
          { label: "Core", text: "Our coach reacted" },
          { label: "Manner", text: "by praising our teamwork" },
          { label: "Purpose", text: "to keep our confidence up for next time" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why do you think your team won or lost that game?",
        parts: [
          { label: "Core", text: "I think we won" },
          { label: "Reason", text: "because we communicated better than usual" },
          { label: "Condition", text: "if everyone stays that focused next time too" },
        ],
      },
      questions: [
        { q: "Why was that game so close?", parts: [
          { label: "Core", text: "It was close" },
          { label: "Reason", text: "because both teams were evenly matched" },
          { label: "Condition", text: "if either side had made one more mistake" },
        ]},
        { q: "Why did you feel nervous before that game?", parts: [
          { label: "Core", text: "I felt nervous" },
          { label: "Reason", text: "because it decided our playoff spot" },
          { label: "Condition", text: "if we had lost, our season would be over" },
        ]},
        { q: "Why did your coach change the lineup mid-game?", parts: [
          { label: "Core", text: "Our coach changed it" },
          { label: "Reason", text: "because the original plan wasn't working" },
          { label: "Condition", text: "if we hadn't adjusted, we might have lost" },
        ]},
      ],
    },
  ],
};

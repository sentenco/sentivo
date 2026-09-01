// SEQUENCE, Health & Wellness Track, Lesson 8: "Talking About Long-Term Health Goals"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-health-8",
  code: "L8",
  situation: "Talking About Long-Term Health Goals",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Recovering From an Illness",
      questions: [
        { q: "How are you working toward a long-term health goal?", parts: [
          { label: "Core", text: "I'm working toward it" },
          { label: "Manner", text: "by making small changes I can keep up" },
          { label: "Condition", text: "if I stay patient with the process" },
        ]},
        { q: "How do you plan to stay healthy as you get older?", parts: [
          { label: "Core", text: "I plan to stay healthy" },
          { label: "Manner", text: "by keeping up regular checkups and exercise" },
          { label: "Condition", text: "if I don't let busy periods get in the way" },
        ]},
        { q: "How are you tracking your progress toward that goal?", parts: [
          { label: "Core", text: "I'm tracking it" },
          { label: "Manner", text: "by checking in with my doctor regularly" },
          { label: "Condition", text: "if the numbers keep moving in the right direction" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What's a health goal you're working toward?",
        parts: [
          { label: "Core", text: "I want to lower my stress levels" },
          { label: "Sequence", text: "before it starts affecting my health more" },
          { label: "Purpose", text: "to feel better both physically and mentally" },
        ],
      },
      questions: [
        { q: "What's something you want to improve about your health this year?", parts: [
          { label: "Core", text: "I want to improve my sleep" },
          { label: "Sequence", text: "before it affects my work anymore" },
          { label: "Purpose", text: "to actually feel rested every day" },
        ]},
        { q: "What are you doing to prepare for a healthier future?", parts: [
          { label: "Core", text: "I'm building better habits now" },
          { label: "Sequence", text: "before they become harder to change" },
          { label: "Purpose", text: "to set myself up for the long run" },
        ]},
        { q: "What's a health milestone you're aiming for?", parts: [
          { label: "Core", text: "I want to run a 5k" },
          { label: "Sequence", text: "before the end of the year" },
          { label: "Purpose", text: "to prove to myself I can stick with a goal" },
        ]},
      ],
    },
  ],
};

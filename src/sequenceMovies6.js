// SEQUENCE, Movies & Entertainment Track, Lesson 6: "Talking About a Show You Stopped Watching"
// Callback to Lesson 5's second pattern (Core + Purpose + Reason), 3 fresh questions.

export default {
  id: "sequence-movies-6",
  code: "L6",
  situation: "Talking About a Show You Stopped Watching",
  patterns: [
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: true,
      fromSituation: "Talking About Watching With Friends or Family",
      questions: [
        { q: "Why did you stop watching that show?", parts: [
          { label: "Core", text: "I stopped watching it" },
          { label: "Purpose", text: "to avoid wasting more time on it" },
          { label: "Reason", text: "because the story stopped making sense" },
        ]},
        { q: "Why do you think the show got worse over time?", parts: [
          { label: "Core", text: "I think it got worse" },
          { label: "Purpose", text: "to keep viewers watching longer" },
          { label: "Reason", text: "because it kept dragging things out" },
        ]},
        { q: "Why did a friend convince you to give it another chance?", parts: [
          { label: "Core", text: "A friend convinced me" },
          { label: "Purpose", text: "to see if it improved later" },
          { label: "Reason", text: "because they said the next season was better" },
        ]},
      ],
    },
    {
      name: "Core + Time + Condition",
      slots: ["Core", "Time", "Condition"],
      isCallback: false,
      example: {
        q: "When did you decide to stop watching that show?",
        parts: [
          { label: "Core", text: "I decided to stop" },
          { label: "Time", text: "halfway through the season" },
          { label: "Condition", text: "if it hadn't gotten better by then" },
        ],
      },
      questions: [
        { q: "When do you usually give up on a slow show?", parts: [
          { label: "Core", text: "I usually give up" },
          { label: "Time", text: "after a few boring episodes" },
          { label: "Condition", text: "if nothing interesting happens by then" },
        ]},
        { q: "When might you go back and finish it?", parts: [
          { label: "Core", text: "I might go back" },
          { label: "Time", text: "sometime this summer" },
          { label: "Condition", text: "if I run out of other things to watch" },
        ]},
        { q: "When did you realize you weren't enjoying it anymore?", parts: [
          { label: "Core", text: "I realized it" },
          { label: "Time", text: "one random Tuesday" },
          { label: "Condition", text: "if I catch myself checking my phone instead" },
        ]},
      ],
    },
  ],
};

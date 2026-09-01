// SEQUENCE, Sports & Activities Track, Lesson 1: "Talking About Practice Schedule"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-sports-1",
  code: "L1",
  situation: "Talking About Practice Schedule",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about your practice schedule.",
        parts: [
          { label: "Core", text: "I have practice" },
          { label: "Time", text: "three times a week" },
          { label: "Sequence", text: "before I even start my homework" },
          { label: "Reason", text: "because I'm too tired to focus after" },
        ],
      },
      questions: [
        { q: "When do you usually train on your own?", parts: [
          { label: "Core", text: "I train on my own" },
          { label: "Time", text: "on weekend mornings" },
          { label: "Sequence", text: "before anyone else is awake" },
          { label: "Reason", text: "because it's quiet and I can focus" },
        ]},
        { q: "When does your team usually have games?", parts: [
          { label: "Core", text: "We have games" },
          { label: "Time", text: "every other Saturday" },
          { label: "Sequence", text: "before the season wraps up in spring" },
          { label: "Reason", text: "because that's when the league schedules them" },
        ]},
        { q: "When do you usually stretch and warm up?", parts: [
          { label: "Core", text: "I warm up" },
          { label: "Time", text: "for fifteen minutes" },
          { label: "Sequence", text: "before every practice starts" },
          { label: "Reason", text: "because it helps me avoid getting hurt" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you prepare for a big game?",
        parts: [
          { label: "Core", text: "I prepare" },
          { label: "Manner", text: "by watching film of the other team" },
          { label: "Purpose", text: "to know what to expect" },
        ],
      },
      questions: [
        { q: "How do you stay focused during a tough practice?", parts: [
          { label: "Core", text: "I stay focused" },
          { label: "Manner", text: "by setting small goals for myself" },
          { label: "Purpose", text: "to avoid getting overwhelmed" },
        ]},
        { q: "How does your coach get the team ready before a game?", parts: [
          { label: "Core", text: "Our coach gets us ready" },
          { label: "Manner", text: "by running through the game plan" },
          { label: "Purpose", text: "to make sure everyone knows their role" },
        ]},
        { q: "How do you recover after an intense practice?", parts: [
          { label: "Core", text: "I recover" },
          { label: "Manner", text: "by stretching and drinking a lot of water" },
          { label: "Purpose", text: "to avoid being sore the next day" },
        ]},
      ],
    },
  ],
};

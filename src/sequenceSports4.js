// SEQUENCE, Sports & Activities Track, Lesson 4: "Talking About an Injury"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-sports-4",
  code: "L4",
  situation: "Talking About an Injury",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About Staying Motivated",
      questions: [
        { q: "What happened when you got injured?", parts: [
          { label: "Core", text: "I twisted my ankle" },
          { label: "Detail", text: "specifically during a sprint drill" },
          { label: "Sequence", text: "before I even finished practice" },
        ]},
        { q: "What did the recovery process look like?", parts: [
          { label: "Core", text: "I did physical therapy" },
          { label: "Detail", text: "specifically twice a week" },
          { label: "Sequence", text: "before I was cleared to play again" },
        ]},
        { q: "What was hardest about being injured?", parts: [
          { label: "Core", text: "The hardest part was sitting out" },
          { label: "Detail", text: "specifically watching my team play without me" },
          { label: "Sequence", text: "before I could finally return" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where did the injury happen?",
        parts: [
          { label: "Core", text: "It happened" },
          { label: "Place", text: "on the field, near the sideline" },
          { label: "Detail", text: "specifically on a routine play" },
        ],
      },
      questions: [
        { q: "Where do you usually do your recovery exercises?", parts: [
          { label: "Core", text: "I do them" },
          { label: "Place", text: "at a physical therapy clinic" },
          { label: "Detail", text: "specifically one close to my school" },
        ]},
        { q: "Where were you sitting when you couldn't play?", parts: [
          { label: "Core", text: "I sat" },
          { label: "Place", text: "on the bench with the team" },
          { label: "Detail", text: "specifically still in uniform to feel part of it" },
        ]},
        { q: "Where did you first notice you were ready to play again?", parts: [
          { label: "Core", text: "I noticed it" },
          { label: "Place", text: "during a light practice" },
          { label: "Detail", text: "specifically when I could run at full speed again" },
        ]},
      ],
    },
  ],
};

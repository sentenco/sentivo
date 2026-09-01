// SEQUENCE, Sports & Activities Track, Lesson 5: "Talking About a Teammate"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-sports-5",
  code: "L5",
  situation: "Talking About a Teammate",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About an Injury",
      questions: [
        { q: "Where did you meet your closest teammate?", parts: [
          { label: "Core", text: "I met them" },
          { label: "Place", text: "at tryouts a few years ago" },
          { label: "Detail", text: "specifically when we got paired for a drill" },
        ]},
        { q: "Where do you and your teammates hang out outside of practice?", parts: [
          { label: "Core", text: "We hang out" },
          { label: "Place", text: "at each other's houses" },
          { label: "Detail", text: "specifically to watch games together" },
        ]},
        { q: "Where does your teammate usually support you most?", parts: [
          { label: "Core", text: "They support me most" },
          { label: "Place", text: "on the sidelines during tough games" },
          { label: "Detail", text: "specifically with encouragement when I mess up" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why is that teammate important to you?",
        parts: [
          { label: "Core", text: "They're important to me" },
          { label: "Purpose", text: "to have someone who pushes me" },
          { label: "Reason", text: "because we hold each other accountable" },
        ],
      },
      questions: [
        { q: "Why do you trust that teammate on the field?", parts: [
          { label: "Core", text: "I trust them" },
          { label: "Purpose", text: "to make the right call under pressure" },
          { label: "Reason", text: "because they've proven it before" },
        ]},
        { q: "Why did you and your teammate become close?", parts: [
          { label: "Core", text: "We became close" },
          { label: "Purpose", text: "to support each other through a tough season" },
          { label: "Reason", text: "because we went through it together" },
        ]},
        { q: "Why do you encourage your teammates when they struggle?", parts: [
          { label: "Core", text: "I encourage them" },
          { label: "Purpose", text: "to help them keep going" },
          { label: "Reason", text: "because I know what it feels like to struggle too" },
        ]},
      ],
    },
  ],
};

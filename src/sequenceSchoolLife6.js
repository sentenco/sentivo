// SEQUENCE, School Life Track, Lesson 6: "Talking About an Extracurricular Activity"
// Callback to Lesson 5's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-schoollife-6",
  code: "L6",
  situation: "Talking About an Extracurricular Activity",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Friendship",
      questions: [
        { q: "Where does your club usually meet?", parts: [
          { label: "Core", text: "Our club meets" },
          { label: "Place", text: "in the art room" },
          { label: "Detail", text: "especially after last period" },
        ]},
        { q: "Where do you practice for your sport?", parts: [
          { label: "Core", text: "We practice" },
          { label: "Place", text: "on the school field" },
          { label: "Detail", text: "especially during the fall season" },
        ]},
        { q: "Where did you perform for the first time?", parts: [
          { label: "Core", text: "I first performed" },
          { label: "Place", text: "at the school talent show" },
          { label: "Detail", text: "especially in front of my whole grade" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why did you join that club or team?",
        parts: [
          { label: "Core", text: "I joined the drama club" },
          { label: "Purpose", text: "to build my confidence" },
          { label: "Reason", text: "because I used to be really shy" },
        ],
      },
      questions: [
        { q: "Why do you keep going to practice even when it's tiring?", parts: [
          { label: "Core", text: "I keep going" },
          { label: "Purpose", text: "to reach my personal goals" },
          { label: "Reason", text: "because giving up isn't really an option for me" },
        ]},
        { q: "Why did you try out for something new this year?", parts: [
          { label: "Core", text: "I tried out for something new" },
          { label: "Purpose", text: "to challenge myself" },
          { label: "Reason", text: "because I wanted to grow" },
        ]},
        { q: "Why does this activity matter to you?", parts: [
          { label: "Core", text: "This activity matters to me" },
          { label: "Purpose", text: "to give me a break from schoolwork" },
          { label: "Reason", text: "because it's where I feel most like myself" },
        ]},
      ],
    },
  ],
};

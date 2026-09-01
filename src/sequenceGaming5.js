// SEQUENCE, Online & Gaming Track, Lesson 5: "Balancing Gaming and Responsibilities"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-gaming-5",
  code: "L5",
  situation: "Balancing Gaming and Responsibilities",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Favorite Game",
      questions: [
        { q: "Where do you draw the line between gaming and responsibilities?", parts: [
          { label: "Core", text: "I draw the line" },
          { label: "Place", text: "right after homework is done" },
          { label: "Detail", text: "specifically no exceptions on school nights" },
        ]},
        { q: "Where does gaming usually fit into your daily schedule?", parts: [
          { label: "Core", text: "It fits in" },
          { label: "Place", text: "in the late afternoon" },
          { label: "Detail", text: "specifically for about an hour" },
        ]},
        { q: "Where do your parents usually bring up screen time rules?", parts: [
          { label: "Core", text: "They bring it up" },
          { label: "Place", text: "at the dinner table" },
          { label: "Detail", text: "specifically when I've been playing too much" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why do you try to limit your gaming time?",
        parts: [
          { label: "Core", text: "I try to limit it" },
          { label: "Purpose", text: "to stay on top of schoolwork" },
          { label: "Reason", text: "because grades matter more in the long run" },
        ],
      },
      questions: [
        { q: "Why did you set a timer for gaming?", parts: [
          { label: "Core", text: "I set a timer" },
          { label: "Purpose", text: "to stop myself from losing track of time" },
          { label: "Reason", text: "because I've missed things before because of it" },
        ]},
        { q: "Why do your parents ask you to take breaks?", parts: [
          { label: "Core", text: "They ask me to take breaks" },
          { label: "Purpose", text: "to protect my eyes and posture" },
          { label: "Reason", text: "because I sit too long without moving" },
        ]},
        { q: "Why is it hard to stop playing sometimes?", parts: [
          { label: "Core", text: "It's hard to stop" },
          { label: "Purpose", text: "to finish one more round" },
          { label: "Reason", text: "because a match can end right when I quit" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Online & Gaming Track, Lesson 4: "Talking About a Favorite Game"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-gaming-4",
  code: "L4",
  situation: "Talking About a Favorite Game",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Dealing With a Toxic Player",
      questions: [
        { q: "What makes your favorite game stand out?", parts: [
          { label: "Core", text: "The storyline stands out" },
          { label: "Detail", text: "specifically how unpredictable it is" },
          { label: "Sequence", text: "before you even reach the final level" },
        ]},
        { q: "What's a moment in that game you'll never forget?", parts: [
          { label: "Core", text: "There's one boss fight" },
          { label: "Detail", text: "specifically the final one" },
          { label: "Sequence", text: "before the credits finally rolled" },
        ]},
        { q: "What keeps you coming back to that game?", parts: [
          { label: "Core", text: "The updates keep me coming back" },
          { label: "Detail", text: "specifically new content every season" },
          { label: "Sequence", text: "before I even finish the last one" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where do you usually play that game?",
        parts: [
          { label: "Core", text: "I play it" },
          { label: "Place", text: "in my room, on my own setup" },
          { label: "Detail", text: "specifically because I need to focus" },
        ],
      },
      questions: [
        { q: "Where did you first hear about that game?", parts: [
          { label: "Core", text: "I heard about it" },
          { label: "Place", text: "from a friend at school" },
          { label: "Detail", text: "specifically after he wouldn't stop talking about it" },
        ]},
        { q: "Where does most of the game take place?", parts: [
          { label: "Core", text: "It takes place" },
          { label: "Place", text: "in a huge open world" },
          { label: "Detail", text: "specifically one you can explore freely" },
        ]},
        { q: "Where do you usually play with friends, in person or online?", parts: [
          { label: "Core", text: "We usually play" },
          { label: "Place", text: "online, from our own houses" },
          { label: "Detail", text: "specifically since we live far apart" },
        ]},
      ],
    },
  ],
};

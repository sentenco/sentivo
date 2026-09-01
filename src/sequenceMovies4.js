// SEQUENCE, Movies & Entertainment Track, Lesson 4: "Talking About a Plot Twist"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-movies-4",
  code: "L4",
  situation: "Talking About a Plot Twist",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About a Favorite Character",
      questions: [
        { q: "What was the biggest plot twist you've seen recently?", parts: [
          { label: "Core", text: "There was a huge twist" },
          { label: "Detail", text: "specifically involving a character everyone trusted" },
          { label: "Sequence", text: "before the whole story flipped" },
        ]},
        { q: "What clues did you miss before the twist happened?", parts: [
          { label: "Core", text: "I missed a few clues" },
          { label: "Detail", text: "specifically small hints early on" },
          { label: "Sequence", text: "before rewatching it and noticing them" },
        ]},
        { q: "What was your reaction when the twist happened?", parts: [
          { label: "Core", text: "I was completely shocked" },
          { label: "Detail", text: "specifically I had to pause the show" },
          { label: "Sequence", text: "before I could even process it" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where did that plot twist take place in the story?",
        parts: [
          { label: "Core", text: "It happened" },
          { label: "Place", text: "right in the middle of the season" },
          { label: "Detail", text: "specifically during what seemed like a normal episode" },
        ],
      },
      questions: [
        { q: "Where were you when you found out about the twist?", parts: [
          { label: "Core", text: "I was" },
          { label: "Place", text: "at home, watching alone" },
          { label: "Detail", text: "specifically late at night" },
        ]},
        { q: "Where does the story usually build up its biggest reveals?", parts: [
          { label: "Core", text: "It builds them up" },
          { label: "Place", text: "in the final episodes" },
          { label: "Detail", text: "specifically to end on a cliffhanger" },
        ]},
        { q: "Where did you go to talk about the twist afterward?", parts: [
          { label: "Core", text: "I went" },
          { label: "Place", text: "straight to a group chat" },
          { label: "Detail", text: "specifically to see if anyone else was shocked too" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Family & Home Life Track, Lesson 4: "Talking About a Sibling Argument"
// Callback to Lesson 3's second pattern (Core + Detail + Sequence), 3 fresh questions.

export default {
  id: "sequence-family-4",
  code: "L4",
  situation: "Talking About a Sibling Argument",
  patterns: [
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: true,
      fromSituation: "Talking About a Family Dinner",
      questions: [
        { q: "What was a recent argument with your sibling about?", parts: [
          { label: "Core", text: "We argued about the TV remote" },
          { label: "Detail", text: "specifically who got to choose the show" },
          { label: "Sequence", text: "before my mom stepped in" },
        ]},
        { q: "What usually starts arguments between you and your sibling?", parts: [
          { label: "Core", text: "It usually starts over something small" },
          { label: "Detail", text: "specifically borrowing things without asking" },
          { label: "Sequence", text: "before it turns into a bigger fight" },
        ]},
        { q: "What happened the last time you two made up?", parts: [
          { label: "Core", text: "We finally talked it out" },
          { label: "Detail", text: "specifically about why I was upset" },
          { label: "Sequence", text: "before we went back to being normal" },
        ]},
      ],
    },
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: false,
      example: {
        q: "Where do you usually go to cool off after an argument?",
        parts: [
          { label: "Core", text: "I go to my room" },
          { label: "Place", text: "upstairs, away from everyone" },
          { label: "Detail", text: "specifically so I can calm down alone" },
        ],
      },
      questions: [
        { q: "Where does your family usually resolve disagreements?", parts: [
          { label: "Core", text: "We talk it out" },
          { label: "Place", text: "at the kitchen table" },
          { label: "Detail", text: "specifically because it feels neutral for everyone" },
        ]},
        { q: "Where do you go when you need space from your siblings?", parts: [
          { label: "Core", text: "I go outside" },
          { label: "Place", text: "to the backyard" },
          { label: "Detail", text: "specifically because it's quiet out there" },
        ]},
        { q: "Where did you two make up after the fight?", parts: [
          { label: "Core", text: "We ended up talking" },
          { label: "Place", text: "in the car on the way home" },
          { label: "Detail", text: "specifically because no one else was around" },
        ]},
      ],
    },
  ],
};

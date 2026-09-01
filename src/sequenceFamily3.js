// SEQUENCE, Family & Home Life Track, Lesson 3: "Talking About a Family Dinner"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-family-3",
  code: "L3",
  situation: "Talking About a Family Dinner",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Chores at Home",
      questions: [
        { q: "Why is family dinner important to your household?", parts: [
          { label: "Core", text: "Family dinner is important" },
          { label: "Reason", text: "because it's the only time we all talk" },
          { label: "Condition", text: "if everyone actually puts their phone away" },
        ]},
        { q: "Why did a recent family dinner stand out to you?", parts: [
          { label: "Core", text: "That dinner stood out" },
          { label: "Reason", text: "because we were laughing the whole time" },
          { label: "Condition", text: "if I think back to it now" },
        ]},
        { q: "Why do you sometimes dread family dinner?", parts: [
          { label: "Core", text: "I sometimes dread it" },
          { label: "Reason", text: "because someone always brings up something awkward" },
          { label: "Condition", text: "if my parents are in a serious mood" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What happened at your last family dinner?",
        parts: [
          { label: "Core", text: "We had a big dinner" },
          { label: "Detail", text: "specifically to celebrate my sister's birthday" },
          { label: "Sequence", text: "before we brought out the cake" },
        ],
      },
      questions: [
        { q: "What did your family talk about at dinner recently?", parts: [
          { label: "Core", text: "We talked about summer plans" },
          { label: "Detail", text: "especially where we might travel" },
          { label: "Sequence", text: "before my dad changed the subject" },
        ]},
        { q: "What went wrong at a family dinner once?", parts: [
          { label: "Core", text: "Something burned in the kitchen" },
          { label: "Detail", text: "specifically the rice my mom was cooking" },
          { label: "Sequence", text: "before we ended up ordering takeout" },
        ]},
        { q: "What's a tradition your family has at dinner?", parts: [
          { label: "Core", text: "We say one good thing about our day" },
          { label: "Detail", text: "specifically something that made us smile" },
          { label: "Sequence", text: "before anyone is allowed to leave the table" },
        ]},
      ],
    },
  ],
};

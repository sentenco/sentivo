// SEQUENCE, Housing & Apartment Life Track, Lesson 3: "Talking About a Roommate"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-housing-3",
  code: "L3",
  situation: "Talking About a Roommate",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Signing a Lease",
      questions: [
        { q: "Why did you decide to get a roommate?", parts: [
          { label: "Core", text: "I decided to get one" },
          { label: "Reason", text: "because rent is more manageable that way" },
          { label: "Condition", text: "if I hadn't found the right person" },
        ]},
        { q: "Why do you and your roommate get along well?", parts: [
          { label: "Core", text: "We get along well" },
          { label: "Reason", text: "because we respect each other's space" },
          { label: "Condition", text: "if either of us hadn't compromised early on" },
        ]},
        { q: "Why did an issue come up with your roommate?", parts: [
          { label: "Core", text: "An issue came up" },
          { label: "Reason", text: "because we had different cleanliness standards" },
          { label: "Condition", text: "if we hadn't talked it through" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What happened when you first moved in with your roommate?",
        parts: [
          { label: "Core", text: "We set some ground rules" },
          { label: "Detail", text: "specifically about chores and guests" },
          { label: "Sequence", text: "before either of us moved a single box in" },
        ],
      },
      questions: [
        { q: "What do you and your roommate split evenly?", parts: [
          { label: "Core", text: "We split the utilities" },
          { label: "Detail", text: "specifically dividing them right down the middle" },
          { label: "Sequence", text: "before the first bill even arrived" },
        ]},
        { q: "What happened during a disagreement with your roommate?", parts: [
          { label: "Core", text: "We talked it out" },
          { label: "Detail", text: "specifically about noise late at night" },
          { label: "Sequence", text: "before it turned into a bigger issue" },
        ]},
        { q: "What's something you appreciate about your roommate?", parts: [
          { label: "Core", text: "I appreciate how considerate they are" },
          { label: "Detail", text: "specifically always giving me a heads-up about guests" },
          { label: "Sequence", text: "before they ever have people over" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Family & Home Life Track, Lesson 2: "Talking About Chores at Home"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-family-2",
  code: "L2",
  situation: "Talking About Chores at Home",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Talking About Your Family Routine",
      questions: [
        { q: "How do you divide chores in your house?", parts: [
          { label: "Core", text: "We divide chores" },
          { label: "Manner", text: "by taking turns each week" },
          { label: "Purpose", text: "so it's fair for everyone" },
        ]},
        { q: "How do you remember to do your chores?", parts: [
          { label: "Core", text: "I remember my chores" },
          { label: "Manner", text: "by setting a reminder on my phone" },
          { label: "Purpose", text: "so I don't forget and get in trouble" },
        ]},
        { q: "How does your family handle a messy shared space?", parts: [
          { label: "Core", text: "We handle it" },
          { label: "Manner", text: "by having a quick five-minute cleanup" },
          { label: "Purpose", text: "to keep things from piling up" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why do you think chores matter?",
        parts: [
          { label: "Core", text: "I think chores matter" },
          { label: "Reason", text: "because they teach responsibility" },
          { label: "Condition", text: "if you actually take them seriously" },
        ],
      },
      questions: [
        { q: "Why do you sometimes avoid doing a certain chore?", parts: [
          { label: "Core", text: "I avoid that chore" },
          { label: "Reason", text: "because it's the most boring one" },
          { label: "Condition", text: "if I can find any excuse not to" },
        ]},
        { q: "Why does your family have a chore chart?", parts: [
          { label: "Core", text: "We have a chore chart" },
          { label: "Reason", text: "because it stops arguments about who did what" },
          { label: "Condition", text: "if everyone actually checks it" },
        ]},
        { q: "Why do you prefer doing chores alone rather than with a sibling?", parts: [
          { label: "Core", text: "I prefer doing it alone" },
          { label: "Reason", text: "because it's faster without arguing" },
          { label: "Condition", text: "if the chore doesn't need two people anyway" },
        ]},
      ],
    },
  ],
};

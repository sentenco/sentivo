// SEQUENCE, Family & Home Life Track, Lesson 1: "Talking About Your Family Routine"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-family-1",
  code: "L1",
  situation: "Talking About Your Family Routine",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about your family's morning routine.",
        parts: [
          { label: "Core", text: "We eat breakfast together" },
          { label: "Time", text: "every morning" },
          { label: "Sequence", text: "before everyone leaves for school or work" },
          { label: "Reason", text: "because it's the only time we're all in one place" },
        ],
      },
      questions: [
        { q: "What does your family usually do in the evening?", parts: [
          { label: "Core", text: "We watch TV together" },
          { label: "Time", text: "most nights" },
          { label: "Sequence", text: "after dinner is finished" },
          { label: "Reason", text: "because it helps us relax and unwind" },
        ]},
        { q: "When does your family usually do chores together?", parts: [
          { label: "Core", text: "We clean the house" },
          { label: "Time", text: "every Saturday morning" },
          { label: "Sequence", text: "before we do anything fun" },
          { label: "Reason", text: "because it's easier to relax once it's done" },
        ]},
        { q: "How does your family spend weekends?", parts: [
          { label: "Core", text: "We visit my grandparents" },
          { label: "Time", text: "twice a month" },
          { label: "Sequence", text: "before heading back home" },
          { label: "Reason", text: "because they live a bit far away" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How does your family stay connected during a busy week?",
        parts: [
          { label: "Core", text: "We stay connected" },
          { label: "Manner", text: "by texting in a family group chat" },
          { label: "Purpose", text: "to make sure everyone knows what's going on" },
        ],
      },
      questions: [
        { q: "How do your parents keep track of everyone's schedule?", parts: [
          { label: "Core", text: "My parents keep track" },
          { label: "Manner", text: "by using a shared calendar" },
          { label: "Purpose", text: "to avoid double-booking things" },
        ]},
        { q: "How does your family handle disagreements?", parts: [
          { label: "Core", text: "We handle disagreements" },
          { label: "Manner", text: "by talking it out calmly" },
          { label: "Purpose", text: "to avoid staying upset with each other" },
        ]},
        { q: "How do you show appreciation for your parents?", parts: [
          { label: "Core", text: "I show appreciation" },
          { label: "Manner", text: "by helping out without being asked" },
          { label: "Purpose", text: "to make their day a little easier" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Sports & Activities Track, Lesson 8: "Talking About Future Goals in Sports"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-sports-8",
  code: "L8",
  situation: "Talking About Future Goals in Sports",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Balancing Sports and School",
      questions: [
        { q: "How do you plan to improve next season?", parts: [
          { label: "Core", text: "I plan to improve" },
          { label: "Manner", text: "by training during the off-season" },
          { label: "Condition", text: "if I stay consistent with it" },
        ]},
        { q: "How do you hope to help your team next year?", parts: [
          { label: "Core", text: "I hope to help" },
          { label: "Manner", text: "by taking on more of a leadership role" },
          { label: "Condition", text: "if the coach gives me that chance" },
        ]},
        { q: "How are you preparing for tryouts at a higher level?", parts: [
          { label: "Core", text: "I'm preparing" },
          { label: "Manner", text: "by working with a private coach" },
          { label: "Condition", text: "if I can keep up with the extra training" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your goals for the rest of your sports career?",
        parts: [
          { label: "Core", text: "I want to make varsity" },
          { label: "Sequence", text: "before I graduate" },
          { label: "Purpose", text: "to prove all the training was worth it" },
        ],
      },
      questions: [
        { q: "What's one thing you want to achieve this season?", parts: [
          { label: "Core", text: "I want to start every game" },
          { label: "Sequence", text: "before the season ends" },
          { label: "Purpose", text: "to show the coach I've earned it" },
        ]},
        { q: "What do you hope to accomplish with your team this year?", parts: [
          { label: "Core", text: "We want to reach the finals" },
          { label: "Sequence", text: "before our best players graduate" },
          { label: "Purpose", text: "to finally get the title we've worked for" },
        ]},
        { q: "What's a personal goal you're working toward in sports?", parts: [
          { label: "Core", text: "I'm working toward a scholarship" },
          { label: "Sequence", text: "before I finish high school" },
          { label: "Purpose", text: "to keep playing at the next level" },
        ]},
      ],
    },
  ],
};

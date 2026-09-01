// SEQUENCE, Health & Wellness Track, Lesson 3: "Talking About Managing Stress"
// Callback to Lesson 2's second pattern (Core + Reason + Condition), 3 fresh questions.

export default {
  id: "sequence-health-3",
  code: "L3",
  situation: "Talking About Managing Stress",
  patterns: [
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: true,
      fromSituation: "Talking About Daily Health Habits",
      questions: [
        { q: "Why do you think stress affects your health so much?", parts: [
          { label: "Core", text: "I think it affects it a lot" },
          { label: "Reason", text: "because it shows up physically, not just mentally" },
          { label: "Condition", text: "if it goes unmanaged for too long" },
        ]},
        { q: "Why did you start looking for ways to manage stress?", parts: [
          { label: "Core", text: "I started looking" },
          { label: "Reason", text: "because it was affecting my sleep" },
          { label: "Condition", text: "if I hadn't noticed the pattern" },
        ]},
        { q: "Why does a certain activity help reduce your stress?", parts: [
          { label: "Core", text: "It helps" },
          { label: "Reason", text: "because it gives my mind a break" },
          { label: "Condition", text: "if I actually make time for it" },
        ]},
      ],
    },
    {
      name: "Core + Detail + Sequence",
      slots: ["Core", "Detail", "Sequence"],
      isCallback: false,
      example: {
        q: "What do you do when you're feeling stressed?",
        parts: [
          { label: "Core", text: "I take a walk" },
          { label: "Detail", text: "specifically outside, away from screens" },
          { label: "Sequence", text: "before trying to deal with the problem again" },
        ],
      },
      questions: [
        { q: "What helped you get through a particularly stressful period?", parts: [
          { label: "Core", text: "Talking to a friend helped" },
          { label: "Detail", text: "specifically just being able to vent" },
          { label: "Sequence", text: "before I could think more clearly" },
        ]},
        { q: "What's a sign that tells you you're overly stressed?", parts: [
          { label: "Core", text: "I notice I'm not sleeping well" },
          { label: "Detail", text: "specifically waking up in the middle of the night" },
          { label: "Sequence", text: "before I even connect it to stress" },
        ]},
        { q: "What changed after you started managing stress better?", parts: [
          { label: "Core", text: "My mood improved" },
          { label: "Detail", text: "specifically I felt less irritable" },
          { label: "Sequence", text: "before I even realized the change" },
        ]},
      ],
    },
  ],
};

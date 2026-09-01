// SEQUENCE, Movies & Entertainment Track, Lesson 1: "Talking About a Show You're Watching"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-movies-1",
  code: "L1",
  situation: "Talking About a Show You're Watching",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about a show you're currently watching.",
        parts: [
          { label: "Core", text: "I watch a new episode" },
          { label: "Time", text: "every Friday night" },
          { label: "Sequence", text: "before I go to bed" },
          { label: "Reason", text: "because that's when a new one usually comes out" },
        ],
      },
      questions: [
        { q: "When do you usually find time to watch shows?", parts: [
          { label: "Core", text: "I find time" },
          { label: "Time", text: "after finishing homework" },
          { label: "Sequence", text: "before it gets too late" },
          { label: "Reason", text: "because I need something to relax with" },
        ]},
        { q: "When did you start watching your current favorite show?", parts: [
          { label: "Core", text: "I started watching it" },
          { label: "Time", text: "a few months ago" },
          { label: "Sequence", text: "before a friend spoiled part of it" },
          { label: "Reason", text: "because everyone kept recommending it" },
        ]},
        { q: "When do new episodes usually come out?", parts: [
          { label: "Core", text: "New episodes come out" },
          { label: "Time", text: "once a week" },
          { label: "Sequence", text: "before the next one drops" },
          { label: "Reason", text: "because the studio releases them on a schedule" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you decide what to watch next?",
        parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by checking reviews online" },
          { label: "Purpose", text: "to avoid wasting time on something bad" },
        ],
      },
      questions: [
        { q: "How do you keep up with a show that has many seasons?", parts: [
          { label: "Core", text: "I keep up" },
          { label: "Manner", text: "by watching a recap first" },
          { label: "Purpose", text: "to remember what happened before" },
        ]},
        { q: "How do your friends convince you to watch something?", parts: [
          { label: "Core", text: "They convince me" },
          { label: "Manner", text: "by describing the best parts" },
          { label: "Purpose", text: "to get me hooked right away" },
        ]},
        { q: "How do you avoid spoilers before watching a new episode?", parts: [
          { label: "Core", text: "I avoid them" },
          { label: "Manner", text: "by staying off social media" },
          { label: "Purpose", text: "to keep the surprise for myself" },
        ]},
      ],
    },
  ],
};

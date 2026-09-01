// SEQUENCE, Online & Gaming Track, Lesson 1: "Playing With Friends Online"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-gaming-1",
  code: "L1",
  situation: "Playing With Friends Online",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about when you usually play online with friends.",
        parts: [
          { label: "Core", text: "I play with my friends" },
          { label: "Time", text: "most evenings" },
          { label: "Sequence", text: "before I have to log off for homework" },
          { label: "Reason", text: "because it's the easiest time everyone's free" },
        ],
      },
      questions: [
        { q: "When do you usually team up with the same squad?", parts: [
          { label: "Core", text: "I team up with them" },
          { label: "Time", text: "on weekends" },
          { label: "Sequence", text: "before we move on to a different game" },
          { label: "Reason", text: "because we play best together" },
        ]},
        { q: "When do servers get the most crowded?", parts: [
          { label: "Core", text: "Servers get crowded" },
          { label: "Time", text: "in the evening" },
          { label: "Sequence", text: "before things quiet down late at night" },
          { label: "Reason", text: "because that's when most people are free" },
        ]},
        { q: "When did you last stay up late gaming?", parts: [
          { label: "Core", text: "I stayed up late" },
          { label: "Time", text: "past midnight" },
          { label: "Sequence", text: "before realizing how late it was" },
          { label: "Reason", text: "because we were close to finishing a match" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you communicate with your team during a game?",
        parts: [
          { label: "Core", text: "We communicate" },
          { label: "Manner", text: "by using voice chat" },
          { label: "Purpose", text: "to call out enemies in real time" },
        ],
      },
      questions: [
        { q: "How do you and your friends decide what to play?", parts: [
          { label: "Core", text: "We decide" },
          { label: "Manner", text: "by voting in the group chat" },
          { label: "Purpose", text: "to make sure everyone's happy" },
        ]},
        { q: "How do you improve at a game you're not great at?", parts: [
          { label: "Core", text: "I improve" },
          { label: "Manner", text: "by watching guides online" },
          { label: "Purpose", text: "to learn strategies I wouldn't figure out alone" },
        ]},
        { q: "How does your squad celebrate a win?", parts: [
          { label: "Core", text: "We celebrate" },
          { label: "Manner", text: "by clipping the best moment" },
          { label: "Purpose", text: "to relive it later" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Online & Gaming Track, Lesson 2: "Streaming or Watching Content"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-gaming-2",
  code: "L2",
  situation: "Streaming or Watching Content",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Playing With Friends Online",
      questions: [
        { q: "How do you find new streamers to watch?", parts: [
          { label: "Core", text: "I find them" },
          { label: "Manner", text: "by scrolling through recommendations" },
          { label: "Purpose", text: "to discover something different" },
        ]},
        { q: "How does a streamer keep viewers engaged?", parts: [
          { label: "Core", text: "They keep viewers engaged" },
          { label: "Manner", text: "by reacting to chat live" },
          { label: "Purpose", text: "to make it feel interactive" },
        ]},
        { q: "How do you support a creator you like?", parts: [
          { label: "Core", text: "I support them" },
          { label: "Manner", text: "by subscribing to their channel" },
          { label: "Purpose", text: "to help them keep making content" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why do you enjoy watching people play games instead of playing yourself?",
        parts: [
          { label: "Core", text: "I enjoy it" },
          { label: "Reason", text: "because I get to relax without the pressure" },
          { label: "Condition", text: "if I've had a long day" },
        ],
      },
      questions: [
        { q: "Why do you prefer a certain streamer over others?", parts: [
          { label: "Core", text: "I prefer them" },
          { label: "Reason", text: "because they're genuinely funny" },
          { label: "Condition", text: "if I'm just looking to unwind" },
        ]},
        { q: "Why did that stream go viral?", parts: [
          { label: "Core", text: "It went viral" },
          { label: "Reason", text: "because something unexpected happened live" },
          { label: "Condition", text: "if the clip hadn't been posted right away" },
        ]},
        { q: "Why do you sometimes lose track of time watching streams?", parts: [
          { label: "Core", text: "I lose track of time" },
          { label: "Reason", text: "because one video leads to another" },
          { label: "Condition", text: "if I don't set a limit for myself" },
        ]},
      ],
    },
  ],
};

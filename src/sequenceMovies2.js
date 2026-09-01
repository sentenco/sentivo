// SEQUENCE, Movies & Entertainment Track, Lesson 2: "Talking About a Movie You Saw"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-movies-2",
  code: "L2",
  situation: "Talking About a Movie You Saw",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Talking About a Show You're Watching",
      questions: [
        { q: "How did you decide to watch that movie?", parts: [
          { label: "Core", text: "I decided" },
          { label: "Manner", text: "by reading a quick summary first" },
          { label: "Purpose", text: "to make sure it wasn't a waste of time" },
        ]},
        { q: "How did the movie make you feel by the end?", parts: [
          { label: "Core", text: "It made me feel" },
          { label: "Manner", text: "by building up slowly the whole time" },
          { label: "Purpose", text: "to hit hardest right at the end" },
        ]},
        { q: "How would you describe that movie to a friend?", parts: [
          { label: "Core", text: "I'd describe it" },
          { label: "Manner", text: "by comparing it to something similar" },
          { label: "Purpose", text: "to give them a quick idea" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why did you like or dislike that movie?",
        parts: [
          { label: "Core", text: "I really liked it" },
          { label: "Reason", text: "because the ending surprised me" },
          { label: "Condition", text: "if you don't see it coming at all" },
        ],
      },
      questions: [
        { q: "Why do you think that movie became so popular?", parts: [
          { label: "Core", text: "I think it became popular" },
          { label: "Reason", text: "because it felt different from anything else out" },
          { label: "Condition", text: "if people are tired of the usual formula" },
        ]},
        { q: "Why did you almost stop watching partway through?", parts: [
          { label: "Core", text: "I almost stopped" },
          { label: "Reason", text: "because the middle felt slow" },
          { label: "Condition", text: "if a friend hadn't told me to keep going" },
        ]},
        { q: "Why do critics and audiences sometimes disagree about a movie?", parts: [
          { label: "Core", text: "They disagree" },
          { label: "Reason", text: "because they're looking for different things" },
          { label: "Condition", text: "if a movie leans more toward one or the other" },
        ]},
      ],
    },
  ],
};

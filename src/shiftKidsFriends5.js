// SHIFT KIDS, Friends Track, Lesson 5: "Playing Hide and Seek"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-friends-5",
  code: "L5",
  title: "Playing Hide and Seek",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🧒",

  scene: {
    title: "Backyard, Playtime",
    context: "You and your best friend are playing hide and seek.",
  },

  scenarioSet: {
    say: "It's playtime. You and your best friend are playing hide and seek in the backyard.",
  },

  chain: [
    {
      question: "Are you hiding behind the tree right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm hiding right here.",
      nextLine: "Sneaky! Do you always hide there?",
    },
    {
      question: "Do you always hide there?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. It's my favorite spot.",
      nextLine: "What are you counting to right now?",
    },
    {
      question: "What are you counting to right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am counting</b>.",
      model: "I'm counting to ten.",
      nextLine: "Do you always count to ten?",
    },
    {
      question: "Do you always count to ten?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Ten is enough time.",
      nextLine: "Is your friend laughing right now?",
    },
    {
      question: "Is your friend laughing right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, he is. He's laughing loudly.",
      nextLine: "Does he always laugh when he hides?",
    },
    {
      question: "Does he always laugh when he hides?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. He can't stay quiet.",
      nextLine: "Found you! Let's play one more round.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing while playing? What do you always do when you hide?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always play with your friends outside?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite outdoor game before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a fun, active hide-and-seek scene, closing the track.",
      say: ["It's playtime. I'm your best friend, playing hide and seek with you."],
      do: ["Sound playful and excited."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question playfully, like a friend mid-game."],
      do: ["Show the clue only if stuck.", "Praise every correct answer."],
      timing: "8-10 min",
    },
    retell: {
      goal: "Retell the scene unaided.",
      say: ["Tell me the whole story again."],
      do: ["Let them try before helping."],
      timing: "2 min",
    },
    transfer: {
      goal: "Real-life version of the same two tenses.",
      say: ["What are you doing right now? What do you always play outside?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway, track complete.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice their favorite outdoor game before next time."],
      timing: "1 min",
    },
  },
};

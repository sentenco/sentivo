// SHIFT KIDS, Friends Track, Lesson 3: "Sharing Snacks"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-friends-3",
  code: "L3",
  title: "Sharing Snacks",
  tenses: "Present Simple vs Present Continuous",
  tag: "Friends",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🧒",

  scene: {
    title: "Backyard, Snack Time",
    context: "You and your best friend are having a snack together outside.",
  },

  scenarioSet: {
    say: "It's snack time. You and your best friend are sitting outside sharing food.",
  },

  chain: [
    {
      question: "Are you eating crackers right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm eating crackers.",
      nextLine: "Yummy. Do you always bring crackers for snack?",
    },
    {
      question: "Do you always bring crackers for snack?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. Sometimes I bring fruit.",
      nextLine: "What are you sharing with me right now?",
    },
    {
      question: "What are you sharing with me right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am sharing</b>.",
      model: "I'm sharing my apple.",
      nextLine: "Do you always share your snacks?",
    },
    {
      question: "Do you always share your snacks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Sharing is nice.",
      nextLine: "Is your dog waiting for a treat right now?",
    },
    {
      question: "Is your dog waiting for a treat right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, it is. It's waiting right there.",
      nextLine: "Does your dog always want your snacks?",
    },
    {
      question: "Does your dog always want your snacks?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, it does. It loves food.",
      nextLine: "Ha! Let's give him a little piece too.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you sharing? What do you always bring for snack?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always share with your friends?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice your favorite snack before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a friendly outdoor snack-sharing scene.",
      say: ["It's snack time outside. I'm your best friend, sharing snacks with you."],
      do: ["Sound warm and playful."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question playfully, like a friend sharing food."],
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
      say: ["What are you doing right now? What do you always share with friends?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a favorite snack before next time."],
      timing: "1 min",
    },
  },
};

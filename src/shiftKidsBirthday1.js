// SHIFT KIDS, Birthday Party Track, Lesson 1: "The Invitation"
// Best Friend & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-birthday-1",
  code: "L1",
  title: "The Invitation",
  tenses: "Present Simple vs Present Continuous",
  tag: "Birthday",
  roles: { them: "Best Friend", me: "You" },
  themEmoji: "🎉",

  scene: {
    title: "Your House, Afternoon",
    context: "Your best friend is helping you make invitations for your birthday party.",
  },

  scenarioSet: {
    say: "Your birthday is coming soon. You're making invitations with your best friend.",
  },

  chain: [
    {
      question: "Are you writing your name on the invitation right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm writing it now.",
      nextLine: "Great! Do you always have a birthday party every year?",
    },
    {
      question: "Do you always have a birthday party every year?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I have one every year.",
      nextLine: "What color paper are you using right now?",
    },
    {
      question: "What color paper are you using right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>am using</b>.",
      model: "I'm using pink paper.",
      nextLine: "Do you always like pink the best?",
    },
    {
      question: "Do you always like pink the best?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>don't</b>.",
      model: "No, I don't. I like blue too.",
      nextLine: "Are you drawing balloons right now?",
    },
    {
      question: "Are you drawing balloons right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm drawing three balloons.",
      nextLine: "Do you always draw balloons on invitations?",
    },
    {
      question: "Do you always draw balloons on invitations?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. Balloons make it look fun.",
      nextLine: "Perfect! Let's give one to everyone at school.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you making? What do you always do for your birthday?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do to get ready for a party?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice something you always do before a party before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set an excited, party-planning scene.",
      say: ["Your birthday is coming. I'm your best friend, helping make invitations."],
      do: ["Sound excited and helpful."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question excitedly, like a friend planning a party."],
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
      say: ["What are you doing right now? What do you always do to get ready for a party?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a party habit before next time."],
      timing: "1 min",
    },
  },
};

// SHIFT KIDS, Pets & Animals Track, Lesson 1: "Feeding the Dog"
// Mom & kid. Present Simple vs Present Continuous.

export default {
  id: "kids-pets-1",
  code: "L1",
  title: "Feeding the Dog",
  tenses: "Present Simple vs Present Continuous",
  tag: "Pets",
  roles: { them: "Mom", me: "You" },
  themEmoji: "🐶",

  scene: {
    title: "Kitchen, Evening",
    context: "It's time to feed your dog. Mom is watching you do it.",
  },

  scenarioSet: {
    say: "It's evening. You're feeding your dog in the kitchen.",
  },

  chain: [
    {
      question: "Are you feeding the dog right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>am</b>.",
      model: "Yes, I am. I'm feeding him now.",
      nextLine: "Good job. Do you always feed him in the evening?",
    },
    {
      question: "Do you always feed him in the evening?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>do</b>.",
      model: "Yes, I do. I feed him every evening.",
      nextLine: "What is he doing right now?",
    },
    {
      question: "What is he doing right now?",
      shortAnswer: false,
      clue: "Present Continuous: <b>is wagging</b>.",
      model: "He's wagging his tail.",
      nextLine: "Does he always wag his tail at dinner time?",
    },
    {
      question: "Does he always wag his tail at dinner time?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. He loves dinner time.",
      nextLine: "Is he eating fast right now?",
    },
    {
      question: "Is he eating fast right now?",
      shortAnswer: true,
      clue: "Short answer. Present Continuous: <b>is</b>.",
      model: "Yes, he is. He's eating very fast.",
      nextLine: "Does he always eat that fast?",
    },
    {
      question: "Does he always eat that fast?",
      shortAnswer: true,
      clue: "Short answer. Present Simple: <b>does</b>.",
      model: "Yes, he does. He's always hungry.",
      nextLine: "Good boy! Let's give him fresh water too.",
    },
  ],

  retell: {
    prompt: "Tell the story again alone. What were you doing? What does your dog always do at dinner time?",
  },

  transfer: {
    question: "What are you doing right now? And what do you always do to take care of your pet?",
  },

  wrap: {
    prompt: "Remember: always = Present Simple, right now = Present Continuous. Notice one thing you always do for your pet before next time.",
  },

  teacherGuide: {
    scenarioSet: {
      goal: "Set a caring, familiar pet-feeding scene.",
      say: ["It's evening. I'm your mom, watching you feed the dog."],
      do: ["Sound warm and encouraging."],
      timing: "1 min",
    },
    chain: {
      goal: "6 exchanges alternating habit and right-now.",
      say: ["Ask each question warmly, like a parent watching a pet chore."],
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
      say: ["What are you doing right now? What do you always do to take care of your pet?"],
      do: ["This proves the grammar landed."],
      timing: "1-2 min",
    },
    wrap: {
      goal: "One clear takeaway.",
      say: ["Always = Present Simple. Right now = Present Continuous."],
      do: ["Ask them to notice a pet-care habit before next time."],
      timing: "1 min",
    },
  },
};

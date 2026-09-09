// ASCEND, Talking About Your Day Track, Lesson 3: "An Evening at Home"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-day-3",
  code: "L3",
  mechanic: "push",
  title: "An Evening at Home",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your evenings at home.",
      answer: "I relax.",
      leveledAnswer: "I usually watch videos on my phone for about an hour to relax.",
      pushes: [
        "Relax is very general. Tell us exactly what you do.",
        "Now add how long you usually spend doing it.",
      ],
      skills: ["A specific activity named", "A duration detail added"],
    },
    {
      question: "Do you have any chores at home?",
      answer: "Yes, a few.",
      leveledAnswer: "Yes, I wash the dishes and take out the trash, and I like the trash least because it smells bad.",
      pushes: [
        "Name at least two of them exactly.",
        "Now tell us which one you like least, and why.",
      ],
      skills: ["Specific chores named", "An opinion with a reason added"],
    },
    {
      question: "How much time do you spend on your phone in the evening?",
      answer: "A lot.",
      leveledAnswer: "Probably around three hours, mostly for watching videos and chatting with friends.",
      pushes: [
        "A lot isn't a real answer. Give us a rough number.",
        "Now tell us what you mostly use it for.",
      ],
      skills: ["A specific quantity or time estimate", "A purpose detail added"],
    },
    {
      question: "Do you spend evening time with family?",
      answer: "Sometimes.",
      leveledAnswer: "Sometimes we watch a show together, and those nights feel better than when everyone's in their own room.",
      pushes: [
        "Tell us what you usually do together.",
        "Now compare it to a night when you don't see them.",
      ],
      skills: ["A specific shared activity", "A comparison structure used"],
    },
    {
      question: "What's the best part of your evening?",
      answer: "Dinner.",
      leveledAnswer: "Dinner is the best part because it's the only time the whole family sits together and talks.",
      pushes: [
        "Tell us why dinner is the best part, specifically.",
        "Now describe one detail that makes it good.",
      ],
      skills: ["A reason added", "A sensory or specific detail added"],
    },
    {
      question: "Is there anything about your evenings you'd like to change?",
      answer: "Less phone time.",
      leveledAnswer: "I wish I spent less time on my phone, so I could read a book instead.",
      pushes: [
        "Turn that into a full sentence starting with 'I wish...'",
        "Now tell us what you'd do instead.",
      ],
      skills: ["An 'I wish' structure used", "An alternative activity named"],
    },
    {
      question: "What time do you usually go to bed?",
      answer: "Around eleven.",
      leveledAnswer: "Around eleven, which is pretty late for me, so I usually feel tired the next morning.",
      pushes: [
        "Tell us if that's early or late for you, and why.",
        "Now describe how you feel the next morning because of it.",
      ],
      skills: ["A self-comparison added", "A cause-and-effect link to the next day"],
    },
    {
      question: "Is there a new evening habit you want to try?",
      answer: "Reading more.",
      leveledAnswer: "I'd like to read more mystery novels, but I always end up on my phone instead.",
      pushes: [
        "Tell us what kind of thing you'd read.",
        "Now tell us what's stopping you right now.",
      ],
      skills: ["A specific detail added", "An honest obstacle named"],
    },
  ],
  recall: [
    { question: "Tell me about your evenings at home.", fromPrompt: 0 },
    { question: "Do you have any chores at home?", fromPrompt: 1 },
    { question: "What's the best part of your evening?", fromPrompt: 4 },
  ],
};

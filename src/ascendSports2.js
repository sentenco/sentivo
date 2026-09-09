// ASCEND, Talking About Sports & Activities Track, Lesson 2: "A Competition or Match"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-sports-2",
  code: "L2",
  mechanic: "push",
  title: "A Competition or Match",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a competition or match you took part in.",
      answer: "It was okay.",
      leveledAnswer: "It was actually really thrilling because it was the regional swimming championship.",
      pushes: [
        "Okay is very general. Give us a stronger word.",
        "Now tell us exactly what the competition was.",
      ],
      skills: ["A stronger adjective than okay", "A specific event named"],
    },
    {
      question: "How did you feel before it started?",
      answer: "Nervous.",
      leveledAnswer: "I felt really anxious, so I took a few deep breaths before we started.",
      pushes: [
        "Give us a more precise feeling word.",
        "Now tell us what you did to deal with that feeling.",
      ],
      skills: ["A precise feeling word", "A specific coping action described"],
    },
    {
      question: "What happened during it?",
      answer: "A lot happened.",
      leveledAnswer: "One moment that stood out was when I almost tripped at the start, but I quickly regained my balance and kept going.",
      pushes: [
        "Pick one specific moment and describe it.",
        "Now tell us how you reacted in that moment.",
      ],
      skills: ["One specific moment described", "A reaction detail added"],
    },
    {
      question: "How did you perform?",
      answer: "Pretty well.",
      leveledAnswer: "I finished in second place overall, though I struggled a bit with my timing at the start.",
      pushes: [
        "Give us a specific detail that shows how well.",
        "Now tell us if there was a part you struggled with.",
      ],
      skills: ["A specific detail (score/example)", "A struggle detail added"],
    },
    {
      question: "What was the result?",
      answer: "We did fine.",
      leveledAnswer: "We actually came in third place, and I felt really proud of how far we'd come.",
      pushes: [
        "Give us the actual result, exactly.",
        "Now tell us how you felt about that result.",
      ],
      skills: ["A specific result stated", "A feeling word attached"],
    },
    {
      question: "Was there a moment you're proud of?",
      answer: "Yes, one part.",
      leveledAnswer: "Yes, the moment I beat my personal best time, because it showed all the extra training had paid off.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us why it makes you proud, specifically.",
      ],
      skills: ["A more detailed description", "A specific reason for pride"],
    },
    {
      question: "What would you improve for next time?",
      answer: "My technique.",
      leveledAnswer: "Next time I will work on my starting technique, since that's where I lost the most time.",
      pushes: [
        "Tell us exactly which part of your technique.",
        "Now put it into a sentence with 'Next time I will...'",
      ],
      skills: ["A specific detail named", "A clear future-plan structure"],
    },
    {
      question: "Is there another competition coming up you're preparing for?",
      answer: "Maybe one.",
      leveledAnswer: "There's a regional meet next month, and I'm preparing by practicing my starts every day after school.",
      pushes: [
        "Tell us what it is, exactly.",
        "Now tell us how you're preparing for it.",
      ],
      skills: ["A specific event named", "A preparation detail added"],
    },
  ],
  recall: [
    { question: "Tell me about a competition or match you took part in.", fromPrompt: 0 },
    { question: "What was the result?", fromPrompt: 4 },
    { question: "Was there a moment you're proud of?", fromPrompt: 5 },
  ],
};

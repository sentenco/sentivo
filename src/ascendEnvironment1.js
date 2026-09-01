// ASCEND (Push mechanic), Environment & Sustainability Track, Lesson 1: "Our Changing Planet"
// B2 -> C1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-environment-1",
  code: "L1",
  mechanic: "push",
  title: "Our Changing Planet",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me how you feel about climate change.",
      answer: "It worries me, honestly.",
      pushes: [
        "'Worries me' is a start, but give us a more precise word for that feeling.",
        "Now add a reason connected to your own life, not just a general statement.",
      ],
      skills: ["A more precise emotional or attitude word", "A personal reasoning connection added"],
    },
    {
      question: "What's one thing you do to help the environment?",
      answer: "I try to recycle and stuff.",
      pushes: [
        "'And stuff' is too vague and casual. Name another specific action.",
        "Now explain why you started doing this.",
      ],
      skills: ["A specific named action instead of and stuff", "A reason or motivation added"],
    },
    {
      question: "Do you think individuals can really make a difference on climate change?",
      answer: "Kind of, but it's mostly up to big companies.",
      pushes: [
        "Good instinct. Now make that argument more precise, what's the actual dividing line?",
        "Now support it with a specific example or reason.",
      ],
      skills: ["A more precise distinction made (individual vs. systemic responsibility)", "A specific example or reason added"],
    },
    {
      question: "Describe a change you've noticed in the environment around you.",
      answer: "The weather's been weird lately.",
      pushes: [
        "'Weird' is vague. What specifically have you noticed?",
        "Now connect it to a possible cause.",
      ],
      skills: ["A specific observation named instead of weird", "A cause connected"],
    },
    {
      question: "What do you think governments should do about climate change?",
      answer: "They should make better rules.",
      pushes: [
        "'Better rules' is vague. Name a specific kind of policy.",
        "Now explain why that particular policy would help.",
      ],
      skills: ["A specific named policy type", "A reasoned justification added"],
    },
    {
      question: "Do you think your generation cares more about the environment than older generations?",
      answer: "Yeah, probably, I think so.",
      pushes: [
        "Good instinct. Now commit to a clearer stance and support it with evidence.",
        "Now qualify it, is this true across the board, or does it vary?",
      ],
      skills: ["A clearer, evidence-supported stance", "A qualifying, nuanced clause added"],
    },
    {
      question: "What's the hardest part about making sustainable choices?",
      answer: "It's expensive sometimes.",
      pushes: [
        "That's one factor. Name another challenge, beyond just cost.",
        "Now connect the two challenges in one sentence.",
      ],
      skills: ["A second specific challenge named", "Two ideas combined into one sentence"],
    },
    {
      question: "Where do you hope environmental efforts will be in ten years?",
      answer: "I hope things get better.",
      pushes: [
        "'Things get better' is vague. Predict something specific.",
        "Now put it all together in one fluent, precise sentence.",
      ],
      skills: ["A specific, concrete hope instead of things get better", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me how you feel about climate change.", fromPrompt: 0 },
    { question: "What's one thing you do to help the environment?", fromPrompt: 1 },
    { question: "Do you think individuals can really make a difference on climate change?", fromPrompt: 2 },
  ],
};

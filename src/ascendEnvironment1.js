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
      leveledAnswer: "Honestly, it genuinely unsettles me, especially because I know the choices being made now will directly shape the kind of world I'll be living in as an adult.",
      pushes: [
        "'Worries me' is a start, but give us a more precise word for that feeling.",
        "Now add a reason connected to your own life, not just a general statement.",
      ],
      skills: ["A more precise emotional or attitude word", "A personal reasoning connection added"],
    },
    {
      question: "What's one thing you do to help the environment?",
      answer: "I try to recycle and stuff.",
      leveledAnswer: "I recycle, and I've also started cutting back on fast fashion, mainly because I realized how much waste the clothing industry actually produces.",
      pushes: [
        "'And stuff' is too vague and casual. Name another specific action.",
        "Now explain why you started doing this.",
      ],
      skills: ["A specific named action instead of and stuff", "A reason or motivation added"],
    },
    {
      question: "Do you think individuals can really make a difference on climate change?",
      answer: "Kind of, but it's mostly up to big companies.",
      leveledAnswer: "I'd say individual choices matter on a small scale, but the real dividing line is that a handful of major corporations are responsible for the vast majority of global emissions, so systemic change matters far more.",
      pushes: [
        "Good instinct. Now make that argument more precise, what's the actual dividing line?",
        "Now support it with a specific example or reason.",
      ],
      skills: ["A more precise distinction made (individual vs. systemic responsibility)", "A specific example or reason added"],
    },
    {
      question: "Describe a change you've noticed in the environment around you.",
      answer: "The weather's been weird lately.",
      leveledAnswer: "Summers here have gotten noticeably hotter and drier than they used to be, which I'd guess is connected to shifting global weather patterns.",
      pushes: [
        "'Weird' is vague. What specifically have you noticed?",
        "Now connect it to a possible cause.",
      ],
      skills: ["A specific observation named instead of weird", "A cause connected"],
    },
    {
      question: "What do you think governments should do about climate change?",
      answer: "They should make better rules.",
      leveledAnswer: "I think governments should introduce stricter emissions limits on heavy industry, because that would target the biggest polluters directly instead of just relying on individual consumer choices.",
      pushes: [
        "'Better rules' is vague. Name a specific kind of policy.",
        "Now explain why that particular policy would help.",
      ],
      skills: ["A specific named policy type", "A reasoned justification added"],
    },
    {
      question: "Do you think your generation cares more about the environment than older generations?",
      answer: "Yeah, probably, I think so.",
      leveledAnswer: "I do think my generation cares more, largely because we've grown up seeing the consequences firsthand, though that's not universally true, since plenty of older people are just as passionate about it.",
      pushes: [
        "Good instinct. Now commit to a clearer stance and support it with evidence.",
        "Now qualify it, is this true across the board, or does it vary?",
      ],
      skills: ["A clearer, evidence-supported stance", "A qualifying, nuanced clause added"],
    },
    {
      question: "What's the hardest part about making sustainable choices?",
      answer: "It's expensive sometimes.",
      leveledAnswer: "Sustainable choices are often expensive, and on top of that, they're just not always convenient or accessible depending on where you live.",
      pushes: [
        "That's one factor. Name another challenge, beyond just cost.",
        "Now connect the two challenges in one sentence.",
      ],
      skills: ["A second specific challenge named", "Two ideas combined into one sentence"],
    },
    {
      question: "Where do you hope environmental efforts will be in ten years?",
      answer: "I hope things get better.",
      leveledAnswer: "I hope renewable energy becomes the clear default rather than the exception, so that sustainability stops being a personal sacrifice and just becomes how things normally work.",
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

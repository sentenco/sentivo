// ASCEND, Life Online Track, Lesson 3: "Cancel Culture & Accountability Online"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-social-3",
  code: "L3",
  mechanic: "push",
  title: "Cancel Culture & Accountability Online",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "What's your honest opinion on 'cancel culture'?",
      answer: "It's kind of good and bad.",
      pushes: [
        "That's a hedge, not an opinion. Take a clearer position, even if it's nuanced.",
        "Now support it with one specific example or piece of reasoning.",
      ],
      skills: ["A clearer, more defined position taken", "A specific supporting example"],
    },
    {
      question: "Do you think public accountability online is usually fair?",
      answer: "Not always.",
      pushes: [
        "Give a specific case, real or hypothetical, that illustrates when it isn't fair.",
        "Now contrast it with a case where it is fair.",
      ],
      skills: ["A specific illustrative case", "A contrasting counter-case added"],
    },
    {
      question: "Is there a difference between holding someone accountable and 'canceling' them?",
      answer: "Yeah, I think so.",
      pushes: [
        "Define that distinction precisely, not just 'yeah'.",
        "Now use it to evaluate a real online controversy you've seen.",
      ],
      skills: ["A precise definition of the distinction", "The distinction applied to a real case"],
    },
    {
      question: "Do you think people should be able to change and be forgiven publicly?",
      answer: "I think so, yeah.",
      pushes: [
        "Qualify that, under what conditions should forgiveness happen?",
        "Now address what happens when the harm was serious.",
      ],
      skills: ["Specific conditions for forgiveness named", "A more serious-harm scenario addressed"],
    },
    {
      question: "How much does context matter when judging someone's online mistake?",
      answer: "A lot.",
      pushes: [
        "Name a specific contextual factor that should matter.",
        "Now explain why that factor changes the moral weight of the mistake.",
      ],
      skills: ["A specific contextual factor named", "A reasoned explanation of its weight"],
    },
    {
      question: "Do you think online mobs sometimes go too far?",
      answer: "Yes, definitely.",
      pushes: [
        "Give us a specific way it goes too far, harassment, doxxing, disproportionate consequences.",
        "Now hedge slightly, since not every case is like that.",
      ],
      skills: ["A specific excess named", "A hedged, non-absolute claim"],
    },
    {
      question: "What responsibility do platforms have in moderating this kind of pile-on?",
      answer: "A lot of responsibility.",
      pushes: [
        "Name one specific thing platforms could do differently.",
        "Now acknowledge a limitation or difficulty in doing that.",
      ],
      skills: ["A specific platform action proposed", "A limitation or difficulty acknowledged"],
    },
    {
      question: "Where do you land, overall, on how we should handle public online mistakes?",
      answer: "Somewhere in the middle.",
      pushes: [
        "Turn that into an actual, specific position, not just 'the middle'.",
        "Now summarize it in one precise sentence, as if concluding an argument.",
      ],
      skills: ["A specific, concrete final position", "A concise, well-formed concluding sentence"],
    },
  ],
  recall: [
    { question: "What's your honest opinion on 'cancel culture'?", fromPrompt: 0 },
    { question: "Is there a difference between holding someone accountable and 'canceling' them?", fromPrompt: 2 },
    { question: "Where do you land, overall, on how we should handle public online mistakes?", fromPrompt: 7 },
  ],
};

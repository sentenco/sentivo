// ASCEND, Our Changing Planet Track, Lesson 4: "Trade-offs in Sustainable Choices"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-environment-4",
  code: "L4",
  mechanic: "push",
  title: "Trade-offs in Sustainable Choices",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Is it always easy to make the sustainable choice in everyday life?",
      answer: "No, not really.",
      leveledAnswer: "Not really, like choosing reusable products over disposable ones, which is often noticeably more expensive upfront even though it saves money later.",
      pushes: [
        "Give a specific example where the sustainable option was harder or more costly.",
        "Now name exactly what made it harder, cost, time, convenience.",
      ],
      skills: ["A specific concrete example", "A precise named barrier"],
    },
    {
      question: "Do you think cost is the biggest barrier to sustainable choices?",
      answer: "Probably, yeah.",
      leveledAnswer: "Cost is probably the biggest barrier for most people, though convenience matters just as much for those who simply don't have easy access to sustainable options where they live.",
      pushes: [
        "Compare it to another barrier, is it really the biggest, or does it depend?",
        "Now qualify it, for whom is cost the biggest barrier, and for whom might it not be?",
      ],
      skills: ["A comparison to another barrier", "A qualification based on who's affected"],
    },
    {
      question: "Have you ever chosen convenience over sustainability, even knowing better?",
      answer: "Yeah, probably.",
      leveledAnswer: "Yeah, I've grabbed single-use plastic when I was in a rush, and honestly, in that moment I just wasn't thinking beyond getting through my day quickly.",
      pushes: [
        "Give a specific, honest example.",
        "Now explain what was going through your mind in that moment.",
      ],
      skills: ["A specific honest example", "An honest reflection on the reasoning"],
    },
    {
      question: "Should sustainable products be made cheaper, or should less sustainable ones be made more expensive?",
      answer: "Maybe both.",
      leveledAnswer: "I'd lean toward making sustainable products cheaper, since punishing consumers through higher prices unfairly hits lower-income people hardest, though that approach does mean governments would need to subsidize it somehow.",
      pushes: [
        "Take a clearer stance on which matters more.",
        "Now acknowledge a downside of the approach you favor.",
      ],
      skills: ["A clearer, more defined stance", "A downside of that approach acknowledged"],
    },
    {
      question: "Do you think people from different income levels experience this trade-off differently?",
      answer: "Yeah, definitely.",
      leveledAnswer: "Someone with more money can easily choose organic groceries or an electric car, whereas someone on a tighter budget often has no real choice but to pick whatever option is cheapest.",
      pushes: [
        "Give a specific example of how the experience differs.",
        "Now use 'whereas...' to draw the comparison directly.",
      ],
      skills: ["A specific illustrative example", "A whereas-comparison used"],
    },
    {
      question: "Is there a sustainable habit you've given up on because it was too difficult?",
      answer: "Maybe one thing.",
      leveledAnswer: "I stopped buying from a specific sustainable brand because it was just too expensive to keep up with, though I'd probably try again once I have more of my own income.",
      pushes: [
        "Tell us exactly what it was and why you stopped.",
        "Now tell us if you might try again, and under what conditions.",
      ],
      skills: ["A specific habit and reason given", "A conditional for trying again"],
    },
    {
      question: "What would make sustainable choices easier for people like you?",
      answer: "Cheaper options, maybe.",
      leveledAnswer: "Sustainable products would need to be priced closer to regular ones, and that really comes down to manufacturers and governments working together to make that shift financially realistic.",
      pushes: [
        "Name a specific, realistic change, not just 'cheaper options'.",
        "Now tell us who would need to make that change happen.",
      ],
      skills: ["A specific realistic solution", "A responsible party identified"],
    },
    {
      question: "Do you think most people are willing to accept some inconvenience for sustainability?",
      answer: "Some are, some aren't.",
      leveledAnswer: "How much someone already knows about the environmental impact of their choices tends to predict this, and honestly, I'd place myself as someone who's willing to accept inconvenience, but only up to a point.",
      pushes: [
        "Give a specific factor that predicts who is more willing.",
        "Now tell us where you'd place yourself on that spectrum, honestly.",
      ],
      skills: ["A specific predictive factor named", "An honest self-placement given"],
    },
  ],
  recall: [
    { question: "Is it always easy to make the sustainable choice in everyday life?", fromPrompt: 0 },
    { question: "Should sustainable products be made cheaper, or should less sustainable ones be made more expensive?", fromPrompt: 3 },
    { question: "What would make sustainable choices easier for people like you?", fromPrompt: 6 },
  ],
};

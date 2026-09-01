// ASCEND (Push mechanic), Negotiation & Contracts Track, Lesson 1: "Getting to an Agreement"
// B2 -> C1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-negotiation-1",
  code: "L1",
  mechanic: "push",
  title: "Getting to an Agreement",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a time you had to negotiate something.",
      answer: "I asked for a better deal and we agreed.",
      pushes: [
        "'Better deal' is vague. What exactly were you negotiating?",
        "Now tell us the strategy you used to get there.",
      ],
      skills: ["A specific detail about what was negotiated", "A named strategy or approach added"],
    },
    {
      question: "What makes someone a strong negotiator, in your view?",
      answer: "They're confident and know what they want.",
      pushes: [
        "'Confident' is a bit generic here. Name a more specific skill.",
        "Now connect two of these skills together in one sentence.",
      ],
      skills: ["A precise, professional skill named instead of just confident", "Two ideas combined into one sentence"],
    },
    {
      question: "Describe a time a negotiation didn't go the way you wanted.",
      answer: "It didn't work out and I was disappointed.",
      pushes: [
        "'Didn't work out' says nothing concrete. What actually happened?",
        "Now tell us what you learned or would do differently.",
      ],
      skills: ["A specific outcome or reason described", "A lesson-learned structure added"],
    },
    {
      question: "How important is compromise in a negotiation?",
      answer: "It's important, both sides need to be happy.",
      pushes: [
        "'Happy' is too casual for this context. Give us a more precise term.",
        "Now qualify that, is compromise always the right approach?",
      ],
      skills: ["A precise term instead of happy (satisfied / mutually beneficial)", "A qualifying/nuanced clause added (though not always...)"],
    },
    {
      question: "What should someone do before entering an important negotiation?",
      answer: "They should prepare and know the facts.",
      pushes: [
        "'Prepare' and 'know the facts' are vague. Name two specific things to prepare.",
        "Now connect them using a more sophisticated structure than just 'and'.",
      ],
      skills: ["Two specific preparation steps named", "A sophisticated connector replacing simple and (not only...but also / in addition to)"],
    },
    {
      question: "Do you think contracts should always be followed exactly as written?",
      answer: "Mostly yes, but sometimes things change.",
      pushes: [
        "Good instinct. Now commit to a clearer stance and support it.",
        "Now give a specific example of when circumstances might justify flexibility.",
      ],
      skills: ["A clearer, supported stance", "A specific example added"],
    },
    {
      question: "What's a common mistake people make when signing a contract?",
      answer: "They don't read it carefully.",
      pushes: [
        "That's a start, but too general. What specifically do people miss?",
        "Now add a consequence of that mistake.",
      ],
      skills: ["A specific detail commonly overlooked named", "A consequence added"],
    },
    {
      question: "How do you think negotiation skills will matter in your future career?",
      answer: "They'll probably be really useful.",
      pushes: [
        "'Really useful' says nothing concrete. Predict something specific.",
        "Now put it all together in one fluent, precise sentence.",
      ],
      skills: ["A specific, concrete prediction instead of really useful", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a time you had to negotiate something.", fromPrompt: 0 },
    { question: "What makes someone a strong negotiator, in your view?", fromPrompt: 1 },
    { question: "Describe a time a negotiation didn't go the way you wanted.", fromPrompt: 2 },
  ],
};

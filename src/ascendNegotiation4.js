// ASCEND, Getting to an Agreement Track, Lesson 4: "Negotiating Across Cultures"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-negotiation-4",
  code: "L4",
  mechanic: "push",
  title: "Negotiating Across Cultures",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Have you ever negotiated with someone from a very different cultural background?",
      answer: "Yeah, once or twice.",
      pushes: [
        "Give a specific example of that experience.",
        "Now tell us what felt different about it, compared to negotiating with someone more similar to you.",
      ],
      skills: ["A specific concrete example", "A clear point of contrast made"],
    },
    {
      question: "Did you notice any misunderstandings caused by cultural differences?",
      answer: "Maybe a little.",
      pushes: [
        "Give a specific example of a misunderstanding, even a small one.",
        "Now tell us how, or if, it got cleared up.",
      ],
      skills: ["A specific concrete example", "A resolution detail added"],
    },
    {
      question: "Do you think directness is valued the same way across different cultures in negotiation?",
      answer: "Probably not, no.",
      pushes: [
        "Give a specific example contrasting a more direct and a more indirect style.",
        "Now tell us which style you personally find easier to work with, and why.",
      ],
      skills: ["A specific contrasting example", "A personal preference with reasoning"],
    },
    {
      question: "How do you adjust your own approach when negotiating cross-culturally?",
      answer: "I try to be more careful.",
      pushes: [
        "Make that concrete, what specifically do you do differently?",
        "Now tell us how you learned to adjust that way.",
      ],
      skills: ["A specific concrete adjustment", "A source for that learning named"],
    },
    {
      question: "Is there a risk in assuming too much about someone based on their cultural background?",
      answer: "Yeah, definitely.",
      pushes: [
        "Give a specific example of that kind of assumption going wrong.",
        "Now propose a better way to approach it instead.",
      ],
      skills: ["A specific concrete example", "A concrete alternative approach proposed"],
    },
    {
      question: "What role does trust-building play differently across cultures, in your experience?",
      answer: "It can take longer in some cases.",
      pushes: [
        "Give a specific example of that longer trust-building process.",
        "Now tell us what you did to help build that trust faster or better.",
      ],
      skills: ["A specific concrete example", "A specific trust-building action described"],
    },
    {
      question: "Have you ever had to change your expectations mid-negotiation because of a cultural misread?",
      answer: "Maybe once.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what you'd do differently if you saw it coming next time.",
      ],
      skills: ["A specific concrete example", "A concrete future adjustment named"],
    },
    {
      question: "What's one piece of advice you'd give someone negotiating internationally for the first time?",
      answer: "Do your research beforehand.",
      pushes: [
        "Give a more specific example of what that research should actually cover.",
        "Now name one mistake you'd warn them specifically not to make.",
      ],
      skills: ["A specific research focus named", "A specific mistake named as a warning"],
    },
  ],
  recall: [
    { question: "Have you ever negotiated with someone from a very different cultural background?", fromPrompt: 0 },
    { question: "How do you adjust your own approach when negotiating cross-culturally?", fromPrompt: 3 },
    { question: "What's one piece of advice you'd give someone negotiating internationally for the first time?", fromPrompt: 7 },
  ],
};

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
      leveledAnswer: "Yeah, once or twice, I negotiated a supply contract with a partner in Japan, and what felt different was how much more emphasis was placed on building rapport before even discussing terms, compared to negotiating with someone from a similar background.",
      pushes: [
        "Give a specific example of that experience.",
        "Now tell us what felt different about it, compared to negotiating with someone more similar to you.",
      ],
      skills: ["A specific concrete example", "A clear point of contrast made"],
    },
    {
      question: "Did you notice any misunderstandings caused by cultural differences?",
      answer: "Maybe a little.",
      leveledAnswer: "Maybe a little, I interpreted a long silence as disagreement when it was actually a sign of careful consideration, and it got cleared up once I asked a direct clarifying question.",
      pushes: [
        "Give a specific example of a misunderstanding, even a small one.",
        "Now tell us how, or if, it got cleared up.",
      ],
      skills: ["A specific concrete example", "A resolution detail added"],
    },
    {
      question: "Do you think directness is valued the same way across different cultures in negotiation?",
      answer: "Probably not, no.",
      leveledAnswer: "Probably not, no, negotiators from Germany tend to state their position quite directly, while counterparts from many East Asian cultures favor a more indirect approach, and personally I find the more direct style easier to work with, mainly because it reduces ambiguity.",
      pushes: [
        "Give a specific example contrasting a more direct and a more indirect style.",
        "Now tell us which style you personally find easier to work with, and why.",
      ],
      skills: ["A specific contrasting example", "A personal preference with reasoning"],
    },
    {
      question: "How do you adjust your own approach when negotiating cross-culturally?",
      answer: "I try to be more careful.",
      leveledAnswer: "I make a deliberate effort to slow down and confirm understanding more frequently than I normally would, and I learned to adjust that way after a miscommunication early in my career nearly derailed a deal.",
      pushes: [
        "Make that concrete, what specifically do you do differently?",
        "Now tell us how you learned to adjust that way.",
      ],
      skills: ["A specific concrete adjustment", "A source for that learning named"],
    },
    {
      question: "Is there a risk in assuming too much about someone based on their cultural background?",
      answer: "Yeah, definitely.",
      leveledAnswer: "Yeah, definitely, I once assumed a colleague's reluctance to disagree openly meant full agreement, which turned out to be wrong, and a better approach is to actively invite feedback rather than assuming silence means consent.",
      pushes: [
        "Give a specific example of that kind of assumption going wrong.",
        "Now propose a better way to approach it instead.",
      ],
      skills: ["A specific concrete example", "A concrete alternative approach proposed"],
    },
    {
      question: "What role does trust-building play differently across cultures, in your experience?",
      answer: "It can take longer in some cases.",
      leveledAnswer: "In one negotiation with a partner in the Middle East, building genuine trust took several in-person meetings before any real terms were discussed, and what helped speed that up was consistently following through on small commitments early on.",
      pushes: [
        "Give a specific example of that longer trust-building process.",
        "Now tell us what you did to help build that trust faster or better.",
      ],
      skills: ["A specific concrete example", "A specific trust-building action described"],
    },
    {
      question: "Have you ever had to change your expectations mid-negotiation because of a cultural misread?",
      answer: "Maybe once.",
      leveledAnswer: "Maybe once, I pushed for a quick decision that the other side interpreted as disrespectful given their more deliberative process, and next time I'd build in extra time upfront rather than assuming the same pace applies everywhere.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what you'd do differently if you saw it coming next time.",
      ],
      skills: ["A specific concrete example", "A concrete future adjustment named"],
    },
    {
      question: "What's one piece of advice you'd give someone negotiating internationally for the first time?",
      answer: "Do your research beforehand.",
      leveledAnswer: "I'd tell them to specifically research local norms around hierarchy and decision-making, and I'd warn them against the mistake of assuming their own communication style is the neutral default.",
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

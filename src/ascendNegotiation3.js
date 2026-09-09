// ASCEND, Getting to an Agreement Track, Lesson 3: "When Negotiations Break Down"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-negotiation-3",
  code: "L3",
  mechanic: "push",
  title: "When Negotiations Break Down",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a negotiation you've seen or been part of that fell apart.",
      answer: "It just didn't work out.",
      leveledAnswer: "It was a partnership negotiation between two departments over shared budget allocation, and things really started to break down once neither side would concede on who'd control the final decision.",
      pushes: [
        "Tell us specifically what the negotiation was about.",
        "Now tell us the actual moment things started to break down.",
      ],
      skills: ["A specific concrete context given", "A specific breaking-point moment identified"],
    },
    {
      question: "What do you think was the main reason it collapsed?",
      answer: "People couldn't agree.",
      leveledAnswer: "They couldn't agree on the timeline for implementation, and beyond that, there was an underlying lack of trust that made even small disagreements feel much bigger than they actually were.",
      pushes: [
        "Go deeper. What specifically couldn't they agree on?",
        "Now name a factor beyond the disagreement itself, like trust or timing.",
      ],
      skills: ["A specific point of disagreement", "An additional underlying factor named"],
    },
    {
      question: "Could it have been prevented, in your view?",
      answer: "Maybe, yeah.",
      leveledAnswer: "Setting clearer expectations about decision-making authority before negotiations began might have prevented it, though given how entrenched both sides already were, it might not have actually changed the outcome.",
      pushes: [
        "Give a specific thing that could have been done differently.",
        "Now acknowledge a reason that might not have actually worked.",
      ],
      skills: ["A specific alternative action", "A realistic limitation acknowledged"],
    },
    {
      question: "How do you think each side felt when it fell apart?",
      answer: "Frustrated, probably.",
      leveledAnswer: "One side probably felt genuinely undermined, while the other felt more resigned, and that difference likely came down to who had more to lose if the deal fell through.",
      pushes: [
        "Give a more precise feeling word for each side.",
        "Now explain why their feelings might have actually differed.",
      ],
      skills: ["Precise feeling words for both sides", "A reasoned explanation for the difference"],
    },
    {
      question: "Is walking away sometimes the right move in a negotiation?",
      answer: "Yeah, sometimes.",
      leveledAnswer: "Walking away is the right call when the other side won't budge on something non-negotiable, like safety standards, but it would be a mistake to walk away over a relatively minor sticking point that could still be resolved.",
      pushes: [
        "Give a specific condition under which walking away is the right call.",
        "Now give a condition under which it would be a mistake.",
      ],
      skills: ["A specific justified condition", "A contrasting condition for staying"],
    },
    {
      question: "What usually happens after a negotiation breaks down, in your experience?",
      answer: "It just stays stuck, mostly.",
      leveledAnswer: "Most of the time it just stalls indefinitely, though I have seen it revived once a neutral third party stepped in to mediate and reframe the sticking points.",
      pushes: [
        "Give a specific example of what actually happens next.",
        "Now tell us if it's ever revived successfully, and how.",
      ],
      skills: ["A specific concrete follow-up scenario", "A revival scenario with a mechanism"],
    },
    {
      question: "Do you think there's a way to disagree without damaging the relationship long-term?",
      answer: "Probably, yeah.",
      leveledAnswer: "Focusing explicitly on the issue rather than the person tends to help preserve the relationship, though sometimes the relationship gets damaged regardless, especially if one side feels deliberately misled.",
      pushes: [
        "Name one specific approach that helps preserve the relationship.",
        "Now acknowledge a case where the relationship gets damaged anyway.",
      ],
      skills: ["A specific relationship-preserving approach", "A realistic limiting case acknowledged"],
    },
    {
      question: "What would you personally do differently if a future negotiation started heading that way?",
      answer: "Try to slow things down.",
      leveledAnswer: "I'd propose taking a scheduled break before responding to any heated point, and the warning sign that tells me it's time to do that is when the conversation starts repeating the same objections without progress.",
      pushes: [
        "Make that concrete, what specifically would slowing down involve?",
        "Now tell us what would tell you it's time to try that.",
      ],
      skills: ["A specific, concrete action described", "A specific warning sign identified"],
    },
  ],
  recall: [
    { question: "Tell me about a negotiation you've seen or been part of that fell apart.", fromPrompt: 0 },
    { question: "Is walking away sometimes the right move in a negotiation?", fromPrompt: 4 },
    { question: "What would you personally do differently if a future negotiation started heading that way?", fromPrompt: 7 },
  ],
};

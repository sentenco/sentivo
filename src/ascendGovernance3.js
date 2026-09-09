// ASCEND, Accountability & Risk Track, Lesson 3: "Regulation vs. Self-Governance"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-governance-3",
  code: "L3",
  mechanic: "push",
  title: "Regulation vs. Self-Governance",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think industries can be trusted to regulate themselves?",
      answer: "Not really, no.",
      leveledAnswer: "Not really, no, the financial industry's self-regulation clearly failed in the lead-up to the 2008 crisis, though I'd acknowledge the advertising industry's self-regulatory codes have actually worked reasonably well in curbing the most misleading practices.",
      pushes: [
        "Give a specific example that supports that view.",
        "Now acknowledge a case where self-regulation has actually worked well.",
      ],
      skills: ["A specific supporting example", "A genuine counterexample acknowledged"],
    },
    {
      question: "What's the strongest argument in favor of letting companies govern themselves?",
      answer: "They understand their own industry best.",
      leveledAnswer: "Industry insiders can spot emerging risks that outside regulators might miss entirely, though the counterargument is that that same insider knowledge often creates incentives to protect profits over the public interest.",
      pushes: [
        "Support that with a specific example.",
        "Now respond to it with a specific counterargument.",
      ],
      skills: ["A specific supporting example", "A direct counterargument given"],
    },
    {
      question: "Does external regulation always slow down progress or innovation?",
      answer: "Sometimes, maybe.",
      leveledAnswer: "Data localization requirements have genuinely slowed the rollout of certain cloud services in some markets, though environmental regulations have actually driven a lot of genuine innovation in renewable energy.",
      pushes: [
        "Give a specific example where regulation genuinely slowed things down.",
        "Now give an example where regulation actually enabled progress instead.",
      ],
      skills: ["A specific example of slowing", "A contrasting enabling example"],
    },
    {
      question: "How do you think a company should be held accountable when it breaks its own internal rules?",
      answer: "There should be consequences.",
      leveledAnswer: "A meaningful consequence might be mandatory external review of the department involved, and I think that should be enforced by an independent compliance officer rather than internal management.",
      pushes: [
        "Name a specific consequence you'd consider appropriate.",
        "Now tell us who should be responsible for enforcing it.",
      ],
      skills: ["A specific concrete consequence", "A responsible enforcing party identified"],
    },
    {
      question: "Have you seen a real case where self-regulation clearly failed?",
      answer: "Yeah, probably.",
      leveledAnswer: "Yeah, the tobacco industry's self-imposed advertising standards failed to prevent decades of misleading marketing, and stricter external oversight much earlier could plausibly have prevented a lot of that harm.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us what external oversight, if any, could have prevented it.",
      ],
      skills: ["A specific concrete example", "A specific preventive measure proposed"],
    },
    {
      question: "Do you think government regulators usually understand the industries they oversee well enough?",
      answer: "Not always, no.",
      leveledAnswer: "Not always, no, regulators often lack the specialized technical background needed to keep pace with fast-moving industries, and bringing in outside technical advisors on a rotating basis could help close that gap.",
      pushes: [
        "Give a specific reason for that gap in understanding.",
        "Now propose one way that gap could be reduced.",
      ],
      skills: ["A specific reason for the gap", "A concrete proposal to reduce it"],
    },
    {
      question: "What would a healthy middle ground between regulation and self-governance look like?",
      answer: "A mix of both.",
      leveledAnswer: "A healthy middle ground would have regulators set clear minimum standards while letting companies self-govern the specifics of implementation, though tension can arise when companies interpret those minimums as loosely as possible.",
      pushes: [
        "Make that concrete, describe specifically what each side would handle.",
        "Now acknowledge a tension that could arise between the two.",
      ],
      skills: ["A specific, concrete division described", "A genuine tension acknowledged"],
    },
    {
      question: "How much do you personally trust the companies you interact with to police themselves?",
      answer: "Not that much, honestly.",
      leveledAnswer: "Not that much, honestly, seeing how slowly some tech companies addressed known privacy issues shaped that view, and consistent, independently verified audits would need to become standard practice before that trust could really improve.",
      pushes: [
        "Give a specific example that shapes that view.",
        "Now tell us what would need to change for that trust to improve.",
      ],
      skills: ["A specific concrete example", "A concrete condition for improved trust"],
    },
  ],
  recall: [
    { question: "Do you think industries can be trusted to regulate themselves?", fromPrompt: 0 },
    { question: "Have you seen a real case where self-regulation clearly failed?", fromPrompt: 4 },
    { question: "What would a healthy middle ground between regulation and self-governance look like?", fromPrompt: 6 },
  ],
};

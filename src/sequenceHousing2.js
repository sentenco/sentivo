// SEQUENCE, Housing & Apartment Life Track, Lesson 2: "Signing a Lease"
// Callback to Lesson 1's second pattern (Core + Manner + Purpose), 3 fresh questions.

export default {
  id: "sequence-housing-2",
  code: "L2",
  situation: "Signing a Lease",
  patterns: [
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: true,
      fromSituation: "Apartment Hunting",
      questions: [
        { q: "How did you decide to sign that particular lease?", parts: [
          { label: "Core", text: "I decided" },
          { label: "Manner", text: "by comparing it to other offers" },
          { label: "Purpose", text: "to make sure it was the best deal" },
        ]},
        { q: "How did you review the lease before signing?", parts: [
          { label: "Core", text: "I reviewed it" },
          { label: "Manner", text: "by reading every section carefully" },
          { label: "Purpose", text: "to avoid any surprises later" },
        ]},
        { q: "How did the landlord explain the terms to you?", parts: [
          { label: "Core", text: "They explained it" },
          { label: "Manner", text: "by walking through each clause" },
          { label: "Purpose", text: "to make sure I understood everything" },
        ]},
      ],
    },
    {
      name: "Core + Reason + Condition",
      slots: ["Core", "Reason", "Condition"],
      isCallback: false,
      example: {
        q: "Why did you choose that specific apartment?",
        parts: [
          { label: "Core", text: "I chose it" },
          { label: "Reason", text: "because it was close to work" },
          { label: "Condition", text: "if the commute had been longer, I wouldn't have" },
        ],
      },
      questions: [
        { q: "Why did you negotiate part of the lease?", parts: [
          { label: "Core", text: "I negotiated it" },
          { label: "Reason", text: "because I noticed the price seemed high" },
          { label: "Condition", text: "if the landlord hadn't agreed to lower it" },
        ]},
        { q: "Why do you think it's important to ask about hidden fees?", parts: [
          { label: "Core", text: "I think it's important" },
          { label: "Reason", text: "because they can add up quickly" },
          { label: "Condition", text: "if you don't ask before signing" },
        ]},
        { q: "Why did you decide against a place you liked?", parts: [
          { label: "Core", text: "I decided against it" },
          { label: "Reason", text: "because the lease terms felt too strict" },
          { label: "Condition", text: "if there had been more flexibility" },
        ]},
      ],
    },
  ],
};

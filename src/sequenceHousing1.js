// SEQUENCE, Housing & Apartment Life Track, Lesson 1: "Apartment Hunting"
// First lesson -- no callback (nothing to recall yet). 2 brand-new patterns.

export default {
  id: "sequence-housing-1",
  code: "L1",
  situation: "Apartment Hunting",
  patterns: [
    {
      name: "Core + Time + Sequence + Reason",
      slots: ["Core", "Time", "Sequence", "Reason"],
      isCallback: false,
      example: {
        q: "Tell me about how you're looking for an apartment.",
        parts: [
          { label: "Core", text: "I check new listings" },
          { label: "Time", text: "every morning" },
          { label: "Sequence", text: "before they get taken by someone else" },
          { label: "Reason", text: "because good places go fast in this market" },
        ],
      },
      questions: [
        { q: "When did you start looking for a new place?", parts: [
          { label: "Core", text: "I started looking" },
          { label: "Time", text: "a couple months ago" },
          { label: "Sequence", text: "before my current lease was up" },
          { label: "Reason", text: "because I wanted enough time to find the right one" },
        ]},
        { q: "When do you usually schedule apartment tours?", parts: [
          { label: "Core", text: "I schedule them" },
          { label: "Time", text: "on weekends" },
          { label: "Sequence", text: "before comparing them with other places" },
          { label: "Reason", text: "because that's when I'm free" },
        ]},
        { q: "When do you plan to make a final decision?", parts: [
          { label: "Core", text: "I plan to decide" },
          { label: "Time", text: "by the end of the month" },
          { label: "Sequence", text: "before my current lease ends" },
          { label: "Reason", text: "because I don't want to be rushed" },
        ]},
      ],
    },
    {
      name: "Core + Manner + Purpose",
      slots: ["Core", "Manner", "Purpose"],
      isCallback: false,
      example: {
        q: "How do you narrow down apartment options?",
        parts: [
          { label: "Core", text: "I narrow them down" },
          { label: "Manner", text: "by comparing price and location" },
          { label: "Purpose", text: "to fit my actual budget and needs" },
        ],
      },
      questions: [
        { q: "How do you research a neighborhood before moving there?", parts: [
          { label: "Core", text: "I research it" },
          { label: "Manner", text: "by looking up reviews and crime rates" },
          { label: "Purpose", text: "to make sure it's a good fit" },
        ]},
        { q: "How do you decide if an apartment is worth the price?", parts: [
          { label: "Core", text: "I decide" },
          { label: "Manner", text: "by comparing it to similar listings nearby" },
          { label: "Purpose", text: "to avoid overpaying" },
        ]},
        { q: "How do you prepare questions before a tour?", parts: [
          { label: "Core", text: "I prepare them" },
          { label: "Manner", text: "by writing a list beforehand" },
          { label: "Purpose", text: "to make sure I don't forget anything important" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Housing & Apartment Life Track, Lesson 8: "Talking About Future Housing Plans"
// Callback to Lesson 7's second pattern (Core + Manner + Condition), 3 fresh questions.

export default {
  id: "sequence-housing-8",
  code: "L8",
  situation: "Talking About Future Housing Plans",
  patterns: [
    {
      name: "Core + Manner + Condition",
      slots: ["Core", "Manner", "Condition"],
      isCallback: true,
      fromSituation: "Talking About a Noise Complaint",
      questions: [
        { q: "How are you planning your next move?", parts: [
          { label: "Core", text: "I'm planning it" },
          { label: "Manner", text: "by saving up for a bigger deposit" },
          { label: "Condition", text: "if my lease ends around the right time" },
        ]},
        { q: "How do you plan to choose your next place?", parts: [
          { label: "Core", text: "I plan to choose it" },
          { label: "Manner", text: "by prioritizing a quieter building this time" },
          { label: "Condition", text: "if I learned anything from this experience" },
        ]},
        { q: "How are you preparing financially for a future move?", parts: [
          { label: "Core", text: "I'm preparing" },
          { label: "Manner", text: "by setting aside money each month" },
          { label: "Condition", text: "if I want to avoid financial stress later" },
        ]},
      ],
    },
    {
      name: "Core + Sequence + Purpose",
      slots: ["Core", "Sequence", "Purpose"],
      isCallback: false,
      example: {
        q: "What are your housing plans for the future?",
        parts: [
          { label: "Core", text: "I want to buy my own place" },
          { label: "Sequence", text: "before renting stops making financial sense" },
          { label: "Purpose", text: "to finally build some equity" },
        ],
      },
      questions: [
        { q: "What's a housing goal you're working toward?", parts: [
          { label: "Core", text: "I'm saving for a down payment" },
          { label: "Sequence", text: "before interest rates go up again" },
          { label: "Purpose", text: "to make homeownership more affordable" },
        ]},
        { q: "What are you doing to prepare for your next lease?", parts: [
          { label: "Core", text: "I'm researching new neighborhoods" },
          { label: "Sequence", text: "before my current lease is up" },
          { label: "Purpose", text: "to find somewhere that fits me better" },
        ]},
        { q: "What's something you want in your next place?", parts: [
          { label: "Core", text: "I want a place with more space" },
          { label: "Sequence", text: "before I need to think about a roommate again" },
          { label: "Purpose", text: "to finally have some real privacy" },
        ]},
      ],
    },
  ],
};

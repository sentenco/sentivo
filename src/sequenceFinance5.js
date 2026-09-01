// SEQUENCE, Finance & Banking Track, Lesson 5: "Talking About a Credit Card"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-finance-5",
  code: "L5",
  situation: "Talking About a Credit Card",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About Saving for a Goal",
      questions: [
        { q: "Where do you usually use your credit card the most?", parts: [
          { label: "Core", text: "I use it the most" },
          { label: "Place", text: "for groceries and gas" },
          { label: "Detail", text: "specifically to earn cashback on those purchases" },
        ]},
        { q: "Where did you first learn how credit cards work?", parts: [
          { label: "Core", text: "I first learned" },
          { label: "Place", text: "in a personal finance class" },
          { label: "Detail", text: "specifically before I got my first card" },
        ]},
        { q: "Where do you keep track of your credit card spending?", parts: [
          { label: "Core", text: "I keep track of it" },
          { label: "Place", text: "in the card's own app" },
          { label: "Detail", text: "specifically checking it every few days" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why did you decide to get a credit card?",
        parts: [
          { label: "Core", text: "I decided to get one" },
          { label: "Purpose", text: "to build my credit history" },
          { label: "Reason", text: "because it matters for things like renting or loans later" },
        ],
      },
      questions: [
        { q: "Why do you pay off your credit card in full every month?", parts: [
          { label: "Core", text: "I pay it off in full" },
          { label: "Purpose", text: "to avoid interest charges" },
          { label: "Reason", text: "because they can add up quickly" },
        ]},
        { q: "Why did you choose that specific credit card?", parts: [
          { label: "Core", text: "I chose it" },
          { label: "Purpose", text: "to earn rewards on things I already buy" },
          { label: "Reason", text: "because it fit my spending habits best" },
        ]},
        { q: "Why is it important to monitor your credit score?", parts: [
          { label: "Core", text: "It's important" },
          { label: "Purpose", text: "to catch any errors or fraud early" },
          { label: "Reason", text: "because your score affects a lot of financial decisions" },
        ]},
      ],
    },
  ],
};

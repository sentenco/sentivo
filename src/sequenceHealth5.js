// SEQUENCE, Health & Wellness Track, Lesson 5: "Talking About Diet and Nutrition"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-health-5",
  code: "L5",
  situation: "Talking About Diet and Nutrition",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About Sleep",
      questions: [
        { q: "Where do you usually get your groceries for healthy meals?", parts: [
          { label: "Core", text: "I get them" },
          { label: "Place", text: "at a market near my house" },
          { label: "Detail", text: "specifically because they have fresh produce" },
        ]},
        { q: "Where did you learn to cook healthier meals?", parts: [
          { label: "Core", text: "I learned" },
          { label: "Place", text: "from watching videos online" },
          { label: "Detail", text: "specifically simple recipes anyone can follow" },
        ]},
        { q: "Where do you usually slip up on your diet?", parts: [
          { label: "Core", text: "I slip up" },
          { label: "Place", text: "at work, around the snack table" },
          { label: "Detail", text: "specifically when I'm stressed or bored" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why did you decide to change your diet?",
        parts: [
          { label: "Core", text: "I decided to change it" },
          { label: "Purpose", text: "to have more energy during the day" },
          { label: "Reason", text: "because I was feeling sluggish all the time" },
        ],
      },
      questions: [
        { q: "Why do you try to cook at home more often?", parts: [
          { label: "Core", text: "I try to cook more" },
          { label: "Purpose", text: "to control what actually goes into my meals" },
          { label: "Reason", text: "because eating out adds up quickly" },
        ]},
        { q: "Why did you cut back on a certain food or drink?", parts: [
          { label: "Core", text: "I cut back on it" },
          { label: "Purpose", text: "to feel better overall" },
          { label: "Reason", text: "because it was affecting my sleep and mood" },
        ]},
        { q: "Why is meal planning helpful for you?", parts: [
          { label: "Core", text: "It's helpful" },
          { label: "Purpose", text: "to avoid last-minute unhealthy choices" },
          { label: "Reason", text: "because I don't have time to decide every night" },
        ]},
      ],
    },
  ],
};

// SEQUENCE, Housing & Apartment Life Track, Lesson 5: "Talking About Neighbors"
// Callback to Lesson 4's second pattern (Core + Place + Detail), 3 fresh questions.

export default {
  id: "sequence-housing-5",
  code: "L5",
  situation: "Talking About Neighbors",
  patterns: [
    {
      name: "Core + Place + Detail",
      slots: ["Core", "Place", "Detail"],
      isCallback: true,
      fromSituation: "Talking About a Maintenance Issue",
      questions: [
        { q: "Where did you first meet your neighbors?", parts: [
          { label: "Core", text: "I first met them" },
          { label: "Place", text: "in the hallway" },
          { label: "Detail", text: "specifically while moving boxes in" },
        ]},
        { q: "Where do you and your neighbors usually chat?", parts: [
          { label: "Core", text: "We usually chat" },
          { label: "Place", text: "by the mailboxes" },
          { label: "Detail", text: "specifically when we're both checking mail" },
        ]},
        { q: "Where does most noise from neighbors come from?", parts: [
          { label: "Core", text: "It comes from" },
          { label: "Place", text: "the apartment above mine" },
          { label: "Detail", text: "specifically late at night sometimes" },
        ]},
      ],
    },
    {
      name: "Core + Purpose + Reason",
      slots: ["Core", "Purpose", "Reason"],
      isCallback: false,
      example: {
        q: "Why do you try to keep a good relationship with your neighbors?",
        parts: [
          { label: "Core", text: "I try to keep it good" },
          { label: "Purpose", text: "to make apartment living more pleasant" },
          { label: "Reason", text: "because we share close walls and spaces" },
        ],
      },
      questions: [
        { q: "Why did you introduce yourself to your new neighbor?", parts: [
          { label: "Core", text: "I introduced myself" },
          { label: "Purpose", text: "to start things off on a friendly note" },
          { label: "Reason", text: "because we'll be living close for a while" },
        ]},
        { q: "Why do you sometimes avoid confronting a noisy neighbor?", parts: [
          { label: "Core", text: "I sometimes avoid it" },
          { label: "Purpose", text: "to keep things comfortable between us" },
          { label: "Reason", text: "because I don't want unnecessary tension" },
        ]},
        { q: "Why did you decide to finally talk to your neighbor about the noise?", parts: [
          { label: "Core", text: "I decided to talk to them" },
          { label: "Purpose", text: "to solve it directly" },
          { label: "Reason", text: "because it had been happening for weeks" },
        ]},
      ],
    },
  ],
};

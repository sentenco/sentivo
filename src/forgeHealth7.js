// FORGE, Health Track, Lesson 7: "Explaining a Health Emergency"

export default {
  id: "forge-health-7",
  code: "L7",
  category: "Health",
  situation: "Explaining a Health Emergency",
  hasCallback: true,
  callback: {
    fromSituation: "Health Insurance & Billing Questions",
    words: ["coverage", "claim", "copay"],
  },
  words: [
    { word: "collapse", meaning: "to suddenly fall down", example: "He collapsed in the hallway and someone called for help.", question: "Have you ever seen someone collapse? What happened?" },
    { word: "faint", meaning: "to briefly lose consciousness", example: "She felt like she might faint from the heat.", question: "Have you ever felt like you might faint?" },
    { word: "bleeding", meaning: "losing blood from an injury", example: "His arm was bleeding after the fall.", question: "Tell me about a time you or someone else was bleeding badly." },
    { word: "unconscious", meaning: "not awake and not aware", example: "He was unconscious for a few seconds after hitting his head.", question: "Have you ever seen someone become unconscious?" },
    { word: "emergency", meaning: "a serious situation needing immediate help", example: "It was a medical emergency, so we called for help right away.", question: "Tell me about a health emergency you experienced or witnessed." },
    { word: "ambulance", meaning: "a vehicle that takes sick people to the hospital", example: "An ambulance arrived within a few minutes.", question: "Have you ever called or ridden in an ambulance?" },
  ],
  storytellingPrompt: "Tell me about a health emergency you saw or heard about.",
};

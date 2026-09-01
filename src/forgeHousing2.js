// FORGE, Housing & Apartment Life Track, Lesson 2: "Signing a Lease"

export default {
  id: "forge-housing-2",
  code: "L2",
  category: "Housing & Apartment Life",
  situation: "Signing a Lease",
  hasCallback: true,
  callback: {
    fromSituation: "Apartment Hunting",
    words: ["tour", "amenities", "deposit"],
  },
  words: [
    { word: "lease", meaning: "a legal agreement to rent a property", example: "I signed a one-year lease.", question: "Have you signed a lease before? For how long?" },
    { word: "landlord", meaning: "a person who owns a property and rents it out", example: "My landlord is easy to reach when there's a problem.", question: "What's your landlord like, or what would you want in one?" },
    { word: "terms", meaning: "the rules and conditions of an agreement", example: "I read all the terms before signing.", question: "Do you always read the terms carefully before signing something?" },
    { word: "utilities", meaning: "services like water, electricity, and gas", example: "Utilities aren't included in my rent.", question: "Are utilities included in your rent, or separate?" },
    { word: "security deposit", meaning: "money held by a landlord in case of damage, returned later", example: "I got my security deposit back when I moved out.", question: "Have you ever gotten your security deposit back?" },
    { word: "renew", meaning: "to extend an agreement for another period of time", example: "I decided to renew my lease for another year.", question: "Have you ever renewed a lease? Would you renew your current one?" },
  ],
  storytellingPrompt: "Tell me about signing a lease, or what you'd look for in one.",
};

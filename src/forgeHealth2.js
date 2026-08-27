// FORGE, Health Track, Lesson 2: "Booking or Rescheduling an Appointment"

export default {
  id: "forge-health-2",
  code: "L2",
  category: "Health",
  situation: "Booking or Rescheduling an Appointment",
  hasCallback: true,
  callback: {
    fromSituation: "Describing Symptoms to a Doctor",
    words: ["dizzy", "sore", "exhausted"],
  },
  words: [
    { word: "available", meaning: "free to attend at a certain time", example: "I'm available every day after 5 p.m.", question: "Are you usually available in the morning or the evening?" },
    { word: "reschedule", meaning: "to change the date or time of something planned", example: "We had to reschedule the meeting to Friday.", question: "Have you ever had to reschedule an important appointment?" },
    { word: "confirm", meaning: "to say yes, this is definitely happening", example: "Can you confirm your appointment for tomorrow?", question: "Tell me about a time you had to confirm a booking." },
    { word: "cancel", meaning: "to say something planned will not happen", example: "She had to cancel her trip at the last minute.", question: "Have you ever had to cancel plans last minute? Why?" },
    { word: "urgent", meaning: "needing attention right away", example: "This is urgent, please call me back today.", question: "Tell me about something urgent that happened recently." },
    { word: "follow-up", meaning: "a later appointment to check progress", example: "The doctor scheduled a follow-up in two weeks.", question: "Do you usually need a follow-up after seeing a doctor?" },
  ],
  storytellingPrompt: "Tell me about a time you had to call and book or change an appointment.",
};

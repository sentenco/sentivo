// Modals -- Lesson 2: Permission and Requests

export default {
  number: 2,
  code: "2",
  title: "Permission and Requests",
  modals: ["can", "could", "may", "would"],
  leadIn: "How do you usually ask your teacher for permission to leave the room?",
  teach: [
    {
      name: "Asking Permission",
      definition: "Can, could, and may all ask if something is allowed — could and may sound more polite or formal than can.",
      examples: ["Can I open the window?", "Could I leave five minutes early?", "May I ask a question?"],
    },
    {
      name: "Making Polite Requests",
      definition: "Could you...? and Would you...? ask someone else to do something for you, more politely than a direct command.",
      examples: ["Could you pass the salt?", "Would you close the door, please?", "Could you help me with this bag?"],
    },
  ],
  compareLeftLabel: "Can — casual",
  compareRightLabel: "May — more formal",
  compareNote: "Can works fine with friends and family. May sounds more polished — better for a teacher, a stranger, or a formal setting.",
  comparePairs: [
    { left: "Can I grab a snack?", right: "May I be excused from the table?" },
    { left: "Can I sit here?", right: "May I take a seat?" },
  ],
  guided: [
    { prompt: "___ I use your phone for a second? (casual permission)", answer: "Can" },
    { prompt: "___ you please turn down the music? (polite request)", answer: "Could" },
    { prompt: "___ I ask you a question, sir? (formal permission)", answer: "May" },
  ],
  practice: [
    "Ask permission to borrow something, using can.",
    "Make a polite request using could you or would you.",
    "Ask permission formally, using may, as if speaking to your boss.",
  ],
  wrapup: "Can, could, and may all ask permission — could and may just sound more polite. Could you and would you turn a command into a request.",
  nextHint: "Possibility and probability, where may, might, could, and must show how sure you are about something.",
};

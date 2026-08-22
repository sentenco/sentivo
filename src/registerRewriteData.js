// Writing category, Register Rewrite activity: 2 scenarios per
// audience/level combo. Shape: { title, focus, direction, context,
// original, helpfulPhrases: [3-4], prompt, sample }
// "direction" is "toFormal" or "toCasual" -- alternated across items so
// students practice register-shifting both ways, not just formalizing.
const REGISTER_REWRITE_SETS = {
  "teens-beginner": [
    {
      title: "Text to a Teacher",
      focus: "Formal greetings, polite requests",
      direction: "toFormal",
      context: "You're texting your teacher, not a friend.",
      original: "hey i forgot my homework at home lol can i bring it tmrw",
      helpfulPhrases: ["Dear Mr./Ms. ___", "I apologize for", "Would it be possible to"],
      prompt: "Rewrite this message formally for your teacher.",
      sample: "Dear Ms. Reyes, I apologize, but I forgot my homework at home today. Would it be possible to bring it tomorrow instead? Thank you for understanding.",
    },
    {
      title: "Party Invite",
      focus: "Casual greetings, contractions",
      direction: "toCasual",
      context: "You're inviting your best friend, not a stranger.",
      original: "You are cordially invited to attend a gathering at my residence this Saturday at 3:00 PM. Your presence would be appreciated.",
      helpfulPhrases: ["Hey!", "come over", "It'll be fun"],
      prompt: "Rewrite this invitation casually for your friend.",
      sample: "Hey! Come over to my place this Saturday at 3! It'll be so fun, hope you can make it!",
    },
  ],
  "teens-intermediate": [
    {
      title: "School Absence Note",
      focus: "Formal tone, no slang or abbreviations",
      direction: "toFormal",
      context: "This note goes to the school office.",
      original: "hey so i wasnt at school yesterday bc i was sick, sorry about that, can u mark me present today tho",
      helpfulPhrases: ["I was absent on", "due to illness", "I would appreciate it if"],
      prompt: "Rewrite this note formally for the school office.",
      sample: "Dear School Office, I was absent yesterday due to illness. I apologize for the inconvenience and would appreciate it if my attendance today could be marked as present.",
    },
    {
      title: "Chatting with a Friend",
      focus: "Casual contractions, relaxed tone",
      direction: "toCasual",
      context: "You're texting your close friend, not writing an essay.",
      original: "I am writing to inform you that I will be unable to attend our planned meeting this afternoon due to a prior commitment.",
      helpfulPhrases: ["hey", "can't make it", "sorry!"],
      prompt: "Rewrite this message casually for your friend.",
      sample: "hey sorry, i can't make it this afternoon, something came up! can we hang out another day?",
    },
  ],
  "adults-beginner": [
    {
      title: "Message to Your Boss",
      focus: "Formal workplace tone, polite phrasing",
      direction: "toFormal",
      context: "You're messaging your manager, not a coworker friend.",
      original: "hey boss the printer is broken again lol someone needs to fix it asap",
      helpfulPhrases: ["I wanted to let you know", "at your earliest convenience", "Thank you for your attention"],
      prompt: "Rewrite this message formally for your boss.",
      sample: "Good morning, I wanted to let you know that the printer is broken again. Could someone please look into it at your earliest convenience? Thank you for your attention to this.",
    },
    {
      title: "Text to a Friend",
      focus: "Casual, relaxed everyday tone",
      direction: "toCasual",
      context: "You're texting a close friend, not a stranger.",
      original: "Good afternoon. I am writing to ask whether you would be available to meet for coffee sometime this week.",
      helpfulPhrases: ["hey", "wanna", "free this week?"],
      prompt: "Rewrite this message casually for your friend.",
      sample: "hey! wanna grab coffee sometime this week? let me know when you're free!",
    },
  ],
  "adults-intermediate": [
    {
      title: "Complaint Email",
      focus: "Formal complaint structure, no informal venting",
      direction: "toFormal",
      context: "This becomes a formal complaint email to a company.",
      original: "this is honestly ridiculous, my order is a week late and nobody has told me anything, i want this fixed now",
      helpfulPhrases: ["I am writing to express", "I would appreciate an update", "I trust this will be resolved"],
      prompt: "Rewrite this as a formal complaint email.",
      sample: "I am writing to express my concern regarding my order, which is now a week overdue with no update provided. I would appreciate an explanation and a revised delivery date. I trust this matter will be resolved promptly.",
    },
    {
      title: "Catching Up with an Old Friend",
      focus: "Warm, casual, conversational tone",
      direction: "toCasual",
      context: "You're emailing an old friend, not a business contact.",
      original: "Dear Michael, I hope this message finds you well. I am writing to inquire about your current circumstances and to propose that we arrange a meeting at your earliest convenience.",
      helpfulPhrases: ["hey stranger", "how've you been", "let's catch up"],
      prompt: "Rewrite this message casually for an old friend.",
      sample: "Hey stranger! It's been way too long, how've you been? We should really catch up sometime soon, are you free this week?",
    },
  ],
};

export default REGISTER_REWRITE_SETS;

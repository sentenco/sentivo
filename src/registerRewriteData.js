// Writing category, Register Rewrite activity: 10 items per CEFR level
// group (A1-A2 / B1-B2 / C1-C2), 30 total. Shape per item:
// { key, title, cefrGroup, focus, direction, context, original,
// helpfulPhrases: [3-4], prompt, sample }
// "direction" is "toFormal" or "toCasual" -- alternated across items so
// students practice register-shifting both ways, not just formalizing.
// An item can carry "rounds" instead of a single original/helpfulPhrases/
// sample -- several messages to rewrite in the same scenario, one after
// another. "Text to a Teacher" is the pilot for this (4 rounds); every
// other topic is still the single-message shape for now.

const A1A2 = [
  {
    key: "textToATeacher",
    title: "Text to a Teacher",
    focus: "Formal greetings, polite requests",
    direction: "toFormal",
    context: "You're texting your teacher, not a friend.",
    prompt: "Rewrite each message formally for your teacher.",
    rounds: [
      {
        original: "hey i forgot my homework at home lol can i bring it tmrw",
        helpfulPhrases: ["Dear Mr./Ms. ___", "I apologize for", "Would it be possible to"],
        sample: "Dear Ms. Reyes, I apologize, but I forgot my homework at home today. Would it be possible to bring it tomorrow instead? Thank you for understanding.",
      },
      {
        original: "can u give me more time for the essay im not done yet",
        helpfulPhrases: ["I am writing to ask", "additional time", "Thank you for your understanding"],
        sample: "Dear Mr./Ms. ___, I am writing to ask if I could have some additional time to complete the essay, as I have not yet finished it. Thank you for your understanding.",
      },
      {
        original: "i missed the quiz yesterday can i retake it",
        helpfulPhrases: ["I was unable to", "Would it be possible to", "Thank you for considering"],
        sample: "Dear Mr./Ms. ___, I was unable to take the quiz yesterday. Would it be possible to arrange a time to retake it? Thank you for considering my request.",
      },
      {
        original: "i dont get the homework can u explain it again",
        helpfulPhrases: ["I did not fully understand", "Would you be able to", "I would greatly appreciate"],
        sample: "Dear Mr./Ms. ___, I did not fully understand the homework assignment. Would you be able to explain it again? I would greatly appreciate your help.",
      },
    ],
  },
  {
    key: "partyInvite",
    title: "Party Invite",
    focus: "Casual greetings, contractions",
    direction: "toCasual",
    context: "You're inviting your best friend, not a stranger.",
    prompt: "Rewrite this invitation casually for your friend.",
    rounds: [
      {
        original: "You are cordially invited to attend a gathering at my residence this Saturday at 3:00 PM. Your presence would be appreciated.",
        helpfulPhrases: ["Hey!", "come over", "It'll be fun"],
        sample: "Hey! Come over to my place this Saturday at 3! It'll be so fun, hope you can make it!",
      },
      {
        original: "I would be delighted if you could join me for a small celebration at my home this Friday evening.",
        helpfulPhrases: ["Hey, wanna come over", "Friday night", "It'll be so fun"],
        sample: "Hey, wanna come over Friday night? It'll be so fun!",
      },
      {
        original: "Please be advised that refreshments will be provided at the gathering, commencing at four o'clock.",
        helpfulPhrases: ["gonna be", "starts at", "come whenever"],
        sample: "There's gonna be snacks! Starts at 4, come whenever!",
      },
      {
        original: "Kindly RSVP at your earliest convenience so that I may finalize the arrangements.",
        helpfulPhrases: ["let me know", "can make it", "so I can"],
        sample: "Let me know if you can make it so I can plan everything!",
      },
    ],
  },
  {
    key: "messageToMom",
    title: "Message to Mom",
    focus: "Casual family tone, contractions",
    direction: "toCasual",
    context: "You're texting your mom, not writing a formal note.",
    prompt: "Rewrite this message casually for your mom.",
    rounds: [
      {
        original: "I would like to inform you that I will be returning home later than usual this evening due to a school activity.",
        helpfulPhrases: ["Hey Mom", "gonna be late", "no worries"],
        sample: "Hey Mom, I'm gonna be late tonight, we have a school activity. No worries though, I'll text you when I'm on my way!",
      },
      {
        original: "I am writing to notify you that I will require additional funds for a school field trip next week.",
        helpfulPhrases: ["Hey Mom", "need a bit more", "can you help"],
        sample: "Hey Mom, I need a bit more money for the field trip next week, can you help me out?",
      },
      {
        original: "Please be informed that I have completed all of my assigned household chores for this evening.",
        helpfulPhrases: ["Hey Mom", "finished", "can I"],
        sample: "Hey Mom, I finished all my chores! Can I go play now?",
      },
      {
        original: "I wish to express that I am feeling unwell and would prefer to remain at home rather than attend school today.",
        helpfulPhrases: ["Hey Mom", "don't feel good", "can I stay home"],
        sample: "Hey Mom, I don't feel good, can I stay home today?",
      },
    ],
  },
  {
    key: "noteToAClassmate",
    title: "Note to a Classmate",
    focus: "Casual, friendly tone",
    direction: "toCasual",
    context: "You're passing a note to a classmate, not writing to a teacher.",
    prompt: "Rewrite this note casually for your classmate.",
    rounds: [
      {
        original: "Excuse me, would you be so kind as to lend me a pencil? I appear to have forgotten mine today.",
        helpfulPhrases: ["hey", "can i borrow", "forgot mine"],
        sample: "hey, can i borrow a pencil? i forgot mine at home lol",
      },
      {
        original: "Might I trouble you for a sheet of paper, as I have exhausted my own supply?",
        helpfulPhrases: ["hey", "got any", "i'm all out"],
        sample: "hey, got any extra paper? i'm all out lol",
      },
      {
        original: "Would you be willing to share your notes from yesterday's lesson, as I was unable to attend?",
        helpfulPhrases: ["hey", "can i see", "i missed"],
        sample: "hey, can i see your notes from yesterday? i missed class",
      },
      {
        original: "I would be most grateful if you could assist me with this math problem.",
        helpfulPhrases: ["hey", "can you help", "i'm stuck"],
        sample: "hey, can you help me with this problem? i'm stuck",
      },
    ],
  },
  {
    key: "thankYouNote",
    title: "Thank You Note",
    focus: "Formal gratitude, polite phrasing",
    direction: "toFormal",
    context: "This note is going to your grandparents, not a friend.",
    prompt: "Rewrite this note formally for your grandparents.",
    rounds: [
      {
        original: "thx so much for the gift!! it was awesome, love u",
        helpfulPhrases: ["Thank you very much for", "I really appreciate", "With love"],
        sample: "Thank you very much for the wonderful gift! I really appreciate your kindness and thoughtfulness. With love, always thinking of you.",
      },
      {
        original: "thx for coming to my bday party, it meant a lot!!",
        helpfulPhrases: ["Thank you so much for", "It meant a great deal", "that you were there"],
        sample: "Thank you so much for coming to my birthday party. It meant a great deal to me that you were there.",
      },
      {
        original: "ty for helping me study, i totally passed bc of u",
        helpfulPhrases: ["Thank you for", "I truly could not have", "without your support"],
        sample: "Thank you for helping me study. I truly could not have passed without your support.",
      },
      {
        original: "thanks for the ride home, u saved me!!",
        helpfulPhrases: ["Thank you very much for", "I sincerely appreciate", "your kindness"],
        sample: "Thank you very much for driving me home. I sincerely appreciate your kindness.",
      },
    ],
  },
  {
    key: "askingToBorrowAPencil",
    title: "Asking to Borrow a Pencil",
    focus: "Formal classroom requests",
    direction: "toFormal",
    context: "You're asking your teacher, not a classmate.",
    prompt: "Rewrite this request formally for your teacher.",
    rounds: [
      {
        original: "hey can i get a pencil, i dont have one",
        helpfulPhrases: ["Excuse me", "Would it be possible to", "Thank you"],
        sample: "Excuse me, would it be possible to borrow a pencil? I don't have one with me today. Thank you.",
      },
      {
        original: "can i get some paper i ran out",
        helpfulPhrases: ["Excuse me", "would it be possible to", "Thank you"],
        sample: "Excuse me, would it be possible to have a sheet of paper? I have run out. Thank you.",
      },
      {
        original: "can u give me the worksheet again i lost mine",
        helpfulPhrases: ["Excuse me", "could I please have", "Thank you"],
        sample: "Excuse me, could I please have another copy of the worksheet? I have misplaced mine. Thank you.",
      },
      {
        original: "can i sit in front i cant see the board",
        helpfulPhrases: ["Excuse me", "would it be possible to", "Thank you"],
        sample: "Excuse me, would it be possible to sit closer to the front? I am having trouble seeing the board. Thank you.",
      },
    ],
  },
  {
    key: "invitingAFriendOver",
    title: "Inviting a Friend Over",
    focus: "Casual invitations, contractions",
    direction: "toCasual",
    context: "You're inviting a close friend, not writing a formal card.",
    prompt: "Rewrite this invitation casually for your friend.",
    rounds: [
      {
        original: "I would like to formally invite you to visit my home this afternoon, should your schedule permit.",
        helpfulPhrases: ["wanna come over", "this afternoon", "let me know"],
        sample: "wanna come over this afternoon? let me know if you're free!",
      },
      {
        original: "I am writing to ask if you might be available to visit this weekend.",
        helpfulPhrases: ["wanna hang out", "this weekend", "lmk"],
        sample: "wanna hang out this weekend? lmk if ur free!",
      },
      {
        original: "It would bring me great pleasure if you could join me for dinner this evening.",
        helpfulPhrases: ["wanna come over", "tonight", "would be fun"],
        sample: "wanna come over for dinner tonight? would be fun!",
      },
      {
        original: "I extend an invitation for you to join me at the cinema this Saturday.",
        helpfulPhrases: ["wanna go", "Saturday", "lemme know"],
        sample: "wanna go to the movies Saturday? lemme know!",
      },
    ],
  },
  {
    key: "tellingATeacherYoureSick",
    title: "Telling a Teacher You're Sick",
    focus: "Formal absence explanation",
    direction: "toFormal",
    context: "This message is going to your teacher, not a friend.",
    prompt: "Rewrite this message formally for your teacher.",
    rounds: [
      {
        original: "im sick today so i cant come to class sry",
        helpfulPhrases: ["Dear Mr./Ms. ___", "I am unable to attend", "I apologize for"],
        sample: "Dear Ms. Reyes, I am unable to attend class today as I am feeling unwell. I apologize for any inconvenience this may cause.",
      },
      {
        original: "i have a fever so i wont be in school 2day",
        helpfulPhrases: ["Dear Mr./Ms. ___", "I am writing to let you know", "will not be able to"],
        sample: "Dear Mr./Ms. ___, I am writing to let you know that I have a fever and will not be able to attend school today.",
      },
      {
        original: "cant make it to school tmrw i have a dr appt",
        helpfulPhrases: ["Dear Mr./Ms. ___", "I will be unable to", "due to"],
        sample: "Dear Mr./Ms. ___, I will be unable to attend school tomorrow due to a doctor's appointment.",
      },
      {
        original: "still sick, gonna miss class again today, sry",
        helpfulPhrases: ["Dear Mr./Ms. ___", "I regret to inform you", "absent again"],
        sample: "Dear Mr./Ms. ___, I regret to inform you that I am still unwell and will be absent again today.",
      },
    ],
  },
  {
    key: "askingAboutHomework",
    title: "Asking About Homework",
    focus: "Casual questions, contractions",
    direction: "toCasual",
    context: "You're asking a classmate, not your teacher.",
    prompt: "Rewrite this message casually for your classmate.",
    rounds: [
      {
        original: "Could you please inform me of the homework assignment, as I was absent from class today?",
        helpfulPhrases: ["hey", "what's the hw", "wasn't in class"],
        sample: "hey, what's the hw today? i wasn't in class, sorry to bug you",
      },
      {
        original: "I would appreciate it if you could clarify when the assignment is due.",
        helpfulPhrases: ["hey", "when's it due", "lost track"],
        sample: "hey, when's the hw due? lost track lol",
      },
      {
        original: "Might you be able to explain the instructions for the assignment?",
        helpfulPhrases: ["hey", "can u explain", "kinda confused"],
        sample: "hey, can u explain the hw? im kinda confused",
      },
      {
        original: "Would it be possible for you to send me a photo of the assignment sheet?",
        helpfulPhrases: ["hey", "can u send", "forgot mine"],
        sample: "hey, can u send me a pic of the hw sheet? i forgot mine",
      },
    ],
  },
  {
    key: "sayingSorryToAFriend",
    title: "Saying Sorry to a Friend",
    focus: "Casual, sincere apology",
    direction: "toCasual",
    context: "You're texting a close friend, not writing a formal apology letter.",
    prompt: "Rewrite this message casually for your friend.",
    rounds: [
      {
        original: "I sincerely apologize for my behavior yesterday and hope that you can find it in your heart to forgive me.",
        helpfulPhrases: ["hey, sorry about", "my bad", "hope we're good"],
        sample: "hey, sorry about yesterday, that was my bad. hope we're good?",
      },
      {
        original: "I deeply regret forgetting our plans and hope you will accept my apology.",
        helpfulPhrases: ["sorry i forgot", "my bad", "forgive me"],
        sample: "hey, sorry i forgot our plans, my bad! forgive me?",
      },
      {
        original: "I wish to apologize for the unkind remark I made earlier.",
        helpfulPhrases: ["sorry for", "i didn't mean it", "hope we're ok"],
        sample: "hey, sorry for what i said earlier, i didn't mean it",
      },
      {
        original: "Please accept my sincerest apologies for missing your event.",
        helpfulPhrases: ["so sorry", "i feel bad", "can i make it up"],
        sample: "hey, so sorry i missed your thing, i feel really bad",
      },
    ],
  },
];

const B1B2 = [
  {
    key: "schoolAbsenceNote",
    title: "School Absence Note",
    focus: "Formal tone, no slang or abbreviations",
    direction: "toFormal",
    context: "This note goes to the school office.",
    prompt: "Rewrite this note formally for the school office.",
    rounds: [
      {
        original: "hey so i wasnt at school yesterday bc i was sick, sorry about that, can u mark me present today tho",
        helpfulPhrases: ["I was absent on", "due to illness", "I would appreciate it if"],
        sample: "Dear School Office, I was absent yesterday due to illness. I apologize for the inconvenience and would appreciate it if my attendance today could be marked as present.",
      },
      {
        original: "hey i left early yesterday bc i had a dr appt, can u excuse that",
        helpfulPhrases: ["I left school early", "due to", "I would appreciate it if"],
        sample: "Dear School Office, I left school early yesterday due to a doctor's appointment. I would appreciate it if this could be marked as an excused absence.",
      },
      {
        original: "gonna be out all next week, family emergency, will send more info later",
        helpfulPhrases: ["I will be absent", "due to", "I will provide further details"],
        sample: "Dear School Office, I will be absent for the upcoming week due to a family emergency. I will provide further details as soon as possible.",
      },
      {
        original: "missed the bus this morning so i got here late, my bad",
        helpfulPhrases: ["I arrived late", "as I missed", "I apologize for"],
        sample: "Dear School Office, I arrived late this morning as I missed my bus. I apologize for the inconvenience.",
      },
    ],
  },
  {
    key: "chattingWithAFriend",
    title: "Chatting with a Friend",
    focus: "Casual contractions, relaxed tone",
    direction: "toCasual",
    context: "You're texting your close friend, not writing an essay.",
    prompt: "Rewrite this message casually for your friend.",
    rounds: [
      {
        original: "I am writing to inform you that I will be unable to attend our planned meeting this afternoon due to a prior commitment.",
        helpfulPhrases: ["hey", "can't make it", "sorry!"],
        sample: "hey sorry, i can't make it this afternoon, something came up! can we hang out another day?",
      },
      {
        original: "I regret to inform you that I will be arriving later than originally planned.",
        helpfulPhrases: ["gonna be late", "sorry", "running behind"],
        sample: "hey, gonna be a bit late, sorry!",
      },
      {
        original: "I am pleased to confirm that I will be attending the event as scheduled.",
        helpfulPhrases: ["yep i'll be there", "see you soon", "can't wait"],
        sample: "hey, yep i'll be there, see you soon!",
      },
      {
        original: "I wanted to inquire whether you would be interested in accompanying me to the cinema.",
        helpfulPhrases: ["wanna go", "with me", "lmk"],
        sample: "hey wanna go see a movie with me?",
      },
    ],
  },
  {
    key: "messageToYourBoss",
    title: "Message to Your Boss",
    focus: "Formal workplace tone, polite phrasing",
    direction: "toFormal",
    context: "You're messaging your manager, not a coworker friend.",
    prompt: "Rewrite this message formally for your boss.",
    rounds: [
      {
        original: "hey boss the printer is broken again lol someone needs to fix it asap",
        helpfulPhrases: ["I wanted to let you know", "at your earliest convenience", "Thank you for your attention"],
        sample: "Good morning, I wanted to let you know that the printer is broken again. Could someone please look into it at your earliest convenience? Thank you for your attention to this.",
      },
      {
        original: "hey boss running late today traffic is crazy",
        helpfulPhrases: ["I wanted to let you know", "running late", "due to"],
        sample: "Good morning, I wanted to let you know that I am running late this morning due to heavy traffic.",
      },
      {
        original: "boss can i leave early today got an appointment",
        helpfulPhrases: ["I wanted to ask", "as I have", "Thank you for considering"],
        sample: "Good afternoon, I wanted to ask if I could leave a bit early today, as I have an appointment. Thank you for considering.",
      },
      {
        original: "hey boss the meeting notes are ready whenever u want them",
        helpfulPhrases: ["I wanted to let you know", "whenever it's convenient", "ready to review"],
        sample: "Good morning, I wanted to let you know that the meeting notes are ready whenever it's convenient for you to review them.",
      },
    ],
  },
  {
    key: "textToAFriend",
    title: "Text to a Friend",
    focus: "Casual, relaxed everyday tone",
    direction: "toCasual",
    context: "You're texting a close friend, not a stranger.",
    prompt: "Rewrite this message casually for your friend.",
    rounds: [
      {
        original: "Good afternoon. I am writing to ask whether you would be available to meet for coffee sometime this week.",
        helpfulPhrases: ["hey", "wanna", "free this week?"],
        sample: "hey! wanna grab coffee sometime this week? let me know when you're free!",
      },
      {
        original: "I am writing to see whether you would be free to join me for lunch tomorrow.",
        helpfulPhrases: ["hey!", "free for", "tomorrow"],
        sample: "hey! free for lunch tomorrow?",
      },
      {
        original: "I wanted to check whether you received the message I sent earlier.",
        helpfulPhrases: ["hey", "did u get", "my last text"],
        sample: "hey did u get my last text?",
      },
      {
        original: "I would like to know if you are available to study together this weekend.",
        helpfulPhrases: ["wanna", "together", "this weekend"],
        sample: "hey wanna study together this weekend?",
      },
    ],
  },
  {
    key: "askingACoworkerForHelp",
    title: "Asking a Coworker for Help",
    focus: "Polite workplace requests, semi-formal tone",
    direction: "toFormal",
    context: "You're messaging a coworker you don't know very well.",
    prompt: "Rewrite this message more formally for a coworker.",
    rounds: [
      {
        original: "yo can u help me with this report, im kinda stuck lol",
        helpfulPhrases: ["Would you be able to", "I'd really appreciate", "when you have a moment"],
        sample: "Hi, would you be able to help me with this report when you have a moment? I'd really appreciate your input, I'm a bit stuck on one section.",
      },
      {
        original: "hey can u check this doc for me when ur free",
        helpfulPhrases: ["would you be able to", "when you have a moment", "I'd appreciate"],
        sample: "Hi, would you be able to take a look at this document when you have a moment? I'd appreciate your feedback.",
      },
      {
        original: "yo do u know how to fix this spreadsheet thing",
        helpfulPhrases: ["do you happen to know", "any guidance", "would be appreciated"],
        sample: "Hi, do you happen to know how to resolve an issue with this spreadsheet? Any guidance would be appreciated.",
      },
      {
        original: "can u cover my shift tmrw i have something come up",
        helpfulPhrases: ["would you be willing to", "something has come up", "I'd really appreciate"],
        sample: "Hi, would you be willing to cover my shift tomorrow? Something has come up and I'd really appreciate the help.",
      },
    ],
  },
  {
    key: "decliningAnInvitation",
    title: "Declining an Invitation",
    focus: "Polite refusal, softening language",
    direction: "toFormal",
    context: "You're replying to an acquaintance's invitation, not a close friend.",
    prompt: "Rewrite this message more politely for an acquaintance.",
    rounds: [
      {
        original: "nah i cant come, im busy that day",
        helpfulPhrases: ["Thank you for the invitation", "Unfortunately, I won't be able to", "I hope"],
        sample: "Thank you so much for the invitation! Unfortunately, I won't be able to make it that day as I already have plans. I hope you all have a wonderful time.",
      },
      {
        original: "cant make the meeting, double booked that day",
        helpfulPhrases: ["Thank you for the invitation", "Unfortunately", "won't be able to"],
        sample: "Thank you for the invitation. Unfortunately, I have a scheduling conflict that day and won't be able to attend.",
      },
      {
        original: "not coming to the dinner, not really feeling it",
        helpfulPhrases: ["Thank you so much", "Unfortunately", "won't be able to"],
        sample: "Thank you so much for thinking of me. Unfortunately, I won't be able to join for dinner this time.",
      },
      {
        original: "skipping the trip, cant afford it rn",
        helpfulPhrases: ["Thank you for including me", "Unfortunately", "due to other commitments"],
        sample: "Thank you for including me in the trip. Unfortunately, I won't be able to join due to other commitments.",
      },
    ],
  },
  {
    key: "requestingARefund",
    title: "Requesting a Refund",
    focus: "Polite but assertive tone",
    direction: "toFormal",
    context: "You're emailing customer service, not complaining to a friend.",
    prompt: "Rewrite this message formally for customer service.",
    rounds: [
      {
        original: "this product is broken and i want my money back now",
        helpfulPhrases: ["I am writing to request", "Unfortunately, the item", "I would appreciate"],
        sample: "I am writing to request a refund for a recent purchase. Unfortunately, the item arrived broken and is unusable. I would appreciate a full refund at your earliest convenience.",
      },
      {
        original: "the shirt i ordered is the wrong size and i want it fixed",
        helpfulPhrases: ["I am writing to request", "Unfortunately", "I would appreciate"],
        sample: "I am writing to request an exchange for a recent order. Unfortunately, the item I received is the wrong size. I would appreciate your assistance.",
      },
      {
        original: "never got my package and its been 2 weeks",
        helpfulPhrases: ["I am writing to report", "despite", "I would appreciate"],
        sample: "I am writing to report that my order has not arrived despite being placed two weeks ago. I would appreciate an update on its status.",
      },
      {
        original: "the item i got doesnt match the pics online at all",
        helpfulPhrases: ["I am writing to express", "does not match", "I would appreciate"],
        sample: "I am writing to express my disappointment, as the item received does not match its online description. I would appreciate a resolution.",
      },
    ],
  },
  {
    key: "introducingYourselfOnline",
    title: "Introducing Yourself Online",
    focus: "Friendly but clear self-introduction",
    direction: "toCasual",
    context: "This is a casual community forum, not a job application.",
    prompt: "Rewrite this introduction casually for a community forum.",
    rounds: [
      {
        original: "Greetings. My name is Daniel and I am pleased to be joining this online community. I look forward to engaging with fellow members.",
        helpfulPhrases: ["hey everyone", "excited to be here", "looking forward to"],
        sample: "hey everyone! I'm Daniel, excited to be here. Looking forward to chatting with you all!",
      },
      {
        original: "Good day. My name is Sarah, and I am delighted to become a member of this forum.",
        helpfulPhrases: ["hi everyone", "so happy to be", "part of this"],
        sample: "hi everyone! I'm Sarah, so happy to be part of this group!",
      },
      {
        original: "Salutations. I am new to this community and eager to make acquaintances.",
        helpfulPhrases: ["hey all", "new here", "excited to"],
        sample: "hey all! new here and excited to meet you all!",
      },
      {
        original: "I would like to formally introduce myself as a new participant in this discussion group.",
        helpfulPhrases: ["just joined", "excited to", "everyone"],
        sample: "hey, just joined the group, excited to chat with everyone!",
      },
    ],
  },
  {
    key: "askingALandlordForARepair",
    title: "Asking a Landlord for a Repair",
    focus: "Polite but clear requests",
    direction: "toFormal",
    context: "You're messaging your landlord, not a friend who's helping you move.",
    prompt: "Rewrite this message formally for your landlord.",
    rounds: [
      {
        original: "hey the sink is leaking again can u send someone to fix it",
        helpfulPhrases: ["I wanted to let you know", "Could you please arrange", "at your earliest convenience"],
        sample: "Hi, I wanted to let you know that the sink is leaking again. Could you please arrange for someone to fix it at your earliest convenience? Thank you.",
      },
      {
        original: "the heater isnt working can u send someone",
        helpfulPhrases: ["I wanted to let you know", "Could you please arrange", "at your earliest convenience"],
        sample: "Hi, I wanted to let you know that the heater is not working. Could you please arrange for a repair at your earliest convenience?",
      },
      {
        original: "theres a leak under the bathroom sink need it fixed",
        helpfulPhrases: ["I wanted to report", "Could you please send", "as soon as possible"],
        sample: "Hi, I wanted to report a leak under the bathroom sink. Could you please send someone to take a look as soon as possible?",
      },
      {
        original: "the front door lock is broken again pls fix it",
        helpfulPhrases: ["I wanted to let you know", "I would appreciate it if", "repaired soon"],
        sample: "Hi, I wanted to let you know that the front door lock is broken again. I would appreciate it if this could be repaired soon.",
      },
    ],
  },
  {
    key: "congratulatingAFriend",
    title: "Congratulating a Friend",
    focus: "Warm, casual congratulations",
    direction: "toCasual",
    context: "You're texting a close friend, not writing a formal card.",
    prompt: "Rewrite this message casually for your friend.",
    rounds: [
      {
        original: "Congratulations on your recent achievement. I wish to extend my sincere congratulations on this well-deserved success.",
        helpfulPhrases: ["omg congrats!!", "so proud of you", "you deserve it"],
        sample: "omg congrats!! I'm so proud of you, you totally deserve it!!",
      },
      {
        original: "I extend my warmest congratulations on your recent promotion.",
        helpfulPhrases: ["omg congrats", "so well deserved", "proud of you"],
        sample: "omg congrats on the promotion!! so well deserved!!",
      },
      {
        original: "Please accept my sincere congratulations on the birth of your child.",
        helpfulPhrases: ["omg congrats", "so happy for you", "can't wait to meet"],
        sample: "omg congrats on the baby!! so happy for you!!",
      },
      {
        original: "I wish to congratulate you on successfully completing your degree.",
        helpfulPhrases: ["omg", "congrats", "you did it"],
        sample: "omg you graduated!! congrats, you did it!!",
      },
    ],
  },
];

const C1C2 = [
  {
    key: "complaintEmail",
    title: "Complaint Email",
    focus: "Formal complaint structure, no informal venting",
    direction: "toFormal",
    context: "This becomes a formal complaint email to a company.",
    prompt: "Rewrite this as a formal complaint email.",
    rounds: [
      {
        original: "this is honestly ridiculous, my order is a week late and nobody has told me anything, i want this fixed now",
        helpfulPhrases: ["I am writing to express", "I would appreciate an update", "I trust this will be resolved"],
        sample: "I am writing to express my concern regarding my order, which is now a week overdue with no update provided. I would appreciate an explanation and a revised delivery date. I trust this matter will be resolved promptly.",
      },
      {
        original: "this is the third time my package has been damaged, im done with this",
        helpfulPhrases: ["I am writing to express", "this marks the third occurrence", "I trust this matter"],
        sample: "I am writing to express my dissatisfaction, as this marks the third occurrence of a damaged shipment. I trust this matter will receive appropriate attention.",
      },
      {
        original: "your customer service didnt even respond to my last email, unreal",
        helpfulPhrases: ["I am writing to express concern", "received no response", "I would appreciate a prompt reply"],
        sample: "I am writing to express concern that my previous email received no response. I would appreciate a prompt reply addressing my original inquiry.",
      },
      {
        original: "i was charged twice for the same order and no one has fixed it",
        helpfulPhrases: ["I am writing to bring to your attention", "remains unresolved", "I trust this will be corrected"],
        sample: "I am writing to bring to your attention a duplicate charge on my recent order, which remains unresolved. I trust this will be corrected promptly.",
      },
    ],
  },
  {
    key: "catchingUpWithAnOldFriend",
    title: "Catching Up with an Old Friend",
    focus: "Warm, casual, conversational tone",
    direction: "toCasual",
    context: "You're emailing an old friend, not a business contact.",
    prompt: "Rewrite this message casually for an old friend.",
    rounds: [
      {
        original: "Dear Michael, I hope this message finds you well. I am writing to inquire about your current circumstances and to propose that we arrange a meeting at your earliest convenience.",
        helpfulPhrases: ["hey stranger", "how've you been", "let's catch up"],
        sample: "Hey stranger! It's been way too long, how've you been? We should really catch up sometime soon, are you free this week?",
      },
      {
        original: "I trust this correspondence finds you in good health and high spirits.",
        helpfulPhrases: ["hope you're doing", "awesome", "miss you"],
        sample: "hope you're doing awesome! miss you a ton!",
      },
      {
        original: "I have often found myself reflecting upon the fond memories of our shared past.",
        helpfulPhrases: ["been thinking about", "a lot lately", "good times"],
        sample: "been thinking about the old days a lot lately! good times.",
      },
      {
        original: "Should your schedule permit, I would be most gratified to reconvene at your earliest opportunity.",
        helpfulPhrases: ["let's finally", "whenever you're free", "been too long"],
        sample: "let's finally hang out whenever you're free! it's been too long.",
      },
    ],
  },
  {
    key: "negotiatingADeadline",
    title: "Negotiating a Deadline",
    focus: "Assertive but diplomatic professional tone",
    direction: "toFormal",
    context: "You're emailing a client, not messaging a friend.",
    prompt: "Rewrite this message formally for a client.",
    rounds: [
      {
        original: "there's no way we can hit that deadline, we need more time, sorry",
        helpfulPhrases: ["Upon review, we believe", "we would like to propose", "to ensure the highest quality"],
        sample: "Upon review of the current timeline, we believe additional time will be required to ensure the highest quality outcome. We would like to propose an adjusted deadline and are happy to discuss options at your convenience.",
      },
      {
        original: "the scope changed halfway through so we need more time now, not our fault",
        helpfulPhrases: ["Given the changes", "we believe", "we would like to propose"],
        sample: "Given the changes to project scope midway through, we believe an extension is warranted. We would like to propose a revised timeline that reflects this.",
      },
      {
        original: "we're waiting on a third party and it's holding everything up",
        helpfulPhrases: ["As we are currently awaiting", "we anticipate", "we will provide an updated timeline"],
        sample: "As we are currently awaiting deliverables from a third party, we anticipate a short delay. We will provide an updated timeline as soon as possible.",
      },
      {
        original: "honestly the team is stretched thin rn and quality will suffer if we rush",
        helpfulPhrases: ["In light of", "we are concerned that", "we would welcome a discussion"],
        sample: "In light of current resource constraints, we are concerned that rushing the timeline may compromise quality. We would welcome a discussion on adjusting the deadline.",
      },
    ],
  },
  {
    key: "decliningAJobOffer",
    title: "Declining a Job Offer",
    focus: "Formal, gracious refusal",
    direction: "toFormal",
    context: "You're emailing a hiring manager, not chatting with a friend.",
    prompt: "Rewrite this message formally for the hiring manager.",
    rounds: [
      {
        original: "thanks but no thanks, i got a better offer somewhere else",
        helpfulPhrases: ["Thank you very much for", "After careful consideration", "I have decided to"],
        sample: "Thank you very much for offering me this position. After careful consideration, I have decided to accept another opportunity that better aligns with my current goals. I truly appreciate your time and consideration.",
      },
      {
        original: "appreciate it but the salary just isnt what i need rn",
        helpfulPhrases: ["I sincerely appreciate", "After careful consideration", "I must respectfully decline"],
        sample: "I sincerely appreciate the offer extended to me. However, after careful consideration, the compensation does not align with my current requirements, and I must respectfully decline.",
      },
      {
        original: "honestly the commute is a dealbreaker for me, sorry",
        helpfulPhrases: ["I am grateful for the opportunity", "after reflection", "I must therefore decline"],
        sample: "I am grateful for the opportunity, however, after reflection, the location presents challenges I am unable to overcome at this time. I must therefore decline.",
      },
      {
        original: "decided to stay at my current job instead, thanks anyway",
        helpfulPhrases: ["Thank you sincerely", "After much deliberation", "I truly appreciate"],
        sample: "Thank you sincerely for the generous offer. After much deliberation, I have decided to remain in my current role. I truly appreciate your consideration.",
      },
    ],
  },
  {
    key: "addressingATeamConflict",
    title: "Addressing a Team Conflict",
    focus: "Diplomatic, de-escalating tone",
    direction: "toFormal",
    context: "You're emailing your team, not venting to a friend.",
    prompt: "Rewrite this message formally for your team.",
    rounds: [
      {
        original: "everyone needs to stop arguing and just do their job, this is getting ridiculous",
        helpfulPhrases: ["I've noticed some tension", "I'd like us to", "moving forward"],
        sample: "I've noticed some tension within the team recently, and I'd like us to address it directly rather than let it affect our work. Moving forward, let's set aside time to discuss any concerns openly.",
      },
      {
        original: "ppl keep talking behind each others backs and its toxic, needs to stop",
        helpfulPhrases: ["I have become aware of", "I would like us to address", "a more constructive dynamic"],
        sample: "I have become aware of some concerning communication patterns within the team. I would like us to address this openly and work toward a more constructive dynamic.",
      },
      {
        original: "the blame game after every mistake is getting old, we need to fix this",
        helpfulPhrases: ["I've noticed a tendency", "which I believe", "Moving forward"],
        sample: "I've noticed a tendency to assign blame following setbacks, which I believe is affecting morale. Moving forward, let's focus on solutions rather than fault.",
      },
      {
        original: "some people arent pulling their weight and its causing resentment",
        helpfulPhrases: ["I'd like to address", "I believe", "a fair path forward"],
        sample: "I'd like to address some concerns regarding workload distribution within the team. I believe an open conversation would help us find a fair path forward.",
      },
    ],
  },
  {
    key: "requestingAReference",
    title: "Requesting a Reference",
    focus: "Polite formal request",
    direction: "toFormal",
    context: "You're emailing a former manager, not a close friend.",
    prompt: "Rewrite this message formally for your former manager.",
    rounds: [
      {
        original: "hey can you be my reference for this new job im applying to",
        helpfulPhrases: ["I hope this message finds you well", "I would be grateful if", "at your convenience"],
        sample: "Dear Mr. Chen, I hope this message finds you well. I am applying for a new position and would be grateful if you would be willing to serve as a reference. Please let me know at your convenience if this would be possible.",
      },
      {
        original: "need someone to vouch for me for grad school, can u help",
        helpfulPhrases: ["I hope you are doing well", "I would be honored if", "consider serving as a reference"],
        sample: "Dear Professor Alvarado, I hope you are doing well. I am applying to graduate school and would be honored if you would consider serving as a reference.",
      },
      {
        original: "applying for a scholarship need a reference letter from u",
        helpfulPhrases: ["I am currently applying", "would greatly appreciate it if", "on my behalf"],
        sample: "Dear Mr. Chen, I am currently applying for a scholarship and would greatly appreciate it if you could provide a letter of reference on my behalf.",
      },
      {
        original: "need a reference for my visa app, could u write one",
        helpfulPhrases: ["I am in the process of", "would be grateful if", "supporting reference letter"],
        sample: "Dear Professor Alvarado, I am in the process of applying for a visa and would be grateful if you could provide a supporting reference letter.",
      },
    ],
  },
  {
    key: "announcingAResignation",
    title: "Announcing a Resignation",
    focus: "Formal, professional, gracious tone",
    direction: "toFormal",
    context: "This is a formal resignation email to your manager.",
    prompt: "Rewrite this message formally for your manager.",
    rounds: [
      {
        original: "im quitting, my last day is in two weeks, thanks for everything i guess",
        helpfulPhrases: ["I am writing to formally notify you", "my last working day will be", "I am grateful for"],
        sample: "Dear [Manager], I am writing to formally notify you of my resignation. My last working day will be two weeks from today. I am grateful for the opportunities I've had here and will do everything I can to ensure a smooth transition.",
      },
      {
        original: "found a better opportunity, giving 2 weeks notice, thx for everything",
        helpfulPhrases: ["I am writing to formally tender", "having accepted", "I will ensure a smooth handover"],
        sample: "Dear [Manager], I am writing to formally tender my resignation, having accepted a position elsewhere. I will ensure a smooth handover over the next two weeks.",
      },
      {
        original: "moving to another city so i gotta quit, sorry for short notice",
        helpfulPhrases: ["due to a relocation", "I must resign", "I apologize for the shorter notice"],
        sample: "Dear [Manager], due to a relocation, I must resign from my position effective in two weeks. I apologize for the shorter notice and will assist with the transition.",
      },
      {
        original: "burnt out and need a break, quitting end of month",
        helpfulPhrases: ["after careful reflection", "I have decided to step down", "I am grateful for"],
        sample: "Dear [Manager], after careful reflection, I have decided to step down from my role, effective the end of this month. I am grateful for the experience gained here.",
      },
    ],
  },
  {
    key: "respondingToNegativeFeedback",
    title: "Responding to Negative Feedback",
    focus: "Professional, non-defensive tone",
    direction: "toFormal",
    context: "You're replying to a client's critical review, not arguing with a friend.",
    prompt: "Rewrite this message formally for the client.",
    rounds: [
      {
        original: "that's not even true, we did everything right, you're being unfair",
        helpfulPhrases: ["Thank you for sharing your feedback", "we understand your concern", "we would welcome the chance to"],
        sample: "Thank you for sharing your feedback. We understand your concern and take it seriously. We would welcome the chance to discuss this further and make things right wherever possible.",
      },
      {
        original: "the service was slow and the staff didnt seem to care at all",
        helpfulPhrases: ["Thank you for bringing this to our attention", "We regret that", "so we can improve"],
        sample: "Thank you for bringing this to our attention. We regret that your experience did not meet expectations and would like to understand more so we can improve.",
      },
      {
        original: "i paid full price and got a broken product, unacceptable",
        helpfulPhrases: ["We sincerely apologize", "We take such matters seriously", "make things right"],
        sample: "We sincerely apologize for the inconvenience this has caused. We take such matters seriously and would like to make things right immediately.",
      },
      {
        original: "nobody followed up after i reported the issue weeks ago",
        helpfulPhrases: ["Thank you for your patience", "We apologize for", "as a priority"],
        sample: "Thank you for your patience and for flagging this delay. We apologize for the lack of follow-up and are addressing it as a priority.",
      },
    ],
  },
  {
    key: "proposingAPartnership",
    title: "Proposing a Partnership",
    focus: "Formal, persuasive business tone",
    direction: "toFormal",
    context: "This is a formal proposal email to another company.",
    prompt: "Rewrite this message formally for a potential business partner.",
    rounds: [
      {
        original: "hey we think our companies should team up, could be good for both of us",
        helpfulPhrases: ["we believe there is a strong opportunity", "we would welcome the chance to discuss", "mutually beneficial"],
        sample: "Dear team, we believe there is a strong opportunity for a mutually beneficial partnership between our companies. We would welcome the chance to discuss this further at a time convenient for you.",
      },
      {
        original: "we could combine our marketing efforts, seems like a win win",
        helpfulPhrases: ["We believe there is significant potential", "mutual benefits", "We would welcome further discussion"],
        sample: "We believe there is significant potential in aligning our marketing efforts, which could yield mutual benefits for both organizations. We would welcome further discussion.",
      },
      {
        original: "our tech could really help ur platform, wanna talk sometime",
        helpfulPhrases: ["We believe", "offer meaningful value", "We would appreciate the opportunity"],
        sample: "We believe our technology could offer meaningful value to your platform. We would appreciate the opportunity to explore this further at a convenient time.",
      },
      {
        original: "think we should co host an event together, could be huge",
        helpfulPhrases: ["We would like to propose", "we believe", "We look forward to discussing"],
        sample: "We would like to propose co-hosting an event, which we believe could generate substantial value for both parties. We look forward to discussing this possibility.",
      },
    ],
  },
  {
    key: "reconnectingWithAMentor",
    title: "Reconnecting with a Mentor",
    focus: "Warm but respectful semi-formal tone",
    direction: "toCasual",
    context: "You're emailing a mentor you know well, not a stranger.",
    prompt: "Rewrite this message a bit more warmly for a mentor you know well.",
    rounds: [
      {
        original: "Dear Professor Alvarado, I am writing to inquire whether you might have availability to reconnect, as it has been an extended period since our last correspondence.",
        helpfulPhrases: ["Hi Professor Alvarado", "it's been way too long", "would love to catch up"],
        sample: "Hi Professor Alvarado, it's been way too long since we last talked! I'd love to catch up whenever you have some free time. Hope you've been doing well.",
      },
      {
        original: "Dear Dr. Kim, it has been an extended interval since we last exchanged correspondence, and I hope this message finds you well.",
        helpfulPhrases: ["Hi", "it's been way too long", "Hope you're doing well"],
        sample: "Hi Dr. Kim, it's been way too long! Hope you're doing well!",
      },
      {
        original: "I write in the hope that you might find a moment to reconnect, given the considerable time that has elapsed.",
        helpfulPhrases: ["Hey", "would love to catch up", "whenever you're free"],
        sample: "Hey, would love to catch up whenever you're free!",
      },
      {
        original: "I trust this note finds you in good health, and I would be honored to arrange a meeting at your convenience.",
        helpfulPhrases: ["Hi!", "Hope all's well", "would be great to"],
        sample: "Hi! Hope all's well, would be great to meet up sometime!",
      },
    ],
  },
];

const REGISTER_REWRITE_SETS = [
  ...A1A2.map((t) => ({ ...t, cefrGroup: "A1-A2" })),
  ...B1B2.map((t) => ({ ...t, cefrGroup: "B1-B2" })),
  ...C1C2.map((t) => ({ ...t, cefrGroup: "C1-C2" })),
];

export default REGISTER_REWRITE_SETS;

// B1 Adults digital storybook, Book 58: "A Problem with My Paycheck"
// Static content -- no Supabase. Second book in the B1 Adults batch
// (57-64). Calibrated to the sourced B1 Adults spec: workplace
// incident requiring problem-solving, modals for politeness, relative
// clauses and linking devices, specialized payroll/HR vocabulary and
// multi-word verbs (look into, sort out, follow up). Adults-track
// shape: 3 questions, 5 True/False, 5 Build-a-Sentence per chapter,
// shortest-to-longest. Images not generated yet -- image/coverImage
// left null so StoryBook.jsx's ImagePlaceholder fallback renders.

export const STORYBOOK_TITLE = "A Problem with My Paycheck";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Marcus sitting at his kitchen table, laptop open showing a payslip, one hand on his forehead, looking concerned.";

export const CHARACTERS = [
  { name: "Marcus", role: "The narrator, an adult office worker", look: "Casual work clothes, glasses, laptop always nearby." },
  { name: "Ms. Alvarez", role: "The company's HR and payroll coordinator", look: "Organized, patient, speaks in a reassuring but professional tone." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Checking My Payslip",
    image: null,
    imageNote: "Marcus at his kitchen table late in the evening, staring at his laptop screen with a confused expression.",
    story:
      "On Friday evening, I sit down to review my monthly budget, which usually starts with a quick glance at my payslip. Something looks off immediately, though it takes me a moment to figure out exactly what. Comparing this month's number with last month's, I notice my pay is considerably lower than it should be. At first, I assume I'm simply misreading something, so I check the numbers twice more, carefully. Unfortunately, the difference is real, and now I have to figure out what actually happened and who I should contact about it.",
    questions: [
      "What does Marcus usually start his budget review with?",
      "What does Marcus notice about this month's pay?",
      "What does Marcus do after noticing the difference?",
    ],
    trueFalse: [
      { text: "Marcus reviews his budget on Friday evening.", answer: true },
      { text: "Marcus notices his pay is considerably lower than usual.", answer: true },
      { text: "Marcus assumes nothing is wrong at first.", answer: false },
      { text: "Marcus checks the numbers only once.", answer: false },
      { text: "The difference in pay turns out to be real.", answer: true },
    ],
    buildSentence: [
      { target: "Something looks off immediately.", jumbled: ["Something", "looks", "off", "immediately."] },
      { target: "I check the numbers twice.", jumbled: ["I", "check", "the", "numbers", "twice."] },
      { target: "The difference is real, unfortunately.", jumbled: ["The", "difference", "is", "real,", "unfortunately."] },
      { target: "I have to figure out what happened.", jumbled: ["I", "have", "to", "figure", "out", "what", "happened."] },
      { target: "My pay is considerably lower than it should be.", jumbled: ["My", "pay", "is", "considerably", "lower", "than", "it", "should", "be."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something wrong with a bill or payment.",
    mySentenceExample: "I noticed something wrong with my payment last week.",
  },
  {
    number: 2,
    title: "Looking Into It",
    image: null,
    imageNote: "Marcus scrolling through his email inbox, comparing two payslip PDFs side by side on his laptop screen.",
    story:
      "Before contacting anyone, I decide to look into this myself first, comparing both payslips line by line. I find that my usual monthly bonus, which normally appears automatically, is completely missing from this particular payslip. This has never happened before in my three years at the company, which makes the situation slightly more concerning. I wonder whether this was simply a one-time mistake or possibly a sign of a larger, ongoing problem. Either way, I know I'll need to follow up with someone in payroll first thing on Monday morning.",
    questions: [
      "What does Marcus do before contacting anyone?",
      "What does Marcus find missing from his payslip?",
      "How long has Marcus worked at the company?",
    ],
    trueFalse: [
      { text: "Marcus compares both payslips line by line.", answer: true },
      { text: "Marcus finds his usual monthly bonus is missing.", answer: true },
      { text: "This has happened many times before.", answer: false },
      { text: "Marcus has worked at the company for three years.", answer: true },
      { text: "Marcus decides to ignore the problem completely.", answer: false },
    ],
    buildSentence: [
      { target: "I look into this myself.", jumbled: ["I", "look", "into", "this", "myself."] },
      { target: "This has never happened before.", jumbled: ["This", "has", "never", "happened", "before."] },
      { target: "My bonus is completely missing now.", jumbled: ["My", "bonus", "is", "completely", "missing", "now."] },
      { target: "I need to follow up on Monday.", jumbled: ["I", "need", "to", "follow", "up", "on", "Monday."] },
      { target: "This might be a sign of a larger problem.", jumbled: ["This", "might", "be", "a", "sign", "of", "a", "larger", "problem."] },
    ],
    mySentencePrompt: "Write or say one sentence about investigating a problem yourself before asking for help.",
    mySentenceExample: "I investigated the problem myself before asking for help.",
  },
  {
    number: 3,
    title: "Contacting HR",
    image: null,
    imageNote: "Marcus sitting at his office desk on Monday morning, typing a polite email to HR, coffee cup beside his keyboard.",
    story:
      "On Monday morning, I write a polite but clear email to Ms. Alvarez in HR, explaining exactly what I noticed. I attach both payslips, highlighting the missing bonus amount so she can see the difference immediately. In my message, I ask whether this could be looked into as soon as possible, since it affects my monthly budget directly. I try to keep my tone professional and calm, even though I'm honestly a little frustrated underneath. Within an hour, I receive a reply saying she'll check the payroll system and get back to me by the end of the day.",
    questions: [
      "Who does Marcus write an email to?",
      "What does Marcus attach to the email?",
      "How quickly does Marcus receive a reply?",
    ],
    trueFalse: [
      { text: "Marcus writes a polite but clear email to Ms. Alvarez.", answer: true },
      { text: "Marcus attaches both payslips to the email.", answer: true },
      { text: "Marcus writes the email in an angry tone.", answer: false },
      { text: "Marcus receives a reply within an hour.", answer: true },
      { text: "Ms. Alvarez says she will check the payroll system.", answer: true },
    ],
    buildSentence: [
      { target: "I write a polite email now.", jumbled: ["I", "write", "a", "polite", "email", "now."] },
      { target: "I attach both payslips together.", jumbled: ["I", "attach", "both", "payslips", "together."] },
      { target: "I try to keep my tone calm.", jumbled: ["I", "try", "to", "keep", "my", "tone", "calm."] },
      { target: "I receive a reply within an hour.", jumbled: ["I", "receive", "a", "reply", "within", "an", "hour."] },
      { target: "Could this be looked into as soon as possible?", jumbled: ["Could", "this", "be", "looked", "into", "as", "soon", "as", "possible?"] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a professional email to solve a problem.",
    mySentenceExample: "I wrote a professional email to solve the billing problem.",
  },
  {
    number: 4,
    title: "Waiting for an Answer",
    image: null,
    imageNote: "Marcus at his desk trying to focus on other work, occasionally glancing at his phone for a notification.",
    story:
      "The rest of the workday passes slowly, since part of my mind keeps wondering what Ms. Alvarez will eventually find. I try to focus on my regular tasks, though I check my email more often than I probably should. Around four in the afternoon, a message finally arrives, and my heart skips slightly as I open it. She explains that there was, in fact, a system error affecting several employees' bonuses this month, not just mine. Although knowing it wasn't personal makes me feel somewhat better, I'm still curious exactly when this will be corrected.",
    questions: [
      "How does Marcus feel during the workday?",
      "When does a message finally arrive?",
      "What does Ms. Alvarez explain caused the error?",
    ],
    trueFalse: [
      { text: "The workday passes slowly for Marcus.", answer: true },
      { text: "A message arrives around four in the afternoon.", answer: true },
      { text: "The error only affected Marcus's paycheck.", answer: false },
      { text: "Ms. Alvarez explains it was a system error.", answer: true },
      { text: "Marcus feels no curiosity about when this will be fixed.", answer: false },
    ],
    buildSentence: [
      { target: "The workday passes slowly today.", jumbled: ["The", "workday", "passes", "slowly", "today."] },
      { target: "A message finally arrives now.", jumbled: ["A", "message", "finally", "arrives", "now."] },
      { target: "My heart skips slightly at this.", jumbled: ["My", "heart", "skips", "slightly", "at", "this."] },
      { target: "This affected several employees this month.", jumbled: ["This", "affected", "several", "employees", "this", "month."] },
      { target: "Knowing it wasn't personal makes me feel better.", jumbled: ["Knowing", "it", "wasn't", "personal", "makes", "me", "feel", "better."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting anxiously for an answer to a problem.",
    mySentenceExample: "I waited anxiously for an answer to my complaint.",
  },
  {
    number: 5,
    title: "A Clear Explanation",
    image: null,
    imageNote: "Marcus on a video call with Ms. Alvarez, both looking at shared screens showing payroll spreadsheets.",
    story:
      "Ms. Alvarez suggests a short video call so she can walk me through exactly what went wrong, step by step. During the call, she shares her screen, showing a spreadsheet where a formula had apparently calculated bonuses incorrectly for a specific group. “This should have been caught earlier, and I sincerely apologize for the stress this caused you,” she says honestly. I appreciate her transparency, especially since she could have simply given a vague, generic answer instead. She explains that the finance team is already working on a fix, which should be resolved within the next two business days.",
    questions: [
      "What does Ms. Alvarez suggest?",
      "What does the spreadsheet show went wrong?",
      "How long will the fix take, according to Ms. Alvarez?",
    ],
    trueFalse: [
      { text: "Ms. Alvarez suggests a short video call.", answer: true },
      { text: "A formula had calculated bonuses incorrectly for a group.", answer: true },
      { text: "Ms. Alvarez gives a vague, generic answer.", answer: false },
      { text: "Marcus appreciates her transparency about the issue.", answer: true },
      { text: "The fix should be resolved within two business days.", answer: true },
    ],
    buildSentence: [
      { target: "She shares her screen now.", jumbled: ["She", "shares", "her", "screen", "now."] },
      { target: "I appreciate her transparency here.", jumbled: ["I", "appreciate", "her", "transparency", "here."] },
      { target: "This should have been caught earlier.", jumbled: ["This", "should", "have", "been", "caught", "earlier."] },
      { target: "The finance team is already working on it.", jumbled: ["The", "finance", "team", "is", "already", "working", "on", "it."] },
      { target: "This should be resolved within two business days.", jumbled: ["This", "should", "be", "resolved", "within", "two", "business", "days."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone explaining a mistake honestly and clearly.",
    mySentenceExample: "My manager explained the mistake honestly and clearly.",
  },
  {
    number: 6,
    title: "A Small Delay",
    image: null,
    imageNote: "Marcus checking his banking app on his phone, a slightly impatient but understanding expression on his face.",
    story:
      "Two days pass, and although the finance team said the fix would come by now, my account still shows no change. I decide to send a brief, friendly follow-up email rather than assuming the worst has happened. Ms. Alvarez responds quickly, explaining that the correction is being processed but might take one more business day to reflect. On the other hand, she offers to send me written confirmation of the exact amount owed, just in case I need it for my own records. I thank her, appreciating that she's keeping me informed rather than leaving me wondering silently.",
    questions: [
      "What does Marcus notice after two days?",
      "What does Marcus decide to send?",
      "What does Ms. Alvarez offer to send Marcus?",
    ],
    trueFalse: [
      { text: "Marcus's account shows no change after two days.", answer: true },
      { text: "Marcus sends a brief, friendly follow-up email.", answer: true },
      { text: "Ms. Alvarez ignores Marcus's follow-up email.", answer: false },
      { text: "The correction might take one more business day.", answer: true },
      { text: "Ms. Alvarez offers written confirmation of the amount owed.", answer: true },
    ],
    buildSentence: [
      { target: "Two days pass slowly now.", jumbled: ["Two", "days", "pass", "slowly", "now."] },
      { target: "I send a brief follow-up email.", jumbled: ["I", "send", "a", "brief", "follow-up", "email."] },
      { target: "She responds quickly to this.", jumbled: ["She", "responds", "quickly", "to", "this."] },
      { target: "I thank her for keeping me informed.", jumbled: ["I", "thank", "her", "for", "keeping", "me", "informed."] },
      { target: "This might take one more business day to reflect.", jumbled: ["This", "might", "take", "one", "more", "business", "day", "to", "reflect."] },
    ],
    mySentencePrompt: "Write or say one sentence about following up politely on an unresolved problem.",
    mySentenceExample: "I followed up politely on my unresolved refund request.",
  },
  {
    number: 7,
    title: "The Correction Arrives",
    image: null,
    imageNote: "Marcus checking his phone at home, smiling with relief as he sees the corrected deposit notification.",
    story:
      "The following morning, I receive a notification from my bank showing an unexpected deposit had arrived overnight. Opening the app immediately, I confirm that the missing bonus amount has finally been added to my account correctly. Relief spreads through me instantly, followed quickly by genuine appreciation for how the entire situation was ultimately handled. Ms. Alvarez even sends a short message confirming the correction, along with a brief written explanation for my personal records. I reply thanking her for the update, adding that I appreciated how clearly everything had been communicated throughout.",
    questions: [
      "What does Marcus receive the following morning?",
      "What does Marcus confirm in the banking app?",
      "What does Ms. Alvarez send along with the correction?",
    ],
    trueFalse: [
      { text: "Marcus receives a notification about an unexpected deposit.", answer: true },
      { text: "The missing bonus amount has been added correctly.", answer: true },
      { text: "Marcus feels no relief about this outcome.", answer: false },
      { text: "Ms. Alvarez sends a written explanation for his records.", answer: true },
      { text: "Marcus never replies to Ms. Alvarez's message.", answer: false },
    ],
    buildSentence: [
      { target: "Relief spreads through me instantly.", jumbled: ["Relief", "spreads", "through", "me", "instantly."] },
      { target: "I confirm this in the app.", jumbled: ["I", "confirm", "this", "in", "the", "app."] },
      { target: "I reply thanking her now.", jumbled: ["I", "reply", "thanking", "her", "now."] },
      { target: "She sends a brief written explanation.", jumbled: ["She", "sends", "a", "brief", "written", "explanation."] },
      { target: "I appreciated how clearly everything was communicated.", jumbled: ["I", "appreciated", "how", "clearly", "everything", "was", "communicated."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a problem finally gets fixed.",
    mySentenceExample: "I felt relieved when my refund finally arrived correctly.",
  },
  {
    number: 8,
    title: "Talking It Over",
    image: null,
    imageNote: "Marcus chatting with a coworker in a break room, both holding coffee mugs, discussing the situation casually.",
    story:
      "During lunch, I mention the whole situation to a coworker, curious whether her paycheck was affected as well. She confirms that hers had the exact same issue, and she'd also contacted HR separately about it. We compare notes, agreeing that Ms. Alvarez handled everything professionally, despite the initial inconvenience it caused everyone involved. My coworker jokes that at least now we know payroll actually double-checks these situations carefully when something goes wrong. Although the mistake itself was frustrating, in the end, the company's response genuinely reassured both of us about how future issues might be handled.",
    questions: [
      "Who does Marcus mention the situation to during lunch?",
      "What does the coworker confirm about her own paycheck?",
      "What do Marcus and his coworker agree about Ms. Alvarez?",
    ],
    trueFalse: [
      { text: "Marcus mentions the situation to a coworker during lunch.", answer: true },
      { text: "The coworker's paycheck had the exact same issue.", answer: true },
      { text: "They agree Ms. Alvarez handled things unprofessionally.", answer: false },
      { text: "The coworker also contacted HR separately.", answer: true },
      { text: "The company's response reassured them about future issues.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this during lunch.", jumbled: ["I", "mention", "this", "during", "lunch."] },
      { target: "We compare notes together now.", jumbled: ["We", "compare", "notes", "together", "now."] },
      { target: "She confirms the exact same issue.", jumbled: ["She", "confirms", "the", "exact", "same", "issue."] },
      { target: "This genuinely reassured both of us.", jumbled: ["This", "genuinely", "reassured", "both", "of", "us."] },
      { target: "Payroll actually double-checks these situations carefully.", jumbled: ["Payroll", "actually", "double-checks", "these", "situations", "carefully."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering a coworker had the same problem as you.",
    mySentenceExample: "I discovered my coworker had the same billing problem too.",
  },
  {
    number: 9,
    title: "A Better System",
    image: null,
    imageNote: "Ms. Alvarez presenting a short update in a company-wide email or memo about a new payroll checking process.",
    story:
      "A week later, the company sends a short memo explaining new steps being added to prevent similar payroll errors going forward. According to the memo, an additional review step will now be required before any bonus calculations are finalized each month. I appreciate that the company didn't just fix my individual issue quietly but addressed the underlying cause for everyone. This kind of response, in my opinion, says a lot about how seriously an organization takes its employees' trust. Whatever caused the original error, at least something genuinely useful came out of the whole experience.",
    questions: [
      "What does the company send a week later?",
      "What new step will be added to payroll calculations?",
      "What does Marcus appreciate about the company's response?",
    ],
    trueFalse: [
      { text: "The company sends a memo about new payroll steps.", answer: true },
      { text: "An additional review step will now be required.", answer: true },
      { text: "The company only fixed Marcus's individual issue quietly.", answer: false },
      { text: "Marcus feels this response says something positive about the company.", answer: true },
      { text: "Marcus feels nothing useful came from this experience.", answer: false },
    ],
    buildSentence: [
      { target: "The company sends a short memo.", jumbled: ["The", "company", "sends", "a", "short", "memo."] },
      { target: "I appreciate this response genuinely.", jumbled: ["I", "appreciate", "this", "response", "genuinely."] },
      { target: "Something useful came out of this.", jumbled: ["Something", "useful", "came", "out", "of", "this."] },
      { target: "An additional review step will be required.", jumbled: ["An", "additional", "review", "step", "will", "be", "required."] },
      { target: "This says a lot about how seriously they take trust.", jumbled: ["This", "says", "a", "lot", "about", "how", "seriously", "they", "take", "trust."] },
    ],
    mySentencePrompt: "Write or say one sentence about a company or organization fixing a problem for everyone, not just you.",
    mySentenceExample: "The company fixed the problem for everyone, not just me.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Marcus sitting comfortably at his kitchen table again, calmly reviewing his payslip, relaxed this time.",
    story:
      "Looking back on the whole experience, I realize how differently things could have gone if I had reacted with anger instead of patience. Had I sent an angry, accusatory email that first Monday, the entire process might have felt more tense for everyone involved. Instead, staying calm and communicating clearly allowed Ms. Alvarez to actually help me efficiently and honestly. I've also learned to check my payslip more carefully each month, rather than only glancing at the final total. In the end, this small workplace hiccup taught me something genuinely useful about handling problems calmly and professionally.",
    questions: [
      "What does Marcus realize looking back on the experience?",
      "What has Marcus learned to do each month?",
      "What does Marcus feel this experience taught him?",
    ],
    trueFalse: [
      { text: "Marcus realizes staying calm helped the situation go smoothly.", answer: true },
      { text: "Marcus wishes he had sent an angry email instead.", answer: false },
      { text: "Marcus now checks his payslip more carefully each month.", answer: true },
      { text: "Marcus feels he learned nothing useful from this.", answer: false },
      { text: "Marcus believes staying calm helped resolve things efficiently.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this now.", jumbled: ["I", "look", "back", "on", "this", "now."] },
      { target: "I check my payslip more carefully.", jumbled: ["I", "check", "my", "payslip", "more", "carefully."] },
      { target: "This taught me something genuinely useful.", jumbled: ["This", "taught", "me", "something", "genuinely", "useful."] },
      { target: "Staying calm allowed her to help me efficiently.", jumbled: ["Staying", "calm", "allowed", "her", "to", "help", "me", "efficiently."] },
      { target: "Had I reacted with anger, things might have felt tense.", jumbled: ["Had", "I", "reacted", "with", "anger,", "things", "might", "have", "felt", "tense."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from handling a workplace problem calmly.",
    mySentenceExample: "I learned that handling workplace problems calmly gets better results.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

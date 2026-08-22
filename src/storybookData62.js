// B1 Adults digital storybook, Book 62: "A Billing Dispute"
// Static content -- no Supabase. Sixth book in the B1 Adults batch
// (57-64). Phone-call/customer-service scenario, matching the B1
// Adults spec's explicit "short phone calls / problem explanations"
// skill target and complaint-handling vocabulary. Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "A Billing Dispute";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Tobias sitting on his couch, phone to his ear, looking at a printed utility bill with a circled charge, one hand on his forehead.";

export const CHARACTERS = [
  { name: "Tobias", role: "The narrator, an adult reviewing his monthly bills", look: "Casual home clothes, reading glasses, stack of mail on the coffee table." },
  { name: "Renata", role: "A customer service representative at the utility company", look: "Speaks through a headset, friendly and methodical, clearly experienced." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Unusual Charge",
    image: null,
    imageNote: "Tobias sitting on his couch, sorting through mail, stopping to look closely at one bill with a furrowed brow.",
    story:
      "Sorting through this month's mail, I open my utility bill out of habit, expecting the usual, fairly predictable amount. Instead, the total is nearly double what I normally pay, which immediately catches my attention rather sharply. Scanning the itemized list, I notice an unfamiliar charge labeled simply as a “service adjustment fee.” I don't recall requesting any special service recently, so this label makes very little sense to me. Setting the bill aside for a moment, I decide I'll need to call and ask about this before simply paying it.",
    questions: [
      "What does Tobias open out of habit?",
      "How does the total compare to what he normally pays?",
      "What does Tobias decide he needs to do?",
    ],
    trueFalse: [
      { text: "Tobias opens his utility bill out of habit.", answer: true },
      { text: "The total is nearly double what he normally pays.", answer: true },
      { text: "Tobias immediately recognizes the unfamiliar charge.", answer: false },
      { text: "The charge is labeled a 'service adjustment fee.'", answer: true },
      { text: "Tobias decides to call and ask about the charge.", answer: true },
    ],
    buildSentence: [
      { target: "I open the bill now.", jumbled: ["I", "open", "the", "bill", "now."] },
      { target: "This catches my attention sharply.", jumbled: ["This", "catches", "my", "attention", "sharply."] },
      { target: "I notice an unfamiliar charge here.", jumbled: ["I", "notice", "an", "unfamiliar", "charge", "here."] },
      { target: "This makes very little sense to me.", jumbled: ["This", "makes", "very", "little", "sense", "to", "me."] },
      { target: "I'll need to call and ask about this.", jumbled: ["I'll", "need", "to", "call", "and", "ask", "about", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something unusual on a bill.",
    mySentenceExample: "I noticed something unusual on my monthly bill.",
  },
  {
    number: 2,
    title: "Making the Call",
    image: null,
    imageNote: "Tobias sitting on the couch with the bill on his lap, phone to his ear, listening to a hold message.",
    story:
      "I find the customer service number printed at the bottom of the bill and dial it, expecting a fairly long wait. A recorded message thanks me for calling and explains that all representatives are currently busy helping other customers. I settle in, putting the call on speaker while I gather the bill and a pen for notes. After roughly ten minutes, a friendly voice finally answers, introducing herself as Renata from billing support. I explain briefly that I'm calling about an unfamiliar charge on this month's statement.",
    questions: [
      "Where does Tobias find the customer service number?",
      "What does the recorded message explain?",
      "Who answers the call?",
    ],
    trueFalse: [
      { text: "Tobias finds the number printed at the bottom of the bill.", answer: true },
      { text: "A recorded message says all representatives are busy.", answer: true },
      { text: "Tobias waits roughly ten minutes before someone answers.", answer: true },
      { text: "Renata introduces herself from billing support.", answer: true },
      { text: "Tobias hangs up before anyone answers.", answer: false },
    ],
    buildSentence: [
      { target: "I dial the number now.", jumbled: ["I", "dial", "the", "number", "now."] },
      { target: "I gather a pen for notes.", jumbled: ["I", "gather", "a", "pen", "for", "notes."] },
      { target: "A friendly voice finally answers now.", jumbled: ["A", "friendly", "voice", "finally", "answers", "now."] },
      { target: "I explain briefly why I'm calling.", jumbled: ["I", "explain", "briefly", "why", "I'm", "calling."] },
      { target: "All representatives are currently busy helping customers.", jumbled: ["All", "representatives", "are", "currently", "busy", "helping", "customers."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting on hold before speaking to customer service.",
    mySentenceExample: "I waited on hold before speaking to customer service.",
  },
  {
    number: 3,
    title: "Explaining the Problem",
    image: null,
    imageNote: "Tobias reading numbers off the bill to Renata over the phone, tracing his finger down the itemized list.",
    story:
      "Renata asks for my account number, then patiently waits while I read the unfamiliar charge and its exact amount aloud. “I see the charge you're referring to. Let me look into what generated this on our end,” she says calmly. While she checks, I mention that I haven't requested any additional services or changes recently, as far as I remember. She thanks me for the clarification, explaining that this detail will help her narrow down what actually happened. I appreciate that she doesn't sound defensive, treating my concern instead as something reasonable worth properly investigating.",
    questions: [
      "What does Renata ask Tobias for?",
      "What does Renata say she will do?",
      "What does Tobias mention while she checks?",
    ],
    trueFalse: [
      { text: "Renata asks for Tobias's account number.", answer: true },
      { text: "Renata says she'll look into what generated the charge.", answer: true },
      { text: "Tobias mentions he hasn't requested any additional services.", answer: true },
      { text: "Renata sounds defensive about Tobias's concern.", answer: false },
      { text: "Tobias refuses to explain the charge clearly.", answer: false },
    ],
    buildSentence: [
      { target: "She asks for my account number.", jumbled: ["She", "asks", "for", "my", "account", "number."] },
      { target: "I appreciate that she isn't defensive.", jumbled: ["I", "appreciate", "that", "she", "isn't", "defensive."] },
      { target: "I haven't requested any additional services.", jumbled: ["I", "haven't", "requested", "any", "additional", "services."] },
      { target: "Let me look into what generated this.", jumbled: ["Let", "me", "look", "into", "what", "generated", "this."] },
      { target: "This detail will help her narrow down what happened.", jumbled: ["This", "detail", "will", "help", "her", "narrow", "down", "what", "happened."] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a billing problem clearly on the phone.",
    mySentenceExample: "I explained the billing problem clearly on the phone.",
  },
  {
    number: 4,
    title: "Finding the Cause",
    image: null,
    imageNote: "Renata's side of the call, sitting at a headset desk, looking at her own computer screen while speaking.",
    story:
      "After a couple of minutes, Renata returns with an explanation, though it's honestly not quite what I expected to hear. Apparently, a technician had visited my address last month, and a routine equipment check was mistakenly billed as an extra service. “This shouldn't have been charged at all, and I sincerely apologize for the confusion,” she explains directly. I ask whether this means the entire charge will simply be removed from my account completely. She confirms that yes, she can reverse it immediately, and my next bill will reflect the corrected amount.",
    questions: [
      "What does Renata explain after checking?",
      "What was mistakenly billed as an extra service?",
      "What does Renata confirm she can do?",
    ],
    trueFalse: [
      { text: "A technician had visited Tobias's address last month.", answer: true },
      { text: "A routine equipment check was mistakenly billed as extra service.", answer: true },
      { text: "Renata says the charge was correct after all.", answer: false },
      { text: "Renata confirms she can reverse the charge immediately.", answer: true },
      { text: "Tobias asks if the charge will simply be removed.", answer: true },
    ],
    buildSentence: [
      { target: "She returns with an explanation now.", jumbled: ["She", "returns", "with", "an", "explanation", "now."] },
      { target: "This shouldn't have been charged at all.", jumbled: ["This", "shouldn't", "have", "been", "charged", "at", "all."] },
      { target: "I sincerely apologize for the confusion.", jumbled: ["I", "sincerely", "apologize", "for", "the", "confusion."] },
      { target: "I can reverse it immediately for you.", jumbled: ["I", "can", "reverse", "it", "immediately", "for", "you."] },
      { target: "My next bill will reflect the corrected amount.", jumbled: ["My", "next", "bill", "will", "reflect", "the", "corrected", "amount."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding out the real cause of a billing mistake.",
    mySentenceExample: "I found out the real cause of the billing mistake.",
  },
  {
    number: 5,
    title: "Confirming the Details",
    image: null,
    imageNote: "Tobias writing down a confirmation number on a notepad while still holding the phone to his ear.",
    story:
      "Before ending the call, I ask Renata for a confirmation number, just in case I need proof this conversation actually happened. She provides one immediately, along with a brief written summary that she says will also be emailed to me shortly. “Is there anything else I can help clarify about your account today?” she asks politely before we finish. I mention that everything else on the bill looks correct, so this was genuinely the only issue I had. She thanks me for calling in and confirms the correction should appear within one to two billing cycles.",
    questions: [
      "What does Tobias ask Renata for before ending the call?",
      "What does Renata say will also be emailed to him?",
      "How long does Renata say the correction will take?",
    ],
    trueFalse: [
      { text: "Tobias asks Renata for a confirmation number.", answer: true },
      { text: "Renata says a written summary will be emailed to him.", answer: true },
      { text: "Tobias says other charges on the bill also looked wrong.", answer: false },
      { text: "Renata asks if there's anything else she can help clarify.", answer: true },
      { text: "The correction should appear within one to two billing cycles.", answer: true },
    ],
    buildSentence: [
      { target: "I ask for a confirmation number.", jumbled: ["I", "ask", "for", "a", "confirmation", "number."] },
      { target: "She provides one immediately now.", jumbled: ["She", "provides", "one", "immediately", "now."] },
      { target: "This was genuinely the only issue.", jumbled: ["This", "was", "genuinely", "the", "only", "issue."] },
      { target: "She thanks me for calling in.", jumbled: ["She", "thanks", "me", "for", "calling", "in."] },
      { target: "This should appear within one to two billing cycles.", jumbled: ["This", "should", "appear", "within", "one", "to", "two", "billing", "cycles."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking for confirmation before ending an important phone call.",
    mySentenceExample: "I asked for confirmation before ending the important call.",
  },
  {
    number: 6,
    title: "A Written Follow-Up",
    image: null,
    imageNote: "Tobias checking his email on his laptop, reading a confirmation message from the utility company.",
    story:
      "Later that evening, exactly as promised, an email arrives confirming everything Renata explained during our phone call. The message includes the confirmation number, a brief explanation of the error, and the corrected amount going forward. I appreciate having this in writing, especially in case any question comes up again regarding this specific charge later. I forward the email to myself with a clear subject line, filing it carefully alongside my other important documents. Having everything documented properly gives me a sense of security I honestly hadn't expected from a simple phone call.",
    questions: [
      "What arrives later that evening?",
      "What does the email include?",
      "What does Tobias do with the email?",
    ],
    trueFalse: [
      { text: "An email arrives confirming everything Renata explained.", answer: true },
      { text: "The email includes the confirmation number and explanation.", answer: true },
      { text: "Tobias deletes the email without reading it.", answer: false },
      { text: "Tobias files the email carefully with other documents.", answer: true },
      { text: "Tobias feels no security from having this documented.", answer: false },
    ],
    buildSentence: [
      { target: "An email arrives that evening.", jumbled: ["An", "email", "arrives", "that", "evening."] },
      { target: "I appreciate having this in writing.", jumbled: ["I", "appreciate", "having", "this", "in", "writing."] },
      { target: "I file it carefully now.", jumbled: ["I", "file", "it", "carefully", "now."] },
      { target: "This gives me a sense of security.", jumbled: ["This", "gives", "me", "a", "sense", "of", "security."] },
      { target: "I hadn't expected this from a simple phone call.", jumbled: ["I", "hadn't", "expected", "this", "from", "a", "simple", "phone", "call."] },
    ],
    mySentencePrompt: "Write or say one sentence about keeping written proof of something important.",
    mySentenceExample: "I kept written proof of the important phone call.",
  },
  {
    number: 7,
    title: "Checking the Next Bill",
    image: null,
    imageNote: "Tobias opening his mailbox a month later, pulling out a new bill and opening it right there on the porch.",
    story:
      "A month later, my next bill arrives, and I open it immediately, curious whether the correction was actually applied properly. Scanning the total, I feel relief seeing it matches what I would normally expect to pay each month. The itemized section confirms the service adjustment fee has been completely removed, exactly as Renata had promised. There's also a small note referencing the confirmation number, which reassures me this wasn't simply forgotten or overlooked somehow. Seeing everything corrected properly makes the entire earlier hassle feel considerably less frustrating in hindsight.",
    questions: [
      "What does Tobias do when his next bill arrives?",
      "What does Tobias feel seeing the total?",
      "What does the itemized section confirm?",
    ],
    trueFalse: [
      { text: "Tobias opens his next bill immediately, curious about the correction.", answer: true },
      { text: "The total matches what he would normally expect to pay.", answer: true },
      { text: "The service adjustment fee has been completely removed.", answer: true },
      { text: "There is no reference to the confirmation number at all.", answer: false },
      { text: "Tobias feels the earlier hassle was completely pointless.", answer: false },
    ],
    buildSentence: [
      { target: "My next bill arrives now.", jumbled: ["My", "next", "bill", "arrives", "now."] },
      { target: "I feel relief seeing this.", jumbled: ["I", "feel", "relief", "seeing", "this."] },
      { target: "This has been completely removed now.", jumbled: ["This", "has", "been", "completely", "removed", "now."] },
      { target: "This reassures me it wasn't forgotten.", jumbled: ["This", "reassures", "me", "it", "wasn't", "forgotten."] },
      { target: "This feels considerably less frustrating in hindsight.", jumbled: ["This", "feels", "considerably", "less", "frustrating", "in", "hindsight."] },
    ],
    mySentencePrompt: "Write or say one sentence about checking that a promised correction actually happened.",
    mySentenceExample: "I checked that the promised correction actually happened.",
  },
  {
    number: 8,
    title: "Mentioning It to a Friend",
    image: null,
    imageNote: "Tobias chatting with a friend at a casual dinner table, gesturing while telling the story of the billing dispute.",
    story:
      "Over dinner with a friend, I mention the whole billing situation, partly amused now that it's fully resolved. She admits she usually just pays whatever a bill says, rarely questioning charges even when something looks slightly off. I explain that, in my experience, companies generally want to fix genuine mistakes once they're clearly pointed out. On the other hand, staying silent usually just means quietly overpaying for something that was never actually correct. She laughs, saying she'll probably start double-checking her own bills a little more carefully from now on.",
    questions: [
      "Who does Tobias mention the situation to?",
      "What does the friend admit about her own habits?",
      "What does Tobias explain about companies?",
    ],
    trueFalse: [
      { text: "Tobias mentions the situation to a friend over dinner.", answer: true },
      { text: "The friend admits she usually pays whatever a bill says.", answer: true },
      { text: "Tobias explains companies generally want to fix genuine mistakes.", answer: true },
      { text: "The friend says she'll never check her bills again.", answer: false },
      { text: "Staying silent usually means quietly overpaying, Tobias explains.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this over dinner.", jumbled: ["I", "mention", "this", "over", "dinner."] },
      { target: "She admits this about herself.", jumbled: ["She", "admits", "this", "about", "herself."] },
      { target: "She laughs at this now.", jumbled: ["She", "laughs", "at", "this", "now."] },
      { target: "Companies generally want to fix genuine mistakes.", jumbled: ["Companies", "generally", "want", "to", "fix", "genuine", "mistakes."] },
      { target: "Staying silent usually means quietly overpaying.", jumbled: ["Staying", "silent", "usually", "means", "quietly", "overpaying."] },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging someone to question a bill that looks wrong.",
    mySentenceExample: "I encouraged my friend to question bills that look wrong.",
  },
  {
    number: 9,
    title: "A Habit Worth Keeping",
    image: null,
    imageNote: "Tobias sitting at his kitchen table with a small folder labeled 'Bills,' organizing recent statements.",
    story:
      "Since this experience, I've started a small habit of reviewing every bill line by line before simply setting it aside. It takes only a couple of extra minutes each month, though it genuinely gives me more confidence about my finances overall. I've created a simple folder where I keep confirmation numbers and emails, just in case something similar happens again. Although most months nothing unusual ever appears, having the habit itself feels reassuring rather than tedious or unnecessary. This small routine, born from one frustrating phone call, has quietly become something I genuinely value now.",
    questions: [
      "What habit has Tobias started since this experience?",
      "How long does this habit take each month?",
      "What has Tobias created to keep records?",
    ],
    trueFalse: [
      { text: "Tobias has started reviewing every bill line by line.", answer: true },
      { text: "This habit takes only a couple of extra minutes.", answer: true },
      { text: "Tobias created a folder for confirmation numbers and emails.", answer: true },
      { text: "Tobias finds this habit tedious and unnecessary.", answer: false },
      { text: "Tobias now genuinely values this small routine.", answer: true },
    ],
    buildSentence: [
      { target: "I've started a small habit now.", jumbled: ["I've", "started", "a", "small", "habit", "now."] },
      { target: "This takes only a couple minutes.", jumbled: ["This", "takes", "only", "a", "couple", "minutes."] },
      { target: "I've created a simple folder now.", jumbled: ["I've", "created", "a", "simple", "folder", "now."] },
      { target: "This gives me more confidence overall.", jumbled: ["This", "gives", "me", "more", "confidence", "overall."] },
      { target: "This has quietly become something I genuinely value.", jumbled: ["This", "has", "quietly", "become", "something", "I", "genuinely", "value."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small habit that gives you more confidence about your finances.",
    mySentenceExample: "Checking my bills gives me more confidence about my finances.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Tobias sitting comfortably on his couch, calmly reviewing a bill, relaxed and unbothered this time.",
    story:
      "Looking back on the entire situation, I realize how easily I could have simply paid the incorrect charge without questioning it at all. If I had assumed the bill was automatically correct, I would have quietly overpaid for a mistake that wasn't even mine. Instead, staying curious and calling to ask calmly allowed Renata to actually investigate and fix the real problem. I've learned that questioning an unfamiliar charge politely is always worth the extra ten minutes it takes. In the end, this small dispute taught me something genuinely useful about paying closer attention to my own finances.",
    questions: [
      "What does Tobias realize looking back on this situation?",
      "What might have happened if he had assumed the bill was correct?",
      "What has Tobias learned about questioning unfamiliar charges?",
    ],
    trueFalse: [
      { text: "Tobias realizes he could have simply paid the wrong charge.", answer: true },
      { text: "Assuming the bill was correct would have meant overpaying.", answer: true },
      { text: "Tobias believes questioning a charge politely is worth the time.", answer: true },
      { text: "Tobias feels he learned nothing useful from this dispute.", answer: false },
      { text: "Staying curious allowed Renata to fix the real problem.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this now.", jumbled: ["I", "look", "back", "on", "this", "now."] },
      { target: "This is always worth the extra time.", jumbled: ["This", "is", "always", "worth", "the", "extra", "time."] },
      { target: "This taught me something genuinely useful.", jumbled: ["This", "taught", "me", "something", "genuinely", "useful."] },
      { target: "Staying curious allowed her to fix the problem.", jumbled: ["Staying", "curious", "allowed", "her", "to", "fix", "the", "problem."] },
      { target: "If I had assumed it was correct, I would have overpaid.", jumbled: ["If", "I", "had", "assumed", "it", "was", "correct,", "I", "would", "have", "overpaid."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from questioning a mistake on a bill.",
    mySentenceExample: "I learned that questioning bill mistakes politely usually pays off.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

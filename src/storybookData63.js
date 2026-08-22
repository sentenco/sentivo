// B1 Adults digital storybook, Book 63: "Renewing My Driver's License"
// Static content -- no Supabase. Seventh book in the B1 Adults batch
// (57-64). Bureaucratic-mishap scenario, distinct from the A1 Adults
// bank/post-office books (Books 43, 48) which were smooth first-time
// transactions -- this one centers on a complication (a missing
// document / wrong office) requiring problem-solving, matching B1's
// higher complexity target. Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Renewing My Driver's License";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Yusuf standing at a government office counter, holding a folder of documents, looking at a clerk who is shaking her head apologetically.";

export const CHARACTERS = [
  { name: "Yusuf", role: "The narrator, an adult renewing an expiring license", look: "Button-up shirt, folder of documents tucked under one arm, patient expression." },
  { name: "Ms. Okafor", role: "A clerk at the licensing office", look: "Office uniform, name tag, methodical and precise in how she explains things." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Reminder Letter",
    image: null,
    imageNote: "Yusuf opening an official-looking envelope at his kitchen table, reading a renewal notice with mild concern.",
    story:
      "Among this week's mail, I find an official letter reminding me that my driver's license expires in exactly three weeks. I've been meaning to renew it for a while now, so I decide today would be a reasonable day to finally handle it. The letter lists several required documents, including proof of address, my current license, and a recent passport photo. I gather what I believe are all the necessary papers, placing them carefully into a folder by the door. Confident I'm well prepared, I plan to visit the licensing office first thing tomorrow morning.",
    questions: [
      "What does Yusuf find among this week's mail?",
      "How long until his license expires?",
      "What does Yusuf do with the documents he gathers?",
    ],
    trueFalse: [
      { text: "Yusuf finds an official letter about his license expiring.", answer: true },
      { text: "His license expires in exactly three weeks.", answer: true },
      { text: "Yusuf decides to ignore the letter completely.", answer: false },
      { text: "Yusuf places the documents carefully into a folder.", answer: true },
      { text: "Yusuf plans to visit the office tomorrow morning.", answer: true },
    ],
    buildSentence: [
      { target: "I find an official letter today.", jumbled: ["I", "find", "an", "official", "letter", "today."] },
      { target: "I gather the necessary papers now.", jumbled: ["I", "gather", "the", "necessary", "papers", "now."] },
      { target: "I'm well prepared for this.", jumbled: ["I'm", "well", "prepared", "for", "this."] },
      { target: "My license expires in three weeks.", jumbled: ["My", "license", "expires", "in", "three", "weeks."] },
      { target: "I plan to visit the office tomorrow morning.", jumbled: ["I", "plan", "to", "visit", "the", "office", "tomorrow", "morning."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing documents for an official task.",
    mySentenceExample: "I prepared documents carefully for the official task.",
  },
  {
    number: 2,
    title: "Arriving at the Office",
    image: null,
    imageNote: "Yusuf standing in a busy government office lobby, taking a numbered ticket from a dispenser, looking around at the waiting area.",
    story:
      "The licensing office is busier than I expected, with a long row of chairs already filled by other waiting visitors. I take a numbered ticket from the dispenser near the entrance and find an open seat toward the back. Glancing at the screen above the counters, I see they're currently serving numbers considerably lower than mine. Settling in for what will likely be a long wait, I pull out my phone to pass the time productively. After nearly forty minutes, my number finally appears, and I walk confidently toward the assigned counter.",
    questions: [
      "How does Yusuf describe the licensing office?",
      "What does Yusuf take near the entrance?",
      "How long does Yusuf wait before his number appears?",
    ],
    trueFalse: [
      { text: "The licensing office is busier than Yusuf expected.", answer: true },
      { text: "Yusuf takes a numbered ticket from a dispenser.", answer: true },
      { text: "Yusuf's number is called almost immediately.", answer: false },
      { text: "Yusuf waits nearly forty minutes before his number appears.", answer: true },
      { text: "Yusuf walks confidently toward the assigned counter.", answer: true },
    ],
    buildSentence: [
      { target: "I take a numbered ticket now.", jumbled: ["I", "take", "a", "numbered", "ticket", "now."] },
      { target: "I find an open seat nearby.", jumbled: ["I", "find", "an", "open", "seat", "nearby."] },
      { target: "My number finally appears now.", jumbled: ["My", "number", "finally", "appears", "now."] },
      { target: "This will likely be a long wait.", jumbled: ["This", "will", "likely", "be", "a", "long", "wait."] },
      { target: "I walk confidently toward the assigned counter.", jumbled: ["I", "walk", "confidently", "toward", "the", "assigned", "counter."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently at a busy office.",
    mySentenceExample: "I waited patiently at a busy government office.",
  },
  {
    number: 3,
    title: "A Missing Document",
    image: null,
    imageNote: "Ms. Okafor looking through Yusuf's folder at the counter, pausing with a concerned expression as she checks a document.",
    story:
      "Ms. Okafor greets me politely and begins reviewing my documents one by one, checking each against her list carefully. Everything seems fine until she pauses, mentioning that my proof of address is actually more than three months old. “Unfortunately, this particular document needs to be more recent than what you've brought today,” she explains apologetically. My stomach sinks slightly, since I genuinely believed I had prepared everything correctly beforehand. I ask whether there's any way around this requirement, hoping perhaps a different document might work instead.",
    questions: [
      "What does Ms. Okafor do when reviewing Yusuf's documents?",
      "What problem does she find with his proof of address?",
      "What does Yusuf ask Ms. Okafor?",
    ],
    trueFalse: [
      { text: "Ms. Okafor checks each document against her list carefully.", answer: true },
      { text: "His proof of address is more than three months old.", answer: true },
      { text: "Ms. Okafor says the document needs to be more recent.", answer: true },
      { text: "Yusuf feels completely confident nothing is wrong.", answer: false },
      { text: "Yusuf asks whether a different document might work.", answer: true },
    ],
    buildSentence: [
      { target: "She reviews my documents carefully.", jumbled: ["She", "reviews", "my", "documents", "carefully."] },
      { target: "My stomach sinks slightly now.", jumbled: ["My", "stomach", "sinks", "slightly", "now."] },
      { target: "I ask about this requirement now.", jumbled: ["I", "ask", "about", "this", "requirement", "now."] },
      { target: "This needs to be more recent.", jumbled: ["This", "needs", "to", "be", "more", "recent."] },
      { target: "I genuinely believed I had prepared everything correctly.", jumbled: ["I", "genuinely", "believed", "I", "had", "prepared", "everything", "correctly."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering a document you needed wasn't accepted.",
    mySentenceExample: "I discovered my document wasn't accepted at the counter.",
  },
  {
    number: 4,
    title: "Exploring Options",
    image: null,
    imageNote: "Ms. Okafor explaining alternative documents to Yusuf, both looking at a printed checklist on the counter.",
    story:
      "Ms. Okafor checks a printed list of acceptable alternatives, explaining that a recent utility bill or bank statement could also work instead. Unfortunately, I don't have either of those with me, having only brought exactly what the original letter specified. “Would it be possible for me to bring the correct document tomorrow instead?” I ask, trying to stay patient despite my frustration. She confirms that yes, I can return with an updated document without needing to wait in line again. She writes a small note on my file, explaining that most of my paperwork has already been verified today.",
    questions: [
      "What alternatives does Ms. Okafor mention?",
      "Does Yusuf have either alternative document with him?",
      "What does Yusuf ask Ms. Okafor?",
    ],
    trueFalse: [
      { text: "A recent utility bill or bank statement could also work.", answer: true },
      { text: "Yusuf has one of these alternatives with him.", answer: false },
      { text: "Yusuf asks if he can bring the document tomorrow instead.", answer: true },
      { text: "Ms. Okafor confirms he can return without waiting in line again.", answer: true },
      { text: "Ms. Okafor refuses to write any note about today's visit.", answer: false },
    ],
    buildSentence: [
      { target: "She checks a printed list now.", jumbled: ["She", "checks", "a", "printed", "list", "now."] },
      { target: "I try to stay patient here.", jumbled: ["I", "try", "to", "stay", "patient", "here."] },
      { target: "She writes a small note now.", jumbled: ["She", "writes", "a", "small", "note", "now."] },
      { target: "Most of my paperwork is already verified.", jumbled: ["Most", "of", "my", "paperwork", "is", "already", "verified."] },
      { target: "Would it be possible to bring the document tomorrow?", jumbled: ["Would", "it", "be", "possible", "to", "bring", "the", "document", "tomorrow?"] },
    ],
    mySentencePrompt: "Write or say one sentence about finding an alternative solution to a paperwork problem.",
    mySentenceExample: "I found an alternative solution to my paperwork problem.",
  },
  {
    number: 5,
    title: "A Small Setback",
    image: null,
    imageNote: "Yusuf walking out of the office, folder under his arm, checking his phone with a slightly frustrated expression.",
    story:
      "Walking back to my car, I feel mildly annoyed that a single overlooked detail cost me an entire trip to the office. On the other hand, I remind myself that this wasn't really such a serious problem, all things considered. I search my email for a recent utility bill I could print at home, hoping to have everything ready by tomorrow. Fortunately, I find one from just two weeks ago, which should easily satisfy the office's recency requirement. Feeling somewhat better about the situation, I head home to print the document before I forget completely.",
    questions: [
      "How does Yusuf feel walking back to his car?",
      "What does Yusuf search his email for?",
      "How old is the utility bill Yusuf finds?",
    ],
    trueFalse: [
      { text: "Yusuf feels mildly annoyed about the wasted trip.", answer: true },
      { text: "Yusuf searches his email for a recent utility bill.", answer: true },
      { text: "Yusuf cannot find any recent utility bill at all.", answer: false },
      { text: "The utility bill he finds is from just two weeks ago.", answer: true },
      { text: "Yusuf heads home to print the document.", answer: true },
    ],
    buildSentence: [
      { target: "I feel mildly annoyed now.", jumbled: ["I", "feel", "mildly", "annoyed", "now."] },
      { target: "I search my email now.", jumbled: ["I", "search", "my", "email", "now."] },
      { target: "I head home to print this.", jumbled: ["I", "head", "home", "to", "print", "this."] },
      { target: "This wasn't really such a serious problem.", jumbled: ["This", "wasn't", "really", "such", "a", "serious", "problem."] },
      { target: "This should easily satisfy the recency requirement.", jumbled: ["This", "should", "easily", "satisfy", "the", "recency", "requirement."] },
    ],
    mySentencePrompt: "Write or say one sentence about handling a small setback without getting too upset.",
    mySentenceExample: "I handled the small setback without getting too upset.",
  },
  {
    number: 6,
    title: "Returning the Next Day",
    image: null,
    imageNote: "Yusuf walking back into the licensing office the next morning, folder in hand, looking more confident this time.",
    story:
      "The next morning, I return to the office with my printed utility bill tucked safely inside the folder alongside everything else. As Ms. Okafor promised, I don't need to take another number, since a staff member directs me straight to her counter. She reviews the new document quickly, confirming this time that everything actually meets the requirement properly. “Perfect, this should work just fine,” she says, sounding genuinely pleased that the issue has been resolved so easily. Relief washes over me, especially knowing I won't need to make yet another separate trip.",
    questions: [
      "What does Yusuf bring with him the next morning?",
      "Does Yusuf need to take another number this time?",
      "What does Ms. Okafor say about the new document?",
    ],
    trueFalse: [
      { text: "Yusuf brings his printed utility bill the next morning.", answer: true },
      { text: "Yusuf needs to take another number and wait again.", answer: false },
      { text: "Ms. Okafor confirms everything meets the requirement now.", answer: true },
      { text: "Ms. Okafor sounds genuinely pleased the issue is resolved.", answer: true },
      { text: "Yusuf feels no relief about avoiding another trip.", answer: false },
    ],
    buildSentence: [
      { target: "I return to the office now.", jumbled: ["I", "return", "to", "the", "office", "now."] },
      { target: "Relief washes over me now.", jumbled: ["Relief", "washes", "over", "me", "now."] },
      { target: "This should work just fine.", jumbled: ["This", "should", "work", "just", "fine."] },
      { target: "She reviews the new document quickly.", jumbled: ["She", "reviews", "the", "new", "document", "quickly."] },
      { target: "I won't need to make another separate trip.", jumbled: ["I", "won't", "need", "to", "make", "another", "separate", "trip."] },
    ],
    mySentencePrompt: "Write or say one sentence about successfully fixing a problem after returning with the right documents.",
    mySentenceExample: "I successfully fixed the problem by returning with the right documents.",
  },
  {
    number: 7,
    title: "Finishing the Application",
    image: null,
    imageNote: "Yusuf sitting for a photo booth-style camera at the office counter, Ms. Okafor adjusting the equipment nearby.",
    story:
      "With the documents finally settled, Ms. Okafor moves quickly through the rest of the application process without further complications. She takes my photo using a small camera mounted beside her desk, asking me to remove my glasses briefly. I sign a few forms electronically, confirming my current address and agreeing to the office's standard terms and conditions. She explains that my new license should arrive by mail within roughly ten business days from today. Thanking her for her patience throughout this entire process, I gather my folder and head back outside.",
    questions: [
      "What does Ms. Okafor do with the small camera?",
      "What does Yusuf sign electronically?",
      "How long will it take for the new license to arrive?",
    ],
    trueFalse: [
      { text: "Ms. Okafor takes Yusuf's photo using a small camera.", answer: true },
      { text: "Yusuf signs a few forms electronically.", answer: true },
      { text: "The new license should arrive within ten business days.", answer: true },
      { text: "Yusuf refuses to thank Ms. Okafor for her patience.", answer: false },
      { text: "The process runs into further complications after this.", answer: false },
    ],
    buildSentence: [
      { target: "She takes my photo now.", jumbled: ["She", "takes", "my", "photo", "now."] },
      { target: "I sign a few forms electronically.", jumbled: ["I", "sign", "a", "few", "forms", "electronically."] },
      { target: "I thank her for her patience.", jumbled: ["I", "thank", "her", "for", "her", "patience."] },
      { target: "This should arrive within ten business days.", jumbled: ["This", "should", "arrive", "within", "ten", "business", "days."] },
      { target: "She moves quickly through the rest of the process.", jumbled: ["She", "moves", "quickly", "through", "the", "rest", "of", "the", "process."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally completing an official process after some difficulty.",
    mySentenceExample: "I finally completed the official process after some difficulty.",
  },
  {
    number: 8,
    title: "Telling a Coworker",
    image: null,
    imageNote: "Yusuf chatting with a coworker at the office water cooler, gesturing as he describes the two trips to the licensing office.",
    story:
      "Back at work, I mention the whole license renewal story to a coworker, half complaining and half laughing about it now. She admits she went through something similar last year, needing three separate visits before finally getting hers sorted properly. We joke that government offices seem to specialize in requiring exactly the one document you didn't think to bring. On the other hand, she points out that checking the requirements list twice beforehand probably saves people the most hassle overall. I make a mental note to always double-check document dates carefully for anything official going forward.",
    questions: [
      "Who does Yusuf mention the story to at work?",
      "What does the coworker admit about her own experience?",
      "What mental note does Yusuf make?",
    ],
    trueFalse: [
      { text: "Yusuf mentions the story to a coworker at work.", answer: true },
      { text: "The coworker needed three separate visits last year.", answer: true },
      { text: "The coworker says checking requirements twice saves hassle.", answer: true },
      { text: "Yusuf decides never to double-check documents again.", answer: false },
      { text: "Yusuf makes a note to double-check document dates carefully.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this story now.", jumbled: ["I", "mention", "this", "story", "now."] },
      { target: "She admits this about herself.", jumbled: ["She", "admits", "this", "about", "herself."] },
      { target: "We joke about this together.", jumbled: ["We", "joke", "about", "this", "together."] },
      { target: "I make a mental note now.", jumbled: ["I", "make", "a", "mental", "note", "now."] },
      { target: "Checking requirements twice probably saves the most hassle.", jumbled: ["Checking", "requirements", "twice", "probably", "saves", "the", "most", "hassle."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning from a coworker who had a similar experience.",
    mySentenceExample: "I learned from a coworker who had a similar experience.",
  },
  {
    number: 9,
    title: "The License Arrives",
    image: null,
    imageNote: "Yusuf checking his mailbox at home, pulling out an envelope, opening it to reveal his new driver's license.",
    story:
      "Exactly nine days later, I find an envelope from the licensing office waiting in my mailbox after work. Opening it carefully, I slide out my brand new license, checking that all the details are printed correctly this time. Everything looks accurate, including my updated address and a photo that's honestly better than my old one. I tuck the new license into my wallet, finally replacing the expired one I'd been carrying around nervously. This small piece of plastic represents an oddly satisfying conclusion to what felt like an unnecessarily complicated process.",
    questions: [
      "How many days later does the envelope arrive?",
      "What does Yusuf check on the new license?",
      "What does Yusuf do with the new license?",
    ],
    trueFalse: [
      { text: "The envelope arrives exactly nine days later.", answer: true },
      { text: "Yusuf checks that all the details are printed correctly.", answer: true },
      { text: "Yusuf finds his address is printed incorrectly.", answer: false },
      { text: "Yusuf tucks the new license into his wallet.", answer: true },
      { text: "Yusuf feels this conclusion is oddly satisfying.", answer: true },
    ],
    buildSentence: [
      { target: "I find an envelope today.", jumbled: ["I", "find", "an", "envelope", "today."] },
      { target: "Everything looks accurate now.", jumbled: ["Everything", "looks", "accurate", "now."] },
      { target: "I tuck the license into my wallet.", jumbled: ["I", "tuck", "the", "license", "into", "my", "wallet."] },
      { target: "This felt like an unnecessarily complicated process.", jumbled: ["This", "felt", "like", "an", "unnecessarily", "complicated", "process."] },
      { target: "This represents an oddly satisfying conclusion.", jumbled: ["This", "represents", "an", "oddly", "satisfying", "conclusion."] },
    ],
    mySentencePrompt: "Write or say one sentence about the satisfaction of finally receiving something you worked for.",
    mySentenceExample: "I felt satisfied finally receiving my new license in the mail.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Yusuf sitting at his kitchen table again, calmly filing away his old license and paperwork into a folder.",
    story:
      "Looking back on the entire process, I realize how a single overlooked document turned a simple errand into a two-day ordeal. If I had double-checked the exact requirements more carefully beforehand, I likely could have avoided the wasted first trip entirely. However, staying calm and asking clear questions at the counter allowed me to fix the mistake without unnecessary stress. I've since created a small checklist for official documents, listing exactly what's needed before I ever leave the house. In the end, this minor bureaucratic hiccup taught me something genuinely useful about preparing thoroughly for official tasks.",
    questions: [
      "What does Yusuf realize looking back on the process?",
      "What might have helped him avoid the wasted first trip?",
      "What has Yusuf created since this experience?",
    ],
    trueFalse: [
      { text: "A single overlooked document turned this into a two-day ordeal.", answer: true },
      { text: "Double-checking requirements might have avoided the wasted trip.", answer: true },
      { text: "Yusuf has created a small checklist for official documents.", answer: true },
      { text: "Yusuf feels he learned nothing useful from this experience.", answer: false },
      { text: "Staying calm allowed him to fix the mistake without stress.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process.", jumbled: ["I", "look", "back", "on", "this", "process."] },
      { target: "I've created a small checklist now.", jumbled: ["I've", "created", "a", "small", "checklist", "now."] },
      { target: "This taught me something genuinely useful.", jumbled: ["This", "taught", "me", "something", "genuinely", "useful."] },
      { target: "Staying calm allowed me to fix the mistake.", jumbled: ["Staying", "calm", "allowed", "me", "to", "fix", "the", "mistake."] },
      { target: "If I had double-checked, I could have avoided this trip.", jumbled: ["If", "I", "had", "double-checked,", "I", "could", "have", "avoided", "this", "trip."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from a bureaucratic mistake or delay.",
    mySentenceExample: "I learned to prepare thoroughly for official tasks in advance.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

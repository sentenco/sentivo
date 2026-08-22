// A1 Adults digital storybook, Book 43: "A Trip to the Bank"
// Static content -- no Supabase. Third book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Trip to the Bank";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Derek standing at a bank counter, handing papers to a bank teller, a number ticket in his other hand, other customers waiting on chairs nearby.";

export const CHARACTERS = [
  { name: "Derek", role: "The narrator, an adult", look: "Simple jacket, folder of papers under his arm, a little unsure but trying to stay calm." },
  { name: "Ms. Reyes", role: "A bank teller", look: "Bank uniform, name badge, patient and clear when explaining things." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Task",
    image: null,
    imageNote: "Derek sitting at his kitchen table, looking at bank papers and his ID card, a laptop open in front of him.",
    story:
      "This week, I need to open a new bank account for my paycheck. I have never done this before, so I feel a little nervous about it. I look online and find the bank's address near my apartment. I gather my ID card and some important papers I might need. I put everything into a folder so I do not lose anything important. My friend tells me the bank visit is usually quick and simple. Still, I want to be ready with all the right documents. I check the folder one more time before I leave my apartment.",
    questions: [
      "What does Derek need to do this week?",
      "How does Derek feel about this task?",
      "What does Derek put into a folder?",
    ],
    trueFalse: [
      { text: "Derek needs to open a new bank account.", answer: true },
      { text: "Derek has done this many times before.", answer: false },
      { text: "Derek gathers his ID card and papers.", answer: true },
      { text: "Derek's friend says the visit is usually quick.", answer: true },
      { text: "Derek leaves without checking his folder.", answer: false },
    ],
    buildSentence: [
      { target: "I feel a little nervous.", jumbled: ["feel", "a", "I", "little", "nervous."] },
      { target: "I gather my important papers.", jumbled: ["gather", "my", "I", "important", "papers."] },
      { target: "I find the bank's address.", jumbled: ["find", "the", "I", "bank's", "address."] },
      { target: "I want to be ready.", jumbled: ["want", "to", "I", "be", "ready."] },
      { target: "I check the folder one more time.", jumbled: ["I", "check", "the", "folder", "one", "more", "time."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing for a new task.",
    mySentenceExample: "I gather everything I need before starting a new task.",
  },
  {
    number: 2,
    title: "Arriving at the Bank",
    image: null,
    imageNote: "Derek walking through the entrance of a bank building, a security guard nodding as he passes a line of chairs.",
    story:
      "I arrive at the bank around ten in the morning, hoping it is not too busy yet. The building is large, with big glass doors and a security guard near the entrance. I walk inside and see rows of chairs where some people are already waiting. A machine near the door prints small paper tickets with numbers on them. I take a ticket and check the number carefully: it says thirty-two. I look at a screen that shows the number currently being helped. It says twenty-eight, so I know I still have a short wait ahead.",
    questions: [
      "What time does Derek arrive at the bank?",
      "What does the machine near the door do?",
      "What number is on Derek's ticket?",
    ],
    trueFalse: [
      { text: "Derek arrives at the bank around ten in the morning.", answer: true },
      { text: "The bank has no waiting area at all.", answer: false },
      { text: "A machine prints paper tickets with numbers.", answer: true },
      { text: "Derek's ticket number is thirty-two.", answer: true },
      { text: "The screen shows number fifty being helped.", answer: false },
    ],
    buildSentence: [
      { target: "I arrive at the bank.", jumbled: ["arrive", "at", "I", "the", "bank."] },
      { target: "I take a ticket.", jumbled: ["take", "a", "I", "ticket."] },
      { target: "I check the number carefully.", jumbled: ["check", "the", "I", "number", "carefully."] },
      { target: "Some people are already waiting.", jumbled: ["Some", "people", "are", "already", "waiting."] },
      { target: "I know I still have a short wait.", jumbled: ["I", "know", "I", "still", "have", "a", "short", "wait."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting for your turn somewhere.",
    mySentenceExample: "I waited for my turn at the doctor's office yesterday.",
  },
  {
    number: 3,
    title: "Waiting My Turn",
    image: null,
    imageNote: "Derek sitting in a waiting chair, checking his phone occasionally, looking up at a digital number screen on the wall.",
    story:
      "I sit down on one of the chairs and check my phone while I wait. Time passes slowly, and I watch the number on the screen change every few minutes. A woman next to me is also waiting, and we talk a little about the weather outside. This small conversation helps the time pass more quickly than I expect. I look up again, and the screen finally shows number thirty-one. My turn is almost here now, and I feel my nervousness returning a little. I take a deep breath and gather my folder, getting ready to stand up.",
    questions: [
      "What does Derek do while he waits?",
      "Who does Derek talk to while waiting?",
      "What number does the screen show?",
    ],
    trueFalse: [
      { text: "Derek checks his phone while waiting.", answer: true },
      { text: "Derek refuses to talk to anyone nearby.", answer: false },
      { text: "The screen finally shows number thirty-one.", answer: true },
      { text: "Derek feels no nervousness at all now.", answer: false },
      { text: "Derek takes a deep breath and gathers his folder.", answer: true },
    ],
    buildSentence: [
      { target: "I sit down here.", jumbled: ["sit", "down", "I", "here."] },
      { target: "Time passes slowly today.", jumbled: ["passes", "slowly", "Time", "today."] },
      { target: "We talk about the weather.", jumbled: ["talk", "about", "We", "the", "weather."] },
      { target: "I take a deep breath.", jumbled: ["take", "a", "I", "deep", "breath."] },
      { target: "My turn is almost here now.", jumbled: ["My", "turn", "is", "almost", "here", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about a short conversation that made time pass quickly.",
    mySentenceExample: "A short conversation with a stranger made my wait pass quickly.",
  },
  {
    number: 4,
    title: "Meeting Ms. Reyes",
    image: null,
    imageNote: "Derek sitting across from Ms. Reyes at a bank counter, both looking at his ID card and paperwork on the desk.",
    story:
      "The number thirty-two finally appears, and I walk toward the counter with my folder. A friendly bank worker named Ms. Reyes greets me with a warm smile. “How can I help you today?” she asks kindly, and I explain that I want to open a new account. She nods and asks for my ID card, which I hand her carefully from my folder. She types something into her computer and checks my information slowly and clearly. “Everything looks good so far,” she says, making me feel a little more relaxed about the whole process.",
    questions: [
      "Who greets Derek at the counter?",
      "What does Derek explain to Ms. Reyes?",
      "What does Ms. Reyes ask for?",
    ],
    trueFalse: [
      { text: "Ms. Reyes greets Derek with a warm smile.", answer: true },
      { text: "Derek says he wants to close an account.", answer: false },
      { text: "Ms. Reyes asks for Derek's ID card.", answer: true },
      { text: "Ms. Reyes ignores Derek's information completely.", answer: false },
      { text: "Derek feels more relaxed after hearing her.", answer: true },
    ],
    buildSentence: [
      { target: "She greets me warmly.", jumbled: ["greets", "me", "She", "warmly."] },
      { target: "I hand her my card.", jumbled: ["hand", "her", "I", "my", "card."] },
      { target: "I want to open an account.", jumbled: ["want", "to", "I", "open", "an", "account."] },
      { target: "She checks my information slowly.", jumbled: ["checks", "my", "She", "information", "slowly."] },
      { target: "Everything looks good so far, she says.", jumbled: ["looks", "good", "Everything", "so", "far,", "she", "says."] },
    ],
    mySentencePrompt: "Write or say one sentence about being helped by a friendly worker.",
    mySentenceExample: "A friendly worker helped me find the right form to fill out.",
  },
  {
    number: 5,
    title: "Filling Out Forms",
    image: null,
    imageNote: "Derek carefully writing on a paper form at the bank counter, Ms. Reyes pointing at a specific line for him to sign.",
    story:
      "Ms. Reyes gives me a short form to fill out with my personal information. I write my name, address, and phone number carefully in the correct boxes. Some questions on the form confuse me a little, so I ask her for help. She explains each question patiently, and I understand everything much better now. “Just sign here at the bottom,” she says, pointing to a small line on the page. I sign my name carefully and hand the form back to her. Filling out forms feels easier when someone explains things clearly like Ms. Reyes does.",
    questions: [
      "What does Ms. Reyes give Derek?",
      "What does Derek write in the boxes?",
      "What does Derek do when questions confuse him?",
    ],
    trueFalse: [
      { text: "Ms. Reyes gives Derek a short form.", answer: true },
      { text: "Derek writes his name, address, and phone number.", answer: true },
      { text: "Derek refuses to ask any questions.", answer: false },
      { text: "Derek signs his name at the bottom.", answer: true },
      { text: "Filling out forms feels harder with her help.", answer: false },
    ],
    buildSentence: [
      { target: "I fill out a form.", jumbled: ["fill", "out", "I", "a", "form."] },
      { target: "I ask her for help.", jumbled: ["ask", "her", "I", "for", "help."] },
      { target: "I sign my name carefully.", jumbled: ["sign", "my", "I", "name", "carefully."] },
      { target: "She explains each question patiently.", jumbled: ["She", "explains", "each", "question", "patiently."] },
      { target: "This feels easier when someone explains clearly.", jumbled: ["This", "feels", "easier", "when", "someone", "explains", "clearly."] },
    ],
    mySentencePrompt: "Write or say one sentence about filling out an important form.",
    mySentenceExample: "I filled out an important form for my new job.",
  },
  {
    number: 6,
    title: "A Question About Money",
    image: null,
    imageNote: "Derek counting cash to deposit at the counter while Ms. Reyes explains something on a small printed pamphlet, both looking at the numbers together.",
    story:
      "Ms. Reyes asks how much money I want to put into my new account today. I take out the cash I brought and count it carefully on the counter. She explains the account has no monthly fee if I keep a small amount inside it. I did not know this detail before, so I feel glad she explained it clearly. She also gives me a small pamphlet with more information to read later. I ask a few more questions about using the account online. She answers everything patiently, and I begin to feel confident about my choice.",
    questions: [
      "What does Ms. Reyes ask Derek?",
      "What does Ms. Reyes explain about the account?",
      "What does Ms. Reyes give Derek?",
    ],
    trueFalse: [
      { text: "Ms. Reyes asks how much money Derek wants to deposit.", answer: true },
      { text: "The account always has a large monthly fee.", answer: false },
      { text: "Ms. Reyes gives Derek a small pamphlet.", answer: true },
      { text: "Derek asks no further questions at all.", answer: false },
      { text: "Derek begins to feel confident about his choice.", answer: true },
    ],
    buildSentence: [
      { target: "I count the cash carefully.", jumbled: ["count", "the", "I", "cash", "carefully."] },
      { target: "I feel glad she explained.", jumbled: ["feel", "glad", "I", "she", "explained."] },
      { target: "She gives me a pamphlet.", jumbled: ["gives", "me", "She", "a", "pamphlet."] },
      { target: "I ask a few more questions.", jumbled: ["ask", "a", "I", "few", "more", "questions."] },
      { target: "I begin to feel confident about my choice.", jumbled: ["I", "begin", "to", "feel", "confident", "about", "my", "choice."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning new information that helped you.",
    mySentenceExample: "Learning about the fee helped me choose the right account.",
  },
  {
    number: 7,
    title: "Getting a New Card",
    image: null,
    imageNote: "Ms. Reyes handing Derek a new debit card across the counter, Derek smiling and holding it carefully.",
    story:
      "After completing the paperwork, Ms. Reyes tells me my account is officially open now. She explains that a debit card will arrive by mail within one week. To my surprise, she also gives me a temporary card I can use right away today. I hold the small plastic card carefully, feeling excited about this new step. “Remember to set a secret number for it later,” she reminds me kindly. I nod and put the card safely into my wallet. This whole process feels much easier than I expected it to be earlier this morning.",
    questions: [
      "What does Ms. Reyes tell Derek about his account?",
      "What does Ms. Reyes give Derek to use today?",
      "What does Ms. Reyes remind Derek to do?",
    ],
    trueFalse: [
      { text: "Derek's account is officially open now.", answer: true },
      { text: "The permanent card arrives immediately with no wait.", answer: false },
      { text: "Ms. Reyes gives Derek a temporary card today.", answer: true },
      { text: "Ms. Reyes reminds Derek to set a secret number.", answer: true },
      { text: "This process feels harder than Derek expected.", answer: false },
    ],
    buildSentence: [
      { target: "My account is open now.", jumbled: ["account", "is", "My", "open", "now."] },
      { target: "I hold the card carefully.", jumbled: ["hold", "the", "I", "card", "carefully."] },
      { target: "I feel excited about this.", jumbled: ["feel", "excited", "I", "about", "this."] },
      { target: "I put the card in my wallet.", jumbled: ["put", "the", "I", "card", "in", "my", "wallet."] },
      { target: "This feels much easier than I expected.", jumbled: ["This", "feels", "much", "easier", "than", "I", "expected."] },
    ],
    mySentencePrompt: "Write or say one sentence about completing a task that felt easier than expected.",
    mySentenceExample: "Fixing my bike felt easier than I expected once I started.",
  },
  {
    number: 8,
    title: "A Few Last Questions",
    image: null,
    imageNote: "Derek pointing at a phone app screen while Ms. Reyes explains something, both looking at the small screen together at the counter.",
    story:
      "Before leaving, I ask Ms. Reyes about the bank's mobile app on my phone. She shows me how to download it and explains the basic features clearly. I can check my balance, send money, and see recent activity right from my phone. This makes managing my account much more convenient for my busy schedule. She also tells me about the bank's hours and where to find help if needed. I thank her sincerely for her patience and clear explanations today. Standing up from the chair, I feel proud of completing this important task successfully.",
    questions: [
      "What does Derek ask about before leaving?",
      "What can Derek do with the mobile app?",
      "How does Derek feel about completing this task?",
    ],
    trueFalse: [
      { text: "Derek asks about the bank's mobile app.", answer: true },
      { text: "The app lets Derek check his balance.", answer: true },
      { text: "Ms. Reyes refuses to explain the app.", answer: false },
      { text: "Derek thanks Ms. Reyes for her patience.", answer: true },
      { text: "Derek feels disappointed about completing this task.", answer: false },
    ],
    buildSentence: [
      { target: "I ask about the app.", jumbled: ["ask", "about", "I", "the", "app."] },
      { target: "I thank her sincerely today.", jumbled: ["thank", "her", "I", "sincerely", "today."] },
      { target: "I can check my balance.", jumbled: ["can", "check", "I", "my", "balance."] },
      { target: "This makes managing my account convenient.", jumbled: ["This", "makes", "managing", "my", "account", "convenient."] },
      { target: "I feel proud of completing this task successfully.", jumbled: ["I", "feel", "proud", "of", "completing", "this", "task", "successfully."] },
    ],
    mySentencePrompt: "Write or say one sentence about using an app to make your life easier.",
    mySentenceExample: "I use an app to check my bus schedule every morning.",
  },
  {
    number: 9,
    title: "Leaving the Bank",
    image: null,
    imageNote: "Derek walking out of the bank's glass doors, checking his wallet with the new card visible, sunshine outside.",
    story:
      "I say goodbye to Ms. Reyes and walk toward the bank's large glass doors. Outside, the sun feels warm on my face after sitting inside for almost an hour. I check my wallet one more time to make sure my new card is safely inside. My folder is now empty since I gave all my papers to Ms. Reyes earlier. Walking to my car, I feel a small sense of accomplishment about this simple errand. It seemed complicated this morning, but it turned out to be manageable after all. I already feel ready to use my new account soon.",
    questions: [
      "How does the sun feel to Derek outside?",
      "What does Derek check in his wallet?",
      "How does Derek feel about the errand now?",
    ],
    trueFalse: [
      { text: "The sun feels warm on Derek's face.", answer: true },
      { text: "Derek forgets to check his wallet.", answer: false },
      { text: "Derek's folder is now empty.", answer: true },
      { text: "Derek feels a small sense of accomplishment.", answer: true },
      { text: "Derek thinks the errand was impossible to finish.", answer: false },
    ],
    buildSentence: [
      { target: "I say goodbye now.", jumbled: ["say", "goodbye", "I", "now."] },
      { target: "The sun feels warm today.", jumbled: ["sun", "feels", "The", "warm", "today."] },
      { target: "I check my wallet again.", jumbled: ["check", "my", "I", "wallet", "again."] },
      { target: "I feel a sense of accomplishment.", jumbled: ["I", "feel", "a", "sense", "of", "accomplishment."] },
      { target: "It turned out to be manageable after all.", jumbled: ["It", "turned", "out", "to", "be", "manageable", "after", "all."] },
    ],
    mySentencePrompt: "Write or say one sentence about an errand that felt easier than you thought.",
    mySentenceExample: "Renewing my ID felt easier than I thought it would be.",
  },
  {
    number: 10,
    title: "My New Account",
    image: null,
    imageNote: "Derek sitting at home, checking his new bank app on his phone with a satisfied smile, the temporary card resting on the table.",
    story:
      "That evening, I sit on my couch and open the new banking app on my phone. I log in for the first time and see my new account clearly on the screen. It feels strange but exciting to see my own account after only one visit today. I remember how nervous I felt this morning before going to the bank. Looking back, the whole process was much simpler than I imagined it would be. Ms. Reyes explained everything clearly and made the visit feel comfortable and easy. Next week, my paycheck will go directly into this new account.",
    questions: [
      "What does Derek do that evening?",
      "How does Derek feel seeing his account for the first time?",
      "What will happen with Derek's paycheck next week?",
    ],
    trueFalse: [
      { text: "Derek opens the new banking app that evening.", answer: true },
      { text: "Derek feels nothing seeing his new account.", answer: false },
      { text: "The whole process was much simpler than expected.", answer: true },
      { text: "Ms. Reyes made the visit feel confusing and hard.", answer: false },
      { text: "Derek's paycheck will go into this new account.", answer: true },
    ],
    buildSentence: [
      { target: "I open the app now.", jumbled: ["open", "the", "I", "app", "now."] },
      { target: "This feels strange but exciting.", jumbled: ["feels", "strange", "This", "but", "exciting."] },
      { target: "I remember feeling nervous this morning.", jumbled: ["I", "remember", "feeling", "nervous", "this", "morning."] },
      { target: "This was simpler than I imagined.", jumbled: ["This", "was", "simpler", "than", "I", "imagined."] },
      { target: "Next week, my paycheck will go into this account.", jumbled: ["Next", "week,", "my", "paycheck", "will", "go", "into", "this", "account."] },
    ],
    mySentencePrompt: "Write or say one sentence about a task that turned out simpler than you expected.",
    mySentenceExample: "Getting my ID renewed was simpler than I expected it to be.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

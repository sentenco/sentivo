// B1 Adults digital storybook, Book 59: "A Mix-Up at the Pharmacy"
// Static content -- no Supabase. Third book in the B1 Adults batch
// (57-64). Distinct from Book 10's general clinic-visit routine: this
// story centers on a prescription ERROR at the pharmacy counter and
// the complaint/correction process, matching the B1 Adults spec's
// "service incident" and "phone call / problem explanation" focus.
// Grammar/vocab calibrated the same way as Books 57-58. Adults-track
// shape: 3 questions, 5 True/False, 5 Build-a-Sentence per chapter.
// Images not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "A Mix-Up at the Pharmacy";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Elena standing at a pharmacy counter, looking closely at a small orange pill bottle with a puzzled expression, pharmacist nearby.";

export const CHARACTERS = [
  { name: "Elena", role: "The narrator, an adult picking up a prescription", look: "Work clothes, tote bag, reading glasses pushed up on her head." },
  { name: "Mr. Diaz", role: "The pharmacist", look: "White coat, calm and careful manner, name tag clipped to his pocket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Picking Up My Prescription",
    image: null,
    imageNote: "Elena walking into a small neighborhood pharmacy after work, phone showing a pickup notification.",
    story:
      "After work, I stop by the pharmacy to pick up a prescription my doctor called in earlier this week. The notification on my phone says it's ready, so I expect this errand to take only a few minutes at most. Inside, the pharmacy is fairly busy, with several people waiting in a short line ahead of me. While I wait, I glance at my phone, mentally planning the rest of my evening once this quick stop is finished. When it's finally my turn, I give my name at the counter, and the assistant disappears briefly to retrieve my bag.",
    questions: [
      "Why does Elena stop by the pharmacy?",
      "What does the notification on her phone say?",
      "What does Elena do while waiting in line?",
    ],
    trueFalse: [
      { text: "Elena stops by the pharmacy after work.", answer: true },
      { text: "The notification says her prescription is ready.", answer: true },
      { text: "The pharmacy is completely empty when Elena arrives.", answer: false },
      { text: "Elena expects this errand to take only a few minutes.", answer: true },
      { text: "The assistant disappears briefly to get her bag.", answer: true },
    ],
    buildSentence: [
      { target: "I stop by the pharmacy today.", jumbled: ["I", "stop", "by", "the", "pharmacy", "today."] },
      { target: "The pharmacy is fairly busy now.", jumbled: ["The", "pharmacy", "is", "fairly", "busy", "now."] },
      { target: "I give my name at the counter.", jumbled: ["I", "give", "my", "name", "at", "the", "counter."] },
      { target: "This should take only a few minutes.", jumbled: ["This", "should", "take", "only", "a", "few", "minutes."] },
      { target: "She disappears briefly to retrieve my bag.", jumbled: ["She", "disappears", "briefly", "to", "retrieve", "my", "bag."] },
    ],
    mySentencePrompt: "Write or say one sentence about running a quick errand after work.",
    mySentenceExample: "I ran a quick errand to the pharmacy after work.",
  },
  {
    number: 2,
    title: "Something Doesn't Look Right",
    image: null,
    imageNote: "Elena examining the pill bottle label closely at the counter, comparing it against something on her phone screen.",
    story:
      "The assistant hands me a small bag, and out of habit, I check the label before leaving the counter. Something immediately catches my attention: the dosage listed seems different from what my doctor had actually mentioned during my appointment. I pull up my doctor's instructions on my phone, comparing the numbers carefully to make sure I'm not simply misremembering something. Unfortunately, the difference is clear, which means either the prescription itself or the label has some kind of error. Rather than simply assuming it's fine, I decide I should mention this immediately to someone who actually works here.",
    questions: [
      "What does Elena check out of habit?",
      "What catches Elena's attention on the label?",
      "What does Elena decide she should do?",
    ],
    trueFalse: [
      { text: "Elena checks the label out of habit.", answer: true },
      { text: "The dosage listed matches exactly what her doctor said.", answer: false },
      { text: "Elena pulls up her doctor's instructions on her phone.", answer: true },
      { text: "Elena decides to simply assume it's fine.", answer: false },
      { text: "Elena decides to mention this to someone who works there.", answer: true },
    ],
    buildSentence: [
      { target: "I check the label first.", jumbled: ["I", "check", "the", "label", "first."] },
      { target: "Something catches my attention now.", jumbled: ["Something", "catches", "my", "attention", "now."] },
      { target: "The difference is clear, unfortunately.", jumbled: ["The", "difference", "is", "clear,", "unfortunately."] },
      { target: "I should mention this immediately.", jumbled: ["I", "should", "mention", "this", "immediately."] },
      { target: "This seems different from what my doctor mentioned.", jumbled: ["This", "seems", "different", "from", "what", "my", "doctor", "mentioned."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing an error before it caused a bigger problem.",
    mySentenceExample: "I noticed the error before it caused a bigger problem.",
  },
  {
    number: 3,
    title: "Speaking with the Pharmacist",
    image: null,
    imageNote: "Elena speaking politely with Mr. Diaz across the counter, pointing at the label while he examines it carefully.",
    story:
      "I ask to speak with the pharmacist directly, and Mr. Diaz comes over, greeting me with a professional, attentive manner. I explain calmly that the dosage on the label doesn't match what I remember my doctor telling me during our appointment. He takes the bottle carefully, examining both the label and the original prescription order on his computer screen. “You were right to bring this up. Let me look into it more closely before you take anything,” he says seriously. I appreciate that he doesn't dismiss my concern, treating it instead as something genuinely worth investigating properly.",
    questions: [
      "Who comes over to speak with Elena?",
      "What does Elena explain calmly?",
      "What does Mr. Diaz say to Elena?",
    ],
    trueFalse: [
      { text: "Mr. Diaz comes over with a professional, attentive manner.", answer: true },
      { text: "Elena explains the dosage doesn't match what she remembers.", answer: true },
      { text: "Mr. Diaz dismisses Elena's concern immediately.", answer: false },
      { text: "Mr. Diaz checks the original prescription order on his computer.", answer: true },
      { text: "Elena appreciates that he takes her concern seriously.", answer: true },
    ],
    buildSentence: [
      { target: "I ask to speak with him.", jumbled: ["I", "ask", "to", "speak", "with", "him."] },
      { target: "He takes the bottle carefully now.", jumbled: ["He", "takes", "the", "bottle", "carefully", "now."] },
      { target: "You were right to bring this up.", jumbled: ["You", "were", "right", "to", "bring", "this", "up."] },
      { target: "I appreciate that he doesn't dismiss this.", jumbled: ["I", "appreciate", "that", "he", "doesn't", "dismiss", "this."] },
      { target: "Let me look into it more closely first.", jumbled: ["Let", "me", "look", "into", "it", "more", "closely", "first."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone taking your concern seriously.",
    mySentenceExample: "The pharmacist took my concern seriously and checked it.",
  },
  {
    number: 4,
    title: "Finding the Error",
    image: null,
    imageNote: "Mr. Diaz looking at his computer screen with a concerned expression, then turning to explain something to Elena.",
    story:
      "After a few minutes of checking, Mr. Diaz confirms that there was, in fact, a data entry error somewhere in the system. Apparently, my prescription was accidentally mixed up with another patient's order that had a similar name on file. “I'm genuinely sorry about this. If you had taken this dosage, it could have caused you some unpleasant side effects,” he explains honestly. Hearing this makes me feel slightly uneasy, though I'm also relieved I caught the mistake before it actually became a problem. He assures me that correcting this will only take a few more minutes now that the cause has been identified.",
    questions: [
      "What does Mr. Diaz confirm happened?",
      "What was Elena's prescription mixed up with?",
      "How does Elena feel hearing this explanation?",
    ],
    trueFalse: [
      { text: "Mr. Diaz confirms a data entry error occurred.", answer: true },
      { text: "The prescription was mixed up with another patient's order.", answer: true },
      { text: "Mr. Diaz says the wrong dosage would have had no effect.", answer: false },
      { text: "Elena feels only anger and no relief at all.", answer: false },
      { text: "Correcting this will only take a few more minutes.", answer: true },
    ],
    buildSentence: [
      { target: "He confirms this after checking.", jumbled: ["He", "confirms", "this", "after", "checking."] },
      { target: "I feel slightly uneasy now.", jumbled: ["I", "feel", "slightly", "uneasy", "now."] },
      { target: "I'm genuinely sorry about this.", jumbled: ["I'm", "genuinely", "sorry", "about", "this."] },
      { target: "This will only take a few minutes.", jumbled: ["This", "will", "only", "take", "a", "few", "minutes."] },
      { target: "This could have caused some unpleasant side effects.", jumbled: ["This", "could", "have", "caused", "some", "unpleasant", "side", "effects."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved you caught a mistake in time.",
    mySentenceExample: "I felt relieved I caught the mistake in time.",
  },
  {
    number: 5,
    title: "Correcting the Prescription",
    image: null,
    imageNote: "Mr. Diaz preparing a new pill bottle behind the counter while Elena waits nearby, looking more relaxed now.",
    story:
      "Mr. Diaz personally prepares the corrected prescription himself this time, double-checking every detail before sealing the new bag. While waiting, I ask what typically happens in situations like this, curious whether such mix-ups occur often at pharmacies generally. He explains that strict double-checking procedures usually prevent this, though rare human errors can still occasionally slip through the system. “We take this extremely seriously, and I'll personally be reporting this internally so it gets reviewed properly,” he assures me. I appreciate his honesty, especially since he easily could have downplayed how serious this mistake actually was.",
    questions: [
      "Who prepares the corrected prescription?",
      "What does Elena ask Mr. Diaz while waiting?",
      "What does Mr. Diaz say he will do?",
    ],
    trueFalse: [
      { text: "Mr. Diaz personally prepares the corrected prescription.", answer: true },
      { text: "Elena asks whether mix-ups occur often at pharmacies.", answer: true },
      { text: "Mr. Diaz says errors like this happen constantly.", answer: false },
      { text: "Mr. Diaz says he'll report this internally for review.", answer: true },
      { text: "Elena appreciates his honesty about the mistake.", answer: true },
    ],
    buildSentence: [
      { target: "He prepares the prescription himself.", jumbled: ["He", "prepares", "the", "prescription", "himself."] },
      { target: "I appreciate his honesty here.", jumbled: ["I", "appreciate", "his", "honesty", "here."] },
      { target: "We take this extremely seriously.", jumbled: ["We", "take", "this", "extremely", "seriously."] },
      { target: "Rare human errors can still slip through.", jumbled: ["Rare", "human", "errors", "can", "still", "slip", "through."] },
      { target: "I'll personally be reporting this internally.", jumbled: ["I'll", "personally", "be", "reporting", "this", "internally."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone being honest about a mistake instead of hiding it.",
    mySentenceExample: "He was honest about the mistake instead of hiding it.",
  },
  {
    number: 6,
    title: "A Second Check",
    image: null,
    imageNote: "A second pharmacy staff member reviewing the corrected bottle alongside Mr. Diaz, both nodding in agreement.",
    story:
      "Before handing me the new bag, Mr. Diaz asks a colleague to independently verify the corrected prescription, just to be completely certain. His colleague checks the dosage against the original doctor's order, comparing every number carefully one final time. Once she confirms everything matches correctly, Mr. Diaz finally hands me the bag, explaining each instruction clearly and slowly this time. He also writes his direct extension on a small card, telling me to call immediately if anything seems even slightly unclear later. This extra layer of caution reassures me considerably, especially given what almost happened only minutes earlier.",
    questions: [
      "What does Mr. Diaz ask a colleague to do?",
      "What does the colleague compare?",
      "What does Mr. Diaz write on a small card?",
    ],
    trueFalse: [
      { text: "Mr. Diaz asks a colleague to independently verify the prescription.", answer: true },
      { text: "The colleague compares the dosage against the doctor's order.", answer: true },
      { text: "Mr. Diaz hands Elena the bag without any explanation.", answer: false },
      { text: "Mr. Diaz writes his direct extension on a small card.", answer: true },
      { text: "Elena feels no reassurance from this extra caution.", answer: false },
    ],
    buildSentence: [
      { target: "He asks a colleague to verify.", jumbled: ["He", "asks", "a", "colleague", "to", "verify."] },
      { target: "This reassures me considerably now.", jumbled: ["This", "reassures", "me", "considerably", "now."] },
      { target: "She checks every number carefully.", jumbled: ["She", "checks", "every", "number", "carefully."] },
      { target: "He explains each instruction clearly and slowly.", jumbled: ["He", "explains", "each", "instruction", "clearly", "and", "slowly."] },
      { target: "Call immediately if anything seems unclear later.", jumbled: ["Call", "immediately", "if", "anything", "seems", "unclear", "later."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone double-checking something carefully to avoid a mistake.",
    mySentenceExample: "The pharmacist double-checked everything carefully to avoid a mistake.",
  },
  {
    number: 7,
    title: "Talking to My Doctor",
    image: null,
    imageNote: "Elena on the phone at home that evening, notebook and pen nearby, explaining the situation to her doctor's office.",
    story:
      "That evening, I decide to call my doctor's office as well, just to mention what happened at the pharmacy earlier. The receptionist thanks me for reporting it and says the doctor will likely want to know, given the potential seriousness involved. I explain the situation clearly, including how it was caught and corrected before I actually took anything. She reassures me that my original prescription itself was correct, and only the pharmacy's internal system had the error. Although the whole experience felt slightly unsettling, I'm genuinely glad everyone involved took it as seriously as they did.",
    questions: [
      "What does Elena decide to do that evening?",
      "What does the receptionist say about the doctor?",
      "What does the receptionist reassure Elena about?",
    ],
    trueFalse: [
      { text: "Elena decides to call her doctor's office that evening.", answer: true },
      { text: "The receptionist thanks Elena for reporting it.", answer: true },
      { text: "The receptionist says the original prescription was wrong too.", answer: false },
      { text: "Elena explains how the error was caught and corrected.", answer: true },
      { text: "Elena feels glad everyone took this seriously.", answer: true },
    ],
    buildSentence: [
      { target: "I decide to call today.", jumbled: ["I", "decide", "to", "call", "today."] },
      { target: "She thanks me for reporting it.", jumbled: ["She", "thanks", "me", "for", "reporting", "it."] },
      { target: "I'm genuinely glad about this.", jumbled: ["I'm", "genuinely", "glad", "about", "this."] },
      { target: "My original prescription itself was correct.", jumbled: ["My", "original", "prescription", "itself", "was", "correct."] },
      { target: "The whole experience felt slightly unsettling.", jumbled: ["The", "whole", "experience", "felt", "slightly", "unsettling."] },
    ],
    mySentencePrompt: "Write or say one sentence about reporting a problem to make sure it gets fixed properly.",
    mySentenceExample: "I reported the problem to make sure it got fixed properly.",
  },
  {
    number: 8,
    title: "A Follow-Up Call",
    image: null,
    imageNote: "Elena's phone screen showing an incoming call from the pharmacy, her picking it up with a curious expression.",
    story:
      "A few days later, the pharmacy calls to follow up, which honestly surprises me since I hadn't expected any further contact. It's Mr. Diaz himself, checking whether the corrected medication has been working properly without any unexpected issues. I confirm everything seems fine so far, and I thank him again for handling the entire situation so professionally. He mentions that the pharmacy has since added an additional verification step specifically for prescriptions with similar patient names. Hearing that something concrete changed because of my situation makes the whole experience feel genuinely worthwhile, in the end.",
    questions: [
      "Who calls Elena a few days later?",
      "What does Mr. Diaz check on the call?",
      "What has the pharmacy added since this situation?",
    ],
    trueFalse: [
      { text: "The pharmacy calls Elena a few days later to follow up.", answer: true },
      { text: "It's Mr. Diaz himself who calls.", answer: true },
      { text: "Mr. Diaz checks whether the medication is working properly.", answer: true },
      { text: "The pharmacy has added an additional verification step.", answer: true },
      { text: "Elena feels annoyed that they called to follow up.", answer: false },
    ],
    buildSentence: [
      { target: "This honestly surprises me now.", jumbled: ["This", "honestly", "surprises", "me", "now."] },
      { target: "I thank him again today.", jumbled: ["I", "thank", "him", "again", "today."] },
      { target: "Everything seems fine so far.", jumbled: ["Everything", "seems", "fine", "so", "far."] },
      { target: "This feels genuinely worthwhile in the end.", jumbled: ["This", "feels", "genuinely", "worthwhile", "in", "the", "end."] },
      { target: "They added a step for similar patient names.", jumbled: ["They", "added", "a", "step", "for", "similar", "patient", "names."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving a follow-up call after reporting a problem.",
    mySentenceExample: "I received a follow-up call after reporting the problem.",
  },
  {
    number: 9,
    title: "Sharing My Story",
    image: null,
    imageNote: "Elena telling a friend about the experience over coffee, both sitting at a small café table.",
    story:
      "Over coffee with a friend, I mention the whole pharmacy situation, partly as a warning and partly out of genuine relief. She admits she rarely checks her own labels closely, usually trusting the process completely without a second thought. I explain that, on the other hand, this experience taught me it's always worth double-checking, however busy or trusting you normally feel. She agrees, saying she'll probably start reading labels more carefully herself starting from now on. It feels strange, but sharing this story might actually help prevent a similar mix-up for someone else entirely.",
    questions: [
      "Who does Elena mention the situation to over coffee?",
      "What does the friend admit about her own habits?",
      "What does the friend say she'll start doing?",
    ],
    trueFalse: [
      { text: "Elena mentions the situation to a friend over coffee.", answer: true },
      { text: "The friend admits she rarely checks her own labels closely.", answer: true },
      { text: "Elena feels this experience taught her nothing useful.", answer: false },
      { text: "The friend says she'll start reading labels more carefully.", answer: true },
      { text: "Elena believes sharing this story is completely pointless.", answer: false },
    ],
    buildSentence: [
      { target: "I mention this over coffee.", jumbled: ["I", "mention", "this", "over", "coffee."] },
      { target: "She agrees with me now.", jumbled: ["She", "agrees", "with", "me", "now."] },
      { target: "This is always worth double-checking.", jumbled: ["This", "is", "always", "worth", "double-checking."] },
      { target: "She rarely checks her own labels.", jumbled: ["She", "rarely", "checks", "her", "own", "labels."] },
      { target: "This might help prevent a similar mix-up.", jumbled: ["This", "might", "help", "prevent", "a", "similar", "mix-up."] },
    ],
    mySentencePrompt: "Write or say one sentence about sharing a lesson you learned so it might help someone else.",
    mySentenceExample: "I shared my lesson so it might help someone else too.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Elena at home, calmly organizing her medications on a shelf, a small checklist notebook beside her.",
    story:
      "Looking back on the entire experience, I realize how easily this small mix-up could have turned into something far more serious. If I hadn't checked the label carefully, or if I'd assumed everything was automatically correct, the outcome might have been genuinely dangerous. Instead, staying alert and speaking up calmly allowed Mr. Diaz to actually catch and correct the problem quickly. I've started keeping a small checklist for anything health-related now, from prescriptions to appointment details generally. In the end, this experience reminded me that questioning something politely is always better than simply assuming it's fine.",
    questions: [
      "What does Elena realize looking back on this experience?",
      "What has Elena started keeping now?",
      "What does this experience remind Elena of?",
    ],
    trueFalse: [
      { text: "Elena realizes this could have turned into something serious.", answer: true },
      { text: "Elena has started keeping a health-related checklist.", answer: true },
      { text: "Elena wishes she had simply assumed everything was fine.", answer: false },
      { text: "Staying alert allowed Mr. Diaz to correct the problem quickly.", answer: true },
      { text: "Elena feels questioning something politely is usually pointless.", answer: false },
    ],
    buildSentence: [
      { target: "I look back on this now.", jumbled: ["I", "look", "back", "on", "this", "now."] },
      { target: "I've started keeping a checklist.", jumbled: ["I've", "started", "keeping", "a", "checklist."] },
      { target: "Questioning something politely is always better.", jumbled: ["Questioning", "something", "politely", "is", "always", "better."] },
      { target: "Staying alert allowed him to correct the problem.", jumbled: ["Staying", "alert", "allowed", "him", "to", "correct", "the", "problem."] },
      { target: "If I hadn't checked, the outcome might have been dangerous.", jumbled: ["If", "I", "hadn't", "checked,", "the", "outcome", "might", "have", "been", "dangerous."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from catching a mistake before it caused harm.",
    mySentenceExample: "I learned to always double-check before assuming something is correct.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

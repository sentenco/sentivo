// B1 Teens digital storybook, Book 55: "Learning to Say No"
// Static content -- no Supabase. Seventh book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Learning to Say No";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Yuki sitting at her desk late at night, surrounded by planners and sticky notes for five different clubs, exhausted and overwhelmed.";

export const CHARACTERS = [
  { name: "Yuki", role: "The narrator, a teenager", look: "Neat ponytail, planner always in hand, eager to please but increasingly exhausted." },
  { name: "Ben", role: "Yuki's older brother", look: "Casual sweatshirt, laid-back demeanor, observant and honest." },
  { name: "Ms. Farah", role: "Yuki's guidance counselor", look: "Cardigan, calm voice, perceptive and gently direct." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Many Commitments",
    image: null,
    imageNote: "Yuki sitting at her desk surrounded by five different club schedules and sticky notes, looking overwhelmed under a desk lamp.",
    story:
      "Looking at my planner tonight, I count five different clubs I've committed to this semester alone. Student council, yearbook committee, volunteer club, the debate team, and now tutoring younger students twice weekly. Whenever someone asks me to join something, I find myself agreeing almost automatically, without genuinely considering my own limits. Tonight, I'm supposed to attend two meetings that overlap directly, and I haven't figured out which one to prioritize. My eyes feel heavy from exhaustion, and I realize I can't actually remember the last time I simply relaxed. If I keep going at this pace, something will eventually have to give completely.",
    questions: [
      "How many clubs has Yuki committed to this semester?",
      "What does Yuki do whenever someone asks her to join something?",
      "What problem does Yuki have tonight?",
    ],
    trueFalse: [
      { text: "Yuki has committed to five different clubs.", answer: true },
      { text: "Yuki carefully considers her limits before agreeing to things.", answer: false },
      { text: "Two of Yuki's meetings overlap tonight.", answer: true },
      { text: "Yuki remembers relaxing recently.", answer: false },
      { text: "Yuki realizes something will eventually have to give.", answer: true },
    ],
    buildSentence: [
      { target: "My eyes feel heavy tonight.", jumbled: ["My", "eyes", "feel", "heavy", "tonight."] },
      { target: "I count five clubs total.", jumbled: ["I", "count", "five", "clubs", "total."] },
      { target: "I agree almost automatically usually.", jumbled: ["I", "agree", "almost", "automatically", "usually."] },
      { target: "Something will eventually have to give.", jumbled: ["Something", "will", "eventually", "have", "to", "give."] },
      { target: "I can't remember the last time I relaxed.", jumbled: ["I", "can't", "remember", "the", "last", "time", "I", "relaxed."] },
    ],
    mySentencePrompt: "Write or say one sentence about taking on too many responsibilities at once.",
    mySentenceExample: "I took on too many responsibilities at once and felt exhausted.",
  },
  {
    number: 2,
    title: "Another Yes",
    image: null,
    imageNote: "Yuki standing in the hallway, nodding to a classmate asking her to join yet another committee, her expression tired but agreeable.",
    story:
      "Between classes, a classmate approaches, asking if I'd help organize the upcoming school fair committee too. Despite the exhaustion already weighing on me, I hear myself saying yes before I've even properly considered the request. Walking away, I immediately regret it, wondering why saying no feels so genuinely difficult for me. I've always worried that refusing might disappoint people or make me seem uncommitted and unreliable somehow. However, saying yes to everything is clearly starting to affect my grades, sleep, and overall well-being lately. That evening, I add the fair committee to my already overwhelming planner, feeling a familiar knot forming in my stomach.",
    questions: [
      "What does a classmate ask Yuki to help with?",
      "What does Yuki do before considering the request?",
      "What has Yuki always worried about?",
    ],
    trueFalse: [
      { text: "A classmate asks Yuki to help with the fair committee.", answer: true },
      { text: "Yuki carefully considers the request before answering.", answer: false },
      { text: "Yuki immediately regrets saying yes.", answer: true },
      { text: "Yuki has always worried about disappointing people.", answer: true },
      { text: "Saying yes to everything hasn't affected Yuki at all.", answer: false },
    ],
    buildSentence: [
      { target: "I immediately regret it now.", jumbled: ["I", "immediately", "regret", "it", "now."] },
      { target: "I hear myself saying yes.", jumbled: ["I", "hear", "myself", "saying", "yes."] },
      { target: "Saying no feels genuinely difficult.", jumbled: ["Saying", "no", "feels", "genuinely", "difficult."] },
      { target: "This is clearly starting to affect me.", jumbled: ["This", "is", "clearly", "starting", "to", "affect", "me."] },
      { target: "I worried that refusing might disappoint people.", jumbled: ["I", "worried", "that", "refusing", "might", "disappoint", "people."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you said yes when you wanted to say no.",
    mySentenceExample: "I said yes to a project when I really wanted to say no.",
  },
  {
    number: 3,
    title: "Ben Notices",
    image: null,
    imageNote: "Ben leaning against Yuki's bedroom doorway, looking concerned as he watches her frantically working through her overloaded planner.",
    story:
      "My older brother Ben stops by my room that evening, noticing my exhausted expression and cluttered, overloaded planner immediately. “You've been like this for weeks now. When was the last time you actually rested?” he asks directly. I try brushing off his concern, insisting I'm managing everything fine, though my voice sounds unconvincing even to myself. Ben, who dealt with similar overcommitment during his own junior year, shares how burnout eventually forced him to reevaluate everything completely. “Saying yes to everything isn't actually generous if it means saying no to your own health,” he points out gently. His words linger uncomfortably, since some part of me already suspected this truth myself.",
    questions: [
      "Who stops by Yuki's room that evening?",
      "What does Ben ask Yuki directly?",
      "What does Ben share about his own experience?",
    ],
    trueFalse: [
      { text: "Ben stops by Yuki's room that evening.", answer: true },
      { text: "Ben asks when Yuki last actually rested.", answer: true },
      { text: "Yuki insists everything is going wonderfully with full confidence.", answer: false },
      { text: "Ben shares that he also dealt with overcommitment.", answer: true },
      { text: "Yuki feels Ben's words mean nothing to her.", answer: false },
    ],
    buildSentence: [
      { target: "Ben stops by my room.", jumbled: ["Ben", "stops", "by", "my", "room."] },
      { target: "His words linger uncomfortably now.", jumbled: ["His", "words", "linger", "uncomfortably", "now."] },
      { target: "I try brushing off his concern.", jumbled: ["I", "try", "brushing", "off", "his", "concern."] },
      { target: "When was the last time you rested?", jumbled: ["was", "the", "When", "last", "time", "you", "rested?"] },
      { target: "Saying yes to everything isn't actually generous.", jumbled: ["Saying", "yes", "to", "everything", "isn't", "actually", "generous."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone who noticed you were overwhelmed and said something.",
    mySentenceExample: "My friend noticed I was overwhelmed and gently pointed it out to me.",
  },
  {
    number: 4,
    title: "A Difficult Week",
    image: null,
    imageNote: "Yuki rushing between two classrooms in the hallway, papers falling from her arms, a stressed and frazzled expression on her face.",
    story:
      "This week proves Ben's point painfully clearly, as I rush frantically between commitments, forgetting important details along the way. I miss a deadline for the yearbook committee, something I never would have done before this semester started. During debate practice, I can barely focus, my mind constantly drifting toward everything else I still need to accomplish. A teacher pulls me aside, gently mentioning that my grades have dropped noticeably over the past month. Hearing this feels like a wake-up call I desperately needed but had been avoiding acknowledging until now. That night, exhausted beyond words, I finally admit something genuinely needs to change immediately.",
    questions: [
      "What does Yuki miss this week?",
      "What happens during debate practice?",
      "What does a teacher mention to Yuki?",
    ],
    trueFalse: [
      { text: "Yuki misses a deadline for the yearbook committee.", answer: true },
      { text: "Yuki focuses perfectly during debate practice.", answer: false },
      { text: "A teacher mentions Yuki's grades have dropped.", answer: true },
      { text: "Yuki feels this is a wake-up call she needed.", answer: true },
      { text: "Yuki decides nothing needs to change.", answer: false },
    ],
    buildSentence: [
      { target: "I miss a deadline today.", jumbled: ["miss", "a", "I", "deadline", "today."] },
      { target: "I can barely focus now.", jumbled: ["I", "can", "barely", "focus", "now."] },
      { target: "My grades have dropped noticeably.", jumbled: ["My", "grades", "have", "dropped", "noticeably."] },
      { target: "Something genuinely needs to change immediately.", jumbled: ["Something", "genuinely", "needs", "to", "change", "immediately."] },
      { target: "This feels like a wake-up call I needed.", jumbled: ["This", "feels", "like", "a", "wake-up", "call", "I", "needed."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment that felt like a wake-up call for you.",
    mySentenceExample: "Missing an important deadline felt like a wake-up call for me.",
  },
  {
    number: 5,
    title: "Talking to Ms. Farah",
    image: null,
    imageNote: "Yuki sitting across from Ms. Farah in a small office, explaining her situation while the counselor listens with a calm, understanding expression.",
    story:
      "The next day, I schedule an appointment with our guidance counselor, Ms. Farah, hoping she can offer some genuine perspective. I explain everything: the five commitments, the missed deadline, my dropping grades, and my constant exhaustion lately. She listens without judgment, then asks a simple question: “What would happen if you actually said no to something?” I admit I've never seriously considered that possibility, assuming refusing anything would somehow disappoint everyone involved. She gently explains that overcommitting often stems from wanting approval, rather than genuinely wanting to do everything equally. Her words feel uncomfortably accurate, like she's identified something about myself I hadn't fully recognized before.",
    questions: [
      "Who does Yuki schedule an appointment with?",
      "What question does Ms. Farah ask Yuki?",
      "What does Ms. Farah say overcommitting often stems from?",
    ],
    trueFalse: [
      { text: "Yuki schedules an appointment with Ms. Farah.", answer: true },
      { text: "Ms. Farah judges Yuki harshly for her situation.", answer: false },
      { text: "Ms. Farah asks what would happen if Yuki said no.", answer: true },
      { text: "Ms. Farah says overcommitting often stems from wanting approval.", answer: true },
      { text: "Yuki feels these words are completely inaccurate.", answer: false },
    ],
    buildSentence: [
      { target: "I schedule an appointment today.", jumbled: ["schedule", "an", "I", "appointment", "today."] },
      { target: "She listens without judgment.", jumbled: ["She", "listens", "without", "judgment."] },
      { target: "Her words feel uncomfortably accurate.", jumbled: ["Her", "words", "feel", "uncomfortably", "accurate."] },
      { target: "I've never seriously considered that possibility.", jumbled: ["I've", "never", "seriously", "considered", "that", "possibility."] },
      { target: "What would happen if you actually said no?", jumbled: ["What", "would", "happen", "if", "you", "actually", "said", "no?"] },
    ],
    mySentencePrompt: "Write or say one sentence about a question someone asked that made you think differently.",
    mySentenceExample: "A question my counselor asked made me think differently about my habits.",
  },
  {
    number: 6,
    title: "Making a List",
    image: null,
    imageNote: "Yuki sitting at her desk, crossing off items on a list of her commitments, a determined but slightly nervous expression on her face.",
    story:
      "Following Ms. Farah's suggestion, I make a list of every commitment and honestly rank how much each one genuinely matters to me. Debate team and volunteer club feel meaningful and worth keeping, something I actually chose because I cared about them. The fair committee, however, I only joined because refusing felt awkward, not because I wanted to participate. Looking at this list clearly laid out helps me realize not every commitment deserves equal priority in my life. If I release the ones draining me without adding real value, maybe I could actually enjoy the ones remaining. This exercise feels surprisingly clarifying, like finally seeing a problem I'd been avoiding directly.",
    questions: [
      "What does Yuki do following Ms. Farah's suggestion?",
      "Which commitments does Yuki feel are meaningful?",
      "Why did Yuki join the fair committee?",
    ],
    trueFalse: [
      { text: "Yuki makes a list ranking her commitments.", answer: true },
      { text: "Yuki feels debate team and volunteer club are meaningful.", answer: true },
      { text: "Yuki joined the fair committee because she truly wanted to.", answer: false },
      { text: "Yuki realizes not every commitment deserves equal priority.", answer: true },
      { text: "This exercise feels confusing rather than clarifying.", answer: false },
    ],
    buildSentence: [
      { target: "I make a list now.", jumbled: ["make", "a", "I", "list", "now."] },
      { target: "This feels surprisingly clarifying today.", jumbled: ["This", "feels", "surprisingly", "clarifying", "today."] },
      { target: "Not every commitment deserves equal priority.", jumbled: ["Not", "every", "commitment", "deserves", "equal", "priority."] },
      { target: "I only joined because refusing felt awkward.", jumbled: ["I", "only", "joined", "because", "refusing", "felt", "awkward."] },
      { target: "If I release what drains me, I could enjoy the rest.", jumbled: ["If", "I", "release", "what", "drains", "me,", "I", "could", "enjoy", "the", "rest."] },
    ],
    mySentencePrompt: "Write or say one sentence about ranking your priorities to figure out what truly matters.",
    mySentenceExample: "I ranked my priorities to figure out what truly mattered to me.",
  },
  {
    number: 7,
    title: "The First No",
    image: null,
    imageNote: "Yuki standing nervously in front of the fair committee leader, explaining her decision, her hands slightly clasped together for confidence.",
    story:
      "Gathering my courage, I approach the fair committee leader to explain I need to step back from this commitment. My heart pounds as I speak, half expecting disappointment or frustration in response to my decision. Instead, she simply nods, saying she completely understands and thanks me for being honest rather than just disappearing quietly. Relief floods through me instantly, since I had built up this moment into something far scarier than it actually turned out being. Walking away, I realize my fear of disappointing people had been considerably larger than reality itself. This first successful no gives me unexpected confidence to consider what else might need reconsidering.",
    questions: [
      "What does Yuki approach the fair committee leader to explain?",
      "How does the leader respond to Yuki's decision?",
      "How does Yuki feel after this conversation?",
    ],
    trueFalse: [
      { text: "Yuki explains she needs to step back from the commitment.", answer: true },
      { text: "The leader reacts with anger and disappointment.", answer: false },
      { text: "The leader thanks Yuki for being honest.", answer: true },
      { text: "Yuki feels relief after this conversation.", answer: true },
      { text: "Yuki's fear turns out to be smaller than reality.", answer: false },
    ],
    buildSentence: [
      { target: "My heart pounds as I speak.", jumbled: ["My", "heart", "pounds", "as", "I", "speak."] },
      { target: "Relief floods through me instantly.", jumbled: ["Relief", "floods", "through", "me", "instantly."] },
      { target: "She simply nods, understanding fully.", jumbled: ["She", "simply", "nods,", "understanding", "fully."] },
      { target: "This gives me unexpected confidence now.", jumbled: ["This", "gives", "me", "unexpected", "confidence", "now."] },
      { target: "My fear had been considerably larger than reality.", jumbled: ["My", "fear", "had", "been", "considerably", "larger", "than", "reality."] },
    ],
    mySentencePrompt: "Write or say one sentence about a fear that turned out to be bigger than reality.",
    mySentenceExample: "My fear of asking for help turned out bigger than reality.",
  },
  {
    number: 8,
    title: "More Boundaries",
    image: null,
    imageNote: "Yuki sitting at her desk with a shorter, simpler planner, calmly declining a request on her phone, a relaxed expression on her face.",
    story:
      "Encouraged by my first success, I reevaluate my other commitments, deciding to also step back from student council. This decision feels harder somehow, since student council carries more visibility and social expectation than the fair committee did. Nevertheless, I remind myself of Ms. Farah's words about approval-seeking versus genuine desire to participate. I also start declining smaller requests more consistently, like extra tutoring sessions that overlap with time I need for myself. Each time I say no now, it feels slightly less terrifying than the time before it. My planner looks noticeably lighter these days, and somehow, that emptiness feels like genuine relief instead of failure.",
    questions: [
      "What does Yuki decide to also step back from?",
      "Why does this decision feel harder?",
      "How does Yuki's planner look these days?",
    ],
    trueFalse: [
      { text: "Yuki decides to step back from student council too.", answer: true },
      { text: "This decision feels easier than the fair committee.", answer: false },
      { text: "Yuki starts declining smaller requests too.", answer: true },
      { text: "Each no feels slightly less terrifying than before.", answer: true },
      { text: "Yuki's planner feels like failure now.", answer: false },
    ],
    buildSentence: [
      { target: "This decision feels harder somehow.", jumbled: ["This", "decision", "feels", "harder", "somehow."] },
      { target: "I start declining requests consistently.", jumbled: ["I", "start", "declining", "requests", "consistently."] },
      { target: "My planner looks noticeably lighter now.", jumbled: ["My", "planner", "looks", "noticeably", "lighter", "now."] },
      { target: "This emptiness feels like genuine relief.", jumbled: ["This", "emptiness", "feels", "like", "genuine", "relief."] },
      { target: "Each time I say no, it feels less terrifying.", jumbled: ["Each", "time", "I", "say", "no,", "it", "feels", "less", "terrifying."] },
    ],
    mySentencePrompt: "Write or say one sentence about setting a boundary that felt uncomfortable at first.",
    mySentenceExample: "Setting a boundary with my schedule felt uncomfortable at first but helped.",
  },
  {
    number: 9,
    title: "Rediscovering Free Time",
    image: null,
    imageNote: "Yuki sitting on her bedroom floor reading a novel just for fun, relaxed and smiling, her simplified planner visible on the desk nearby.",
    story:
      "With only two meaningful commitments remaining, I suddenly have actual free time appearing in my schedule for the first time in months. On Tuesday evening, I read an entire novel purely for enjoyment, something I genuinely can't remember doing recently. Ben notices the change immediately, commenting that I seem noticeably calmer and more like myself again lately. My grades have already started improving slightly, likely because I can actually focus without constant mental exhaustion draining me. Debate team and volunteer club feel more enjoyable now too, since I'm not simultaneously worrying about four other obligations. This newfound balance feels unfamiliar still, but genuinely, refreshingly welcome.",
    questions: [
      "How many meaningful commitments does Yuki have remaining?",
      "What does Yuki do on Tuesday evening?",
      "What does Ben notice about Yuki?",
    ],
    trueFalse: [
      { text: "Yuki has only two meaningful commitments remaining.", answer: true },
      { text: "Yuki reads an entire novel purely for enjoyment.", answer: true },
      { text: "Ben notices Yuki seems more stressed than before.", answer: false },
      { text: "Yuki's grades have started improving slightly.", answer: true },
      { text: "Yuki finds debate team less enjoyable now.", answer: false },
    ],
    buildSentence: [
      { target: "I read a novel tonight.", jumbled: ["read", "a", "I", "novel", "tonight."] },
      { target: "My grades have started improving.", jumbled: ["My", "grades", "have", "started", "improving."] },
      { target: "Ben notices the change immediately.", jumbled: ["Ben", "notices", "the", "change", "immediately."] },
      { target: "This balance feels unfamiliar but welcome.", jumbled: ["This", "balance", "feels", "unfamiliar", "but", "welcome."] },
      { target: "I can actually focus without constant mental exhaustion.", jumbled: ["I", "can", "actually", "focus", "without", "constant", "mental", "exhaustion."] },
    ],
    mySentencePrompt: "Write or say one sentence about rediscovering free time after being very busy.",
    mySentenceExample: "I rediscovered free time to read after simplifying my schedule.",
  },
  {
    number: 10,
    title: "A Healthier Balance",
    image: null,
    imageNote: "Yuki sitting at her desk with a simple, organized planner, writing calmly, a peaceful and confident expression on her face.",
    story:
      "A month later, I look at my planner and barely recognize the overwhelmed, exhausted version of myself from before. I've learned that saying no isn't selfish or unreliable, despite what I had always assumed throughout my life. Ms. Farah's question still echoes sometimes: what would actually happen if I said no? Usually, the honest answer turns out to be far less catastrophic than my anxious mind originally predicted. I still care deeply about helping others and staying involved, but now within limits that actually protect my well-being too. This experience taught me that genuine generosity requires boundaries, not the complete absence of them entirely.",
    questions: [
      "How does Yuki feel looking at her planner a month later?",
      "What has Yuki learned about saying no?",
      "What did this experience teach Yuki about generosity?",
    ],
    trueFalse: [
      { text: "Yuki barely recognizes her exhausted former self.", answer: true },
      { text: "Yuki learned saying no is selfish and unreliable.", answer: false },
      { text: "Ms. Farah's question still echoes sometimes for Yuki.", answer: true },
      { text: "Yuki still cares about helping others within limits.", answer: true },
      { text: "Yuki learned generosity requires no boundaries at all.", answer: false },
    ],
    buildSentence: [
      { target: "I barely recognize my former self.", jumbled: ["I", "barely", "recognize", "my", "former", "self."] },
      { target: "I still care deeply about helping.", jumbled: ["I", "still", "care", "deeply", "about", "helping."] },
      { target: "Her question still echoes sometimes.", jumbled: ["Her", "question", "still", "echoes", "sometimes."] },
      { target: "Saying no isn't selfish or unreliable.", jumbled: ["Saying", "no", "isn't", "selfish", "or", "unreliable."] },
      { target: "Genuine generosity requires boundaries, not their complete absence.", jumbled: ["Genuine", "generosity", "requires", "boundaries,", "not", "their", "complete", "absence."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned about setting healthy boundaries.",
    mySentenceExample: "I learned that setting healthy boundaries helps me help others better.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A2 Teens digital storybook, Book 31: "Studying for the Big Exam"
// Static content -- no Supabase, mirrors the pattern in storybookData21.js
// and storybookData22.js (the Teens track). First book in a new A2 Teens
// batch (Books 31-38) -- Teens has been A1-only until now (Adults moved
// to A2 earlier, then Kids got its own A2 batch, Books 23-30). Uses the
// Teens-track pattern: 3 questions, 5 True/False and 5 Build-a-Sentence
// per chapter, Build-a-Sentence items ordered shortest-to-longest, with
// noticeably more complex grammar/vocabulary than the A1 Teens books
// (subordinate clauses, modals, past continuous, conditionals).
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Studying for the Big Exam";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Maya and Jordan sitting across from each other at a library table, covered in flashcards and open notebooks, both looking focused under warm reading lamps.";

export const CHARACTERS = [
  { name: "Maya", role: "The narrator, a teenager", look: "Dark hair pulled back, hoodie, thoughtful and easily overwhelmed by pressure at first." },
  { name: "Jordan", role: "Maya's classmate and study partner", look: "Short hair, glasses, calm and encouraging." },
  { name: "Mr. Cole", role: "Maya's teacher", look: "Cardigan, chalk-dusted hands, strict but fair." },
  { name: "Mom", role: "Maya's mother", look: "Reading glasses on a chain, supportive and practical." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Exam Announcement",
    image: null,
    imageNote: "Mr. Cole writing 'FINAL EXAM - Two Weeks' on the whiteboard while the class groans, Maya staring at her notebook with a worried expression.",
    story:
      "On Monday morning, Mr. Cole walks into class and writes something on the whiteboard that makes my stomach drop: “Final Exam — Two Weeks.” A quiet groan spreads across the room, and I feel my chest tighten with sudden panic. This exam covers three whole months of material, and honestly, I have barely reviewed any of it so far. While everyone else complains to their neighbors, I sit frozen, thinking about how far behind I already feel. Two weeks doesn't sound like nearly enough time to learn everything I need to know before this exam decides so much of my grade.",
    questions: [
      "What does Mr. Cole write on the whiteboard?",
      "How does Maya feel when she sees it?",
      "How much material does the exam cover?",
    ],
    trueFalse: [
      { text: "Mr. Cole announces the final exam is in two weeks.", answer: true },
      { text: "Maya feels completely calm about the news.", answer: false },
      { text: "The exam covers three months of material.", answer: true },
      { text: "Everyone in class is excited about the exam.", answer: false },
      { text: "Maya has already reviewed everything she needs.", answer: false },
    ],
    buildSentence: [
      { target: "My stomach drops suddenly.", jumbled: ["drops", "suddenly.", "My", "stomach"] },
      { target: "I feel behind already.", jumbled: ["feel", "behind", "I", "already."] },
      { target: "The exam decides my grade.", jumbled: ["decides", "my", "The", "exam", "grade."] },
      { target: "A quiet groan spreads across the room.", jumbled: ["spreads", "across", "A", "quiet", "groan", "the", "room."] },
      { target: "Two weeks doesn't sound like nearly enough time.", jumbled: ["doesn't", "sound", "Two", "weeks", "like", "nearly", "enough", "time."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you found out about a big deadline.",
    mySentenceExample: "I felt nervous when I found out my project was due in three days.",
  },
  {
    number: 2,
    title: "Making a Study Plan",
    image: null,
    imageNote: "Maya and Jordan sitting together at a lunch table, writing out a color-coded study calendar on a notebook page, both looking determined.",
    story:
      "At lunch, I explain my panic to Jordan, who has always been much more organized than I am about schoolwork. “Let's make a real plan instead of just worrying,” Jordan suggests calmly, pulling out a notebook. We divide the fourteen days into sections, deciding which subject we will focus on each afternoon after school. Jordan even suggests studying together at the library, since we struggle with different topics and could actually help each other. Writing everything down somehow makes the huge amount of material feel a little more manageable. For the first time since the announcement, I feel a small spark of hope.",
    questions: [
      "What does Jordan suggest making?",
      "How do they divide the fourteen days?",
      "Where do they decide to study together?",
    ],
    trueFalse: [
      { text: "Jordan suggests making a real study plan.", answer: true },
      { text: "They divide fourteen days by subject.", answer: true },
      { text: "Jordan refuses to study together at the library.", answer: false },
      { text: "Writing the plan makes Maya feel worse.", answer: false },
      { text: "Maya feels a small spark of hope.", answer: true },
    ],
    buildSentence: [
      { target: "Jordan is very organized.", jumbled: ["is", "very", "Jordan", "organized."] },
      { target: "We divide the days.", jumbled: ["divide", "the", "We", "days."] },
      { target: "We could help each other.", jumbled: ["could", "help", "We", "each", "other."] },
      { target: "Let's make a real plan.", jumbled: ["make", "a", "Let's", "real", "plan."] },
      { target: "Writing everything down makes the material feel more manageable.", jumbled: ["makes", "the", "Writing", "everything", "down", "material", "feel", "more", "manageable."] },
    ],
    mySentencePrompt: "Write or say one sentence about a plan you made to solve a problem.",
    mySentenceExample: "I made a plan to finish my homework before dinner every day.",
  },
  {
    number: 3,
    title: "Too Many Distractions",
    image: null,
    imageNote: "Maya sitting at her desk with an open textbook, but staring at her phone screen instead, notifications lighting up the display.",
    story:
      "Our first study session doesn't go nearly as well as I had hoped. I sit down with my textbook open, determined to focus, but my phone keeps buzzing with messages from group chats. Every few minutes, I check a notification, telling myself it will only take a second, but somehow twenty minutes disappear each time. When I finally look up, an entire hour has passed and I have barely read two pages. Jordan, who studies at my house today, notices my scattered attention immediately. “Maybe we should try something different tomorrow,” Jordan says gently, and I nod, embarrassed by how unfocused I have been.",
    questions: [
      "What keeps interrupting Maya while she studies?",
      "How much does Maya read in an hour?",
      "What does Jordan suggest?",
    ],
    trueFalse: [
      { text: "Maya's phone keeps buzzing with messages.", answer: true },
      { text: "Maya reads the whole textbook in an hour.", answer: false },
      { text: "Jordan studies at Maya's house that day.", answer: true },
      { text: "Jordan does not notice Maya's distraction.", answer: false },
      { text: "Jordan suggests trying something different.", answer: true },
    ],
    buildSentence: [
      { target: "My phone keeps buzzing.", jumbled: ["keeps", "buzzing.", "My", "phone"] },
      { target: "An hour has passed.", jumbled: ["has", "passed.", "An", "hour"] },
      { target: "I feel embarrassed about this.", jumbled: ["feel", "embarrassed", "I", "about", "this."] },
      { target: "Twenty minutes disappear each time.", jumbled: ["disappear", "each", "Twenty", "minutes", "time."] },
      { target: "Maybe we should try something different tomorrow.", jumbled: ["should", "try", "Maybe", "we", "something", "different", "tomorrow."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that distracts you when you try to focus.",
    mySentenceExample: "My phone distracts me a lot when I try to study.",
  },
  {
    number: 4,
    title: "A New Strategy",
    image: null,
    imageNote: "Maya's phone placed in another room while she studies at the kitchen table with flashcards, Mom setting a timer nearby.",
    story:
      "That evening, Mom notices my frustration and offers some advice from her own school days. “Try studying in short bursts, with real breaks in between,” she suggests, setting a timer for twenty-five minutes. She also recommends leaving my phone in another room completely, which sounds painful but strangely necessary. I make a stack of flashcards for vocabulary words instead of just rereading my notes passively. During my first real focused session, I actually remember information much better than before. When the timer finally rings, I feel surprised at how much I accomplished without constant interruptions pulling my attention away.",
    questions: [
      "What advice does Mom give Maya?",
      "What does Mom recommend Maya do with her phone?",
      "What does Maya make instead of just rereading notes?",
    ],
    trueFalse: [
      { text: "Mom suggests studying in short bursts with breaks.", answer: true },
      { text: "Mom tells Maya to keep her phone right beside her.", answer: false },
      { text: "Maya makes flashcards for vocabulary words.", answer: true },
      { text: "Maya remembers information worse than before.", answer: false },
      { text: "Maya feels surprised at how much she accomplished.", answer: true },
    ],
    buildSentence: [
      { target: "Mom offers some advice.", jumbled: ["offers", "some", "Mom", "advice."] },
      { target: "I make flashcards instead.", jumbled: ["make", "flashcards", "I", "instead."] },
      { target: "The timer finally rings.", jumbled: ["finally", "rings.", "The", "timer"] },
      { target: "I remember information much better.", jumbled: ["remember", "information", "I", "much", "better."] },
      { target: "Try studying in short bursts with real breaks.", jumbled: ["studying", "in", "Try", "short", "bursts", "with", "real", "breaks."] },
    ],
    mySentencePrompt: "Write or say one sentence about advice someone gave you that actually helped.",
    mySentenceExample: "My coach gave me advice about breathing that actually helped me relax.",
  },
  {
    number: 5,
    title: "Falling Behind",
    image: null,
    imageNote: "Maya looking over at Jordan's neatly organized notes at the library, comparing them anxiously to her own messier notebook.",
    story:
      "By the end of the first week, I glance over at Jordan's notes during our library session and feel a wave of anxiety rush through me. Jordan's notebook is perfectly organized with color-coded sections, while mine looks messy and incomplete in comparison. “You already know so much more than me,” I say quietly, my confidence sinking lower with every page I compare. Jordan looks up, surprised by my sudden discouragement. “We're just better at different subjects,” Jordan replies simply, but I can't shake the growing feeling that I might not be ready for this exam no matter how hard I try.",
    questions: [
      "What does Maya notice about Jordan's notes?",
      "How does Maya's notebook compare?",
      "What does Jordan say about their different strengths?",
    ],
    trueFalse: [
      { text: "Jordan's notes are color-coded and organized.", answer: true },
      { text: "Maya's notebook looks neater than Jordan's.", answer: false },
      { text: "Maya feels a wave of anxiety.", answer: true },
      { text: "Jordan says they are equally bad at everything.", answer: false },
      { text: "Maya worries she might not be ready.", answer: true },
    ],
    buildSentence: [
      { target: "Anxiety rushes through me.", jumbled: ["rushes", "through", "Anxiety", "me."] },
      { target: "My confidence keeps sinking.", jumbled: ["keeps", "sinking.", "My", "confidence"] },
      { target: "We're just better at different subjects.", jumbled: ["just", "better", "We're", "at", "different", "subjects."] },
      { target: "Jordan's notebook looks perfectly organized.", jumbled: ["looks", "perfectly", "Jordan's", "notebook", "organized."] },
      { target: "I can't shake this growing feeling of doubt.", jumbled: ["can't", "shake", "I", "this", "growing", "feeling", "of", "doubt."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you compared yourself to someone else.",
    mySentenceExample: "I compared my drawing to my friend's and felt a little discouraged.",
  },
  {
    number: 6,
    title: "Jordan's Encouragement",
    image: null,
    imageNote: "Jordan turning Maya's notebook toward her, pointing out a well-written answer, both smiling as they sit surrounded by open books.",
    story:
      "Noticing my discouragement, Jordan pauses our session and flips back through my notebook carefully. “Look at this answer you wrote yesterday,” Jordan says, pointing to a paragraph I had completely forgotten about. “This is actually better explained than mine.” I stare at my own words, surprised that they sound more confident than I remembered feeling while writing them. Jordan explains that everyone studies differently, and comparing our progress isn't fair to either of us. “Let's just focus on getting a little better each day instead,” Jordan suggests warmly. Hearing this reframes the whole exam in a way that finally feels achievable.",
    questions: [
      "What does Jordan point out in Maya's notebook?",
      "How does Maya feel reading her own answer?",
      "What does Jordan suggest focusing on instead?",
    ],
    trueFalse: [
      { text: "Jordan points out a well-written answer of Maya's.", answer: true },
      { text: "Maya's answer sounds worse than she remembered.", answer: false },
      { text: "Jordan says comparing progress isn't fair to either of them.", answer: true },
      { text: "Jordan suggests focusing only on winning.", answer: false },
      { text: "Maya feels the exam is finally achievable.", answer: true },
    ],
    buildSentence: [
      { target: "Jordan pauses our session.", jumbled: ["pauses", "our", "Jordan", "session."] },
      { target: "This sounds more confident.", jumbled: ["sounds", "more", "This", "confident."] },
      { target: "Everyone studies differently, honestly.", jumbled: ["studies", "differently,", "Everyone", "honestly."] },
      { target: "This is actually better explained than mine.", jumbled: ["is", "actually", "This", "better", "explained", "than", "mine."] },
      { target: "Let's just focus on getting a little better each day.", jumbled: ["just", "focus", "Let's", "on", "getting", "a", "little", "better", "each", "day."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you feel more confident.",
    mySentenceExample: "My friend helped me feel more confident before my presentation.",
  },
  {
    number: 7,
    title: "The Practice Test",
    image: null,
    imageNote: "Maya and Jordan sitting at separate desks with a timer running, both writing quickly on practice exam sheets, focused expressions.",
    story:
      "With one week left, Mr. Cole hands out a practice test to help us prepare for the real exam's format and timing. Jordan and I decide to take it together under real exam conditions, setting a strict timer and sitting apart so we can't help each other. My hands feel slightly shaky as I turn the first page, but I remind myself this is just practice, not the actual grade. Some questions feel surprisingly familiar from our study sessions, while others make me pause and think much harder. When the timer finally buzzes, I feel exhausted but oddly proud of pushing through it.",
    questions: [
      "What does Mr. Cole hand out?",
      "How do Maya and Jordan take the practice test?",
      "How does Maya feel when the timer buzzes?",
    ],
    trueFalse: [
      { text: "Mr. Cole hands out a practice test.", answer: true },
      { text: "Maya and Jordan help each other during the test.", answer: false },
      { text: "Maya's hands feel slightly shaky.", answer: true },
      { text: "Every question feels completely unfamiliar to Maya.", answer: false },
      { text: "Maya feels exhausted but proud afterward.", answer: true },
    ],
    buildSentence: [
      { target: "This is just practice.", jumbled: ["is", "just", "This", "practice."] },
      { target: "My hands feel shaky.", jumbled: ["feel", "shaky.", "My", "hands"] },
      { target: "The timer finally buzzes loudly.", jumbled: ["finally", "buzzes", "The", "timer", "loudly."] },
      { target: "Some questions feel surprisingly familiar.", jumbled: ["feel", "surprisingly", "Some", "questions", "familiar."] },
      { target: "I feel exhausted but oddly proud of pushing through it.", jumbled: ["feel", "exhausted", "I", "but", "oddly", "proud", "of", "pushing", "through", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing before doing something important.",
    mySentenceExample: "I practiced my speech many times before presenting it to the class.",
  },
  {
    number: 8,
    title: "Reviewing Mistakes",
    image: null,
    imageNote: "Maya and Jordan going through the graded practice test together, circling wrong answers in red pen and discussing corrections.",
    story:
      "The next day, Mr. Cole returns our graded practice tests, and I nervously flip to my score before reading any comments. It's not perfect, but it's better than I expected, especially considering how nervous I felt. Jordan and I sit down together to review every single mistake, discussing why each wrong answer happened instead of just moving past it. “This is actually the most useful part,” Jordan explains, “because now we know exactly what to review.” Going through our errors carefully, rather than feeling embarrassed about them, helps both of us understand the material in a way that simple rereading never could.",
    questions: [
      "What does Mr. Cole return the next day?",
      "How does Maya feel about her score?",
      "Why does Jordan say reviewing mistakes is useful?",
    ],
    trueFalse: [
      { text: "Mr. Cole returns their graded practice tests.", answer: true },
      { text: "Maya's score is worse than she expected.", answer: false },
      { text: "Jordan and Maya review every mistake together.", answer: true },
      { text: "Jordan says reviewing mistakes is a waste of time.", answer: false },
      { text: "Reviewing errors helps them understand the material better.", answer: true },
    ],
    buildSentence: [
      { target: "I check my score.", jumbled: ["check", "my", "I", "score."] },
      { target: "We review every mistake.", jumbled: ["review", "every", "We", "mistake."] },
      { target: "This is the most useful part.", jumbled: ["is", "the", "This", "most", "useful", "part."] },
      { target: "It's better than I expected.", jumbled: ["is", "better", "It's", "than", "I", "expected."] },
      { target: "Now we know exactly what to review.", jumbled: ["we", "know", "Now", "exactly", "what", "to", "review."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning from a mistake you made.",
    mySentenceExample: "I learned to double-check my answers after making a careless mistake.",
  },
  {
    number: 9,
    title: "Exam Day Nerves",
    image: null,
    imageNote: "Maya standing outside the exam hall taking a deep breath, Jordan giving her a reassuring nod nearby, other students filing inside.",
    story:
      "The morning of the actual exam arrives faster than I expected, and my stomach feels tight with nervous energy as I get ready. Mom makes my favorite breakfast, reminding me gently that I have prepared more than I realize over these past two weeks. At school, I meet Jordan outside the exam hall, and we exchange a quick, nervous smile. “We've got this,” Jordan says confidently, though I can tell they feel just as nervous as I do underneath their calm expression. Taking a deep breath, I remind myself of everything we practiced together and walk through the doors.",
    questions: [
      "How does Maya feel the morning of the exam?",
      "What does Mom remind Maya of?",
      "What does Jordan say outside the exam hall?",
    ],
    trueFalse: [
      { text: "Maya's stomach feels tight with nervous energy.", answer: true },
      { text: "Mom forgets to make Maya breakfast.", answer: false },
      { text: "Maya meets Jordan outside the exam hall.", answer: true },
      { text: "Jordan feels completely calm with no nerves at all.", answer: false },
      { text: "Maya reminds herself of everything they practiced.", answer: true },
    ],
    buildSentence: [
      { target: "My stomach feels tight.", jumbled: ["feels", "tight.", "My", "stomach"] },
      { target: "We've got this today.", jumbled: ["got", "this", "We've", "today."] },
      { target: "I take a deep breath.", jumbled: ["take", "a", "I", "deep", "breath."] },
      { target: "We exchange a nervous smile.", jumbled: ["exchange", "a", "We", "nervous", "smile."] },
      { target: "I have prepared more than I realize.", jumbled: ["have", "prepared", "I", "more", "than", "I", "realize."] },
    ],
    mySentencePrompt: "Write or say one sentence about how you felt before something important.",
    mySentenceExample: "I felt nervous but ready before my big soccer match.",
  },
  {
    number: 10,
    title: "The Results",
    image: null,
    imageNote: "Maya and Jordan opening their exam results together in the hallway, both breaking into relieved, proud smiles at what they see.",
    story:
      "A week later, Mr. Cole hands back our exam results, and my hands tremble slightly as I unfold the paper. My score is not perfect, but it's significantly better than I ever imagined possible two weeks ago. Jordan grins widely at their own paper beside me, and we both realize how far we've come since that panicked Monday morning. “We actually did it,” I say, still a little in disbelief at how much we improved through consistent effort. Walking home together, I understand now that studying isn't really about being perfect, it's about growing steadily and never giving up along the way.",
    questions: [
      "How does Maya feel unfolding her results?",
      "How does Maya's score compare to what she imagined?",
      "What does Maya understand about studying by the end?",
    ],
    trueFalse: [
      { text: "Maya's hands tremble as she unfolds the paper.", answer: true },
      { text: "Maya's score is worse than she imagined.", answer: false },
      { text: "Jordan also improved on the exam.", answer: true },
      { text: "Maya feels no sense of accomplishment at all.", answer: false },
      { text: "Maya learns studying is about growing steadily.", answer: true },
    ],
    buildSentence: [
      { target: "My hands tremble slightly.", jumbled: ["tremble", "slightly.", "My", "hands"] },
      { target: "We actually did it.", jumbled: ["actually", "did", "We", "it."] },
      { target: "Jordan grins widely too.", jumbled: ["grins", "widely", "Jordan", "too."] },
      { target: "We've come so far together.", jumbled: ["come", "so", "We've", "far", "together."] },
      { target: "Studying isn't about being perfect, it's about growing steadily.", jumbled: ["isn't", "about", "Studying", "being", "perfect,", "it's", "about", "growing", "steadily."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you achieved through steady effort.",
    mySentenceExample: "I improved my grades through steady effort over the whole semester.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

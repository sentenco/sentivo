// A2 Teens digital storybook, Book 36: "The School Newspaper"
// Static content -- no Supabase. Sixth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The School Newspaper";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Caleb sitting at a cluttered newspaper office desk, typing intently on a laptop surrounded by notebooks and a printed newspaper, Iris reading over his shoulder.";

export const CHARACTERS = [
  { name: "Caleb", role: "The narrator, a teenager", look: "Messy hair, flannel shirt, curious and determined once he finds a real story." },
  { name: "Ms. Rivera", role: "The newspaper's faculty editor", look: "Cardigan, red editing pen always in hand, cautious but fair." },
  { name: "Iris", role: "Caleb's fellow reporter", look: "Short curly hair, notebook always in her back pocket, sharp and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Joining the Newspaper",
    image: null,
    imageNote: "Caleb standing eagerly in the cramped school newspaper office, holding a pen and notepad, Ms. Rivera welcoming him at a cluttered desk.",
    story:
      "After reading every issue of our school newspaper obsessively for two years, I finally work up the courage to join the staff myself. Ms. Rivera welcomes me warmly into the cramped, cluttered office, explaining that new reporters usually start with smaller, simpler assignments before earning bigger stories. I nod eagerly, imagining myself uncovering something important and meaningful for the whole school to read about. “Everyone starts somewhere, Caleb,” she says, handing me a small stack of upcoming events to write about. Walking out with my very first assignment, I feel a genuine thrill about officially becoming part of something real.",
    questions: [
      "Why does Caleb decide to join the newspaper?",
      "What does Ms. Rivera explain to new reporters?",
      "How does Caleb feel with his first assignment?",
    ],
    trueFalse: [
      { text: "Caleb has read the newspaper for two years.", answer: true },
      { text: "Ms. Rivera says new reporters start with big stories immediately.", answer: false },
      { text: "Ms. Rivera hands Caleb upcoming events to write about.", answer: true },
      { text: "Caleb feels nothing special about his first assignment.", answer: false },
      { text: "The newspaper office is described as cramped and cluttered.", answer: true },
    ],
    buildSentence: [
      { target: "I finally join the staff.", jumbled: ["finally", "join", "I", "the", "staff."] },
      { target: "Everyone starts somewhere, honestly.", jumbled: ["starts", "somewhere,", "Everyone", "honestly."] },
      { target: "I feel a genuine thrill.", jumbled: ["feel", "a", "I", "genuine", "thrill."] },
      { target: "Ms. Rivera welcomes me warmly.", jumbled: ["welcomes", "me", "Ms.", "Rivera", "warmly."] },
      { target: "I imagine uncovering something important for the whole school.", jumbled: ["I", "imagine", "uncovering", "something", "important", "for", "the", "whole", "school."] },
    ],
    mySentencePrompt: "Write or say one sentence about joining a club or activity you were curious about.",
    mySentenceExample: "I joined the art club because I was curious about painting.",
  },
  {
    number: 2,
    title: "The First Assignment",
    image: null,
    imageNote: "Caleb sitting at a lunch table, disappointedly reviewing his notes about the school cafeteria menu change, students eating around him.",
    story:
      "My first assignment turns out to be reporting on a small change to the cafeteria menu, hardly the exciting investigative journalism I had imagined joining for. I interview the cafeteria manager, jot down uninspiring quotes about nutritional guidelines, and struggle to make three hundred words feel remotely interesting. Iris, another reporter who sits near me, notices my obvious disappointment and laughs sympathetically. “We all start with menu changes and lost-and-found updates,” she admits, sharing her own embarrassing first article about a broken water fountain. Somehow, knowing everyone begins this way makes the assignment feel slightly less discouraging.",
    questions: [
      "What is Caleb's first assignment about?",
      "Who does Caleb interview?",
      "What does Iris admit about her own first article?",
    ],
    trueFalse: [
      { text: "Caleb's first assignment is about a menu change.", answer: true },
      { text: "Caleb finds this assignment thrilling and exciting.", answer: false },
      { text: "Iris shares her own embarrassing first article.", answer: true },
      { text: "Iris's first article was about a broken water fountain.", answer: true },
      { text: "Caleb feels more discouraged after talking to Iris.", answer: false },
    ],
    buildSentence: [
      { target: "This isn't very exciting.", jumbled: ["isn't", "very", "This", "exciting."] },
      { target: "Iris notices my disappointment.", jumbled: ["notices", "my", "Iris", "disappointment."] },
      { target: "We all start somewhere similar.", jumbled: ["all", "start", "We", "somewhere", "similar."] },
      { target: "I struggle to make this interesting.", jumbled: ["struggle", "to", "I", "make", "this", "interesting."] },
      { target: "Knowing everyone begins this way feels less discouraging.", jumbled: ["Knowing", "everyone", "begins", "this", "way", "feels", "less", "discouraging."] },
    ],
    mySentencePrompt: "Write or say one sentence about a boring task that turned out okay once you started.",
    mySentenceExample: "Cleaning my room felt boring but turned out okay once I started.",
  },
  {
    number: 3,
    title: "A Bigger Story",
    image: null,
    imageNote: "Caleb overhearing two teachers whispering worriedly in the hallway about budget cuts, standing frozen with his notebook clutched to his chest.",
    story:
      "While walking through the hallway one afternoon, I overhear two teachers discussing the school's budget in hushed, worried tones near the art room. Something about “cutting the art program” catches my attention immediately, and I slow my pace, straining to hear more details without seeming obvious. This sounds like something students would genuinely want to know about, unlike menu changes or lost umbrellas. My heart races with unexpected excitement as I realize I might have accidentally stumbled onto real, meaningful news. I decide right there in the hallway that I need to investigate this story properly, whatever it takes.",
    questions: [
      "What does Caleb overhear teachers discussing?",
      "How does this compare to his previous stories?",
      "What does Caleb decide to do?",
    ],
    trueFalse: [
      { text: "Caleb overhears teachers discussing budget cuts.", answer: true },
      { text: "The teachers mention cutting the art program.", answer: true },
      { text: "Caleb feels bored hearing this news.", answer: false },
      { text: "Caleb decides to investigate the story.", answer: true },
      { text: "Caleb ignores what he overhears completely.", answer: false },
    ],
    buildSentence: [
      { target: "My heart races unexpectedly.", jumbled: ["races", "unexpectedly.", "My", "heart"] },
      { target: "I slow my pace.", jumbled: ["slow", "my", "I", "pace."] },
      { target: "This catches my attention immediately.", jumbled: ["catches", "my", "This", "attention", "immediately."] },
      { target: "I need to investigate this properly.", jumbled: ["need", "to", "I", "investigate", "this", "properly."] },
      { target: "Students would genuinely want to know about this.", jumbled: ["Students", "would", "genuinely", "want", "to", "know", "about", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about accidentally learning something important.",
    mySentenceExample: "I accidentally learned something important overhearing a conversation at school.",
  },
  {
    number: 4,
    title: "Asking Questions",
    image: null,
    imageNote: "Caleb holding a notebook and interviewing an art teacher in a colorful classroom filled with student paintings, both talking seriously.",
    story:
      "I start by visiting the art room directly, asking Mr. Foster, the art teacher, whether the rumors about budget cuts hold any truth. He confirms cautiously that funding discussions are indeed happening, though nothing official has been decided yet by the administration. Next, I interview several students in the hallway, discovering that many genuinely care about keeping the art program running for future classes. Taking careful notes, I realize this story involves real people with real concerns, unlike my previous, forgettable assignments. Gathering these different perspectives feels like actual journalism, exactly what originally drew me toward joining the newspaper.",
    questions: [
      "Who does Caleb interview first?",
      "What does Mr. Foster confirm?",
      "What does Caleb discover from interviewing students?",
    ],
    trueFalse: [
      { text: "Caleb interviews Mr. Foster, the art teacher.", answer: true },
      { text: "Mr. Foster says nothing official has been decided yet.", answer: true },
      { text: "No students care about the art program at all.", answer: false },
      { text: "Caleb interviews several students in the hallway.", answer: true },
      { text: "Caleb feels this story is just like his old assignments.", answer: false },
    ],
    buildSentence: [
      { target: "I visit the art room.", jumbled: ["visit", "the", "I", "art", "room."] },
      { target: "This feels like real journalism.", jumbled: ["feels", "like", "This", "real", "journalism."] },
      { target: "I interview several students too.", jumbled: ["interview", "several", "I", "students", "too."] },
      { target: "He confirms this cautiously to me.", jumbled: ["confirms", "this", "He", "cautiously", "to", "me."] },
      { target: "This story involves real people with real concerns.", jumbled: ["This", "story", "involves", "real", "people", "with", "real", "concerns."] },
    ],
    mySentencePrompt: "Write or say one sentence about interviewing or asking someone important questions.",
    mySentenceExample: "I interviewed my grandfather about his life for a school project.",
  },
  {
    number: 5,
    title: "Ms. Rivera's Doubt",
    image: null,
    imageNote: "Ms. Rivera sitting at her desk, reading Caleb's pitch with a concerned expression, Caleb standing nervously waiting for her response.",
    story:
      "Excited about my findings, I bring my story pitch to Ms. Rivera, expecting immediate enthusiastic approval for such an important topic. Instead, she reads it slowly, her expression thoughtful rather than immediately encouraging, which honestly surprises and worries me a little. “This is a serious, sensitive story. Are you prepared to handle it responsibly?” she asks carefully, not doubting my ability exactly, but emphasizing genuine journalistic responsibility. I assure her I understand the importance of accuracy and fairness, especially regarding something affecting real students and teachers. After a long pause, she finally nods, agreeing cautiously to let me pursue it under her guidance.",
    questions: [
      "How does Ms. Rivera react to Caleb's pitch?",
      "What does Ms. Rivera ask Caleb?",
      "What does Caleb assure her?",
    ],
    trueFalse: [
      { text: "Ms. Rivera immediately approves with pure enthusiasm.", answer: false },
      { text: "Ms. Rivera reads the pitch slowly and thoughtfully.", answer: true },
      { text: "Ms. Rivera asks if Caleb is prepared to handle it responsibly.", answer: true },
      { text: "Caleb refuses to promise accuracy or fairness.", answer: false },
      { text: "Ms. Rivera eventually agrees to let him pursue it.", answer: true },
    ],
    buildSentence: [
      { target: "This surprises me a little.", jumbled: ["surprises", "me", "This", "a", "little."] },
      { target: "She finally nods cautiously.", jumbled: ["finally", "nods", "She", "cautiously."] },
      { target: "I understand the importance of accuracy.", jumbled: ["understand", "the", "I", "importance", "of", "accuracy."] },
      { target: "This is a serious, sensitive story.", jumbled: ["is", "a", "This", "serious,", "sensitive", "story."] },
      { target: "Are you prepared to handle it responsibly?", jumbled: ["you", "prepared", "Are", "to", "handle", "it", "responsibly?"] },
    ],
    mySentencePrompt: "Write or say one sentence about being trusted with a serious responsibility.",
    mySentenceExample: "I was trusted with a serious responsibility when I watched my younger cousin alone.",
  },
  {
    number: 6,
    title: "Digging Deeper",
    image: null,
    imageNote: "Caleb and Iris sitting together at a shared desk, comparing interview notes and highlighting important quotes, papers spread everywhere.",
    story:
      "With official permission secured, Iris offers to help me dig deeper, and together we schedule an interview with the school principal directly. We prepare thoughtful, specific questions beforehand, wanting to understand the actual financial reasoning rather than relying only on hallway rumors. Iris teaches me how to structure genuinely useful interview questions, avoiding anything that sounds accusatory or one-sided unfairly. “Good journalism asks hard questions respectfully,” she explains, reviewing my draft questions with her sharp editing eye. By the time our interview is scheduled for Thursday, I feel far more prepared and considerably less nervous than I expected to feel.",
    questions: [
      "Who offers to help Caleb dig deeper?",
      "Who do they schedule an interview with?",
      "What does Iris teach Caleb?",
    ],
    trueFalse: [
      { text: "Iris offers to help Caleb dig deeper.", answer: true },
      { text: "They schedule an interview with the principal.", answer: true },
      { text: "Iris says good journalism avoids hard questions.", answer: false },
      { text: "Caleb feels less prepared after Iris's help.", answer: false },
      { text: "The interview is scheduled for Thursday.", answer: true },
    ],
    buildSentence: [
      { target: "Iris offers to help.", jumbled: ["offers", "to", "Iris", "help."] },
      { target: "We prepare thoughtful questions.", jumbled: ["prepare", "thoughtful", "We", "questions."] },
      { target: "I feel far more prepared now.", jumbled: ["feel", "far", "I", "more", "prepared", "now."] },
      { target: "Good journalism asks hard questions respectfully.", jumbled: ["Good", "journalism", "asks", "hard", "questions", "respectfully."] },
      { target: "We want to understand the actual financial reasoning.", jumbled: ["We", "want", "to", "understand", "the", "actual", "financial", "reasoning."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully for something important.",
    mySentenceExample: "I prepared carefully for my job interview by practicing common questions.",
  },
  {
    number: 7,
    title: "Writing the Draft",
    image: null,
    imageNote: "Caleb typing intently at a laptop late at night in his bedroom, crumpled paper drafts scattered around him, a cup of tea nearby.",
    story:
      "Armed with quotes from teachers, students, and the principal, I finally sit down to write the actual article, feeling the weight of responsibility more than ever. Balancing every perspective fairly proves harder than I expected, since I genuinely want to represent everyone's concerns without appearing biased toward any particular side. I rewrite my opening paragraph four separate times, searching for a tone that feels serious without becoming overly dramatic or sensational. Late into the evening, surrounded by crumpled paper and empty tea cups, I finally produce a draft that feels honest, balanced, and genuinely worth submitting to Ms. Rivera for review.",
    questions: [
      "What does Caleb finally sit down to do?",
      "What does Caleb find harder than expected?",
      "How many times does Caleb rewrite his opening paragraph?",
    ],
    trueFalse: [
      { text: "Caleb sits down to write the actual article.", answer: true },
      { text: "Balancing every perspective proves easier than expected.", answer: false },
      { text: "Caleb rewrites his opening paragraph four times.", answer: true },
      { text: "Caleb finishes quickly without much effort.", answer: false },
      { text: "Caleb feels the draft is honest and balanced.", answer: true },
    ],
    buildSentence: [
      { target: "I sit down to write.", jumbled: ["sit", "down", "I", "to", "write."] },
      { target: "I rewrite my opening paragraph.", jumbled: ["rewrite", "my", "I", "opening", "paragraph."] },
      { target: "This proves harder than expected.", jumbled: ["proves", "harder", "This", "than", "expected."] },
      { target: "I want to represent everyone's concerns fairly.", jumbled: ["want", "to", "I", "represent", "everyone's", "concerns", "fairly."] },
      { target: "I finally produce a draft worth submitting for review.", jumbled: ["I", "finally", "produce", "a", "draft", "worth", "submitting", "for", "review."] },
    ],
    mySentencePrompt: "Write or say one sentence about revising something many times to get it right.",
    mySentenceExample: "I revised my essay many times to make it clear and correct.",
  },
  {
    number: 8,
    title: "A Nervous Edit",
    image: null,
    imageNote: "Ms. Rivera sitting across from Caleb, marking up his printed draft with red pen while he watches nervously, both leaning over the paper.",
    story:
      "Ms. Rivera reads my draft slowly the next day, her red pen moving steadily across the paper while I sit nearby trying not to fidget nervously. “This part needs a source,” she notes at one point, and “this sentence sounds like your opinion, not fact,” at another. Though her feedback stings slightly, I recognize she's genuinely helping me become more precise and credible as a reporter. We spend nearly an hour revising sentences together, cutting anything unnecessary and strengthening weaker, unclear arguments throughout the article. By the end, my article looks noticeably different, but undeniably stronger and more professionally polished than my original draft.",
    questions: [
      "What does Ms. Rivera do with her red pen?",
      "What kind of feedback does she give?",
      "How does Caleb feel about her feedback?",
    ],
    trueFalse: [
      { text: "Ms. Rivera marks up the draft with a red pen.", answer: true },
      { text: "Ms. Rivera says one sentence sounds like opinion, not fact.", answer: true },
      { text: "Caleb ignores all of Ms. Rivera's feedback.", answer: false },
      { text: "They spend nearly an hour revising together.", answer: true },
      { text: "The final article looks weaker than the original draft.", answer: false },
    ],
    buildSentence: [
      { target: "Her feedback stings slightly.", jumbled: ["stings", "slightly.", "Her", "feedback"] },
      { target: "We revise sentences together.", jumbled: ["revise", "sentences", "We", "together."] },
      { target: "This part needs a source.", jumbled: ["part", "needs", "This", "a", "source."] },
      { target: "She's genuinely helping me improve.", jumbled: ["genuinely", "helping", "She's", "me", "improve."] },
      { target: "My article looks noticeably different but undeniably stronger.", jumbled: ["My", "article", "looks", "noticeably", "different", "but", "undeniably", "stronger."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving helpful feedback that improved your work.",
    mySentenceExample: "My teacher gave helpful feedback that improved my essay a lot.",
  },
  {
    number: 9,
    title: "Publication Day",
    image: null,
    imageNote: "Caleb standing by the school entrance watching students pick up copies of the newspaper, his byline visible on the front page.",
    story:
      "On publication day, I arrive early to watch students grab copies of the newspaper from the stack near the main entrance, my stomach fluttering nervously. Seeing my name printed as the byline above the article feels surreal, something I have imagined for two entire years finally becoming real. Throughout the day, classmates approach me with genuine questions and opinions about the art program, several thanking me directly for investigating something they actually cared about. Even a couple of skeptical teachers stop me in the hallway, acknowledging the article felt fair and well-researched despite the sensitive topic. This response feels better than any grade I have ever received.",
    questions: [
      "What does Caleb watch students do?",
      "How does Caleb feel seeing his byline?",
      "How do classmates react throughout the day?",
    ],
    trueFalse: [
      { text: "Caleb watches students grab newspaper copies.", answer: true },
      { text: "Caleb feels nothing seeing his byline printed.", answer: false },
      { text: "Classmates approach him with questions and opinions.", answer: true },
      { text: "Every teacher criticizes the article harshly.", answer: false },
      { text: "This response feels better than any grade to Caleb.", answer: true },
    ],
    buildSentence: [
      { target: "This feels surreal today.", jumbled: ["feels", "surreal", "This", "today."] },
      { target: "My stomach flutters nervously.", jumbled: ["flutters", "nervously.", "My", "stomach"] },
      { target: "Classmates thank me directly.", jumbled: ["thank", "me", "Classmates", "directly."] },
      { target: "I have imagined this for two years.", jumbled: ["have", "imagined", "I", "this", "for", "two", "years."] },
      { target: "This response feels better than any grade I've received.", jumbled: ["This", "response", "feels", "better", "than", "any", "grade", "I've", "received."] },
    ],
    mySentencePrompt: "Write or say one sentence about seeing your work recognized by other people.",
    mySentenceExample: "I felt proud seeing my painting displayed in the school hallway.",
  },
  {
    number: 10,
    title: "Making a Difference",
    image: null,
    imageNote: "Caleb standing with Ms. Rivera and Iris outside the art room, watching students paint again, a small announcement board mentioning saved funding nearby.",
    story:
      "Two weeks after publication, the administration announces they've reconsidered the budget decision, citing overwhelming student interest revealed through the newspaper article. Standing outside the art room, watching students paint just like always, I feel a swell of pride unlike anything I've experienced from schoolwork before. “You started this,” Iris reminds me, though I quickly credit her research help and Ms. Rivera's careful guidance throughout the entire process. Ms. Rivera smiles proudly, mentioning that journalism's real purpose is exactly this: giving people information that leads to genuine, meaningful change. Walking away, I already feel eager to find my next important story.",
    questions: [
      "What does the administration announce?",
      "How does Caleb feel watching students paint again?",
      "What does Ms. Rivera say journalism's real purpose is?",
    ],
    trueFalse: [
      { text: "The administration reconsiders the budget decision.", answer: true },
      { text: "Caleb feels nothing special watching the students paint.", answer: false },
      { text: "Caleb takes full credit and ignores Iris's help.", answer: false },
      { text: "Ms. Rivera says journalism's purpose is meaningful change.", answer: true },
      { text: "Caleb feels eager to find his next story.", answer: true },
    ],
    buildSentence: [
      { target: "You started this, honestly.", jumbled: ["started", "this,", "You", "honestly."] },
      { target: "I feel a swell of pride.", jumbled: ["feel", "a", "I", "swell", "of", "pride."] },
      { target: "Ms. Rivera smiles proudly today.", jumbled: ["smiles", "proudly", "Ms.", "Rivera", "today."] },
      { target: "I already feel eager for my next story.", jumbled: ["already", "feel", "I", "eager", "for", "my", "next", "story."] },
      { target: "Journalism's real purpose is giving people information that leads to change.", jumbled: ["Journalism's", "real", "purpose", "is", "giving", "people", "information", "that", "leads", "to", "change."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time your effort led to a real, positive change.",
    mySentenceExample: "My effort to recycle more led to a real change in my whole school.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

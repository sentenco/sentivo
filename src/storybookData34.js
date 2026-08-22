// A2 Teens digital storybook, Book 34: "The Group Project Disaster"
// Static content -- no Supabase. Fourth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The Group Project Disaster";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Grace and Amara standing together at a classroom table covered in poster boards and sticky notes, looking toward an empty chair where a third teammate should be sitting.";

export const CHARACTERS = [
  { name: "Grace", role: "The narrator, a teenager", look: "Short bob haircut, glasses, organized but easily frustrated by unfairness." },
  { name: "Amara", role: "Grace's groupmate", look: "Curly hair, cardigan, calm and diplomatic." },
  { name: "Tyler", role: "Grace's other groupmate", look: "Backwards cap, hoodie, seems distracted and disengaged at first." },
  { name: "Mr. Bennett", role: "The history teacher", look: "Tweed jacket, round glasses, fair but strict about deadlines." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Assigned to a Group",
    image: null,
    imageNote: "Mr. Bennett reading out group assignments from a clipboard while students shift in their seats, Grace exchanging a glance with Amara across the room.",
    story:
      "Mr. Bennett announces our history project on ancient civilizations, and instead of letting us pick partners, he assigns groups randomly using his clipboard. My stomach sinks slightly when I hear I'm grouped with Amara, whom I barely know, and Tyler, who seems to spend most classes staring out the window instead of taking notes. Amara catches my eye from across the room and gives a small, reassuring shrug, as if to say we'll figure this out together somehow. I try to stay optimistic, reminding myself that first impressions about classmates aren't always completely accurate representations of how they actually work.",
    questions: [
      "What project does Mr. Bennett announce?",
      "How does Mr. Bennett assign the groups?",
      "Who is Grace grouped with?",
    ],
    trueFalse: [
      { text: "Mr. Bennett assigns groups randomly.", answer: true },
      { text: "Grace chooses her own group members.", answer: false },
      { text: "Grace is grouped with Amara and Tyler.", answer: true },
      { text: "Tyler seems very focused in class.", answer: false },
      { text: "Amara gives Grace a reassuring shrug.", answer: true },
    ],
    buildSentence: [
      { target: "My stomach sinks slightly.", jumbled: ["sinks", "slightly.", "My", "stomach"] },
      { target: "I try to stay optimistic.", jumbled: ["try", "to", "I", "stay", "optimistic."] },
      { target: "We'll figure this out together.", jumbled: ["figure", "this", "We'll", "out", "together."] },
      { target: "Amara catches my eye across the room.", jumbled: ["catches", "my", "Amara", "eye", "across", "the", "room."] },
      { target: "First impressions aren't always completely accurate.", jumbled: ["impressions", "aren't", "First", "always", "completely", "accurate."] },
    ],
    mySentencePrompt: "Write or say one sentence about working with people you did not choose yourself.",
    mySentenceExample: "I worked with classmates I did not choose during our science project.",
  },
  {
    number: 2,
    title: "The First Meeting",
    image: null,
    imageNote: "Grace, Amara, and Tyler sitting at a library table, Grace writing a task list while Tyler leans back in his chair looking uninterested.",
    story:
      "We meet at the library after school to divide up the research and presentation tasks for our project on ancient Egypt. Amara suggests we each research a different section, then combine everything into one cohesive presentation before the deadline. Tyler agrees to research daily life along the Nile River, though he barely looks up from his phone the entire meeting. “Does two weeks sound like enough time for everyone?” I ask, glancing pointedly at Tyler, who just shrugs without offering any real response. Despite my slight unease about his engagement level, we leave with a reasonably clear plan.",
    questions: [
      "What topic does their project cover?",
      "What does Amara suggest they do?",
      "What section does Tyler agree to research?",
    ],
    trueFalse: [
      { text: "Their project is about ancient Egypt.", answer: true },
      { text: "Amara suggests researching different sections separately.", answer: true },
      { text: "Tyler agrees to research daily life along the Nile.", answer: true },
      { text: "Tyler pays close attention during the whole meeting.", answer: false },
      { text: "They leave the meeting with no plan at all.", answer: false },
    ],
    buildSentence: [
      { target: "We meet at the library.", jumbled: ["meet", "at", "We", "the", "library."] },
      { target: "Tyler just shrugs quietly.", jumbled: ["just", "shrugs", "Tyler", "quietly."] },
      { target: "I feel slightly uneasy about this.", jumbled: ["feel", "slightly", "I", "uneasy", "about", "this."] },
      { target: "We leave with a clear plan.", jumbled: ["leave", "with", "We", "a", "clear", "plan."] },
      { target: "Does two weeks sound like enough time for everyone?", jumbled: ["Does", "two", "weeks", "sound", "like", "enough", "time", "for", "everyone?"] },
    ],
    mySentencePrompt: "Write or say one sentence about dividing tasks with a group of people.",
    mySentenceExample: "We divided the tasks so everyone had an equal part to research.",
  },
  {
    number: 3,
    title: "Tyler's Excuses",
    image: null,
    imageNote: "Grace and Amara sitting alone at the library table, looking at an empty chair and checking their phones for a reply from Tyler that never comes.",
    story:
      "At our second meeting, Tyler doesn't show up at all, sending a brief text about ten minutes late claiming something unexpected came up at home. Amara and I wait around for another fifteen minutes before finally accepting he isn't coming and starting without him. The following week, the same pattern repeats itself, this time with a vague excuse about forgetting the meeting entirely. “Should we just tell Mr. Bennett?” I ask Amara, frustration creeping into my voice despite my efforts to stay patient. Amara suggests giving Tyler one more chance before escalating things, though I can tell she's growing frustrated too.",
    questions: [
      "What happens at their second meeting?",
      "What excuse does Tyler give the following week?",
      "What does Amara suggest doing?",
    ],
    trueFalse: [
      { text: "Tyler doesn't show up at the second meeting.", answer: true },
      { text: "Tyler texts an excuse about something at home.", answer: true },
      { text: "The same pattern happens again the following week.", answer: true },
      { text: "Amara suggests reporting Tyler immediately.", answer: false },
      { text: "Grace feels no frustration at all about this.", answer: false },
    ],
    buildSentence: [
      { target: "Tyler doesn't show up.", jumbled: ["doesn't", "show", "Tyler", "up."] },
      { target: "We wait around longer.", jumbled: ["wait", "around", "We", "longer."] },
      { target: "Should we just tell Mr. Bennett?", jumbled: ["we", "just", "Should", "tell", "Mr.", "Bennett?"] },
      { target: "Frustration creeps into my voice.", jumbled: ["creeps", "into", "Frustration", "my", "voice."] },
      { target: "Amara suggests giving Tyler one more chance.", jumbled: ["suggests", "giving", "Amara", "Tyler", "one", "more", "chance."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time someone did not show up when expected.",
    mySentenceExample: "My friend did not show up for our study group last week.",
  },
  {
    number: 4,
    title: "Picking Up the Slack",
    image: null,
    imageNote: "Grace and Amara staying late in the library, surrounded by extra books and notes, dividing Tyler's unfinished research between themselves with tired expressions.",
    story:
      "With the deadline only five days away and Tyler's section still completely untouched, Amara and I reluctantly decide to divide his research between ourselves. Staying late at the library becomes routine, and I notice both of us growing increasingly exhausted from carrying essentially three people's workload. “This isn't fair to us,” I mutter one evening, rubbing my tired eyes after another two-hour session. Amara agrees quietly, though she reminds me that failing the project would hurt all three of our grades equally, regardless of who actually did the work. Despite our resentment, quitting doesn't feel like a real option.",
    questions: [
      "How many days remain before the deadline?",
      "What do Grace and Amara decide to do?",
      "What does Amara remind Grace about failing?",
    ],
    trueFalse: [
      { text: "The deadline is only five days away.", answer: true },
      { text: "Tyler's section is already finished by this point.", answer: false },
      { text: "Grace and Amara divide his research between them.", answer: true },
      { text: "Amara says failing would only hurt Tyler's grade.", answer: false },
      { text: "Grace feels this situation isn't fair to them.", answer: true },
    ],
    buildSentence: [
      { target: "This isn't fair to us.", jumbled: ["isn't", "fair", "This", "to", "us."] },
      { target: "We grow increasingly exhausted.", jumbled: ["grow", "increasingly", "We", "exhausted."] },
      { target: "Staying late becomes routine now.", jumbled: ["staying", "late", "Staying", "becomes", "routine", "now."] },
      { target: "Amara agrees quietly with me.", jumbled: ["agrees", "quietly", "Amara", "with", "me."] },
      { target: "Failing the project would hurt all three of us equally.", jumbled: ["Failing", "the", "project", "would", "hurt", "all", "three", "of", "us", "equally."] },
    ],
    mySentencePrompt: "Write or say one sentence about doing extra work because someone else didn't finish theirs.",
    mySentenceExample: "I did extra chores because my brother forgot to finish his part.",
  },
  {
    number: 5,
    title: "Growing Frustration",
    image: null,
    imageNote: "Grace sitting at her desk at home late at night, staring frustrated at her laptop screen filled with unfinished slides, a clock showing it's nearly midnight.",
    story:
      "Working alone late one night on the final slides, my frustration with Tyler boils over into something closer to genuine anger than mild annoyance. I imagine confronting him dramatically in front of the whole class, listing every missed meeting and broken promise in painful detail. Part of me wants to simply present without his section at all, letting him face whatever consequences come from his own choices. But doing that would also lower my own grade unfairly, since group projects get evaluated as a complete, unified whole. Staring at the clock reading nearly midnight, exhaustion mixes uncomfortably with my simmering resentment toward Tyler.",
    questions: [
      "What does Grace's frustration turn into?",
      "What does Grace imagine doing?",
      "Why can't Grace just present without Tyler's section?",
    ],
    trueFalse: [
      { text: "Grace's frustration turns into genuine anger.", answer: true },
      { text: "Grace imagines confronting Tyler dramatically.", answer: true },
      { text: "Group projects get graded individually, not as a whole.", answer: false },
      { text: "The clock reads nearly midnight.", answer: true },
      { text: "Grace feels completely calm and unbothered.", answer: false },
    ],
    buildSentence: [
      { target: "My frustration boils over.", jumbled: ["boils", "over.", "My", "frustration"] },
      { target: "Exhaustion mixes with resentment.", jumbled: ["mixes", "with", "Exhaustion", "resentment."] },
      { target: "It's nearly midnight now.", jumbled: ["nearly", "midnight", "It's", "now."] },
      { target: "I imagine confronting him dramatically.", jumbled: ["imagine", "confronting", "I", "him", "dramatically."] },
      { target: "Group projects get evaluated as a complete, unified whole.", jumbled: ["Group", "projects", "get", "evaluated", "as", "a", "complete,", "unified", "whole."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt frustrated with a group situation.",
    mySentenceExample: "I felt frustrated when my teammates didn't finish their part of the presentation.",
  },
  {
    number: 6,
    title: "A Difficult Conversation",
    image: null,
    imageNote: "Grace standing beside Tyler's locker in the hallway, arms crossed but voice calm, Tyler looking down at the floor guiltily as students pass by.",
    story:
      "The next morning, I decide direct conversation is more productive than continued silent resentment, so I approach Tyler at his locker before class. “We need to talk about the project,” I say firmly but calmly, having practiced this exact sentence in my head all morning. Tyler's shoulders tense immediately, and he starts mumbling another excuse before I gently but firmly cut him off. “I'm not trying to attack you. I just need to understand what's actually going on,” I explain, surprising myself with how much calmer I sound than I actually feel. Something shifts slightly in his guarded expression.",
    questions: [
      "What does Grace decide to do?",
      "Where does Grace approach Tyler?",
      "What does Grace say she's not trying to do?",
    ],
    trueFalse: [
      { text: "Grace decides to talk to Tyler directly.", answer: true },
      { text: "Grace approaches Tyler at his locker.", answer: true },
      { text: "Grace yells angrily at Tyler immediately.", answer: false },
      { text: "Grace says she just wants to understand what's going on.", answer: true },
      { text: "Tyler's expression stays completely unchanged.", answer: false },
    ],
    buildSentence: [
      { target: "We need to talk.", jumbled: ["need", "to", "We", "talk."] },
      { target: "His shoulders tense immediately.", jumbled: ["tense", "immediately.", "His", "shoulders"] },
      { target: "I'm not trying to attack you.", jumbled: ["not", "trying", "I'm", "to", "attack", "you."] },
      { target: "Something shifts slightly in his expression.", jumbled: ["shifts", "slightly", "Something", "in", "his", "expression."] },
      { target: "I sound much calmer than I actually feel.", jumbled: ["sound", "much", "I", "calmer", "than", "I", "actually", "feel."] },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult conversation you had with someone.",
    mySentenceExample: "I had a difficult conversation with my friend about missed plans, but it helped.",
  },
  {
    number: 7,
    title: "Tyler's Reason",
    image: null,
    imageNote: "Tyler sitting on a bench outside the school, explaining quietly to Grace with a tired, vulnerable expression, his backpack open with a part-time job schedule visible.",
    story:
      "Tyler finally admits the truth: his parents' recent divorce means he now works evening shifts at a grocery store to help with household expenses. “I didn't want anyone feeling sorry for me,” he mumbles, staring at his shoes rather than meeting my eyes directly. Suddenly, his missed meetings and vague excuses make painful, complicated sense in a way I hadn't considered at all. I feel a wave of guilt wash over my earlier anger, realizing I judged his situation without ever actually asking why. “Why didn't you just tell us?” I ask gently, and he shrugs, admitting he felt too embarrassed to explain everything.",
    questions: [
      "What does Tyler finally admit?",
      "Why didn't Tyler want to tell anyone?",
      "How does Grace feel after hearing the truth?",
    ],
    trueFalse: [
      { text: "Tyler works evening shifts at a grocery store.", answer: true },
      { text: "Tyler didn't want anyone feeling sorry for him.", answer: true },
      { text: "Grace feels no guilt about judging him earlier.", answer: false },
      { text: "Tyler felt too embarrassed to explain everything.", answer: true },
      { text: "Grace already knew about Tyler's situation before this.", answer: false },
    ],
    buildSentence: [
      { target: "Tyler finally admits the truth.", jumbled: ["finally", "admits", "Tyler", "the", "truth."] },
      { target: "This makes painful, complicated sense.", jumbled: ["makes", "painful,", "This", "complicated", "sense."] },
      { target: "I feel a wave of guilt.", jumbled: ["feel", "a", "I", "wave", "of", "guilt."] },
      { target: "Why didn't you just tell us?", jumbled: ["didn't", "you", "Why", "just", "tell", "us?"] },
      { target: "I judged his situation without ever actually asking why.", jumbled: ["judged", "his", "I", "situation", "without", "ever", "actually", "asking", "why."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning the real reason behind someone's behavior.",
    mySentenceExample: "I learned the real reason my friend was quiet was that she felt sick.",
  },
  {
    number: 8,
    title: "Working It Out",
    image: null,
    imageNote: "Grace, Amara, and Tyler sitting together at the library table, all three actively working now, Tyler typing on a laptop with a determined expression.",
    story:
      "After learning about Tyler's situation, the three of us sit down together to create a fairer, more realistic plan for finishing the project. “What if you handle the parts you can do quickly at home, and we handle anything requiring extra library time?” Amara suggests thoughtfully, and Tyler nods gratefully at the flexible compromise. He commits to writing his section over the weekend when his work schedule allows more free time. Watching him actually engage now, typing quickly with genuine focus, I realize how differently this whole situation might have gone if we had simply talked sooner instead of assuming the worst.",
    questions: [
      "What plan do they create together?",
      "What does Amara suggest?",
      "What does Tyler commit to doing?",
    ],
    trueFalse: [
      { text: "They create a fairer plan together.", answer: true },
      { text: "Amara suggests Tyler handle quick parts at home.", answer: true },
      { text: "Tyler refuses to commit to anything.", answer: false },
      { text: "Tyler starts actually engaging and typing with focus.", answer: true },
      { text: "Grace realizes talking sooner might have helped.", answer: true },
    ],
    buildSentence: [
      { target: "We create a fairer plan.", jumbled: ["create", "a", "We", "fairer", "plan."] },
      { target: "Tyler nods gratefully back.", jumbled: ["nods", "gratefully", "Tyler", "back."] },
      { target: "He commits to writing his section.", jumbled: ["commits", "to", "He", "writing", "his", "section."] },
      { target: "Amara suggests this thoughtfully to us.", jumbled: ["suggests", "this", "Amara", "thoughtfully", "to", "us."] },
      { target: "This might have gone differently if we talked sooner.", jumbled: ["This", "might", "have", "gone", "differently", "if", "we", "talked", "sooner."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding a fair compromise with someone.",
    mySentenceExample: "We found a fair compromise about who would clean each part of the room.",
  },
  {
    number: 9,
    title: "Presentation Day",
    image: null,
    imageNote: "Grace, Amara, and Tyler standing together at the front of the classroom, presenting their ancient Egypt poster confidently, Mr. Bennett watching with an approving nod.",
    story:
      "On presentation day, all three of us stand together at the front of the classroom, our poster displaying weeks of combined, genuine effort. Tyler speaks clearly about daily life along the Nile River, and I notice a flicker of pride cross his face when classmates ask him engaged follow-up questions. Amara and I present our sections smoothly too, having practiced together the night before to ensure everything flows naturally as one cohesive presentation. Mr. Bennett nods approvingly throughout, occasionally jotting notes on his clipboard while we speak. Finishing together feels genuinely satisfying, unlike the resentful ending I had once imagined weeks earlier.",
    questions: [
      "What does their poster display?",
      "How does Tyler feel when classmates ask questions?",
      "How does finishing together feel to Grace?",
    ],
    trueFalse: [
      { text: "All three of them present together.", answer: true },
      { text: "Tyler refuses to speak during the presentation.", answer: false },
      { text: "A flicker of pride crosses Tyler's face.", answer: true },
      { text: "Mr. Bennett nods approvingly during their presentation.", answer: true },
      { text: "Grace feels resentful at the end.", answer: false },
    ],
    buildSentence: [
      { target: "We stand together proudly.", jumbled: ["stand", "together", "We", "proudly."] },
      { target: "This feels genuinely satisfying now.", jumbled: ["feels", "genuinely", "This", "satisfying", "now."] },
      { target: "Tyler speaks clearly today.", jumbled: ["speaks", "clearly", "Tyler", "today."] },
      { target: "Mr. Bennett nods approvingly throughout.", jumbled: ["nods", "approvingly", "Mr.", "Bennett", "throughout."] },
      { target: "Everything flows naturally as one cohesive presentation.", jumbled: ["Everything", "flows", "naturally", "as", "one", "cohesive", "presentation."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting something you worked hard on with a team.",
    mySentenceExample: "I felt proud presenting our team's science project after weeks of hard work.",
  },
  {
    number: 10,
    title: "A Fair Grade, A Real Lesson",
    image: null,
    imageNote: "Grace, Amara, and Tyler laughing together outside the classroom after receiving their grade, Tyler showing them something on his phone.",
    story:
      "A few days later, Mr. Bennett returns our graded projects, and I feel genuine relief seeing a strong grade for all three of us equally. More importantly than the grade itself, though, I realize how close I came to judging Tyler unfairly without ever understanding his actual circumstances. Walking out of class together, Tyler mentions he might invite us both to his family's small apartment sometime, something that feels like real friendship forming from what started as pure frustration. “Thanks for actually asking instead of just being angry,” he tells me quietly, and I nod, genuinely grateful I chose conversation over assumption.",
    questions: [
      "What grade do they receive?",
      "What does Grace realize was more important than the grade?",
      "What does Tyler thank Grace for?",
    ],
    trueFalse: [
      { text: "They receive a strong grade equally.", answer: true },
      { text: "Grace realizes she almost judged Tyler unfairly.", answer: true },
      { text: "Tyler never wants to speak to Grace again.", answer: false },
      { text: "Tyler thanks Grace for actually asking instead of being angry.", answer: true },
      { text: "Grace regrets choosing conversation over assumption.", answer: false },
    ],
    buildSentence: [
      { target: "I feel genuine relief.", jumbled: ["feel", "genuine", "I", "relief."] },
      { target: "We receive a strong grade.", jumbled: ["receive", "a", "We", "strong", "grade."] },
      { target: "This feels like real friendship.", jumbled: ["feels", "like", "This", "real", "friendship."] },
      { target: "I chose conversation over assumption.", jumbled: ["chose", "conversation", "I", "over", "assumption."] },
      { target: "Thanks for actually asking instead of just being angry.", jumbled: ["Thanks", "for", "actually", "asking", "instead", "of", "just", "being", "angry."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time understanding someone changed how you felt about them.",
    mySentenceExample: "Understanding my classmate's busy schedule changed how I felt about her missed meetings.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

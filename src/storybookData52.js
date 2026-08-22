// B1 Teens digital storybook, Book 52: "The Anxiety Before the Presentation"
// Static content -- no Supabase. Fourth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The Anxiety Before the Presentation";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Aisha standing alone in an empty classroom, practicing in front of a whiteboard with note cards shaking slightly in her hands, afternoon light through the windows.";

export const CHARACTERS = [
  { name: "Aisha", role: "The narrator, a teenager", look: "Neat braids, cardigan, thoughtful and prone to overthinking under pressure." },
  { name: "Ms. Whitfield", role: "Aisha's English teacher", look: "Patterned scarf, calm voice, perceptive and supportive." },
  { name: "Devon", role: "Aisha's classmate", look: "Backpack covered in pins, relaxed manner, unexpectedly understanding." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Assignment",
    image: null,
    imageNote: "Ms. Whitfield writing 'Individual Presentations - Friday' on the whiteboard while Aisha stares at it with a sinking expression.",
    story:
      "Ms. Whitfield announces that our next assignment requires each of us to present a research topic alone in front of the class. My stomach immediately tightens, a familiar, uncomfortable sensation whenever public speaking gets mentioned in any context. While other students seem only mildly annoyed by the assignment, I feel something closer to genuine panic building inside me. I've always struggled with presentations, my voice shaking and my mind going completely blank under pressure. If I could choose any assignment except this one, I honestly would, without hesitation or regret. Friday feels impossibly close already, even though it's technically still five days away.",
    questions: [
      "What does the assignment require each student to do?",
      "How does Aisha's stomach react to the news?",
      "What has Aisha always struggled with?",
    ],
    trueFalse: [
      { text: "The assignment requires an individual presentation.", answer: true },
      { text: "Aisha feels completely unbothered by this news.", answer: false },
      { text: "Aisha has always struggled with presentations.", answer: true },
      { text: "Other students seem only mildly annoyed.", answer: true },
      { text: "Friday feels comfortably far away to Aisha.", answer: false },
    ],
    buildSentence: [
      { target: "My stomach immediately tightens.", jumbled: ["stomach", "immediately", "My", "tightens."] },
      { target: "My mind goes completely blank.", jumbled: ["My", "mind", "goes", "completely", "blank."] },
      { target: "I feel something closer to panic.", jumbled: ["I", "feel", "something", "closer", "to", "panic."] },
      { target: "Friday feels impossibly close already.", jumbled: ["Friday", "feels", "impossibly", "close", "already."] },
      { target: "If I could choose any other assignment, I would.", jumbled: ["If", "I", "could", "choose", "any", "other", "assignment,", "I", "would."] },
    ],
    mySentencePrompt: "Write or say one sentence about an assignment or task that made you feel nervous.",
    mySentenceExample: "A speaking assignment made me feel nervous when I first heard about it.",
  },
  {
    number: 2,
    title: "Avoiding the Inevitable",
    image: null,
    imageNote: "Aisha sitting at her desk at home, staring at a blank document on her laptop, notes scattered but untouched around her.",
    story:
      "That evening, I open my laptop to start researching, but I find myself scrolling through unrelated websites instead. Somehow, cleaning my entire room suddenly feels more urgent than actually preparing for something that terrifies me. I know avoiding this won't make Friday disappear, but knowing something logically doesn't always change how I behave. By midnight, I've accomplished almost nothing related to my actual assignment, just a spotless room and wasted hours. Frustrated with myself, I finally write down a topic, though even that small step feels exhausting somehow. Tomorrow, I promise myself, I'll actually start working on this instead of avoiding it completely.",
    questions: [
      "What does Aisha do instead of researching?",
      "What does Aisha realize about avoiding the assignment?",
      "What has Aisha accomplished by midnight?",
    ],
    trueFalse: [
      { text: "Aisha scrolls through unrelated websites instead.", answer: true },
      { text: "Aisha immediately starts researching without any delay.", answer: false },
      { text: "Aisha realizes avoiding this won't make Friday disappear.", answer: true },
      { text: "Aisha has accomplished almost nothing by midnight.", answer: true },
      { text: "Aisha feels energized rather than exhausted writing the topic.", answer: false },
    ],
    buildSentence: [
      { target: "I find myself scrolling instead.", jumbled: ["find", "myself", "I", "scrolling", "instead."] },
      { target: "Even that small step feels exhausting.", jumbled: ["Even", "that", "small", "step", "feels", "exhausting."] },
      { target: "I promise myself to start tomorrow.", jumbled: ["I", "promise", "myself", "to", "start", "tomorrow."] },
      { target: "I've accomplished almost nothing tonight.", jumbled: ["I've", "accomplished", "almost", "nothing", "tonight."] },
      { target: "Knowing this logically doesn't always change how I behave.", jumbled: ["Knowing", "this", "logically", "doesn't", "always", "change", "how", "I", "behave."] },
    ],
    mySentencePrompt: "Write or say one sentence about avoiding something you knew you needed to do.",
    mySentenceExample: "I avoided studying even though I knew I needed to prepare.",
  },
  {
    number: 3,
    title: "Talking to Ms. Whitfield",
    image: null,
    imageNote: "Aisha standing nervously at Ms. Whitfield's desk after class, the teacher listening with a kind, attentive expression.",
    story:
      "After class the next day, I gather enough courage to admit my anxiety about the presentation to Ms. Whitfield directly. She listens patiently, nodding as I explain how my voice shakes and my thoughts scatter whenever I'm in front of people. Rather than dismissing my concerns, she shares that many students experience exactly this same fear before presenting. “Would it help if you practiced in front of just me first, before the actual presentation?” she offers kindly. Relief washes over me instantly, since practicing with one person feels dramatically less terrifying than facing the entire class immediately. We schedule a practice session for Thursday, giving me something concrete to work toward.",
    questions: [
      "What does Aisha admit to Ms. Whitfield?",
      "What does Ms. Whitfield say about other students?",
      "What does Ms. Whitfield offer Aisha?",
    ],
    trueFalse: [
      { text: "Aisha admits her anxiety to Ms. Whitfield.", answer: true },
      { text: "Ms. Whitfield dismisses Aisha's concerns entirely.", answer: false },
      { text: "Ms. Whitfield says many students share this same fear.", answer: true },
      { text: "Ms. Whitfield offers to let Aisha practice with her first.", answer: true },
      { text: "Aisha feels this offer makes things worse.", answer: false },
    ],
    buildSentence: [
      { target: "I gather enough courage today.", jumbled: ["I", "gather", "enough", "courage", "today."] },
      { target: "Relief washes over me instantly.", jumbled: ["Relief", "washes", "over", "me", "instantly."] },
      { target: "She listens patiently to me.", jumbled: ["She", "listens", "patiently", "to", "me."] },
      { target: "This feels less terrifying now.", jumbled: ["This", "feels", "less", "terrifying", "now."] },
      { target: "Many students experience exactly this same fear.", jumbled: ["Many", "students", "experience", "exactly", "this", "same", "fear."] },
    ],
    mySentencePrompt: "Write or say one sentence about telling someone about a fear you had.",
    mySentenceExample: "I told my teacher about my fear of speaking in front of others.",
  },
  {
    number: 4,
    title: "Preparing the Content",
    image: null,
    imageNote: "Aisha sitting at her desk surrounded by research notes and index cards, highlighting key points, focused and determined.",
    story:
      "With a concrete plan in place, I finally dive into researching my topic properly, focused entirely on ocean conservation. Once I actually start, I realize the material genuinely interests me, which somehow makes the process less painful overall. I organize my research into clear sections, writing key points on index cards to help me stay on track later. While writing, I occasionally forget about the presentation itself, absorbed instead in learning fascinating facts about coral reefs. By evening, I have a solid outline, complete with statistics, images, and a clear structure for delivery. Although the content feels ready, the thought of actually speaking it aloud still makes my chest tighten uncomfortably.",
    questions: [
      "What topic does Aisha research?",
      "What does Aisha realize once she starts?",
      "What does Aisha have by evening?",
    ],
    trueFalse: [
      { text: "Aisha's topic is ocean conservation.", answer: true },
      { text: "Aisha finds the material genuinely interesting.", answer: true },
      { text: "Aisha writes key points on index cards.", answer: true },
      { text: "Aisha has nothing prepared by evening.", answer: false },
      { text: "Aisha feels completely calm about speaking it aloud.", answer: false },
    ],
    buildSentence: [
      { target: "I finally dive into researching.", jumbled: ["I", "finally", "dive", "into", "researching."] },
      { target: "This genuinely interests me now.", jumbled: ["This", "genuinely", "interests", "me", "now."] },
      { target: "I have a solid outline now.", jumbled: ["I", "have", "a", "solid", "outline", "now."] },
      { target: "My chest tightens uncomfortably still.", jumbled: ["My", "chest", "tightens", "uncomfortably", "still."] },
      { target: "Although the content feels ready, speaking it still worries me.", jumbled: ["Although", "the", "content", "feels", "ready,", "speaking", "it", "still", "worries", "me."] },
    ],
    mySentencePrompt: "Write or say one sentence about becoming genuinely interested in a topic you had to research.",
    mySentenceExample: "I became genuinely interested in space after researching it for a project.",
  },
  {
    number: 5,
    title: "The Practice Session",
    image: null,
    imageNote: "Aisha standing in front of Ms. Whitfield in an empty classroom, notecards shaking slightly, the teacher smiling encouragingly.",
    story:
      "Thursday arrives, and I stand nervously in front of Ms. Whitfield in the empty classroom after school. My hands shake as I begin, my voice barely above a whisper for the first sentence or two. She waits patiently, offering a reassuring nod rather than interrupting or correcting me immediately. As I continue, something unexpected happens: I start focusing on the content itself rather than my own fear. By the middle of my practice run, my voice has steadied considerably, though my hands still tremble slightly. Afterward, Ms. Whitfield offers specific, gentle feedback, noting that my knowledge clearly shows despite my visible nervousness.",
    questions: [
      "Where does Aisha practice her presentation?",
      "How does Aisha's voice sound at first?",
      "What happens as Aisha continues speaking?",
    ],
    trueFalse: [
      { text: "Aisha practices in the empty classroom after school.", answer: true },
      { text: "Aisha's voice is loud and confident from the start.", answer: false },
      { text: "Aisha starts focusing on the content rather than her fear.", answer: true },
      { text: "Aisha's voice steadies by the middle of her practice.", answer: true },
      { text: "Ms. Whitfield offers no feedback at all afterward.", answer: false },
    ],
    buildSentence: [
      { target: "My hands shake as I begin.", jumbled: ["My", "hands", "shake", "as", "I", "begin."] },
      { target: "She waits patiently for me.", jumbled: ["She", "waits", "patiently", "for", "me."] },
      { target: "My voice has steadied considerably.", jumbled: ["My", "voice", "has", "steadied", "considerably."] },
      { target: "I focus on the content itself.", jumbled: ["I", "focus", "on", "the", "content", "itself."] },
      { target: "My knowledge clearly shows despite my nervousness.", jumbled: ["My", "knowledge", "clearly", "shows", "despite", "my", "nervousness."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something difficult with support from someone.",
    mySentenceExample: "I practiced my speech with support from my teacher before the real thing.",
  },
  {
    number: 6,
    title: "A Conversation with Devon",
    image: null,
    imageNote: "Devon sitting beside Aisha in the school hallway, talking casually, both leaning against lockers with relaxed body language.",
    story:
      "In the hallway before lunch, Devon mentions casually that he also gets nervous before presentations, which genuinely surprises me. He always seems so relaxed and confident during class discussions, so I assumed public speaking came naturally to him. “I just don't let people see it as much,” he admits, shrugging like it's not a big deal at all. He shares a small trick that helps him: picking one friendly face in the crowd to focus on while speaking. I hadn't considered that even outwardly confident people might be hiding similar anxiety underneath. This conversation, unexpectedly, makes me feel considerably less alone heading into tomorrow's actual presentation.",
    questions: [
      "What does Devon mention to Aisha?",
      "What had Aisha assumed about Devon?",
      "What trick does Devon share with Aisha?",
    ],
    trueFalse: [
      { text: "Devon mentions he also gets nervous before presentations.", answer: true },
      { text: "Aisha had assumed public speaking came naturally to Devon.", answer: true },
      { text: "Devon shares a trick about focusing on a friendly face.", answer: true },
      { text: "Aisha feels more alone after this conversation.", answer: false },
      { text: "Devon says he never hides his nervousness at all.", answer: false },
    ],
    buildSentence: [
      { target: "This genuinely surprises me now.", jumbled: ["This", "genuinely", "surprises", "me", "now."] },
      { target: "He shares a small trick.", jumbled: ["He", "shares", "a", "small", "trick."] },
      { target: "I feel considerably less alone.", jumbled: ["I", "feel", "considerably", "less", "alone."] },
      { target: "I hadn't considered that possibility before.", jumbled: ["I", "hadn't", "considered", "that", "possibility", "before."] },
      { target: "Even confident people might be hiding similar anxiety.", jumbled: ["Even", "confident", "people", "might", "be", "hiding", "similar", "anxiety."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone shared a fear you thought was only yours.",
    mySentenceExample: "I discovered my friend shared the same fear of flying that I had.",
  },
  {
    number: 7,
    title: "The Morning Of",
    image: null,
    imageNote: "Aisha standing in front of her bathroom mirror that morning, taking a deep breath, her notecards held tightly in one hand.",
    story:
      "I wake up earlier than necessary, my stomach already twisted into familiar, uncomfortable knots before I even leave bed. Standing in front of the mirror, I practice Devon's trick, imagining a friendly face I'll focus on later. My mom notices my quietness at breakfast and reminds me gently that being nervous doesn't mean I'll fail today. If I focus only on getting through it, rather than being perfect, maybe that expectation feels more manageable. I review my notecards one final time on the bus, my hands slightly less shaky than they were yesterday. By the time I reach school, nervous energy has replaced pure dread, which somehow feels like real progress.",
    questions: [
      "How does Aisha's stomach feel when she wakes up?",
      "What does Aisha practice in front of the mirror?",
      "What does Aisha's mom remind her at breakfast?",
    ],
    trueFalse: [
      { text: "Aisha's stomach feels twisted into knots.", answer: true },
      { text: "Aisha practices Devon's trick in front of the mirror.", answer: true },
      { text: "Aisha's mom says being nervous means she'll fail.", answer: false },
      { text: "Aisha's hands are slightly less shaky than yesterday.", answer: true },
      { text: "Aisha feels pure dread by the time she reaches school.", answer: false },
    ],
    buildSentence: [
      { target: "I wake up earlier today.", jumbled: ["wake", "up", "I", "earlier", "today."] },
      { target: "I review my notecards again.", jumbled: ["review", "my", "I", "notecards", "again."] },
      { target: "This feels like real progress.", jumbled: ["This", "feels", "like", "real", "progress."] },
      { target: "Being nervous doesn't mean I'll fail.", jumbled: ["Being", "nervous", "doesn't", "mean", "I'll", "fail."] },
      { target: "If I focus on getting through it, that feels manageable.", jumbled: ["If", "I", "focus", "on", "getting", "through", "it,", "that", "feels", "manageable."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small change in how you felt on an important day.",
    mySentenceExample: "On the day of my exam, my nervousness slowly turned into focus.",
  },
  {
    number: 8,
    title: "Standing in Front of the Class",
    image: null,
    imageNote: "Aisha standing at the front of the classroom holding notecards, mid-presentation, Devon visible in the crowd giving a small encouraging nod.",
    story:
      "When my name is called, my legs feel heavy walking to the front, but I remind myself of everything I practiced. I find Devon's face in the crowd, and he gives me a small, encouraging nod that steadies me slightly. My first sentence comes out shakier than I'd like, but I push through instead of stopping to restart. Slowly, as I move through my notecards, my voice gains strength, and the words start flowing more naturally. I even glance up occasionally, noticing classmates actually listening rather than judging me the way I had imagined. Before I fully realize it, I'm delivering my final sentence, and the room breaks into applause.",
    questions: [
      "What does Aisha do when she reaches the front?",
      "How does Aisha's first sentence sound?",
      "What does Aisha notice about her classmates while presenting?",
    ],
    trueFalse: [
      { text: "Aisha finds Devon's face in the crowd.", answer: true },
      { text: "Aisha's first sentence comes out perfectly confident.", answer: false },
      { text: "Aisha's voice gains strength as she continues.", answer: true },
      { text: "Aisha notices classmates actually listening to her.", answer: true },
      { text: "The room stays silent after Aisha finishes.", answer: false },
    ],
    buildSentence: [
      { target: "My legs feel heavy walking.", jumbled: ["legs", "feel", "My", "heavy", "walking."] },
      { target: "He gives me an encouraging nod.", jumbled: ["He", "gives", "me", "an", "encouraging", "nod."] },
      { target: "I push through instead of stopping.", jumbled: ["I", "push", "through", "instead", "of", "stopping."] },
      { target: "My voice gains strength gradually.", jumbled: ["My", "voice", "gains", "strength", "gradually."] },
      { target: "The room breaks into applause when I finish.", jumbled: ["The", "room", "breaks", "into", "applause", "when", "I", "finish."] },
    ],
    mySentencePrompt: "Write or say one sentence about pushing through fear to finish something important.",
    mySentenceExample: "I pushed through my fear and finished my speech successfully.",
  },
  {
    number: 9,
    title: "Afterward",
    image: null,
    imageNote: "Aisha sitting back down at her desk, exhaling with relief, classmates around her still clapping, Ms. Whitfield giving a thumbs up.",
    story:
      "Sitting back down, I exhale a breath I feel like I'd been holding since Ms. Whitfield first announced the assignment. Ms. Whitfield gives me a warm thumbs up from across the room, and I feel my shoulders finally relax completely. Devon leans over during the next presentation, whispering that mine was genuinely one of the most interesting topics today. I can hardly believe I actually did it, especially considering how impossible this felt just five days ago. The fear hasn't disappeared entirely, and I know future presentations will still bring some nervousness. However, I now have real proof that I can push through that fear successfully.",
    questions: [
      "What does Aisha do sitting back down?",
      "What does Ms. Whitfield give Aisha?",
      "What does Aisha now have proof of?",
    ],
    trueFalse: [
      { text: "Aisha exhales a breath she'd been holding.", answer: true },
      { text: "Ms. Whitfield gives Aisha a warm thumbs up.", answer: true },
      { text: "Devon says her topic was boring.", answer: false },
      { text: "Aisha now has proof she can push through fear.", answer: true },
      { text: "Aisha believes her fear has completely disappeared.", answer: false },
    ],
    buildSentence: [
      { target: "I exhale a breath finally.", jumbled: ["exhale", "a", "I", "breath", "finally."] },
      { target: "My shoulders finally relax completely.", jumbled: ["My", "shoulders", "finally", "relax", "completely."] },
      { target: "I can hardly believe I did it.", jumbled: ["I", "can", "hardly", "believe", "I", "did", "it."] },
      { target: "The fear hasn't disappeared entirely yet.", jumbled: ["The", "fear", "hasn't", "disappeared", "entirely", "yet."] },
      { target: "I now have real proof that I can push through fear.", jumbled: ["I", "now", "have", "real", "proof", "that", "I", "can", "push", "through", "fear."] },
    ],
    mySentencePrompt: "Write or say one sentence about proving something to yourself after facing a fear.",
    mySentenceExample: "I proved to myself that I could handle public speaking after my presentation.",
  },
  {
    number: 10,
    title: "A New Perspective",
    image: null,
    imageNote: "Aisha sitting at her desk that evening, writing in a journal, a small smile on her face, notecards from the presentation resting nearby.",
    story:
      "That evening, I write in my journal about the entire experience, wanting to remember exactly how today actually felt. I realize my anxiety wasn't something to eliminate completely, but rather something I could learn to work alongside instead. Ms. Whitfield's practice offer, Devon's honest confession, and my mom's gentle words all mattered more than I initially recognized. If I hadn't reached out for support, I might have let fear stop me from trying at all. Next time a presentation gets assigned, I know the nervousness will likely return, at least somewhat. But now I also know something equally important: nervousness and capability can genuinely coexist within the same person.",
    questions: [
      "What does Aisha do that evening?",
      "What does Aisha realize about her anxiety?",
      "What does Aisha know will likely happen next time?",
    ],
    trueFalse: [
      { text: "Aisha writes in her journal that evening.", answer: true },
      { text: "Aisha realizes her anxiety needed to be eliminated completely.", answer: false },
      { text: "Aisha recognizes the support she received mattered.", answer: true },
      { text: "Aisha knows nervousness will likely return next time.", answer: true },
      { text: "Aisha believes nervousness and capability cannot coexist.", answer: false },
    ],
    buildSentence: [
      { target: "I write in my journal.", jumbled: ["write", "in", "I", "my", "journal."] },
      { target: "The nervousness will likely return.", jumbled: ["nervousness", "will", "The", "likely", "return."] },
      { target: "These things mattered more than I realized.", jumbled: ["These", "things", "mattered", "more", "than", "I", "realized."] },
      { target: "Nervousness and capability can genuinely coexist.", jumbled: ["Nervousness", "and", "capability", "can", "genuinely", "coexist."] },
      { target: "If I hadn't reached out, fear might have stopped me.", jumbled: ["If", "I", "hadn't", "reached", "out,", "fear", "might", "have", "stopped", "me."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned about yourself after facing a fear.",
    mySentenceExample: "I learned that I am braver than I thought after facing my fear.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

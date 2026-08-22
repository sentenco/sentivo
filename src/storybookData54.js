// B1 Teens digital storybook, Book 54: "Choosing My Own Path"
// Static content -- no Supabase. Sixth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Choosing My Own Path";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Sana sitting at the kitchen table across from her father, two brochures spread between them, a tense but hopeful conversation happening.";

export const CHARACTERS = [
  { name: "Sana", role: "The narrator, a teenager", look: "Long hair in a braid, paint-stained sleeves, passionate but conflict-avoidant." },
  { name: "Dad", role: "Sana's father", look: "Reading glasses, formal shirt, well-meaning but set in his expectations." },
  { name: "Ms. Okoro", role: "Sana's art teacher", look: "Colorful scarf, paint-splattered apron, encouraging and perceptive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Two Different Dreams",
    image: null,
    imageNote: "Sana sitting at her desk with a college brochure for engineering on one side and an art portfolio on the other, looking torn.",
    story:
      "For as long as I can remember, my dad has assumed I would eventually study engineering, just like him and my older brother. I've never directly disagreed with this plan, mostly because bringing it up always felt easier avoided than confronted. Lately, though, my art teacher has been encouraging me to consider applying to art school instead. Painting makes me feel genuinely alive in a way that math and science assignments simply never have. If I mention this to my dad, I know it will likely lead to a conversation I've been dreading for years. Tonight, sitting between two brochures, I finally admit I can't keep avoiding this decision forever.",
    questions: [
      "What has Sana's dad always assumed about her future?",
      "What has Sana's art teacher been encouraging?",
      "How does painting make Sana feel?",
    ],
    trueFalse: [
      { text: "Sana's dad assumed she would study engineering.", answer: true },
      { text: "Sana has openly disagreed with this plan for years.", answer: false },
      { text: "Sana's art teacher encourages her to consider art school.", answer: true },
      { text: "Painting makes Sana feel genuinely alive.", answer: true },
      { text: "Sana feels ready to avoid this decision forever.", answer: false },
    ],
    buildSentence: [
      { target: "Painting makes me feel alive.", jumbled: ["Painting", "makes", "me", "feel", "alive."] },
      { target: "I finally admit this tonight.", jumbled: ["I", "finally", "admit", "this", "tonight."] },
      { target: "This felt easier avoided than confronted.", jumbled: ["This", "felt", "easier", "avoided", "than", "confronted."] },
      { target: "I can't keep avoiding this forever.", jumbled: ["I", "can't", "keep", "avoiding", "this", "forever."] },
      { target: "If I mention this, it will likely lead to conflict.", jumbled: ["If", "I", "mention", "this,", "it", "will", "likely", "lead", "to", "conflict."] },
    ],
    mySentencePrompt: "Write or say one sentence about a decision you've been avoiding.",
    mySentenceExample: "I've been avoiding a decision about which classes to choose next year.",
  },
  {
    number: 2,
    title: "Ms. Okoro's Encouragement",
    image: null,
    imageNote: "Ms. Okoro looking through Sana's portfolio with genuine admiration, pointing at a specific painting while Sana watches nervously.",
    story:
      "After class, Ms. Okoro asks me to stay behind to look through my portfolio together more carefully. She points to a painting I made last month, saying it shows genuine talent and a distinctive artistic voice already forming. “Have you thought seriously about applying to art school?” she asks, watching my reaction closely and thoughtfully. I admit I've thought about it constantly, though I haven't told my parents anything about these feelings yet. She explains applications are due in two months, which means I can't delay this decision much longer. Walking home, her words replay in my mind, mixing excitement with genuine, familiar anxiety.",
    questions: [
      "What does Ms. Okoro ask Sana to do after class?",
      "What does Ms. Okoro say about Sana's painting?",
      "When are applications due?",
    ],
    trueFalse: [
      { text: "Ms. Okoro asks Sana to stay behind after class.", answer: true },
      { text: "Ms. Okoro says the painting shows genuine talent.", answer: true },
      { text: "Sana has already told her parents about art school.", answer: false },
      { text: "Applications are due in two months.", answer: true },
      { text: "Sana feels only excitement with no anxiety.", answer: false },
    ],
    buildSentence: [
      { target: "I've thought about it constantly.", jumbled: ["I've", "thought", "about", "it", "constantly."] },
      { target: "Her words replay in my mind.", jumbled: ["Her", "words", "replay", "in", "my", "mind."] },
      { target: "This shows genuine talent already.", jumbled: ["This", "shows", "genuine", "talent", "already."] },
      { target: "I can't delay this decision much longer.", jumbled: ["I", "can't", "delay", "this", "decision", "much", "longer."] },
      { target: "This mixes excitement with genuine, familiar anxiety.", jumbled: ["This", "mixes", "excitement", "with", "genuine,", "familiar", "anxiety."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone who encouraged you to pursue something you loved.",
    mySentenceExample: "My teacher encouraged me to pursue writing after reading my story.",
  },
  {
    number: 3,
    title: "Practicing the Conversation",
    image: null,
    imageNote: "Sana standing in front of her bedroom mirror, practicing what to say, her portfolio held nervously against her chest.",
    story:
      "That night, I stand in front of my mirror, rehearsing exactly how I'll bring this up with my dad tomorrow. Every version of the conversation I imagine ends with him looking disappointed, or worse, genuinely hurt by my decision. I remind myself that avoiding this conversation only delays an inevitable moment, not prevents it entirely. If I could show him my portfolio first, maybe he would understand why this matters so much to me. I practice specific phrases, trying to sound confident rather than apologetic about something I actually care about deeply. Despite hours of rehearsal, I still don't feel remotely ready for tomorrow's actual conversation.",
    questions: [
      "What does Sana do that night?",
      "How does Sana imagine the conversation ending?",
      "What does Sana remind herself about avoiding the conversation?",
    ],
    trueFalse: [
      { text: "Sana rehearses the conversation in front of her mirror.", answer: true },
      { text: "Sana imagines the conversation going perfectly every time.", answer: false },
      { text: "Sana reminds herself avoiding this only delays it.", answer: true },
      { text: "Sana practices sounding confident rather than apologetic.", answer: true },
      { text: "Sana feels completely ready after hours of practice.", answer: false },
    ],
    buildSentence: [
      { target: "I stand in front of my mirror.", jumbled: ["stand", "in", "I", "front", "of", "my", "mirror."] },
      { target: "I practice specific phrases carefully.", jumbled: ["I", "practice", "specific", "phrases", "carefully."] },
      { target: "This only delays an inevitable moment.", jumbled: ["This", "only", "delays", "an", "inevitable", "moment."] },
      { target: "I still don't feel remotely ready.", jumbled: ["I", "still", "don't", "feel", "remotely", "ready."] },
      { target: "If I showed him my portfolio, he might understand.", jumbled: ["If", "I", "showed", "him", "my", "portfolio,", "he", "might", "understand."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing a difficult conversation before having it.",
    mySentenceExample: "I practiced a difficult conversation before talking to my parents about my grades.",
  },
  {
    number: 4,
    title: "The Conversation Begins",
    image: null,
    imageNote: "Sana sitting across from her dad at the kitchen table, her portfolio open between them, both looking serious but attentive.",
    story:
      "The next evening, I ask Dad if we can talk about something important, my voice noticeably shaking as I speak. He sets down his newspaper immediately, giving me his full attention in a way that makes this feel even more real. I explain, as clearly as I can, how deeply painting matters to me and how engineering never felt genuinely right. His expression shifts from confusion to something harder to read, somewhere between concern and quiet disappointment. “I always assumed you enjoyed the engineering path we discussed,” he says slowly, clearly processing this unexpected shift. I take a deep breath, knowing this conversation has only just truly begun.",
    questions: [
      "What does Sana ask her dad?",
      "How does Sana's voice sound as she speaks?",
      "What does Dad say he always assumed?",
    ],
    trueFalse: [
      { text: "Sana asks her dad if they can talk.", answer: true },
      { text: "Sana's voice sounds completely steady and calm.", answer: false },
      { text: "Dad gives Sana his full attention.", answer: true },
      { text: "Dad says he always assumed Sana enjoyed engineering.", answer: true },
      { text: "This conversation feels completely finished already.", answer: false },
    ],
    buildSentence: [
      { target: "My voice noticeably shakes now.", jumbled: ["My", "voice", "noticeably", "shakes", "now."] },
      { target: "He gives me his full attention.", jumbled: ["He", "gives", "me", "his", "full", "attention."] },
      { target: "I take a deep breath now.", jumbled: ["I", "take", "a", "deep", "breath", "now."] },
      { target: "This conversation has only just begun.", jumbled: ["This", "conversation", "has", "only", "just", "begun."] },
      { target: "I always assumed you enjoyed the engineering path.", jumbled: ["I", "always", "assumed", "you", "enjoyed", "the", "engineering", "path."] },
    ],
    mySentencePrompt: "Write or say one sentence about beginning a conversation that felt difficult but necessary.",
    mySentenceExample: "I began a difficult but necessary conversation with my parents about my future.",
  },
  {
    number: 5,
    title: "Dad's Concerns",
    image: null,
    imageNote: "Dad leaning forward at the table, speaking earnestly while gesturing with his hands, Sana listening with a mix of frustration and understanding.",
    story:
      "Dad explains his worries carefully, mentioning financial stability and how competitive the art world can genuinely be. He isn't trying to be unkind, I realize, only expressing fears rooted in wanting a secure future for me. “Art is a wonderful hobby, but can it really support you long-term?” he asks, not dismissively, but with real concern. I feel frustration building, though I try reminding myself that understanding his perspective doesn't mean automatically agreeing with it. I explain that many artists build sustainable careers, mentioning illustration, design, and teaching as realistic possibilities. Although he doesn't look convinced yet, he does seem willing to actually listen now.",
    questions: [
      "What worries does Dad explain to Sana?",
      "How does Dad ask about art supporting her long-term?",
      "What does Sana mention as realistic possibilities?",
    ],
    trueFalse: [
      { text: "Dad mentions financial stability as a worry.", answer: true },
      { text: "Dad dismisses Sana's feelings completely and unkindly.", answer: false },
      { text: "Sana mentions illustration, design, and teaching.", answer: true },
      { text: "Dad seems completely convinced immediately.", answer: false },
      { text: "Dad seems willing to actually listen now.", answer: true },
    ],
    buildSentence: [
      { target: "Dad explains his worries carefully.", jumbled: ["Dad", "explains", "his", "worries", "carefully."] },
      { target: "I feel frustration building now.", jumbled: ["I", "feel", "frustration", "building", "now."] },
      { target: "He seems willing to listen now.", jumbled: ["He", "seems", "willing", "to", "listen", "now."] },
      { target: "Many artists build sustainable careers today.", jumbled: ["Many", "artists", "build", "sustainable", "careers", "today."] },
      { target: "Understanding his perspective doesn't mean agreeing with it.", jumbled: ["Understanding", "his", "perspective", "doesn't", "mean", "agreeing", "with", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's worry even if you disagree with it.",
    mySentenceExample: "I understood my parent's worry even though I disagreed with the conclusion.",
  },
  {
    number: 6,
    title: "Showing My Work",
    image: null,
    imageNote: "Dad flipping through Sana's portfolio at the table, his expression softening with visible surprise as he examines each painting closely.",
    story:
      "I bring out my portfolio, something I've never actually shown him in this much detail before. He flips through slowly, pausing longer on certain pieces, his expression shifting from politeness to genuine surprise. “I didn't realize your skill had developed this much,” he admits, sounding almost embarrassed about not knowing sooner. I explain how many hours I've spent practicing after school, hours he assumed were spent on homework instead. Seeing tangible proof of my dedication seems to shift something in how seriously he's taking this conversation now. For the first time tonight, I feel like he's seeing me clearly, not just his assumptions about me.",
    questions: [
      "What does Sana bring out during the conversation?",
      "How does Dad's expression change looking through it?",
      "What does Dad admit about Sana's skill?",
    ],
    trueFalse: [
      { text: "Sana brings out her portfolio.", answer: true },
      { text: "Dad's expression shows genuine surprise looking through it.", answer: true },
      { text: "Dad admits he didn't realize her skill had developed this much.", answer: true },
      { text: "Dad assumed Sana's hours were spent on homework.", answer: true },
      { text: "Sana feels Dad still sees only his assumptions of her.", answer: false },
    ],
    buildSentence: [
      { target: "I bring out my portfolio.", jumbled: ["bring", "out", "I", "my", "portfolio."] },
      { target: "He flips through it slowly.", jumbled: ["He", "flips", "through", "it", "slowly."] },
      { target: "I feel he's seeing me clearly.", jumbled: ["I", "feel", "he's", "seeing", "me", "clearly."] },
      { target: "I didn't realize your skill had developed this much.", jumbled: ["I", "didn't", "realize", "your", "skill", "had", "developed", "this", "much."] },
      { target: "Seeing tangible proof shifts how seriously he takes this.", jumbled: ["Seeing", "tangible", "proof", "shifts", "how", "seriously", "he", "takes", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about showing someone proof of your effort or dedication.",
    mySentenceExample: "I showed my parents proof of my dedication through my grades and projects.",
  },
  {
    number: 7,
    title: "A Compromise",
    image: null,
    imageNote: "Dad and Sana sitting closer together at the table now, both looking at a laptop screen showing an art school's curriculum, engaged in discussion.",
    story:
      "Dad suggests we research together, looking specifically at career outcomes for graduates from serious art programs. Together, we find statistics showing many art graduates do build stable, successful careers across various creative industries. He remains cautious, suggesting I also apply to one or two universities offering both art and a practical minor. Although this isn't exactly what I originally hoped for, it feels like genuine middle ground rather than simple defeat. If this compromise lets me pursue painting while easing his concerns somewhat, that seems worth seriously considering. We spend another hour researching programs together, something I never expected tonight's conversation to include.",
    questions: [
      "What does Dad suggest they do together?",
      "What does Dad suggest Sana also do?",
      "How does Sana feel about this compromise?",
    ],
    trueFalse: [
      { text: "Dad suggests researching career outcomes together.", answer: true },
      { text: "They find no evidence that art careers can be stable.", answer: false },
      { text: "Dad suggests applying to schools with a practical minor too.", answer: true },
      { text: "Sana feels this compromise is simple defeat.", answer: false },
      { text: "They spend another hour researching programs together.", answer: true },
    ],
    buildSentence: [
      { target: "Dad suggests researching together now.", jumbled: ["Dad", "suggests", "researching", "together", "now."] },
      { target: "This feels like genuine middle ground.", jumbled: ["This", "feels", "like", "genuine", "middle", "ground."] },
      { target: "This seems worth seriously considering.", jumbled: ["This", "seems", "worth", "seriously", "considering."] },
      { target: "We spend another hour researching together.", jumbled: ["We", "spend", "another", "hour", "researching", "together."] },
      { target: "Many art graduates build stable, successful careers.", jumbled: ["Many", "art", "graduates", "build", "stable,", "successful", "careers."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding a compromise with someone you disagreed with.",
    mySentenceExample: "I found a compromise with my parents about my weekend plans.",
  },
  {
    number: 8,
    title: "Telling Ms. Okoro",
    image: null,
    imageNote: "Sana excitedly telling Ms. Okoro about the conversation with her dad, the teacher smiling warmly and nodding encouragingly.",
    story:
      "The next day, I tell Ms. Okoro everything that happened during our long conversation the night before. She listens with genuine interest, smiling warmly when I mention that Dad actually looked through my entire portfolio. “Compromises aren't failures, Sana. Sometimes they're just the beginning of a longer journey,” she reminds me kindly. She offers to help me research programs that combine strong art training with practical, career-focused coursework. I feel a wave of relief knowing I have support both at home now and here at school. This entire experience is teaching me that difficult conversations, however uncomfortable, can genuinely lead somewhere worthwhile.",
    questions: [
      "Who does Sana tell about the conversation?",
      "What does Ms. Okoro say about compromises?",
      "What does Ms. Okoro offer to help with?",
    ],
    trueFalse: [
      { text: "Sana tells Ms. Okoro about the conversation.", answer: true },
      { text: "Ms. Okoro says compromises are failures.", answer: false },
      { text: "Ms. Okoro offers to help research programs.", answer: true },
      { text: "Sana feels a wave of relief now.", answer: true },
      { text: "Sana feels this experience taught her nothing valuable.", answer: false },
    ],
    buildSentence: [
      { target: "She listens with genuine interest.", jumbled: ["She", "listens", "with", "genuine", "interest."] },
      { target: "I feel a wave of relief.", jumbled: ["I", "feel", "a", "wave", "of", "relief."] },
      { target: "Compromises aren't failures, she says.", jumbled: ["Compromises", "aren't", "failures,", "she", "says."] },
      { target: "I have support both at home and here.", jumbled: ["I", "have", "support", "both", "at", "home", "and", "here."] },
      { target: "Difficult conversations can genuinely lead somewhere worthwhile.", jumbled: ["Difficult", "conversations", "can", "genuinely", "lead", "somewhere", "worthwhile."] },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult experience that ended up teaching you something valuable.",
    mySentenceExample: "A difficult experience with my grades taught me the value of asking for help.",
  },
  {
    number: 9,
    title: "Choosing Programs Together",
    image: null,
    imageNote: "Sana and Dad sitting together on the living room couch, reviewing a shortlist of universities on a laptop, both engaged and collaborative.",
    story:
      "Over the following weeks, Dad and I spend several evenings researching universities that offer exactly the combination we discussed. He asks thoughtful questions during our research, genuinely trying to understand this world that once felt completely foreign to him. I notice him researching art career statistics independently too, clearly wanting to feel more informed and confident about this decision. We narrow our list down to four programs, each offering strong art training alongside practical, employable skills. Watching him engage this seriously with something that matters so much to me feels genuinely meaningful. Our relationship, I realize, has actually grown stronger through navigating this disagreement honestly together.",
    questions: [
      "What do Sana and Dad do over the following weeks?",
      "What does Dad do independently?",
      "How many programs do they narrow their list down to?",
    ],
    trueFalse: [
      { text: "Sana and Dad research universities together.", answer: true },
      { text: "Dad researches art career statistics independently too.", answer: true },
      { text: "They narrow their list down to four programs.", answer: true },
      { text: "Sana feels their relationship has grown weaker.", answer: false },
      { text: "Dad shows no interest in understanding this world.", answer: false },
    ],
    buildSentence: [
      { target: "We spend several evenings researching.", jumbled: ["We", "spend", "several", "evenings", "researching."] },
      { target: "This feels genuinely meaningful now.", jumbled: ["This", "feels", "genuinely", "meaningful", "now."] },
      { target: "He asks thoughtful questions throughout.", jumbled: ["He", "asks", "thoughtful", "questions", "throughout."] },
      { target: "We narrow our list down to four.", jumbled: ["We", "narrow", "our", "list", "down", "to", "four."] },
      { target: "Our relationship has grown stronger through this disagreement.", jumbled: ["Our", "relationship", "has", "grown", "stronger", "through", "this", "disagreement."] },
    ],
    mySentencePrompt: "Write or say one sentence about a relationship that grew stronger through disagreement.",
    mySentenceExample: "My friendship grew stronger through disagreement when we talked honestly.",
  },
  {
    number: 10,
    title: "Submitting My Application",
    image: null,
    imageNote: "Sana sitting at her laptop, finger hovering over the submit button for her art school application, Dad standing behind her with a proud smile.",
    story:
      "Tonight, I sit at my laptop, finger hovering over the submit button for my first-choice art program application. Dad stands behind me, having offered to be there when I finally send it, something I never expected weeks ago. “I'm proud of you for knowing what you want and fighting for it respectfully,” he says quietly. I press submit, and something settles inside me, a mixture of excitement, nervousness, and genuine gratitude for how far we've come. This journey taught me that choosing my own path didn't mean rejecting my family, only inviting them to understand it. If I hadn't found the courage to speak that first evening, none of this progress would exist.",
    questions: [
      "What is Sana about to do tonight?",
      "What does Dad say he's proud of?",
      "What did this journey teach Sana about choosing her own path?",
    ],
    trueFalse: [
      { text: "Sana is about to submit her application.", answer: true },
      { text: "Dad refuses to be present for this moment.", answer: false },
      { text: "Dad says he's proud of her for fighting respectfully.", answer: true },
      { text: "Sana learned choosing her path meant rejecting her family.", answer: false },
      { text: "Sana feels grateful for how far they've come.", answer: true },
    ],
    buildSentence: [
      { target: "I press submit finally.", jumbled: ["press", "submit", "I", "finally."] },
      { target: "Something settles inside me now.", jumbled: ["Something", "settles", "inside", "me", "now."] },
      { target: "I'm proud of you, he says.", jumbled: ["proud", "of", "I'm", "you,", "he", "says."] },
      { target: "This didn't mean rejecting my family.", jumbled: ["This", "didn't", "mean", "rejecting", "my", "family."] },
      { target: "If I hadn't found courage that evening, this wouldn't exist.", jumbled: ["If", "I", "hadn't", "found", "courage", "that", "evening,", "this", "wouldn't", "exist."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when you finally acted on a decision you'd been considering.",
    mySentenceExample: "I finally acted on my decision to try out for the school play.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

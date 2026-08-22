// B2 Teens digital storybook, Book 66: "Choosing to Study Abroad"
// Static content -- no Supabase. Second book in the B2 Teens batch
// (65-72). Personal-identity decision story, distinct from Book 54
// "Choosing My Own Path" (a career-vs-family-pressure conflict) --
// this one weighs opportunity/growth against roots/relationships,
// with heavier use of past perfect, second/third conditional, and
// discourse markers per the B2 Teens spec. Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Choosing to Study Abroad";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Isabel sitting on her bedroom floor surrounded by two open folders — one labeled 'Exchange Program,' one labeled 'Stay Home' — looking torn.";

export const CHARACTERS = [
  { name: "Isabel", role: "The narrator, a student weighing a semester abroad", look: "Casual clothes, hair in a loose bun, thoughtful and a little anxious." },
  { name: "Renata", role: "Isabel's mother", look: "Warm but direct, works long hours, wants what's best for Isabel." },
  { name: "Jules", role: "Isabel's closest friend", look: "Energetic, supportive, has never been apart from Isabel for long." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Email Arrives",
    image: null,
    imageNote: "Isabel reading an email on her laptop at her desk, eyes wide with a mix of excitement and disbelief.",
    story:
      "An email arrives from my school's exchange program, confirming I've been accepted to spend next semester studying in another country. I'd applied months ago, half-convinced I wouldn't actually be chosen among so many strong applicants. Reading the acceptance now, excitement floods through me, quickly followed by a wave of genuine uncertainty about what this decision would actually mean. Leaving for five months would mean missing my final year's biggest events, alongside time with people I deeply care about. Still staring at the screen, I realize this is a decision I can't make impulsively, however thrilling it initially feels.",
    questions: [
      "What does the email confirm?",
      "How did Isabel feel while waiting to hear back?",
      "What would leaving for five months mean for Isabel?",
    ],
    trueFalse: [
      { text: "Isabel has been accepted into the exchange program.", answer: true },
      { text: "Isabel was fully confident she would be chosen.", answer: false },
      { text: "Excitement is followed by a wave of genuine uncertainty.", answer: true },
      { text: "Leaving would mean missing her final year's biggest events.", answer: true },
      { text: "Isabel decides to accept immediately without thinking.", answer: false },
    ],
    buildSentence: [
      { target: "An email arrives from my school.", jumbled: ["An", "email", "arrives", "from", "my", "school."] },
      { target: "Excitement floods through me now.", jumbled: ["Excitement", "floods", "through", "me", "now."] },
      { target: "This is a decision I can't make impulsively.", jumbled: ["This", "is", "a", "decision", "I", "can't", "make", "impulsively."] },
      { target: "I'd applied months ago, half-convinced I wouldn't be chosen.", jumbled: ["I'd", "applied", "months", "ago,", "half-convinced", "I", "wouldn't", "be", "chosen."] },
      { target: "Leaving would mean missing time with people I care about.", jumbled: ["Leaving", "would", "mean", "missing", "time", "with", "people", "I", "care", "about."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving news that was both exciting and uncertain.",
    mySentenceExample: "I received news that was both exciting and uncertain.",
  },
  {
    number: 2,
    title: "Telling My Mother",
    image: null,
    imageNote: "Isabel sitting across from her mother at the kitchen table, both holding mugs, mid-conversation.",
    story:
      "That evening, I tell my mother about the acceptance, watching her expression shift between pride and visible concern. She admits that, had she been given a similar opportunity at my age, she may have hesitated for entirely different reasons. Money had always been tight growing up, so an opportunity like this simply hadn't existed within her own possibilities back then. Nevertheless, she reminds me gently that this decision ultimately has to be mine, not something she or anyone else should decide for me. I appreciate her honesty, even though it leaves me with more to consider than before.",
    questions: [
      "What does Isabel's mother's expression shift between?",
      "What does Isabel's mother admit about her own past?",
      "What does Isabel's mother remind her about the decision?",
    ],
    trueFalse: [
      { text: "Isabel's mother's expression shifts between pride and concern.", answer: true },
      { text: "Isabel's mother says money had always been tight growing up.", answer: true },
      { text: "Isabel's mother insists Isabel must accept the offer.", answer: false },
      { text: "Isabel's mother says this decision ultimately has to be Isabel's.", answer: true },
      { text: "Isabel appreciates her mother's honesty about the situation.", answer: true },
    ],
    buildSentence: [
      { target: "I tell my mother tonight.", jumbled: ["I", "tell", "my", "mother", "tonight."] },
      { target: "This decision has to be mine.", jumbled: ["This", "decision", "has", "to", "be", "mine."] },
      { target: "I appreciate her honesty about this.", jumbled: ["I", "appreciate", "her", "honesty", "about", "this."] },
      { target: "Money had always been tight growing up.", jumbled: ["Money", "had", "always", "been", "tight", "growing", "up."] },
      { target: "Had she been given this opportunity, she may have hesitated too.", jumbled: ["Had", "she", "been", "given", "this", "opportunity,", "she", "may", "have", "hesitated", "too."] },
    ],
    mySentencePrompt: "Write or say one sentence about a parent giving you honest advice about a big decision.",
    mySentenceExample: "My mother gave me honest advice about a big decision.",
  },
  {
    number: 3,
    title: "Jules Reacts",
    image: null,
    imageNote: "Isabel and Jules sitting on a park bench, Jules looking visibly upset while Isabel tries to explain.",
    story:
      "I tell Jules the news the next day, expecting excitement, though her reaction turns out considerably more complicated than I'd anticipated. She congratulates me genuinely, but I can tell something underneath her words feels noticeably strained and uncertain. Eventually, she admits she's scared of what our friendship might become after five months of near-constant separation. I reassure her that distance wouldn't necessarily weaken what we've built, though I honestly can't promise nothing would change at all. Given how close we've always been, I understand why this news feels more threatening to her than exciting.",
    questions: [
      "How does Jules's reaction turn out compared to what Isabel expected?",
      "What does Jules eventually admit she's scared of?",
      "What does Isabel reassure Jules about?",
    ],
    trueFalse: [
      { text: "Jules's reaction turns out more complicated than Isabel expected.", answer: true },
      { text: "Jules congratulates Isabel genuinely at first.", answer: true },
      { text: "Jules admits she's scared about their friendship changing.", answer: true },
      { text: "Isabel promises nothing at all will ever change.", answer: false },
      { text: "Isabel understands why this news feels threatening to Jules.", answer: true },
    ],
    buildSentence: [
      { target: "I tell Jules the news today.", jumbled: ["I", "tell", "Jules", "the", "news", "today."] },
      { target: "She congratulates me genuinely at first.", jumbled: ["She", "congratulates", "me", "genuinely", "at", "first."] },
      { target: "I understand why this feels threatening to her.", jumbled: ["I", "understand", "why", "this", "feels", "threatening", "to", "her."] },
      { target: "She's scared of what our friendship might become.", jumbled: ["She's", "scared", "of", "what", "our", "friendship", "might", "become."] },
      { target: "I can't promise nothing at all would change.", jumbled: ["I", "can't", "promise", "nothing", "at", "all", "would", "change."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend reacting unexpectedly to your good news.",
    mySentenceExample: "My friend reacted unexpectedly to my good news.",
  },
  {
    number: 4,
    title: "Weighing the Options",
    image: null,
    imageNote: "Isabel sitting at her desk, writing a two-column list titled 'If I Go' and 'If I Stay' on a large notepad.",
    story:
      "Trying to think more clearly, I write out two lists: everything I'd gain by going, and everything I'd risk by leaving. If I went, I'd experience an entirely different culture, gain independence, and strengthen my university applications considerably. On the other hand, if I stayed, I'd graduate alongside Jules, avoid disrupting our long friendship, and skip the anxiety of navigating somewhere unfamiliar. Neither list feels obviously more compelling than the other, which frustrates me more than I'd expected it to. I realize that whichever choice I make, some genuine loss seems unavoidable either way.",
    questions: [
      "What does Isabel write out to think more clearly?",
      "What would Isabel gain if she went?",
      "What would Isabel avoid if she stayed?",
    ],
    trueFalse: [
      { text: "Isabel writes out two lists comparing going and staying.", answer: true },
      { text: "Going would mean strengthening her university applications.", answer: true },
      { text: "Staying would mean disrupting her long friendship with Jules.", answer: false },
      { text: "Neither list feels obviously more compelling than the other.", answer: true },
      { text: "Isabel realizes some genuine loss seems unavoidable either way.", answer: true },
    ],
    buildSentence: [
      { target: "I write out two lists now.", jumbled: ["I", "write", "out", "two", "lists", "now."] },
      { target: "This frustrates me more than expected.", jumbled: ["This", "frustrates", "me", "more", "than", "expected."] },
      { target: "Some genuine loss seems unavoidable either way.", jumbled: ["Some", "genuine", "loss", "seems", "unavoidable", "either", "way."] },
      { target: "I'd gain independence and experience a different culture.", jumbled: ["I'd", "gain", "independence", "and", "experience", "a", "different", "culture."] },
      { target: "If I stayed, I'd graduate alongside Jules.", jumbled: ["If", "I", "stayed,", "I'd", "graduate", "alongside", "Jules."] },
    ],
    mySentencePrompt: "Write or say one sentence about weighing two choices where both options involve some kind of loss.",
    mySentenceExample: "I weighed two choices where both involved some kind of loss.",
  },
  {
    number: 5,
    title: "Talking to a Former Exchange Student",
    image: null,
    imageNote: "Isabel sitting in a school hallway, talking with an older student who has photos from her own exchange year on her phone.",
    story:
      "My school counselor connects me with Priya, a senior who'd completed a similar exchange program the previous year herself. Priya admits that had she known how hard the first month would be, she may have hesitated to apply at all. However, she explains that the friendships and independence she gained ultimately outweighed those difficult early weeks considerably. She mentions that her own best friend back home had actually grown closer to her, not more distant, throughout that time apart. Hearing this firsthand account gives me a more honest, less idealized picture than I'd had before.",
    questions: [
      "Who does Isabel's school counselor connect her with?",
      "What does Priya admit about the first month?",
      "What does Priya say happened with her own best friend?",
    ],
    trueFalse: [
      { text: "The school counselor connects Isabel with Priya.", answer: true },
      { text: "Priya completed a similar exchange program the previous year.", answer: true },
      { text: "Priya says the first month was easy and simple.", answer: false },
      { text: "Priya's best friend actually grew closer to her, not more distant.", answer: true },
      { text: "This gives Isabel a more honest, less idealized picture.", answer: true },
    ],
    buildSentence: [
      { target: "My counselor connects me with Priya.", jumbled: ["My", "counselor", "connects", "me", "with", "Priya."] },
      { target: "This gives me a more honest picture.", jumbled: ["This", "gives", "me", "a", "more", "honest", "picture."] },
      { target: "Had she known, she may have hesitated.", jumbled: ["Had", "she", "known,", "she", "may", "have", "hesitated."] },
      { target: "The friendships ultimately outweighed those difficult weeks.", jumbled: ["The", "friendships", "ultimately", "outweighed", "those", "difficult", "weeks."] },
      { target: "Her best friend had actually grown closer, not more distant.", jumbled: ["Her", "best", "friend", "had", "actually", "grown", "closer,", "not", "more", "distant."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning something valuable from someone who had already faced the same decision.",
    mySentenceExample: "I learned something valuable from someone who faced the same decision.",
  },
  {
    number: 6,
    title: "A Conversation with Jules",
    image: null,
    imageNote: "Isabel and Jules sitting together on Isabel's bed, both more relaxed this time, talking honestly.",
    story:
      "I share Priya's story with Jules, hoping it might ease some of the worry from our earlier conversation. Jules listens carefully, then admits that her fear wasn't really about distance itself, but about feeling replaced somehow. I tell her honestly that no experience abroad could ever replace what we've built over all these years together. Given how long we've been friends, I explain, a semester apart seems unlikely to undo something that solid. Jules finally smiles, saying that hearing this directly helps more than she'd expected it to.",
    questions: [
      "What does Isabel share with Jules?",
      "What does Jules admit her fear was really about?",
      "What does Isabel tell Jules honestly?",
    ],
    trueFalse: [
      { text: "Isabel shares Priya's story with Jules.", answer: true },
      { text: "Jules admits her fear was about feeling replaced.", answer: true },
      { text: "Isabel tells Jules nothing could ever match their friendship.", answer: true },
      { text: "Jules says hearing this makes no difference at all.", answer: false },
      { text: "Jules finally smiles, saying this helps more than expected.", answer: true },
    ],
    buildSentence: [
      { target: "I share Priya's story now.", jumbled: ["I", "share", "Priya's", "story", "now."] },
      { target: "Jules finally smiles at this.", jumbled: ["Jules", "finally", "smiles", "at", "this."] },
      { target: "Her fear wasn't really about distance itself.", jumbled: ["Her", "fear", "wasn't", "really", "about", "distance", "itself."] },
      { target: "This seems unlikely to undo something that solid.", jumbled: ["This", "seems", "unlikely", "to", "undo", "something", "that", "solid."] },
      { target: "Hearing this directly helps more than she'd expected.", jumbled: ["Hearing", "this", "directly", "helps", "more", "than", "she'd", "expected."] },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation that helped ease a friend's worry.",
    mySentenceExample: "A conversation with my friend helped ease her worry.",
  },
  {
    number: 7,
    title: "Making the Decision",
    image: null,
    imageNote: "Isabel sitting alone at her desk late at night, the two lists from earlier now set aside, a single acceptance form in front of her.",
    story:
      "After weeks of going back and forth, I finally sit down to make my actual decision, rather than continuing to circle the question endlessly. I realize that if I let fear of missing out guide this choice entirely, I'd likely regret not trying at all. Nevertheless, I also recognize that choosing to go doesn't mean abandoning what matters here, just experiencing something additional alongside it. With this reframing, the decision suddenly feels less like choosing between two opposing lives and more like simply expanding one. I sign the acceptance form, feeling a mixture of nervousness and genuine excitement I hadn't expected to feel simultaneously.",
    questions: [
      "What does Isabel finally sit down to do?",
      "What does Isabel realize about letting fear guide her choice?",
      "What does Isabel do at the end of the chapter?",
    ],
    trueFalse: [
      { text: "Isabel finally sits down to make her actual decision.", answer: true },
      { text: "Isabel realizes letting fear guide her might lead to regret.", answer: true },
      { text: "Isabel decides going means abandoning what matters at home.", answer: false },
      { text: "The decision starts to feel like expanding one life.", answer: true },
      { text: "Isabel signs the acceptance form by the end.", answer: true },
    ],
    buildSentence: [
      { target: "I finally sit down now.", jumbled: ["I", "finally", "sit", "down", "now."] },
      { target: "I sign the acceptance form now.", jumbled: ["I", "sign", "the", "acceptance", "form", "now."] },
      { target: "This feels less like choosing between two lives.", jumbled: ["This", "feels", "less", "like", "choosing", "between", "two", "lives."] },
      { target: "Choosing to go doesn't mean abandoning what matters here.", jumbled: ["Choosing", "to", "go", "doesn't", "mean", "abandoning", "what", "matters", "here."] },
      { target: "I'd likely regret not trying if fear guided this choice.", jumbled: ["I'd", "likely", "regret", "not", "trying", "if", "fear", "guided", "this", "choice."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally making a difficult decision after a lot of back-and-forth thinking.",
    mySentenceExample: "I finally made a difficult decision after a lot of thinking.",
  },
  {
    number: 8,
    title: "Preparing to Leave",
    image: null,
    imageNote: "Isabel's room half-packed, suitcase open on the bed, Jules helping fold clothes and laughing about something.",
    story:
      "The weeks before departure pass in a blur of paperwork, packing, and increasingly emotional goodbyes with people I care about deeply. Jules helps me pack, insisting on folding everything her own particular way, even though I honestly don't mind either method. My mother writes a small note I find tucked inside my suitcase, simply saying she's proud, whatever happens next. As departure day approaches, I notice my nervousness gradually shifting into something closer to genuine anticipation instead. Whatever challenges await me abroad, I feel increasingly confident this decision was ultimately the right one for me.",
    questions: [
      "How do the weeks before departure pass?",
      "What does Jules insist on doing while helping pack?",
      "What does Isabel find tucked inside her suitcase?",
    ],
    trueFalse: [
      { text: "The weeks before departure pass in a blur of goodbyes.", answer: true },
      { text: "Jules insists on folding everything her own particular way.", answer: true },
      { text: "Isabel finds a small note from her mother in her suitcase.", answer: true },
      { text: "Isabel's nervousness stays exactly the same throughout.", answer: false },
      { text: "Isabel feels increasingly confident about her decision.", answer: true },
    ],
    buildSentence: [
      { target: "The weeks pass in a blur.", jumbled: ["The", "weeks", "pass", "in", "a", "blur."] },
      { target: "Jules helps me pack today.", jumbled: ["Jules", "helps", "me", "pack", "today."] },
      { target: "I feel increasingly confident about this.", jumbled: ["I", "feel", "increasingly", "confident", "about", "this."] },
      { target: "My nervousness gradually shifts into anticipation instead.", jumbled: ["My", "nervousness", "gradually", "shifts", "into", "anticipation", "instead."] },
      { target: "My mother writes a note saying she's proud.", jumbled: ["My", "mother", "writes", "a", "note", "saying", "she's", "proud."] },
    ],
    mySentencePrompt: "Write or say one sentence about the mixed feelings of preparing to leave for something new.",
    mySentenceExample: "I felt mixed emotions while preparing to leave for something new.",
  },
  {
    number: 9,
    title: "A Video Call Home",
    image: null,
    imageNote: "Isabel sitting in an unfamiliar dorm room, laptop open on a video call with Jules and her mother visible on screen.",
    story:
      "Three weeks into the exchange, I finally settle into a rhythm and call home to update everyone properly. Jules appears on screen first, eagerly asking about everything, from classes to the food to the friends I've apparently already made. My mother joins moments later, visibly relieved seeing my face looking genuinely happy rather than merely coping. I admit that the first two weeks had honestly been harder than I'd expected, filled with homesickness I hadn't fully anticipated. Nevertheless, I explain that things have improved considerably, and I'm genuinely glad I hadn't let that early difficulty change my decision.",
    questions: [
      "What does Isabel finally do three weeks into the exchange?",
      "How does Isabel's mother react seeing her face?",
      "What does Isabel admit about the first two weeks?",
    ],
    trueFalse: [
      { text: "Isabel calls home three weeks into the exchange.", answer: true },
      { text: "Jules asks about classes, food, and new friends.", answer: true },
      { text: "Isabel's mother looks visibly relieved seeing her happy.", answer: true },
      { text: "Isabel says the first two weeks were easy and simple.", answer: false },
      { text: "Isabel is glad she didn't let early difficulty change her decision.", answer: true },
    ],
    buildSentence: [
      { target: "I finally call home now.", jumbled: ["I", "finally", "call", "home", "now."] },
      { target: "Things have improved considerably since then.", jumbled: ["Things", "have", "improved", "considerably", "since", "then."] },
      { target: "My mother joins moments later, visibly relieved.", jumbled: ["My", "mother", "joins", "moments", "later,", "visibly", "relieved."] },
      { target: "The first two weeks had honestly been harder than expected.", jumbled: ["The", "first", "two", "weeks", "had", "honestly", "been", "harder", "than", "expected."] },
      { target: "I'm genuinely glad I hadn't let that difficulty change my decision.", jumbled: ["I'm", "genuinely", "glad", "I", "hadn't", "let", "that", "difficulty", "change", "my", "decision."] },
    ],
    mySentencePrompt: "Write or say one sentence about pushing through a difficult adjustment period and things eventually improving.",
    mySentenceExample: "I pushed through a difficult adjustment and things eventually improved.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Isabel sitting on a balcony overseas at sunset, journal open on her lap, writing reflectively.",
    story:
      "Looking back on the decision now, I realize how differently things might have gone had I let fear of change decide for me. If I had stayed simply to avoid discomfort, I likely would have wondered, for years afterward, what I'd missed. Instead, choosing to face uncertainty directly taught me something about myself I couldn't have learned any other way. My friendship with Jules, moreover, has genuinely deepened rather than weakened, exactly as Priya had once suggested it might. In the end, this experience taught me that growth and belonging aren't actually opposites, but can exist together simultaneously.",
    questions: [
      "What does Isabel realize looking back on the decision?",
      "What might have happened if she had stayed simply to avoid discomfort?",
      "What has Isabel learned about growth and belonging?",
    ],
    trueFalse: [
      { text: "Isabel realizes things might have gone differently without this choice.", answer: true },
      { text: "Staying to avoid discomfort might have led to years of wondering.", answer: true },
      { text: "Isabel's friendship with Jules has actually weakened over time.", answer: false },
      { text: "Isabel learns growth and belonging can exist together simultaneously.", answer: true },
      { text: "Choosing to face uncertainty taught Isabel something about herself.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this decision now.", jumbled: ["I", "look", "back", "on", "this", "decision", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Growth and belonging aren't actually opposites.", jumbled: ["Growth", "and", "belonging", "aren't", "actually", "opposites."] },
      { target: "My friendship with Jules has genuinely deepened, not weakened.", jumbled: ["My", "friendship", "with", "Jules", "has", "genuinely", "deepened,", "not", "weakened."] },
      { target: "Had I stayed to avoid discomfort, I would have wondered for years.", jumbled: ["Had", "I", "stayed", "to", "avoid", "discomfort,", "I", "would", "have", "wondered", "for", "years."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from choosing growth over comfort.",
    mySentenceExample: "I learned that choosing growth over comfort can be worthwhile.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

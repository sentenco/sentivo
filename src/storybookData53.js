// B1 Teens digital storybook, Book 53: "Standing Up to a Bully Online"
// Static content -- no Supabase. Fifth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Standing Up to a Bully Online";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ethan sitting at his desk at night, staring at his phone screen with a troubled expression, a group chat visible with several unkind messages.";

export const CHARACTERS = [
  { name: "Ethan", role: "The narrator, a teenager", look: "Glasses, plain hoodie, quiet but principled." },
  { name: "Nina", role: "A classmate being targeted online", look: "Curly hair, art-themed backpack, quiet and increasingly withdrawn." },
  { name: "Marcus", role: "A classmate who posts unkind comments", look: "Letterman jacket, confident posture, dismissive of consequences." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something Doesn't Feel Right",
    image: null,
    imageNote: "Ethan scrolling through his phone at his desk, a concerned expression as he reads comments on a classmate's post.",
    story:
      "Scrolling through my phone before bed, I notice several unkind comments underneath a photo Nina posted earlier today. Marcus and a few others are mocking her artwork, using words that feel deliberately cruel rather than simply teasing. I've known Nina since elementary school, and seeing this makes something uncomfortable twist inside my chest. Part of me wants to scroll past quickly, pretending I never saw it at all. However, another part of me knows that staying silent feels almost like agreeing with what's happening here. I close the app without commenting, though the guilty feeling lingers long after I put my phone down.",
    questions: [
      "What does Ethan notice while scrolling that night?",
      "Who is being mocked, and by whom?",
      "How does Ethan feel about this situation?",
    ],
    trueFalse: [
      { text: "Ethan notices unkind comments under Nina's photo.", answer: true },
      { text: "Marcus and others are mocking Nina's artwork.", answer: true },
      { text: "Ethan feels nothing uncomfortable about this at all.", answer: false },
      { text: "Ethan comments immediately to defend Nina.", answer: false },
      { text: "The guilty feeling lingers after Ethan closes the app.", answer: true },
    ],
    buildSentence: [
      { target: "Something twists inside my chest.", jumbled: ["Something", "twists", "inside", "my", "chest."] },
      { target: "I've known Nina since elementary school.", jumbled: ["I've", "known", "Nina", "since", "elementary", "school."] },
      { target: "I close the app quietly.", jumbled: ["I", "close", "the", "app", "quietly."] },
      { target: "The guilty feeling lingers afterward.", jumbled: ["The", "guilty", "feeling", "lingers", "afterward."] },
      { target: "Staying silent feels almost like agreeing with this.", jumbled: ["Staying", "silent", "feels", "almost", "like", "agreeing", "with", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing something unfair that bothered you.",
    mySentenceExample: "I noticed something unfair when a classmate was excluded from a game.",
  },
  {
    number: 2,
    title: "It Keeps Happening",
    image: null,
    imageNote: "Ethan sitting in class, glancing at Nina across the room as she stares down at her desk, visibly withdrawn from classmates.",
    story:
      "Over the next few days, I notice the comments continuing, growing gradually meaner with each new post Nina shares. In class, Nina seems quieter than usual, keeping her head down and avoiding eye contact with almost everyone. During lunch, I overhear two classmates whispering about the situation, treating it more like entertainment than something serious. If nobody says anything, this will probably just keep escalating until it becomes something much worse. I feel torn between wanting to help and worrying about becoming a target myself if I speak up. Watching Nina retreat further into herself each day makes ignoring this feel increasingly impossible.",
    questions: [
      "What does Ethan notice about the comments over the next few days?",
      "How does Nina seem in class?",
      "What does Ethan overhear during lunch?",
    ],
    trueFalse: [
      { text: "The comments continue and grow meaner.", answer: true },
      { text: "Nina seems energetic and talkative in class.", answer: false },
      { text: "Ethan overhears classmates treating this like entertainment.", answer: true },
      { text: "Ethan feels torn between helping and staying safe.", answer: true },
      { text: "Ethan finds it easy to keep ignoring this.", answer: false },
    ],
    buildSentence: [
      { target: "The comments keep growing meaner.", jumbled: ["comments", "keep", "The", "growing", "meaner."] },
      { target: "Nina keeps her head down.", jumbled: ["Nina", "keeps", "her", "head", "down."] },
      { target: "I feel torn between two things.", jumbled: ["I", "feel", "torn", "between", "two", "things."] },
      { target: "This will probably just keep escalating.", jumbled: ["This", "will", "probably", "just", "keep", "escalating."] },
      { target: "If nobody says anything, this will keep escalating.", jumbled: ["If", "nobody", "says", "anything,", "this", "will", "keep", "escalating."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a problem that kept getting worse.",
    mySentenceExample: "I noticed a problem at school that kept getting worse over time.",
  },
  {
    number: 3,
    title: "A Difficult Decision",
    image: null,
    imageNote: "Ethan sitting alone in his room, staring at his phone, weighing his options, a troubled but determined expression forming.",
    story:
      "That night, I sit in my room, weighing what would actually happen if I said something publicly online. Marcus is popular, and speaking against him could easily make me a target for the same treatment. Although this fear feels legitimate, I keep thinking about how alone Nina must feel right now, facing this without support. If I were in her position, I would desperately want at least one person to acknowledge what's happening. I remember something my dad once told me: doing the right thing rarely feels comfortable or convenient in the moment. Slowly, I decide that staying silent isn't actually the safe choice I've been telling myself it was.",
    questions: [
      "What does Ethan weigh that night?",
      "What could speaking against Marcus risk for Ethan?",
      "What does Ethan remember his dad telling him?",
    ],
    trueFalse: [
      { text: "Ethan weighs what would happen if he said something.", answer: true },
      { text: "Speaking against Marcus carries no risk for Ethan.", answer: false },
      { text: "Ethan thinks about how alone Nina must feel.", answer: true },
      { text: "Ethan's dad once told him doing right feels comfortable.", answer: false },
      { text: "Ethan decides staying silent isn't actually safe.", answer: true },
    ],
    buildSentence: [
      { target: "This fear feels legitimate somehow.", jumbled: ["This", "fear", "feels", "legitimate", "somehow."] },
      { target: "I keep thinking about Nina.", jumbled: ["I", "keep", "thinking", "about", "Nina."] },
      { target: "Doing the right thing rarely feels comfortable.", jumbled: ["Doing", "the", "right", "thing", "rarely", "feels", "comfortable."] },
      { target: "I decide staying silent isn't actually safe.", jumbled: ["I", "decide", "staying", "silent", "isn't", "actually", "safe."] },
      { target: "If I were in her position, I would want support.", jumbled: ["If", "I", "were", "in", "her", "position,", "I", "would", "want", "support."] },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult decision you made even though it felt risky.",
    mySentenceExample: "I made a difficult decision to speak up even though it felt risky.",
  },
  {
    number: 4,
    title: "Reaching Out to Nina",
    image: null,
    imageNote: "Ethan sitting beside Nina at a quiet lunch table, talking gently while she listens with a surprised but grateful expression.",
    story:
      "The next day, instead of confronting Marcus immediately, I decide to reach out to Nina privately first. I find her sitting alone at lunch and ask quietly if I can join her, which clearly surprises her. “I've seen the comments,” I say gently, watching her expression shift from guarded to visibly relieved. She admits she's been struggling with feeling embarrassed and unsure whether anyone even noticed what was happening. I tell her honestly that I noticed, and that what's happening to her isn't acceptable at all. For the first time in days, Nina's shoulders relax slightly, like she's carrying a little less weight now.",
    questions: [
      "What does Ethan decide to do first?",
      "What does Ethan tell Nina he's seen?",
      "How does Nina react to Ethan's words?",
    ],
    trueFalse: [
      { text: "Ethan decides to reach out to Nina first.", answer: true },
      { text: "Nina refuses to let Ethan sit with her.", answer: false },
      { text: "Nina admits she's been struggling with embarrassment.", answer: true },
      { text: "Ethan tells Nina what's happening isn't acceptable.", answer: true },
      { text: "Nina's shoulders tense up more after talking.", answer: false },
    ],
    buildSentence: [
      { target: "I find her sitting alone.", jumbled: ["find", "her", "I", "sitting", "alone."] },
      { target: "I've seen the comments, I say.", jumbled: ["I've", "seen", "the", "comments,", "I", "say."] },
      { target: "Her shoulders relax slightly now.", jumbled: ["Her", "shoulders", "relax", "slightly", "now."] },
      { target: "She's been struggling with feeling embarrassed.", jumbled: ["She's", "been", "struggling", "with", "feeling", "embarrassed."] },
      { target: "This isn't acceptable at all, I tell her.", jumbled: ["This", "isn't", "acceptable", "at", "all,", "I", "tell", "her."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching out to someone who seemed to be struggling.",
    mySentenceExample: "I reached out to a classmate who seemed to be struggling quietly.",
  },
  {
    number: 5,
    title: "Speaking Up",
    image: null,
    imageNote: "Ethan typing a comment on his phone, his expression steady and determined, the group chat visible on his screen.",
    story:
      "That evening, I open the group chat where the unkind comments have been posted most frequently. My hands feel slightly shaky as I type a message defending Nina's artwork and calling out the mocking directly. Before sending it, I read it three times, worried about how Marcus and others might react to this. Although deleting the message feels tempting, I remind myself why I'm doing this in the first place. I press send, and immediately, my phone buzzes with several new notifications appearing rapidly one after another. Whatever happens next, at least Nina will know that someone was willing to speak up for her.",
    questions: [
      "Where does Ethan post his message that evening?",
      "How do Ethan's hands feel while typing?",
      "What does Ethan do before sending the message?",
    ],
    trueFalse: [
      { text: "Ethan posts his message in the group chat.", answer: true },
      { text: "Ethan's hands feel completely steady while typing.", answer: false },
      { text: "Ethan reads his message three times before sending.", answer: true },
      { text: "Ethan deletes the message before sending it.", answer: false },
      { text: "Ethan's phone buzzes with notifications after he sends it.", answer: true },
    ],
    buildSentence: [
      { target: "My hands feel slightly shaky.", jumbled: ["My", "hands", "feel", "slightly", "shaky."] },
      { target: "I press send finally.", jumbled: ["press", "send", "I", "finally."] },
      { target: "I read it three times.", jumbled: ["I", "read", "it", "three", "times."] },
      { target: "I remind myself why I'm doing this.", jumbled: ["I", "remind", "myself", "why", "I'm", "doing", "this."] },
      { target: "At least Nina will know someone spoke up for her.", jumbled: ["At", "least", "Nina", "will", "know", "someone", "spoke", "up", "for", "her."] },
    ],
    mySentencePrompt: "Write or say one sentence about speaking up even though it felt scary.",
    mySentenceExample: "I spoke up in class even though it felt scary at first.",
  },
  {
    number: 6,
    title: "The Backlash",
    image: null,
    imageNote: "Ethan looking at his phone with a tense expression as several critical replies and messages appear on his screen.",
    story:
      "Within minutes, Marcus replies defensively, accusing me of overreacting and telling me to mind my own business instead. A few of his friends pile on too, and my phone buzzes constantly with notifications that feel increasingly hostile. My stomach tightens reading each new message, and I briefly wonder if I made a serious mistake speaking up. However, I also notice something unexpected: two other classmates message me privately, thanking me quietly for saying something. They admit they had noticed the comments too but felt too afraid to say anything themselves. Even though the group chat feels tense right now, I don't regret sending that message.",
    questions: [
      "How does Marcus reply to Ethan's message?",
      "How does Ethan's stomach feel reading the responses?",
      "What do two other classmates do?",
    ],
    trueFalse: [
      { text: "Marcus replies defensively, accusing Ethan of overreacting.", answer: true },
      { text: "Ethan's stomach feels completely calm reading the responses.", answer: false },
      { text: "Two classmates message Ethan privately to thank him.", answer: true },
      { text: "Those classmates say they never noticed the comments.", answer: false },
      { text: "Ethan regrets sending the message.", answer: false },
    ],
    buildSentence: [
      { target: "Marcus replies defensively today.", jumbled: ["Marcus", "replies", "defensively", "today."] },
      { target: "My stomach tightens reading this.", jumbled: ["My", "stomach", "tightens", "reading", "this."] },
      { target: "I don't regret sending that message.", jumbled: ["I", "don't", "regret", "sending", "that", "message."] },
      { target: "They felt too afraid to say anything.", jumbled: ["They", "felt", "too", "afraid", "to", "say", "anything."] },
      { target: "Two classmates thank me quietly for saying something.", jumbled: ["Two", "classmates", "thank", "me", "quietly", "for", "saying", "something."] },
    ],
    mySentencePrompt: "Write or say one sentence about facing criticism after standing up for what you believed.",
    mySentenceExample: "I faced criticism after standing up for what I believed was right.",
  },
  {
    number: 7,
    title: "Talking to a Teacher",
    image: null,
    imageNote: "Ethan sitting across from a school counselor, explaining the situation while the counselor listens and takes careful notes.",
    story:
      "The next morning, I decide the situation needs more than just a message in a group chat. I visit our school counselor, Ms. Delgado, and explain everything that's been happening to Nina online. She listens carefully, asking thoughtful questions rather than jumping immediately to conclusions or punishments. “Thank you for trusting me with this. You did the right thing bringing it forward,” she says sincerely. She explains the school has clear policies about online harassment, even when it happens outside school hours. Although I feel nervous about what happens next, I also feel relieved that this isn't only my responsibility anymore.",
    questions: [
      "Who does Ethan visit the next morning?",
      "What does Ms. Delgado do while Ethan explains?",
      "What does Ms. Delgado say about the school's policies?",
    ],
    trueFalse: [
      { text: "Ethan visits the school counselor, Ms. Delgado.", answer: true },
      { text: "Ms. Delgado listens carefully and asks thoughtful questions.", answer: true },
      { text: "Ms. Delgado says the school has no policies about this.", answer: false },
      { text: "Ethan feels relieved this isn't only his responsibility now.", answer: true },
      { text: "Ethan feels this decision was completely unnecessary.", answer: false },
    ],
    buildSentence: [
      { target: "I visit the counselor today.", jumbled: ["visit", "the", "I", "counselor", "today."] },
      { target: "She listens carefully to me.", jumbled: ["She", "listens", "carefully", "to", "me."] },
      { target: "You did the right thing.", jumbled: ["did", "the", "You", "right", "thing."] },
      { target: "I feel relieved this isn't only my responsibility.", jumbled: ["I", "feel", "relieved", "this", "isn't", "only", "my", "responsibility."] },
      { target: "The school has clear policies about online harassment.", jumbled: ["The", "school", "has", "clear", "policies", "about", "online", "harassment."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking an adult for help with a difficult situation.",
    mySentenceExample: "I asked a teacher for help with a difficult situation at school.",
  },
  {
    number: 8,
    title: "Consequences and Conversations",
    image: null,
    imageNote: "Marcus sitting in the school office looking uncomfortable while a school administrator speaks to him calmly but firmly.",
    story:
      "Over the following days, the school addresses the situation directly, meeting separately with Marcus and the other students involved. I don't know exactly what was said in those meetings, but Marcus's public comments about Nina noticeably stop appearing. Surprisingly, Marcus approaches me in the hallway a few days later, looking uncomfortable but clearly wanting to say something. “I didn't think about how that would actually affect her,” he admits, avoiding direct eye contact throughout. I don't fully forgive him immediately, but I appreciate that he's at least acknowledging the harm he caused. Change doesn't happen instantly, but this conversation feels like a genuinely important first step.",
    questions: [
      "What does the school do over the following days?",
      "What happens to Marcus's public comments about Nina?",
      "What does Marcus admit to Ethan in the hallway?",
    ],
    trueFalse: [
      { text: "The school addresses the situation directly.", answer: true },
      { text: "Marcus's comments about Nina continue as before.", answer: false },
      { text: "Marcus approaches Ethan in the hallway later.", answer: true },
      { text: "Marcus admits he didn't think about how it affected her.", answer: true },
      { text: "Ethan feels this conversation means nothing at all.", answer: false },
    ],
    buildSentence: [
      { target: "Marcus approaches me later.", jumbled: ["Marcus", "approaches", "me", "later."] },
      { target: "I appreciate this acknowledgment somewhat.", jumbled: ["I", "appreciate", "this", "acknowledgment", "somewhat."] },
      { target: "Change doesn't happen instantly.", jumbled: ["Change", "doesn't", "happen", "instantly."] },
      { target: "This feels like an important first step.", jumbled: ["This", "feels", "like", "an", "important", "first", "step."] },
      { target: "I didn't think about how that would affect her.", jumbled: ["I", "didn't", "think", "about", "how", "that", "would", "affect", "her."] },
    ],
    mySentencePrompt: "Write or say one sentence about seeing someone acknowledge a mistake they made.",
    mySentenceExample: "I saw my friend acknowledge a mistake and apologize sincerely.",
  },
  {
    number: 9,
    title: "Nina's Recovery",
    image: null,
    imageNote: "Nina sitting with Ethan and a small group of friends at lunch, laughing genuinely, her artwork visible in a sketchbook on the table.",
    story:
      "Weeks later, I notice Nina gradually returning to her normal, confident self during lunch and class discussions. She starts sharing her artwork more openly again, no longer hesitant about posting new pieces online. One afternoon, she thanks me specifically for what I did, admitting it meant more to her than I probably realized. “Having someone actually say something made me feel less invisible,” she explains honestly, her voice steady now. I tell her I simply couldn't watch it continue without saying anything, that it genuinely wasn't a difficult choice morally. Watching her laugh freely again with our small friend group feels like real, meaningful progress.",
    questions: [
      "What does Ethan notice about Nina weeks later?",
      "What does Nina start doing again?",
      "What does Nina thank Ethan for?",
    ],
    trueFalse: [
      { text: "Ethan notices Nina returning to her confident self.", answer: true },
      { text: "Nina stops sharing her artwork completely.", answer: false },
      { text: "Nina thanks Ethan specifically for what he did.", answer: true },
      { text: "Nina says speaking up made her feel less invisible.", answer: true },
      { text: "Ethan feels this progress means nothing to him.", answer: false },
    ],
    buildSentence: [
      { target: "Nina starts sharing her artwork.", jumbled: ["Nina", "starts", "sharing", "her", "artwork."] },
      { target: "She thanks me specifically today.", jumbled: ["She", "thanks", "me", "specifically", "today."] },
      { target: "This feels like real progress.", jumbled: ["This", "feels", "like", "real", "progress."] },
      { target: "I couldn't watch it continue without speaking.", jumbled: ["I", "couldn't", "watch", "it", "continue", "without", "speaking."] },
      { target: "Having someone say something made me feel less invisible.", jumbled: ["Having", "someone", "say", "something", "made", "me", "feel", "less", "invisible."] },
    ],
    mySentencePrompt: "Write or say one sentence about seeing a positive change after helping someone.",
    mySentenceExample: "I saw a positive change in my friend after I helped her through a hard time.",
  },
  {
    number: 10,
    title: "What I Learned",
    image: null,
    imageNote: "Ethan sitting at his desk that evening, writing in a notebook, a small reflective smile on his face, his phone resting quietly nearby.",
    story:
      "Looking back on everything that happened, I realize how close I came to staying silent that very first night. If I had scrolled past without saying anything, Nina's situation might have continued getting worse indefinitely. I learned that speaking up doesn't require being fearless, only being willing to act despite feeling genuinely afraid. The backlash from Marcus's friends was uncomfortable, but it faded far quicker than I had originally worried it would. What mattered more, ultimately, was that Nina knew she wasn't facing this completely alone. I now understand that staying silent isn't neutral at all; sometimes, silence quietly takes a side too.",
    questions: [
      "What does Ethan realize looking back on everything?",
      "What did Ethan learn about speaking up?",
      "What does Ethan now understand about staying silent?",
    ],
    trueFalse: [
      { text: "Ethan realizes how close he came to staying silent.", answer: true },
      { text: "Ethan learned speaking up requires being completely fearless.", answer: false },
      { text: "The backlash faded quicker than Ethan expected.", answer: true },
      { text: "Ethan understands that staying silent isn't neutral.", answer: true },
      { text: "Ethan believes what he did didn't matter at all.", answer: false },
    ],
    buildSentence: [
      { target: "I realize this looking back.", jumbled: ["realize", "this", "I", "looking", "back."] },
      { target: "This faded quicker than expected.", jumbled: ["This", "faded", "quicker", "than", "expected."] },
      { target: "I learned something important about fear.", jumbled: ["I", "learned", "something", "important", "about", "fear."] },
      { target: "Silence quietly takes a side too.", jumbled: ["Silence", "quietly", "takes", "a", "side", "too."] },
      { target: "Speaking up doesn't require being fearless, only willing to act.", jumbled: ["Speaking", "up", "doesn't", "require", "being", "fearless,", "only", "willing", "to", "act."] },
    ],
    mySentencePrompt: "Write or say one sentence about something important you learned from standing up for someone.",
    mySentenceExample: "I learned that even small actions can make a real difference for someone.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

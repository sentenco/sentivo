// B2 Teens digital storybook, Book 67: "The Rumor in the Group Chat"
// Static content -- no Supabase. Third book in the B2 Teens batch
// (65-72). Misinformation/ethics scenario, distinct from Book 53
// "Standing Up to a Bully Online" (direct bullying, a bystander
// dilemma) -- this one centers on a rumor spreading and the narrator
// weighing loyalty vs. fairness before intervening, matching the B2
// spec's mediation/comparing-viewpoints focus. Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "The Rumor in the Group Chat";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Malik staring at his phone screen showing a group chat, a worried expression as he scrolls through a long thread of messages.";

export const CHARACTERS = [
  { name: "Malik", role: "The narrator, a student in a large friend group chat", look: "Hoodie, backpack, thoughtful and a little conflict-averse." },
  { name: "Beatriz", role: "A classmate the rumor is about", look: "Quiet, keeps to herself lately, seems increasingly withdrawn." },
  { name: "Otis", role: "The classmate who started the rumor", look: "Confident, popular, doesn't seem to realize the harm he's caused." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Message Appears",
    image: null,
    imageNote: "Malik's phone screen showing a group chat notification, his face illuminated by the screen light at night.",
    story:
      "Late one evening, a message pops up in our class group chat claiming Beatriz had cheated on last week's history exam. I don't recognize the source immediately, though the message spreads within minutes, with dozens of replies piling up rapidly. Some students seem to accept it as fact instantly, while others question where this information had actually come from originally. I scroll through the thread uneasily, noticing Beatriz hasn't responded, which somehow makes the whole situation feel worse. Whatever the truth turns out to be, I sense this rumor has already caused damage that won't be easily undone.",
    questions: [
      "What does the message claim about Beatriz?",
      "How quickly does the message spread?",
      "What does Malik notice about Beatriz's response?",
    ],
    trueFalse: [
      { text: "The message claims Beatriz cheated on last week's exam.", answer: true },
      { text: "The message spreads within minutes.", answer: true },
      { text: "Every single student immediately accepts it as fact.", answer: false },
      { text: "Beatriz hasn't responded in the thread.", answer: true },
      { text: "Malik senses this rumor has already caused damage.", answer: true },
    ],
    buildSentence: [
      { target: "A message pops up tonight.", jumbled: ["A", "message", "pops", "up", "tonight."] },
      { target: "I scroll through the thread uneasily.", jumbled: ["I", "scroll", "through", "the", "thread", "uneasily."] },
      { target: "Beatriz hasn't responded in the thread.", jumbled: ["Beatriz", "hasn't", "responded", "in", "the", "thread."] },
      { target: "This rumor has already caused damage.", jumbled: ["This", "rumor", "has", "already", "caused", "damage."] },
      { target: "Some students question where this information had come from.", jumbled: ["Some", "students", "question", "where", "this", "information", "had", "come", "from."] },
    ],
    mySentencePrompt: "Write or say one sentence about seeing a rumor spread quickly online.",
    mySentenceExample: "I saw a rumor spread quickly online last week.",
  },
  {
    number: 2,
    title: "Tracing the Source",
    image: null,
    imageNote: "Malik scrolling back through old messages on his phone, trying to find where the rumor originally started.",
    story:
      "Curious about where this claim originated, I scroll back further, trying to trace the message to its actual first appearance. Eventually, I find it: Otis had posted the original claim, saying he'd heard it secondhand from someone in another class. This detail concerns me considerably, since secondhand information, especially something this serious, ought to be verified before being shared publicly. I message Otis privately, asking whether he'd actually confirmed any of this before posting it to the entire group. He responds casually, saying he'd simply assumed it was true because multiple people had apparently mentioned something similar.",
    questions: [
      "What does Malik do to find the source of the claim?",
      "Who posted the original claim, and where had he heard it?",
      "What does Malik ask Otis privately?",
    ],
    trueFalse: [
      { text: "Malik scrolls back to trace the message's original appearance.", answer: true },
      { text: "Otis posted the original claim.", answer: true },
      { text: "Otis says he heard it secondhand from another class.", answer: true },
      { text: "Otis confirms he had personally verified the claim.", answer: false },
      { text: "Malik messages Otis privately about the claim.", answer: true },
    ],
    buildSentence: [
      { target: "I scroll back further now.", jumbled: ["I", "scroll", "back", "further", "now."] },
      { target: "This detail concerns me considerably.", jumbled: ["This", "detail", "concerns", "me", "considerably."] },
      { target: "I message Otis privately about this.", jumbled: ["I", "message", "Otis", "privately", "about", "this."] },
      { target: "This ought to be verified before being shared.", jumbled: ["This", "ought", "to", "be", "verified", "before", "being", "shared."] },
      { target: "He'd simply assumed it was true because others mentioned it.", jumbled: ["He'd", "simply", "assumed", "it", "was", "true", "because", "others", "mentioned", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about tracing information back to find out if it was actually true.",
    mySentenceExample: "I traced the information back to find out if it was true.",
  },
  {
    number: 3,
    title: "Weighing Loyalty and Fairness",
    image: null,
    imageNote: "Malik sitting on his bed, phone in hand, staring at the ceiling deep in thought.",
    story:
      "I find myself genuinely torn about what to do next, caught between two competing instincts that both feel legitimate. On one hand, Otis is someone I've known for years, and calling him out publicly might damage our friendship considerably. On the other hand, Beatriz is being unfairly judged based on nothing more than an unverified secondhand claim. I remind myself that loyalty to a friend shouldn't mean staying silent while someone else gets hurt unfairly. Given this reasoning, I decide that saying something, however uncomfortable, seems like the only genuinely fair option available.",
    questions: [
      "What two competing instincts does Malik feel torn between?",
      "Why might calling Otis out publicly be difficult?",
      "What does Malik decide about staying silent?",
    ],
    trueFalse: [
      { text: "Malik feels torn between two competing instincts.", answer: true },
      { text: "Malik has known Otis for years.", answer: true },
      { text: "Malik decides loyalty means staying silent no matter what.", answer: false },
      { text: "Beatriz is being judged based on an unverified claim.", answer: true },
      { text: "Malik decides saying something seems like the fair option.", answer: true },
    ],
    buildSentence: [
      { target: "I find myself genuinely torn now.", jumbled: ["I", "find", "myself", "genuinely", "torn", "now."] },
      { target: "I decide to say something now.", jumbled: ["I", "decide", "to", "say", "something", "now."] },
      { target: "This seems like the only fair option.", jumbled: ["This", "seems", "like", "the", "only", "fair", "option."] },
      { target: "Loyalty shouldn't mean staying silent while someone gets hurt.", jumbled: ["Loyalty", "shouldn't", "mean", "staying", "silent", "while", "someone", "gets", "hurt."] },
      { target: "Calling him out publicly might damage our friendship considerably.", jumbled: ["Calling", "him", "out", "publicly", "might", "damage", "our", "friendship", "considerably."] },
    ],
    mySentencePrompt: "Write or say one sentence about being torn between loyalty to a friend and doing what's fair.",
    mySentenceExample: "I felt torn between loyalty to my friend and doing what's fair.",
  },
  {
    number: 4,
    title: "Speaking with Otis",
    image: null,
    imageNote: "Malik and Otis talking privately in a school hallway, Otis looking increasingly uncomfortable as Malik speaks.",
    story:
      "I find Otis alone before class and explain, as calmly as I can manage, why this situation genuinely concerns me. I point out that spreading unverified claims, especially ones this serious, can cause real harm regardless of whether they're true. Otis initially seems defensive, insisting he hadn't meant any real damage by simply sharing what he'd heard. However, as I continue explaining Beatriz's likely perspective, his expression gradually shifts from defensiveness toward genuine discomfort instead. By the end of our conversation, he admits, somewhat reluctantly, that he probably should have verified things first.",
    questions: [
      "What does Malik explain to Otis?",
      "How does Otis initially react?",
      "What does Otis admit by the end of the conversation?",
    ],
    trueFalse: [
      { text: "Malik finds Otis alone before class to talk.", answer: true },
      { text: "Otis initially seems defensive about the situation.", answer: true },
      { text: "Otis's expression stays exactly the same throughout the conversation.", answer: false },
      { text: "Otis admits he probably should have verified things first.", answer: true },
      { text: "Malik explains that unverified claims can cause real harm.", answer: true },
    ],
    buildSentence: [
      { target: "I find Otis alone today.", jumbled: ["I", "find", "Otis", "alone", "today."] },
      { target: "Otis initially seems defensive about this.", jumbled: ["Otis", "initially", "seems", "defensive", "about", "this."] },
      { target: "He should have verified things first.", jumbled: ["He", "should", "have", "verified", "things", "first."] },
      { target: "His expression gradually shifts toward genuine discomfort.", jumbled: ["His", "expression", "gradually", "shifts", "toward", "genuine", "discomfort."] },
      { target: "This can cause real harm regardless of whether it's true.", jumbled: ["This", "can", "cause", "real", "harm", "regardless", "of", "whether", "it's", "true."] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining calmly why something someone did was harmful.",
    mySentenceExample: "I explained calmly why something he did was harmful.",
  },
  {
    number: 5,
    title: "A Difficult Conversation with Beatriz",
    image: null,
    imageNote: "Malik approaching Beatriz at her locker, she looks guarded at first, then gradually more open as they talk.",
    story:
      "Deciding I also need to speak with Beatriz directly, I approach her carefully, aware she might reasonably distrust anyone right now. She admits she's seen the messages and had genuinely considered not coming to school at all this week. I apologize on behalf of the group chat generally, even though I hadn't personally spread the original claim myself. She appreciates this, though she mentions that apologies alone won't necessarily undo the damage already done to her reputation. Given this, I ask what she thinks would actually help the situation moving forward from here.",
    questions: [
      "Why does Malik decide he needs to speak with Beatriz?",
      "What had Beatriz genuinely considered doing?",
      "What does Beatriz mention about apologies alone?",
    ],
    trueFalse: [
      { text: "Malik decides he needs to speak with Beatriz directly.", answer: true },
      { text: "Beatriz had considered not coming to school at all.", answer: true },
      { text: "Beatriz says apologies alone will completely fix everything.", answer: false },
      { text: "Malik apologizes on behalf of the group chat.", answer: true },
      { text: "Malik asks what would actually help the situation.", answer: true },
    ],
    buildSentence: [
      { target: "I approach her carefully now.", jumbled: ["I", "approach", "her", "carefully", "now."] },
      { target: "She admits she's seen the messages.", jumbled: ["She", "admits", "she's", "seen", "the", "messages."] },
      { target: "I ask what would actually help now.", jumbled: ["I", "ask", "what", "would", "actually", "help", "now."] },
      { target: "Apologies alone won't necessarily undo the damage.", jumbled: ["Apologies", "alone", "won't", "necessarily", "undo", "the", "damage."] },
      { target: "She had genuinely considered not coming to school at all.", jumbled: ["She", "had", "genuinely", "considered", "not", "coming", "to", "school", "at", "all."] },
    ],
    mySentencePrompt: "Write or say one sentence about apologizing to someone even though you weren't fully responsible for the harm.",
    mySentenceExample: "I apologized even though I wasn't fully responsible for the harm.",
  },
  {
    number: 6,
    title: "A Public Correction",
    image: null,
    imageNote: "Otis typing a message into the group chat, Malik standing nearby, both looking at the phone screen together.",
    story:
      "Otis and I agree that a public correction in the group chat is necessary, given how publicly the rumor had spread. He writes a message admitting the original claim was unverified and apologizing directly to Beatriz for the harm caused. Some students respond supportively, though a few seem oddly reluctant to fully let go of the original, more dramatic story. I add my own message, gently reminding everyone that spreading unverified claims can hurt real people regardless of intent. Watching the conversation shift, even slightly, toward accountability feels like a small but genuinely meaningful victory.",
    questions: [
      "What do Otis and Malik agree is necessary?",
      "What does Otis's message admit?",
      "How do some students respond to the correction?",
    ],
    trueFalse: [
      { text: "Otis and Malik agree a public correction is necessary.", answer: true },
      { text: "Otis's message admits the original claim was unverified.", answer: true },
      { text: "Every single student responds supportively without any reluctance.", answer: false },
      { text: "Malik adds his own message about unverified claims.", answer: true },
      { text: "Malik feels this shift toward accountability is meaningful.", answer: true },
    ],
    buildSentence: [
      { target: "He writes a message now.", jumbled: ["He", "writes", "a", "message", "now."] },
      { target: "I add my own message too.", jumbled: ["I", "add", "my", "own", "message", "too."] },
      { target: "This feels like a small victory.", jumbled: ["This", "feels", "like", "a", "small", "victory."] },
      { target: "This can hurt real people regardless of intent.", jumbled: ["This", "can", "hurt", "real", "people", "regardless", "of", "intent."] },
      { target: "A public correction is necessary, given how it spread.", jumbled: ["A", "public", "correction", "is", "necessary,", "given", "how", "it", "spread."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone publicly correcting a mistake they had made.",
    mySentenceExample: "Someone publicly corrected a mistake they had made online.",
  },
  {
    number: 7,
    title: "Beatriz's Response",
    image: null,
    imageNote: "Beatriz reading the correction message on her phone, a small, cautious smile forming as she looks up.",
    story:
      "The next day, Beatriz mentions she'd seen the correction message and appreciated that Otis had actually taken responsibility publicly. She admits it doesn't completely erase how the past week had felt, though it genuinely helps somewhat. I ask whether she thinks Otis's apology felt sincere, given everything that had happened between them. She considers this carefully, then says that his willingness to admit fault publicly, in spite of the social risk, seemed like real accountability. Hearing her perspective directly, rather than assuming how she felt, strikes me as something I should have done earlier.",
    questions: [
      "What does Beatriz mention the next day?",
      "What does Beatriz say about the past week?",
      "What does Beatriz think about Otis's apology?",
    ],
    trueFalse: [
      { text: "Beatriz mentions she'd seen the correction message.", answer: true },
      { text: "Beatriz says the correction completely erases the past week.", answer: false },
      { text: "Beatriz thinks Otis's public admission seemed like real accountability.", answer: true },
      { text: "Malik asks whether Beatriz thinks the apology felt sincere.", answer: true },
      { text: "Malik realizes he should have asked her perspective earlier.", answer: true },
    ],
    buildSentence: [
      { target: "She mentions this the next day.", jumbled: ["She", "mentions", "this", "the", "next", "day."] },
      { target: "This genuinely helps somewhat, she admits.", jumbled: ["This", "genuinely", "helps", "somewhat,", "she", "admits."] },
      { target: "I ask whether the apology felt sincere.", jumbled: ["I", "ask", "whether", "the", "apology", "felt", "sincere."] },
      { target: "This seemed like real accountability to her.", jumbled: ["This", "seemed", "like", "real", "accountability", "to", "her."] },
      { target: "His willingness to admit fault, in spite of the risk, mattered.", jumbled: ["His", "willingness", "to", "admit", "fault,", "in", "spite", "of", "the", "risk,", "mattered."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone directly how they felt instead of assuming.",
    mySentenceExample: "I asked her directly how she felt instead of assuming.",
  },
  {
    number: 8,
    title: "A Broader Conversation",
    image: null,
    imageNote: "Malik's class having a group discussion led by a teacher about online rumors and responsibility, students seated in a circle.",
    story:
      "Our homeroom teacher, having heard about the situation, dedicates part of a class period to discussing online responsibility more broadly. Several students share their own experiences with rumors, both as the person who spread one and the person harmed by one. Otis speaks up unprompted, admitting publicly what he'd already told me privately about not verifying information first. This openness, moreover, seems to shift the classroom's mood from awkward silence toward genuine, thoughtful reflection instead. I realize this single incident has sparked a conversation that might actually change how people behave going forward.",
    questions: [
      "What does the homeroom teacher dedicate part of the class to?",
      "What do several students share?",
      "What does Otis do during this class discussion?",
    ],
    trueFalse: [
      { text: "The homeroom teacher dedicates class time to online responsibility.", answer: true },
      { text: "Several students share their own experiences with rumors.", answer: true },
      { text: "Otis refuses to say anything during the discussion.", answer: false },
      { text: "Otis speaks up unprompted about not verifying information.", answer: true },
      { text: "Malik feels this incident sparked a meaningful conversation.", answer: true },
    ],
    buildSentence: [
      { target: "Our teacher dedicates class time now.", jumbled: ["Our", "teacher", "dedicates", "class", "time", "now."] },
      { target: "Several students share their own experiences.", jumbled: ["Several", "students", "share", "their", "own", "experiences."] },
      { target: "Otis speaks up unprompted this time.", jumbled: ["Otis", "speaks", "up", "unprompted", "this", "time."] },
      { target: "This shifts the classroom's mood toward reflection.", jumbled: ["This", "shifts", "the", "classroom's", "mood", "toward", "reflection."] },
      { target: "This incident has sparked a conversation that might change behavior.", jumbled: ["This", "incident", "has", "sparked", "a", "conversation", "that", "might", "change", "behavior."] },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult situation leading to a broader, useful conversation.",
    mySentenceExample: "A difficult situation led to a broader, useful conversation.",
  },
  {
    number: 9,
    title: "A New Understanding",
    image: null,
    imageNote: "Malik, Otis, and Beatriz sitting together at a lunch table, tentatively rebuilding a normal, friendly interaction.",
    story:
      "A few weeks later, I notice Beatriz and Otis sitting at the same lunch table, something that would have seemed unlikely just recently. Their conversation seems cautious but genuine, neither pretending the incident hadn't happened nor dwelling on it constantly either. I join them, and we talk about something unrelated entirely, the ordinary kind of conversation that somehow feels meaningful given everything before it. Watching this unfold, I realize that accountability, when handled honestly, can actually rebuild trust rather than permanently destroying it. This experience has taught me something about patience I hadn't fully appreciated before this happened.",
    questions: [
      "What does Malik notice a few weeks later?",
      "How does their conversation seem?",
      "What does Malik realize about accountability?",
    ],
    trueFalse: [
      { text: "Malik notices Beatriz and Otis sitting at the same table.", answer: true },
      { text: "Their conversation seems cautious but genuine.", answer: true },
      { text: "They pretend the incident never happened at all.", answer: false },
      { text: "Malik realizes accountability can rebuild trust rather than destroy it.", answer: true },
      { text: "Malik learns something about patience from this experience.", answer: true },
    ],
    buildSentence: [
      { target: "I notice this a few weeks later.", jumbled: ["I", "notice", "this", "a", "few", "weeks", "later."] },
      { target: "I join them at the table.", jumbled: ["I", "join", "them", "at", "the", "table."] },
      { target: "This taught me something about patience.", jumbled: ["This", "taught", "me", "something", "about", "patience."] },
      { target: "Their conversation seems cautious but genuine.", jumbled: ["Their", "conversation", "seems", "cautious", "but", "genuine."] },
      { target: "Accountability can actually rebuild trust rather than destroy it.", jumbled: ["Accountability", "can", "actually", "rebuild", "trust", "rather", "than", "destroy", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about watching trust slowly rebuild between two people after a conflict.",
    mySentenceExample: "I watched trust slowly rebuild between two people after a conflict.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Malik sitting alone on his bed that evening, phone face-down beside him, reflecting quietly.",
    story:
      "Looking back on the entire situation, I realize how easily I could have simply stayed silent and let the rumor run its course. Had I chosen silence, Beatriz might have continued suffering unfairly, while Otis never learned anything meaningful from the situation either. Instead, choosing to speak up, however uncomfortable it initially felt, allowed genuine accountability and eventual healing to actually happen. I've learned that loyalty to a friend shouldn't mean protecting them from consequences they genuinely need to face. In the end, this experience taught me that fairness sometimes requires more courage than simply staying quiet.",
    questions: [
      "What does Malik realize looking back on the situation?",
      "What might have happened had he chosen silence?",
      "What has Malik learned about loyalty and fairness?",
    ],
    trueFalse: [
      { text: "Malik realizes he could have simply stayed silent.", answer: true },
      { text: "Silence might have meant Beatriz continued suffering unfairly.", answer: true },
      { text: "Malik believes loyalty means protecting friends from all consequences.", answer: false },
      { text: "Malik learns fairness sometimes requires more courage than staying quiet.", answer: true },
      { text: "Speaking up allowed genuine accountability and healing to happen.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this now.", jumbled: ["I", "look", "back", "on", "this", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Fairness sometimes requires more courage than staying quiet.", jumbled: ["Fairness", "sometimes", "requires", "more", "courage", "than", "staying", "quiet."] },
      { target: "Loyalty shouldn't mean protecting someone from consequences they need.", jumbled: ["Loyalty", "shouldn't", "mean", "protecting", "someone", "from", "consequences", "they", "need."] },
      { target: "Had I chosen silence, she might have continued suffering unfairly.", jumbled: ["Had", "I", "chosen", "silence,", "she", "might", "have", "continued", "suffering", "unfairly."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from choosing to speak up instead of staying silent.",
    mySentenceExample: "I learned that speaking up matters more than staying silent.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

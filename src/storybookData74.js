// B2 Adults digital storybook, Book 74: "Mediating a Dispute Between Coworkers"
// Static content -- no Supabase. Second book in the B2 Adults batch
// (73-80). Workplace triangulated-mediation scenario, the adult-
// professional parallel to Book 71's Teens "two friends" mediation
// but distinct in context and mechanics (a team lead resolving a
// process/credit dispute, not a personal friendship rift). Adults-
// track shape: 3 questions, 5 True/False, 5 Build-a-Sentence per
// chapter. Images not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Mediating a Dispute Between Coworkers";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ines standing between Salim and Petra at a shared office desk, both avoiding eye contact, tension visible in the room.";

export const CHARACTERS = [
  { name: "Ines", role: "The narrator, a team lead mediating a conflict", look: "Calm, organized, prefers addressing tension directly rather than letting it fester." },
  { name: "Salim", role: "A team member who feels his work was uncredited", look: "Detail-oriented, quietly frustrated, avoids confrontation until pushed." },
  { name: "Petra", role: "A team member accused of taking credit for Salim's work", look: "Confident presenter, genuinely unaware of how her actions were perceived." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Tension in the Team",
    image: null,
    imageNote: "Ines noticing Salim and Petra avoiding eye contact across a shared office desk, both visibly tense.",
    story:
      "Over the past week, I've noticed Salim and Petra communicating only through brief, clipped messages rather than their usual friendly exchanges. As team lead, I initially hesitate to intervene, hoping whatever tension exists might resolve itself naturally over time. However, during yesterday's meeting, Salim visibly stiffened when Petra presented findings that, given the project timeline, he'd clearly contributed to significantly. Afterward, a colleague mentions overhearing that Salim feels his analysis had been presented as entirely Petra's own idea. Given how this could affect team morale, I realize I'll need to address this directly rather than hoping it resolves itself.",
    questions: [
      "What has Ines noticed about Salim and Petra's communication?",
      "What happens during yesterday's meeting?",
      "What does a colleague mention overhearing?",
    ],
    trueFalse: [
      { text: "Salim and Petra have been communicating only through clipped messages.", answer: true },
      { text: "Ines initially hopes the tension resolves itself naturally.", answer: true },
      { text: "Salim visibly stiffened when Petra presented findings during the meeting.", answer: true },
      { text: "A colleague says Salim feels credited fairly for his work.", answer: false },
      { text: "Ines realizes she needs to address this directly.", answer: true },
    ],
    buildSentence: [
      { target: "I've noticed this over the past week.", jumbled: ["I've", "noticed", "this", "over", "the", "past", "week."] },
      { target: "I initially hesitate to intervene here.", jumbled: ["I", "initially", "hesitate", "to", "intervene", "here."] },
      { target: "I'll need to address this directly.", jumbled: ["I'll", "need", "to", "address", "this", "directly."] },
      { target: "This could affect team morale significantly.", jumbled: ["This", "could", "affect", "team", "morale", "significantly."] },
      { target: "His analysis had been presented as entirely her own idea.", jumbled: ["His", "analysis", "had", "been", "presented", "as", "entirely", "her", "own", "idea."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing tension between two coworkers before it becomes a bigger problem.",
    mySentenceExample: "I noticed tension between two coworkers before it became a problem.",
  },
  {
    number: 2,
    title: "Hearing Salim's Side",
    image: null,
    imageNote: "Ines and Salim sitting in a small meeting room, Salim explaining something with a restrained but frustrated tone.",
    story:
      "I ask Salim to meet privately, and he explains, somewhat reluctantly, what had actually been bothering him for weeks now. He'd spent considerable time developing the analysis Petra presented, yet she'd introduced it during the meeting without ever mentioning his contribution. Salim admits he hadn't said anything at the time, not wanting to seem petty in front of senior leadership. Nevertheless, he acknowledges that staying silent has left him feeling increasingly resentful, which he recognizes isn't sustainable long-term. I thank him for his honesty, recognizing this situation likely feels more significant to him than a simple oversight.",
    questions: [
      "What does Salim explain had been bothering him?",
      "Why didn't Salim say anything at the time?",
      "What does Salim acknowledge about staying silent?",
    ],
    trueFalse: [
      { text: "Salim explains what had been bothering him for weeks.", answer: true },
      { text: "Salim spent considerable time developing the analysis Petra presented.", answer: true },
      { text: "Salim didn't want to seem petty in front of senior leadership.", answer: true },
      { text: "Salim says staying silent has felt sustainable long-term.", answer: false },
      { text: "Ines recognizes this feels significant to Salim.", answer: true },
    ],
    buildSentence: [
      { target: "I ask Salim to meet privately.", jumbled: ["I", "ask", "Salim", "to", "meet", "privately."] },
      { target: "I thank him for his honesty.", jumbled: ["I", "thank", "him", "for", "his", "honesty."] },
      { target: "He hadn't said anything at the time.", jumbled: ["He", "hadn't", "said", "anything", "at", "the", "time."] },
      { target: "This isn't sustainable long-term, he recognizes.", jumbled: ["This", "isn't", "sustainable", "long-term,", "he", "recognizes."] },
      { target: "This likely feels more significant than a simple oversight.", jumbled: ["This", "likely", "feels", "more", "significant", "than", "a", "simple", "oversight."] },
    ],
    mySentencePrompt: "Write or say one sentence about listening to a coworker explain why they felt overlooked.",
    mySentenceExample: "I listened to my coworker explain why he felt overlooked.",
  },
  {
    number: 3,
    title: "Hearing Petra's Side",
    image: null,
    imageNote: "Ines and Petra sitting together, Petra looking genuinely surprised as Ines explains the situation.",
    story:
      "I speak with Petra separately, curious whether she's aware of how her presentation had been perceived by Salim specifically. Her reaction surprises me: she seems genuinely unaware, insisting she hadn't intended to take credit for anyone else's work. She explains that in the rush of preparing the presentation, she'd simply forgotten to explicitly mention who'd contributed which section. Given how sincere her surprise seems, I believe this was likely an oversight rather than deliberate, calculated credit-taking. Nevertheless, I explain that regardless of intent, Salim's hurt feelings are genuinely valid and deserve to be addressed properly.",
    questions: [
      "What does Ines ask Petra about?",
      "How does Petra react to hearing this?",
      "What does Petra explain about preparing the presentation?",
    ],
    trueFalse: [
      { text: "Ines asks Petra if she's aware of how her presentation was perceived.", answer: true },
      { text: "Petra seems genuinely unaware and surprised.", answer: true },
      { text: "Petra admits she deliberately intended to take credit.", answer: false },
      { text: "Petra explains she forgot to mention who contributed which section.", answer: true },
      { text: "Ines believes this was likely an oversight, not deliberate.", answer: true },
    ],
    buildSentence: [
      { target: "I speak with Petra separately now.", jumbled: ["I", "speak", "with", "Petra", "separately", "now."] },
      { target: "Her reaction surprises me here.", jumbled: ["Her", "reaction", "surprises", "me", "here."] },
      { target: "She seems genuinely unaware of this.", jumbled: ["She", "seems", "genuinely", "unaware", "of", "this."] },
      { target: "This was likely an oversight, not deliberate credit-taking.", jumbled: ["This", "was", "likely", "an", "oversight,", "not", "deliberate", "credit-taking."] },
      { target: "His hurt feelings are genuinely valid regardless of intent.", jumbled: ["His", "hurt", "feelings", "are", "genuinely", "valid", "regardless", "of", "intent."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone's mistake was unintentional rather than deliberate.",
    mySentenceExample: "I discovered her mistake was unintentional rather than deliberate.",
  },
  {
    number: 4,
    title: "Understanding Both Perspectives",
    image: null,
    imageNote: "Ines sitting alone at her desk, writing notes comparing both accounts, thoughtful expression.",
    story:
      "Reflecting on both conversations, I realize this conflict stems less from malice and more from a breakdown in communication under pressure. Salim's hurt is legitimate, given how much effort he'd invested without acknowledgment, however unintentional the omission actually was. Petra's confusion is also legitimate, given that she genuinely hadn't recognized how significant proper attribution would feel to him. Had either of them communicated more directly and earlier, this misunderstanding likely could have been resolved before it escalated. I decide that facilitating a direct conversation between them, rather than relaying messages myself, would genuinely serve them both better.",
    questions: [
      "What does Ines realize this conflict stems from?",
      "Why is Salim's hurt legitimate?",
      "What does Ines decide would serve them better?",
    ],
    trueFalse: [
      { text: "Ines realizes this stems from a communication breakdown, not malice.", answer: true },
      { text: "Salim's hurt is legitimate given his invested effort.", answer: true },
      { text: "Petra's confusion is not considered legitimate at all.", answer: false },
      { text: "Ines decides facilitating a direct conversation would serve them better.", answer: true },
      { text: "Earlier direct communication might have prevented this escalation.", answer: true },
    ],
    buildSentence: [
      { target: "I reflect on both conversations now.", jumbled: ["I", "reflect", "on", "both", "conversations", "now."] },
      { target: "Both perspectives are legitimate here.", jumbled: ["Both", "perspectives", "are", "legitimate", "here."] },
      { target: "This would genuinely serve them both better.", jumbled: ["This", "would", "genuinely", "serve", "them", "both", "better."] },
      { target: "This stems less from malice and more from a breakdown.", jumbled: ["This", "stems", "less", "from", "malice", "and", "more", "from", "a", "breakdown."] },
      { target: "Had they communicated earlier, this could have been resolved.", jumbled: ["Had", "they", "communicated", "earlier,", "this", "could", "have", "been", "resolved."] },
    ],
    mySentencePrompt: "Write or say one sentence about realizing a conflict came from miscommunication rather than bad intent.",
    mySentenceExample: "I realized the conflict came from miscommunication, not bad intent.",
  },
  {
    number: 5,
    title: "Bringing Them Together",
    image: null,
    imageNote: "Ines sitting between Salim and Petra in a meeting room, facilitating as both look at each other cautiously.",
    story:
      "I arrange a meeting with both Salim and Petra together, explaining upfront that my goal is understanding, not assigning blame. Petra begins by acknowledging that she hadn't properly credited Salim's contribution, apologizing sincerely once she understood how it had affected him. Salim, in turn, admits he should have raised this concern immediately rather than allowing resentment to build silently over weeks. Given this mutual acknowledgment, both agree that clearer communication about credit and contribution should become standard practice going forward. Watching this exchange unfold, I feel relieved that addressing it directly had actually worked as intended.",
    questions: [
      "What does Ines explain her goal is for this meeting?",
      "What does Petra acknowledge and apologize for?",
      "What does Salim admit he should have done?",
    ],
    trueFalse: [
      { text: "Ines explains her goal is understanding, not assigning blame.", answer: true },
      { text: "Petra acknowledges she hadn't properly credited Salim's contribution.", answer: true },
      { text: "Salim admits he should have raised this concern immediately.", answer: true },
      { text: "Both refuse to agree on any changes going forward.", answer: false },
      { text: "Ines feels relieved this approach worked as intended.", answer: true },
    ],
    buildSentence: [
      { target: "I arrange a meeting now.", jumbled: ["I", "arrange", "a", "meeting", "now."] },
      { target: "I feel relieved about this now.", jumbled: ["I", "feel", "relieved", "about", "this", "now."] },
      { target: "Both agree this should become standard practice.", jumbled: ["Both", "agree", "this", "should", "become", "standard", "practice."] },
      { target: "My goal is understanding, not assigning blame.", jumbled: ["My", "goal", "is", "understanding,", "not", "assigning", "blame."] },
      { target: "He should have raised this concern immediately.", jumbled: ["He", "should", "have", "raised", "this", "concern", "immediately."] },
    ],
    mySentencePrompt: "Write or say one sentence about bringing two people together to resolve a misunderstanding directly.",
    mySentenceExample: "I brought two people together to resolve a misunderstanding directly.",
  },
  {
    number: 6,
    title: "A New Team Practice",
    image: null,
    imageNote: "Ines presenting a new team norm on a whiteboard during a full team meeting, everyone nodding along.",
    story:
      "Given what happened, I propose a small but meaningful change: every presentation must now explicitly credit each contributor's specific role. The team responds positively, several members mentioning they'd occasionally felt similarly overlooked, though none had raised it directly before now. Petra volunteers to update the presentation template herself, ensuring attribution becomes a built-in, unavoidable step rather than an afterthought. Salim, meanwhile, seems visibly more relaxed during the meeting, contributing openly rather than holding back as he'd recently been doing. This small structural change, born from one uncomfortable conversation, seems likely to prevent similar friction going forward.",
    questions: [
      "What change does Ines propose?",
      "How does the team respond to this proposal?",
      "What does Petra volunteer to do?",
    ],
    trueFalse: [
      { text: "Ines proposes that presentations must explicitly credit contributors.", answer: true },
      { text: "The team responds positively to this proposal.", answer: true },
      { text: "Petra volunteers to update the presentation template.", answer: true },
      { text: "Salim seems more withdrawn and quiet during this meeting.", answer: false },
      { text: "This change seems likely to prevent similar friction going forward.", answer: true },
    ],
    buildSentence: [
      { target: "I propose a small but meaningful change.", jumbled: ["I", "propose", "a", "small", "but", "meaningful", "change."] },
      { target: "The team responds positively to this.", jumbled: ["The", "team", "responds", "positively", "to", "this."] },
      { target: "Petra volunteers to update this herself.", jumbled: ["Petra", "volunteers", "to", "update", "this", "herself."] },
      { target: "Salim seems visibly more relaxed now.", jumbled: ["Salim", "seems", "visibly", "more", "relaxed", "now."] },
      { target: "This seems likely to prevent similar friction going forward.", jumbled: ["This", "seems", "likely", "to", "prevent", "similar", "friction", "going", "forward."] },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a small change that could prevent a bigger problem later.",
    mySentenceExample: "I proposed a small change that could prevent a bigger problem later.",
  },
  {
    number: 7,
    title: "A Genuine Repair",
    image: null,
    imageNote: "Salim and Petra sitting together at lunch a week later, chatting normally, tension visibly gone.",
    story:
      "A week later, I notice Salim and Petra sitting together at lunch, chatting normally as though the earlier tension had never existed. Curious, I ask Salim privately how things had settled between them, and he admits Petra had gone out of her way to acknowledge his work publicly since then. She'd mentioned his contribution specifically during a subsequent client call, something he genuinely hadn't expected but deeply appreciated. He tells me that this small gesture mattered more to him than any formal policy change ultimately could have. I realize that while structural changes matter, genuine interpersonal repair often requires something more personal too.",
    questions: [
      "What does Ines notice a week later?",
      "What does Salim admit Petra had done since their meeting?",
      "What does Salim say mattered more than the policy change?",
    ],
    trueFalse: [
      { text: "Ines notices Salim and Petra sitting together at lunch.", answer: true },
      { text: "Petra had acknowledged his work publicly during a client call.", answer: true },
      { text: "Salim says the formal policy mattered more than this gesture.", answer: false },
      { text: "Salim says this small gesture mattered more to him.", answer: true },
      { text: "Ines realizes genuine repair often requires something personal too.", answer: true },
    ],
    buildSentence: [
      { target: "I notice this a week later.", jumbled: ["I", "notice", "this", "a", "week", "later."] },
      { target: "I ask Salim privately about this.", jumbled: ["I", "ask", "Salim", "privately", "about", "this."] },
      { target: "This mattered more to him ultimately.", jumbled: ["This", "mattered", "more", "to", "him", "ultimately."] },
      { target: "She'd gone out of her way to acknowledge his work.", jumbled: ["She'd", "gone", "out", "of", "her", "way", "to", "acknowledge", "his", "work."] },
      { target: "Genuine interpersonal repair often requires something more personal.", jumbled: ["Genuine", "interpersonal", "repair", "often", "requires", "something", "more", "personal."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small, genuine gesture that repaired trust between two coworkers.",
    mySentenceExample: "A small, genuine gesture repaired trust between two coworkers.",
  },
  {
    number: 8,
    title: "Writing a Summary for Leadership",
    image: null,
    imageNote: "Ines at her laptop drafting a brief written summary for her own manager about the team's new attribution practice.",
    story:
      "My own manager asks about the new attribution practice, having heard about it secondhand from someone on the broader leadership team. I write a brief summary explaining what prompted the change, careful to describe it constructively rather than dwelling on the original conflict. I emphasize the outcome: improved team communication and a structural safeguard against similar misunderstandings recurring in the future. My manager responds enthusiastically, suggesting other teams might benefit from adopting a similar practice themselves eventually. This written summary, though brief, feels like a genre I hadn't fully mastered before this experience.",
    questions: [
      "Who asks Ines about the new attribution practice?",
      "What does Ines emphasize in her summary?",
      "How does Ines's manager respond?",
    ],
    trueFalse: [
      { text: "Ines's own manager asks about the new attribution practice.", answer: true },
      { text: "Ines writes a summary describing the change constructively.", answer: true },
      { text: "Ines emphasizes improved team communication as the outcome.", answer: true },
      { text: "Her manager responds dismissively, showing no interest at all.", answer: false },
      { text: "Her manager suggests other teams might adopt a similar practice.", answer: true },
    ],
    buildSentence: [
      { target: "My manager asks about this now.", jumbled: ["My", "manager", "asks", "about", "this", "now."] },
      { target: "I write a brief summary now.", jumbled: ["I", "write", "a", "brief", "summary", "now."] },
      { target: "My manager responds enthusiastically to this.", jumbled: ["My", "manager", "responds", "enthusiastically", "to", "this."] },
      { target: "I emphasize the outcome, not the original conflict.", jumbled: ["I", "emphasize", "the", "outcome,", "not", "the", "original", "conflict."] },
      { target: "Other teams might benefit from adopting a similar practice.", jumbled: ["Other", "teams", "might", "benefit", "from", "adopting", "a", "similar", "practice."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a professional summary to share a positive outcome with leadership.",
    mySentenceExample: "I wrote a professional summary to share a positive outcome.",
  },
  {
    number: 9,
    title: "Reflecting with the Team",
    image: null,
    imageNote: "Ines, Salim, and Petra sitting together in a casual team debrief, all relaxed, discussing the experience openly.",
    story:
      "During a casual team debrief, the three of us discuss what we'd each learned from the whole experience, openly and without defensiveness. Petra admits she now double-checks attribution automatically, no longer trusting memory alone during rushed, high-pressure preparation. Salim admits he's learned to raise concerns earlier, recognizing that silence, however well-intentioned, often makes situations worse rather than better. I share that mediating this taught me to separate intent from impact, since good intentions don't automatically prevent real harm. This honest reflection, given how uncomfortable the original situation had felt, now feels like genuine growth for all three of us.",
    questions: [
      "What do the three of them discuss during the debrief?",
      "What does Petra admit she now does automatically?",
      "What does Ines share she learned from mediating this?",
    ],
    trueFalse: [
      { text: "The three of them discuss what they each learned openly.", answer: true },
      { text: "Petra admits she now double-checks attribution automatically.", answer: true },
      { text: "Salim admits silence often makes situations worse.", answer: true },
      { text: "Ines shares that good intentions always prevent real harm.", answer: false },
      { text: "This reflection feels like genuine growth for all three.", answer: true },
    ],
    buildSentence: [
      { target: "We discuss this openly now.", jumbled: ["We", "discuss", "this", "openly", "now."] },
      { target: "She now double-checks attribution automatically.", jumbled: ["She", "now", "double-checks", "attribution", "automatically."] },
      { target: "I share what I learned mediating this.", jumbled: ["I", "share", "what", "I", "learned", "mediating", "this."] },
      { target: "Silence often makes situations worse rather than better.", jumbled: ["Silence", "often", "makes", "situations", "worse", "rather", "than", "better."] },
      { target: "Good intentions don't automatically prevent real harm.", jumbled: ["Good", "intentions", "don't", "automatically", "prevent", "real", "harm."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson your whole team learned together from a difficult situation.",
    mySentenceExample: "Our whole team learned a valuable lesson from that difficult situation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Ines sitting at her desk that evening, reflecting quietly, the team now visible working comfortably together in the background.",
    story:
      "Looking back on the entire situation, I realize how differently things might have unfolded had I simply let the tension continue unaddressed. If I had avoided the conversation, hoping it would resolve itself, resentment likely would have deepened into something far harder to repair. Instead, addressing it directly, while genuinely understanding both perspectives first, allowed for a resolution that strengthened rather than merely patched things over. I've learned that mediating workplace conflict isn't about assigning fault, but about restoring the trust that good collaboration actually requires. In the end, this experience taught me that leadership sometimes means having uncomfortable conversations precisely because they matter.",
    questions: [
      "What does Ines realize looking back on the situation?",
      "What might have happened if she had avoided the conversation?",
      "What has Ines learned about mediating workplace conflict?",
    ],
    trueFalse: [
      { text: "Ines realizes things might have gone differently without addressing this.", answer: true },
      { text: "Avoiding the conversation might have deepened the resentment.", answer: true },
      { text: "Ines believes mediating conflict is about assigning fault.", answer: false },
      { text: "Ines learns mediating is about restoring trust, not assigning fault.", answer: true },
      { text: "Ines learns leadership sometimes means having uncomfortable conversations.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this situation now.", jumbled: ["I", "look", "back", "on", "this", "situation", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Mediating this isn't about assigning fault.", jumbled: ["Mediating", "this", "isn't", "about", "assigning", "fault."] },
      { target: "Leadership sometimes means having uncomfortable conversations.", jumbled: ["Leadership", "sometimes", "means", "having", "uncomfortable", "conversations."] },
      { target: "Had I avoided this, resentment likely would have deepened.", jumbled: ["Had", "I", "avoided", "this,", "resentment", "likely", "would", "have", "deepened."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a conflict between coworkers.",
    mySentenceExample: "I learned that mediating conflict restores trust, not just resolves disputes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

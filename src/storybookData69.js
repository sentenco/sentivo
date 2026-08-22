// B2 Teens digital storybook, Book 69: "The Environmental Club's Big Decision"
// Static content -- no Supabase. Fifth book in the B2 Teens batch
// (65-72). Activism-strategy scenario, distinct from Book 50
// "Organizing a Fundraiser" (library-funding fundraiser execution) --
// this one centers on two factions disagreeing over STRATEGY
// (protest vs. quiet lobbying) and the narrator mediating between
// them, matching the B2 spec's mediation/comparing-viewpoints focus.
// Teens-track shape: 3 questions, 5 True/False, 5 Build-a-Sentence
// per chapter. Images not generated yet -- image/coverImage null.

export const STORYBOOK_TITLE = "The Environmental Club's Big Decision";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Simone standing at the front of a classroom-style meeting, two groups of environmental club members seated on opposite sides, mid-disagreement.";

export const CHARACTERS = [
  { name: "Simone", role: "The narrator, president of the Environmental Club", look: "Practical clothes, always carries a reusable water bottle, diplomatic by nature." },
  { name: "Teodoro", role: "A club member who wants a public protest", look: "Passionate, impatient with slow processes, believes visibility matters most." },
  { name: "Winnie", role: "A club member who prefers quiet lobbying", look: "Methodical, prefers data and private meetings over public demonstrations." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Club Divided",
    image: null,
    imageNote: "Simone standing at a whiteboard in a classroom, club members seated in two visibly separated groups.",
    story:
      "Our Environmental Club has recently learned that the school plans to replace the community garden with a parking expansion. Everyone agrees this decision seems shortsighted, but the club has split sharply over how we should actually respond. Teodoro insists we organize a public protest outside the administration building, arguing that visibility creates real pressure for change. Winnie counters that a protest might alienate the very administrators we'd need to eventually persuade toward reversing the decision. As club president, I realize this disagreement threatens to derail our shared goal entirely, unless I can find some way to bridge it.",
    questions: [
      "What has the school planned to do with the community garden?",
      "What does Teodoro insist the club should do?",
      "What does Winnie counter about a protest?",
    ],
    trueFalse: [
      { text: "The school plans to replace the garden with a parking expansion.", answer: true },
      { text: "Everyone agrees this decision seems shortsighted.", answer: true },
      { text: "Teodoro insists on organizing a public protest.", answer: true },
      { text: "Winnie fully supports the protest idea immediately.", answer: false },
      { text: "Simone realizes this disagreement threatens their shared goal.", answer: true },
    ],
    buildSentence: [
      { target: "Our club has recently learned this.", jumbled: ["Our", "club", "has", "recently", "learned", "this."] },
      { target: "This decision seems shortsighted to everyone.", jumbled: ["This", "decision", "seems", "shortsighted", "to", "everyone."] },
      { target: "Visibility creates real pressure, he argues.", jumbled: ["Visibility", "creates", "real", "pressure,", "he", "argues."] },
      { target: "This threatens to derail our shared goal entirely.", jumbled: ["This", "threatens", "to", "derail", "our", "shared", "goal", "entirely."] },
      { target: "This might alienate the administrators we'd need to persuade.", jumbled: ["This", "might", "alienate", "the", "administrators", "we'd", "need", "to", "persuade."] },
    ],
    mySentencePrompt: "Write or say one sentence about a group disagreeing over the best strategy to achieve a shared goal.",
    mySentenceExample: "The group disagreed over the best strategy to achieve their goal.",
  },
  {
    number: 2,
    title: "Hearing Teodoro's Case",
    image: null,
    imageNote: "Simone and Teodoro talking one-on-one after a meeting, Teodoro gesturing animatedly while explaining his position.",
    story:
      "After the meeting, I ask Teodoro to explain his reasoning more fully, curious what's actually driving his strong conviction. He tells me about a similar situation at another school, where quiet lobbying had dragged on for months without any real result. Only after students organized a visible, well-covered protest did the administration finally take the issue seriously enough to act. He argues that given our limited time before the construction begins, we simply can't afford a slow, uncertain approach. I understand his frustration, though I also wonder whether that other school's specific situation genuinely applies to ours.",
    questions: [
      "What does Simone ask Teodoro to do?",
      "What example does Teodoro give from another school?",
      "What does Teodoro argue about their limited time?",
    ],
    trueFalse: [
      { text: "Simone asks Teodoro to explain his reasoning more fully.", answer: true },
      { text: "Teodoro tells her about a similar situation at another school.", answer: true },
      { text: "Quiet lobbying at that school worked quickly and easily.", answer: false },
      { text: "Teodoro argues they can't afford a slow, uncertain approach.", answer: true },
      { text: "Simone wonders whether that situation genuinely applies to theirs.", answer: true },
    ],
    buildSentence: [
      { target: "I ask Teodoro to explain more.", jumbled: ["I", "ask", "Teodoro", "to", "explain", "more."] },
      { target: "I understand his frustration here.", jumbled: ["I", "understand", "his", "frustration", "here."] },
      { target: "We simply can't afford a slow approach.", jumbled: ["We", "simply", "can't", "afford", "a", "slow", "approach."] },
      { target: "This had dragged on for months without result.", jumbled: ["This", "had", "dragged", "on", "for", "months", "without", "result."] },
      { target: "I wonder whether that situation genuinely applies to ours.", jumbled: ["I", "wonder", "whether", "that", "situation", "genuinely", "applies", "to", "ours."] },
    ],
    mySentencePrompt: "Write or say one sentence about listening carefully to understand why someone feels strongly about something.",
    mySentenceExample: "I listened carefully to understand why he felt so strongly.",
  },
  {
    number: 3,
    title: "Hearing Winnie's Case",
    image: null,
    imageNote: "Simone and Winnie sitting at a library table, Winnie showing spreadsheets and printed data on her laptop.",
    story:
      "I have a similar conversation with Winnie, who pulls up research she'd compiled about the administration's decision-making patterns historically. She explains that our principal tends to respond defensively to public criticism, often digging in rather than reconsidering a position. Given this pattern, Winnie argues, a protest might actually make the administration less likely to reverse course, not more. She suggests instead requesting a formal meeting, backed by clear data about the garden's environmental and educational value. I find her reasoning compelling too, though I recognize it requires patience Teodoro clearly feels we don't currently have.",
    questions: [
      "What research has Winnie compiled?",
      "What does Winnie say about how the principal responds to criticism?",
      "What does Winnie suggest instead of a protest?",
    ],
    trueFalse: [
      { text: "Winnie has compiled research about the administration's decision patterns.", answer: true },
      { text: "The principal tends to respond defensively to public criticism.", answer: true },
      { text: "Winnie believes a protest might make reversal less likely.", answer: true },
      { text: "Winnie suggests organizing a larger, louder protest instead.", answer: false },
      { text: "Simone finds Winnie's reasoning compelling too.", answer: true },
    ],
    buildSentence: [
      { target: "I have a similar conversation now.", jumbled: ["I", "have", "a", "similar", "conversation", "now."] },
      { target: "I find her reasoning compelling too.", jumbled: ["I", "find", "her", "reasoning", "compelling", "too."] },
      { target: "She pulls up research she'd compiled.", jumbled: ["She", "pulls", "up", "research", "she'd", "compiled."] },
      { target: "This requires patience Teodoro feels we don't have.", jumbled: ["This", "requires", "patience", "Teodoro", "feels", "we", "don't", "have."] },
      { target: "A protest might make the administration less likely to reverse course.", jumbled: ["A", "protest", "might", "make", "the", "administration", "less", "likely", "to", "reverse", "course."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone using data or research to support their point of view.",
    mySentenceExample: "She used research to support her point of view effectively.",
  },
  {
    number: 4,
    title: "Neither Fully Right",
    image: null,
    imageNote: "Simone sitting alone at home, notebook open, sketching out a diagram comparing both approaches.",
    story:
      "Sitting alone that evening, I try mapping out both perspectives honestly, rather than simply picking whichever argument felt more persuasive emotionally. Teodoro's urgency seems justified, given how little time remains before construction genuinely begins on the site. Winnie's caution also seems justified, given what she knows specifically about how our particular administration tends to react. I realize that whichever approach we choose exclusively, we risk alienating either the timeline or the relationship we'd need for lasting success. Perhaps, I think, the answer isn't choosing one approach over the other, but finding a way to combine them.",
    questions: [
      "What does Simone try to do sitting alone that evening?",
      "Why does Teodoro's urgency seem justified?",
      "What does Simone begin to think might be the answer?",
    ],
    trueFalse: [
      { text: "Simone tries mapping out both perspectives honestly.", answer: true },
      { text: "Teodoro's urgency seems justified given the limited time remaining.", answer: true },
      { text: "Winnie's caution seems justified given what she knows about the administration.", answer: true },
      { text: "Simone decides Teodoro is completely right and Winnie is wrong.", answer: false },
      { text: "Simone begins thinking about combining both approaches.", answer: true },
    ],
    buildSentence: [
      { target: "I try mapping out both perspectives.", jumbled: ["I", "try", "mapping", "out", "both", "perspectives."] },
      { target: "His urgency seems justified given the timeline.", jumbled: ["His", "urgency", "seems", "justified", "given", "the", "timeline."] },
      { target: "Her caution also seems justified here.", jumbled: ["Her", "caution", "also", "seems", "justified", "here."] },
      { target: "Perhaps the answer isn't choosing one approach exclusively.", jumbled: ["Perhaps", "the", "answer", "isn't", "choosing", "one", "approach", "exclusively."] },
      { target: "We risk alienating either the timeline or the relationship.", jumbled: ["We", "risk", "alienating", "either", "the", "timeline", "or", "the", "relationship."] },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two opposing viewpoints might both have some truth to them.",
    mySentenceExample: "I realized two opposing viewpoints might both have some truth to them.",
  },
  {
    number: 5,
    title: "Proposing a Combined Plan",
    image: null,
    imageNote: "Simone presenting a two-part plan on a whiteboard to the full club, both Teodoro and Winnie watching attentively.",
    story:
      "At the next meeting, I propose a two-phase plan, hoping it might genuinely satisfy both Teodoro's urgency and Winnie's caution. First, we'd request a formal meeting with data, giving the administration a fair, respectful chance to reconsider privately. However, if that meeting doesn't produce a real commitment within two weeks, we'd move forward with a public demonstration instead. This way, I explain, we're not choosing between patience and pressure, but sequencing them strategically together. Teodoro looks skeptical initially, though he admits the timeline gives him something concrete to hold onto.",
    questions: [
      "What does Simone propose at the next meeting?",
      "What happens first in the two-phase plan?",
      "What happens if the meeting doesn't produce a commitment?",
    ],
    trueFalse: [
      { text: "Simone proposes a two-phase plan.", answer: true },
      { text: "The first phase is a formal meeting with data.", answer: true },
      { text: "If the meeting fails, they'd move forward with a demonstration.", answer: true },
      { text: "Teodoro immediately rejects this plan entirely.", answer: false },
      { text: "Teodoro admits the timeline gives him something concrete.", answer: true },
    ],
    buildSentence: [
      { target: "I propose a two-phase plan now.", jumbled: ["I", "propose", "a", "two-phase", "plan", "now."] },
      { target: "Teodoro looks skeptical initially about this.", jumbled: ["Teodoro", "looks", "skeptical", "initially", "about", "this."] },
      { target: "This gives him something concrete to hold onto.", jumbled: ["This", "gives", "him", "something", "concrete", "to", "hold", "onto."] },
      { target: "We're not choosing between patience and pressure.", jumbled: ["We're", "not", "choosing", "between", "patience", "and", "pressure."] },
      { target: "We'd move forward with a public demonstration instead.", jumbled: ["We'd", "move", "forward", "with", "a", "public", "demonstration", "instead."] },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a plan that combines two different approaches.",
    mySentenceExample: "I proposed a plan that combined two different approaches.",
  },
  {
    number: 6,
    title: "Requesting the Meeting",
    image: null,
    imageNote: "Simone and Winnie walking into the principal's office, folder of printed data in hand, both looking composed.",
    story:
      "Winnie and I request a formal meeting with the principal, bringing carefully organized data about the garden's educational and environmental value. The principal listens politely, though her expression remains difficult to read throughout most of our presentation. She mentions budget pressures and safety requirements, explaining the parking decision wasn't made carelessly or without genuine consideration. Nevertheless, she agrees to review our proposal formally, promising a decision within the two-week window we'd requested. Leaving her office, I feel cautiously hopeful, though I remind myself this outcome remains genuinely uncertain either way.",
    questions: [
      "What do Simone and Winnie bring to the meeting?",
      "What does the principal mention about the decision?",
      "What does the principal agree to?",
    ],
    trueFalse: [
      { text: "Winnie and Simone bring carefully organized data to the meeting.", answer: true },
      { text: "The principal mentions budget pressures and safety requirements.", answer: true },
      { text: "The principal refuses to consider their proposal at all.", answer: false },
      { text: "The principal agrees to review the proposal within two weeks.", answer: true },
      { text: "Simone feels cautiously hopeful leaving the office.", answer: true },
    ],
    buildSentence: [
      { target: "We request a formal meeting now.", jumbled: ["We", "request", "a", "formal", "meeting", "now."] },
      { target: "I feel cautiously hopeful now.", jumbled: ["I", "feel", "cautiously", "hopeful", "now."] },
      { target: "She agrees to review our proposal formally.", jumbled: ["She", "agrees", "to", "review", "our", "proposal", "formally."] },
      { target: "This outcome remains genuinely uncertain either way.", jumbled: ["This", "outcome", "remains", "genuinely", "uncertain", "either", "way."] },
      { target: "The decision wasn't made carelessly or without consideration.", jumbled: ["The", "decision", "wasn't", "made", "carelessly", "or", "without", "consideration."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a well-prepared case to someone in a position of authority.",
    mySentenceExample: "I presented a well-prepared case to someone in authority.",
  },
  {
    number: 7,
    title: "Waiting and Preparing",
    image: null,
    imageNote: "Teodoro and Simone sitting together, quietly planning a backup demonstration just in case, sketching signs on paper.",
    story:
      "While waiting for the principal's decision, Teodoro and I begin quietly preparing for a potential demonstration, just in case it's actually needed. He seems genuinely more at ease now, having accepted that patience, at least temporarily, doesn't mean giving up entirely. We sketch signs and plan logistics together, an odd but oddly productive collaboration between two people who'd initially disagreed sharply. Winnie checks in occasionally too, mentioning she respects that we're preparing responsibly rather than assuming the meeting will definitely succeed. This waiting period, though tense, teaches me that patience and preparation aren't actually opposites after all.",
    questions: [
      "What do Teodoro and Simone begin preparing while waiting?",
      "How does Teodoro seem now, compared to before?",
      "What does Winnie mention when she checks in?",
    ],
    trueFalse: [
      { text: "Teodoro and Simone begin preparing for a potential demonstration.", answer: true },
      { text: "Teodoro seems genuinely more at ease now.", answer: true },
      { text: "Winnie refuses to acknowledge their preparation at all.", answer: false },
      { text: "Winnie says she respects them preparing responsibly.", answer: true },
      { text: "Simone learns patience and preparation aren't actually opposites.", answer: true },
    ],
    buildSentence: [
      { target: "We begin quietly preparing now.", jumbled: ["We", "begin", "quietly", "preparing", "now."] },
      { target: "He seems genuinely more at ease.", jumbled: ["He", "seems", "genuinely", "more", "at", "ease."] },
      { target: "Winnie checks in occasionally too.", jumbled: ["Winnie", "checks", "in", "occasionally", "too."] },
      { target: "Patience and preparation aren't actually opposites.", jumbled: ["Patience", "and", "preparation", "aren't", "actually", "opposites."] },
      { target: "This doesn't mean giving up entirely, at least temporarily.", jumbled: ["This", "doesn't", "mean", "giving", "up", "entirely,", "at", "least", "temporarily."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing for two possible outcomes while staying hopeful for the better one.",
    mySentenceExample: "I prepared for two possible outcomes while staying hopeful.",
  },
  {
    number: 8,
    title: "The Principal's Answer",
    image: null,
    imageNote: "Simone reading an official email on her phone in the school hallway, the club members gathered around waiting for the news.",
    story:
      "Exactly on the deadline, an email arrives from the principal's office, and I read it aloud to the gathered club members immediately. She's decided to preserve most of the garden, redesigning the parking plan to require fewer spaces than originally proposed. It's not a complete victory, she admits, but a genuine compromise that respects both the school's needs and the students' concerns. Teodoro cheers loudly, while Winnie simply smiles, quietly satisfied that the patient approach had actually worked. I feel enormous relief, grateful that combining both strategies had led to an outcome neither approach alone might have achieved.",
    questions: [
      "What arrives exactly on the deadline?",
      "What has the principal decided?",
      "How do Teodoro and Winnie each react?",
    ],
    trueFalse: [
      { text: "An email arrives exactly on the deadline.", answer: true },
      { text: "The principal has decided to preserve most of the garden.", answer: true },
      { text: "The principal calls this a complete, unconditional victory.", answer: false },
      { text: "Teodoro cheers loudly while Winnie smiles quietly.", answer: true },
      { text: "Simone feels this outcome came from combining both strategies.", answer: true },
    ],
    buildSentence: [
      { target: "An email arrives exactly on the deadline.", jumbled: ["An", "email", "arrives", "exactly", "on", "the", "deadline."] },
      { target: "Teodoro cheers loudly at this news.", jumbled: ["Teodoro", "cheers", "loudly", "at", "this", "news."] },
      { target: "I feel enormous relief now.", jumbled: ["I", "feel", "enormous", "relief", "now."] },
      { target: "This is a genuine compromise, she admits.", jumbled: ["This", "is", "a", "genuine", "compromise,", "she", "admits."] },
      { target: "This outcome came from combining both strategies together.", jumbled: ["This", "outcome", "came", "from", "combining", "both", "strategies", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving good news after a period of uncertainty.",
    mySentenceExample: "I received good news after a long period of uncertainty.",
  },
  {
    number: 9,
    title: "Reflecting Together",
    image: null,
    imageNote: "Simone, Teodoro, and Winnie sitting together in the garden, relaxed, talking as club members work nearby.",
    story:
      "A few weeks later, the three of us sit together in the newly preserved garden, reflecting on how the whole process unfolded. Teodoro admits that, had we gone straight to a protest, he's not entirely sure it would have worked as smoothly as it eventually did. Winnie, meanwhile, admits that without the credible threat of a protest, the administration may have simply delayed responding indefinitely. Both acknowledge that the other's approach, however different from their own instinct, contributed something genuinely necessary to the outcome. Listening to them, I feel proud that mediating didn't mean silencing either perspective, but combining their strengths.",
    questions: [
      "Where do the three of them sit together a few weeks later?",
      "What does Teodoro admit about going straight to a protest?",
      "What does Winnie admit about the credible threat of a protest?",
    ],
    trueFalse: [
      { text: "The three of them sit together in the preserved garden.", answer: true },
      { text: "Teodoro admits a protest alone might not have worked as smoothly.", answer: true },
      { text: "Winnie admits the credible threat of a protest may have mattered.", answer: true },
      { text: "Both refuse to acknowledge the other's approach helped at all.", answer: false },
      { text: "Simone feels mediating combined both perspectives' strengths.", answer: true },
    ],
    buildSentence: [
      { target: "We sit together in the garden.", jumbled: ["We", "sit", "together", "in", "the", "garden."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "Both acknowledge this contributed something necessary.", jumbled: ["Both", "acknowledge", "this", "contributed", "something", "necessary."] },
      { target: "The administration may have simply delayed responding indefinitely.", jumbled: ["The", "administration", "may", "have", "simply", "delayed", "responding", "indefinitely."] },
      { target: "Mediating didn't mean silencing either perspective, but combining strengths.", jumbled: ["Mediating", "didn't", "mean", "silencing", "either", "perspective,", "but", "combining", "strengths."] },
    ],
    mySentencePrompt: "Write or say one sentence about two people with different approaches realizing they both contributed something valuable.",
    mySentenceExample: "Two people with different approaches both contributed something valuable.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Simone sitting alone in the garden at sunset, writing reflectively in a notebook, the club's sign visible nearby.",
    story:
      "Looking back on the entire situation, I realize how differently things might have unfolded had I simply sided with one approach over the other. If I had chosen only urgency or only patience, we likely would have lost either valuable time or a valuable relationship with the administration. Instead, taking the time to genuinely understand both perspectives allowed us to build something stronger than either alone. I've learned that mediation, at its best, doesn't mean compromise in the sense of everyone losing something. In the end, this experience taught me that combining seemingly opposite strengths can produce outcomes neither side imagined possible alone.",
    questions: [
      "What does Simone realize looking back on the situation?",
      "What might have happened if she had chosen only one approach?",
      "What has Simone learned about mediation at its best?",
    ],
    trueFalse: [
      { text: "Simone realizes things might have unfolded differently with one approach.", answer: true },
      { text: "Choosing only one approach might have lost time or a relationship.", answer: true },
      { text: "Simone believes mediation always means everyone losing something.", answer: false },
      { text: "Simone learns combining strengths can produce unimagined outcomes.", answer: true },
      { text: "Understanding both perspectives allowed them to build something stronger.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this situation now.", jumbled: ["I", "look", "back", "on", "this", "situation", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Mediation doesn't always mean everyone losing something.", jumbled: ["Mediation", "doesn't", "always", "mean", "everyone", "losing", "something."] },
      { target: "Combining opposite strengths can produce unimagined outcomes.", jumbled: ["Combining", "opposite", "strengths", "can", "produce", "unimagined", "outcomes."] },
      { target: "Had I chosen only one approach, we likely would have lost something.", jumbled: ["Had", "I", "chosen", "only", "one", "approach,", "we", "likely", "would", "have", "lost", "something."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from combining two different strategies instead of choosing just one.",
    mySentenceExample: "I learned that combining two strategies can work better than one.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// B2 Adults digital storybook, Book 78: "Mediating a Business Partnership Dispute"
// Static content -- no Supabase. Sixth book in the B2 Adults batch
// (73-80). Third-party business mediation, the adult-professional
// parallel to Book 69's Teens "environmental club" strategy dispute
// and Book 74's coworker mediation, but distinct in stakes and
// context -- here the narrator is a mutual friend/consultant
// mediating between two business partners disagreeing on company
// direction. Adults-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Mediating a Business Partnership Dispute";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Yolanda sitting at a café table between two business partners, both looking tense, papers with financial projections spread between them.";

export const CHARACTERS = [
  { name: "Yolanda", role: "The narrator, a business consultant and mutual friend of both partners", look: "Composed, diplomatic, experienced in resolving workplace disagreements." },
  { name: "Hector", role: "Co-founder who wants to expand the business aggressively", look: "Ambitious, energetic, believes in seizing opportunities quickly." },
  { name: "Beatrix", role: "Co-founder who prefers cautious, steady growth", look: "Careful, financially disciplined, worried about overextending the business." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Business at a Crossroads",
    image: null,
    imageNote: "Yolanda sitting between Hector and Beatrix at a café table, both looking frustrated, papers spread between them.",
    story:
      "Hector and Beatrix, co-founders of a small design studio, ask me to mediate a disagreement that's been building for weeks now. Hector wants to expand rapidly, taking on a large new client that would require hiring several additional employees quickly. Beatrix worries this expansion could overextend their finances, given how unpredictable client payments have occasionally been recently. Neither seems willing to fully concede, and their disagreement has apparently begun affecting daily operations at the studio. As a trusted friend to both, I agree to help, though I recognize this will require genuinely understanding both perspectives fully first.",
    questions: [
      "What do Hector and Beatrix ask Yolanda to do?",
      "What does Hector want to do?",
      "What does Beatrix worry about?",
    ],
    trueFalse: [
      { text: "Hector and Beatrix are co-founders of a small design studio.", answer: true },
      { text: "Hector wants to expand rapidly with a large new client.", answer: true },
      { text: "Beatrix worries this expansion could overextend their finances.", answer: true },
      { text: "Their disagreement has had no effect on daily operations.", answer: false },
      { text: "Yolanda agrees to help mediate this disagreement.", answer: true },
    ],
    buildSentence: [
      { target: "They ask me to mediate this.", jumbled: ["They", "ask", "me", "to", "mediate", "this."] },
      { target: "Neither seems willing to fully concede.", jumbled: ["Neither", "seems", "willing", "to", "fully", "concede."] },
      { target: "I agree to help both of them.", jumbled: ["I", "agree", "to", "help", "both", "of", "them."] },
      { target: "This has been building for weeks now.", jumbled: ["This", "has", "been", "building", "for", "weeks", "now."] },
      { target: "This will require genuinely understanding both perspectives fully.", jumbled: ["This", "will", "require", "genuinely", "understanding", "both", "perspectives", "fully."] },
    ],
    mySentencePrompt: "Write or say one sentence about being asked to mediate a disagreement between two business partners.",
    mySentenceExample: "I was asked to mediate a disagreement between two business partners.",
  },
  {
    number: 2,
    title: "Hearing Hector's Vision",
    image: null,
    imageNote: "Yolanda and Hector sitting together, Hector gesturing enthusiastically as he explains his growth plans.",
    story:
      "I meet with Hector separately, curious to understand exactly why this particular opportunity feels so urgent and significant to him. He explains that this new client represents a rare chance to establish the studio as a serious competitor in a larger, more prestigious market. Moreover, he argues that hesitating too long risks losing the opportunity entirely, given how eager competitors are for similar contracts. He acknowledges the financial risk, though he believes their studio's strong reputation would attract additional clients once they'd successfully scaled. Listening carefully, I recognize his ambition is genuine, not simply reckless impatience as it might initially appear.",
    questions: [
      "Why does Yolanda meet with Hector separately?",
      "What does Hector explain this new client represents?",
      "What does Hector believe about their reputation once scaled?",
    ],
    trueFalse: [
      { text: "Yolanda meets with Hector separately to understand his urgency.", answer: true },
      { text: "Hector explains this represents a rare chance to compete in a bigger market.", answer: true },
      { text: "Hector argues hesitating too long risks losing the opportunity.", answer: true },
      { text: "Hector completely denies any financial risk exists.", answer: false },
      { text: "Yolanda recognizes his ambition is genuine, not reckless.", answer: true },
    ],
    buildSentence: [
      { target: "I meet with Hector separately now.", jumbled: ["I", "meet", "with", "Hector", "separately", "now."] },
      { target: "He acknowledges the financial risk here.", jumbled: ["He", "acknowledges", "the", "financial", "risk", "here."] },
      { target: "His ambition is genuine, not reckless impatience.", jumbled: ["His", "ambition", "is", "genuine,", "not", "reckless", "impatience."] },
      { target: "This represents a rare chance to establish themselves.", jumbled: ["This", "represents", "a", "rare", "chance", "to", "establish", "themselves."] },
      { target: "Hesitating too long risks losing the opportunity entirely.", jumbled: ["Hesitating", "too", "long", "risks", "losing", "the", "opportunity", "entirely."] },
    ],
    mySentencePrompt: "Write or say one sentence about listening to someone explain why an opportunity felt urgent to them.",
    mySentenceExample: "I listened to him explain why this opportunity felt so urgent.",
  },
  {
    number: 3,
    title: "Hearing Beatrix's Concerns",
    image: null,
    imageNote: "Yolanda and Beatrix sitting together, Beatrix showing financial spreadsheets on her laptop, looking worried.",
    story:
      "I have a similar conversation with Beatrix, who shares detailed financial projections illustrating exactly what expansion would require upfront. She explains that hiring several employees immediately means committing to significant fixed costs, regardless of whether the new client relationship remains stable long-term. Given their studio's history of occasionally delayed client payments, she worries this expansion could genuinely strain their cash flow considerably. She's not opposed to growth generally, she clarifies, but believes a more gradual approach would be considerably less risky overall. Hearing this, I understand her caution stems from genuine financial expertise, not simply excessive risk-aversion.",
    questions: [
      "What does Beatrix share with Yolanda?",
      "What does Beatrix explain hiring several employees means?",
      "What does Beatrix clarify about her position on growth?",
    ],
    trueFalse: [
      { text: "Beatrix shares detailed financial projections with Yolanda.", answer: true },
      { text: "Hiring several employees means committing to significant fixed costs.", answer: true },
      { text: "Beatrix is completely opposed to any growth at all.", answer: false },
      { text: "Beatrix believes a more gradual approach would be less risky.", answer: true },
      { text: "Yolanda understands her caution stems from genuine financial expertise.", answer: true },
    ],
    buildSentence: [
      { target: "I have a similar conversation now.", jumbled: ["I", "have", "a", "similar", "conversation", "now."] },
      { target: "She shares detailed financial projections.", jumbled: ["She", "shares", "detailed", "financial", "projections."] },
      { target: "She's not opposed to growth generally.", jumbled: ["She's", "not", "opposed", "to", "growth", "generally."] },
      { target: "This could genuinely strain their cash flow considerably.", jumbled: ["This", "could", "genuinely", "strain", "their", "cash", "flow", "considerably."] },
      { target: "Her caution stems from genuine financial expertise.", jumbled: ["Her", "caution", "stems", "from", "genuine", "financial", "expertise."] },
    ],
    mySentencePrompt: "Write or say one sentence about understanding why someone's caution came from real expertise, not fear.",
    mySentenceExample: "I understood why her caution came from real expertise, not fear.",
  },
  {
    number: 4,
    title: "Two Legitimate Concerns",
    image: null,
    imageNote: "Yolanda sitting alone reviewing notes from both conversations, sketching a comparison chart.",
    story:
      "Reflecting on both conversations, I realize this disagreement isn't really about whether to grow, but about pace and acceptable risk tolerance. Hector's opportunity is genuinely valuable, and waiting too long could indeed mean losing it to a more decisive competitor. Beatrix's concern is equally valid, given that overextending financially could jeopardize the entire studio's stability if payments were delayed unexpectedly. Neither perspective is wrong exactly, though pursuing either exclusively risks losing something the other genuinely values. I decide that helping them find a structured, phased approach might address both urgency and caution simultaneously.",
    questions: [
      "What does Yolanda realize this disagreement is really about?",
      "Why is Hector's opportunity genuinely valuable?",
      "What does Yolanda decide might address both concerns?",
    ],
    trueFalse: [
      { text: "Yolanda realizes this is about pace and risk tolerance, not whether to grow.", answer: true },
      { text: "Waiting too long could mean losing the opportunity to a competitor.", answer: true },
      { text: "Yolanda decides one perspective is clearly wrong.", answer: false },
      { text: "Yolanda decides a structured, phased approach might help.", answer: true },
      { text: "Overextending could jeopardize the studio's stability.", answer: true },
    ],
    buildSentence: [
      { target: "I reflect on both conversations now.", jumbled: ["I", "reflect", "on", "both", "conversations", "now."] },
      { target: "Neither perspective is wrong exactly.", jumbled: ["Neither", "perspective", "is", "wrong", "exactly."] },
      { target: "I decide this might address both concerns.", jumbled: ["I", "decide", "this", "might", "address", "both", "concerns."] },
      { target: "This isn't really about whether to grow.", jumbled: ["This", "isn't", "really", "about", "whether", "to", "grow."] },
      { target: "This could jeopardize the studio's stability if delayed.", jumbled: ["This", "could", "jeopardize", "the", "studio's", "stability", "if", "delayed."] },
    ],
    mySentencePrompt: "Write or say one sentence about realizing a disagreement was really about pace, not the underlying goal.",
    mySentenceExample: "I realized the disagreement was really about pace, not the goal.",
  },
  {
    number: 5,
    title: "Proposing a Phased Approach",
    image: null,
    imageNote: "Yolanda presenting a phased plan on a whiteboard to Hector and Beatrix together, both listening attentively.",
    story:
      "I bring Hector and Beatrix together, proposing a phased approach: accepting the client, but hiring gradually rather than all at once immediately. This way, I explain, they could meet the new client's initial needs without committing to the full financial risk simultaneously. Moreover, I suggest establishing a specific cash-reserve threshold that, if maintained, would trigger the next hiring phase automatically. Hector seems slightly disappointed by the slower timeline, though he acknowledges this genuinely addresses Beatrix's core financial concern. Beatrix, in turn, admits this approach feels considerably safer than either accepting immediately or declining the opportunity entirely.",
    questions: [
      "What phased approach does Yolanda propose?",
      "What does Yolanda suggest establishing?",
      "How does Hector feel about the slower timeline?",
    ],
    trueFalse: [
      { text: "Yolanda proposes accepting the client but hiring gradually.", answer: true },
      { text: "Yolanda suggests establishing a cash-reserve threshold.", answer: true },
      { text: "Hector feels completely thrilled about the slower timeline.", answer: false },
      { text: "Hector acknowledges this addresses Beatrix's core concern.", answer: true },
      { text: "Beatrix admits this approach feels considerably safer.", answer: true },
    ],
    buildSentence: [
      { target: "I bring them together now.", jumbled: ["I", "bring", "them", "together", "now."] },
      { target: "I propose a phased approach here.", jumbled: ["I", "propose", "a", "phased", "approach", "here."] },
      { target: "This feels considerably safer, she admits.", jumbled: ["This", "feels", "considerably", "safer,", "she", "admits."] },
      { target: "This genuinely addresses Beatrix's core financial concern.", jumbled: ["This", "genuinely", "addresses", "Beatrix's", "core", "financial", "concern."] },
      { target: "This would trigger the next hiring phase automatically.", jumbled: ["This", "would", "trigger", "the", "next", "hiring", "phase", "automatically."] },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a phased plan that balanced ambition with caution.",
    mySentenceExample: "I proposed a phased plan that balanced ambition with caution.",
  },
  {
    number: 6,
    title: "Drafting the Agreement",
    image: null,
    imageNote: "Yolanda, Hector, and Beatrix reviewing a written document together, all three pointing at specific clauses.",
    story:
      "I help draft a written agreement outlining the phased hiring plan, the cash-reserve threshold, and specific milestones for reassessment. Beatrix reviews the financial language carefully, suggesting one adjustment to make the reserve threshold slightly more conservative than originally proposed. Hector agrees to this adjustment, noting that a slightly more cautious threshold seems reasonable given how much this decision genuinely matters. Both partners sign the document, formalizing what had begun as an unstructured, emotional disagreement into a clear, shared plan. Watching them shake hands, I feel genuinely satisfied that mediating this hadn't required either of them abandoning their core values.",
    questions: [
      "What does Yolanda help draft?",
      "What adjustment does Beatrix suggest?",
      "What does Hector agree to?",
    ],
    trueFalse: [
      { text: "Yolanda helps draft a written agreement outlining the plan.", answer: true },
      { text: "Beatrix suggests making the reserve threshold more conservative.", answer: true },
      { text: "Hector refuses to agree to any adjustment at all.", answer: false },
      { text: "Both partners sign the document.", answer: true },
      { text: "Yolanda feels satisfied neither had to abandon their core values.", answer: true },
    ],
    buildSentence: [
      { target: "I help draft this agreement now.", jumbled: ["I", "help", "draft", "this", "agreement", "now."] },
      { target: "Both partners sign the document now.", jumbled: ["Both", "partners", "sign", "the", "document", "now."] },
      { target: "I feel genuinely satisfied about this.", jumbled: ["I", "feel", "genuinely", "satisfied", "about", "this."] },
      { target: "He agrees to this adjustment reasonably.", jumbled: ["He", "agrees", "to", "this", "adjustment", "reasonably."] },
      { target: "This formalized an unstructured, emotional disagreement into a clear plan.", jumbled: ["This", "formalized", "an", "unstructured,", "emotional", "disagreement", "into", "a", "clear", "plan."] },
    ],
    mySentencePrompt: "Write or say one sentence about formalizing a compromise into a clear, written agreement.",
    mySentenceExample: "We formalized our compromise into a clear, written agreement.",
  },
  {
    number: 7,
    title: "The First Phase Begins",
    image: null,
    imageNote: "The design studio's small office, one new employee being welcomed by Hector and Beatrix together, all smiling.",
    story:
      "A month later, the studio hires its first new employee under the phased plan, welcoming her with genuine enthusiasm from both partners. Hector seems energized, finally moving forward on the opportunity he'd been anticipating, though within the agreed-upon structure now. Beatrix, meanwhile, closely monitors the cash reserves, though she admits feeling considerably less anxious than she'd expected given the built-in safeguards. The new client relationship, so far, has proceeded smoothly, with payments arriving reliably according to the agreed schedule. Watching this unfold from a distance, I feel proud that the phased compromise had actually translated into genuine, functional progress.",
    questions: [
      "What happens a month later?",
      "How does Hector seem now?",
      "How does Beatrix feel, given the built-in safeguards?",
    ],
    trueFalse: [
      { text: "The studio hires its first new employee a month later.", answer: true },
      { text: "Hector seems energized, finally moving forward within the structure.", answer: true },
      { text: "Beatrix feels considerably less anxious than expected.", answer: true },
      { text: "The new client's payments have been unreliable and delayed.", answer: false },
      { text: "Yolanda feels proud this compromise translated into genuine progress.", answer: true },
    ],
    buildSentence: [
      { target: "The studio hires its first employee.", jumbled: ["The", "studio", "hires", "its", "first", "employee."] },
      { target: "Hector seems energized now.", jumbled: ["Hector", "seems", "energized", "now."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "This has proceeded smoothly so far.", jumbled: ["This", "has", "proceeded", "smoothly", "so", "far."] },
      { target: "This compromise had actually translated into genuine progress.", jumbled: ["This", "compromise", "had", "actually", "translated", "into", "genuine", "progress."] },
    ],
    mySentencePrompt: "Write or say one sentence about watching a compromise actually work out well in practice.",
    mySentenceExample: "I watched the compromise actually work out well in practice.",
  },
  {
    number: 8,
    title: "A Scheduled Check-In",
    image: null,
    imageNote: "Yolanda meeting with Hector and Beatrix again at the agreed milestone, reviewing progress on a laptop together.",
    story:
      "As agreed, I meet with Hector and Beatrix at the first scheduled milestone to review progress against the original plan. The cash reserves have remained above the agreed threshold, meeting the criteria required to trigger the next hiring phase. Hector feels validated that his original instinct about the opportunity's value had proven correct, given the client relationship's stability. Beatrix feels validated too, recognizing that the structured approach had prevented what could have otherwise felt like reckless, unmanaged risk. Both thank me again for facilitating a process that respected their different, yet equally legitimate, perspectives throughout.",
    questions: [
      "What does Yolanda do as agreed?",
      "What have the cash reserves remained?",
      "How do both Hector and Beatrix feel?",
    ],
    trueFalse: [
      { text: "Yolanda meets with them at the first scheduled milestone.", answer: true },
      { text: "The cash reserves have remained above the agreed threshold.", answer: true },
      { text: "Hector feels his original instinct about the opportunity was validated.", answer: true },
      { text: "Beatrix feels her structured approach concerns were dismissed.", answer: false },
      { text: "Both thank Yolanda for facilitating this process.", answer: true },
    ],
    buildSentence: [
      { target: "I meet with them again now.", jumbled: ["I", "meet", "with", "them", "again", "now."] },
      { target: "Both thank me again for this.", jumbled: ["Both", "thank", "me", "again", "for", "this."] },
      { target: "This has remained above the agreed threshold.", jumbled: ["This", "has", "remained", "above", "the", "agreed", "threshold."] },
      { target: "Hector feels validated given the relationship's stability.", jumbled: ["Hector", "feels", "validated", "given", "the", "relationship's", "stability."] },
      { target: "This respected their different, yet equally legitimate, perspectives.", jumbled: ["This", "respected", "their", "different,", "yet", "equally", "legitimate,", "perspectives."] },
    ],
    mySentencePrompt: "Write or say one sentence about checking progress against a plan and finding both sides felt validated.",
    mySentenceExample: "We checked our progress and both sides felt validated by the outcome.",
  },
  {
    number: 9,
    title: "A Stronger Partnership",
    image: null,
    imageNote: "Hector and Beatrix sitting together in their studio office, working comfortably side by side.",
    story:
      "Several weeks later, Hector mentions to me that this experience has genuinely changed how he and Beatrix approach major decisions together now. Rather than each simply advocating for their instinct, they've started deliberately considering both ambition and caution as complementary, not opposing, forces. Beatrix agrees, admitting she's become more comfortable with calculated risk, provided it's structured thoughtfully rather than impulsive. Both credit the mediation process itself, not just the specific outcome, with strengthening how they communicate during future disagreements. Hearing this, I recognize that successful mediation sometimes changes a relationship's dynamics well beyond the original dispute itself.",
    questions: [
      "What does Hector mention has genuinely changed?",
      "What has Beatrix become more comfortable with?",
      "What do both credit the mediation process with?",
    ],
    trueFalse: [
      { text: "Hector mentions this changed how they approach major decisions.", answer: true },
      { text: "Beatrix has become more comfortable with structured, calculated risk.", answer: true },
      { text: "Both credit only the outcome, not the mediation process itself.", answer: false },
      { text: "Both credit the mediation process with strengthening their communication.", answer: true },
      { text: "Yolanda recognizes mediation can change a relationship's dynamics.", answer: true },
    ],
    buildSentence: [
      { target: "Hector mentions this to me now.", jumbled: ["Hector", "mentions", "this", "to", "me", "now."] },
      { target: "Beatrix agrees with this now.", jumbled: ["Beatrix", "agrees", "with", "this", "now."] },
      { target: "This has genuinely changed how they decide together.", jumbled: ["This", "has", "genuinely", "changed", "how", "they", "decide", "together."] },
      { target: "Both credit the mediation process with strengthening this.", jumbled: ["Both", "credit", "the", "mediation", "process", "with", "strengthening", "this."] },
      { target: "Successful mediation sometimes changes a relationship's dynamics well beyond the dispute.", jumbled: ["Successful", "mediation", "sometimes", "changes", "a", "relationship's", "dynamics", "well", "beyond", "the", "dispute."] },
    ],
    mySentencePrompt: "Write or say one sentence about a mediation process that improved how two people communicate long-term.",
    mySentenceExample: "The mediation process improved how they communicated long-term.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Yolanda sitting alone at a café, reflecting quietly, a small smile as she looks out the window.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply sided with one partner's instinct. If I had pushed for either rapid expansion or complete caution, the studio likely would have lost something valuable either way. Instead, helping them find a structured middle path allowed both ambition and prudence to genuinely coexist productively. I've learned that mediating between business partners isn't about determining who's right, but about designing a framework that honors both perspectives. In the end, this experience taught me that the best solutions often emerge not from compromise alone, but from genuine structural creativity.",
    questions: [
      "What does Yolanda realize looking back on the process?",
      "What might have happened if she had sided with one instinct?",
      "What has Yolanda learned about mediating business partners?",
    ],
    trueFalse: [
      { text: "Yolanda realizes things might have gone differently with one-sided advice.", answer: true },
      { text: "Pushing for either extreme might have cost the studio something valuable.", answer: true },
      { text: "Yolanda believes mediation is about determining who's right.", answer: false },
      { text: "Yolanda learns mediating is about designing a framework honoring both sides.", answer: true },
      { text: "Yolanda learns the best solutions often come from structural creativity.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Mediating this isn't about determining who's right.", jumbled: ["Mediating", "this", "isn't", "about", "determining", "who's", "right."] },
      { target: "The best solutions often emerge from genuine structural creativity.", jumbled: ["The", "best", "solutions", "often", "emerge", "from", "genuine", "structural", "creativity."] },
      { target: "Had I sided with one instinct, they would have lost something valuable.", jumbled: ["Had", "I", "sided", "with", "one", "instinct,", "they", "would", "have", "lost", "something", "valuable."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a business disagreement creatively.",
    mySentenceExample: "I learned that creative solutions honor both sides of a disagreement.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// B2 Adults digital storybook, Book 77: "Negotiating an Insurance Claim"
// Static content -- no Supabase. Fifth book in the B2 Adults batch
// (73-80). High-stakes negotiation over a contested claim amount,
// distinct from Book 62's "A Billing Dispute" (B1, a straightforward
// phone-call correction of an obvious clerical error) -- this one
// involves genuine back-and-forth negotiation over a disputed
// settlement figure. Adults-track shape: 3 questions, 5 True/False,
// 5 Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Negotiating an Insurance Claim";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Desmond standing in his driveway looking at storm damage on his roof, phone in hand, an insurance claim letter tucked under his arm.";

export const CHARACTERS = [
  { name: "Desmond", role: "The narrator, a homeowner filing a storm-damage claim", look: "Practical, methodical, keeps detailed records of everything." },
  { name: "Ms. Farrow", role: "An insurance claims adjuster", look: "Professional, follows company guidelines closely, open to reasonable evidence." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Assessing the Damage",
    image: null,
    imageNote: "Desmond standing in his backyard, looking up at visible roof damage after a storm, phone camera in hand.",
    story:
      "After last week's severe storm, I discover significant damage to my roof, along with a fallen tree branch that had cracked a fence panel. I photograph everything methodically, documenting the damage from multiple angles before contacting my insurance company to file a claim. Ms. Farrow, the assigned adjuster, visits within a few days, inspecting the damage and taking her own measurements and photographs. A week later, I receive her assessment, and the proposed settlement amount seems considerably lower than what local contractors had quoted me. Given this discrepancy, I realize I'll need to understand exactly why these numbers differ so significantly.",
    questions: [
      "What does Desmond discover after last week's storm?",
      "What does Desmond do before contacting his insurance company?",
      "What does Desmond notice about the proposed settlement amount?",
    ],
    trueFalse: [
      { text: "Desmond discovers significant roof damage after the storm.", answer: true },
      { text: "Desmond photographs the damage methodically before filing a claim.", answer: true },
      { text: "Ms. Farrow never actually visits to inspect the damage.", answer: false },
      { text: "The proposed settlement seems considerably lower than contractor quotes.", answer: true },
      { text: "Desmond realizes he needs to understand this discrepancy.", answer: true },
    ],
    buildSentence: [
      { target: "I discover significant damage now.", jumbled: ["I", "discover", "significant", "damage", "now."] },
      { target: "I photograph everything methodically now.", jumbled: ["I", "photograph", "everything", "methodically", "now."] },
      { target: "I receive her assessment a week later.", jumbled: ["I", "receive", "her", "assessment", "a", "week", "later."] },
      { target: "This seems considerably lower than what contractors quoted.", jumbled: ["This", "seems", "considerably", "lower", "than", "what", "contractors", "quoted."] },
      { target: "I'll need to understand why these numbers differ.", jumbled: ["I'll", "need", "to", "understand", "why", "these", "numbers", "differ."] },
    ],
    mySentencePrompt: "Write or say one sentence about documenting damage carefully before filing an insurance claim.",
    mySentenceExample: "I documented the damage carefully before filing an insurance claim.",
  },
  {
    number: 2,
    title: "Gathering Independent Estimates",
    image: null,
    imageNote: "Desmond standing with a local contractor, both looking up at the roof, contractor writing notes on a clipboard.",
    story:
      "Before disputing the settlement, I decide to gather two additional independent estimates from local, licensed contractors for comparison. Both estimates come in significantly higher than the insurance company's proposed amount, suggesting the initial assessment may have underestimated the actual repair costs. I also research typical material and labor costs in my area, wanting to understand whether recent price increases had been properly accounted for. This research, moreover, reveals that lumber and roofing material costs had risen considerably since the adjuster's original assessment guidelines were last updated. Armed with this concrete evidence, I feel confident that my concern is genuinely justified, not simply personal frustration.",
    questions: [
      "What does Desmond decide to gather before disputing the settlement?",
      "How do the independent estimates compare to the insurance amount?",
      "What does Desmond's research reveal about material costs?",
    ],
    trueFalse: [
      { text: "Desmond gathers two additional independent contractor estimates.", answer: true },
      { text: "Both estimates come in significantly higher than the insurance amount.", answer: true },
      { text: "Desmond's research reveals material costs have risen considerably.", answer: true },
      { text: "Desmond decides his concern is simply personal frustration.", answer: false },
      { text: "Desmond feels confident his concern is genuinely justified.", answer: true },
    ],
    buildSentence: [
      { target: "I decide to gather estimates now.", jumbled: ["I", "decide", "to", "gather", "estimates", "now."] },
      { target: "I research typical costs in my area.", jumbled: ["I", "research", "typical", "costs", "in", "my", "area."] },
      { target: "I feel confident about this now.", jumbled: ["I", "feel", "confident", "about", "this", "now."] },
      { target: "Both estimates come in significantly higher.", jumbled: ["Both", "estimates", "come", "in", "significantly", "higher."] },
      { target: "This concern is genuinely justified, not simply personal frustration.", jumbled: ["This", "concern", "is", "genuinely", "justified,", "not", "simply", "personal", "frustration."] },
    ],
    mySentencePrompt: "Write or say one sentence about gathering independent evidence before disputing a decision.",
    mySentenceExample: "I gathered independent evidence before disputing the decision.",
  },
  {
    number: 3,
    title: "Requesting a Review",
    image: null,
    imageNote: "Desmond on the phone with Ms. Farrow, notes and estimate documents spread on the table in front of him.",
    story:
      "I call Ms. Farrow, explaining respectfully that I'd gathered independent estimates significantly higher than the company's proposed settlement amount. She listens carefully, asking me to send documentation so she can formally review the discrepancy on her end. I mention specifically that material costs seem to have increased since the assessment guidelines were last updated, referencing my own research. She acknowledges this is possible, explaining that guideline updates sometimes lag behind actual, current market conditions temporarily. Given her willingness to genuinely reconsider, I feel this conversation is heading toward a productive, collaborative outcome rather than a confrontation.",
    questions: [
      "What does Desmond explain to Ms. Farrow?",
      "What does Ms. Farrow ask Desmond to send?",
      "What does Ms. Farrow acknowledge is possible?",
    ],
    trueFalse: [
      { text: "Desmond explains he'd gathered higher independent estimates.", answer: true },
      { text: "Ms. Farrow asks Desmond to send documentation for review.", answer: true },
      { text: "Ms. Farrow refuses to acknowledge any possibility of error.", answer: false },
      { text: "Ms. Farrow acknowledges guideline updates sometimes lag behind the market.", answer: true },
      { text: "Desmond feels this is heading toward a productive outcome.", answer: true },
    ],
    buildSentence: [
      { target: "I call Ms. Farrow now.", jumbled: ["I", "call", "Ms.", "Farrow", "now."] },
      { target: "She listens carefully to this.", jumbled: ["She", "listens", "carefully", "to", "this."] },
      { target: "She acknowledges this is possible.", jumbled: ["She", "acknowledges", "this", "is", "possible."] },
      { target: "This is heading toward a productive outcome.", jumbled: ["This", "is", "heading", "toward", "a", "productive", "outcome."] },
      { target: "Guideline updates sometimes lag behind current market conditions.", jumbled: ["Guideline", "updates", "sometimes", "lag", "behind", "current", "market", "conditions."] },
    ],
    mySentencePrompt: "Write or say one sentence about calling to request a review of a decision you believed was incorrect.",
    mySentenceExample: "I called to request a review of a decision I believed was incorrect.",
  },
  {
    number: 4,
    title: "Submitting Documentation",
    image: null,
    imageNote: "Desmond at his laptop, organizing scanned documents and photos into a folder to send to the insurance company.",
    story:
      "I compile everything into a clear, organized document: photographs, both independent estimates, and a brief summary explaining the discrepancy in market pricing. I keep the tone factual and professional throughout, avoiding language that might sound accusatory or overly emotional in nature. Moreover, I highlight specific line items where the difference seems most significant, making it easier for Ms. Farrow to review efficiently. Sending this documentation, I feel I've presented my case as thoroughly and persuasively as reasonably possible. Now, I simply need to wait for the formal review process to actually run its course.",
    questions: [
      "What does Desmond compile into a document?",
      "What tone does Desmond keep throughout?",
      "What does Desmond highlight in the documentation?",
    ],
    trueFalse: [
      { text: "Desmond compiles photographs, estimates, and a pricing summary.", answer: true },
      { text: "Desmond keeps the tone factual and professional throughout.", answer: true },
      { text: "Desmond uses accusatory, emotional language deliberately.", answer: false },
      { text: "Desmond highlights specific line items with the biggest differences.", answer: true },
      { text: "Desmond feels he's presented his case thoroughly and persuasively.", answer: true },
    ],
    buildSentence: [
      { target: "I compile everything into a document.", jumbled: ["I", "compile", "everything", "into", "a", "document."] },
      { target: "I keep the tone factual throughout.", jumbled: ["I", "keep", "the", "tone", "factual", "throughout."] },
      { target: "I simply need to wait now.", jumbled: ["I", "simply", "need", "to", "wait", "now."] },
      { target: "I highlight specific line items here.", jumbled: ["I", "highlight", "specific", "line", "items", "here."] },
      { target: "I've presented my case as persuasively as possible.", jumbled: ["I've", "presented", "my", "case", "as", "persuasively", "as", "possible."] },
    ],
    mySentencePrompt: "Write or say one sentence about compiling clear, factual documentation to support a claim.",
    mySentenceExample: "I compiled clear, factual documentation to support my claim.",
  },
  {
    number: 5,
    title: "A Partial Response",
    image: null,
    imageNote: "Desmond reading an email response on his laptop, expression a mix of relief and mild disappointment.",
    story:
      "A week later, Ms. Farrow responds, explaining the company has agreed to revise the settlement, though not fully to the amount I'd requested. She mentions that while material costs had indeed increased, some of my estimates included additional work beyond what the original damage strictly required. This distinction, she explains, means the company can only adjust the amount partially rather than matching my highest estimate exactly. I consider this carefully, recognizing that her reasoning, while disappointing, seems genuinely grounded in reasonable, defensible criteria rather than arbitrary refusal. Given this, I decide the revised offer, though not perfect, represents meaningful progress worth acknowledging.",
    questions: [
      "What does Ms. Farrow explain the company has agreed to?",
      "What does Ms. Farrow say about some of Desmond's estimates?",
      "What does Desmond decide about the revised offer?",
    ],
    trueFalse: [
      { text: "Ms. Farrow explains the company agreed to revise the settlement.", answer: true },
      { text: "Some estimates included additional work beyond the original damage.", answer: true },
      { text: "The company matches Desmond's highest estimate exactly.", answer: false },
      { text: "Desmond recognizes her reasoning seems genuinely grounded and reasonable.", answer: true },
      { text: "Desmond decides this revised offer represents meaningful progress.", answer: true },
    ],
    buildSentence: [
      { target: "She responds a week later.", jumbled: ["She", "responds", "a", "week", "later."] },
      { target: "I consider this carefully now.", jumbled: ["I", "consider", "this", "carefully", "now."] },
      { target: "This represents meaningful progress worth acknowledging.", jumbled: ["This", "represents", "meaningful", "progress", "worth", "acknowledging."] },
      { target: "This seems genuinely grounded in reasonable criteria.", jumbled: ["This", "seems", "genuinely", "grounded", "in", "reasonable", "criteria."] },
      { target: "The company can only adjust the amount partially.", jumbled: ["The", "company", "can", "only", "adjust", "the", "amount", "partially."] },
    ],
    mySentencePrompt: "Write or say one sentence about accepting a partial win as meaningful progress in a negotiation.",
    mySentenceExample: "I accepted a partial win as meaningful progress in the negotiation.",
  },
  {
    number: 6,
    title: "Clarifying the Scope",
    image: null,
    imageNote: "Desmond and Ms. Farrow on a video call, both reviewing an itemized document, discussing specific line items.",
    story:
      "Rather than simply accepting the partial revision, I schedule a call to clarify exactly which items were excluded and why specifically. Ms. Farrow walks me through the itemized breakdown, explaining that one contractor's estimate included optional upgrades beyond basic, necessary repair work. I ask whether removing those specific upgrades from my estimate might allow the remaining costs to be fully covered instead. She reviews this possibility, agreeing that if I resubmit an estimate focused strictly on repair, not upgrade, this could work. This clarification, given how specific it becomes, helps me understand exactly what adjustments would actually strengthen my case.",
    questions: [
      "What does Desmond schedule instead of simply accepting the revision?",
      "What does Ms. Farrow explain about one contractor's estimate?",
      "What does Desmond ask about removing the upgrades?",
    ],
    trueFalse: [
      { text: "Desmond schedules a call to clarify the excluded items.", answer: true },
      { text: "One estimate included optional upgrades beyond necessary repair work.", answer: true },
      { text: "Desmond asks whether removing upgrades might allow full coverage.", answer: true },
      { text: "Ms. Farrow refuses to consider this possibility at all.", answer: false },
      { text: "This clarification helps Desmond understand what would strengthen his case.", answer: true },
    ],
    buildSentence: [
      { target: "I schedule a call now.", jumbled: ["I", "schedule", "a", "call", "now."] },
      { target: "She walks me through this breakdown.", jumbled: ["She", "walks", "me", "through", "this", "breakdown."] },
      { target: "I ask about removing the upgrades.", jumbled: ["I", "ask", "about", "removing", "the", "upgrades."] },
      { target: "This could work, she agrees.", jumbled: ["This", "could", "work,", "she", "agrees."] },
      { target: "This helps me understand what would strengthen my case.", jumbled: ["This", "helps", "me", "understand", "what", "would", "strengthen", "my", "case."] },
    ],
    mySentencePrompt: "Write or say one sentence about clarifying specific details before resubmitting a revised request.",
    mySentenceExample: "I clarified specific details before resubmitting a revised request.",
  },
  {
    number: 7,
    title: "Resubmitting the Estimate",
    image: null,
    imageNote: "Desmond calling the contractor to request a revised, repair-only estimate, taking notes during the call.",
    story:
      "I contact the contractor, requesting a revised estimate focused strictly on necessary repairs, excluding the optional upgrades entirely. He provides a new estimate promptly, which, once resubmitted, comes noticeably closer to the insurance company's revised offer amount. I send this updated estimate to Ms. Farrow, along with a brief note explaining the adjustment we'd discussed during our call. She confirms receipt, mentioning she'll process this final review within the next few business days. Given how collaborative this process has felt lately, I feel genuinely optimistic that we're approaching a fair, final resolution.",
    questions: [
      "What does Desmond request from the contractor?",
      "How does the new estimate compare to the insurance offer?",
      "What does Ms. Farrow say she'll do?",
    ],
    trueFalse: [
      { text: "Desmond requests a revised, repair-only estimate.", answer: true },
      { text: "The new estimate comes noticeably closer to the insurance offer.", answer: true },
      { text: "Ms. Farrow refuses to acknowledge receiving this update.", answer: false },
      { text: "Ms. Farrow says she'll process this within a few business days.", answer: true },
      { text: "Desmond feels genuinely optimistic about a fair resolution.", answer: true },
    ],
    buildSentence: [
      { target: "I contact the contractor now.", jumbled: ["I", "contact", "the", "contractor", "now."] },
      { target: "He provides a new estimate promptly.", jumbled: ["He", "provides", "a", "new", "estimate", "promptly."] },
      { target: "I feel genuinely optimistic now.", jumbled: ["I", "feel", "genuinely", "optimistic", "now."] },
      { target: "She confirms receipt of this now.", jumbled: ["She", "confirms", "receipt", "of", "this", "now."] },
      { target: "This process has felt collaborative lately.", jumbled: ["This", "process", "has", "felt", "collaborative", "lately."] },
    ],
    mySentencePrompt: "Write or say one sentence about resubmitting a request after making a reasonable adjustment.",
    mySentenceExample: "I resubmitted my request after making a reasonable adjustment.",
  },
  {
    number: 8,
    title: "The Final Approval",
    image: null,
    imageNote: "Desmond reading an approval email on his phone, sitting on his porch, a relieved smile on his face.",
    story:
      "A few days later, I receive final approval, with the settlement amount now closely matching the revised, repair-focused estimate. Ms. Farrow's email explains the adjustment clearly, noting that both parties had ultimately reached a figure grounded in accurate, current market conditions. I reply, thanking her for handling this collaboratively rather than simply enforcing the original, outdated assessment without reconsideration. She responds briefly, appreciating that I'd approached the dispute with clear documentation rather than frustration or vague complaints. Reading this final confirmation, I feel genuine relief that patient, evidence-based negotiation had ultimately produced a fair outcome.",
    questions: [
      "What does Desmond receive a few days later?",
      "What does Ms. Farrow's email explain?",
      "What does Ms. Farrow appreciate about how Desmond approached this?",
    ],
    trueFalse: [
      { text: "Desmond receives final approval a few days later.", answer: true },
      { text: "The settlement now closely matches the revised estimate.", answer: true },
      { text: "Ms. Farrow appreciates that Desmond approached this with documentation.", answer: true },
      { text: "The company simply enforced the original outdated assessment.", answer: false },
      { text: "Desmond feels genuine relief at this outcome.", answer: true },
    ],
    buildSentence: [
      { target: "I receive final approval now.", jumbled: ["I", "receive", "final", "approval", "now."] },
      { target: "I reply, thanking her now.", jumbled: ["I", "reply,", "thanking", "her", "now."] },
      { target: "I feel genuine relief about this.", jumbled: ["I", "feel", "genuine", "relief", "about", "this."] },
      { target: "Both parties reached a figure grounded in accurate conditions.", jumbled: ["Both", "parties", "reached", "a", "figure", "grounded", "in", "accurate", "conditions."] },
      { target: "Patient, evidence-based negotiation ultimately produced a fair outcome.", jumbled: ["Patient,", "evidence-based", "negotiation", "ultimately", "produced", "a", "fair", "outcome."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a fair outcome was finally reached.",
    mySentenceExample: "I felt relieved when a fair outcome was finally reached.",
  },
  {
    number: 9,
    title: "Sharing the Experience",
    image: null,
    imageNote: "Desmond talking with a neighbor over the fence, gesturing toward his repaired roof, both chatting casually.",
    story:
      "My neighbor, whose house sustained similar storm damage, mentions she'd simply accepted her insurance company's first offer without question. I share what I'd learned: gathering independent estimates, requesting clarification, and negotiating based on evidence rather than frustration alone. She admits she hadn't realized insurance settlements could actually be negotiated, having assumed the initial offer was simply final. I explain that, in my experience, most adjusters are open to reasonable, well-documented requests, even if they can't guarantee full agreement. She thanks me for the insight, saying she'll reconsider her own settlement before her repairs actually begin.",
    questions: [
      "What does Desmond's neighbor mention about her own claim?",
      "What does Desmond share with his neighbor?",
      "What had the neighbor assumed about insurance settlements?",
    ],
    trueFalse: [
      { text: "The neighbor mentions she accepted her first offer without question.", answer: true },
      { text: "Desmond shares what he'd learned about negotiating with evidence.", answer: true },
      { text: "The neighbor had assumed the initial offer was simply final.", answer: true },
      { text: "Desmond says most adjusters refuse reasonable, documented requests.", answer: false },
      { text: "The neighbor says she'll reconsider her own settlement.", answer: true },
    ],
    buildSentence: [
      { target: "My neighbor mentions this to me.", jumbled: ["My", "neighbor", "mentions", "this", "to", "me."] },
      { target: "I share what I'd learned with her.", jumbled: ["I", "share", "what", "I'd", "learned", "with", "her."] },
      { target: "She thanks me for this insight.", jumbled: ["She", "thanks", "me", "for", "this", "insight."] },
      { target: "She hadn't realized settlements could actually be negotiated.", jumbled: ["She", "hadn't", "realized", "settlements", "could", "actually", "be", "negotiated."] },
      { target: "Most adjusters are open to reasonable, well-documented requests.", jumbled: ["Most", "adjusters", "are", "open", "to", "reasonable,", "well-documented", "requests."] },
    ],
    mySentencePrompt: "Write or say one sentence about sharing something you learned to help someone else negotiate confidently.",
    mySentenceExample: "I shared what I learned to help someone else negotiate confidently.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Desmond standing in his driveway, looking up at the fully repaired roof, satisfied expression.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original settlement without question. If I had assumed the first offer was final, I likely would have paid a significant amount out of pocket for necessary repairs. Instead, gathering evidence, requesting clarification, and negotiating patiently allowed me to reach an outcome grounded in genuine accuracy. I've learned that insurance settlements, like many formal processes, often have more room for negotiation than they initially appear to allow. In the end, this experience taught me that persistence, paired with solid evidence, tends to produce far better outcomes than passive acceptance.",
    questions: [
      "What does Desmond realize looking back on the process?",
      "What might have happened if he had accepted the original settlement?",
      "What has Desmond learned about insurance settlements?",
    ],
    trueFalse: [
      { text: "Desmond realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the original settlement might have meant paying out of pocket.", answer: true },
      { text: "Desmond believes insurance settlements have no room for negotiation.", answer: false },
      { text: "Desmond learns settlements often have more room for negotiation than expected.", answer: true },
      { text: "Desmond learns persistence paired with evidence produces better outcomes.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "This has more room for negotiation than expected.", jumbled: ["This", "has", "more", "room", "for", "negotiation", "than", "expected."] },
      { target: "Persistence paired with solid evidence produces better outcomes.", jumbled: ["Persistence", "paired", "with", "solid", "evidence", "produces", "better", "outcomes."] },
      { target: "Had I accepted the original settlement, I would have paid out of pocket.", jumbled: ["Had", "I", "accepted", "the", "original", "settlement,", "I", "would", "have", "paid", "out", "of", "pocket."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating an insurance claim patiently.",
    mySentenceExample: "I learned that patient, evidence-based negotiation produces fairer outcomes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

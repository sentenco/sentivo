// B2 Adults digital storybook, Book 75: "Negotiating a Vendor Contract"
// Static content -- no Supabase. Third book in the B2 Adults batch
// (73-80). Business/external-negotiation scenario, distinct from
// Book 73's internal salary negotiation -- this centers on a small
// business owner negotiating pricing and terms with an external
// supplier, matching the B2 Adults spec's "instrumental relevance"
// and genre-aware writing (formal proposal/email) focus. Adults-
// track shape: 3 questions, 5 True/False, 5 Build-a-Sentence per
// chapter. Images not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Negotiating a Vendor Contract";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Tomas sitting at a small bakery's back office desk, a supplier contract spread out in front of him, calculator and notes nearby.";

export const CHARACTERS = [
  { name: "Tomas", role: "The narrator, owner of a small bakery", look: "Apron over work clothes, practical, careful with the business's finances." },
  { name: "Ms. Idowu", role: "A sales representative for a flour and grain supplier", look: "Professional, personable, genuinely wants a lasting business relationship." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Contract Renewal",
    image: null,
    imageNote: "Tomas reading a renewal letter from his supplier at his bakery's back office desk, a slightly concerned expression.",
    story:
      "My current flour supplier sends their annual contract renewal, and I notice the proposed prices have increased more than I'd expected. Given how tight my bakery's margins already are, absorbing this increase without adjustment would genuinely hurt my business's profitability. I consider simply switching suppliers, though doing so would mean rebuilding a relationship I'd carefully developed over three years. Instead, I decide the more sensible approach is requesting a conversation about the proposed terms before committing to anything. Given how much this decision affects my business, I know I'll need to prepare a genuinely persuasive case beforehand.",
    questions: [
      "What does Tomas's current flour supplier send?",
      "What does Tomas notice about the proposed prices?",
      "What does Tomas decide is the more sensible approach?",
    ],
    trueFalse: [
      { text: "Tomas's supplier sends their annual contract renewal.", answer: true },
      { text: "The proposed prices have increased more than expected.", answer: true },
      { text: "Tomas immediately switches suppliers without discussion.", answer: false },
      { text: "Tomas decides to request a conversation about the terms.", answer: true },
      { text: "Tomas knows he needs to prepare a persuasive case.", answer: true },
    ],
    buildSentence: [
      { target: "My supplier sends the renewal now.", jumbled: ["My", "supplier", "sends", "the", "renewal", "now."] },
      { target: "I notice the prices have increased.", jumbled: ["I", "notice", "the", "prices", "have", "increased."] },
      { target: "I decide this is the sensible approach.", jumbled: ["I", "decide", "this", "is", "the", "sensible", "approach."] },
      { target: "This would genuinely hurt my business's profitability.", jumbled: ["This", "would", "genuinely", "hurt", "my", "business's", "profitability."] },
      { target: "I've carefully developed this relationship over three years.", jumbled: ["I've", "carefully", "developed", "this", "relationship", "over", "three", "years."] },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to negotiate rather than simply accepting a price increase.",
    mySentenceExample: "I decided to negotiate rather than simply accepting a price increase.",
  },
  {
    number: 2,
    title: "Researching Alternatives",
    image: null,
    imageNote: "Tomas comparing printed price sheets from different suppliers spread across his desk, calculator nearby.",
    story:
      "Before the conversation, I research pricing from two competing suppliers, ensuring I'd understand the actual market rate genuinely. I discover that while my current supplier's proposed price is indeed higher, it's not dramatically out of line with the broader market. This research, moreover, gives me leverage: I can reference specific competitor rates without necessarily needing to switch suppliers immediately. I also calculate exactly how much a smaller, more reasonable increase would affect my monthly costs specifically. Armed with this data, I feel considerably more confident approaching Ms. Idowu than I would have otherwise.",
    questions: [
      "What does Tomas research before the conversation?",
      "What does Tomas discover about the proposed price?",
      "What does this research give Tomas?",
    ],
    trueFalse: [
      { text: "Tomas researches pricing from two competing suppliers.", answer: true },
      { text: "The proposed price is dramatically out of line with the market.", answer: false },
      { text: "This research gives Tomas leverage for the conversation.", answer: true },
      { text: "Tomas calculates how a smaller increase would affect his costs.", answer: true },
      { text: "Tomas feels more confident approaching Ms. Idowu.", answer: true },
    ],
    buildSentence: [
      { target: "I research pricing from competitors now.", jumbled: ["I", "research", "pricing", "from", "competitors", "now."] },
      { target: "This gives me leverage now.", jumbled: ["This", "gives", "me", "leverage", "now."] },
      { target: "I feel considerably more confident now.", jumbled: ["I", "feel", "considerably", "more", "confident", "now."] },
      { target: "This isn't dramatically out of line with the market.", jumbled: ["This", "isn't", "dramatically", "out", "of", "line", "with", "the", "market."] },
      { target: "I calculate exactly how this would affect my monthly costs.", jumbled: ["I", "calculate", "exactly", "how", "this", "would", "affect", "my", "monthly", "costs."] },
    ],
    mySentencePrompt: "Write or say one sentence about researching the market before entering a business negotiation.",
    mySentenceExample: "I researched the market before entering the business negotiation.",
  },
  {
    number: 3,
    title: "Requesting the Meeting",
    image: null,
    imageNote: "Tomas sitting across from Ms. Idowu at a small café table, both with coffee cups, papers spread between them.",
    story:
      "I request a meeting with Ms. Idowu, explaining upfront that I'd like to discuss the proposed contract terms before signing anything. She agrees readily, mentioning she genuinely values our long working relationship and prefers open discussion over losing a client abruptly. I open by acknowledging the quality of her company's product, then explain that the proposed increase exceeds what my current margins can comfortably absorb. She listens attentively, asking clarifying questions rather than immediately defending the proposed pricing outright. This respectful, business-like exchange, given how it begins, leaves me cautiously optimistic about finding common ground.",
    questions: [
      "What does Tomas request?",
      "Why does Ms. Idowu agree readily?",
      "How does Ms. Idowu respond to Tomas's explanation?",
    ],
    trueFalse: [
      { text: "Tomas requests a meeting to discuss the proposed terms.", answer: true },
      { text: "Ms. Idowu values their long working relationship.", answer: true },
      { text: "Tomas opens by criticizing her company's product quality.", answer: false },
      { text: "Ms. Idowu listens attentively and asks clarifying questions.", answer: true },
      { text: "Tomas feels cautiously optimistic about finding common ground.", answer: true },
    ],
    buildSentence: [
      { target: "I request a meeting with her.", jumbled: ["I", "request", "a", "meeting", "with", "her."] },
      { target: "She agrees readily to this.", jumbled: ["She", "agrees", "readily", "to", "this."] },
      { target: "She listens attentively to this.", jumbled: ["She", "listens", "attentively", "to", "this."] },
      { target: "I feel cautiously optimistic about this.", jumbled: ["I", "feel", "cautiously", "optimistic", "about", "this."] },
      { target: "This exceeds what my current margins can comfortably absorb.", jumbled: ["This", "exceeds", "what", "my", "current", "margins", "can", "comfortably", "absorb."] },
    ],
    mySentencePrompt: "Write or say one sentence about opening a business negotiation respectfully and professionally.",
    mySentenceExample: "I opened the business negotiation respectfully and professionally.",
  },
  {
    number: 4,
    title: "Presenting My Case",
    image: null,
    imageNote: "Tomas showing a printed cost breakdown to Ms. Idowu, both leaning over the papers together.",
    story:
      "I present my cost breakdown, explaining specifically how the proposed increase would affect my bakery's monthly operating expenses. I mention, respectfully, that I'd researched competitor pricing and found it somewhat more favorable, though not dramatically different overall. Rather than threatening to switch suppliers, I frame this as context, hoping to negotiate collaboratively rather than through implicit pressure. Ms. Idowu nods, acknowledging that a valued, long-term client like myself deserves consideration beyond standard, blanket pricing policies. She mentions she'll need to consult her manager, but suggests there may be flexibility available given our history together.",
    questions: [
      "What does Tomas present to Ms. Idowu?",
      "What does Tomas mention about competitor pricing?",
      "What does Ms. Idowu say she needs to do?",
    ],
    trueFalse: [
      { text: "Tomas presents a cost breakdown explaining the impact.", answer: true },
      { text: "Tomas mentions competitor pricing was somewhat more favorable.", answer: true },
      { text: "Tomas explicitly threatens to switch suppliers immediately.", answer: false },
      { text: "Ms. Idowu says she needs to consult her manager.", answer: true },
      { text: "Ms. Idowu suggests there may be flexibility available.", answer: true },
    ],
    buildSentence: [
      { target: "I present my cost breakdown now.", jumbled: ["I", "present", "my", "cost", "breakdown", "now."] },
      { target: "She nods, acknowledging this now.", jumbled: ["She", "nods,", "acknowledging", "this", "now."] },
      { target: "She'll need to consult her manager.", jumbled: ["She'll", "need", "to", "consult", "her", "manager."] },
      { target: "I frame this as context, not pressure.", jumbled: ["I", "frame", "this", "as", "context,", "not", "pressure."] },
      { target: "There may be flexibility available given our history.", jumbled: ["There", "may", "be", "flexibility", "available", "given", "our", "history."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a business case without threatening or pressuring the other side.",
    mySentenceExample: "I presented my case without threatening or pressuring the other side.",
  },
  {
    number: 5,
    title: "A Counteroffer",
    image: null,
    imageNote: "Ms. Idowu on a phone call briefly, then returning to the table with a revised offer written on paper.",
    story:
      "Ms. Idowu steps away briefly to call her manager, returning several minutes later with a revised offer to discuss together. Rather than the full proposed increase, she offers a smaller adjustment, paired with a locked-in rate for the following eighteen months. This longer commitment, she explains, benefits her company too, since it guarantees predictable, stable revenue from a reliable client. I consider this carefully, recognizing that price stability itself has genuine value beyond the immediate number involved. Given these terms, I agree this counteroffer seems considerably more reasonable than the originally proposed contract.",
    questions: [
      "What does Ms. Idowu do briefly?",
      "What does the revised offer include?",
      "Why does the longer commitment benefit her company too?",
    ],
    trueFalse: [
      { text: "Ms. Idowu steps away briefly to call her manager.", answer: true },
      { text: "The revised offer includes a smaller adjustment with a locked-in rate.", answer: true },
      { text: "The longer commitment guarantees predictable revenue for her company.", answer: true },
      { text: "Tomas immediately rejects this counteroffer outright.", answer: false },
      { text: "Tomas agrees this counteroffer seems considerably more reasonable.", answer: true },
    ],
    buildSentence: [
      { target: "She steps away briefly now.", jumbled: ["She", "steps", "away", "briefly", "now."] },
      { target: "I consider this carefully now.", jumbled: ["I", "consider", "this", "carefully", "now."] },
      { target: "This benefits her company too.", jumbled: ["This", "benefits", "her", "company", "too."] },
      { target: "Price stability itself has genuine value.", jumbled: ["Price", "stability", "itself", "has", "genuine", "value."] },
      { target: "This counteroffer seems considerably more reasonable now.", jumbled: ["This", "counteroffer", "seems", "considerably", "more", "reasonable", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about considering a counteroffer that benefited both sides of a negotiation.",
    mySentenceExample: "I considered a counteroffer that benefited both sides fairly.",
  },
  {
    number: 6,
    title: "Finalizing the Terms",
    image: null,
    imageNote: "Tomas and Ms. Idowu reviewing a revised contract document together, both pointing at specific clauses.",
    story:
      "We review the revised contract together, line by line, ensuring both of us fully understand every term before signing anything. I ask a few clarifying questions about delivery schedules and minimum order quantities, wanting complete clarity beforehand. Ms. Idowu answers each question thoroughly, adjusting one minor clause after I mention a scheduling conflict with my current ordering pattern. Once satisfied, we both sign the updated agreement, shaking hands as a gesture of renewed, mutual commitment. Walking her out, I feel genuinely satisfied that this negotiation had strengthened, rather than strained, our working relationship.",
    questions: [
      "What do Tomas and Ms. Idowu review together?",
      "What does Tomas ask clarifying questions about?",
      "What happens once they're both satisfied?",
    ],
    trueFalse: [
      { text: "Tomas and Ms. Idowu review the revised contract line by line.", answer: true },
      { text: "Tomas asks about delivery schedules and order quantities.", answer: true },
      { text: "Ms. Idowu refuses to adjust any clauses at all.", answer: false },
      { text: "They both sign the updated agreement.", answer: true },
      { text: "Tomas feels this strengthened their working relationship.", answer: true },
    ],
    buildSentence: [
      { target: "We review the contract together now.", jumbled: ["We", "review", "the", "contract", "together", "now."] },
      { target: "I ask a few clarifying questions.", jumbled: ["I", "ask", "a", "few", "clarifying", "questions."] },
      { target: "We both sign the updated agreement.", jumbled: ["We", "both", "sign", "the", "updated", "agreement."] },
      { target: "I feel genuinely satisfied about this.", jumbled: ["I", "feel", "genuinely", "satisfied", "about", "this."] },
      { target: "This strengthened, rather than strained, our working relationship.", jumbled: ["This", "strengthened,", "rather", "than", "strained,", "our", "working", "relationship."] },
    ],
    mySentencePrompt: "Write or say one sentence about finalizing a business agreement that both sides felt good about.",
    mySentenceExample: "We finalized a business agreement that both sides felt good about.",
  },
  {
    number: 7,
    title: "Writing a Formal Confirmation",
    image: null,
    imageNote: "Tomas at his laptop that evening, drafting a formal email summarizing the agreed terms.",
    story:
      "That evening, I draft a formal email to Ms. Idowu, summarizing the finalized terms for both our records going forward. I keep the tone professional, referencing specific numbers and dates rather than vague, general descriptions of what we'd agreed. I also thank her for approaching this collaboratively, noting that I valued the flexibility her company had ultimately shown. Sending this email ensures there's a clear, documented reference should any confusion arise later regarding these specific terms. This written follow-up, I realize, is as much a part of successful negotiation as the actual conversation itself.",
    questions: [
      "What does Tomas draft that evening?",
      "What tone does Tomas keep in the email?",
      "Why does Tomas send this email?",
    ],
    trueFalse: [
      { text: "Tomas drafts a formal email summarizing the finalized terms.", answer: true },
      { text: "Tomas keeps the tone professional with specific numbers and dates.", answer: true },
      { text: "Tomas avoids thanking Ms. Idowu in the email.", answer: false },
      { text: "This email ensures a clear, documented reference for later.", answer: true },
      { text: "Tomas realizes written follow-up is part of successful negotiation.", answer: true },
    ],
    buildSentence: [
      { target: "I draft a formal email tonight.", jumbled: ["I", "draft", "a", "formal", "email", "tonight."] },
      { target: "I keep the tone professional here.", jumbled: ["I", "keep", "the", "tone", "professional", "here."] },
      { target: "I thank her for this too.", jumbled: ["I", "thank", "her", "for", "this", "too."] },
      { target: "This ensures a clear, documented reference later.", jumbled: ["This", "ensures", "a", "clear,", "documented", "reference", "later."] },
      { target: "This is as much a part of negotiation as the conversation.", jumbled: ["This", "is", "as", "much", "a", "part", "of", "negotiation", "as", "the", "conversation."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal email to confirm the details of a business agreement.",
    mySentenceExample: "I wrote a formal email to confirm the details of our agreement.",
  },
  {
    number: 8,
    title: "Sharing with My Staff",
    image: null,
    imageNote: "Tomas explaining the new supplier terms to his two bakery staff members in the kitchen, all relaxed.",
    story:
      "The next morning, I explain the new supplier terms to my staff, since the adjusted pricing directly affects our overall budget planning. One employee asks whether this means we might need to adjust menu prices slightly to maintain our current margins. I explain that, given the smaller-than-expected increase, only minor adjustments should actually be necessary going forward. Another employee mentions appreciating that I'd negotiated rather than simply passing the full increase along without any pushback. This transparency, I realize, matters not just for practical planning, but for maintaining trust within my small team too.",
    questions: [
      "What does Tomas explain to his staff the next morning?",
      "What does one employee ask about?",
      "What does another employee mention appreciating?",
    ],
    trueFalse: [
      { text: "Tomas explains the new supplier terms to his staff.", answer: true },
      { text: "One employee asks about adjusting menu prices.", answer: true },
      { text: "Tomas says major menu price changes are now necessary.", answer: false },
      { text: "An employee appreciates that Tomas negotiated rather than just passing costs along.", answer: true },
      { text: "Tomas realizes this transparency matters for team trust too.", answer: true },
    ],
    buildSentence: [
      { target: "I explain the new terms tomorrow.", jumbled: ["I", "explain", "the", "new", "terms", "tomorrow."] },
      { target: "This directly affects our budget planning.", jumbled: ["This", "directly", "affects", "our", "budget", "planning."] },
      { target: "Only minor adjustments should be necessary.", jumbled: ["Only", "minor", "adjustments", "should", "be", "necessary."] },
      { target: "I appreciate that you negotiated rather than passing this along.", jumbled: ["I", "appreciate", "that", "you", "negotiated", "rather", "than", "passing", "this", "along."] },
      { target: "This matters for maintaining trust within my small team too.", jumbled: ["This", "matters", "for", "maintaining", "trust", "within", "my", "small", "team", "too."] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a business decision transparently to your team.",
    mySentenceExample: "I explained the business decision transparently to my team.",
  },
  {
    number: 9,
    title: "A Stronger Partnership",
    image: null,
    imageNote: "Tomas and Ms. Idowu meeting again months later, both relaxed and friendly, discussing an upcoming order casually.",
    story:
      "Several months later, Ms. Idowu visits again to discuss an upcoming seasonal order, and our conversation feels noticeably more relaxed than before. She mentions that our negotiation had actually influenced how she approaches other long-term clients now, emphasizing flexibility over rigid, blanket policies. I admit that I'd initially worried negotiating might damage our relationship, though it clearly achieved the opposite outcome instead. Given how smoothly this partnership now operates, I recognize that respectful negotiation, handled well, can genuinely strengthen business relationships rather than threaten them. This realization, more than the specific pricing terms, feels like the negotiation's most lasting outcome.",
    questions: [
      "What does Ms. Idowu discuss when she visits several months later?",
      "What does Ms. Idowu mention about their negotiation?",
      "What does Tomas admit he had initially worried about?",
    ],
    trueFalse: [
      { text: "Ms. Idowu visits to discuss an upcoming seasonal order.", answer: true },
      { text: "Ms. Idowu says their negotiation influenced how she approaches other clients.", answer: true },
      { text: "Tomas admits he initially worried negotiating might damage the relationship.", answer: true },
      { text: "The negotiation actually damaged their relationship permanently.", answer: false },
      { text: "Tomas recognizes respectful negotiation can strengthen relationships.", answer: true },
    ],
    buildSentence: [
      { target: "She visits again several months later.", jumbled: ["She", "visits", "again", "several", "months", "later."] },
      { target: "I admit this honestly now.", jumbled: ["I", "admit", "this", "honestly", "now."] },
      { target: "This achieved the opposite outcome instead.", jumbled: ["This", "achieved", "the", "opposite", "outcome", "instead."] },
      { target: "This influenced how she approaches other clients now.", jumbled: ["This", "influenced", "how", "she", "approaches", "other", "clients", "now."] },
      { target: "Respectful negotiation can genuinely strengthen business relationships.", jumbled: ["Respectful", "negotiation", "can", "genuinely", "strengthen", "business", "relationships."] },
    ],
    mySentencePrompt: "Write or say one sentence about a negotiation that ended up strengthening a business relationship.",
    mySentenceExample: "The negotiation ended up strengthening our business relationship.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Tomas standing in his bakery at closing time, reflecting quietly while wiping down the counter.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original terms without question. If I had avoided the conversation out of discomfort, I likely would have quietly absorbed costs my business genuinely couldn't sustain long-term. Instead, researching thoroughly and negotiating respectfully allowed me to protect my business while preserving a valuable, long-term relationship. I've learned that negotiation, done well, isn't adversarial by nature, but rather a genuine tool for finding sustainable, mutual solutions. In the end, this experience taught me that advocating for my business requires both preparation and genuine respect for the other side.",
    questions: [
      "What does Tomas realize looking back on the process?",
      "What might have happened if he had simply accepted the original terms?",
      "What has Tomas learned about negotiation done well?",
    ],
    trueFalse: [
      { text: "Tomas realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the original terms might have strained his business finances.", answer: true },
      { text: "Tomas believes negotiation is adversarial by nature.", answer: false },
      { text: "Tomas learns negotiation is a tool for sustainable, mutual solutions.", answer: true },
      { text: "Tomas learns advocating for his business requires preparation and respect.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Negotiation isn't adversarial by nature.", jumbled: ["Negotiation", "isn't", "adversarial", "by", "nature."] },
      { target: "This requires both preparation and genuine respect.", jumbled: ["This", "requires", "both", "preparation", "and", "genuine", "respect."] },
      { target: "I likely would have quietly absorbed costs my business couldn't sustain.", jumbled: ["I", "likely", "would", "have", "quietly", "absorbed", "costs", "my", "business", "couldn't", "sustain."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a business agreement respectfully.",
    mySentenceExample: "I learned that respectful negotiation protects both sides of a deal.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

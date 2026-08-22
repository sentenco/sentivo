// B2 Adults digital storybook, Book 79: "Negotiating a Rent Increase"
// Static content -- no Supabase. Seventh book in the B2 Adults batch
// (73-80). Renter-landlord negotiation, distinct from Book 39
// "Moving into My First Apartment" (A2, settling-in) and Book 76's
// HOA dispute (a rule/exception negotiation with a board, not a
// direct landlord price negotiation). Adults-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Negotiating a Rent Increase";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Bianca sitting at her kitchen table reading a lease renewal letter, laptop open beside her showing apartment listings.";

export const CHARACTERS = [
  { name: "Bianca", role: "The narrator, a long-term tenant facing a proposed rent increase", look: "Practical, values stability, has lived in the same apartment for four years." },
  { name: "Mr. Halloran", role: "Bianca's landlord", look: "Business-minded but not unreasonable, manages several rental properties." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Renewal Letter",
    image: null,
    imageNote: "Bianca reading a lease renewal letter at her kitchen table, a concerned expression on her face.",
    story:
      "My lease renewal letter arrives, proposing a rent increase considerably higher than what I'd anticipated based on previous years' adjustments. Having lived here for four years, I've always paid on time and maintained the apartment carefully, which makes this increase feel somewhat unjustified. I check current listings for comparable apartments nearby, discovering that while rents have indeed risen, this particular increase still seems disproportionate. Moving would mean significant costs, from deposits to moving expenses, which I'd genuinely prefer to avoid if reasonably possible. Given this, I decide negotiating directly with Mr. Halloran seems like the more sensible first step.",
    questions: [
      "What does Bianca's lease renewal letter propose?",
      "How long has Bianca lived in the apartment?",
      "What does Bianca discover checking current listings?",
    ],
    trueFalse: [
      { text: "The renewal letter proposes a considerably higher rent increase.", answer: true },
      { text: "Bianca has lived in the apartment for four years.", answer: true },
      { text: "Bianca discovers this increase still seems disproportionate.", answer: true },
      { text: "Bianca decides to move immediately without negotiating.", answer: false },
      { text: "Bianca decides negotiating directly seems like the sensible first step.", answer: true },
    ],
    buildSentence: [
      { target: "My renewal letter arrives today.", jumbled: ["My", "renewal", "letter", "arrives", "today."] },
      { target: "I check current listings nearby.", jumbled: ["I", "check", "current", "listings", "nearby."] },
      { target: "I decide to negotiate directly now.", jumbled: ["I", "decide", "to", "negotiate", "directly", "now."] },
      { target: "This increase feels somewhat unjustified to me.", jumbled: ["This", "increase", "feels", "somewhat", "unjustified", "to", "me."] },
      { target: "Moving would mean significant costs I'd prefer to avoid.", jumbled: ["Moving", "would", "mean", "significant", "costs", "I'd", "prefer", "to", "avoid."] },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to negotiate rather than simply accepting a proposed increase.",
    mySentenceExample: "I decided to negotiate rather than simply accepting the increase.",
  },
  {
    number: 2,
    title: "Researching the Market",
    image: null,
    imageNote: "Bianca at her laptop comparing rental listings, spreadsheet with prices for similar apartments open.",
    story:
      "I spend an evening researching comparable apartments, noting their prices, sizes, and amenities to build a reasonably accurate picture. I discover that similar units in my building's neighborhood rent for noticeably less than what Mr. Halloran is now proposing. I also research typical rent increase percentages in the area, finding that mine exceeds the average by a meaningful margin. This research, moreover, gives me concrete data to reference rather than simply expressing vague dissatisfaction about the number. Feeling genuinely prepared, I draft a few key points I'd like to raise during our upcoming conversation.",
    questions: [
      "What does Bianca spend an evening doing?",
      "What does Bianca discover about similar units nearby?",
      "What does Bianca discover about typical rent increase percentages?",
    ],
    trueFalse: [
      { text: "Bianca spends an evening researching comparable apartments.", answer: true },
      { text: "Similar units nearby rent for noticeably less.", answer: true },
      { text: "Her proposed increase exceeds the area average.", answer: true },
      { text: "Bianca decides to express only vague dissatisfaction.", answer: false },
      { text: "Bianca drafts key points for the upcoming conversation.", answer: true },
    ],
    buildSentence: [
      { target: "I spend an evening researching this.", jumbled: ["I", "spend", "an", "evening", "researching", "this."] },
      { target: "This gives me concrete data now.", jumbled: ["This", "gives", "me", "concrete", "data", "now."] },
      { target: "I feel genuinely prepared now.", jumbled: ["I", "feel", "genuinely", "prepared", "now."] },
      { target: "This exceeds the average by a meaningful margin.", jumbled: ["This", "exceeds", "the", "average", "by", "a", "meaningful", "margin."] },
      { target: "Similar units rent for noticeably less nearby.", jumbled: ["Similar", "units", "rent", "for", "noticeably", "less", "nearby."] },
    ],
    mySentencePrompt: "Write or say one sentence about researching the market before negotiating a price with someone.",
    mySentenceExample: "I researched the market before negotiating the price with him.",
  },
  {
    number: 3,
    title: "Requesting a Conversation",
    image: null,
    imageNote: "Bianca sitting across from Mr. Halloran at a small office, both with papers spread between them.",
    story:
      "I email Mr. Halloran, requesting a brief conversation about the proposed renewal terms before formally signing anything. He agrees, and we meet at his office, where I open by acknowledging that I genuinely enjoy living in the building. I mention my four years of reliable, on-time payments, then reference specific comparable listings I'd found nearby. He listens without interrupting, occasionally jotting notes, which I interpret as at least a willingness to hear me out fully. When I finish, he acknowledges that long-term, reliable tenants do genuinely matter to how he manages his properties overall.",
    questions: [
      "What does Bianca email Mr. Halloran to request?",
      "What does Bianca mention when she opens the conversation?",
      "What does Mr. Halloran acknowledge?",
    ],
    trueFalse: [
      { text: "Bianca emails requesting a conversation about the renewal terms.", answer: true },
      { text: "Bianca mentions her four years of reliable, on-time payments.", answer: true },
      { text: "Mr. Halloran interrupts her constantly during the conversation.", answer: false },
      { text: "Mr. Halloran listens without interrupting, taking notes.", answer: true },
      { text: "Mr. Halloran acknowledges that reliable tenants genuinely matter.", answer: true },
    ],
    buildSentence: [
      { target: "I email Mr. Halloran now.", jumbled: ["I", "email", "Mr.", "Halloran", "now."] },
      { target: "He agrees to meet with me.", jumbled: ["He", "agrees", "to", "meet", "with", "me."] },
      { target: "He listens without interrupting me.", jumbled: ["He", "listens", "without", "interrupting", "me."] },
      { target: "I genuinely enjoy living in this building.", jumbled: ["I", "genuinely", "enjoy", "living", "in", "this", "building."] },
      { target: "Long-term, reliable tenants do genuinely matter to him.", jumbled: ["Long-term,", "reliable", "tenants", "do", "genuinely", "matter", "to", "him."] },
    ],
    mySentencePrompt: "Write or say one sentence about opening a negotiation by acknowledging something positive first.",
    mySentenceExample: "I opened the negotiation by acknowledging something positive first.",
  },
  {
    number: 4,
    title: "Presenting the Data",
    image: null,
    imageNote: "Bianca showing a printed comparison sheet to Mr. Halloran, both looking at the numbers together.",
    story:
      "I show Mr. Halloran my comparison sheet, pointing out specific nearby listings with similar square footage and amenities. He examines it carefully, mentioning that rising property taxes and maintenance costs partly explain his proposed increase this year. I acknowledge these are legitimate business pressures, though I gently note that the specific percentage still seems higher than comparable properties nearby. Rather than dismissing my point, he considers this, admitting perhaps the initial number hadn't fully accounted for tenant retention value. This exchange, given how respectfully it's unfolding, leaves me cautiously hopeful about reaching a genuinely fair compromise.",
    questions: [
      "What does Bianca show Mr. Halloran?",
      "What does Mr. Halloran mention explains part of the increase?",
      "What does Mr. Halloran admit considering Bianca's point?",
    ],
    trueFalse: [
      { text: "Bianca shows Mr. Halloran her comparison sheet.", answer: true },
      { text: "Mr. Halloran mentions rising taxes and maintenance costs.", answer: true },
      { text: "Mr. Halloran dismisses Bianca's point immediately.", answer: false },
      { text: "Mr. Halloran admits the number hadn't accounted for tenant retention value.", answer: true },
      { text: "Bianca feels cautiously hopeful about a fair compromise.", answer: true },
    ],
    buildSentence: [
      { target: "I show him my comparison sheet.", jumbled: ["I", "show", "him", "my", "comparison", "sheet."] },
      { target: "He examines it carefully now.", jumbled: ["He", "examines", "it", "carefully", "now."] },
      { target: "I feel cautiously hopeful about this.", jumbled: ["I", "feel", "cautiously", "hopeful", "about", "this."] },
      { target: "These are legitimate business pressures, I acknowledge.", jumbled: ["These", "are", "legitimate", "business", "pressures,", "I", "acknowledge."] },
      { target: "This hadn't fully accounted for tenant retention value.", jumbled: ["This", "hadn't", "fully", "accounted", "for", "tenant", "retention", "value."] },
    ],
    mySentencePrompt: "Write or say one sentence about acknowledging someone's legitimate concerns while still making your own point.",
    mySentenceExample: "I acknowledged his legitimate concerns while still making my own point.",
  },
  {
    number: 5,
    title: "A Revised Offer",
    image: null,
    imageNote: "Mr. Halloran writing a revised number on paper, sliding it across the desk to Bianca.",
    story:
      "Mr. Halloran proposes a revised increase, roughly half of what was originally suggested, given my history as a reliable tenant. He explains this reflects a genuine attempt to balance his rising costs with retaining a tenant he genuinely doesn't want to lose. I consider this carefully, recognizing it's still an increase, though considerably more reasonable than the original proposal. I ask whether a two-year lease, rather than one, might allow for an even more favorable rate given the added stability. He considers this, agreeing that locking in a longer commitment could indeed justify a slightly better rate for both of us.",
    questions: [
      "What does Mr. Halloran propose?",
      "What does Mr. Halloran say this reflects?",
      "What does Bianca ask about a two-year lease?",
    ],
    trueFalse: [
      { text: "Mr. Halloran proposes roughly half the originally suggested increase.", answer: true },
      { text: "Mr. Halloran says this reflects balancing costs with retaining a good tenant.", answer: true },
      { text: "Bianca asks whether a two-year lease might allow a better rate.", answer: true },
      { text: "Mr. Halloran refuses to consider a longer lease at all.", answer: false },
      { text: "Mr. Halloran agrees a longer commitment could justify a better rate.", answer: true },
    ],
    buildSentence: [
      { target: "He proposes a revised increase now.", jumbled: ["He", "proposes", "a", "revised", "increase", "now."] },
      { target: "I consider this carefully now.", jumbled: ["I", "consider", "this", "carefully", "now."] },
      { target: "He considers this, agreeing readily.", jumbled: ["He", "considers", "this,", "agreeing", "readily."] },
      { target: "This is still an increase, though more reasonable.", jumbled: ["This", "is", "still", "an", "increase,", "though", "more", "reasonable."] },
      { target: "This could indeed justify a slightly better rate for both.", jumbled: ["This", "could", "indeed", "justify", "a", "slightly", "better", "rate", "for", "both."] },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a longer commitment in exchange for a better rate.",
    mySentenceExample: "I proposed a longer commitment in exchange for a better rate.",
  },
  {
    number: 6,
    title: "Finalizing the Lease",
    image: null,
    imageNote: "Bianca and Mr. Halloran reviewing a printed two-year lease agreement together, both signing.",
    story:
      "We finalize a two-year lease with a modest, reasonable increase, considerably lower than what was originally proposed weeks earlier. I read through the document carefully before signing, ensuring every term matches exactly what we'd verbally discussed and agreed upon. Mr. Halloran signs as well, mentioning he appreciated that I'd approached this professionally rather than simply threatening to leave outright. I thank him for his flexibility, genuinely relieved that this negotiation had produced an outcome I could comfortably accept long-term. Leaving his office, I feel proud that preparation and respectful persistence had actually paid off meaningfully.",
    questions: [
      "What do Bianca and Mr. Halloran finalize?",
      "What does Bianca do before signing?",
      "What does Mr. Halloran say he appreciated?",
    ],
    trueFalse: [
      { text: "They finalize a two-year lease with a modest increase.", answer: true },
      { text: "Bianca reads through the document carefully before signing.", answer: true },
      { text: "Mr. Halloran appreciated that she approached this professionally.", answer: true },
      { text: "Bianca threatened to leave outright during the negotiation.", answer: false },
      { text: "Bianca feels proud that preparation and persistence paid off.", answer: true },
    ],
    buildSentence: [
      { target: "We finalize a two-year lease now.", jumbled: ["We", "finalize", "a", "two-year", "lease", "now."] },
      { target: "I thank him for his flexibility.", jumbled: ["I", "thank", "him", "for", "his", "flexibility."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "I read through the document carefully first.", jumbled: ["I", "read", "through", "the", "document", "carefully", "first."] },
      { target: "Preparation and respectful persistence had actually paid off.", jumbled: ["Preparation", "and", "respectful", "persistence", "had", "actually", "paid", "off."] },
    ],
    mySentencePrompt: "Write or say one sentence about finalizing an agreement that you could comfortably accept long-term.",
    mySentenceExample: "I finalized an agreement that I could comfortably accept long-term.",
  },
  {
    number: 7,
    title: "Telling a Friend",
    image: null,
    imageNote: "Bianca chatting with a friend over coffee, both discussing the negotiation experience casually.",
    story:
      "Over coffee, I mention the negotiation to a friend who's currently facing a similar rent increase at her own apartment building. She admits she'd assumed rent increases were simply non-negotiable, having never considered pushing back directly before. I explain that researching comparable listings gave me genuine leverage, rather than relying solely on vague appeals to fairness. Moreover, I mention that proposing a longer lease term ultimately helped, since it offered my landlord something valuable in return. She thanks me for the insight, saying she'll research comparable prices before her own renewal conversation happens.",
    questions: [
      "What does Bianca mention over coffee?",
      "What had the friend assumed about rent increases?",
      "What does Bianca explain gave her genuine leverage?",
    ],
    trueFalse: [
      { text: "Bianca mentions the negotiation to a friend over coffee.", answer: true },
      { text: "The friend had assumed rent increases were simply non-negotiable.", answer: true },
      { text: "Bianca explains researching comparable listings gave her leverage.", answer: true },
      { text: "Bianca says proposing a longer lease term didn't help at all.", answer: false },
      { text: "The friend says she'll research comparable prices too.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this over coffee.", jumbled: ["I", "mention", "this", "over", "coffee."] },
      { target: "She admits this about herself.", jumbled: ["She", "admits", "this", "about", "herself."] },
      { target: "She thanks me for this insight.", jumbled: ["She", "thanks", "me", "for", "this", "insight."] },
      { target: "This gave me genuine leverage, rather than vague appeals.", jumbled: ["This", "gave", "me", "genuine", "leverage,", "rather", "than", "vague", "appeals."] },
      { target: "This offered my landlord something valuable in return.", jumbled: ["This", "offered", "my", "landlord", "something", "valuable", "in", "return."] },
    ],
    mySentencePrompt: "Write or say one sentence about sharing negotiation advice with a friend facing a similar situation.",
    mySentenceExample: "I shared negotiation advice with a friend facing a similar situation.",
  },
  {
    number: 8,
    title: "Settling In Again",
    image: null,
    imageNote: "Bianca sitting comfortably in her apartment, unpacking a small box of new decor items, relaxed expression.",
    story:
      "With the new lease signed, I feel a renewed sense of stability, knowing exactly what my housing costs will be for two years. I use some of the money I'd saved compared to the original proposal to make a few small improvements to my apartment. Mr. Halloran, coincidentally, approves my request to repaint one wall, mentioning he appreciates tenants who genuinely care for their space. This small gesture, though minor, reinforces my sense that this negotiation had actually improved our overall landlord-tenant relationship. Settling back into my routine, I feel genuinely grateful I'd chosen to negotiate rather than simply accepting the first proposal.",
    questions: [
      "What does Bianca feel with the new lease signed?",
      "What does Bianca use some of the saved money for?",
      "What does Mr. Halloran approve?",
    ],
    trueFalse: [
      { text: "Bianca feels a renewed sense of stability with the new lease.", answer: true },
      { text: "Bianca uses some saved money for small apartment improvements.", answer: true },
      { text: "Mr. Halloran approves her request to repaint one wall.", answer: true },
      { text: "Mr. Halloran refuses to interact with Bianca after signing.", answer: false },
      { text: "Bianca feels grateful she chose to negotiate.", answer: true },
    ],
    buildSentence: [
      { target: "I feel a renewed sense of stability.", jumbled: ["I", "feel", "a", "renewed", "sense", "of", "stability."] },
      { target: "He approves my request now.", jumbled: ["He", "approves", "my", "request", "now."] },
      { target: "I feel genuinely grateful about this.", jumbled: ["I", "feel", "genuinely", "grateful", "about", "this."] },
      { target: "This reinforces my sense of an improved relationship.", jumbled: ["This", "reinforces", "my", "sense", "of", "an", "improved", "relationship."] },
      { target: "I chose to negotiate rather than simply accepting the first proposal.", jumbled: ["I", "chose", "to", "negotiate", "rather", "than", "simply", "accepting", "the", "first", "proposal."] },
    ],
    mySentencePrompt: "Write or say one sentence about settling into a renewed sense of stability after a successful negotiation.",
    mySentenceExample: "I settled into a renewed sense of stability after the negotiation.",
  },
  {
    number: 9,
    title: "A Year Later",
    image: null,
    imageNote: "Bianca checking her mailbox a year later, opening routine correspondence, no tension visible this time.",
    story:
      "A year into the new lease, I receive a routine notice from Mr. Halloran, unrelated to rent, simply updating tenants about building maintenance schedules. I realize how differently I now feel opening mail from him, compared to the anxiety I'd felt receiving that original renewal letter. Our interactions since the negotiation have remained professional and pleasant, without any lingering tension from that initial disagreement. I mention this to a neighbor, who says she's noticed Mr. Halloran seems generally more open to reasonable tenant requests lately too. Perhaps, I consider, one respectful negotiation had quietly shifted something in how he approaches these relationships generally.",
    questions: [
      "What does Bianca receive a year into the new lease?",
      "How does Bianca feel opening mail from Mr. Halloran now, compared to before?",
      "What does a neighbor mention about Mr. Halloran?",
    ],
    trueFalse: [
      { text: "Bianca receives a routine maintenance notice a year later.", answer: true },
      { text: "Bianca feels differently opening mail now compared to before.", answer: true },
      { text: "Their interactions have remained professional and pleasant.", answer: true },
      { text: "A neighbor says Mr. Halloran has become less flexible overall.", answer: false },
      { text: "Bianca considers that one negotiation may have shifted his approach.", answer: true },
    ],
    buildSentence: [
      { target: "I receive a routine notice now.", jumbled: ["I", "receive", "a", "routine", "notice", "now."] },
      { target: "I mention this to a neighbor.", jumbled: ["I", "mention", "this", "to", "a", "neighbor."] },
      { target: "I realize how differently I feel now.", jumbled: ["I", "realize", "how", "differently", "I", "feel", "now."] },
      { target: "Our interactions have remained professional and pleasant.", jumbled: ["Our", "interactions", "have", "remained", "professional", "and", "pleasant."] },
      { target: "One respectful negotiation had quietly shifted something.", jumbled: ["One", "respectful", "negotiation", "had", "quietly", "shifted", "something."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a relationship stayed positive long after a difficult negotiation.",
    mySentenceExample: "I noticed our relationship stayed positive long after the negotiation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Bianca sitting at her kitchen table, the original renewal letter and the final signed lease both visible, reflecting quietly.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original proposed increase without question. If I had assumed negotiation wasn't an option, I likely would have paid considerably more or faced the disruption of moving entirely. Instead, researching thoroughly and approaching Mr. Halloran respectfully allowed me to reach an outcome that genuinely worked for both of us. I've learned that even seemingly fixed proposals, like rent increases, often have more flexibility than they initially appear to have. In the end, this experience taught me that advocating for my own interests, done respectfully, rarely damages a relationship and often strengthens it.",
    questions: [
      "What does Bianca realize looking back on the process?",
      "What might have happened if she had simply accepted the increase?",
      "What has Bianca learned about seemingly fixed proposals?",
    ],
    trueFalse: [
      { text: "Bianca realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the increase might have meant paying more or moving.", answer: true },
      { text: "Bianca believes negotiation always damages a relationship.", answer: false },
      { text: "Bianca learns fixed proposals often have more flexibility than expected.", answer: true },
      { text: "Bianca learns advocating for herself respectfully can strengthen a relationship.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "This rarely damages a relationship and often strengthens it.", jumbled: ["This", "rarely", "damages", "a", "relationship", "and", "often", "strengthens", "it."] },
      { target: "Seemingly fixed proposals often have more flexibility than they appear.", jumbled: ["Seemingly", "fixed", "proposals", "often", "have", "more", "flexibility", "than", "they", "appear."] },
      { target: "Had I assumed this wasn't negotiable, I would have paid more.", jumbled: ["Had", "I", "assumed", "this", "wasn't", "negotiable,", "I", "would", "have", "paid", "more."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a rent increase respectfully.",
    mySentenceExample: "I learned that respectful negotiation often produces better outcomes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

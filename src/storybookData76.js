// B2 Adults digital storybook, Book 76: "A Dispute with the Homeowners Association"
// Static content -- no Supabase. Fourth book in the B2 Adults batch
// (73-80). Civic negotiation/formal-writing scenario, distinct from
// the workplace and business negotiations in Books 73-75 -- this
// centers on a homeowner negotiating a rule dispute with an HOA
// board, matching the B2 Adults spec's genre-aware writing focus
// (a formal appeal letter). Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "A Dispute with the Homeowners Association";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Rosalind standing in her front yard looking at a small vegetable garden, an official-looking letter in her hand, expression concerned.";

export const CHARACTERS = [
  { name: "Rosalind", role: "The narrator, a homeowner who built a small front-yard garden", look: "Practical, gardening gloves often nearby, values her community but stands her ground." },
  { name: "Mr. Ashworth", role: "The homeowners association board president", look: "Formal, rule-focused, though willing to listen when approached respectfully." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Official Letter",
    image: null,
    imageNote: "Rosalind opening a formal letter at her kitchen table, the envelope marked with the HOA's official letterhead.",
    story:
      "I open an official letter from the homeowners association, informing me that my front-yard vegetable garden violates the community's landscaping guidelines. Apparently, the guidelines specify only ornamental plants are permitted in visible front areas, something I hadn't fully realized when I planted it. The letter requests I remove the garden within thirty days or face a modest but recurring fine going forward. Given how much effort I'd invested, and how much I genuinely enjoy growing my own vegetables, this feels considerably unfair. Rather than simply complying immediately, I decide I'll research whether there's any room for genuine negotiation here.",
    questions: [
      "What does the official letter inform Rosalind of?",
      "What do the guidelines specify is permitted in front areas?",
      "What does Rosalind decide to do instead of complying immediately?",
    ],
    trueFalse: [
      { text: "The letter says her garden violates landscaping guidelines.", answer: true },
      { text: "The guidelines specify only ornamental plants are permitted.", answer: true },
      { text: "The letter requests removal within thirty days or a fine.", answer: true },
      { text: "Rosalind immediately complies without question.", answer: false },
      { text: "Rosalind decides to research whether negotiation is possible.", answer: true },
    ],
    buildSentence: [
      { target: "I open an official letter today.", jumbled: ["I", "open", "an", "official", "letter", "today."] },
      { target: "This feels considerably unfair to me.", jumbled: ["This", "feels", "considerably", "unfair", "to", "me."] },
      { target: "I'll research whether there's room for negotiation.", jumbled: ["I'll", "research", "whether", "there's", "room", "for", "negotiation."] },
      { target: "I hadn't fully realized this when I planted it.", jumbled: ["I", "hadn't", "fully", "realized", "this", "when", "I", "planted", "it."] },
      { target: "This requests removal within thirty days or a fine.", jumbled: ["This", "requests", "removal", "within", "thirty", "days", "or", "a", "fine."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving an official notice that seemed unfair at first.",
    mySentenceExample: "I received an official notice that seemed unfair at first.",
  },
  {
    number: 2,
    title: "Reading the Fine Print",
    image: null,
    imageNote: "Rosalind at her kitchen table reading through the HOA's full bylaws document, highlighting sections.",
    story:
      "I request the full HOA bylaws document, reading through it carefully to understand exactly what's permitted and what genuinely isn't. I discover that while ornamental plants are indeed specified, the guidelines also include a provision allowing exceptions through formal board approval. Moreover, I find that several other properties in the neighborhood have small, permitted gardens, suggesting exceptions aren't entirely unprecedented here. This detail, given how it changes my understanding, suggests negotiation might genuinely be possible rather than simply futile. Armed with this information, I decide to draft a formal request for an exception rather than simply removing the garden.",
    questions: [
      "What does Rosalind request and read through carefully?",
      "What provision does Rosalind discover in the guidelines?",
      "What does Rosalind decide to draft?",
    ],
    trueFalse: [
      { text: "Rosalind requests the full HOA bylaws document.", answer: true },
      { text: "The guidelines include a provision allowing exceptions through board approval.", answer: true },
      { text: "No other properties in the neighborhood have gardens at all.", answer: false },
      { text: "Rosalind decides to draft a formal request for an exception.", answer: true },
      { text: "This detail suggests negotiation might genuinely be possible.", answer: true },
    ],
    buildSentence: [
      { target: "I request the full bylaws document.", jumbled: ["I", "request", "the", "full", "bylaws", "document."] },
      { target: "I discover this provision now.", jumbled: ["I", "discover", "this", "provision", "now."] },
      { target: "I decide to draft a formal request.", jumbled: ["I", "decide", "to", "draft", "a", "formal", "request."] },
      { target: "Exceptions aren't entirely unprecedented here.", jumbled: ["Exceptions", "aren't", "entirely", "unprecedented", "here."] },
      { target: "This suggests negotiation might genuinely be possible.", jumbled: ["This", "suggests", "negotiation", "might", "genuinely", "be", "possible."] },
    ],
    mySentencePrompt: "Write or say one sentence about reading the fine print of a rule and discovering an exception existed.",
    mySentenceExample: "I read the fine print and discovered an exception existed.",
  },
  {
    number: 3,
    title: "Drafting the Request",
    image: null,
    imageNote: "Rosalind at her laptop, drafting a formal letter, printed photos of her garden nearby as evidence.",
    story:
      "I draft a formal letter to the board, explaining respectfully why I believe an exception is warranted in this particular case. I include photographs showing the garden is well-maintained and, in my view, visually appealing despite not being strictly ornamental. I also reference the specific bylaw provision allowing exceptions, along with examples of similarly approved gardens elsewhere in the neighborhood. Rather than simply demanding compliance, I frame this as a reasonable request grounded in both evidence and existing precedent. Reading the letter back, I feel it strikes an appropriately professional, non-confrontational tone throughout.",
    questions: [
      "What does Rosalind draft to the board?",
      "What does Rosalind include in the letter?",
      "What does Rosalind reference in her request?",
    ],
    trueFalse: [
      { text: "Rosalind drafts a formal letter to the board.", answer: true },
      { text: "Rosalind includes photographs showing the garden is well-maintained.", answer: true },
      { text: "Rosalind references the specific bylaw provision allowing exceptions.", answer: true },
      { text: "Rosalind's letter demands compliance from the board.", answer: false },
      { text: "Rosalind feels the letter strikes a professional, non-confrontational tone.", answer: true },
    ],
    buildSentence: [
      { target: "I draft a formal letter now.", jumbled: ["I", "draft", "a", "formal", "letter", "now."] },
      { target: "I include photographs as evidence.", jumbled: ["I", "include", "photographs", "as", "evidence."] },
      { target: "I feel this strikes an appropriate tone.", jumbled: ["I", "feel", "this", "strikes", "an", "appropriate", "tone."] },
      { target: "I frame this as a reasonable request.", jumbled: ["I", "frame", "this", "as", "a", "reasonable", "request."] },
      { target: "This is grounded in both evidence and existing precedent.", jumbled: ["This", "is", "grounded", "in", "both", "evidence", "and", "existing", "precedent."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal request grounded in evidence rather than emotion.",
    mySentenceExample: "I wrote a formal request grounded in evidence rather than emotion.",
  },
  {
    number: 4,
    title: "Submitting the Appeal",
    image: null,
    imageNote: "Rosalind mailing the letter at a mailbox, then checking her calendar for the board's next scheduled meeting.",
    story:
      "I submit the formal appeal, along with a request to present my case in person at the board's next scheduled meeting. Mr. Ashworth confirms receipt promptly, mentioning the board will review my request during their meeting in two weeks. While waiting, I continue maintaining the garden carefully, wanting to demonstrate genuine commitment rather than treating this as a temporary display. A neighbor mentions she'd support my appeal if asked, having admired the garden since I'd first planted it. This small gesture of support, given how uncertain the outcome feels, genuinely encourages me moving forward.",
    questions: [
      "What does Rosalind submit along with the formal appeal?",
      "What does Mr. Ashworth confirm?",
      "What does a neighbor mention?",
    ],
    trueFalse: [
      { text: "Rosalind requests to present her case in person at the meeting.", answer: true },
      { text: "Mr. Ashworth confirms receipt promptly.", answer: true },
      { text: "The board will review her request in two weeks.", answer: true },
      { text: "A neighbor mentions she opposes Rosalind's garden entirely.", answer: false },
      { text: "This small gesture of support encourages Rosalind.", answer: true },
    ],
    buildSentence: [
      { target: "I submit the formal appeal now.", jumbled: ["I", "submit", "the", "formal", "appeal", "now."] },
      { target: "He confirms receipt promptly today.", jumbled: ["He", "confirms", "receipt", "promptly", "today."] },
      { target: "This genuinely encourages me moving forward.", jumbled: ["This", "genuinely", "encourages", "me", "moving", "forward."] },
      { target: "The board will review my request in two weeks.", jumbled: ["The", "board", "will", "review", "my", "request", "in", "two", "weeks."] },
      { target: "She'd support my appeal if asked, a neighbor mentions.", jumbled: ["She'd", "support", "my", "appeal", "if", "asked,", "a", "neighbor", "mentions."] },
    ],
    mySentencePrompt: "Write or say one sentence about submitting a formal appeal and waiting for a decision.",
    mySentenceExample: "I submitted a formal appeal and waited for their decision.",
  },
  {
    number: 5,
    title: "Presenting to the Board",
    image: null,
    imageNote: "Rosalind standing before a small board table, presenting photos on a laptop to several seated board members.",
    story:
      "At the meeting, I present my case calmly, walking the board through the photographs, the relevant bylaw, and the neighborhood precedent I'd found. Mr. Ashworth asks several clarifying questions, particularly about long-term maintenance and how the garden might look during winter months. I answer honestly, admitting the garden looks less vibrant seasonally, though I'd be willing to add borders for a more polished appearance. One board member mentions appreciating that I'd approached this respectfully rather than simply ignoring the original violation notice. Given the board's attentive questions, I sense they're genuinely considering this request rather than merely going through procedural motions.",
    questions: [
      "What does Rosalind walk the board through?",
      "What does Mr. Ashworth ask clarifying questions about?",
      "What does Rosalind offer to do?",
    ],
    trueFalse: [
      { text: "Rosalind walks the board through photographs, bylaws, and precedent.", answer: true },
      { text: "Mr. Ashworth asks about long-term maintenance and winter appearance.", answer: true },
      { text: "Rosalind claims the garden looks perfect year-round.", answer: false },
      { text: "Rosalind offers to add borders for a more polished appearance.", answer: true },
      { text: "Rosalind senses the board is genuinely considering this request.", answer: true },
    ],
    buildSentence: [
      { target: "I present my case calmly now.", jumbled: ["I", "present", "my", "case", "calmly", "now."] },
      { target: "I answer honestly about this.", jumbled: ["I", "answer", "honestly", "about", "this."] },
      { target: "I'd be willing to add borders.", jumbled: ["I'd", "be", "willing", "to", "add", "borders."] },
      { target: "This looks less vibrant seasonally, I admit.", jumbled: ["This", "looks", "less", "vibrant", "seasonally,", "I", "admit."] },
      { target: "I sense they're genuinely considering this request.", jumbled: ["I", "sense", "they're", "genuinely", "considering", "this", "request."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a case honestly, including its potential weaknesses.",
    mySentenceExample: "I presented my case honestly, including its potential weaknesses.",
  },
  {
    number: 6,
    title: "The Board's Decision",
    image: null,
    imageNote: "Mr. Ashworth reading an official decision aloud to Rosalind at a follow-up meeting, both looking composed.",
    story:
      "A week later, Mr. Ashworth calls to inform me the board has approved my exception, with one specific condition attached. They'd like me to add a small decorative border, similar to what I'd already offered, to maintain visual consistency with neighboring properties. I agree readily, genuinely relieved that a compromise had been reached rather than an outright rejection of my request. Mr. Ashworth mentions this exception will now be documented, potentially serving as precedent for similar future requests from other homeowners. Hanging up, I feel proud that respectful, well-prepared negotiation had actually produced a positive outcome.",
    questions: [
      "What does Mr. Ashworth call to inform Rosalind?",
      "What condition is attached to the approval?",
      "What does Mr. Ashworth mention about this exception?",
    ],
    trueFalse: [
      { text: "Mr. Ashworth calls to inform her the board approved her exception.", answer: true },
      { text: "The condition is adding a small decorative border.", answer: true },
      { text: "Rosalind refuses to agree to this condition.", answer: false },
      { text: "This exception will be documented as potential precedent.", answer: true },
      { text: "Rosalind feels proud this negotiation produced a positive outcome.", answer: true },
    ],
    buildSentence: [
      { target: "He calls to inform me now.", jumbled: ["He", "calls", "to", "inform", "me", "now."] },
      { target: "I agree readily to this.", jumbled: ["I", "agree", "readily", "to", "this."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "This will now be documented as precedent.", jumbled: ["This", "will", "now", "be", "documented", "as", "precedent."] },
      { target: "A compromise had been reached, not an outright rejection.", jumbled: ["A", "compromise", "had", "been", "reached,", "not", "an", "outright", "rejection."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving approval after negotiating a fair compromise.",
    mySentenceExample: "I received approval after negotiating a fair compromise.",
  },
  {
    number: 7,
    title: "Adding the Border",
    image: null,
    imageNote: "Rosalind kneeling in her front yard, installing a small decorative border around the vegetable garden.",
    story:
      "Over the following weekend, I install a simple decorative border, exactly as agreed upon during the board's approval process. The garden now looks noticeably more polished, blending the practical vegetables with a more intentional, cohesive visual design overall. A few neighbors stop by, complimenting the improved appearance and asking genuinely curious questions about the vegetables I'm growing. One neighbor mentions she might request a similar exception herself, inspired by seeing how mine had ultimately turned out. I feel satisfied that resolving this respectfully had, in a small way, opened a door for others too.",
    questions: [
      "What does Rosalind install over the following weekend?",
      "How does the garden look now?",
      "What does one neighbor mention?",
    ],
    trueFalse: [
      { text: "Rosalind installs a simple decorative border.", answer: true },
      { text: "The garden now looks noticeably more polished.", answer: true },
      { text: "No neighbors show any interest in the garden.", answer: false },
      { text: "One neighbor mentions she might request a similar exception.", answer: true },
      { text: "Rosalind feels this opened a door for others too.", answer: true },
    ],
    buildSentence: [
      { target: "I install a decorative border now.", jumbled: ["I", "install", "a", "decorative", "border", "now."] },
      { target: "A few neighbors stop by today.", jumbled: ["A", "few", "neighbors", "stop", "by", "today."] },
      { target: "I feel satisfied about this now.", jumbled: ["I", "feel", "satisfied", "about", "this", "now."] },
      { target: "The garden now looks noticeably more polished.", jumbled: ["The", "garden", "now", "looks", "noticeably", "more", "polished."] },
      { target: "This opened a door for others too, in a small way.", jumbled: ["This", "opened", "a", "door", "for", "others", "too,", "in", "a", "small", "way."] },
    ],
    mySentencePrompt: "Write or say one sentence about completing a compromise you agreed to during a negotiation.",
    mySentenceExample: "I completed the compromise I agreed to during the negotiation.",
  },
  {
    number: 8,
    title: "A Written Thank-You",
    image: null,
    imageNote: "Rosalind at her laptop writing a thank-you email to Mr. Ashworth and the board.",
    story:
      "I write a brief thank-you email to Mr. Ashworth and the board, appreciating their willingness to consider my request thoughtfully. I mention that I understand guidelines exist for good reason, and I respect the board's role in maintaining neighborhood consistency generally. Nevertheless, I express genuine gratitude that they'd been open to a reasonable exception rather than enforcing rigid, blanket compliance regardless of context. Mr. Ashworth replies warmly, saying he appreciated how I'd approached the entire situation professionally from the very beginning. This exchange, small as it is, leaves me feeling genuinely positive about my relationship with the community's governance.",
    questions: [
      "What does Rosalind write to Mr. Ashworth and the board?",
      "What does Rosalind mention understanding?",
      "How does Mr. Ashworth reply?",
    ],
    trueFalse: [
      { text: "Rosalind writes a brief thank-you email to the board.", answer: true },
      { text: "Rosalind mentions she understands guidelines exist for good reason.", answer: true },
      { text: "Rosalind expresses no gratitude for the board's flexibility.", answer: false },
      { text: "Mr. Ashworth replies warmly, appreciating her professionalism.", answer: true },
      { text: "Rosalind feels genuinely positive about the community's governance.", answer: true },
    ],
    buildSentence: [
      { target: "I write a brief thank-you email.", jumbled: ["I", "write", "a", "brief", "thank-you", "email."] },
      { target: "He replies warmly to this.", jumbled: ["He", "replies", "warmly", "to", "this."] },
      { target: "I respect the board's role generally.", jumbled: ["I", "respect", "the", "board's", "role", "generally."] },
      { target: "I express genuine gratitude for their flexibility.", jumbled: ["I", "express", "genuine", "gratitude", "for", "their", "flexibility."] },
      { target: "This leaves me feeling genuinely positive about this relationship.", jumbled: ["This", "leaves", "me", "feeling", "genuinely", "positive", "about", "this", "relationship."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a thank-you note after a fair resolution to a dispute.",
    mySentenceExample: "I wrote a thank-you note after a fair resolution to our dispute.",
  },
  {
    number: 9,
    title: "Helping a Neighbor",
    image: null,
    imageNote: "Rosalind sitting with her neighbor at an outdoor table, reviewing the neighbor's own garden proposal together.",
    story:
      "The neighbor who'd mentioned interest earlier now asks for my help drafting her own exception request, inspired by how mine had unfolded. I walk her through what worked well: referencing specific bylaws, including photographic evidence, and framing the request collaboratively rather than confrontationally. She admits she'd initially assumed challenging an HOA decision meant automatic conflict, an assumption my experience had apparently corrected. I explain that, in my experience, most disputes like this stem from miscommunication rather than genuine, irreconcilable disagreement. Watching her leave feeling more confident, I realize this experience had value extending well beyond my own garden.",
    questions: [
      "What does the neighbor ask Rosalind for help with?",
      "What does Rosalind walk her through?",
      "What had the neighbor initially assumed?",
    ],
    trueFalse: [
      { text: "The neighbor asks Rosalind for help drafting her own request.", answer: true },
      { text: "Rosalind walks her through referencing bylaws and using evidence.", answer: true },
      { text: "The neighbor had initially assumed challenging the HOA meant automatic conflict.", answer: true },
      { text: "Rosalind says most disputes stem from irreconcilable disagreement.", answer: false },
      { text: "Rosalind realizes this experience had value beyond her own garden.", answer: true },
    ],
    buildSentence: [
      { target: "She asks for my help now.", jumbled: ["She", "asks", "for", "my", "help", "now."] },
      { target: "I walk her through this now.", jumbled: ["I", "walk", "her", "through", "this", "now."] },
      { target: "She admits this about herself.", jumbled: ["She", "admits", "this", "about", "herself."] },
      { target: "This stems from miscommunication, not irreconcilable disagreement.", jumbled: ["This", "stems", "from", "miscommunication,", "not", "irreconcilable", "disagreement."] },
      { target: "This experience had value extending well beyond my own garden.", jumbled: ["This", "experience", "had", "value", "extending", "well", "beyond", "my", "own", "garden."] },
    ],
    mySentencePrompt: "Write or say one sentence about helping someone else using what you learned from your own experience.",
    mySentenceExample: "I helped someone else using what I learned from my own experience.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Rosalind sitting on her front porch at sunset, garden visible and thriving in the yard, reflecting quietly.",
    story:
      "Looking back on the entire dispute, I realize how differently things might have unfolded had I simply removed the garden without question. If I had assumed the rule was absolute and non-negotiable, I would have missed a reasonable path that actually existed within the bylaws. Instead, researching thoroughly and approaching the board respectfully allowed me to reach an outcome that honored both the rules and my own genuine interests. I've learned that formal disputes, approached with preparation rather than frustration, often have more flexibility than they initially appear to allow. In the end, this experience taught me that advocating for something you value is worth the effort required to do it properly.",
    questions: [
      "What does Rosalind realize looking back on the dispute?",
      "What might have happened if she had simply removed the garden?",
      "What has Rosalind learned about formal disputes?",
    ],
    trueFalse: [
      { text: "Rosalind realizes things might have gone differently without questioning the rule.", answer: true },
      { text: "Assuming the rule was absolute might have meant missing a real solution.", answer: true },
      { text: "Rosalind believes formal disputes never have any flexibility.", answer: false },
      { text: "Rosalind learns disputes often have more flexibility than they appear.", answer: true },
      { text: "Rosalind learns advocating for something valued is worth the effort.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this dispute now.", jumbled: ["I", "look", "back", "on", "this", "dispute", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "This is worth the effort required to do it properly.", jumbled: ["This", "is", "worth", "the", "effort", "required", "to", "do", "it", "properly."] },
      { target: "Formal disputes often have more flexibility than they appear.", jumbled: ["Formal", "disputes", "often", "have", "more", "flexibility", "than", "they", "appear."] },
      { target: "Had I assumed this rule was absolute, I would have missed a solution.", jumbled: ["Had", "I", "assumed", "this", "rule", "was", "absolute,", "I", "would", "have", "missed", "a", "solution."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a formal dispute respectfully.",
    mySentenceExample: "I learned that respectful negotiation often reveals more flexibility than expected.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

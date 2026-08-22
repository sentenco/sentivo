// B2 Adults digital storybook, Book 80: "Proposing a Change to Company Policy"
// Static content -- no Supabase. Eighth and final book in the B2
// Adults batch (73-80). Internal formal-proposal/negotiation
// scenario, matching the B2 Adults spec's explicit "Write/Synthesize
// (genre-aware output)" focus -- distinct from the other 7 books'
// negotiation contexts (salary, coworker mediation, vendor contract,
// HOA, insurance, business partnership, rent). Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Proposing a Change to Company Policy";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Adaeze sitting at her desk drafting a formal proposal document on her laptop, sticky notes with employee feedback pinned nearby.";

export const CHARACTERS = [
  { name: "Adaeze", role: "The narrator, a mid-level manager proposing a policy change", look: "Organized, methodical, respected for thorough, evidence-based work." },
  { name: "Mr. Castellano", role: "The company's operations director", look: "Pragmatic, focused on measurable outcomes, open to well-supported proposals." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Recurring Complaint",
    image: null,
    imageNote: "Adaeze sitting at her desk, reviewing anonymous feedback survey results on her laptop, thoughtful expression.",
    story:
      "Reviewing this quarter's anonymous employee survey, I notice a recurring theme: many employees feel the current two-fixed-office-days policy lacks meaningful flexibility. Several comments mention that commuting on specific mandated days, regardless of actual workload, feels unnecessarily rigid given how remote work has generally proven effective. As a manager, I've noticed this myself, particularly among employees managing childcare or long commutes on inconvenient scheduled days. Given how consistently this concern appears across departments, I suspect this isn't simply isolated complaining, but a genuine, addressable problem. I decide I'll research this further before considering whether proposing a policy change might actually be worthwhile.",
    questions: [
      "What recurring theme does Adaeze notice in the survey?",
      "What do several comments mention about commuting?",
      "What does Adaeze decide to do?",
    ],
    trueFalse: [
      { text: "Adaeze notices a recurring theme about office-day flexibility.", answer: true },
      { text: "Several comments mention commuting on mandated days feels rigid.", answer: true },
      { text: "Adaeze dismisses this as isolated complaining immediately.", answer: false },
      { text: "This concern appears consistently across departments.", answer: true },
      { text: "Adaeze decides to research this further.", answer: true },
    ],
    buildSentence: [
      { target: "I notice a recurring theme now.", jumbled: ["I", "notice", "a", "recurring", "theme", "now."] },
      { target: "I've noticed this myself too.", jumbled: ["I've", "noticed", "this", "myself", "too."] },
      { target: "I decide to research this further.", jumbled: ["I", "decide", "to", "research", "this", "further."] },
      { target: "This isn't simply isolated complaining.", jumbled: ["This", "isn't", "simply", "isolated", "complaining."] },
      { target: "This feels unnecessarily rigid given how remote work has proven effective.", jumbled: ["This", "feels", "unnecessarily", "rigid", "given", "how", "remote", "work", "has", "proven", "effective."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a recurring complaint that seemed worth addressing seriously.",
    mySentenceExample: "I noticed a recurring complaint that seemed worth addressing seriously.",
  },
  {
    number: 2,
    title: "Gathering Evidence",
    image: null,
    imageNote: "Adaeze compiling survey data, productivity metrics, and comparison research into an organized document.",
    story:
      "I compile the relevant survey data, along with productivity metrics from the past year comparing office days versus remote work days specifically. The data suggests no meaningful productivity difference exists, which weakens the traditional argument that mandated office days genuinely improve output. I also research what comparable companies in our industry currently offer, discovering that flexible, employee-chosen office days have become increasingly common. Moreover, I interview a few colleagues directly, gathering specific examples of how rigid scheduling had created genuine difficulty for them personally. Armed with this evidence, I feel confident that a formal proposal would be grounded in data, not simply preference.",
    questions: [
      "What does Adaeze compile?",
      "What does the productivity data suggest?",
      "What does Adaeze discover about comparable companies?",
    ],
    trueFalse: [
      { text: "Adaeze compiles survey data and productivity metrics.", answer: true },
      { text: "The data suggests no meaningful productivity difference exists.", answer: true },
      { text: "Comparable companies rarely offer flexible office days.", answer: false },
      { text: "Adaeze interviews colleagues to gather specific examples.", answer: true },
      { text: "Adaeze feels confident this proposal is grounded in data.", answer: true },
    ],
    buildSentence: [
      { target: "I compile the relevant data now.", jumbled: ["I", "compile", "the", "relevant", "data", "now."] },
      { target: "I interview a few colleagues directly.", jumbled: ["I", "interview", "a", "few", "colleagues", "directly."] },
      { target: "I feel confident about this now.", jumbled: ["I", "feel", "confident", "about", "this", "now."] },
      { target: "This weakens the traditional argument considerably.", jumbled: ["This", "weakens", "the", "traditional", "argument", "considerably."] },
      { target: "Flexible, employee-chosen office days have become increasingly common.", jumbled: ["Flexible,", "employee-chosen", "office", "days", "have", "become", "increasingly", "common."] },
    ],
    mySentencePrompt: "Write or say one sentence about gathering evidence before proposing a change at work.",
    mySentenceExample: "I gathered evidence before proposing a change at work.",
  },
  {
    number: 3,
    title: "Drafting the Proposal",
    image: null,
    imageNote: "Adaeze at her laptop writing a formal document, headers visible for 'Background,' 'Data,' and 'Recommendation.'",
    story:
      "I draft a formal proposal, structuring it clearly with sections for background, supporting data, and a specific, actionable recommendation. Rather than simply criticizing the current policy, I frame the proposal constructively, emphasizing how flexibility could genuinely improve both morale and measurable outcomes. I recommend replacing fixed office days with a flexible, department-coordinated system, ensuring teams could still collaborate effectively when needed. Moreover, I include a proposed trial period, allowing the company to evaluate this change before committing to it permanently. Reading my draft back, I feel it strikes the right balance between advocacy and genuine professional objectivity.",
    questions: [
      "How does Adaeze structure her proposal?",
      "What does Adaeze recommend replacing fixed office days with?",
      "What does Adaeze include to allow evaluation before permanence?",
    ],
    trueFalse: [
      { text: "Adaeze structures the proposal with background, data, and recommendation.", answer: true },
      { text: "Adaeze recommends a flexible, department-coordinated system.", answer: true },
      { text: "Adaeze frames the proposal purely as criticism of the current policy.", answer: false },
      { text: "Adaeze includes a proposed trial period.", answer: true },
      { text: "Adaeze feels this strikes a balance between advocacy and objectivity.", answer: true },
    ],
    buildSentence: [
      { target: "I draft a formal proposal now.", jumbled: ["I", "draft", "a", "formal", "proposal", "now."] },
      { target: "I include a proposed trial period.", jumbled: ["I", "include", "a", "proposed", "trial", "period."] },
      { target: "I frame this proposal constructively instead.", jumbled: ["I", "frame", "this", "proposal", "constructively", "instead."] },
      { target: "Teams could still collaborate effectively when needed.", jumbled: ["Teams", "could", "still", "collaborate", "effectively", "when", "needed."] },
      { target: "This strikes the right balance between advocacy and objectivity.", jumbled: ["This", "strikes", "the", "right", "balance", "between", "advocacy", "and", "objectivity."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal proposal that recommends a specific, actionable change.",
    mySentenceExample: "I wrote a formal proposal that recommended a specific, actionable change.",
  },
  {
    number: 4,
    title: "Sharing with Colleagues",
    image: null,
    imageNote: "Adaeze sharing her draft proposal with two colleagues in a meeting room, all three reviewing it together.",
    story:
      "Before submitting the proposal formally, I share the draft with two trusted colleagues, wanting honest feedback before it reaches leadership. One colleague suggests strengthening the data section with a specific example of a team that successfully piloted flexible scheduling elsewhere. Another mentions the proposal could address potential concerns preemptively, such as how client-facing roles might handle the increased flexibility. I incorporate both suggestions, recognizing that anticipating objections strengthens a proposal far more than simply hoping none arise. This collaborative revision process, though it takes extra time, genuinely improves the proposal's overall persuasiveness and thoroughness.",
    questions: [
      "What does Adaeze do before submitting the proposal formally?",
      "What does one colleague suggest strengthening?",
      "What does another colleague mention the proposal could address?",
    ],
    trueFalse: [
      { text: "Adaeze shares the draft with two trusted colleagues first.", answer: true },
      { text: "One colleague suggests strengthening the data section with an example.", answer: true },
      { text: "Another colleague mentions addressing client-facing role concerns.", answer: true },
      { text: "Adaeze ignores both suggestions and submits the original draft.", answer: false },
      { text: "This revision process improves the proposal's persuasiveness.", answer: true },
    ],
    buildSentence: [
      { target: "I share the draft first now.", jumbled: ["I", "share", "the", "draft", "first", "now."] },
      { target: "I incorporate both suggestions now.", jumbled: ["I", "incorporate", "both", "suggestions", "now."] },
      { target: "This takes extra time, though.", jumbled: ["This", "takes", "extra", "time,", "though."] },
      { target: "Anticipating objections strengthens a proposal considerably.", jumbled: ["Anticipating", "objections", "strengthens", "a", "proposal", "considerably."] },
      { target: "This genuinely improves the proposal's overall persuasiveness.", jumbled: ["This", "genuinely", "improves", "the", "proposal's", "overall", "persuasiveness."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking colleagues for honest feedback before submitting something formal.",
    mySentenceExample: "I asked colleagues for honest feedback before submitting the proposal.",
  },
  {
    number: 5,
    title: "Submitting to Leadership",
    image: null,
    imageNote: "Adaeze sending an email with the attached proposal document, Mr. Castellano's name visible in the recipient field.",
    story:
      "I submit the revised proposal to Mr. Castellano, along with a brief cover note summarizing the key recommendation concisely upfront. He responds within a day, mentioning he'd read it thoroughly and would like to discuss it further during a scheduled meeting. I feel a mixture of nervousness and cautious optimism, given how thoroughly I'd prepared this proposal over several weeks. Walking into his office, I remind myself that regardless of the outcome, I'd approached this professionally and evidence-based throughout. Whatever happens next, I know I've genuinely done everything reasonably possible to advocate for this change effectively.",
    questions: [
      "Who does Adaeze submit the revised proposal to?",
      "How does Mr. Castellano respond?",
      "How does Adaeze feel walking into his office?",
    ],
    trueFalse: [
      { text: "Adaeze submits the revised proposal to Mr. Castellano.", answer: true },
      { text: "Mr. Castellano responds within a day, wanting to discuss it.", answer: true },
      { text: "Adaeze feels a mixture of nervousness and cautious optimism.", answer: true },
      { text: "Mr. Castellano ignores the proposal entirely.", answer: false },
      { text: "Adaeze feels she's done everything reasonably possible.", answer: true },
    ],
    buildSentence: [
      { target: "I submit the revised proposal now.", jumbled: ["I", "submit", "the", "revised", "proposal", "now."] },
      { target: "He responds within a day now.", jumbled: ["He", "responds", "within", "a", "day", "now."] },
      { target: "I feel cautiously optimistic about this.", jumbled: ["I", "feel", "cautiously", "optimistic", "about", "this."] },
      { target: "I've approached this professionally and evidence-based throughout.", jumbled: ["I've", "approached", "this", "professionally", "and", "evidence-based", "throughout."] },
      { target: "I've genuinely done everything reasonably possible to advocate for this.", jumbled: ["I've", "genuinely", "done", "everything", "reasonably", "possible", "to", "advocate", "for", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about submitting a well-prepared proposal and waiting for a response.",
    mySentenceExample: "I submitted a well-prepared proposal and waited for a response.",
  },
  {
    number: 6,
    title: "Discussing the Proposal",
    image: null,
    imageNote: "Adaeze and Mr. Castellano sitting across from each other, the printed proposal on the desk between them, both engaged in discussion.",
    story:
      "Mr. Castellano opens the meeting by acknowledging the proposal's thoroughness, particularly appreciating the productivity data I'd included. He raises one concern: whether completely flexible scheduling might make cross-team collaboration meetings harder to coordinate effectively. I explain that the proposal actually addresses this, suggesting department-level coordination rather than fully individual, unstructured flexibility. He reconsiders the document, acknowledging he'd initially misread that particular section during his first review. Given this clarification, he seems considerably more receptive, mentioning this addresses his primary concern about maintaining operational coherence.",
    questions: [
      "What does Mr. Castellano acknowledge about the proposal?",
      "What concern does Mr. Castellano raise?",
      "What does Adaeze explain about the proposal?",
    ],
    trueFalse: [
      { text: "Mr. Castellano acknowledges the proposal's thoroughness.", answer: true },
      { text: "Mr. Castellano raises a concern about cross-team collaboration.", answer: true },
      { text: "Adaeze explains the proposal suggests department-level coordination.", answer: true },
      { text: "Mr. Castellano refuses to reconsider his initial reading.", answer: false },
      { text: "Mr. Castellano seems considerably more receptive after clarification.", answer: true },
    ],
    buildSentence: [
      { target: "He opens the meeting now.", jumbled: ["He", "opens", "the", "meeting", "now."] },
      { target: "He raises one concern here.", jumbled: ["He", "raises", "one", "concern", "here."] },
      { target: "I explain this addresses his concern.", jumbled: ["I", "explain", "this", "addresses", "his", "concern."] },
      { target: "He seems considerably more receptive now.", jumbled: ["He", "seems", "considerably", "more", "receptive", "now."] },
      { target: "He'd initially misread that particular section.", jumbled: ["He'd", "initially", "misread", "that", "particular", "section."] },
    ],
    mySentencePrompt: "Write or say one sentence about clarifying a misunderstanding during an important discussion.",
    mySentenceExample: "I clarified a misunderstanding during the important discussion.",
  },
  {
    number: 7,
    title: "Approval with Conditions",
    image: null,
    imageNote: "Mr. Castellano signing off on a document, Adaeze looking relieved and pleased across the desk.",
    story:
      "Mr. Castellano approves the proposal for a three-month trial period, with a formal review scheduled afterward to assess its actual effectiveness. He asks that I personally track specific metrics during the trial, ensuring the company has clear data for the final decision. I agree readily, recognizing that this responsibility, while additional work, also gives me genuine ownership over the outcome. He thanks me for bringing forward a well-researched, professionally presented proposal rather than informal, unstructured complaints. Leaving his office, I feel genuinely proud, not just of the approval, but of the entire process that led here.",
    questions: [
      "What does Mr. Castellano approve?",
      "What does Mr. Castellano ask Adaeze to do during the trial?",
      "What does Mr. Castellano thank Adaeze for?",
    ],
    trueFalse: [
      { text: "Mr. Castellano approves a three-month trial period.", answer: true },
      { text: "Mr. Castellano asks Adaeze to personally track specific metrics.", answer: true },
      { text: "Adaeze refuses to take on this additional responsibility.", answer: false },
      { text: "Mr. Castellano thanks her for a well-researched proposal.", answer: true },
      { text: "Adaeze feels genuinely proud of the entire process.", answer: true },
    ],
    buildSentence: [
      { target: "He approves the proposal now.", jumbled: ["He", "approves", "the", "proposal", "now."] },
      { target: "I agree readily to this.", jumbled: ["I", "agree", "readily", "to", "this."] },
      { target: "I feel genuinely proud of this.", jumbled: ["I", "feel", "genuinely", "proud", "of", "this."] },
      { target: "This gives me genuine ownership over the outcome.", jumbled: ["This", "gives", "me", "genuine", "ownership", "over", "the", "outcome."] },
      { target: "He thanks me for bringing forward a well-researched proposal.", jumbled: ["He", "thanks", "me", "for", "bringing", "forward", "a", "well-researched", "proposal."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving approval for a proposal you worked hard to prepare.",
    mySentenceExample: "I received approval for the proposal I worked hard to prepare.",
  },
  {
    number: 8,
    title: "Tracking the Trial",
    image: null,
    imageNote: "Adaeze at her desk reviewing a spreadsheet tracking productivity and satisfaction metrics during the trial period.",
    story:
      "Throughout the trial period, I track productivity metrics and collect brief, informal feedback from employees about how the flexibility feels in practice. Most feedback is overwhelmingly positive, with several employees mentioning genuine improvements to their work-life balance and overall morale. A few minor scheduling conflicts arise, though department coordination generally resolves these without significant disruption to broader projects. I document everything carefully, wanting the final review to reflect an accurate, comprehensive picture rather than selective, favorable anecdotes alone. This tracking process, though time-consuming, ensures the eventual decision will be grounded in genuine evidence, not simply my own advocacy.",
    questions: [
      "What does Adaeze track throughout the trial period?",
      "How does most feedback turn out?",
      "Why does Adaeze document everything carefully?",
    ],
    trueFalse: [
      { text: "Adaeze tracks productivity metrics and collects employee feedback.", answer: true },
      { text: "Most feedback is overwhelmingly positive.", answer: true },
      { text: "A few minor scheduling conflicts arise during the trial.", answer: true },
      { text: "Adaeze only documents selective, favorable feedback.", answer: false },
      { text: "This tracking ensures the decision is grounded in genuine evidence.", answer: true },
    ],
    buildSentence: [
      { target: "I track productivity metrics now.", jumbled: ["I", "track", "productivity", "metrics", "now."] },
      { target: "Most feedback is overwhelmingly positive.", jumbled: ["Most", "feedback", "is", "overwhelmingly", "positive."] },
      { target: "I document everything carefully now.", jumbled: ["I", "document", "everything", "carefully", "now."] },
      { target: "This resolves these without significant disruption.", jumbled: ["This", "resolves", "these", "without", "significant", "disruption."] },
      { target: "This ensures the decision will be grounded in genuine evidence.", jumbled: ["This", "ensures", "the", "decision", "will", "be", "grounded", "in", "genuine", "evidence."] },
    ],
    mySentencePrompt: "Write or say one sentence about tracking results carefully during a trial period.",
    mySentenceExample: "I tracked results carefully throughout the trial period.",
  },
  {
    number: 9,
    title: "The Final Review",
    image: null,
    imageNote: "Adaeze presenting a summary report to Mr. Castellano and a small leadership group, all reviewing charts together.",
    story:
      "At the final review meeting, I present a comprehensive summary of the trial's outcomes, including both the positive results and minor challenges encountered. Mr. Castellano and the broader leadership team review the data carefully, asking thoughtful questions about long-term sustainability and potential edge cases. Given the overwhelmingly positive results, leadership decides to formally adopt the flexible scheduling policy company-wide, effective the following month. Mr. Castellano publicly credits my thorough, evidence-based approach with making this decision considerably easier for leadership to support confidently. Hearing this acknowledgment, I feel that months of careful preparation had genuinely culminated in something meaningful.",
    questions: [
      "What does Adaeze present at the final review meeting?",
      "What does leadership decide given the results?",
      "What does Mr. Castellano publicly credit?",
    ],
    trueFalse: [
      { text: "Adaeze presents a comprehensive summary of the trial's outcomes.", answer: true },
      { text: "Leadership decides to formally adopt the policy company-wide.", answer: true },
      { text: "Mr. Castellano credits Adaeze's thorough, evidence-based approach.", answer: true },
      { text: "Leadership decides to reject the proposal entirely.", answer: false },
      { text: "Adaeze feels months of preparation culminated in something meaningful.", answer: true },
    ],
    buildSentence: [
      { target: "I present a comprehensive summary now.", jumbled: ["I", "present", "a", "comprehensive", "summary", "now."] },
      { target: "Leadership decides to adopt this policy.", jumbled: ["Leadership", "decides", "to", "adopt", "this", "policy."] },
      { target: "I feel this culminated in something meaningful.", jumbled: ["I", "feel", "this", "culminated", "in", "something", "meaningful."] },
      { target: "He publicly credits my thorough, evidence-based approach.", jumbled: ["He", "publicly", "credits", "my", "thorough,", "evidence-based", "approach."] },
      { target: "This made the decision considerably easier for leadership to support.", jumbled: ["This", "made", "the", "decision", "considerably", "easier", "for", "leadership", "to", "support."] },
    ],
    mySentencePrompt: "Write or say one sentence about a proposal being fully adopted after months of careful preparation.",
    mySentenceExample: "The proposal was fully adopted after months of careful preparation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Adaeze sitting at her desk, the original survey data and final approved policy document both visible, reflecting quietly.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply complained informally rather than proposing something structured. If I had raised this concern casually, without evidence or a clear recommendation, leadership likely would have had little reason to act. Instead, researching thoroughly, writing formally, and tracking results transparently allowed this idea to become genuine, lasting policy. I've learned that advocating for meaningful change at work requires more than identifying a problem; it requires proposing a workable solution. In the end, this experience taught me that patient, evidence-based persistence can genuinely transform how an entire organization operates.",
    questions: [
      "What does Adaeze realize looking back on the process?",
      "What might have happened if she had simply complained informally?",
      "What has Adaeze learned about advocating for meaningful change?",
    ],
    trueFalse: [
      { text: "Adaeze realizes things might have gone differently without structure.", answer: true },
      { text: "Complaining informally without evidence likely wouldn't have prompted action.", answer: true },
      { text: "Adaeze believes identifying a problem alone is usually enough.", answer: false },
      { text: "Adaeze learns advocating for change requires proposing a workable solution.", answer: true },
      { text: "Adaeze learns patient, evidence-based persistence can transform an organization.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "This requires proposing a workable solution too.", jumbled: ["This", "requires", "proposing", "a", "workable", "solution", "too."] },
      { target: "Patient, evidence-based persistence can genuinely transform an organization.", jumbled: ["Patient,", "evidence-based", "persistence", "can", "genuinely", "transform", "an", "organization."] },
      { target: "Had I complained informally, leadership likely would have had little reason to act.", jumbled: ["Had", "I", "complained", "informally,", "leadership", "likely", "would", "have", "had", "little", "reason", "to", "act."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from proposing a well-researched change at work.",
    mySentenceExample: "I learned that proposing a well-researched change can transform a workplace.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

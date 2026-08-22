// B2 Adults digital storybook, Book 73: "Negotiating a Salary Raise"
// Static content -- no Supabase. First book in a new B2 Adults batch
// (Books 73-80) -- Adults has been A1/A2/B1-only until now; this is
// the first B2 Adults content. Calibrated to the sourced B2 Adults
// spec (see memory project_b2_level_jump_and_approach): negotiation/
// mediation core drive, "instrumental relevance," full B2 grammar
// range (past perfect, present perfect + continuous, full modal
// nuance including may/might/ought to, first/second/selective-third
// conditional), explicit discourse markers (however, moreover,
// nevertheless, given that, in light of, as a result), and genre-
// aware writing woven into the narrative -- distinct register from
// the B1 Adults batch (57-64), which centered on service/incident
// resolution rather than deliberate negotiation. Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "Negotiating a Salary Raise";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Naomi sitting at her desk reviewing printed notes before a meeting, a calendar reminder for 'Salary Review' visible on her monitor.";

export const CHARACTERS = [
  { name: "Naomi", role: "The narrator, a mid-level analyst preparing to negotiate a raise", look: "Blazer, organized folder of notes, composed but visibly nervous." },
  { name: "Mr. Delacroix", role: "Naomi's department director", look: "Measured, values preparation, respects direct but respectful negotiation." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Deciding to Ask",
    image: null,
    imageNote: "Naomi sitting at her desk after hours, reviewing a spreadsheet of her recent project contributions.",
    story:
      "After reviewing my contributions over the past year, I conclude that my current salary no longer reflects my actual responsibilities. I'd taken on two major projects beyond my original role, yet my compensation hadn't been adjusted to account for either. Colleagues in similar positions, I'd discreetly learned, were earning noticeably more, which only reinforced my growing sense that something needed addressing. Rather than simply feeling resentful, I decide the more productive path is requesting a formal conversation about compensation. Given how uncomfortable this conversation might become, I know I'll need to prepare far more thoroughly than I initially assumed.",
    questions: [
      "What does Naomi conclude after reviewing her contributions?",
      "What had Naomi taken on beyond her original role?",
      "What does Naomi decide to do instead of feeling resentful?",
    ],
    trueFalse: [
      { text: "Naomi concludes her salary no longer reflects her responsibilities.", answer: true },
      { text: "Naomi had taken on two major projects beyond her original role.", answer: true },
      { text: "Naomi learned colleagues in similar positions were earning less.", answer: false },
      { text: "Naomi decides to request a formal conversation about compensation.", answer: true },
      { text: "Naomi knows this conversation will require thorough preparation.", answer: true },
    ],
    buildSentence: [
      { target: "I conclude this after reviewing everything.", jumbled: ["I", "conclude", "this", "after", "reviewing", "everything."] },
      { target: "I decide to request a formal conversation.", jumbled: ["I", "decide", "to", "request", "a", "formal", "conversation."] },
      { target: "This only reinforced my growing sense.", jumbled: ["This", "only", "reinforced", "my", "growing", "sense."] },
      { target: "My compensation hadn't been adjusted to account for either.", jumbled: ["My", "compensation", "hadn't", "been", "adjusted", "to", "account", "for", "either."] },
      { target: "I'll need to prepare far more thoroughly than I assumed.", jumbled: ["I'll", "need", "to", "prepare", "far", "more", "thoroughly", "than", "I", "assumed."] },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to have a difficult professional conversation instead of staying silent.",
    mySentenceExample: "I decided to have a difficult conversation instead of staying silent.",
  },
  {
    number: 2,
    title: "Building the Case",
    image: null,
    imageNote: "Naomi at her desk compiling a document, screenshots of project outcomes and metrics pinned to a corkboard beside her.",
    story:
      "Over the following week, I compile concrete evidence: project outcomes, measurable metrics, and written feedback from clients I'd worked with directly. I research typical salary ranges for my role and experience level, ensuring my request would be grounded in data rather than assumption. Moreover, I draft a clear summary of my expanded responsibilities, framing them not as complaints but as evidence of growth. I rehearse explaining this calmly, anticipating that Mr. Delacroix might push back or request additional justification. Having built what feels like a genuinely solid case, I schedule a meeting for the following Thursday afternoon.",
    questions: [
      "What does Naomi compile over the following week?",
      "What does Naomi research to ground her request?",
      "What does Naomi anticipate Mr. Delacroix might do?",
    ],
    trueFalse: [
      { text: "Naomi compiles project outcomes, metrics, and client feedback.", answer: true },
      { text: "Naomi researches typical salary ranges for her role.", answer: true },
      { text: "Naomi frames her responsibilities as complaints, not growth.", answer: false },
      { text: "Naomi anticipates Mr. Delacroix might push back.", answer: true },
      { text: "Naomi schedules a meeting for the following Thursday.", answer: true },
    ],
    buildSentence: [
      { target: "I compile concrete evidence now.", jumbled: ["I", "compile", "concrete", "evidence", "now."] },
      { target: "I research typical salary ranges.", jumbled: ["I", "research", "typical", "salary", "ranges."] },
      { target: "I schedule a meeting for Thursday.", jumbled: ["I", "schedule", "a", "meeting", "for", "Thursday."] },
      { target: "This would be grounded in data, not assumption.", jumbled: ["This", "would", "be", "grounded", "in", "data,", "not", "assumption."] },
      { target: "I rehearse explaining this calmly, anticipating pushback.", jumbled: ["I", "rehearse", "explaining", "this", "calmly,", "anticipating", "pushback."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing solid evidence before making an important request.",
    mySentenceExample: "I prepared solid evidence before making an important request.",
  },
  {
    number: 3,
    title: "Walking Into the Meeting",
    image: null,
    imageNote: "Naomi sitting across from Mr. Delacroix in his office, folder open on her lap, both looking composed.",
    story:
      "Thursday arrives, and I walk into Mr. Delacroix's office feeling more prepared than nervous, which surprises me somewhat. I open by thanking him for his time, then present my case clearly, referencing the projects and metrics I'd compiled. He listens attentively, occasionally jotting notes, which I take as a reasonably encouraging sign initially. When I finish, he acknowledges that my contributions have indeed grown significantly beyond my original job description. However, he mentions that budget constraints this quarter may limit how much flexibility he actually has available.",
    questions: [
      "How does Naomi feel walking into the meeting?",
      "What does Naomi do when she opens the meeting?",
      "What does Mr. Delacroix mention about budget constraints?",
    ],
    trueFalse: [
      { text: "Naomi feels more prepared than nervous walking in.", answer: true },
      { text: "Naomi opens by thanking Mr. Delacroix for his time.", answer: true },
      { text: "Mr. Delacroix denies that her contributions have grown.", answer: false },
      { text: "Mr. Delacroix mentions budget constraints this quarter.", answer: true },
      { text: "Mr. Delacroix listens attentively and jots notes.", answer: true },
    ],
    buildSentence: [
      { target: "I walk into his office now.", jumbled: ["I", "walk", "into", "his", "office", "now."] },
      { target: "He listens attentively to this.", jumbled: ["He", "listens", "attentively", "to", "this."] },
      { target: "This surprises me somewhat, honestly.", jumbled: ["This", "surprises", "me", "somewhat,", "honestly."] },
      { target: "My contributions have indeed grown significantly.", jumbled: ["My", "contributions", "have", "indeed", "grown", "significantly."] },
      { target: "Budget constraints this quarter may limit his flexibility.", jumbled: ["Budget", "constraints", "this", "quarter", "may", "limit", "his", "flexibility."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a clear, well-prepared case to someone in authority.",
    mySentenceExample: "I presented a clear, well-prepared case to my manager.",
  },
  {
    number: 4,
    title: "Navigating Pushback",
    image: null,
    imageNote: "Naomi leaning forward slightly, speaking calmly, Mr. Delacroix considering thoughtfully across the desk.",
    story:
      "Rather than accepting this as a final answer, I ask whether there might be alternative options given the budget limitations he'd mentioned. He considers this, suggesting perhaps a smaller immediate increase paired with a scheduled review in six months instead. I acknowledge this compromise seems reasonable, though I ask whether the six-month review could be formalized in writing. He agrees this seems fair, appreciating, he notes, that I'm approaching this collaboratively rather than simply demanding an outcome. This exchange, given how it unfolds, feels less like a confrontation and more like genuine problem-solving together.",
    questions: [
      "What does Naomi ask instead of accepting the answer as final?",
      "What does Mr. Delacroix suggest as a compromise?",
      "What does Naomi ask about the six-month review?",
    ],
    trueFalse: [
      { text: "Naomi asks whether there might be alternative options.", answer: true },
      { text: "Mr. Delacroix suggests a smaller increase with a scheduled review.", answer: true },
      { text: "Naomi refuses to consider any compromise at all.", answer: false },
      { text: "Naomi asks whether the review could be formalized in writing.", answer: true },
      { text: "Mr. Delacroix appreciates her collaborative approach.", answer: true },
    ],
    buildSentence: [
      { target: "I ask about alternative options now.", jumbled: ["I", "ask", "about", "alternative", "options", "now."] },
      { target: "He considers this thoughtfully now.", jumbled: ["He", "considers", "this", "thoughtfully", "now."] },
      { target: "This seems fair, he agrees.", jumbled: ["This", "seems", "fair,", "he", "agrees."] },
      { target: "This feels less like confrontation, more like problem-solving.", jumbled: ["This", "feels", "less", "like", "confrontation,", "more", "like", "problem-solving."] },
      { target: "Could the six-month review be formalized in writing?", jumbled: ["Could", "the", "six-month", "review", "be", "formalized", "in", "writing?"] },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a compromise instead of accepting a first answer.",
    mySentenceExample: "I proposed a compromise instead of accepting the first answer.",
  },
  {
    number: 5,
    title: "Reaching an Agreement",
    image: null,
    imageNote: "Naomi and Mr. Delacroix shaking hands across the desk, both looking satisfied, a printed agreement visible on the table.",
    story:
      "We agree on the terms: a modest raise effective immediately, with a formal, documented review scheduled for six months from now. Mr. Delacroix asks his assistant to draft a written confirmation, ensuring both of us have something concrete to reference later. I thank him for his openness, and he, in turn, thanks me for approaching the conversation professionally rather than emotionally. Leaving his office, I feel genuinely proud, not just of the outcome, but of how I'd managed the entire negotiation. This experience, I realize, has taught me something valuable about advocating for myself constructively.",
    questions: [
      "What do Naomi and Mr. Delacroix agree on?",
      "What does Mr. Delacroix ask his assistant to do?",
      "How does Naomi feel leaving his office?",
    ],
    trueFalse: [
      { text: "They agree on a modest raise with a documented six-month review.", answer: true },
      { text: "Mr. Delacroix asks his assistant to draft a written confirmation.", answer: true },
      { text: "Naomi feels disappointed leaving the office.", answer: false },
      { text: "Mr. Delacroix thanks Naomi for approaching this professionally.", answer: true },
      { text: "Naomi feels she learned something valuable about self-advocacy.", answer: true },
    ],
    buildSentence: [
      { target: "We agree on the terms now.", jumbled: ["We", "agree", "on", "the", "terms", "now."] },
      { target: "I feel genuinely proud of this.", jumbled: ["I", "feel", "genuinely", "proud", "of", "this."] },
      { target: "He thanks me for this too.", jumbled: ["He", "thanks", "me", "for", "this", "too."] },
      { target: "This has taught me something valuable.", jumbled: ["This", "has", "taught", "me", "something", "valuable."] },
      { target: "Both of us have something concrete to reference later.", jumbled: ["Both", "of", "us", "have", "something", "concrete", "to", "reference", "later."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a fair agreement after a professional negotiation.",
    mySentenceExample: "I reached a fair agreement after a professional negotiation.",
  },
  {
    number: 6,
    title: "Following Up in Writing",
    image: null,
    imageNote: "Naomi at her laptop, drafting a brief follow-up email summarizing the meeting's outcome.",
    story:
      "That evening, I draft a brief follow-up email to Mr. Delacroix, summarizing what we'd agreed on during our meeting. I keep the tone professional and appreciative, avoiding anything that might seem presumptuous or overly casual in writing. In the email, I reference the six-month review date specifically, ensuring there's a clear, shared record of our agreement. I also thank him again, noting that I genuinely appreciated his willingness to discuss this openly rather than dismissing my request outright. Sending the email, I feel satisfied that I'd handled this negotiation thoroughly, from preparation through to written follow-up.",
    questions: [
      "What does Naomi draft that evening?",
      "What tone does Naomi keep in the email?",
      "What does Naomi reference specifically in the email?",
    ],
    trueFalse: [
      { text: "Naomi drafts a brief follow-up email that evening.", answer: true },
      { text: "Naomi keeps the tone professional and appreciative.", answer: true },
      { text: "Naomi avoids mentioning the six-month review date at all.", answer: false },
      { text: "Naomi thanks Mr. Delacroix again in the email.", answer: true },
      { text: "Naomi feels satisfied she handled this thoroughly.", answer: true },
    ],
    buildSentence: [
      { target: "I draft a brief follow-up email.", jumbled: ["I", "draft", "a", "brief", "follow-up", "email."] },
      { target: "I keep the tone professional now.", jumbled: ["I", "keep", "the", "tone", "professional", "now."] },
      { target: "I feel satisfied about this now.", jumbled: ["I", "feel", "satisfied", "about", "this", "now."] },
      { target: "I reference the review date specifically.", jumbled: ["I", "reference", "the", "review", "date", "specifically."] },
      { target: "I appreciated his willingness to discuss this openly.", jumbled: ["I", "appreciated", "his", "willingness", "to", "discuss", "this", "openly."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing a follow-up message to confirm an agreement in writing.",
    mySentenceExample: "I wrote a follow-up message to confirm the agreement in writing.",
  },
  {
    number: 7,
    title: "Telling a Colleague",
    image: null,
    imageNote: "Naomi chatting with a colleague in the break room, both holding coffee mugs, the colleague looking impressed.",
    story:
      "During lunch, I mention the negotiation to a colleague, partly to share the outcome and partly to offer encouragement. She admits she's been considering a similar conversation herself but has felt too intimidated to actually schedule it. I explain that preparation made the biggest difference, since walking in with data rather than emotion changed the entire dynamic. Moreover, I mention that framing the conversation as collaborative, rather than confrontational, seemed to genuinely matter to how it unfolded. She thanks me for the insight, saying she now feels more confident about approaching her own manager eventually.",
    questions: [
      "What does Naomi mention during lunch?",
      "What has the colleague been considering but felt intimidated by?",
      "What does Naomi explain made the biggest difference?",
    ],
    trueFalse: [
      { text: "Naomi mentions the negotiation to a colleague during lunch.", answer: true },
      { text: "The colleague has been considering a similar conversation herself.", answer: true },
      { text: "Naomi explains that preparation made the biggest difference.", answer: true },
      { text: "Naomi says confrontation mattered more than collaboration.", answer: false },
      { text: "The colleague feels more confident after this conversation.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this during lunch.", jumbled: ["I", "mention", "this", "during", "lunch."] },
      { target: "She thanks me for this insight.", jumbled: ["She", "thanks", "me", "for", "this", "insight."] },
      { target: "Preparation made the biggest difference here.", jumbled: ["Preparation", "made", "the", "biggest", "difference", "here."] },
      { target: "She's felt too intimidated to schedule it.", jumbled: ["She's", "felt", "too", "intimidated", "to", "schedule", "it."] },
      { target: "Framing this as collaborative genuinely mattered to how it unfolded.", jumbled: ["Framing", "this", "as", "collaborative", "genuinely", "mattered", "to", "how", "it", "unfolded."] },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging a colleague to advocate for themselves professionally.",
    mySentenceExample: "I encouraged my colleague to advocate for herself professionally.",
  },
  {
    number: 8,
    title: "The Six-Month Mark",
    image: null,
    imageNote: "Naomi sitting across from Mr. Delacroix again, six months later, a calendar visible showing the scheduled review date.",
    story:
      "Six months later, exactly as agreed, Mr. Delacroix schedules the promised review meeting to reassess my compensation once again. I arrive with updated metrics, having continued documenting my contributions since our original conversation months earlier. He reviews everything carefully, then confirms that the additional raise we'd discussed will indeed take effect starting next month. I thank him, noting how much I'd appreciated that this agreement was actually honored rather than quietly forgotten over time. This follow-through, more than the raise itself, reinforces my trust in approaching future negotiations directly and professionally.",
    questions: [
      "What does Mr. Delacroix schedule six months later?",
      "What does Naomi arrive with?",
      "What does Mr. Delacroix confirm at the review?",
    ],
    trueFalse: [
      { text: "Mr. Delacroix schedules the promised review meeting six months later.", answer: true },
      { text: "Naomi arrives with updated metrics.", answer: true },
      { text: "Mr. Delacroix confirms the additional raise will take effect.", answer: true },
      { text: "The agreement was quietly forgotten over time.", answer: false },
      { text: "This follow-through reinforces Naomi's trust in future negotiations.", answer: true },
    ],
    buildSentence: [
      { target: "He schedules the review meeting now.", jumbled: ["He", "schedules", "the", "review", "meeting", "now."] },
      { target: "I arrive with updated metrics today.", jumbled: ["I", "arrive", "with", "updated", "metrics", "today."] },
      { target: "I thank him for this now.", jumbled: ["I", "thank", "him", "for", "this", "now."] },
      { target: "This agreement was actually honored, not forgotten.", jumbled: ["This", "agreement", "was", "actually", "honored,", "not", "forgotten."] },
      { target: "This reinforces my trust in future negotiations.", jumbled: ["This", "reinforces", "my", "trust", "in", "future", "negotiations."] },
    ],
    mySentencePrompt: "Write or say one sentence about an agreement being honored exactly as promised.",
    mySentenceExample: "The agreement was honored exactly as promised six months later.",
  },
  {
    number: 9,
    title: "Mentoring Someone Else",
    image: null,
    imageNote: "Naomi sitting with a junior colleague, reviewing a document together, offering guidance on preparing a similar case.",
    story:
      "A junior colleague, having heard about my experience secondhand, asks if I'd help her prepare for her own upcoming compensation conversation. I agree, walking her through how I'd compiled evidence, researched salary ranges, and anticipated potential pushback beforehand. She admits she'd assumed negotiating meant being aggressive, which had made her avoid the conversation entirely until now. I explain that, in my experience, framing the conversation collaboratively, rather than combatively, tends to produce better long-term outcomes. Watching her leave feeling more confident, I realize this negotiation taught me something worth passing forward to others.",
    questions: [
      "What does the junior colleague ask Naomi for help with?",
      "What does Naomi walk her through?",
      "What had the colleague assumed negotiating meant?",
    ],
    trueFalse: [
      { text: "A junior colleague asks Naomi to help her prepare.", answer: true },
      { text: "Naomi walks her through evidence, research, and anticipating pushback.", answer: true },
      { text: "The colleague had assumed negotiating meant being aggressive.", answer: true },
      { text: "Naomi advises approaching this combatively rather than collaboratively.", answer: false },
      { text: "Naomi realizes this lesson is worth passing forward to others.", answer: true },
    ],
    buildSentence: [
      { target: "I agree to help her now.", jumbled: ["I", "agree", "to", "help", "her", "now."] },
      { target: "She admits this about herself.", jumbled: ["She", "admits", "this", "about", "herself."] },
      { target: "This is worth passing forward to others.", jumbled: ["This", "is", "worth", "passing", "forward", "to", "others."] },
      { target: "This had made her avoid the conversation entirely.", jumbled: ["This", "had", "made", "her", "avoid", "the", "conversation", "entirely."] },
      { target: "Collaborative framing tends to produce better long-term outcomes.", jumbled: ["Collaborative", "framing", "tends", "to", "produce", "better", "long-term", "outcomes."] },
    ],
    mySentencePrompt: "Write or say one sentence about passing along something valuable you learned to help someone else.",
    mySentenceExample: "I passed along something valuable I learned to help a colleague.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Naomi sitting at her desk, reflecting quietly, the original folder of evidence now filed away neatly on a shelf.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I approached this out of frustration rather than preparation. If I had simply demanded a raise without evidence, Mr. Delacroix may have reasonably felt pressured rather than genuinely persuaded. Instead, building a thorough case and remaining open to compromise allowed us to reach an outcome that respected us both. I've learned that negotiation, at its best, isn't about winning against someone, but about solving a shared problem together. In the end, this experience taught me that advocating for myself professionally requires patience just as much as confidence.",
    questions: [
      "What does Naomi realize looking back on the process?",
      "What might have happened if she had demanded a raise without evidence?",
      "What has Naomi learned about negotiation at its best?",
    ],
    trueFalse: [
      { text: "Naomi realizes things might have gone differently without preparation.", answer: true },
      { text: "Demanding without evidence might have felt pressuring rather than persuasive.", answer: true },
      { text: "Naomi believes negotiation is about winning against someone.", answer: false },
      { text: "Naomi learns negotiation is about solving a shared problem together.", answer: true },
      { text: "Naomi learns advocating for herself requires patience and confidence.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Negotiation isn't about winning against someone.", jumbled: ["Negotiation", "isn't", "about", "winning", "against", "someone."] },
      { target: "This requires patience just as much as confidence.", jumbled: ["This", "requires", "patience", "just", "as", "much", "as", "confidence."] },
      { target: "Had I demanded this without evidence, he may have felt pressured.", jumbled: ["Had", "I", "demanded", "this", "without", "evidence,", "he", "may", "have", "felt", "pressured."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating something important professionally.",
    mySentenceExample: "I learned that professional negotiation requires patience and preparation.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

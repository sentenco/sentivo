// B2 Teens digital storybook, Book 65: "The Uniform Policy Vote"
// Static content -- no Supabase. First book in a new B2 Teens batch
// (Books 65-72) -- Teens has been A1/A2/B1 until now; this is the
// first B2 Teens content. Calibrated to the sourced B2 Teens spec
// (see memory project_b2_level_jump_and_approach): the B1->B2 jump
// means longer/more abstract topics, real mediation (comparing
// viewpoints, finding common ground, not just personal opinion),
// fuller grammar -- narrative tenses with past perfect, present
// perfect + continuous, full modal nuance (may/ought to/should/must/
// might/could/have to), first/second/selective-third conditional,
// and real discourse markers (nevertheless, moreover, as a result,
// in spite of, whereas, given that) -- distinct register from the B1
// Teens batch (49-56), which used simpler complex sentences and a
// narrower modal/conditional range. Same Teens-track chapter shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter.
// Images not generated yet -- image/coverImage left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The Uniform Policy Vote";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Nadia standing at a podium in a school auditorium, addressing a divided student council, two groups of students visible on opposite sides.";

export const CHARACTERS = [
  { name: "Nadia", role: "The narrator, a student council representative", look: "Blazer over her uniform, notebook always in hand, thoughtful expression." },
  { name: "Mr. Ferris", role: "The student council's faculty advisor", look: "Cardigan, glasses, encourages debate without taking sides himself." },
  { name: "Kwame", role: "A council member who supports abolishing the uniform", look: "Casual clothes even at council meetings, passionate speaker." },
  { name: "Yuna", role: "A council member who supports keeping the uniform", look: "Neat, organized, prepares detailed notes before every meeting." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Proposal Arrives",
    image: null,
    imageNote: "Nadia reading a printed proposal at a student council table, other members reacting with mixed expressions.",
    story:
      "At this week's student council meeting, Mr. Ferris announces that a formal proposal to abolish the school uniform has been submitted. Immediately, the room splits into two camps, each side already forming opinions before the discussion has even properly begun. Kwame argues passionately that uniforms suppress individual expression, while Yuna counters that they reduce visible inequality between students. As the council's newly appointed mediator, I realize I'll need to hear both sides fully before forming any conclusion myself. Mr. Ferris asks me to organize a school-wide forum, where both perspectives can be presented and genuinely considered.",
    questions: [
      "What proposal does Mr. Ferris announce?",
      "What does Kwame argue about uniforms?",
      "What does Mr. Ferris ask Nadia to organize?",
    ],
    trueFalse: [
      { text: "A proposal to abolish the school uniform has been submitted.", answer: true },
      { text: "Kwame argues that uniforms suppress individual expression.", answer: true },
      { text: "Yuna argues that uniforms increase inequality between students.", answer: false },
      { text: "Nadia has been appointed as the council's mediator.", answer: true },
      { text: "Mr. Ferris asks Nadia to organize a school-wide forum.", answer: true },
    ],
    buildSentence: [
      { target: "The room splits into two camps.", jumbled: ["The", "room", "splits", "into", "two", "camps."] },
      { target: "I'll need to hear both sides.", jumbled: ["I'll", "need", "to", "hear", "both", "sides."] },
      { target: "Uniforms reduce visible inequality, Yuna argues.", jumbled: ["Uniforms", "reduce", "visible", "inequality,", "Yuna", "argues."] },
      { target: "Both perspectives ought to be genuinely considered.", jumbled: ["Both", "perspectives", "ought", "to", "be", "genuinely", "considered."] },
      { target: "Opinions had already formed before the discussion had even begun.", jumbled: ["Opinions", "had", "already", "formed", "before", "the", "discussion", "had", "even", "begun."] },
    ],
    mySentencePrompt: "Write or say one sentence about a topic where people in your school or community disagree strongly.",
    mySentenceExample: "Students disagree strongly about whether phones should be allowed in class.",
  },
  {
    number: 2,
    title: "Preparing the Forum",
    image: null,
    imageNote: "Nadia at a desk covered in sticky notes, drafting a discussion outline, laptop open beside stacks of research printouts.",
    story:
      "Preparing for the forum turns out to be considerably harder than I had originally anticipated when I first agreed to organize it. I research uniform policies at other schools, discovering that the arguments on both sides are more nuanced than I'd initially assumed. Some studies suggest uniforms genuinely reduce social pressure around clothing, whereas others argue they simply shift that pressure toward other visible markers instead. I draft discussion questions carefully, trying to ensure neither side would feel dismissed or unfairly represented during the actual event. By the time I finish, I've developed a far more complicated view of the issue than I'd expected.",
    questions: [
      "How does preparing for the forum turn out to be?",
      "What does Nadia discover about the arguments on both sides?",
      "What does Nadia try to ensure with her discussion questions?",
    ],
    trueFalse: [
      { text: "Preparing for the forum is harder than Nadia anticipated.", answer: true },
      { text: "Nadia researches uniform policies at other schools.", answer: true },
      { text: "Some studies suggest uniforms reduce social pressure around clothing.", answer: true },
      { text: "Nadia decides the issue is actually quite simple.", answer: false },
      { text: "Nadia tries to ensure neither side feels dismissed.", answer: true },
    ],
    buildSentence: [
      { target: "I research uniform policies now.", jumbled: ["I", "research", "uniform", "policies", "now."] },
      { target: "I draft discussion questions carefully.", jumbled: ["I", "draft", "discussion", "questions", "carefully."] },
      { target: "This turns out considerably harder than expected.", jumbled: ["This", "turns", "out", "considerably", "harder", "than", "expected."] },
      { target: "I've developed a far more complicated view.", jumbled: ["I've", "developed", "a", "far", "more", "complicated", "view."] },
      { target: "Some studies suggest uniforms reduce pressure, whereas others disagree.", jumbled: ["Some", "studies", "suggest", "uniforms", "reduce", "pressure,", "whereas", "others", "disagree."] },
    ],
    mySentencePrompt: "Write or say one sentence about researching an issue and discovering it was more complicated than you expected.",
    mySentenceExample: "I researched the issue and discovered it was more complicated than expected.",
  },
  {
    number: 3,
    title: "The Forum Begins",
    image: null,
    imageNote: "A packed school auditorium, Nadia standing at the front moderating as Kwame and Yuna sit facing the audience.",
    story:
      "The auditorium fills quickly, with far more students attending than I had honestly expected for a policy discussion. I open the forum by explaining the ground rules: respectful language, no interrupting, and genuine listening rather than simply waiting to respond. Kwame speaks first, describing how the uniform had made him feel invisible throughout his early years at the school. Yuna follows, explaining that before uniforms were introduced, she had constantly worried about being judged for what she couldn't afford. Listening to both accounts, I realize this debate matters more personally to people than I had initially understood.",
    questions: [
      "What does Nadia explain when she opens the forum?",
      "What does Kwame describe about the uniform?",
      "What did Yuna worry about before uniforms were introduced?",
    ],
    trueFalse: [
      { text: "The auditorium fills with more students than expected.", answer: true },
      { text: "Nadia explains ground rules including respectful language.", answer: true },
      { text: "Kwame says the uniform made him feel invisible.", answer: true },
      { text: "Yuna says she never worried about being judged.", answer: false },
      { text: "Nadia realizes this debate matters more personally than she understood.", answer: true },
    ],
    buildSentence: [
      { target: "The auditorium fills quickly today.", jumbled: ["The", "auditorium", "fills", "quickly", "today."] },
      { target: "Kwame speaks first at the forum.", jumbled: ["Kwame", "speaks", "first", "at", "the", "forum."] },
      { target: "This matters more personally than I understood.", jumbled: ["This", "matters", "more", "personally", "than", "I", "understood."] },
      { target: "The uniform had made him feel invisible.", jumbled: ["The", "uniform", "had", "made", "him", "feel", "invisible."] },
      { target: "Before uniforms were introduced, she had constantly worried about judgment.", jumbled: ["Before", "uniforms", "were", "introduced,", "she", "had", "constantly", "worried", "about", "judgment."] },
    ],
    mySentencePrompt: "Write or say one sentence about listening to someone's personal experience that changed how you saw an issue.",
    mySentenceExample: "Listening to her experience changed how I saw the issue.",
  },
  {
    number: 4,
    title: "Unexpected Common Ground",
    image: null,
    imageNote: "Kwame and Yuna standing side by side at the podium, both gesturing as they explain a shared idea to the audience.",
    story:
      "Midway through the discussion, something unexpected happens: Kwame and Yuna actually begin to agree on certain underlying concerns. Both acknowledge that the real issue may not be uniforms themselves, but rather how visible economic difference feels to students generally. Yuna suggests that a more flexible dress code, with some shared elements, might address both concerns simultaneously. Kwame, somewhat surprised himself, admits this idea hadn't occurred to him before hearing Yuna's perspective directly. Watching this shift happen live, I realize mediation isn't really about choosing a winner, but about finding what both sides actually need.",
    questions: [
      "What unexpected thing happens midway through the discussion?",
      "What do Kwame and Yuna both acknowledge?",
      "What does Yuna suggest as a possible solution?",
    ],
    trueFalse: [
      { text: "Kwame and Yuna begin to agree on certain concerns.", answer: true },
      { text: "Both acknowledge the real issue may be economic difference.", answer: true },
      { text: "Yuna suggests a more flexible dress code with shared elements.", answer: true },
      { text: "Kwame says this idea had occurred to him long ago.", answer: false },
      { text: "Nadia realizes mediation is about finding what both sides need.", answer: true },
    ],
    buildSentence: [
      { target: "Something unexpected happens now.", jumbled: ["Something", "unexpected", "happens", "now."] },
      { target: "They begin to agree now.", jumbled: ["They", "begin", "to", "agree", "now."] },
      { target: "This hadn't occurred to him before.", jumbled: ["This", "hadn't", "occurred", "to", "him", "before."] },
      { target: "Mediation isn't really about choosing a winner.", jumbled: ["Mediation", "isn't", "really", "about", "choosing", "a", "winner."] },
      { target: "This might address both concerns simultaneously, Yuna suggests.", jumbled: ["This", "might", "address", "both", "concerns", "simultaneously,", "Yuna", "suggests."] },
    ],
    mySentencePrompt: "Write or say one sentence about two people with different opinions finding unexpected common ground.",
    mySentenceExample: "Two people with different opinions found unexpected common ground.",
  },
  {
    number: 5,
    title: "Opening the Floor",
    image: null,
    imageNote: "Several students in the audience raising their hands, one standing to speak into a handheld microphone.",
    story:
      "I open the floor to questions, and hands shoot up immediately from students eager to share their own perspectives. One student mentions that, given the school's diverse population, any new policy ought to be tested before being fully implemented. Another points out that whatever decision is made, some students will inevitably feel unheard, no matter how carefully it's handled. A quieter student, who rarely speaks in large groups, mentions that uniforms had actually helped her feel like she belonged somewhere. This range of viewpoints, moreover, reminds me that no single solution will satisfy absolutely everyone completely.",
    questions: [
      "What happens when Nadia opens the floor to questions?",
      "What does one student suggest about any new policy?",
      "What does the quieter student mention about uniforms?",
    ],
    trueFalse: [
      { text: "Hands shoot up immediately when Nadia opens the floor.", answer: true },
      { text: "A student suggests any new policy ought to be tested first.", answer: true },
      { text: "Another student says everyone will definitely feel heard.", answer: false },
      { text: "The quieter student says uniforms helped her feel like she belonged.", answer: true },
      { text: "Nadia realizes no single solution will satisfy everyone.", answer: true },
    ],
    buildSentence: [
      { target: "Hands shoot up immediately now.", jumbled: ["Hands", "shoot", "up", "immediately", "now."] },
      { target: "I open the floor now.", jumbled: ["I", "open", "the", "floor", "now."] },
      { target: "This new policy ought to be tested.", jumbled: ["This", "new", "policy", "ought", "to", "be", "tested."] },
      { target: "No single solution will satisfy everyone completely.", jumbled: ["No", "single", "solution", "will", "satisfy", "everyone", "completely."] },
      { target: "Uniforms had actually helped her feel like she belonged.", jumbled: ["Uniforms", "had", "actually", "helped", "her", "feel", "like", "she", "belonged."] },
    ],
    mySentencePrompt: "Write or say one sentence about hearing a range of different opinions on the same issue.",
    mySentenceExample: "I heard a range of different opinions on the same issue.",
  },
  {
    number: 6,
    title: "Drafting a Recommendation",
    image: null,
    imageNote: "Nadia, Kwame, and Yuna sitting together at a table after the forum, drafting notes collaboratively on a shared laptop.",
    story:
      "After the forum ends, Mr. Ferris asks the three of us to draft a formal recommendation summarizing what we'd actually heard. Kwame suggests we propose a flexible policy: core shared colors, but more personal freedom within those guidelines. Yuna agrees, provided we include a trial period, so the council can gather feedback before making anything permanent. I write the draft, careful to represent both original positions fairly, rather than favoring whichever argument I personally found stronger. Reading it back afterward, I feel genuinely proud that this reflects a synthesis, not simply one side's victory.",
    questions: [
      "What does Mr. Ferris ask the three of them to draft?",
      "What does Kwame suggest proposing?",
      "What does Yuna agree to, provided something is included?",
    ],
    trueFalse: [
      { text: "Mr. Ferris asks them to draft a formal recommendation.", answer: true },
      { text: "Kwame suggests core shared colors with more personal freedom.", answer: true },
      { text: "Yuna refuses to agree to any compromise at all.", answer: false },
      { text: "Yuna agrees provided a trial period is included.", answer: true },
      { text: "Nadia feels proud this reflects a synthesis, not one side's victory.", answer: true },
    ],
    buildSentence: [
      { target: "We draft a formal recommendation now.", jumbled: ["We", "draft", "a", "formal", "recommendation", "now."] },
      { target: "I feel genuinely proud of this.", jumbled: ["I", "feel", "genuinely", "proud", "of", "this."] },
      { target: "This reflects a synthesis, not a victory.", jumbled: ["This", "reflects", "a", "synthesis,", "not", "a", "victory."] },
      { target: "I write the draft carefully now.", jumbled: ["I", "write", "the", "draft", "carefully", "now."] },
      { target: "Yuna agrees, provided a trial period is included.", jumbled: ["Yuna", "agrees,", "provided", "a", "trial", "period", "is", "included."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing something that fairly represents two different points of view.",
    mySentenceExample: "I wrote something that fairly represented two different points of view.",
  },
  {
    number: 7,
    title: "Presenting to the Council",
    image: null,
    imageNote: "Nadia standing at the front of a full council meeting, presenting the recommendation on a projected slide.",
    story:
      "The following week, I present our recommendation to the full student council, feeling more nervous than I'd anticipated beforehand. As I explain the trial period and flexible-color approach, I notice several members nodding, seemingly persuaded by the reasoning behind it. One member asks whether this compromise might simply delay an inevitable, harder decision down the road. I respond honestly that it might, but that testing an idea carefully seemed wiser than deciding based on assumption alone. After some further discussion, the council votes to approve the trial period, with a review scheduled for next semester.",
    questions: [
      "What does Nadia present to the full student council?",
      "What does one member ask about the compromise?",
      "What does the council vote to approve?",
    ],
    trueFalse: [
      { text: "Nadia presents the recommendation the following week.", answer: true },
      { text: "Several members seem persuaded by the reasoning.", answer: true },
      { text: "A member asks if this might delay a harder decision.", answer: true },
      { text: "The council refuses to vote on the proposal at all.", answer: false },
      { text: "The council approves the trial period with a scheduled review.", answer: true },
    ],
    buildSentence: [
      { target: "I present our recommendation now.", jumbled: ["I", "present", "our", "recommendation", "now."] },
      { target: "Several members nod, seemingly persuaded.", jumbled: ["Several", "members", "nod,", "seemingly", "persuaded."] },
      { target: "I feel more nervous than anticipated.", jumbled: ["I", "feel", "more", "nervous", "than", "anticipated."] },
      { target: "The council votes to approve the trial period.", jumbled: ["The", "council", "votes", "to", "approve", "the", "trial", "period."] },
      { target: "Testing an idea carefully seemed wiser than assuming.", jumbled: ["Testing", "an", "idea", "carefully", "seemed", "wiser", "than", "assuming."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting an idea to a group and defending it under questioning.",
    mySentenceExample: "I presented my idea and defended it under questioning.",
  },
  {
    number: 8,
    title: "The Trial Begins",
    image: null,
    imageNote: "Students in the hallway wearing a mix of uniform and personal clothing elements, some chatting casually.",
    story:
      "The trial period begins the following Monday, and the hallways look noticeably different than they had just days earlier. Some students embrace the new flexibility enthusiastically, while others stick closely to the familiar, original uniform out of habit. Kwame stops me in the hallway, admitting he feels genuinely happy, even though a few details still don't work perfectly. Yuna mentions she's been surprised by how little actual disruption the change has caused, contrary to what she'd initially feared. Watching everyone adjust, I feel cautiously optimistic that this compromise might actually work for most people involved.",
    questions: [
      "When does the trial period begin?",
      "How do students respond differently to the new flexibility?",
      "What does Yuna mention she's been surprised by?",
    ],
    trueFalse: [
      { text: "The trial period begins the following Monday.", answer: true },
      { text: "Some students embrace the flexibility while others stick to habit.", answer: true },
      { text: "Kwame says he feels genuinely happy about the change.", answer: true },
      { text: "Yuna says the change caused far more disruption than expected.", answer: false },
      { text: "Nadia feels cautiously optimistic about the compromise.", answer: true },
    ],
    buildSentence: [
      { target: "The trial period begins now.", jumbled: ["The", "trial", "period", "begins", "now."] },
      { target: "I feel cautiously optimistic now.", jumbled: ["I", "feel", "cautiously", "optimistic", "now."] },
      { target: "Kwame stops me in the hallway.", jumbled: ["Kwame", "stops", "me", "in", "the", "hallway."] },
      { target: "The hallways look noticeably different than before.", jumbled: ["The", "hallways", "look", "noticeably", "different", "than", "before."] },
      { target: "This caused far less disruption than she had feared.", jumbled: ["This", "caused", "far", "less", "disruption", "than", "she", "had", "feared."] },
    ],
    mySentencePrompt: "Write or say one sentence about watching a compromise actually work out in real life.",
    mySentenceExample: "I watched a compromise actually work out in real life.",
  },
  {
    number: 9,
    title: "A Semester Review",
    image: null,
    imageNote: "The student council gathered around a table reviewing survey results on a laptop screen, Nadia presenting data.",
    story:
      "By the semester review, the council has collected survey data from students across every grade level about the trial. The results, moreover, are more positive than even I had cautiously hoped for when we first proposed this compromise. Most students report feeling more comfortable overall, though a small percentage still prefer the original, stricter uniform policy. Mr. Ferris notes that had we simply voted immediately after the forum, without a trial period, we may have missed this nuanced outcome entirely. This experience teaches me that thorough mediation, given enough patience, can genuinely produce better solutions than quick decisions.",
    questions: [
      "What has the council collected by the semester review?",
      "How do the results compare to what Nadia had hoped for?",
      "What does Mr. Ferris note about voting immediately?",
    ],
    trueFalse: [
      { text: "The council has collected survey data from every grade level.", answer: true },
      { text: "The results are more positive than Nadia had cautiously hoped.", answer: true },
      { text: "Every single student prefers the original uniform policy.", answer: false },
      { text: "Mr. Ferris notes voting immediately might have missed a nuanced outcome.", answer: true },
      { text: "Nadia learns that thorough mediation can produce better solutions.", answer: true },
    ],
    buildSentence: [
      { target: "The council has collected survey data now.", jumbled: ["The", "council", "has", "collected", "survey", "data", "now."] },
      { target: "This teaches me something valuable now.", jumbled: ["This", "teaches", "me", "something", "valuable", "now."] },
      { target: "Most students report feeling more comfortable overall.", jumbled: ["Most", "students", "report", "feeling", "more", "comfortable", "overall."] },
      { target: "Thorough mediation can genuinely produce better solutions.", jumbled: ["Thorough", "mediation", "can", "genuinely", "produce", "better", "solutions."] },
      { target: "Had we voted immediately, we may have missed this outcome.", jumbled: ["Had", "we", "voted", "immediately,", "we", "may", "have", "missed", "this", "outcome."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from taking time to gather real feedback before deciding.",
    mySentenceExample: "I learned that gathering real feedback leads to better decisions.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Nadia sitting alone in the now-empty auditorium after a council meeting, reflecting quietly with her notebook closed.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had the council simply voted without genuine discussion. If we had ignored the personal stories shared during the forum, we would likely have chosen a solution that satisfied only half the school. Instead, taking the time to listen, mediate, and test a compromise allowed us to find something genuinely more inclusive. I've learned that disagreement, however uncomfortable in the moment, often contains the seeds of a better shared solution. In the end, this experience taught me that mediation isn't about avoiding conflict, but about using it productively.",
    questions: [
      "What does Nadia realize looking back on the process?",
      "What might have happened if they had simply voted without discussion?",
      "What has Nadia learned about disagreement?",
    ],
    trueFalse: [
      { text: "Nadia realizes things might have unfolded differently without discussion.", answer: true },
      { text: "Ignoring the personal stories might have satisfied only half the school.", answer: true },
      { text: "Nadia believes mediation is about avoiding conflict entirely.", answer: false },
      { text: "Nadia has learned disagreement can contain seeds of a better solution.", answer: true },
      { text: "Taking time to listen allowed them to find something more inclusive.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Mediation isn't about avoiding conflict entirely.", jumbled: ["Mediation", "isn't", "about", "avoiding", "conflict", "entirely."] },
      { target: "Disagreement often contains the seeds of a better solution.", jumbled: ["Disagreement", "often", "contains", "the", "seeds", "of", "a", "better", "solution."] },
      { target: "Had we ignored the stories, we would have chosen a worse solution.", jumbled: ["Had", "we", "ignored", "the", "stories,", "we", "would", "have", "chosen", "a", "worse", "solution."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a disagreement between others.",
    mySentenceExample: "I learned that patient mediation leads to more inclusive solutions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

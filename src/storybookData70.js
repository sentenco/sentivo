// B2 Teens digital storybook, Book 70: "The Great Screen-Time Debate"
// Static content -- no Supabase. Sixth book in the B2 Teens batch
// (65-72). In-class debate/synthesis exercise, distinct from Book 32
// "The School Debate Team" (A2, tournament performance-anxiety story)
// -- this one centers on weighing and synthesizing arguments for a
// class assignment, not competitive nerves, matching the B2 spec's
// "Debate & Mediate -> Produce" lesson shape and full discourse-
// marker range. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "The Great Screen-Time Debate";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Rafael standing at the front of a classroom holding notecards, a projected slide behind him reading 'Should Teens Have Limited Screen Time?'";

export const CHARACTERS = [
  { name: "Rafael", role: "The narrator, assigned to argue against screen-time limits", look: "Confident but thoughtful, takes debate assignments seriously." },
  { name: "Ms. Okonkwo", role: "The class's social studies teacher", look: "Sharp, encourages genuine critical thinking over scripted arguments." },
  { name: "Petra", role: "Rafael's assigned debate partner, arguing for screen-time limits", look: "Organized, calm under pressure, genuinely curious rather than combative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Assignment",
    image: null,
    imageNote: "Ms. Okonkwo writing 'Should Teens Have Limited Screen Time?' on the whiteboard, students looking at their assigned pairs.",
    story:
      "Ms. Okonkwo announces a new debate assignment: whether teens should have legally limited screen time, a topic that sparks immediate reactions. I'm assigned to argue against limits, paired with Petra, who's been assigned the opposing position instead. Privately, I actually lean toward supporting some limits myself, which makes this assignment feel more challenging than a topic I'd genuinely believed in. Ms. Okonkwo explains that afterward, we won't simply declare a winner, but write a reflective synthesis considering both sides fairly. This structure, she notes, mirrors how real-world disagreements actually get resolved, rather than simple win-or-lose competitions.",
    questions: [
      "What debate topic does Ms. Okonkwo announce?",
      "What position is Rafael assigned to argue?",
      "What does the class do after the debate, according to Ms. Okonkwo?",
    ],
    trueFalse: [
      { text: "The debate topic is whether teens should have limited screen time.", answer: true },
      { text: "Rafael is assigned to argue against limits.", answer: true },
      { text: "Rafael privately believes strongly in his assigned position.", answer: false },
      { text: "After the debate, they write a reflective synthesis, not a winner.", answer: true },
      { text: "Ms. Okonkwo says this mirrors real-world disagreement resolution.", answer: true },
    ],
    buildSentence: [
      { target: "Ms. Okonkwo announces a new assignment.", jumbled: ["Ms.", "Okonkwo", "announces", "a", "new", "assignment."] },
      { target: "I'm assigned to argue against limits.", jumbled: ["I'm", "assigned", "to", "argue", "against", "limits."] },
      { target: "We won't simply declare a winner.", jumbled: ["We", "won't", "simply", "declare", "a", "winner."] },
      { target: "This makes the assignment feel more challenging.", jumbled: ["This", "makes", "the", "assignment", "feel", "more", "challenging."] },
      { target: "This mirrors how real-world disagreements actually get resolved.", jumbled: ["This", "mirrors", "how", "real-world", "disagreements", "actually", "get", "resolved."] },
    ],
    mySentencePrompt: "Write or say one sentence about being assigned to argue a position you don't fully agree with.",
    mySentenceExample: "I was assigned to argue a position I didn't fully agree with.",
  },
  {
    number: 2,
    title: "Researching Against My Instinct",
    image: null,
    imageNote: "Rafael at his desk surrounded by printed articles, highlighting sections, laptop open beside him.",
    story:
      "Researching arguments against screen-time limits proves harder than I expected, given that I personally find some limits reasonable. I find studies suggesting that blanket restrictions often fail to address the actual underlying reasons teens overuse screens. Moreover, some researchers argue that teaching self-regulation ultimately matters more than external limits imposed by adults or governments. I also discover that screen time varies enormously in purpose, from mindless scrolling to genuine creative work or meaningful social connection. By the end of my research, I've developed a genuinely stronger case than I'd initially assumed existed.",
    questions: [
      "Why does researching this position prove harder than expected?",
      "What do the studies Rafael finds suggest about blanket restrictions?",
      "What does Rafael discover about screen time's purpose?",
    ],
    trueFalse: [
      { text: "Rafael personally finds some limits reasonable.", answer: true },
      { text: "Studies suggest blanket restrictions often fail to address root causes.", answer: true },
      { text: "Some researchers argue self-regulation matters more than external limits.", answer: true },
      { text: "Rafael discovers screen time is always used the same way.", answer: false },
      { text: "Rafael develops a stronger case than he'd initially assumed.", answer: true },
    ],
    buildSentence: [
      { target: "This proves harder than I expected.", jumbled: ["This", "proves", "harder", "than", "I", "expected."] },
      { target: "I find studies suggesting this now.", jumbled: ["I", "find", "studies", "suggesting", "this", "now."] },
      { target: "Screen time varies enormously in purpose.", jumbled: ["Screen", "time", "varies", "enormously", "in", "purpose."] },
      { target: "I've developed a genuinely stronger case now.", jumbled: ["I've", "developed", "a", "genuinely", "stronger", "case", "now."] },
      { target: "Teaching self-regulation ultimately matters more than external limits.", jumbled: ["Teaching", "self-regulation", "ultimately", "matters", "more", "than", "external", "limits."] },
    ],
    mySentencePrompt: "Write or say one sentence about researching an argument and discovering it was stronger than you expected.",
    mySentenceExample: "I researched an argument and found it stronger than expected.",
  },
  {
    number: 3,
    title: "Meeting with Petra",
    image: null,
    imageNote: "Rafael and Petra sitting across from each other in the library, laptops open, comparing notes before the debate.",
    story:
      "Petra and I meet in the library beforehand, agreeing that even though we're opponents, preparing thoughtfully would benefit the whole class discussion. She shares that she's found compelling research too, particularly around sleep disruption and its measurable effects on teen mental health. I mention my own findings about self-regulation, and she admits she hadn't considered that angle as thoroughly herself. Rather than treating each other as rivals, we end up exchanging genuinely useful sources neither of us had discovered independently. This collaboration, in spite of our opposing assignments, leaves me feeling more prepared than I would have alone.",
    questions: [
      "Where do Rafael and Petra meet beforehand?",
      "What has Petra found compelling research about?",
      "What happens instead of them treating each other as rivals?",
    ],
    trueFalse: [
      { text: "Rafael and Petra meet in the library beforehand.", answer: true },
      { text: "Petra has found research about sleep disruption and mental health.", answer: true },
      { text: "Petra says she had already considered the self-regulation angle fully.", answer: false },
      { text: "They end up exchanging genuinely useful sources.", answer: true },
      { text: "Rafael feels more prepared than he would have alone.", answer: true },
    ],
    buildSentence: [
      { target: "We meet in the library beforehand.", jumbled: ["We", "meet", "in", "the", "library", "beforehand."] },
      { target: "She shares compelling research too.", jumbled: ["She", "shares", "compelling", "research", "too."] },
      { target: "I feel more prepared than alone.", jumbled: ["I", "feel", "more", "prepared", "than", "alone."] },
      { target: "She hadn't considered that angle as thoroughly herself.", jumbled: ["She", "hadn't", "considered", "that", "angle", "as", "thoroughly", "herself."] },
      { target: "This collaboration, in spite of opposing assignments, helped us both.", jumbled: ["This", "collaboration,", "in", "spite", "of", "opposing", "assignments,", "helped", "us", "both."] },
    ],
    mySentencePrompt: "Write or say one sentence about collaborating with someone who has an opposing viewpoint from yours.",
    mySentenceExample: "I collaborated with someone who had an opposing viewpoint from mine.",
  },
  {
    number: 4,
    title: "The Debate Begins",
    image: null,
    imageNote: "Rafael standing at the front of the classroom presenting, Petra seated nearby waiting for her turn, classmates listening attentively.",
    story:
      "The debate begins, and I present my argument first, explaining that blanket limits ignore how differently teens actually use screens. I cite the self-regulation research, arguing that teaching skills ultimately serves teens better than simply restricting their access. Petra responds calmly, presenting her sleep-disruption research and arguing that some structure genuinely protects developing brains from measurable harm. Neither of us raises our voice or interrupts, following Ms. Okonkwo's ground rules about respectful, evidence-based exchange throughout. Watching classmates take notes on both arguments, I realize this debate feels more like a genuine exploration than a competition.",
    questions: [
      "What does Rafael argue about blanket limits?",
      "What does Petra argue about structure and developing brains?",
      "How does the debate feel, compared to a competition?",
    ],
    trueFalse: [
      { text: "Rafael argues that blanket limits ignore how differently teens use screens.", answer: true },
      { text: "Petra argues that some structure protects developing brains.", answer: true },
      { text: "Rafael and Petra raise their voices and interrupt each other.", answer: false },
      { text: "They follow ground rules about respectful, evidence-based exchange.", answer: true },
      { text: "The debate feels more like exploration than competition.", answer: true },
    ],
    buildSentence: [
      { target: "The debate begins now.", jumbled: ["The", "debate", "begins", "now."] },
      { target: "I present my argument first.", jumbled: ["I", "present", "my", "argument", "first."] },
      { target: "Neither of us raises our voice.", jumbled: ["Neither", "of", "us", "raises", "our", "voice."] },
      { target: "This feels more like exploration than competition.", jumbled: ["This", "feels", "more", "like", "exploration", "than", "competition."] },
      { target: "Some structure genuinely protects developing brains from harm.", jumbled: ["Some", "structure", "genuinely", "protects", "developing", "brains", "from", "harm."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting an argument calmly and respectfully in a debate.",
    mySentenceExample: "I presented my argument calmly and respectfully in the debate.",
  },
  {
    number: 5,
    title: "Questions from the Class",
    image: null,
    imageNote: "Several classmates raising hands, one standing to ask a question directed at both Rafael and Petra.",
    story:
      "Ms. Okonkwo opens the floor for questions, and classmates raise genuinely thoughtful points neither Petra nor I had fully anticipated beforehand. One student asks whether the real issue might actually be content quality rather than screen time itself. Another wonders whether limits should differ based on age, given how differently a twelve-year-old and an eighteen-year-old might use screens. Petra and I both find ourselves nodding along to points that complicate our original, more simplified positions somewhat. This questioning phase, moreover, reveals just how much nuance exists beneath what initially seemed like a simple yes-or-no debate.",
    questions: [
      "What does Ms. Okonkwo open the floor for?",
      "What does one student ask about content quality?",
      "What does another student wonder about age differences?",
    ],
    trueFalse: [
      { text: "Ms. Okonkwo opens the floor for questions.", answer: true },
      { text: "A student asks if the real issue is content quality.", answer: true },
      { text: "Another student wonders if limits should differ based on age.", answer: true },
      { text: "Rafael and Petra refuse to consider these new points.", answer: false },
      { text: "This questioning phase reveals nuance beneath a simple debate.", answer: true },
    ],
    buildSentence: [
      { target: "Ms. Okonkwo opens the floor now.", jumbled: ["Ms.", "Okonkwo", "opens", "the", "floor", "now."] },
      { target: "We both find ourselves nodding along.", jumbled: ["We", "both", "find", "ourselves", "nodding", "along."] },
      { target: "This reveals just how much nuance exists.", jumbled: ["This", "reveals", "just", "how", "much", "nuance", "exists."] },
      { target: "The real issue might actually be content quality.", jumbled: ["The", "real", "issue", "might", "actually", "be", "content", "quality."] },
      { target: "Limits should differ based on how differently people use screens.", jumbled: ["Limits", "should", "differ", "based", "on", "how", "differently", "people", "use", "screens."] },
    ],
    mySentencePrompt: "Write or say one sentence about a question from someone else that made you rethink your position.",
    mySentenceExample: "A question from someone else made me rethink my position.",
  },
  {
    number: 6,
    title: "Comparing Notes Afterward",
    image: null,
    imageNote: "Rafael and Petra sitting together after class, both reviewing their notes side by side, talking casually now.",
    story:
      "After class, Petra and I sit together, comparing notes and discussing which arguments actually seemed most persuasive to us personally. I admit that her sleep-disruption research genuinely shifted my thinking, even though I still believe self-regulation matters considerably too. She admits, in turn, that the content-quality question raised during questions had complicated her own certainty about blanket structure. Neither of us has fully changed our original position, but both of us clearly see the issue differently now. This conversation, given how it unfolded, feels more valuable than simply winning or losing the actual debate.",
    questions: [
      "What do Rafael and Petra do after class?",
      "What does Rafael admit shifted his thinking?",
      "What does Petra admit complicated her certainty?",
    ],
    trueFalse: [
      { text: "Rafael and Petra sit together comparing notes after class.", answer: true },
      { text: "Rafael admits Petra's sleep-disruption research shifted his thinking.", answer: true },
      { text: "Petra admits the content-quality question complicated her certainty.", answer: true },
      { text: "Both have completely changed their original positions.", answer: false },
      { text: "This conversation feels more valuable than winning or losing.", answer: true },
    ],
    buildSentence: [
      { target: "We sit together comparing notes now.", jumbled: ["We", "sit", "together", "comparing", "notes", "now."] },
      { target: "I admit this genuinely shifted my thinking.", jumbled: ["I", "admit", "this", "genuinely", "shifted", "my", "thinking."] },
      { target: "Both of us see the issue differently now.", jumbled: ["Both", "of", "us", "see", "the", "issue", "differently", "now."] },
      { target: "This feels more valuable than winning or losing.", jumbled: ["This", "feels", "more", "valuable", "than", "winning", "or", "losing."] },
      { target: "This complicated her own certainty about blanket structure.", jumbled: ["This", "complicated", "her", "own", "certainty", "about", "blanket", "structure."] },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation with someone who disagreed with you that left you thinking differently.",
    mySentenceExample: "A conversation with someone who disagreed left me thinking differently.",
  },
  {
    number: 7,
    title: "Writing the Synthesis",
    image: null,
    imageNote: "Rafael at his desk at home, writing on a laptop, occasionally glancing at printed notes from the debate.",
    story:
      "Ms. Okonkwo assigns the reflective synthesis, and I sit down to write something considerably more complex than a typical persuasive essay. Rather than declaring a winner, I try genuinely representing both the self-regulation argument and the sleep-disruption research fairly. I write that perhaps the answer isn't strict limits or complete freedom, but flexible guidelines adjusted by age and content type. Given everything I'd heard, I argue that teaching digital literacy might matter more than either extreme position alone. Finishing the draft, I feel genuinely proud that this reflects actual thinking, not simply defending my originally assigned position.",
    questions: [
      "What does Rafael sit down to write?",
      "What does Rafael try to represent fairly in his synthesis?",
      "What does Rafael argue might matter more than either extreme?",
    ],
    trueFalse: [
      { text: "Rafael sits down to write the reflective synthesis.", answer: true },
      { text: "Rafael tries to represent both arguments fairly.", answer: true },
      { text: "Rafael argues strict limits are clearly the only correct answer.", answer: false },
      { text: "Rafael argues teaching digital literacy might matter more than extremes.", answer: true },
      { text: "Rafael feels proud this reflects actual thinking, not just defense.", answer: true },
    ],
    buildSentence: [
      { target: "I sit down to write now.", jumbled: ["I", "sit", "down", "to", "write", "now."] },
      { target: "I feel genuinely proud of this.", jumbled: ["I", "feel", "genuinely", "proud", "of", "this."] },
      { target: "This reflects actual thinking, not defense.", jumbled: ["This", "reflects", "actual", "thinking,", "not", "defense."] },
      { target: "Digital literacy might matter more than either extreme.", jumbled: ["Digital", "literacy", "might", "matter", "more", "than", "either", "extreme."] },
      { target: "Perhaps the answer isn't strict limits or complete freedom.", jumbled: ["Perhaps", "the", "answer", "isn't", "strict", "limits", "or", "complete", "freedom."] },
    ],
    mySentencePrompt: "Write or say one sentence about writing something that fairly represents two sides of an argument.",
    mySentenceExample: "I wrote something that fairly represented two sides of the argument.",
  },
  {
    number: 8,
    title: "Sharing the Synthesis",
    image: null,
    imageNote: "Rafael reading his synthesis aloud to the class, Ms. Okonkwo and classmates listening, Petra nodding along.",
    story:
      "Ms. Okonkwo invites volunteers to share their synthesis aloud, and I decide, somewhat nervously, to read mine to the class. As I read my flexible-guidelines argument, I notice Petra nodding along, seemingly recognizing echoes of her own thinking within it. Afterward, she shares her own synthesis, which arrives at a surprisingly similar conclusion from an entirely different starting position. Ms. Okonkwo points out that despite being assigned opposing sides, we'd independently converged on a nuanced, shared understanding. This moment, she explains, demonstrates exactly what genuine intellectual engagement, rather than simple debate-winning, can actually produce.",
    questions: [
      "What does Rafael decide to do, somewhat nervously?",
      "What does Rafael notice Petra doing while he reads?",
      "What does Ms. Okonkwo point out about their conclusions?",
    ],
    trueFalse: [
      { text: "Rafael decides to read his synthesis aloud to the class.", answer: true },
      { text: "Rafael notices Petra nodding along as he reads.", answer: true },
      { text: "Petra's synthesis arrives at a completely opposite conclusion.", answer: false },
      { text: "Ms. Okonkwo points out they'd independently converged on similar ideas.", answer: true },
      { text: "This demonstrates what genuine intellectual engagement can produce.", answer: true },
    ],
    buildSentence: [
      { target: "I decide to read mine aloud.", jumbled: ["I", "decide", "to", "read", "mine", "aloud."] },
      { target: "I notice Petra nodding along.", jumbled: ["I", "notice", "Petra", "nodding", "along."] },
      { target: "We'd independently converged on similar ideas.", jumbled: ["We'd", "independently", "converged", "on", "similar", "ideas."] },
      { target: "This arrives at a surprisingly similar conclusion.", jumbled: ["This", "arrives", "at", "a", "surprisingly", "similar", "conclusion."] },
      { target: "This demonstrates what genuine intellectual engagement can produce.", jumbled: ["This", "demonstrates", "what", "genuine", "intellectual", "engagement", "can", "produce."] },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone else reached a similar conclusion from a different starting point.",
    mySentenceExample: "I discovered someone reached a similar conclusion from a different starting point.",
  },
  {
    number: 9,
    title: "A New Perspective on Debate",
    image: null,
    imageNote: "Rafael and Petra chatting casually in the hallway after class, both relaxed, no longer positioned as opponents.",
    story:
      "In the hallway afterward, Petra mentions she used to dread debate assignments, always assuming they meant simply defending a position stubbornly. I admit I'd felt similarly before this particular assignment, expecting competition rather than genuine, collaborative exploration of an issue. We agree that being assigned an unfamiliar or even opposing position actually forced us both to think more carefully. Given this experience, I suspect I'll approach future debates differently, treating them as opportunities rather than battles to win. Walking to my next class, I feel genuinely grateful for an assignment that changed how I think about disagreement itself.",
    questions: [
      "What does Petra mention she used to dread?",
      "What does Rafael admit he felt similarly about before this?",
      "What do they agree about being assigned an unfamiliar position?",
    ],
    trueFalse: [
      { text: "Petra used to dread debate assignments.", answer: true },
      { text: "Rafael admits he felt similarly before this assignment.", answer: true },
      { text: "They agree an unfamiliar position forced them to think more carefully.", answer: true },
      { text: "Rafael decides he'll approach future debates the exact same way.", answer: false },
      { text: "Rafael feels genuinely grateful for this assignment.", answer: true },
    ],
    buildSentence: [
      { target: "Petra mentions this in the hallway.", jumbled: ["Petra", "mentions", "this", "in", "the", "hallway."] },
      { target: "I admit I'd felt similarly before.", jumbled: ["I", "admit", "I'd", "felt", "similarly", "before."] },
      { target: "I feel genuinely grateful for this.", jumbled: ["I", "feel", "genuinely", "grateful", "for", "this."] },
      { target: "This forced us both to think more carefully.", jumbled: ["This", "forced", "us", "both", "to", "think", "more", "carefully."] },
      { target: "I'll approach future debates as opportunities, not battles.", jumbled: ["I'll", "approach", "future", "debates", "as", "opportunities,", "not", "battles."] },
    ],
    mySentencePrompt: "Write or say one sentence about an assignment that changed how you think about something.",
    mySentenceExample: "This assignment changed how I think about disagreement itself.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Rafael sitting at his desk that evening, synthesis essay printed and set aside, reflecting quietly with a notebook.",
    story:
      "Looking back on the whole assignment, I realize how differently I might have approached it had I simply defended my assigned position stubbornly. If I had ignored Petra's research entirely, I would have written a far weaker, less honest synthesis in the end. Instead, genuinely engaging with an opposing viewpoint allowed me to develop a more complete, nuanced understanding of the issue. I've learned that debate, at its best, isn't really about defeating someone else's argument, but refining your own thinking. In the end, this experience taught me that disagreement, approached openly, can actually be a genuine form of learning.",
    questions: [
      "What does Rafael realize looking back on the assignment?",
      "What might have happened if he had ignored Petra's research?",
      "What has Rafael learned about debate at its best?",
    ],
    trueFalse: [
      { text: "Rafael realizes he could have approached this differently.", answer: true },
      { text: "Ignoring Petra's research would have made his synthesis weaker.", answer: true },
      { text: "Rafael believes debate is really about defeating someone's argument.", answer: false },
      { text: "Rafael learns disagreement can be a genuine form of learning.", answer: true },
      { text: "Engaging with an opposing viewpoint gave him a more nuanced understanding.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this assignment now.", jumbled: ["I", "look", "back", "on", "this", "assignment", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Debate isn't really about defeating someone's argument.", jumbled: ["Debate", "isn't", "really", "about", "defeating", "someone's", "argument."] },
      { target: "Disagreement, approached openly, can be a genuine form of learning.", jumbled: ["Disagreement,", "approached", "openly,", "can", "be", "a", "genuine", "form", "of", "learning."] },
      { target: "Had I ignored her research, my synthesis would have been weaker.", jumbled: ["Had", "I", "ignored", "her", "research,", "my", "synthesis", "would", "have", "been", "weaker."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from genuinely engaging with an opposing viewpoint.",
    mySentenceExample: "I learned that engaging with opposing viewpoints refines my own thinking.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

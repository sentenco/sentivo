// B1 Adults digital storybook, Book 61: "Negotiating a Deadline at Work"
// Static content -- no Supabase. Fifth book in the B1 Adults batch
// (57-64). Workplace-negotiation scenario, matching the B1 Adults
// spec's modals for politeness/nuance (would it be possible to,
// could we, should) and workplace/deadline vocabulary. Distinct from
// Book 58 (a payroll error) -- this is a proactive negotiation, not
// a mistake to correct. Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Negotiating a Deadline at Work";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Sofia sitting at her office desk surrounded by sticky notes and an open laptop, looking at a calendar with a stressed expression.";

export const CHARACTERS = [
  { name: "Sofia", role: "The narrator, an adult marketing coordinator", look: "Cardigan over a blouse, glasses, desk covered in sticky notes." },
  { name: "Mr. Whitfield", role: "Sofia's manager", look: "Button-down shirt, direct but fair, always carries a notebook." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Much on My Plate",
    image: null,
    imageNote: "Sofia at her desk, surrounded by three separate project folders, looking overwhelmed while checking her calendar.",
    story:
      "Three separate projects have landed on my desk this week, each with a deadline that somehow falls on the exact same day. At first, I assume I can simply manage everything through careful planning and a few extra hours of work. However, as I map out the actual timeline more carefully, it becomes obvious that finishing all three properly just isn't realistic. Quality would definitely suffer if I tried rushing through everything without adjusting something in the schedule. I realize I'll need to talk to my manager honestly, rather than quietly struggling and hoping things somehow work out.",
    questions: [
      "How many projects have landed on Sofia's desk?",
      "What does Sofia assume at first?",
      "What does Sofia realize she needs to do?",
    ],
    trueFalse: [
      { text: "Three separate projects have landed on Sofia's desk.", answer: true },
      { text: "All three projects share the exact same deadline.", answer: true },
      { text: "Sofia assumes she can manage everything easily at first.", answer: true },
      { text: "Mapping the timeline shows finishing all three is realistic.", answer: false },
      { text: "Sofia realizes she needs to talk to her manager honestly.", answer: true },
    ],
    buildSentence: [
      { target: "Three projects landed this week.", jumbled: ["Three", "projects", "landed", "this", "week."] },
      { target: "I assume I can manage this.", jumbled: ["I", "assume", "I", "can", "manage", "this."] },
      { target: "Quality would definitely suffer here.", jumbled: ["Quality", "would", "definitely", "suffer", "here."] },
      { target: "I need to talk to my manager.", jumbled: ["I", "need", "to", "talk", "to", "my", "manager."] },
      { target: "Finishing all three properly just isn't realistic.", jumbled: ["Finishing", "all", "three", "properly", "just", "isn't", "realistic."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling overwhelmed with too much work at once.",
    mySentenceExample: "I felt overwhelmed with too much work at once.",
  },
  {
    number: 2,
    title: "Preparing to Ask",
    image: null,
    imageNote: "Sofia at her desk writing notes on a notepad, planning out exactly what she wants to say before a meeting.",
    story:
      "Before approaching Mr. Whitfield, I spend some time preparing exactly what I want to say, rather than just walking in unprepared. I write down each project's current status, along with a realistic timeline for what could actually be finished by when. Rather than simply complaining about being overloaded, I want to propose an actual solution he could consider. I also think carefully about which project genuinely matters most, in case a full extension isn't something he can offer. Feeling reasonably prepared, I send him a quick message asking whether he has a few minutes to talk sometime today.",
    questions: [
      "What does Sofia do before approaching Mr. Whitfield?",
      "What does Sofia write down for each project?",
      "What does Sofia think about carefully?",
    ],
    trueFalse: [
      { text: "Sofia spends time preparing what she wants to say.", answer: true },
      { text: "Sofia writes down each project's status and a timeline.", answer: true },
      { text: "Sofia plans to simply complain without proposing a solution.", answer: false },
      { text: "Sofia thinks about which project matters most.", answer: true },
      { text: "Sofia sends Mr. Whitfield a message asking to talk.", answer: true },
    ],
    buildSentence: [
      { target: "I spend time preparing carefully.", jumbled: ["I", "spend", "time", "preparing", "carefully."] },
      { target: "I write down each project's status.", jumbled: ["I", "write", "down", "each", "project's", "status."] },
      { target: "I feel reasonably prepared now.", jumbled: ["I", "feel", "reasonably", "prepared", "now."] },
      { target: "I want to propose an actual solution.", jumbled: ["I", "want", "to", "propose", "an", "actual", "solution."] },
      { target: "Do you have a few minutes to talk today?", jumbled: ["Do", "you", "have", "a", "few", "minutes", "to", "talk", "today?"] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully before a difficult conversation.",
    mySentenceExample: "I prepared carefully before a difficult conversation at work.",
  },
  {
    number: 3,
    title: "The Conversation Begins",
    image: null,
    imageNote: "Sofia sitting across from Mr. Whitfield at his desk, notebook open, explaining her situation calmly.",
    story:
      "Mr. Whitfield agrees to meet after lunch, and I walk into his office feeling nervous but reasonably confident about my plan. I explain honestly that three deadlines landing on the same day has made everything considerably harder to manage well. “Would it be possible to discuss adjusting one of these timelines slightly?” I ask, trying to sound solution-focused rather than defeated. He listens carefully, nodding as I walk through each project's current status and realistic completion estimate. To my relief, he doesn't seem annoyed, instead appearing genuinely interested in understanding the actual situation.",
    questions: [
      "When does Mr. Whitfield agree to meet?",
      "What does Sofia explain honestly?",
      "How does Mr. Whitfield react to Sofia's explanation?",
    ],
    trueFalse: [
      { text: "Mr. Whitfield agrees to meet after lunch.", answer: true },
      { text: "Sofia explains that three deadlines fell on the same day.", answer: true },
      { text: "Sofia asks about adjusting one of the timelines.", answer: true },
      { text: "Mr. Whitfield seems annoyed by Sofia's request.", answer: false },
      { text: "Mr. Whitfield listens carefully and seems interested.", answer: true },
    ],
    buildSentence: [
      { target: "I walk into his office now.", jumbled: ["I", "walk", "into", "his", "office", "now."] },
      { target: "He listens carefully to this.", jumbled: ["He", "listens", "carefully", "to", "this."] },
      { target: "I feel nervous but reasonably confident.", jumbled: ["I", "feel", "nervous", "but", "reasonably", "confident."] },
      { target: "This has made everything considerably harder.", jumbled: ["This", "has", "made", "everything", "considerably", "harder."] },
      { target: "Would it be possible to adjust one timeline?", jumbled: ["Would", "it", "be", "possible", "to", "adjust", "one", "timeline?"] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a difficult situation clearly and calmly.",
    mySentenceExample: "I explained the difficult situation clearly and calmly.",
  },
  {
    number: 4,
    title: "Weighing the Options",
    image: null,
    imageNote: "Mr. Whitfield looking at a printed schedule, thinking carefully, Sofia watching with a hopeful expression.",
    story:
      "Mr. Whitfield reviews the three projects, thinking out loud about which one might realistically allow for some flexibility. He mentions that the client presentation absolutely cannot move, since it's tied to an external meeting already scheduled. However, the internal report, on the other hand, could potentially shift by a couple of days without causing major problems. “If we moved that deadline, would the remaining two feel manageable for you?” he asks thoughtfully. I consider this carefully, mentally reorganizing my week, before confirming that this arrangement would genuinely help significantly.",
    questions: [
      "What does Mr. Whitfield think out loud about?",
      "Which project absolutely cannot move, according to Mr. Whitfield?",
      "What does Mr. Whitfield ask Sofia?",
    ],
    trueFalse: [
      { text: "Mr. Whitfield reviews the three projects out loud.", answer: true },
      { text: "The client presentation absolutely cannot move.", answer: true },
      { text: "The internal report could potentially shift by a couple of days.", answer: true },
      { text: "Mr. Whitfield refuses to consider any flexibility at all.", answer: false },
      { text: "Sofia confirms this arrangement would genuinely help.", answer: true },
    ],
    buildSentence: [
      { target: "He reviews the three projects now.", jumbled: ["He", "reviews", "the", "three", "projects", "now."] },
      { target: "I consider this carefully now.", jumbled: ["I", "consider", "this", "carefully", "now."] },
      { target: "This absolutely cannot move now.", jumbled: ["This", "absolutely", "cannot", "move", "now."] },
      { target: "This would genuinely help significantly.", jumbled: ["This", "would", "genuinely", "help", "significantly."] },
      { target: "Would the remaining two feel manageable for you?", jumbled: ["Would", "the", "remaining", "two", "feel", "manageable", "for", "you?"] },
    ],
    mySentencePrompt: "Write or say one sentence about weighing different options before making a decision.",
    mySentenceExample: "I weighed different options before making my decision.",
  },
  {
    number: 5,
    title: "Reaching an Agreement",
    image: null,
    imageNote: "Sofia and Mr. Whitfield shaking hands across the desk, both looking satisfied, a revised calendar visible on the screen.",
    story:
      "We agree that the internal report deadline will move two days later, giving me some much-needed breathing room this week. Mr. Whitfield also suggests I loop in a colleague who could assist with a smaller part of the third project. “I should have checked in with the team sooner about workload balance generally,” he admits honestly, which genuinely surprises me. I thank him for being so understanding and flexible, especially since he easily could have simply said no. Leaving his office, I feel considerably lighter than when I walked in less than twenty minutes ago.",
    questions: [
      "What do Sofia and Mr. Whitfield agree on?",
      "What does Mr. Whitfield suggest about a colleague?",
      "What does Mr. Whitfield admit honestly?",
    ],
    trueFalse: [
      { text: "The internal report deadline will move two days later.", answer: true },
      { text: "Mr. Whitfield suggests looping in a colleague to help.", answer: true },
      { text: "Mr. Whitfield admits he should have checked in sooner.", answer: true },
      { text: "Sofia leaves his office feeling more stressed than before.", answer: false },
      { text: "Mr. Whitfield simply refuses to help at all.", answer: false },
    ],
    buildSentence: [
      { target: "We agree on this now.", jumbled: ["We", "agree", "on", "this", "now."] },
      { target: "I thank him for this now.", jumbled: ["I", "thank", "him", "for", "this", "now."] },
      { target: "This genuinely surprises me now.", jumbled: ["This", "genuinely", "surprises", "me", "now."] },
      { target: "This gives me some much-needed breathing room.", jumbled: ["This", "gives", "me", "some", "much-needed", "breathing", "room."] },
      { target: "I should have checked in with the team sooner.", jumbled: ["I", "should", "have", "checked", "in", "with", "the", "team", "sooner."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a fair agreement after discussing a problem.",
    mySentenceExample: "We reached a fair agreement after discussing the problem.",
  },
  {
    number: 6,
    title: "A New Plan",
    image: null,
    imageNote: "Sofia back at her desk, rewriting her to-do list with the new deadline reflected, looking noticeably more relaxed.",
    story:
      "Back at my desk, I update my calendar immediately, reflecting the new deadline and my slightly adjusted workload for the week. I also message the colleague Mr. Whitfield mentioned, explaining briefly what kind of help would actually be most useful. She responds enthusiastically, saying she'd be glad to take on that particular task starting tomorrow morning. With everything reorganized, my three-project pile up suddenly feels genuinely manageable rather than completely overwhelming. I take a short break, feeling grateful that a single honest conversation changed my entire week so significantly.",
    questions: [
      "What does Sofia do back at her desk?",
      "Who does Sofia message about helping?",
      "How does the colleague respond?",
    ],
    trueFalse: [
      { text: "Sofia updates her calendar immediately.", answer: true },
      { text: "Sofia messages the colleague Mr. Whitfield mentioned.", answer: true },
      { text: "The colleague refuses to help with the task.", answer: false },
      { text: "Sofia's workload suddenly feels genuinely manageable.", answer: true },
      { text: "Sofia feels this conversation changed nothing about her week.", answer: false },
    ],
    buildSentence: [
      { target: "I update my calendar now.", jumbled: ["I", "update", "my", "calendar", "now."] },
      { target: "She responds enthusiastically to this.", jumbled: ["She", "responds", "enthusiastically", "to", "this."] },
      { target: "I take a short break now.", jumbled: ["I", "take", "a", "short", "break", "now."] },
      { target: "This suddenly feels genuinely manageable now.", jumbled: ["This", "suddenly", "feels", "genuinely", "manageable", "now."] },
      { target: "A single honest conversation changed my entire week.", jumbled: ["A", "single", "honest", "conversation", "changed", "my", "entire", "week."] },
    ],
    mySentencePrompt: "Write or say one sentence about reorganizing your plans after a helpful conversation.",
    mySentenceExample: "I reorganized my plans after a helpful conversation with my manager.",
  },
  {
    number: 7,
    title: "Finishing the Presentation",
    image: null,
    imageNote: "Sofia standing confidently in a meeting room, presenting slides to a small group of clients, looking composed.",
    story:
      "With more breathing room in my schedule, I'm able to focus fully on preparing the client presentation without constant distraction. I rehearse it twice the evening before, catching a few small mistakes I probably would have missed otherwise. On presentation day, everything goes smoothly, and the client seems genuinely impressed by how organized and thorough the material feels. Afterward, a colleague mentions how calm and confident I appeared throughout the entire meeting. Little do they know how close I came to feeling completely overwhelmed just one week earlier.",
    questions: [
      "What is Sofia able to focus on with more breathing room?",
      "What does Sofia do the evening before the presentation?",
      "How does the client seem to feel about the presentation?",
    ],
    trueFalse: [
      { text: "Sofia is able to focus fully on the client presentation.", answer: true },
      { text: "Sofia rehearses the presentation twice the evening before.", answer: true },
      { text: "The client seems genuinely impressed by the presentation.", answer: true },
      { text: "The presentation day goes poorly and full of mistakes.", answer: false },
      { text: "A colleague mentions how calm Sofia appeared.", answer: true },
    ],
    buildSentence: [
      { target: "I rehearse this twice tonight.", jumbled: ["I", "rehearse", "this", "twice", "tonight."] },
      { target: "Everything goes smoothly today.", jumbled: ["Everything", "goes", "smoothly", "today."] },
      { target: "I'm able to focus fully now.", jumbled: ["I'm", "able", "to", "focus", "fully", "now."] },
      { target: "The client seems genuinely impressed today.", jumbled: ["The", "client", "seems", "genuinely", "impressed", "today."] },
      { target: "I came close to feeling completely overwhelmed.", jumbled: ["I", "came", "close", "to", "feeling", "completely", "overwhelmed."] },
    ],
    mySentencePrompt: "Write or say one sentence about performing well because you had enough time to prepare.",
    mySentenceExample: "I performed well because I had enough time to prepare.",
  },
  {
    number: 8,
    title: "Reflecting with a Colleague",
    image: null,
    imageNote: "Sofia and her helpful colleague chatting over coffee in the break room, both relaxed and smiling.",
    story:
      "During a coffee break, I thank my colleague again for taking on part of the third project so willingly last week. She mentions she's glad I asked directly, rather than quietly struggling through everything completely on my own. I admit that asking for help initially felt uncomfortable, since I usually prefer handling things independently myself. On the other hand, she points out that a team functions better when people communicate honestly about their actual workload. Her comment sticks with me, making me reconsider how I'll approach similar situations going forward.",
    questions: [
      "What does Sofia thank her colleague for again?",
      "What does the colleague say she's glad about?",
      "What does Sofia admit about asking for help?",
    ],
    trueFalse: [
      { text: "Sofia thanks her colleague again during a coffee break.", answer: true },
      { text: "The colleague says she's glad Sofia asked directly.", answer: true },
      { text: "Sofia admits asking for help initially felt uncomfortable.", answer: true },
      { text: "Sofia says she prefers asking for help immediately always.", answer: false },
      { text: "The colleague's comment makes Sofia reconsider her approach.", answer: true },
    ],
    buildSentence: [
      { target: "I thank my colleague again today.", jumbled: ["I", "thank", "my", "colleague", "again", "today."] },
      { target: "I admit this felt uncomfortable initially.", jumbled: ["I", "admit", "this", "felt", "uncomfortable", "initially."] },
      { target: "Her comment sticks with me now.", jumbled: ["Her", "comment", "sticks", "with", "me", "now."] },
      { target: "I usually prefer handling things independently.", jumbled: ["I", "usually", "prefer", "handling", "things", "independently."] },
      { target: "A team functions better when people communicate honestly.", jumbled: ["A", "team", "functions", "better", "when", "people", "communicate", "honestly."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning that asking for help was actually a good idea.",
    mySentenceExample: "I learned that asking for help was actually a good idea.",
  },
  {
    number: 9,
    title: "A Team Discussion",
    image: null,
    imageNote: "Mr. Whitfield leading a small team meeting, a whiteboard behind him showing a new workload-planning process.",
    story:
      "The following week, Mr. Whitfield calls a short team meeting to discuss workload planning going forward more generally. He mentions, without naming anyone specifically, that overlapping deadlines had recently caused unnecessary stress for someone on the team. From now on, he explains, the team will check upcoming deadlines together weekly, rather than everyone managing things separately and silently. Several colleagues nod, agreeing this would genuinely help prevent similar situations from happening again in the future. I feel a quiet sense of satisfaction, knowing my honest conversation helped create something useful for everyone.",
    questions: [
      "What does Mr. Whitfield call a meeting to discuss?",
      "What does Mr. Whitfield say caused unnecessary stress?",
      "What will the team do differently from now on?",
    ],
    trueFalse: [
      { text: "Mr. Whitfield calls a meeting about workload planning.", answer: true },
      { text: "Overlapping deadlines had caused unnecessary stress for someone.", answer: true },
      { text: "The team will check deadlines together weekly from now on.", answer: true },
      { text: "Colleagues disagree that this change would help.", answer: false },
      { text: "Sofia feels no satisfaction about this outcome.", answer: false },
    ],
    buildSentence: [
      { target: "He calls a short meeting now.", jumbled: ["He", "calls", "a", "short", "meeting", "now."] },
      { target: "Several colleagues nod in agreement.", jumbled: ["Several", "colleagues", "nod", "in", "agreement."] },
      { target: "I feel a quiet sense of satisfaction.", jumbled: ["I", "feel", "a", "quiet", "sense", "of", "satisfaction."] },
      { target: "The team will check deadlines together weekly.", jumbled: ["The", "team", "will", "check", "deadlines", "together", "weekly."] },
      { target: "This would genuinely help prevent similar situations.", jumbled: ["This", "would", "genuinely", "help", "prevent", "similar", "situations."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small change that helps prevent a bigger problem later.",
    mySentenceExample: "This small change helps prevent bigger problems later on.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Sofia at her desk at the end of the day, calendar neatly organized, looking calm and satisfied as she packs up.",
    story:
      "Looking back on the entire week, I realize how differently things could have gone if I had simply stayed quiet and struggled alone. Had I tried pushing through all three deadlines without saying anything, quality would have suffered, and I likely would have burned out completely. Instead, preparing carefully and asking clearly allowed Mr. Whitfield to actually understand and help with the situation properly. I've learned that negotiating a deadline isn't a sign of weakness, but rather a genuinely useful professional skill. In the end, this experience taught me that honest, well-prepared conversations usually lead to better outcomes for everyone involved.",
    questions: [
      "What does Sofia realize looking back on the week?",
      "What might have happened if she had stayed quiet?",
      "What has Sofia learned about negotiating a deadline?",
    ],
    trueFalse: [
      { text: "Sofia realizes staying quiet could have caused burnout.", answer: true },
      { text: "Sofia believes negotiating a deadline is a sign of weakness.", answer: false },
      { text: "Preparing carefully allowed her manager to actually help.", answer: true },
      { text: "Sofia feels honest conversations usually lead to better outcomes.", answer: true },
      { text: "Sofia wishes she had simply pushed through silently instead.", answer: false },
    ],
    buildSentence: [
      { target: "I look back on this week.", jumbled: ["I", "look", "back", "on", "this", "week."] },
      { target: "I've learned something useful here.", jumbled: ["I've", "learned", "something", "useful", "here."] },
      { target: "This is a genuinely useful professional skill.", jumbled: ["This", "is", "a", "genuinely", "useful", "professional", "skill."] },
      { target: "Honest conversations usually lead to better outcomes.", jumbled: ["Honest", "conversations", "usually", "lead", "to", "better", "outcomes."] },
      { target: "Had I stayed quiet, I likely would have burned out.", jumbled: ["Had", "I", "stayed", "quiet,", "I", "likely", "would", "have", "burned", "out."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating something difficult at work.",
    mySentenceExample: "I learned that negotiating deadlines calmly leads to better results.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

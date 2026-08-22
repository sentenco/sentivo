// B2 Teens digital storybook, Book 72: "Deciding What to Share Online"
// Static content -- no Supabase. Eighth and final book in the B2
// Teens batch (65-72). Personal-vulnerability/privacy decision,
// distinct from Book 49 "Taking a Break from Social Media" (digital
// wellbeing/usage habits) and Book 53 "Standing Up to a Bully
// Online" (direct bullying) -- this one weighs whether to post
// something personally vulnerable, consulting friends' differing
// opinions, matching the B2 spec's mediation/perspective-weighing
// focus. Teens-track shape: 3 questions, 5 True/False, 5 Build-a-
// Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Deciding What to Share Online";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Farah sitting cross-legged on her bed, phone in hand, staring at an unsent draft post, expression torn between hope and hesitation.";

export const CHARACTERS = [
  { name: "Farah", role: "The narrator, considering whether to post something personal online", look: "Thoughtful, usually private, has been quietly struggling with anxiety." },
  { name: "Dahlia", role: "Farah's friend who encourages sharing openly", look: "Outgoing, believes vulnerability online can genuinely help others." },
  { name: "Colin", role: "Farah's friend who values privacy more", look: "Reserved, cautious about oversharing, protective of Farah." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Draft I Haven't Sent",
    image: null,
    imageNote: "Farah sitting on her bed, phone screen showing a long typed post with the cursor blinking, thumb hovering over 'Post.'",
    story:
      "I've been drafting a post about my anxiety for nearly a week now, rewriting it more times than I can count. Part of me genuinely wants to share it, hoping it might help someone else feeling similarly isolated and misunderstood. However, another part of me worries about how classmates, teachers, or even future employers might eventually perceive this vulnerability. I've read that authentic posts like this can genuinely resonate, though I've also seen people mocked for sharing something too personal online. Staring at the unsent draft, I realize I genuinely don't know which instinct I should actually trust here.",
    questions: [
      "What has Farah been drafting for nearly a week?",
      "Why does part of Farah want to share it?",
      "What does another part of Farah worry about?",
    ],
    trueFalse: [
      { text: "Farah has been drafting a post about her anxiety.", answer: true },
      { text: "Part of Farah hopes it might help someone else feel less alone.", answer: true },
      { text: "Farah has no worries at all about sharing this.", answer: false },
      { text: "Farah worries about how classmates or employers might perceive it.", answer: true },
      { text: "Farah doesn't know which instinct she should trust.", answer: true },
    ],
    buildSentence: [
      { target: "I've been drafting this for a week.", jumbled: ["I've", "been", "drafting", "this", "for", "a", "week."] },
      { target: "Part of me genuinely wants to share it.", jumbled: ["Part", "of", "me", "genuinely", "wants", "to", "share", "it."] },
      { target: "I don't know which instinct to trust.", jumbled: ["I", "don't", "know", "which", "instinct", "to", "trust."] },
      { target: "This might help someone else feeling isolated.", jumbled: ["This", "might", "help", "someone", "else", "feeling", "isolated."] },
      { target: "I've seen people mocked for sharing something too personal.", jumbled: ["I've", "seen", "people", "mocked", "for", "sharing", "something", "too", "personal."] },
    ],
    mySentencePrompt: "Write or say one sentence about being torn between wanting to share something personal and worrying about the consequences.",
    mySentenceExample: "I felt torn between sharing something personal and worrying about consequences.",
  },
  {
    number: 2,
    title: "Talking to Dahlia",
    image: null,
    imageNote: "Farah showing her phone screen to Dahlia in a coffee shop, Dahlia reading with an encouraging expression.",
    story:
      "I show the draft to Dahlia, curious what she'll think, given how openly she shares her own experiences online generally. She reads it carefully, then tells me honestly that this could genuinely help someone struggling silently, exactly like I'd hoped. She mentions that when she'd shared her own difficult experience last year, several classmates had reached out privately, saying it helped them feel less alone. Dahlia argues that staying silent out of fear only reinforces the stigma surrounding mental health that we're supposedly trying to fight. Her encouragement feels genuine, though I notice she doesn't fully address my worry about long-term consequences.",
    questions: [
      "What does Farah show Dahlia?",
      "What does Dahlia say happened when she shared her own experience last year?",
      "What does Dahlia argue about staying silent out of fear?",
    ],
    trueFalse: [
      { text: "Farah shows the draft to Dahlia.", answer: true },
      { text: "Several classmates reached out to Dahlia after she shared her experience.", answer: true },
      { text: "Dahlia argues staying silent reinforces stigma around mental health.", answer: true },
      { text: "Dahlia fully addresses Farah's worry about long-term consequences.", answer: false },
      { text: "Farah notices Dahlia's encouragement feels genuine.", answer: true },
    ],
    buildSentence: [
      { target: "I show the draft to Dahlia.", jumbled: ["I", "show", "the", "draft", "to", "Dahlia."] },
      { target: "Her encouragement feels genuine to me.", jumbled: ["Her", "encouragement", "feels", "genuine", "to", "me."] },
      { target: "Several classmates reached out privately afterward.", jumbled: ["Several", "classmates", "reached", "out", "privately", "afterward."] },
      { target: "This could genuinely help someone struggling silently.", jumbled: ["This", "could", "genuinely", "help", "someone", "struggling", "silently."] },
      { target: "Staying silent only reinforces the stigma we're fighting.", jumbled: ["Staying", "silent", "only", "reinforces", "the", "stigma", "we're", "fighting."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend encouraging you to share something you were nervous about.",
    mySentenceExample: "My friend encouraged me to share something I was nervous about.",
  },
  {
    number: 3,
    title: "Talking to Colin",
    image: null,
    imageNote: "Farah and Colin sitting on a park bench, Colin looking thoughtful and slightly concerned as he reads the draft.",
    story:
      "I show the same draft to Colin, curious whether his more cautious perspective might reveal something Dahlia's enthusiasm had missed. He reads it slowly, then admits he worries about permanence: once posted, this becomes searchable and screenshot-able indefinitely, regardless of future regret. He mentions a cousin who'd shared something vulnerable years ago, only to have it resurface unexpectedly during a college application process later. Colin isn't against sharing exactly, but he questions whether a public post is genuinely necessary compared to more private, controlled alternatives. His caution feels valid too, though I sense he's perhaps overestimating how likely negative consequences actually are.",
    questions: [
      "What does Colin worry about regarding permanence?",
      "What does Colin mention about his cousin?",
      "What does Colin question about a public post?",
    ],
    trueFalse: [
      { text: "Colin worries about permanence once something is posted.", answer: true },
      { text: "Colin's cousin had something resurface during a college application.", answer: true },
      { text: "Colin is completely against Farah sharing anything at all.", answer: false },
      { text: "Colin questions whether a public post is genuinely necessary.", answer: true },
      { text: "Farah senses Colin might be overestimating the risk somewhat.", answer: true },
    ],
    buildSentence: [
      { target: "I show the same draft to Colin.", jumbled: ["I", "show", "the", "same", "draft", "to", "Colin."] },
      { target: "His caution feels valid too.", jumbled: ["His", "caution", "feels", "valid", "too."] },
      { target: "This becomes searchable indefinitely, regardless of regret.", jumbled: ["This", "becomes", "searchable", "indefinitely,", "regardless", "of", "regret."] },
      { target: "He questions whether a public post is genuinely necessary.", jumbled: ["He", "questions", "whether", "a", "public", "post", "is", "genuinely", "necessary."] },
      { target: "This resurfaced unexpectedly during a college application process.", jumbled: ["This", "resurfaced", "unexpectedly", "during", "a", "college", "application", "process."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend raising a valid concern that made you think more carefully.",
    mySentenceExample: "My friend raised a valid concern that made me think more carefully.",
  },
  {
    number: 4,
    title: "Two Valid Concerns",
    image: null,
    imageNote: "Farah sitting alone at her desk, writing both perspectives in a notebook, phone with the draft still open nearby.",
    story:
      "Thinking through both conversations, I realize Dahlia and Colin aren't actually disagreeing about whether my experience matters, but about risk and audience. Dahlia's perspective centers on potential benefit: helping others and reducing stigma through visible, authentic sharing of real struggles. Colin's perspective centers on potential harm: protecting my future self from consequences I can't fully predict or control right now. Neither perspective feels wrong exactly, which means the real question isn't which friend is right, but which risk I'm personally willing to accept. This reframing, given how stuck I'd felt, actually helps me think about this more clearly.",
    questions: [
      "What does Farah realize Dahlia and Colin aren't actually disagreeing about?",
      "What does Dahlia's perspective center on?",
      "What does Colin's perspective center on?",
    ],
    trueFalse: [
      { text: "Farah realizes they aren't disagreeing about whether her experience matters.", answer: true },
      { text: "Dahlia's perspective centers on potential benefit and reducing stigma.", answer: true },
      { text: "Colin's perspective centers on protecting Farah's future self.", answer: true },
      { text: "Farah decides one friend is clearly right and the other wrong.", answer: false },
      { text: "This reframing helps Farah think about this more clearly.", answer: true },
    ],
    buildSentence: [
      { target: "I think through both conversations now.", jumbled: ["I", "think", "through", "both", "conversations", "now."] },
      { target: "Neither perspective feels wrong exactly.", jumbled: ["Neither", "perspective", "feels", "wrong", "exactly."] },
      { target: "This reframing actually helps me think clearly.", jumbled: ["This", "reframing", "actually", "helps", "me", "think", "clearly."] },
      { target: "The real question is which risk I'm willing to accept.", jumbled: ["The", "real", "question", "is", "which", "risk", "I'm", "willing", "to", "accept."] },
      { target: "They aren't disagreeing about whether my experience matters.", jumbled: ["They", "aren't", "disagreeing", "about", "whether", "my", "experience", "matters."] },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two friends' different opinions weren't actually contradicting each other.",
    mySentenceExample: "I realized two friends' opinions weren't actually contradicting each other.",
  },
  {
    number: 5,
    title: "Researching Middle Grounds",
    image: null,
    imageNote: "Farah scrolling through her phone's privacy settings, exploring a 'close friends' feature option.",
    story:
      "Rather than choosing entirely public or entirely private, I research whether some middle ground might actually address both concerns simultaneously. I discover a feature allowing posts visible only to a smaller, selected group rather than my entire public follower list. This way, I could share with people I trust, potentially helping someone specific, without the permanence Colin worried about affecting strangers. I also consider writing anonymously on a mental health forum instead, separating the content from my actual identity entirely. Given these options, I realize the choice isn't simply share or don't share, but how and with whom.",
    questions: [
      "What does Farah research instead of choosing entirely public or private?",
      "What feature does Farah discover?",
      "What alternative does Farah also consider?",
    ],
    trueFalse: [
      { text: "Farah researches whether a middle ground might exist.", answer: true },
      { text: "Farah discovers a feature for a smaller, selected group of viewers.", answer: true },
      { text: "Farah considers writing anonymously on a mental health forum.", answer: true },
      { text: "Farah decides the choice is simply share or don't share.", answer: false },
      { text: "Farah realizes the choice is about how and with whom.", answer: true },
    ],
    buildSentence: [
      { target: "I research this middle ground now.", jumbled: ["I", "research", "this", "middle", "ground", "now."] },
      { target: "I could share with people I trust.", jumbled: ["I", "could", "share", "with", "people", "I", "trust."] },
      { target: "I also consider writing anonymously instead.", jumbled: ["I", "also", "consider", "writing", "anonymously", "instead."] },
      { target: "This separates the content from my actual identity.", jumbled: ["This", "separates", "the", "content", "from", "my", "actual", "identity."] },
      { target: "The choice isn't simply share or don't share.", jumbled: ["The", "choice", "isn't", "simply", "share", "or", "don't", "share."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding a middle-ground solution instead of choosing between two extremes.",
    mySentenceExample: "I found a middle-ground solution instead of choosing between two extremes.",
  },
  {
    number: 6,
    title: "Sharing the Middle Ground",
    image: null,
    imageNote: "Farah showing her revised plan to both Dahlia and Colin together, both looking thoughtfully at her phone.",
    story:
      "I bring my middle-ground idea to Dahlia and Colin together, curious whether this compromise might satisfy both of their concerns reasonably. Dahlia admits that a smaller, trusted audience could still genuinely help, even if it reaches fewer people than a fully public post. Colin agrees that this significantly reduces the permanence risk he'd worried about, since screenshots within trusted circles feel less threatening. Neither seems entirely thrilled, exactly, but both acknowledge this addresses their core concern reasonably well. Watching them both nod, even hesitantly, I feel like I've finally found something workable rather than choosing between two extremes.",
    questions: [
      "What does Farah bring to Dahlia and Colin together?",
      "What does Dahlia admit about a smaller, trusted audience?",
      "What does Colin agree this significantly reduces?",
    ],
    trueFalse: [
      { text: "Farah brings her middle-ground idea to both friends together.", answer: true },
      { text: "Dahlia admits a smaller audience could still genuinely help.", answer: true },
      { text: "Colin agrees this significantly reduces the permanence risk.", answer: true },
      { text: "Both friends are completely thrilled with this exact plan.", answer: false },
      { text: "Farah feels she's found something workable.", answer: true },
    ],
    buildSentence: [
      { target: "I bring this idea to them now.", jumbled: ["I", "bring", "this", "idea", "to", "them", "now."] },
      { target: "Both nod, even hesitantly, at this.", jumbled: ["Both", "nod,", "even", "hesitantly,", "at", "this."] },
      { target: "This could still genuinely help, she admits.", jumbled: ["This", "could", "still", "genuinely", "help,", "she", "admits."] },
      { target: "This significantly reduces the permanence risk.", jumbled: ["This", "significantly", "reduces", "the", "permanence", "risk."] },
      { target: "I've finally found something workable rather than an extreme.", jumbled: ["I've", "finally", "found", "something", "workable", "rather", "than", "an", "extreme."] },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a compromise that partly satisfied two people with different concerns.",
    mySentenceExample: "I presented a compromise that partly satisfied two people's concerns.",
  },
  {
    number: 7,
    title: "Posting It",
    image: null,
    imageNote: "Farah sitting on her bed, finger hovering over the post button, then finally tapping it, exhaling with relief.",
    story:
      "That evening, I finalize the post, adjusting the audience setting to my smaller, trusted circle rather than fully public visibility. My finger hovers over the button longer than I expected, given how much thought had already gone into this decision. Taking a breath, I finally post it, immediately feeling an odd mixture of relief and lingering vulnerability simultaneously. Within minutes, a few close friends respond supportively, one even sharing that they'd been struggling with something similar themselves recently. I close my phone, deciding I'll check responses again tomorrow rather than obsessively refreshing throughout the night.",
    questions: [
      "What does Farah adjust before posting?",
      "How does Farah feel immediately after posting?",
      "What does one close friend share in response?",
    ],
    trueFalse: [
      { text: "Farah adjusts the audience to her smaller, trusted circle.", answer: true },
      { text: "Farah feels only relief with no lingering vulnerability at all.", answer: false },
      { text: "A few close friends respond supportively within minutes.", answer: true },
      { text: "One friend shares they'd been struggling with something similar.", answer: true },
      { text: "Farah decides to check responses again tomorrow.", answer: true },
    ],
    buildSentence: [
      { target: "I finalize the post tonight.", jumbled: ["I", "finalize", "the", "post", "tonight."] },
      { target: "I finally post it now.", jumbled: ["I", "finally", "post", "it", "now."] },
      { target: "I close my phone now.", jumbled: ["I", "close", "my", "phone", "now."] },
      { target: "A few close friends respond supportively.", jumbled: ["A", "few", "close", "friends", "respond", "supportively."] },
      { target: "I feel an odd mixture of relief and lingering vulnerability.", jumbled: ["I", "feel", "an", "odd", "mixture", "of", "relief", "and", "lingering", "vulnerability."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally taking an action you'd been nervous about for a long time.",
    mySentenceExample: "I finally took an action I'd been nervous about for a long time.",
  },
  {
    number: 8,
    title: "Unexpected Responses",
    image: null,
    imageNote: "Farah reading messages on her phone the next day, a mixture of emotions on her face as she scrolls through replies.",
    story:
      "The next morning, I check my phone and find more responses than I'd honestly expected from such a small audience. Most messages are supportive, though one classmate seems slightly awkward afterward, unsure how to respond directly in person. This mild awkwardness stings briefly, though it's nowhere near the harsh reaction Colin had worried about beforehand. On the other hand, a friend I hadn't been particularly close with reaches out, saying this helped her feel comfortable sharing her own struggle. Weighing these mixed responses together, I realize both Dahlia's hope and Colin's caution had been partially, reasonably correct.",
    questions: [
      "What does Farah find the next morning?",
      "How does one classmate seem afterward?",
      "What does a friend Farah wasn't particularly close with say?",
    ],
    trueFalse: [
      { text: "Farah finds more responses than she expected.", answer: true },
      { text: "One classmate seems slightly awkward afterward.", answer: true },
      { text: "This awkwardness is exactly as harsh as Colin had worried.", answer: false },
      { text: "A friend says this helped her feel comfortable sharing too.", answer: true },
      { text: "Farah realizes both Dahlia's hope and Colin's caution were partially correct.", answer: true },
    ],
    buildSentence: [
      { target: "I check my phone the next morning.", jumbled: ["I", "check", "my", "phone", "the", "next", "morning."] },
      { target: "This mild awkwardness stings briefly.", jumbled: ["This", "mild", "awkwardness", "stings", "briefly."] },
      { target: "This helped her feel comfortable sharing too.", jumbled: ["This", "helped", "her", "feel", "comfortable", "sharing", "too."] },
      { target: "This is nowhere near the harsh reaction he worried about.", jumbled: ["This", "is", "nowhere", "near", "the", "harsh", "reaction", "he", "worried", "about."] },
      { target: "Both Dahlia's hope and Colin's caution were partially correct.", jumbled: ["Both", "Dahlia's", "hope", "and", "Colin's", "caution", "were", "partially", "correct."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving mixed reactions after sharing something personal.",
    mySentenceExample: "I received mixed reactions after sharing something personal online.",
  },
  {
    number: 9,
    title: "Telling Dahlia and Colin",
    image: null,
    imageNote: "Farah sitting with Dahlia and Colin together again, showing them the responses, all three talking openly.",
    story:
      "I tell Dahlia and Colin how things turned out, sharing both the supportive messages and the mildly awkward moment afterward. Dahlia seems pleased that her encouragement led somewhere positive, though she acknowledges Colin's caution about permanence remains genuinely valid. Colin admits that seeing the actual outcome, rather than just imagining worst-case scenarios, shifts his perspective somewhat toward Dahlia's optimism. Neither fully abandons their original view, but both seem more willing to hold space for the other's perspective now. I feel grateful that consulting both of them, rather than just one, led me toward a more balanced decision.",
    questions: [
      "What does Farah tell Dahlia and Colin?",
      "How does Dahlia react to hearing the outcome?",
      "How does Colin's perspective shift?",
    ],
    trueFalse: [
      { text: "Farah tells them both the supportive and awkward moments.", answer: true },
      { text: "Dahlia acknowledges Colin's caution about permanence remains valid.", answer: true },
      { text: "Colin's perspective shifts somewhat toward Dahlia's optimism.", answer: true },
      { text: "Both fully abandon their original views completely.", answer: false },
      { text: "Farah feels grateful she consulted both of them.", answer: true },
    ],
    buildSentence: [
      { target: "I tell them how things turned out.", jumbled: ["I", "tell", "them", "how", "things", "turned", "out."] },
      { target: "I feel grateful for this now.", jumbled: ["I", "feel", "grateful", "for", "this", "now."] },
      { target: "Neither fully abandons their original view.", jumbled: ["Neither", "fully", "abandons", "their", "original", "view."] },
      { target: "Both seem more willing to hold space for each other.", jumbled: ["Both", "seem", "more", "willing", "to", "hold", "space", "for", "each", "other."] },
      { target: "This shifts his perspective somewhat toward her optimism.", jumbled: ["This", "shifts", "his", "perspective", "somewhat", "toward", "her", "optimism."] },
    ],
    mySentencePrompt: "Write or say one sentence about two friends with different views both softening their positions slightly.",
    mySentenceExample: "Two friends with different views both softened their positions slightly.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Farah sitting on her bed, laptop open showing the original post, reflecting quietly with a calm expression.",
    story:
      "Looking back on the whole decision, I realize how differently things might have gone had I simply followed one friend's advice exclusively. If I had listened only to Dahlia, I might have overlooked genuine risks Colin had reasonably identified beforehand. Had I listened only to Colin, I likely would have stayed silent, missing a connection that genuinely mattered to someone else. Instead, weighing both perspectives carefully allowed me to find an approach that honored both benefit and caution simultaneously. In the end, this experience taught me that difficult decisions often benefit more from synthesis than from choosing a single, simple answer.",
    questions: [
      "What does Farah realize looking back on this decision?",
      "What might have happened if she had listened only to Dahlia?",
      "What has Farah learned about difficult decisions?",
    ],
    trueFalse: [
      { text: "Farah realizes things might have gone differently with one exclusive view.", answer: true },
      { text: "Listening only to Dahlia might have overlooked genuine risks.", answer: true },
      { text: "Farah believes difficult decisions always have one simple answer.", answer: false },
      { text: "Farah learns difficult decisions often benefit from synthesis.", answer: true },
      { text: "Weighing both perspectives helped her honor benefit and caution together.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this decision now.", jumbled: ["I", "look", "back", "on", "this", "decision", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "This honored both benefit and caution simultaneously.", jumbled: ["This", "honored", "both", "benefit", "and", "caution", "simultaneously."] },
      { target: "Difficult decisions often benefit more from synthesis.", jumbled: ["Difficult", "decisions", "often", "benefit", "more", "from", "synthesis."] },
      { target: "Had I listened only to Colin, I would have stayed silent.", jumbled: ["Had", "I", "listened", "only", "to", "Colin,", "I", "would", "have", "stayed", "silent."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from weighing two friends' different advice before deciding.",
    mySentenceExample: "I learned that weighing different advice leads to better decisions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

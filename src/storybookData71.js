// B2 Teens digital storybook, Book 71: "When My Two Best Friends Stopped Talking"
// Static content -- no Supabase. Seventh book in the B2 Teens batch
// (65-72). Triangulated-friendship mediation, distinct from Book 37
// "A Broken Friendship" (a direct one-on-one break between the
// narrator and one friend) -- here the narrator is a THIRD party
// mediating between two OTHER close friends, matching the B2 spec's
// mediation focus. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "When My Two Best Friends Stopped Talking";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Amara standing between two friends, Lucia and Ben, who are seated at opposite ends of a lunch table, both avoiding eye contact.";

export const CHARACTERS = [
  { name: "Amara", role: "The narrator, close friends with both Lucia and Ben", look: "Observant, patient, often the one who notices tension first." },
  { name: "Lucia", role: "One of Amara's two close friends", look: "Direct, values honesty, sometimes comes across as blunt." },
  { name: "Ben", role: "Amara's other close friend", look: "Sensitive, avoids confrontation, tends to withdraw when hurt." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something's Wrong",
    image: null,
    imageNote: "Amara sitting at a lunch table between two empty chairs on opposite sides, looking concerned as she checks her phone.",
    story:
      "At lunch, I notice Lucia and Ben sitting at opposite ends of our usual table, neither one acknowledging the other directly. This silence feels unusual, given how close the three of us have been since freshman year without any real conflict. I ask Lucia casually what's going on, and she simply shrugs, saying Ben knows exactly what he did. Ben, when I ask him separately, insists he doesn't actually know what Lucia is upset about at all. Caught between two conflicting accounts, I realize I might need to understand this more carefully before choosing any side.",
    questions: [
      "What does Amara notice at lunch?",
      "What does Lucia say when Amara asks what's going on?",
      "What does Ben say when Amara asks him separately?",
    ],
    trueFalse: [
      { text: "Lucia and Ben are sitting at opposite ends of the table.", answer: true },
      { text: "This silence feels unusual given their close friendship.", answer: true },
      { text: "Lucia says Ben knows exactly what he did.", answer: true },
      { text: "Ben immediately admits exactly what he did wrong.", answer: false },
      { text: "Amara realizes she needs to understand this more carefully.", answer: true },
    ],
    buildSentence: [
      { target: "I notice this at lunch today.", jumbled: ["I", "notice", "this", "at", "lunch", "today."] },
      { target: "This silence feels unusual to me.", jumbled: ["This", "silence", "feels", "unusual", "to", "me."] },
      { target: "I ask Lucia casually what's going on.", jumbled: ["I", "ask", "Lucia", "casually", "what's", "going", "on."] },
      { target: "Ben insists he doesn't actually know.", jumbled: ["Ben", "insists", "he", "doesn't", "actually", "know."] },
      { target: "I might need to understand this more carefully.", jumbled: ["I", "might", "need", "to", "understand", "this", "more", "carefully."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing tension between two friends without knowing the reason.",
    mySentenceExample: "I noticed tension between two friends without knowing the reason.",
  },
  {
    number: 2,
    title: "Lucia's Side",
    image: null,
    imageNote: "Amara and Lucia sitting on a bench outside school, Lucia explaining something with a frustrated expression.",
    story:
      "After school, I catch Lucia alone and ask her to explain what actually happened between her and Ben. She tells me that Ben had promised to help her prepare for a big presentation, then simply never showed up without any explanation. Worse, she says, he hadn't even apologized afterward, acting as though nothing significant had actually occurred at all. Lucia admits she feels genuinely hurt, not just inconvenienced, since this touches on a pattern she's noticed before. I listen carefully, recognizing that her frustration seems to stem from something deeper than this single incident alone.",
    questions: [
      "What does Amara ask Lucia to explain?",
      "What had Ben promised, according to Lucia?",
      "What does Lucia admit she feels?",
    ],
    trueFalse: [
      { text: "Amara catches Lucia alone after school.", answer: true },
      { text: "Ben had promised to help Lucia prepare for a presentation.", answer: true },
      { text: "Ben apologized immediately afterward, according to Lucia.", answer: false },
      { text: "Lucia admits she feels genuinely hurt, not just inconvenienced.", answer: true },
      { text: "Amara recognizes this seems to stem from something deeper.", answer: true },
    ],
    buildSentence: [
      { target: "I catch Lucia alone now.", jumbled: ["I", "catch", "Lucia", "alone", "now."] },
      { target: "She feels genuinely hurt about this.", jumbled: ["She", "feels", "genuinely", "hurt", "about", "this."] },
      { target: "I listen carefully to her now.", jumbled: ["I", "listen", "carefully", "to", "her", "now."] },
      { target: "He hadn't even apologized afterward.", jumbled: ["He", "hadn't", "even", "apologized", "afterward."] },
      { target: "This touches on a pattern she's noticed before.", jumbled: ["This", "touches", "on", "a", "pattern", "she's", "noticed", "before."] },
    ],
    mySentencePrompt: "Write or say one sentence about listening to a friend explain why they feel genuinely hurt.",
    mySentenceExample: "I listened to my friend explain why she felt genuinely hurt.",
  },
  {
    number: 3,
    title: "Ben's Side",
    image: null,
    imageNote: "Amara and Ben walking together after school, Ben looking down, hands in his pockets as he speaks.",
    story:
      "The next day, I find a moment to talk with Ben, curious to hear his perspective on the same situation. He explains that he'd genuinely forgotten about their study session, since he'd been dealing with a family emergency that same evening. He admits he should have texted Lucia immediately, but he'd felt too overwhelmed to explain everything at the time. Moreover, he says, whenever Lucia gets upset, he tends to withdraw rather than confront the situation directly, which he recognizes isn't ideal. Hearing this, I realize both Ben's silence and Lucia's hurt stem from genuinely understandable, if conflicting, reactions.",
    questions: [
      "What does Ben explain about forgetting the study session?",
      "What does Ben admit he should have done?",
      "What does Ben say he tends to do when Lucia gets upset?",
    ],
    trueFalse: [
      { text: "Ben had a family emergency that same evening.", answer: true },
      { text: "Ben admits he should have texted Lucia immediately.", answer: true },
      { text: "Ben says he confronts situations directly when Lucia gets upset.", answer: false },
      { text: "Ben tends to withdraw rather than confront situations.", answer: true },
      { text: "Amara realizes both reactions are genuinely understandable.", answer: true },
    ],
    buildSentence: [
      { target: "I find a moment to talk.", jumbled: ["I", "find", "a", "moment", "to", "talk."] },
      { target: "He'd genuinely forgotten about the session.", jumbled: ["He'd", "genuinely", "forgotten", "about", "the", "session."] },
      { target: "He tends to withdraw instead of confronting.", jumbled: ["He", "tends", "to", "withdraw", "instead", "of", "confronting."] },
      { target: "He should have texted Lucia immediately.", jumbled: ["He", "should", "have", "texted", "Lucia", "immediately."] },
      { target: "Both reactions stem from genuinely understandable feelings.", jumbled: ["Both", "reactions", "stem", "from", "genuinely", "understandable", "feelings."] },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's behavior better after hearing their full explanation.",
    mySentenceExample: "I understood his behavior better after hearing his full explanation.",
  },
  {
    number: 4,
    title: "Two Understandable Reactions",
    image: null,
    imageNote: "Amara sitting alone at home, notebook open, writing down both perspectives side by side.",
    story:
      "That evening, I think through both perspectives carefully, trying to understand why this small incident escalated so significantly. Lucia's hurt makes sense, given that reliability clearly matters deeply to her, especially regarding something as important as a presentation. Ben's withdrawal also makes sense, given that confrontation genuinely overwhelms him, particularly during an already stressful, emotional evening. Neither of them is being unreasonable exactly, though their different ways of handling stress collided badly this particular time. I realize that helping them reconnect will require each of them understanding the other's perspective, not just apologizing.",
    questions: [
      "What does Amara think through that evening?",
      "Why does Lucia's hurt make sense to Amara?",
      "Why does Ben's withdrawal make sense to Amara?",
    ],
    trueFalse: [
      { text: "Amara thinks through both perspectives carefully that evening.", answer: true },
      { text: "Lucia's hurt makes sense because reliability matters deeply to her.", answer: true },
      { text: "Ben's withdrawal makes sense because confrontation overwhelms him.", answer: true },
      { text: "Amara decides one of them is clearly being unreasonable.", answer: false },
      { text: "Amara realizes reconnecting requires understanding, not just apologizing.", answer: true },
    ],
    buildSentence: [
      { target: "I think through both perspectives carefully.", jumbled: ["I", "think", "through", "both", "perspectives", "carefully."] },
      { target: "Reliability clearly matters deeply to her.", jumbled: ["Reliability", "clearly", "matters", "deeply", "to", "her."] },
      { target: "Confrontation genuinely overwhelms him sometimes.", jumbled: ["Confrontation", "genuinely", "overwhelms", "him", "sometimes."] },
      { target: "Neither of them is being unreasonable exactly.", jumbled: ["Neither", "of", "them", "is", "being", "unreasonable", "exactly."] },
      { target: "Their different ways of handling stress collided badly.", jumbled: ["Their", "different", "ways", "of", "handling", "stress", "collided", "badly."] },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two people's reactions both made sense, even though they clashed.",
    mySentenceExample: "I realized two people's reactions both made sense, even though they clashed.",
  },
  {
    number: 5,
    title: "Approaching Lucia",
    image: null,
    imageNote: "Amara and Lucia sitting together again, Amara speaking gently while Lucia listens with a softening expression.",
    story:
      "I approach Lucia carefully, mentioning that Ben had actually been dealing with a family emergency that same evening. Her expression shifts slightly, though she admits this doesn't fully excuse him not communicating anything at all. I explain that Ben tends to withdraw under stress, not because he doesn't care, but because confrontation genuinely overwhelms him. Lucia considers this, admitting she hadn't realized how differently they each process difficult emotions and situations. She agrees that, given this context, she'd be willing to hear him out properly before deciding how she feels.",
    questions: [
      "What does Amara mention to Lucia?",
      "What does Lucia admit this doesn't fully excuse?",
      "What does Lucia agree to do?",
    ],
    trueFalse: [
      { text: "Amara mentions Ben's family emergency to Lucia.", answer: true },
      { text: "Lucia says this fully excuses him not communicating.", answer: false },
      { text: "Amara explains that Ben withdraws under stress, not because he doesn't care.", answer: true },
      { text: "Lucia admits she hadn't realized how differently they process emotions.", answer: true },
      { text: "Lucia agrees to hear Ben out properly.", answer: true },
    ],
    buildSentence: [
      { target: "I approach Lucia carefully now.", jumbled: ["I", "approach", "Lucia", "carefully", "now."] },
      { target: "Her expression shifts slightly at this.", jumbled: ["Her", "expression", "shifts", "slightly", "at", "this."] },
      { target: "She agrees to hear him out properly.", jumbled: ["She", "agrees", "to", "hear", "him", "out", "properly."] },
      { target: "This doesn't fully excuse him not communicating.", jumbled: ["This", "doesn't", "fully", "excuse", "him", "not", "communicating."] },
      { target: "She hadn't realized how differently they process emotions.", jumbled: ["She", "hadn't", "realized", "how", "differently", "they", "process", "emotions."] },
    ],
    mySentencePrompt: "Write or say one sentence about explaining someone's behavior to a friend without excusing it completely.",
    mySentenceExample: "I explained his behavior without excusing it completely.",
  },
  {
    number: 6,
    title: "Approaching Ben",
    image: null,
    imageNote: "Amara and Ben sitting together, Amara speaking encouragingly while Ben looks nervous but attentive.",
    story:
      "I approach Ben separately, explaining that Lucia's hurt runs deeper than just the missed study session itself. I tell him that reliability seems to matter enormously to her, and his silence afterward may have felt like confirmation of a pattern she fears. Ben looks visibly uncomfortable, admitting he hadn't considered how his silence might be interpreted, rather than simply forgotten and moved past. I encourage him gently, suggesting that even a brief, honest explanation would likely mean more to Lucia than he assumes. He agrees, though he admits reaching out directly still feels genuinely intimidating to him.",
    questions: [
      "What does Amara tell Ben about Lucia's hurt?",
      "How does Ben look when he hears this?",
      "What does Amara encourage Ben to do?",
    ],
    trueFalse: [
      { text: "Amara explains that Lucia's hurt runs deeper than the missed session.", answer: true },
      { text: "Ben looks visibly uncomfortable hearing this.", answer: true },
      { text: "Ben says he had already fully considered how his silence looked.", answer: false },
      { text: "Amara encourages Ben to offer a brief, honest explanation.", answer: true },
      { text: "Ben admits reaching out directly still feels intimidating.", answer: true },
    ],
    buildSentence: [
      { target: "I approach Ben separately now.", jumbled: ["I", "approach", "Ben", "separately", "now."] },
      { target: "Ben looks visibly uncomfortable now.", jumbled: ["Ben", "looks", "visibly", "uncomfortable", "now."] },
      { target: "He agrees, though it still feels intimidating.", jumbled: ["He", "agrees,", "though", "it", "still", "feels", "intimidating."] },
      { target: "Reliability seems to matter enormously to her.", jumbled: ["Reliability", "seems", "to", "matter", "enormously", "to", "her."] },
      { target: "A brief, honest explanation would likely mean more to her.", jumbled: ["A", "brief,", "honest", "explanation", "would", "likely", "mean", "more", "to", "her."] },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging someone to be honest even though it feels intimidating.",
    mySentenceExample: "I encouraged him to be honest even though it felt intimidating.",
  },
  {
    number: 7,
    title: "A Conversation, Finally",
    image: null,
    imageNote: "Lucia and Ben sitting together at the lunch table again, talking directly to each other, Amara sitting a little further away.",
    story:
      "The next day, I notice Lucia and Ben sitting together, actually talking rather than avoiding each other's eyes across the table. I keep some distance, sensing this conversation needs to happen between them directly, not with me mediating every word. Later, Ben tells me that he'd explained the family emergency, and Lucia had genuinely apologized for assuming the worst about him. Lucia, separately, mentions that Ben had promised to communicate better going forward, rather than withdrawing silently whenever things felt overwhelming. Hearing both accounts align this time, rather than conflict, I feel genuine relief that they'd worked through it themselves.",
    questions: [
      "What does Amara notice the next day?",
      "Why does Amara keep some distance?",
      "What does Lucia mention Ben promised?",
    ],
    trueFalse: [
      { text: "Amara notices Lucia and Ben talking together the next day.", answer: true },
      { text: "Amara keeps distance, sensing they need to talk directly.", answer: true },
      { text: "Lucia says Ben promised to communicate better going forward.", answer: true },
      { text: "Both accounts conflict with each other this time.", answer: false },
      { text: "Amara feels genuine relief they'd worked through it themselves.", answer: true },
    ],
    buildSentence: [
      { target: "I notice this the next day.", jumbled: ["I", "notice", "this", "the", "next", "day."] },
      { target: "I keep some distance now.", jumbled: ["I", "keep", "some", "distance", "now."] },
      { target: "I feel genuine relief about this.", jumbled: ["I", "feel", "genuine", "relief", "about", "this."] },
      { target: "This conversation needs to happen between them directly.", jumbled: ["This", "conversation", "needs", "to", "happen", "between", "them", "directly."] },
      { target: "Ben promised to communicate better going forward.", jumbled: ["Ben", "promised", "to", "communicate", "better", "going", "forward."] },
    ],
    mySentencePrompt: "Write or say one sentence about stepping back and letting two people work through a conflict themselves.",
    mySentenceExample: "I stepped back and let them work through the conflict themselves.",
  },
  {
    number: 8,
    title: "Back to Normal, Mostly",
    image: null,
    imageNote: "Amara, Lucia, and Ben sitting together at lunch, all three laughing at something, the earlier tension gone.",
    story:
      "By the following week, the three of us sit together at lunch again, the earlier tension seemingly resolved between them. Things aren't exactly identical to before, though; both Lucia and Ben seem more mindful now about communicating directly. Lucia mentions she's trying not to assume the worst immediately, giving people a chance to explain before reacting strongly. Ben, meanwhile, admits he's practicing sending even a short message rather than going completely silent when overwhelmed. Watching this small but genuine growth in both of them, I feel proud our friendship survived something that could have ended it.",
    questions: [
      "What happens by the following week?",
      "What is Lucia mentioning she's trying not to do?",
      "What is Ben practicing?",
    ],
    trueFalse: [
      { text: "The three of them sit together at lunch again.", answer: true },
      { text: "Lucia is trying not to assume the worst immediately.", answer: true },
      { text: "Ben is practicing going completely silent when overwhelmed.", answer: false },
      { text: "Ben is practicing sending a short message instead of going silent.", answer: true },
      { text: "Amara feels proud their friendship survived this.", answer: true },
    ],
    buildSentence: [
      { target: "We sit together at lunch again.", jumbled: ["We", "sit", "together", "at", "lunch", "again."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "Things aren't exactly identical to before.", jumbled: ["Things", "aren't", "exactly", "identical", "to", "before."] },
      { target: "She's giving people a chance to explain now.", jumbled: ["She's", "giving", "people", "a", "chance", "to", "explain", "now."] },
      { target: "This friendship survived something that could have ended it.", jumbled: ["This", "friendship", "survived", "something", "that", "could", "have", "ended", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about watching two friends grow after working through a conflict.",
    mySentenceExample: "I watched two friends grow after working through their conflict.",
  },
  {
    number: 9,
    title: "A Conversation with Both of Them",
    image: null,
    imageNote: "Amara, Lucia, and Ben sitting together outside school, talking openly about what happened, all relaxed now.",
    story:
      "A few weeks later, the three of us talk openly about what had happened, something I hadn't expected to become a comfortable topic. Lucia admits that hearing Ben's side, rather than just assuming intent, genuinely changed how she reacts to disappointment now. Ben admits that seeing how much his silence had hurt Lucia motivated him more than any lecture could have. Both thank me for not simply taking a side, but instead helping them actually understand each other properly. I explain that I hadn't done much beyond listening carefully and trusting they could work it out themselves.",
    questions: [
      "What do the three of them do a few weeks later?",
      "What does Lucia admit changed how she reacts to disappointment?",
      "What do both Lucia and Ben thank Amara for?",
    ],
    trueFalse: [
      { text: "The three of them talk openly about what happened.", answer: true },
      { text: "Lucia admits hearing Ben's side changed how she reacts to disappointment.", answer: true },
      { text: "Ben says seeing Lucia's hurt motivated him more than any lecture.", answer: true },
      { text: "Both thank Amara for simply taking Lucia's side.", answer: false },
      { text: "Amara says she trusted they could work it out themselves.", answer: true },
    ],
    buildSentence: [
      { target: "We talk openly about this now.", jumbled: ["We", "talk", "openly", "about", "this", "now."] },
      { target: "Both thank me for this now.", jumbled: ["Both", "thank", "me", "for", "this", "now."] },
      { target: "This genuinely changed how she reacts now.", jumbled: ["This", "genuinely", "changed", "how", "she", "reacts", "now."] },
      { target: "This motivated him more than any lecture could have.", jumbled: ["This", "motivated", "him", "more", "than", "any", "lecture", "could", "have."] },
      { target: "I trusted they could work it out themselves.", jumbled: ["I", "trusted", "they", "could", "work", "it", "out", "themselves."] },
    ],
    mySentencePrompt: "Write or say one sentence about helping two people understand each other rather than choosing a side.",
    mySentenceExample: "I helped two people understand each other rather than choosing a side.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Amara sitting alone at home that evening, reflecting quietly in her journal, a small smile on her face.",
    story:
      "Looking back on the whole situation, I realize how differently things might have gone had I simply chosen one friend's side immediately. If I had sided with Lucia without hearing Ben, or with Ben without acknowledging Lucia's hurt, I likely would have lost one friendship trying to protect the other. Instead, patiently understanding both perspectives allowed me to help them actually reconnect rather than simply picking a winner. I've learned that being a good friend to two people sometimes means resisting the urge to choose sides at all. In the end, this experience taught me that genuine mediation requires trusting people to grow, not just fixing things for them.",
    questions: [
      "What does Amara realize looking back on the situation?",
      "What might have happened if she had chosen one friend's side?",
      "What has Amara learned about being a good friend to two people?",
    ],
    trueFalse: [
      { text: "Amara realizes things might have gone differently with quick sides.", answer: true },
      { text: "Choosing one side might have cost her one friendship entirely.", answer: true },
      { text: "Amara believes mediation means fixing things for people, not trusting them.", answer: false },
      { text: "Amara learns being a good friend sometimes means resisting choosing sides.", answer: true },
      { text: "Patient understanding allowed them to reconnect rather than pick a winner.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this situation now.", jumbled: ["I", "look", "back", "on", "this", "situation", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Genuine mediation requires trusting people to grow.", jumbled: ["Genuine", "mediation", "requires", "trusting", "people", "to", "grow."] },
      { target: "Being a good friend sometimes means resisting choosing sides.", jumbled: ["Being", "a", "good", "friend", "sometimes", "means", "resisting", "choosing", "sides."] },
      { target: "Had I chosen one side, I would have lost one friendship.", jumbled: ["Had", "I", "chosen", "one", "side,", "I", "would", "have", "lost", "one", "friendship."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from helping two friends reconnect instead of choosing a side.",
    mySentenceExample: "I learned that helping friends reconnect matters more than choosing sides.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

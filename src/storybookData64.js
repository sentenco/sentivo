// B1 Adults digital storybook, Book 64: "A Noisy New Neighbor"
// Static content -- no Supabase. Eighth and final book in the B1
// Adults batch (57-64). Interpersonal/complaint scenario, distinct
// from Book 39's "Moving into My First Apartment" (a friendly,
// settling-in neighbor arc) -- this one centers on a noise conflict
// and diplomatic resolution, matching the B1 Adults spec's complaint-
// handling and linking-device targets. Adults-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image/coverImage left null.

export const STORYBOOK_TITLE = "A Noisy New Neighbor";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Amara standing in her apartment hallway at night, hand raised near a neighbor's door, looking hesitant but determined.";

export const CHARACTERS = [
  { name: "Amara", role: "The narrator, an adult renting an apartment", look: "Robe over pajamas, hair tied back, tired but composed expression." },
  { name: "Théo", role: "The new neighbor in the apartment upstairs", look: "Casual clothes, headphones often around his neck, friendly once approached." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Neighbor Moves In",
    image: null,
    imageNote: "Amara watching from her doorway as movers carry boxes and furniture into the apartment upstairs.",
    story:
      "Over the weekend, I notice movers carrying boxes and furniture into the previously empty apartment directly above mine. I introduce myself briefly in the hallway to the new tenant, a friendly young man named Théo who seems genuinely pleasant. We exchange a few polite words about the building, and he mentions he's just moved here for a new job downtown. Everything seems perfectly normal for the first couple of days, with only the usual sounds of someone settling in. However, by midweek, I start noticing something considerably louder than typical everyday apartment noise.",
    questions: [
      "What does Amara notice over the weekend?",
      "Who does Amara meet in the hallway?",
      "What does Amara start noticing by midweek?",
    ],
    trueFalse: [
      { text: "Amara notices movers carrying boxes upstairs.", answer: true },
      { text: "The new tenant's name is Théo.", answer: true },
      { text: "Théo seems unfriendly when they first meet.", answer: false },
      { text: "Théo mentions he moved for a new job downtown.", answer: true },
      { text: "By midweek, Amara notices something considerably louder.", answer: true },
    ],
    buildSentence: [
      { target: "I notice movers today.", jumbled: ["I", "notice", "movers", "today."] },
      { target: "I introduce myself briefly now.", jumbled: ["I", "introduce", "myself", "briefly", "now."] },
      { target: "We exchange a few polite words.", jumbled: ["We", "exchange", "a", "few", "polite", "words."] },
      { target: "Everything seems perfectly normal today.", jumbled: ["Everything", "seems", "perfectly", "normal", "today."] },
      { target: "He seems genuinely pleasant when we meet.", jumbled: ["He", "seems", "genuinely", "pleasant", "when", "we", "meet."] },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a new neighbor for the first time.",
    mySentenceExample: "I met a new neighbor for the first time last week.",
  },
  {
    number: 2,
    title: "Late-Night Noise",
    image: null,
    imageNote: "Amara lying awake in bed at night, looking up at the ceiling as muffled music and footsteps sound from above.",
    story:
      "Around midnight, muffled music and what sounds like furniture being dragged across the floor wake me from a light sleep. I lie there for a while, hoping it's simply a one-time thing related to unpacking or rearranging furniture. However, the noise continues steadily for nearly an hour, making it genuinely difficult to fall back asleep comfortably. I check the time repeatedly, growing increasingly frustrated as tomorrow's early work meeting looms uncomfortably close. Eventually, exhaustion outweighs my frustration, and I manage to drift into an uneasy, restless sleep.",
    questions: [
      "What wakes Amara around midnight?",
      "How long does the noise continue?",
      "What does Amara keep checking repeatedly?",
    ],
    trueFalse: [
      { text: "Muffled music and dragging furniture wake Amara around midnight.", answer: true },
      { text: "Amara hopes it's simply a one-time thing at first.", answer: true },
      { text: "The noise continues for nearly an hour.", answer: true },
      { text: "Amara falls back asleep easily and quickly.", answer: false },
      { text: "Amara has an early work meeting tomorrow.", answer: true },
    ],
    buildSentence: [
      { target: "Music wakes me around midnight.", jumbled: ["Music", "wakes", "me", "around", "midnight."] },
      { target: "I lie there for a while.", jumbled: ["I", "lie", "there", "for", "a", "while."] },
      { target: "I check the time repeatedly now.", jumbled: ["I", "check", "the", "time", "repeatedly", "now."] },
      { target: "This makes it genuinely difficult to sleep.", jumbled: ["This", "makes", "it", "genuinely", "difficult", "to", "sleep."] },
      { target: "Tomorrow's early meeting looms uncomfortably close.", jumbled: ["Tomorrow's", "early", "meeting", "looms", "uncomfortably", "close."] },
    ],
    mySentencePrompt: "Write or say one sentence about being kept awake by noise at night.",
    mySentenceExample: "I was kept awake by loud noise at night.",
  },
  {
    number: 3,
    title: "A Pattern Emerges",
    image: null,
    imageNote: "Amara sitting at her kitchen table the next morning, tired, looking up at the ceiling with a frustrated expression.",
    story:
      "The following few nights bring more of the same, with loud music and heavy footsteps becoming an unwelcome nightly routine. I try being patient at first, reminding myself that Théo is still new and perhaps unaware of how sound travels here. However, after nearly a week of interrupted sleep, my patience has genuinely started wearing thin considerably. I mention the situation briefly to another neighbor, who admits she's noticed the noise too, though less directly above her. Realizing this isn't simply my imagination reassures me slightly, though it doesn't actually solve the underlying problem.",
    questions: [
      "What becomes an unwelcome nightly routine?",
      "What does Amara try being at first?",
      "What does another neighbor admit?",
    ],
    trueFalse: [
      { text: "Loud music and footsteps become an unwelcome nightly routine.", answer: true },
      { text: "Amara tries being patient at first.", answer: true },
      { text: "Amara's patience has genuinely started wearing thin.", answer: true },
      { text: "Another neighbor says she's noticed nothing unusual at all.", answer: false },
      { text: "Amara realizes this isn't simply her imagination.", answer: true },
    ],
    buildSentence: [
      { target: "I try being patient here.", jumbled: ["I", "try", "being", "patient", "here."] },
      { target: "This isn't simply my imagination.", jumbled: ["This", "isn't", "simply", "my", "imagination."] },
      { target: "My patience has started wearing thin.", jumbled: ["My", "patience", "has", "started", "wearing", "thin."] },
      { target: "This becomes an unwelcome nightly routine.", jumbled: ["This", "becomes", "an", "unwelcome", "nightly", "routine."] },
      { target: "She admits she's noticed the noise too.", jumbled: ["She", "admits", "she's", "noticed", "the", "noise", "too."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a problem happening repeatedly, not just once.",
    mySentenceExample: "I noticed the noise problem happening repeatedly, not just once.",
  },
  {
    number: 4,
    title: "Deciding What to Do",
    image: null,
    imageNote: "Amara sitting at her kitchen table, weighing two pieces of paper: one labeled 'Talk directly' and one labeled 'Contact management.'",
    story:
      "Exhausted and increasingly frustrated, I consider two possible approaches: speaking with Théo directly or contacting building management instead. On the other hand, going straight to management feels slightly excessive for what could still be an easily fixable misunderstanding. I decide that approaching Théo calmly and directly seems like the more reasonable first step to take. If that conversation doesn't actually improve anything, I can always escalate the situation through official channels later. Feeling somewhat more decisive now, I plan to knock on his door sometime after work today.",
    questions: [
      "What two approaches does Amara consider?",
      "Why does going straight to management feel excessive?",
      "What does Amara decide to do first?",
    ],
    trueFalse: [
      { text: "Amara considers speaking with Théo or contacting management.", answer: true },
      { text: "Amara feels going straight to management feels excessive.", answer: true },
      { text: "Amara decides to approach Théo calmly and directly first.", answer: true },
      { text: "Amara plans to never speak to Théo about this.", answer: false },
      { text: "Amara can still escalate this later if needed.", answer: true },
    ],
    buildSentence: [
      { target: "I consider two possible approaches.", jumbled: ["I", "consider", "two", "possible", "approaches."] },
      { target: "I feel somewhat more decisive now.", jumbled: ["I", "feel", "somewhat", "more", "decisive", "now."] },
      { target: "I plan to knock on his door.", jumbled: ["I", "plan", "to", "knock", "on", "his", "door."] },
      { target: "This seems like the more reasonable first step.", jumbled: ["This", "seems", "like", "the", "more", "reasonable", "first", "step."] },
      { target: "I can always escalate this through official channels later.", jumbled: ["I", "can", "always", "escalate", "this", "through", "official", "channels", "later."] },
    ],
    mySentencePrompt: "Write or say one sentence about deciding on the best way to handle a conflict calmly.",
    mySentenceExample: "I decided on the best way to handle the conflict calmly.",
  },
  {
    number: 5,
    title: "A Difficult Knock",
    image: null,
    imageNote: "Amara standing outside Théo's apartment door, hand raised to knock, taking a deep breath before doing so.",
    story:
      "Standing outside Théo's door that evening, I take a deep breath, reminding myself to stay calm and specifically friendly. He opens the door, looking mildly surprised but greeting me warmly, clearly not expecting a serious conversation. I explain gently that the noise, particularly late at night, has been making it difficult for me to sleep well. “I had honestly no idea it was traveling that clearly. I'm really sorry about that,” he responds immediately, sounding genuinely embarrassed. His reaction reassures me considerably, since I had quietly worried this conversation might become awkward or tense instead.",
    questions: [
      "What does Amara remind herself to do before knocking?",
      "How does Théo react when he opens the door?",
      "What does Théo say in response to Amara's explanation?",
    ],
    trueFalse: [
      { text: "Amara reminds herself to stay calm and friendly.", answer: true },
      { text: "Théo greets her warmly, not expecting a serious conversation.", answer: true },
      { text: "Théo responds by getting defensive and annoyed.", answer: false },
      { text: "Théo says he had no idea the noise was traveling clearly.", answer: true },
      { text: "Amara feels reassured by his reaction.", answer: true },
    ],
    buildSentence: [
      { target: "I take a deep breath now.", jumbled: ["I", "take", "a", "deep", "breath", "now."] },
      { target: "He opens the door now.", jumbled: ["He", "opens", "the", "door", "now."] },
      { target: "I'm really sorry about that.", jumbled: ["I'm", "really", "sorry", "about", "that."] },
      { target: "This reassures me considerably now.", jumbled: ["This", "reassures", "me", "considerably", "now."] },
      { target: "I had honestly no idea it was traveling clearly.", jumbled: ["I", "had", "honestly", "no", "idea", "it", "was", "traveling", "clearly."] },
    ],
    mySentencePrompt: "Write or say one sentence about approaching a difficult conversation calmly and honestly.",
    mySentenceExample: "I approached the difficult conversation calmly and honestly.",
  },
  {
    number: 6,
    title: "Finding a Solution",
    image: null,
    imageNote: "Amara and Théo standing in the doorway, both talking casually, Théo gesturing as he suggests an idea.",
    story:
      "Théo explains that he'd been rearranging furniture and occasionally listening to music while unpacking boxes late at night. He suggests wearing headphones during late hours and finishing any heavy furniture moving considerably earlier in the evening. “Would it help if I also put down a rug under my speakers?” he asks thoughtfully, clearly wanting to actually fix this properly. I appreciate his willingness to problem-solve rather than simply apologizing without offering any real changes. We agree that if anything comes up again, I'll simply mention it directly rather than letting frustration build silently.",
    questions: [
      "What does Théo explain he'd been doing at night?",
      "What does Théo suggest doing during late hours?",
      "What do Amara and Théo agree about future issues?",
    ],
    trueFalse: [
      { text: "Théo explains he'd been rearranging furniture and listening to music.", answer: true },
      { text: "Théo suggests wearing headphones during late hours.", answer: true },
      { text: "Théo refuses to offer any actual changes.", answer: false },
      { text: "Théo suggests putting a rug under his speakers.", answer: true },
      { text: "They agree Amara will mention future issues directly.", answer: true },
    ],
    buildSentence: [
      { target: "He explains this calmly now.", jumbled: ["He", "explains", "this", "calmly", "now."] },
      { target: "I appreciate his willingness here.", jumbled: ["I", "appreciate", "his", "willingness", "here."] },
      { target: "We agree on this together.", jumbled: ["We", "agree", "on", "this", "together."] },
      { target: "Would it help if I put down a rug?", jumbled: ["Would", "it", "help", "if", "I", "put", "down", "a", "rug?"] },
      { target: "I'll simply mention it directly next time.", jumbled: ["I'll", "simply", "mention", "it", "directly", "next", "time."] },
    ],
    mySentencePrompt: "Write or say one sentence about two people working together to solve a problem fairly.",
    mySentenceExample: "We worked together to solve the noise problem fairly.",
  },
  {
    number: 7,
    title: "A Quieter Week",
    image: null,
    imageNote: "Amara lying peacefully in bed at night, the ceiling above quiet and dark, a small smile on her sleeping face.",
    story:
      "That night, and for several nights afterward, my apartment stays noticeably quieter than it had been throughout the entire previous week. I sleep considerably better, and my morning routine feels less rushed without the exhaustion I'd been carrying around constantly. I run into Théo briefly in the hallway a few days later, and he asks whether things have improved since our conversation. I confirm honestly that yes, it's been considerably better, and I genuinely appreciate him taking my concern seriously. He seems relieved to hear this, mentioning he'd felt slightly guilty since our initial conversation that evening.",
    questions: [
      "How does Amara's apartment stay that night?",
      "How does Amara sleep afterward?",
      "What does Théo ask when they run into each other?",
    ],
    trueFalse: [
      { text: "Amara's apartment stays noticeably quieter afterward.", answer: true },
      { text: "Amara sleeps considerably better afterward.", answer: true },
      { text: "Théo asks whether things have improved since their talk.", answer: true },
      { text: "Amara says nothing has changed at all.", answer: false },
      { text: "Théo mentions feeling slightly guilty since their talk.", answer: true },
    ],
    buildSentence: [
      { target: "My apartment stays quieter now.", jumbled: ["My", "apartment", "stays", "quieter", "now."] },
      { target: "I sleep considerably better now.", jumbled: ["I", "sleep", "considerably", "better", "now."] },
      { target: "I run into him briefly today.", jumbled: ["I", "run", "into", "him", "briefly", "today."] },
      { target: "I genuinely appreciate him taking this seriously.", jumbled: ["I", "genuinely", "appreciate", "him", "taking", "this", "seriously."] },
      { target: "He seems relieved to hear this.", jumbled: ["He", "seems", "relieved", "to", "hear", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing life feels better after a problem gets resolved.",
    mySentenceExample: "Life felt better after the noise problem got resolved.",
  },
  {
    number: 8,
    title: "Talking to the Other Neighbor",
    image: null,
    imageNote: "Amara chatting with the neighbor from before in the building's shared laundry room, both folding laundry casually.",
    story:
      "In the laundry room, I mention to the other neighbor that the noise situation with Théo has genuinely improved considerably since our conversation. She seems pleasantly surprised, admitting she assumed such issues usually required involving building management eventually. I explain that, in my experience, approaching someone directly and calmly often works better than escalating things immediately. On the other hand, I acknowledge that a direct conversation isn't always possible or appropriate, depending on the actual situation. She agrees, saying she'll consider a similar approach if something ever bothers her about another neighbor.",
    questions: [
      "What does Amara mention to the other neighbor?",
      "What does the other neighbor seem surprised by?",
      "What does Amara explain about approaching someone directly?",
    ],
    trueFalse: [
      { text: "Amara mentions the noise situation has genuinely improved.", answer: true },
      { text: "The other neighbor assumed this required involving management.", answer: true },
      { text: "Amara explains approaching someone directly often works better.", answer: true },
      { text: "Amara insists a direct conversation is always the right choice.", answer: false },
      { text: "The other neighbor agrees to consider a similar approach.", answer: true },
    ],
    buildSentence: [
      { target: "I mention this in the laundry room.", jumbled: ["I", "mention", "this", "in", "the", "laundry", "room."] },
      { target: "She seems pleasantly surprised now.", jumbled: ["She", "seems", "pleasantly", "surprised", "now."] },
      { target: "She agrees with me now.", jumbled: ["She", "agrees", "with", "me", "now."] },
      { target: "This has genuinely improved considerably since then.", jumbled: ["This", "has", "genuinely", "improved", "considerably", "since", "then."] },
      { target: "A direct conversation isn't always possible or appropriate.", jumbled: ["A", "direct", "conversation", "isn't", "always", "possible", "or", "appropriate."] },
    ],
    mySentencePrompt: "Write or say one sentence about sharing advice with someone based on your own experience.",
    mySentenceExample: "I shared advice with my neighbor based on my own experience.",
  },
  {
    number: 9,
    title: "A Small Gesture",
    image: null,
    imageNote: "Théo knocking on Amara's door holding a small potted plant, both smiling in the doorway.",
    story:
      "A few days later, Théo knocks on my door, holding a small potted plant he says he thought I might genuinely like. “This is just a small thank-you for handling everything so kindly instead of getting angry,” he explains, smiling warmly. I'm pleasantly surprised, accepting the gift while telling him honestly that it really wasn't necessary at all. He insists it is, mentioning that my patience made an awkward situation considerably easier for him to navigate. This small, unexpected gesture makes me feel genuinely glad I chose conversation over silent frustration or formal complaints.",
    questions: [
      "What does Théo bring to Amara's door?",
      "What does Théo say the gift is for?",
      "How does Amara feel about this gesture?",
    ],
    trueFalse: [
      { text: "Théo brings a small potted plant to Amara's door.", answer: true },
      { text: "Théo says this is a thank-you for handling things kindly.", answer: true },
      { text: "Amara refuses to accept the gift at all.", answer: false },
      { text: "Théo says her patience made the situation easier for him.", answer: true },
      { text: "Amara feels genuinely glad she chose conversation over silence.", answer: true },
    ],
    buildSentence: [
      { target: "He knocks on my door now.", jumbled: ["He", "knocks", "on", "my", "door", "now."] },
      { target: "I'm pleasantly surprised by this.", jumbled: ["I'm", "pleasantly", "surprised", "by", "this."] },
      { target: "This really wasn't necessary at all.", jumbled: ["This", "really", "wasn't", "necessary", "at", "all."] },
      { target: "He insists it is necessary anyway.", jumbled: ["He", "insists", "it", "is", "necessary", "anyway."] },
      { target: "My patience made this considerably easier for him.", jumbled: ["My", "patience", "made", "this", "considerably", "easier", "for", "him."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving an unexpected thank-you gesture from someone.",
    mySentenceExample: "I received an unexpected thank-you gesture from my neighbor.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Amara sitting comfortably in her apartment with the small plant now on her windowsill, relaxed and content.",
    story:
      "Looking back on the entire situation, I realize how easily this could have escalated into something far more tense and unpleasant. If I had complained to management immediately, without speaking to Théo directly first, our relationship might have started off poorly. Instead, staying calm and approaching the conversation kindly allowed us to actually resolve things quickly and fairly. I've learned that most conflicts between neighbors can be solved through simple, honest communication rather than avoidance or escalation. In the end, this small noise dispute unexpectedly became the beginning of a genuinely friendly neighborly relationship.",
    questions: [
      "What does Amara realize looking back on this situation?",
      "What might have happened if she had gone straight to management?",
      "What has Amara learned about conflicts between neighbors?",
    ],
    trueFalse: [
      { text: "Amara realizes this could have escalated into something tense.", answer: true },
      { text: "Going straight to management might have started things off poorly.", answer: true },
      { text: "Amara believes most conflicts can be solved through honest communication.", answer: true },
      { text: "Amara wishes she had avoided speaking to Théo entirely.", answer: false },
      { text: "This dispute became the start of a friendly relationship.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this now.", jumbled: ["I", "look", "back", "on", "this", "now."] },
      { target: "I've learned something useful here.", jumbled: ["I've", "learned", "something", "useful", "here."] },
      { target: "This could have escalated into something unpleasant.", jumbled: ["This", "could", "have", "escalated", "into", "something", "unpleasant."] },
      { target: "Honest communication solves most conflicts between neighbors.", jumbled: ["Honest", "communication", "solves", "most", "conflicts", "between", "neighbors."] },
      { target: "This unexpectedly became the beginning of a friendly relationship.", jumbled: ["This", "unexpectedly", "became", "the", "beginning", "of", "a", "friendly", "relationship."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from resolving a conflict calmly and kindly.",
    mySentenceExample: "I learned that resolving conflicts calmly builds better relationships.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

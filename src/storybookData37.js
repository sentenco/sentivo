// A2 Teens digital storybook, Book 37: "A Broken Friendship"
// Static content -- no Supabase. Seventh book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Broken Friendship";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Nadia and Vivian sitting on opposite ends of a park bench, both looking away from each other, a folded note resting on the bench between them.";

export const CHARACTERS = [
  { name: "Nadia", role: "The narrator, a teenager", look: "Long dark hair, oversized sweater, observant but prone to overthinking." },
  { name: "Vivian", role: "Nadia's best friend since childhood", look: "Short dyed hair, denim jacket, usually cheerful but currently distant." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Something's Different",
    image: null,
    imageNote: "Nadia watching Vivian from across the hallway, Vivian laughing with other classmates instead of walking over as usual, a subtle distance visible between them.",
    story:
      "Lately, something feels different between Vivian and me, though I can't quite pinpoint exactly when this quiet shift began happening. We have been inseparable since third grade, sharing everything from secrets to lunch tables without a single serious argument ever occurring. This week, though, she hasn't texted first, hasn't saved me a seat at lunch, and seems perpetually distracted whenever we do talk briefly. I tell myself I'm probably overthinking things, that everyone gets busy sometimes with schoolwork or family matters. Still, a small, uncomfortable knot forms in my stomach every time I notice her avoiding eye contact lately.",
    questions: [
      "How long have Nadia and Vivian been friends?",
      "What has Nadia noticed about Vivian's behavior?",
      "What does Nadia tell herself?",
    ],
    trueFalse: [
      { text: "Nadia and Vivian have been friends since third grade.", answer: true },
      { text: "Vivian has been texting Nadia first as usual.", answer: false },
      { text: "Nadia notices Vivian seems distracted lately.", answer: true },
      { text: "Nadia feels completely at ease about this change.", answer: false },
      { text: "Nadia notices Vivian avoiding eye contact.", answer: true },
    ],
    buildSentence: [
      { target: "Something feels different lately.", jumbled: ["feels", "different", "Something", "lately."] },
      { target: "We have been inseparable always.", jumbled: ["have", "been", "We", "inseparable", "always."] },
      { target: "I'm probably overthinking things again.", jumbled: ["probably", "overthinking", "I'm", "things", "again."] },
      { target: "A small knot forms in my stomach.", jumbled: ["A", "small", "knot", "forms", "in", "my", "stomach."] },
      { target: "She seems perpetually distracted whenever we talk briefly.", jumbled: ["She", "seems", "perpetually", "distracted", "whenever", "we", "talk", "briefly."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a change in someone close to you.",
    mySentenceExample: "I noticed a change in my friend's mood after her exam results.",
  },
  {
    number: 2,
    title: "The Silent Lunch",
    image: null,
    imageNote: "Nadia and Vivian sitting across from each other at a cafeteria table, both looking down at their trays instead of talking, an awkward silence visible.",
    story:
      "At lunch today, Vivian sits across from me like usual, but the easy, comfortable conversation we always shared feels noticeably absent between us now. I attempt small talk about an upcoming test, but her responses come short and clipped, nothing like her normally animated storytelling style. The silence stretches uncomfortably between bites of food, filled only by the distant chatter of other tables around us. I catch her checking her phone repeatedly, and something about her expression seems guarded in a way I don't recognize from years of friendship. Walking to class afterward, an unfamiliar distance follows us down the hallway.",
    questions: [
      "How does the lunch conversation feel today?",
      "What does Nadia attempt to talk about?",
      "What does Nadia notice Vivian doing repeatedly?",
    ],
    trueFalse: [
      { text: "The lunch conversation feels easy and comfortable as usual.", answer: false },
      { text: "Nadia attempts small talk about an upcoming test.", answer: true },
      { text: "Vivian's responses come short and clipped.", answer: true },
      { text: "Nadia notices Vivian checking her phone repeatedly.", answer: true },
      { text: "The silence between them feels completely normal.", answer: false },
    ],
    buildSentence: [
      { target: "The silence stretches uncomfortably now.", jumbled: ["stretches", "uncomfortably", "The", "silence", "now."] },
      { target: "I attempt small talk today.", jumbled: ["attempt", "small", "I", "talk", "today."] },
      { target: "Her responses come short and clipped.", jumbled: ["responses", "come", "Her", "short", "and", "clipped."] },
      { target: "Something about her expression seems guarded.", jumbled: ["Something", "about", "her", "expression", "seems", "guarded."] },
      { target: "An unfamiliar distance follows us down the hallway.", jumbled: ["An", "unfamiliar", "distance", "follows", "us", "down", "the", "hallway."] },
    ],
    mySentencePrompt: "Write or say one sentence about an awkward silence you experienced with someone.",
    mySentenceExample: "I experienced an awkward silence with my cousin after a small disagreement.",
  },
  {
    number: 3,
    title: "A Guess Gone Wrong",
    image: null,
    imageNote: "Nadia confronting Vivian in the school hallway, arms crossed defensively, Vivian looking confused and slightly hurt by the accusation.",
    story:
      "Unable to bear the tension any longer, I finally confront Vivian after school, assuming she's upset about a comment I made weeks ago regarding her new friend group. “Is this about what I said at the party?” I ask directly, bracing myself for an uncomfortable but necessary conversation. Vivian's confused expression immediately tells me I've guessed completely wrong, and something about her hurt reaction makes the situation feel even worse now. “That's not it at all, Nadia,” she says quietly, her voice carrying an edge I don't fully understand yet. Instead of clarifying further, she simply walks away, leaving me more confused than before.",
    questions: [
      "What does Nadia assume Vivian is upset about?",
      "How does Vivian react to Nadia's guess?",
      "What does Vivian do instead of explaining further?",
    ],
    trueFalse: [
      { text: "Nadia assumes it's about a comment at a party.", answer: true },
      { text: "Vivian confirms Nadia guessed correctly.", answer: false },
      { text: "Vivian's voice carries an edge Nadia doesn't understand.", answer: true },
      { text: "Vivian explains everything clearly right away.", answer: false },
      { text: "Nadia feels more confused after this conversation.", answer: true },
    ],
    buildSentence: [
      { target: "I finally confront Vivian today.", jumbled: ["finally", "confront", "I", "Vivian", "today."] },
      { target: "That's not it at all.", jumbled: ["not", "it", "That's", "at", "all."] },
      { target: "I've guessed completely wrong apparently.", jumbled: ["guessed", "completely", "I've", "wrong", "apparently."] },
      { target: "She simply walks away instead.", jumbled: ["simply", "walks", "She", "away", "instead."] },
      { target: "I brace myself for an uncomfortable necessary conversation.", jumbled: ["I", "brace", "myself", "for", "an", "uncomfortable", "necessary", "conversation."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you guessed wrong about why someone was upset.",
    mySentenceExample: "I guessed wrong about why my friend seemed upset at school.",
  },
  {
    number: 4,
    title: "The Real Reason",
    image: null,
    imageNote: "Nadia and Vivian standing tensely by the lockers, both talking with raised, frustrated voices, other students glancing over curiously.",
    story:
      "Frustrated by Vivian's vague dismissal, I press further the next day, my patience wearing thin from days of confusing distance between us. “You can't just say it's not that and walk away. Tell me what's actually wrong,” I say, my voice rising with genuine frustration despite my efforts to stay calm. Vivian's composure cracks slightly, and she snaps back that maybe I wouldn't understand even if she explained everything honestly right now. The exchange escalates quickly into raised voices near the lockers, both of us saying things neither of us truly means in that heated moment. We separate angrily, the friendship feeling more fractured than ever before.",
    questions: [
      "What does Nadia press Vivian to do?",
      "How does Vivian's composure react?",
      "What happens near the lockers?",
    ],
    trueFalse: [
      { text: "Nadia presses Vivian to explain what's wrong.", answer: true },
      { text: "Vivian's composure stays perfectly calm throughout.", answer: false },
      { text: "The exchange escalates into raised voices.", answer: true },
      { text: "They separate feeling closer than ever.", answer: false },
      { text: "Nadia's patience is wearing thin from days of distance.", answer: true },
    ],
    buildSentence: [
      { target: "My patience wears thin.", jumbled: ["wears", "thin.", "My", "patience"] },
      { target: "Her composure cracks slightly now.", jumbled: ["composure", "cracks", "Her", "slightly", "now."] },
      { target: "We separate angrily today.", jumbled: ["separate", "angrily", "We", "today."] },
      { target: "The friendship feels more fractured now.", jumbled: ["friendship", "feels", "The", "more", "fractured", "now."] },
      { target: "We say things neither of us truly means.", jumbled: ["We", "say", "things", "neither", "of", "us", "truly", "means."] },
    ],
    mySentencePrompt: "Write or say one sentence about an argument that got worse than you expected.",
    mySentenceExample: "My argument with my sibling got worse than I expected over something small.",
  },
  {
    number: 5,
    title: "Days Apart",
    image: null,
    imageNote: "Nadia sitting alone at lunch, glancing across the cafeteria at Vivian sitting with new friends, both avoiding eye contact.",
    story:
      "For the following week, Vivian and I avoid each other entirely, our usual seats and shared routines suddenly feeling painfully empty and unfamiliar. I sit alone at lunch, glancing occasionally toward her new table, feeling a strange mixture of anger, sadness, and stubborn pride preventing me from reaching out first. Other classmates notice the obvious tension, occasionally asking cautiously if everything's okay between us lately. I brush off their concerns, insisting everything's fine, though privately, the loneliness feels heavier with each passing day apart. Nights become harder too, filled with replaying our argument, wondering where exactly everything went so wrong.",
    questions: [
      "How long do Nadia and Vivian avoid each other?",
      "What does Nadia feel sitting alone at lunch?",
      "What do classmates notice?",
    ],
    trueFalse: [
      { text: "They avoid each other for the following week.", answer: true },
      { text: "Nadia feels completely fine sitting alone.", answer: false },
      { text: "Classmates notice the obvious tension between them.", answer: true },
      { text: "Nadia tells classmates the whole truth immediately.", answer: false },
      { text: "The loneliness feels heavier with each passing day.", answer: true },
    ],
    buildSentence: [
      { target: "We avoid each other entirely.", jumbled: ["avoid", "each", "We", "other", "entirely."] },
      { target: "I sit alone at lunch.", jumbled: ["sit", "alone", "I", "at", "lunch."] },
      { target: "Everything's fine, I insist.", jumbled: ["fine,", "I", "Everything's", "insist."] },
      { target: "The loneliness feels heavier daily.", jumbled: ["feels", "heavier", "The", "loneliness", "daily."] },
      { target: "I wonder where exactly everything went so wrong.", jumbled: ["I", "wonder", "where", "exactly", "everything", "went", "so", "wrong."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt lonely after a disagreement.",
    mySentenceExample: "I felt lonely after a disagreement with my best friend last month.",
  },
  {
    number: 6,
    title: "Advice from Someone Else",
    image: null,
    imageNote: "Nadia sitting on the couch talking with her older sister, who listens thoughtfully while holding a mug of tea, a warm living room lamp glowing nearby.",
    story:
      "Noticing my obvious sadness, my older sister sits down beside me one evening, gently asking what's actually going on between Vivian and me. I explain the whole confusing situation, admitting I still don't understand what triggered this sudden, painful distance between us. “Sometimes people pull away because they're struggling with something they're embarrassed to share,” my sister suggests thoughtfully, drawing from her own past friendship experiences. This perspective hadn't genuinely occurred to me before, since I had mostly focused on feeling hurt rather than curious about Vivian's actual situation. Maybe, I realize slowly, this isn't really about me at all.",
    questions: [
      "Who sits down to talk with Nadia?",
      "What does Nadia's sister suggest?",
      "What does Nadia realize by the end?",
    ],
    trueFalse: [
      { text: "Nadia's older sister talks with her about the situation.", answer: true },
      { text: "Nadia's sister suggests people sometimes pull away out of embarrassment.", answer: true },
      { text: "Nadia had already considered this possibility before.", answer: false },
      { text: "Nadia realizes this might not be about her at all.", answer: true },
      { text: "Nadia refuses to listen to her sister's advice.", answer: false },
    ],
    buildSentence: [
      { target: "My sister sits down beside me.", jumbled: ["sits", "down", "My", "sister", "beside", "me."] },
      { target: "This hadn't occurred to me.", jumbled: ["hadn't", "occurred", "This", "to", "me."] },
      { target: "Maybe this isn't about me.", jumbled: ["isn't", "about", "Maybe", "this", "me."] },
      { target: "I explain the confusing situation fully.", jumbled: ["explain", "the", "I", "confusing", "situation", "fully."] },
      { target: "Sometimes people pull away because they're struggling privately.", jumbled: ["Sometimes", "people", "pull", "away", "because", "they're", "struggling", "privately."] },
    ],
    mySentencePrompt: "Write or say one sentence about advice that gave you a new perspective.",
    mySentenceExample: "My teacher's advice gave me a new perspective on handling stress.",
  },
  {
    number: 7,
    title: "Writing a Note",
    image: null,
    imageNote: "Nadia sitting at her desk late at night, carefully writing a note by hand, several crumpled paper attempts scattered around her.",
    story:
      "Inspired by my sister's words, I decide texting feels too impersonal for something this important, so I write Vivian an actual handwritten note instead. Several crumpled attempts later, I finally settle on something honest, admitting I miss her, I'm sorry for pushing too hard, and I genuinely want to understand whatever she's going through. I avoid demanding immediate answers, instead simply offering to listen whenever, if ever, she feels ready to share anything at all. Folding the note carefully, I slip it through the vents of her locker before first period, my heart pounding with vulnerable, uncertain hope.",
    questions: [
      "Why does Nadia choose to write a note instead of texting?",
      "What does Nadia admit in the note?",
      "Where does Nadia leave the note?",
    ],
    trueFalse: [
      { text: "Nadia decides texting feels too impersonal.", answer: true },
      { text: "Nadia demands immediate answers in the note.", answer: false },
      { text: "Nadia admits she misses Vivian in the note.", answer: true },
      { text: "Nadia leaves the note in Vivian's locker.", answer: true },
      { text: "Nadia feels completely calm slipping the note in.", answer: false },
    ],
    buildSentence: [
      { target: "I write an actual note.", jumbled: ["write", "an", "I", "actual", "note."] },
      { target: "My heart pounds with hope.", jumbled: ["pounds", "with", "My", "heart", "hope."] },
      { target: "I fold the note carefully.", jumbled: ["fold", "the", "I", "note", "carefully."] },
      { target: "I avoid demanding immediate answers.", jumbled: ["avoid", "demanding", "I", "immediate", "answers."] },
      { target: "I genuinely want to understand whatever she's going through.", jumbled: ["I", "genuinely", "want", "to", "understand", "whatever", "she's", "going", "through."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching out to someone honestly after a disagreement.",
    mySentenceExample: "I reached out honestly to my friend after our small disagreement.",
  },
  {
    number: 8,
    title: "Meeting Again",
    image: null,
    imageNote: "Nadia and Vivian sitting together on a park bench after school, both looking nervous but hopeful, the folded note visible in Vivian's hand.",
    story:
      "The next afternoon, Vivian finds me by my locker, holding the folded note gently, her eyes noticeably softer than they've been in weeks. “Can we talk? At the park, maybe?” she asks quietly, and relief floods through me instantly at this small but meaningful gesture. We walk together in slightly awkward silence toward our old favorite bench, the same spot where we shared secrets throughout middle school years ago. Sitting down, neither of us speaks immediately, both clearly nervous about finally addressing everything honestly after weeks of painful, confusing distance. Finally, Vivian takes a deep breath and begins speaking.",
    questions: [
      "What does Vivian hold when she finds Nadia?",
      "Where does Vivian suggest they talk?",
      "How do they both feel sitting on the bench?",
    ],
    trueFalse: [
      { text: "Vivian holds the folded note when she finds Nadia.", answer: true },
      { text: "Vivian suggests talking at the park.", answer: true },
      { text: "They walk together feeling completely relaxed.", answer: false },
      { text: "This bench is a spot from their middle school years.", answer: true },
      { text: "Vivian speaks immediately without any nervousness.", answer: false },
    ],
    buildSentence: [
      { target: "Can we talk, maybe?", jumbled: ["we", "talk,", "Can", "maybe?"] },
      { target: "Relief floods through me instantly.", jumbled: ["floods", "through", "Relief", "me", "instantly."] },
      { target: "We walk together in silence.", jumbled: ["walk", "together", "We", "in", "silence."] },
      { target: "Vivian takes a deep breath.", jumbled: ["takes", "a", "Vivian", "deep", "breath."] },
      { target: "This is the same spot where we shared secrets.", jumbled: ["This", "is", "the", "same", "spot", "where", "we", "shared", "secrets."] },
    ],
    mySentencePrompt: "Write or say one sentence about meeting someone to finally talk things through.",
    mySentenceExample: "I met my friend to finally talk things through after our fight.",
  },
  {
    number: 9,
    title: "Understanding Each Other",
    image: null,
    imageNote: "Vivian wiping away tears while talking, Nadia reaching out to hold her hand comfortingly, both sitting close together on the park bench.",
    story:
      "Vivian finally explains everything: her parents have been fighting constantly, and they recently announced plans to separate, something she felt too embarrassed and overwhelmed to share with anyone. “I didn't want you treating me differently, feeling sorry for me,” she admits, tears welling up as months of pent-up stress finally surface. I feel a wave of guilt for pushing so hard without considering she might be struggling privately with something significant. Reaching over, I hold her hand gently, apologizing for not being more patient and understanding during everything she's clearly been going through alone. We both cry a little, releasing weeks of built-up tension together.",
    questions: [
      "What has been happening with Vivian's parents?",
      "Why didn't Vivian want to share this?",
      "How does Nadia react to hearing this?",
    ],
    trueFalse: [
      { text: "Vivian's parents have been fighting and plan to separate.", answer: true },
      { text: "Vivian didn't want Nadia treating her differently.", answer: true },
      { text: "Nadia feels no guilt after hearing the truth.", answer: false },
      { text: "Nadia holds Vivian's hand comfortingly.", answer: true },
      { text: "They both stay completely composed without any tears.", answer: false },
    ],
    buildSentence: [
      { target: "Vivian finally explains everything.", jumbled: ["finally", "explains", "Vivian", "everything."] },
      { target: "I feel a wave of guilt.", jumbled: ["feel", "a", "I", "wave", "of", "guilt."] },
      { target: "I hold her hand gently.", jumbled: ["hold", "her", "I", "hand", "gently."] },
      { target: "Tears well up in her eyes.", jumbled: ["well", "up", "Tears", "in", "her", "eyes."] },
      { target: "I didn't want you treating me differently.", jumbled: ["didn't", "want", "I", "you", "treating", "me", "differently."] },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's struggle after they finally shared it.",
    mySentenceExample: "I understood my friend's struggle after she finally shared it with me.",
  },
  {
    number: 10,
    title: "Stronger Than Before",
    image: null,
    imageNote: "Nadia and Vivian walking side by side, arms linked, both smiling and talking animatedly on the way home from the park.",
    story:
      "Walking home together afterward, our conversation flows naturally again, though it carries a new depth I hadn't noticed before this whole difficult experience. I promise Vivian she can always share hard things with me, even when it feels embarrassing or complicated to explain everything clearly. She apologizes too, for pulling away instead of trusting our friendship enough to be honest from the very beginning. We both agree that avoiding problems only makes everything feel worse, while honest, uncomfortable conversations actually bring people genuinely closer together in the end. Our friendship feels different now, tested but undeniably stronger, built on something deeper than before.",
    questions: [
      "What does Nadia promise Vivian?",
      "What does Vivian apologize for?",
      "What do they both agree about avoiding problems?",
    ],
    trueFalse: [
      { text: "Nadia promises Vivian can always share hard things with her.", answer: true },
      { text: "Vivian apologizes for pulling away.", answer: true },
      { text: "They agree that avoiding problems makes things worse.", answer: true },
      { text: "Their friendship feels weaker after this experience.", answer: false },
      { text: "Nadia feels their friendship carries new depth now.", answer: true },
    ],
    buildSentence: [
      { target: "Our conversation flows naturally again.", jumbled: ["conversation", "flows", "Our", "naturally", "again."] },
      { target: "She apologizes too, honestly.", jumbled: ["apologizes", "too,", "She", "honestly."] },
      { target: "Our friendship feels different now.", jumbled: ["friendship", "feels", "Our", "different", "now."] },
      { target: "I promise she can share hard things.", jumbled: ["promise", "she", "I", "can", "share", "hard", "things."] },
      { target: "Honest conversations bring people genuinely closer together.", jumbled: ["Honest", "conversations", "bring", "people", "genuinely", "closer", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friendship that became stronger after a hard moment.",
    mySentenceExample: "My friendship became stronger after we talked honestly about a hard moment.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

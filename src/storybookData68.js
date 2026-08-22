// B2 Teens digital storybook, Book 68: "Whether We Should Move"
// Static content -- no Supabase. Fourth book in the B2 Teens batch
// (65-72). Family-mediation scenario, distinct from Book 54
// "Choosing My Own Path" (narrator's own career decision under
// family pressure) -- here the narrator is a THIRD party mediating
// between two family members' opposing views on relocating for a
// parent's job, matching the B2 spec's mediation focus applied to
// family dynamics. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Images not generated yet.

export const STORYBOOK_TITLE = "Whether We Should Move";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Delphine sitting at the family dinner table, her parents on opposite sides mid-argument, a moving-company flyer visible on the table.";

export const CHARACTERS = [
  { name: "Delphine", role: "The narrator, a student caught between her parents' disagreement", look: "Quiet observer at first, learns to speak up carefully and diplomatically." },
  { name: "Corinne", role: "Delphine's mother, who has been offered a job in another city", look: "Ambitious, excited about the opportunity, tries to stay patient." },
  { name: "Julien", role: "Delphine's father, who doesn't want to move", look: "Steady, roots deeply valued, worried about disrupting the family." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Announcement",
    image: null,
    imageNote: "Delphine's mother standing in the kitchen holding a phone, excitedly telling the family about a job offer.",
    story:
      "At dinner, my mother announces she's been offered a significant promotion, though it would require our entire family relocating to another city. Her excitement is immediately obvious, but I notice my father's expression shift from surprise toward something considerably more guarded. He asks a few polite questions initially, though I can sense he's already forming objections he hasn't voiced yet. After dinner, I overhear them discussing it privately, their voices growing tenser than I've heard in quite a while. I realize, somewhat uncomfortably, that this decision might end up affecting our entire family's future significantly.",
    questions: [
      "What does Delphine's mother announce at dinner?",
      "How does Delphine's father's expression shift?",
      "What does Delphine overhear after dinner?",
    ],
    trueFalse: [
      { text: "Delphine's mother has been offered a significant promotion.", answer: true },
      { text: "The promotion would require relocating to another city.", answer: true },
      { text: "Delphine's father's expression shifts toward something more guarded.", answer: true },
      { text: "Delphine's father immediately agrees enthusiastically.", answer: false },
      { text: "Delphine overhears her parents' voices growing tenser.", answer: true },
    ],
    buildSentence: [
      { target: "My mother announces this at dinner.", jumbled: ["My", "mother", "announces", "this", "at", "dinner."] },
      { target: "Her excitement is immediately obvious.", jumbled: ["Her", "excitement", "is", "immediately", "obvious."] },
      { target: "I overhear them discussing it privately.", jumbled: ["I", "overhear", "them", "discussing", "it", "privately."] },
      { target: "This might affect our entire family significantly.", jumbled: ["This", "might", "affect", "our", "entire", "family", "significantly."] },
      { target: "He's already forming objections he hasn't voiced yet.", jumbled: ["He's", "already", "forming", "objections", "he", "hasn't", "voiced", "yet."] },
    ],
    mySentencePrompt: "Write or say one sentence about hearing news that could significantly change your family's life.",
    mySentenceExample: "I heard news that could significantly change my family's life.",
  },
  {
    number: 2,
    title: "Two Sides Emerge",
    image: null,
    imageNote: "Delphine standing in the hallway, overhearing her parents' voices from the kitchen through a partially open door.",
    story:
      "Over the following days, my parents' disagreement becomes harder to ignore, even though neither directly involves me in the conversation. My mother argues this opportunity may never come again, and that staying out of fear seems shortsighted long-term. My father counters that uprooting our entire life disrupts not just his career, but my education and friendships considerably too. Neither seems entirely wrong to me, which makes the whole situation feel more complicated than a simple right-versus-wrong disagreement. I begin wondering whether I should say something, or whether this decision genuinely isn't mine to influence.",
    questions: [
      "What does Delphine's mother argue about the opportunity?",
      "What does Delphine's father counter about uprooting their life?",
      "What does Delphine begin wondering?",
    ],
    trueFalse: [
      { text: "The disagreement becomes harder to ignore over following days.", answer: true },
      { text: "Delphine's mother argues this opportunity may never come again.", answer: true },
      { text: "Delphine's father says the move would disrupt her education too.", answer: true },
      { text: "Delphine feels one parent is completely wrong.", answer: false },
      { text: "Delphine wonders whether she should say something.", answer: true },
    ],
    buildSentence: [
      { target: "This becomes harder to ignore now.", jumbled: ["This", "becomes", "harder", "to", "ignore", "now."] },
      { target: "Neither seems entirely wrong to me.", jumbled: ["Neither", "seems", "entirely", "wrong", "to", "me."] },
      { target: "I begin wondering whether I should speak.", jumbled: ["I", "begin", "wondering", "whether", "I", "should", "speak."] },
      { target: "This opportunity may never come again, she argues.", jumbled: ["This", "opportunity", "may", "never", "come", "again,", "she", "argues."] },
      { target: "This disrupts not just his career, but my friendships too.", jumbled: ["This", "disrupts", "not", "just", "his", "career,", "but", "my", "friendships", "too."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing two people you care about disagreeing, and neither seeming entirely wrong.",
    mySentenceExample: "I noticed two people disagreeing, and neither seemed entirely wrong.",
  },
  {
    number: 3,
    title: "A Conversation with My Mother",
    image: null,
    imageNote: "Delphine sitting with her mother in the living room, both holding mugs, having a calm one-on-one conversation.",
    story:
      "I find a quiet moment to ask my mother directly why this opportunity matters so much to her personally. She explains that she's worked toward something like this for years, and turning it down might mean never having another chance. Moreover, she admits she's scared that if she refuses this offer out of fear, she'll always wonder what she'd given up. I ask whether she's considered how disruptive this could genuinely be for Dad and me, given everything we'd have to leave behind. She acknowledges this honestly, admitting she hasn't fully worked out how to address that part yet.",
    questions: [
      "What does Delphine ask her mother directly?",
      "What does her mother explain about the opportunity?",
      "What does Delphine ask her mother to consider?",
    ],
    trueFalse: [
      { text: "Delphine asks her mother why this opportunity matters so much.", answer: true },
      { text: "Her mother has worked toward this for years.", answer: true },
      { text: "Her mother says she's scared of always wondering what if.", answer: true },
      { text: "Her mother says she's fully figured out how to help everyone adjust.", answer: false },
      { text: "Delphine asks her mother to consider the disruption for the family.", answer: true },
    ],
    buildSentence: [
      { target: "I find a quiet moment now.", jumbled: ["I", "find", "a", "quiet", "moment", "now."] },
      { target: "She admits this honestly to me.", jumbled: ["She", "admits", "this", "honestly", "to", "me."] },
      { target: "She's worked toward this for years.", jumbled: ["She's", "worked", "toward", "this", "for", "years."] },
      { target: "She hasn't fully worked out how to address that.", jumbled: ["She", "hasn't", "fully", "worked", "out", "how", "to", "address", "that."] },
      { target: "She'll always wonder what she'd given up if she refuses.", jumbled: ["She'll", "always", "wonder", "what", "she'd", "given", "up", "if", "she", "refuses."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone to explain why a decision matters so much to them.",
    mySentenceExample: "I asked her to explain why this decision mattered so much.",
  },
  {
    number: 4,
    title: "A Conversation with My Father",
    image: null,
    imageNote: "Delphine sitting with her father in the backyard, both looking out at the garden while talking quietly.",
    story:
      "Later that week, I have a similar conversation with my father, curious to understand his perspective more fully as well. He explains that he's built deep roots here: close friends, a job he genuinely enjoys, and a community that feels like home. He worries that starting over somewhere unfamiliar, at his age, may not be as easy as my mother seems to assume. Nevertheless, he admits he can see why this opportunity matters deeply to her, even if he personally struggles with it. I realize both my parents are wrestling with genuine, legitimate fears, just from entirely different angles.",
    questions: [
      "What does Delphine's father explain about his life here?",
      "What does he worry about regarding starting over?",
      "What does Delphine realize about both her parents?",
    ],
    trueFalse: [
      { text: "Delphine's father has close friends and a job he enjoys.", answer: true },
      { text: "He worries starting over may not be as easy as assumed.", answer: true },
      { text: "He admits he can see why this matters to her.", answer: true },
      { text: "He refuses to acknowledge her perspective at all.", answer: false },
      { text: "Delphine realizes both parents have legitimate fears.", answer: true },
    ],
    buildSentence: [
      { target: "I have a similar conversation later.", jumbled: ["I", "have", "a", "similar", "conversation", "later."] },
      { target: "He's built deep roots here.", jumbled: ["He's", "built", "deep", "roots", "here."] },
      { target: "Both my parents are wrestling with genuine fears.", jumbled: ["Both", "my", "parents", "are", "wrestling", "with", "genuine", "fears."] },
      { target: "He can see why this matters deeply to her.", jumbled: ["He", "can", "see", "why", "this", "matters", "deeply", "to", "her."] },
      { target: "Starting over may not be as easy as she assumes.", jumbled: ["Starting", "over", "may", "not", "be", "as", "easy", "as", "she", "assumes."] },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's fear better after really listening to them.",
    mySentenceExample: "I understood his fear better after really listening to him.",
  },
  {
    number: 5,
    title: "Finding the Words",
    image: null,
    imageNote: "Delphine sitting alone at her desk, writing notes on paper, trying to organize what she wants to say to her parents.",
    story:
      "Having heard both perspectives, I realize I actually understand something neither of my parents has fully expressed to each other directly. My mother hasn't clearly said she's scared, and my father hasn't clearly said he actually supports her ambition despite his fear. I write down what I want to say, worried that speaking up might seem presumptuous for someone my age. Nevertheless, I remind myself that mediating doesn't mean deciding for them, just helping them actually hear each other properly. Taking a deep breath, I decide I'll try bringing this up carefully during dinner tomorrow evening.",
    questions: [
      "What does Delphine realize she understands?",
      "What hasn't my father clearly said, according to Delphine?",
      "What does Delphine decide to do?",
    ],
    trueFalse: [
      { text: "Delphine realizes something neither parent has expressed to each other.", answer: true },
      { text: "Her mother hasn't clearly said she's scared.", answer: true },
      { text: "Her father hasn't clearly said he supports her ambition.", answer: true },
      { text: "Delphine decides mediating means deciding for her parents.", answer: false },
      { text: "Delphine decides to bring this up carefully during dinner.", answer: true },
    ],
    buildSentence: [
      { target: "I write down what I want to say.", jumbled: ["I", "write", "down", "what", "I", "want", "to", "say."] },
      { target: "I take a deep breath now.", jumbled: ["I", "take", "a", "deep", "breath", "now."] },
      { target: "Mediating doesn't mean deciding for them.", jumbled: ["Mediating", "doesn't", "mean", "deciding", "for", "them."] },
      { target: "I'll try bringing this up carefully tomorrow.", jumbled: ["I'll", "try", "bringing", "this", "up", "carefully", "tomorrow."] },
      { target: "Neither of my parents has fully expressed this to each other.", jumbled: ["Neither", "of", "my", "parents", "has", "fully", "expressed", "this", "to", "each", "other."] },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to help two people understand each other better.",
    mySentenceExample: "I decided to help two people understand each other better.",
  },
  {
    number: 6,
    title: "Speaking Up at Dinner",
    image: null,
    imageNote: "Delphine standing at the dinner table, both parents looking at her with surprise as she speaks carefully.",
    story:
      "At dinner, I take a breath and mention, as gently as I can, that I don't think they've actually heard each other's real concerns yet. Both parents look surprised, though neither interrupts, which I take as a cautiously good sign initially. I explain that Mom hasn't said she's scared of regret, and Dad hasn't said he actually admires her ambition. A long silence follows, until my mother reaches over and admits, quietly, that yes, that's exactly how she feels. My father, visibly moved, admits he hadn't realized how much fear was underneath her excitement this whole time.",
    questions: [
      "What does Delphine mention at dinner?",
      "How do both parents react initially?",
      "What does Delphine's mother admit?",
    ],
    trueFalse: [
      { text: "Delphine mentions they haven't heard each other's real concerns.", answer: true },
      { text: "Both parents interrupt Delphine immediately.", answer: false },
      { text: "Delphine's mother admits she's scared of regret.", answer: true },
      { text: "Delphine's father admits he hadn't realized her fear.", answer: true },
      { text: "A long silence follows Delphine's explanation.", answer: true },
    ],
    buildSentence: [
      { target: "I take a breath now.", jumbled: ["I", "take", "a", "breath", "now."] },
      { target: "A long silence follows this now.", jumbled: ["A", "long", "silence", "follows", "this", "now."] },
      { target: "Both parents look surprised at first.", jumbled: ["Both", "parents", "look", "surprised", "at", "first."] },
      { target: "Yes, that's exactly how she feels.", jumbled: ["Yes,", "that's", "exactly", "how", "she", "feels."] },
      { target: "He hadn't realized how much fear was underneath her excitement.", jumbled: ["He", "hadn't", "realized", "how", "much", "fear", "was", "underneath", "her", "excitement."] },
    ],
    mySentencePrompt: "Write or say one sentence about speaking up carefully to help two people finally understand each other.",
    mySentenceExample: "I spoke up carefully to help them finally understand each other.",
  },
  {
    number: 7,
    title: "A Real Conversation, Finally",
    image: null,
    imageNote: "Delphine's parents sitting together on the couch that evening, talking softly, Delphine visible in the background giving them space.",
    story:
      "After dinner, my parents talk for over an hour, this time actually listening rather than simply defending their own positions. I overhear fragments: my mother acknowledging how hard leaving would genuinely be for Dad, and him acknowledging her fear of regret. Neither reaches a final decision that night, though something about their tone has shifted considerably from before. I give them space, retreating to my room, feeling relieved that at least they're finally communicating honestly now. Whatever they ultimately decide, I sense this conversation matters more than the actual outcome itself somehow.",
    questions: [
      "How long do Delphine's parents talk after dinner?",
      "What does Delphine overhear her mother acknowledging?",
      "How does Delphine feel giving them space?",
    ],
    trueFalse: [
      { text: "Delphine's parents talk for over an hour.", answer: true },
      { text: "Her mother acknowledges how hard leaving would be for Dad.", answer: true },
      { text: "They reach a final decision that same night.", answer: false },
      { text: "Delphine feels relieved they're communicating honestly.", answer: true },
      { text: "Delphine senses this conversation matters more than the outcome.", answer: true },
    ],
    buildSentence: [
      { target: "My parents talk for over an hour.", jumbled: ["My", "parents", "talk", "for", "over", "an", "hour."] },
      { target: "I give them space now.", jumbled: ["I", "give", "them", "space", "now."] },
      { target: "I feel relieved about this now.", jumbled: ["I", "feel", "relieved", "about", "this", "now."] },
      { target: "Their tone has shifted considerably from before.", jumbled: ["Their", "tone", "has", "shifted", "considerably", "from", "before."] },
      { target: "This conversation matters more than the actual outcome.", jumbled: ["This", "conversation", "matters", "more", "than", "the", "actual", "outcome."] },
    ],
    mySentencePrompt: "Write or say one sentence about giving two people space to have an honest conversation.",
    mySentenceExample: "I gave my parents space to have an honest conversation.",
  },
  {
    number: 8,
    title: "A Family Decision",
    image: null,
    imageNote: "The whole family sitting together at the kitchen table, a laptop open showing information about the new city, all three looking calm.",
    story:
      "A few days later, my parents call a family meeting, something we rarely do outside of holidays or emergencies. They explain they've decided to accept the offer together, but with a plan that addresses both their concerns directly. My mother will start the new role, while my father takes a few months transitioning his own work remotely before fully relocating. This staggered approach, they explain, gives everyone time to adjust rather than uprooting everything abruptly all at once. I feel proud, realizing this compromise likely wouldn't have emerged without that honest conversation at dinner.",
    questions: [
      "What do Delphine's parents call a few days later?",
      "What have they decided together?",
      "What does the staggered approach give everyone?",
    ],
    trueFalse: [
      { text: "Delphine's parents call a family meeting a few days later.", answer: true },
      { text: "They've decided to accept the offer together with a plan.", answer: true },
      { text: "Her father will relocate immediately with no transition at all.", answer: false },
      { text: "The staggered approach gives everyone time to adjust.", answer: true },
      { text: "Delphine feels proud about this compromise.", answer: true },
    ],
    buildSentence: [
      { target: "They call a family meeting now.", jumbled: ["They", "call", "a", "family", "meeting", "now."] },
      { target: "I feel proud about this now.", jumbled: ["I", "feel", "proud", "about", "this", "now."] },
      { target: "This gives everyone time to adjust.", jumbled: ["This", "gives", "everyone", "time", "to", "adjust."] },
      { target: "They've decided to accept the offer together.", jumbled: ["They've", "decided", "to", "accept", "the", "offer", "together."] },
      { target: "This compromise likely wouldn't have emerged without that conversation.", jumbled: ["This", "compromise", "likely", "wouldn't", "have", "emerged", "without", "that", "conversation."] },
    ],
    mySentencePrompt: "Write or say one sentence about a family finding a compromise that addressed everyone's concerns.",
    mySentenceExample: "My family found a compromise that addressed everyone's concerns.",
  },
  {
    number: 9,
    title: "Saying Goodbye, For Now",
    image: null,
    imageNote: "Delphine hugging friends outside her house, moving boxes visible in the background, an emotional but hopeful scene.",
    story:
      "As moving day approaches, I say goodbye to close friends, feeling a familiar mixture of sadness and cautious excitement simultaneously. Several friends promise to visit, and given how manageable travel actually is now, I believe they genuinely mean it. My father seems calmer than I expected, having had time to process the decision rather than feeling forced into it suddenly. My mother thanks me privately, admitting that my speaking up at dinner had genuinely changed how this entire process unfolded. I realize that sometimes, the most helpful thing you can do isn't choosing a side, but helping people truly hear each other.",
    questions: [
      "What does Delphine feel as moving day approaches?",
      "How does Delphine's father seem compared to what she expected?",
      "What does Delphine's mother thank her for?",
    ],
    trueFalse: [
      { text: "Delphine feels a mixture of sadness and cautious excitement.", answer: true },
      { text: "Several friends promise to visit.", answer: true },
      { text: "Her father seems calmer than Delphine expected.", answer: true },
      { text: "Her mother thanks Delphine for speaking up at dinner.", answer: true },
      { text: "Delphine believes choosing a side would have been more helpful.", answer: false },
    ],
    buildSentence: [
      { target: "I say goodbye to friends now.", jumbled: ["I", "say", "goodbye", "to", "friends", "now."] },
      { target: "Several friends promise to visit.", jumbled: ["Several", "friends", "promise", "to", "visit."] },
      { target: "My mother thanks me privately now.", jumbled: ["My", "mother", "thanks", "me", "privately", "now."] },
      { target: "My father seems calmer than I expected.", jumbled: ["My", "father", "seems", "calmer", "than", "I", "expected."] },
      { target: "Helping people truly hear each other matters most sometimes.", jumbled: ["Helping", "people", "truly", "hear", "each", "other", "matters", "most", "sometimes."] },
    ],
    mySentencePrompt: "Write or say one sentence about the mixed feelings of saying goodbye before a big change.",
    mySentenceExample: "I felt mixed emotions saying goodbye before a big change.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Delphine sitting in her new bedroom weeks later, unpacked boxes around her, writing in a journal with a content expression.",
    story:
      "Looking back on the whole process, I realize how differently things might have gone had I simply stayed silent throughout it all. If my parents had never fully expressed their real fears to each other, the decision may have felt more like a battle than a compromise. Instead, helping them actually listen allowed a solution to emerge that respected both what they needed. I've learned that mediation between people you love isn't about choosing sides, but about creating space for real honesty. In the end, this experience taught me that families, given the chance, can usually find their way to fairness together.",
    questions: [
      "What does Delphine realize looking back on the process?",
      "What might have happened if she had stayed silent?",
      "What has Delphine learned about mediation between people you love?",
    ],
    trueFalse: [
      { text: "Delphine realizes things might have gone differently without her involvement.", answer: true },
      { text: "Without honesty, the decision may have felt more like a battle.", answer: true },
      { text: "Delphine believes mediation means choosing sides between people you love.", answer: false },
      { text: "Delphine learns families can usually find their way to fairness.", answer: true },
      { text: "Helping her parents listen allowed a real solution to emerge.", answer: true },
    ],
    buildSentence: [
      { target: "I look back on this process now.", jumbled: ["I", "look", "back", "on", "this", "process", "now."] },
      { target: "This taught me something valuable in the end.", jumbled: ["This", "taught", "me", "something", "valuable", "in", "the", "end."] },
      { target: "Mediation isn't about choosing sides.", jumbled: ["Mediation", "isn't", "about", "choosing", "sides."] },
      { target: "Families, given the chance, can usually find fairness together.", jumbled: ["Families,", "given", "the", "chance,", "can", "usually", "find", "fairness", "together."] },
      { target: "Had I stayed silent, this might have felt like a battle.", jumbled: ["Had", "I", "stayed", "silent,", "this", "might", "have", "felt", "like", "a", "battle."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from helping people you love understand each other.",
    mySentenceExample: "I learned that helping people understand each other creates real change.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

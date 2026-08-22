// A2 Adults digital storybook, Book 39: "Moving into My First Apartment"
// Static content -- no Supabase. Seventh book in the Adults track, and
// first of a new 2-book batch (Books 39-40) filling Adults out to 8
// books, matching Kids (23-30) and Teens (31-38). Uses the same pattern
// as storybookData7.js through storybookData12.js: 3 questions, 5 True/
// False and 5 Build-a-Sentence per chapter, ordered shortest-to-longest.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Moving into My First Apartment";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Renee standing in the middle of a mostly empty apartment surrounded by moving boxes, holding a set of new keys and smiling proudly, sunlight streaming through a bare window.";

export const CHARACTERS = [
  { name: "Renee", role: "The narrator, a young adult", look: "Hair tied back, comfortable T-shirt, practical but easily overwhelmed by adult responsibilities at first." },
  { name: "Diane", role: "Renee's close friend", look: "Short hair, denim overalls, cheerful and hands-on." },
  { name: "Mr. Osei", role: "Renee's new next-door neighbor", look: "Reading glasses, cardigan, friendly and a little old-fashioned." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Finally Moving Out",
    image: null,
    imageNote: "Renee sitting on her childhood bedroom floor, surrounded by half-packed boxes, looking at an apartment listing on her phone with excitement.",
    story:
      "After three years of saving money carefully and living with my parents again after college, I finally decide it's time to move into my own apartment. My parents support the decision completely, though my mother admits she'll miss having me around the house every evening. Sitting on my childhood bedroom floor, surrounded by half-packed boxes, I scroll through apartment listings with a mixture of nervous excitement and genuine uncertainty. Living independently means budgeting carefully, cooking my own meals, and handling problems without anyone else nearby to help immediately. Still, the idea of finally having my own space thrills me completely.",
    questions: [
      "How long has Renee been living with her parents again?",
      "How does Renee's mother feel about the decision?",
      "What does living independently mean for Renee?",
    ],
    trueFalse: [
      { text: "Renee has been saving money for three years.", answer: true },
      { text: "Renee's parents disapprove of her decision completely.", answer: false },
      { text: "Renee's mother admits she'll miss having her around.", answer: true },
      { text: "Renee feels no uncertainty about this decision at all.", answer: false },
      { text: "Renee feels thrilled about having her own space.", answer: true },
    ],
    buildSentence: [
      { target: "I finally decide it's time.", jumbled: ["finally", "decide", "I", "it's", "time."] },
      { target: "This thrills me completely.", jumbled: ["thrills", "me", "This", "completely."] },
      { target: "I scroll through apartment listings.", jumbled: ["scroll", "through", "I", "apartment", "listings."] },
      { target: "My parents support the decision completely.", jumbled: ["My", "parents", "support", "the", "decision", "completely."] },
      { target: "Living independently means budgeting carefully and cooking my own meals.", jumbled: ["Living", "independently", "means", "budgeting", "carefully", "and", "cooking", "my", "own", "meals."] },
    ],
    mySentencePrompt: "Write or say one sentence about a big step toward independence you took or want to take.",
    mySentenceExample: "Getting my first job was a big step toward independence for me.",
  },
  {
    number: 2,
    title: "Apartment Hunting",
    image: null,
    imageNote: "Renee and Diane standing in a small, empty apartment with a realtor, Renee checking a list on her phone while looking around thoughtfully.",
    story:
      "Diane, my closest friend, offers to join me for apartment viewings, insisting a second opinion always helps with such an important decision. Together, we visit five different apartments across two weekends, each one revealing new compromises between location, price, and available space. One apartment has beautiful natural light but sits far from public transportation, while another feels perfectly located but noticeably cramped and outdated inside. “Trust your gut when you find the right one,” Diane advises, watching me hesitate over yet another listing with mixed feelings. Finally, in a quiet building near a small park, something about the sixth apartment simply feels right.",
    questions: [
      "Who joins Renee for apartment viewings?",
      "How many apartments do they visit?",
      "What advice does Diane give Renee?",
    ],
    trueFalse: [
      { text: "Diane joins Renee for apartment viewings.", answer: true },
      { text: "They visit five different apartments across two weekends.", answer: true },
      { text: "Every apartment they see is absolutely perfect.", answer: false },
      { text: "Diane advises Renee to trust her gut.", answer: true },
      { text: "The sixth apartment finally feels right to Renee.", answer: true },
    ],
    buildSentence: [
      { target: "Diane offers to join me.", jumbled: ["offers", "to", "Diane", "join", "me."] },
      { target: "This finally feels right.", jumbled: ["finally", "feels", "This", "right."] },
      { target: "We visit five different apartments.", jumbled: ["visit", "five", "We", "different", "apartments."] },
      { target: "Trust your gut when you find it.", jumbled: ["your", "gut", "Trust", "when", "you", "find", "it."] },
      { target: "Each one reveals new compromises between location, price, and space.", jumbled: ["Each", "one", "reveals", "new", "compromises", "between", "location,", "price,", "and", "space."] },
    ],
    mySentencePrompt: "Write or say one sentence about searching for the right option among several choices.",
    mySentenceExample: "I searched for the right laptop among several different choices online.",
  },
  {
    number: 3,
    title: "Signing the Lease",
    image: null,
    imageNote: "Renee sitting at a desk in a rental office, signing paperwork nervously while a landlord watches, a pen trembling slightly in her hand.",
    story:
      "The following Monday, I meet the landlord to review the lease agreement, my hands trembling slightly as I hold the pen above the signature line. He explains the monthly rent, security deposit, and building rules calmly, though the amount of paperwork feels genuinely overwhelming for my very first lease. “Take your time reading through everything,” he says patiently, noticing my nervous hesitation over the lengthy document. After carefully reviewing each section, I finally sign my name, officially becoming responsible for an entire apartment for the first time in my life. Walking outside afterward, the reality of this commitment settles in slowly.",
    questions: [
      "What does Renee's hand do while holding the pen?",
      "What does the landlord explain calmly?",
      "How does Renee feel walking outside afterward?",
    ],
    trueFalse: [
      { text: "Renee's hands tremble slightly while signing.", answer: true },
      { text: "The landlord explains the rent and building rules.", answer: true },
      { text: "The landlord rushes Renee through the paperwork.", answer: false },
      { text: "Renee finally signs her name on the lease.", answer: true },
      { text: "Renee feels nothing significant about this commitment.", answer: false },
    ],
    buildSentence: [
      { target: "My hands tremble slightly.", jumbled: ["tremble", "slightly.", "My", "hands"] },
      { target: "I finally sign my name.", jumbled: ["finally", "sign", "I", "my", "name."] },
      { target: "Take your time reading everything.", jumbled: ["your", "time", "Take", "reading", "everything."] },
      { target: "This paperwork feels genuinely overwhelming.", jumbled: ["feels", "genuinely", "This", "paperwork", "overwhelming."] },
      { target: "The reality of this commitment settles in slowly.", jumbled: ["The", "reality", "of", "this", "commitment", "settles", "in", "slowly."] },
    ],
    mySentencePrompt: "Write or say one sentence about signing something important for the first time.",
    mySentenceExample: "I felt nervous signing my first work contract last year.",
  },
  {
    number: 4,
    title: "Moving Day",
    image: null,
    imageNote: "Renee, Diane, and two other friends carrying boxes and furniture up a narrow staircase into the new apartment, sweating but laughing together.",
    story:
      "Moving day arrives with chaotic energy, as Diane and two other friends show up early to help carry boxes up three narrow flights of stairs. By midday, our collective energy fades noticeably, replaced by exhausted laughter every time someone nearly drops a heavy box on the stairs. “Whoever designed this staircase clearly hated movers,” Diane jokes, wiping sweat from her forehead between trips up and down. Despite the exhausting physical labor, something feels genuinely special about filling an empty apartment with familiar furniture and belongings. By evening, boxes fill every corner of the space, but it already feels undeniably like mine.",
    questions: [
      "Who helps Renee move?",
      "How many flights of stairs do they carry boxes up?",
      "How does the apartment feel by evening?",
    ],
    trueFalse: [
      { text: "Diane and two other friends help Renee move.", answer: true },
      { text: "They carry boxes up three narrow flights of stairs.", answer: true },
      { text: "Everyone stays full of energy the entire day.", answer: false },
      { text: "Diane jokes about the staircase design.", answer: true },
      { text: "The apartment already feels like Renee's by evening.", answer: true },
    ],
    buildSentence: [
      { target: "Moving day arrives finally.", jumbled: ["day", "arrives", "Moving", "finally."] },
      { target: "This feels genuinely special today.", jumbled: ["feels", "genuinely", "This", "special", "today."] },
      { target: "Our energy fades noticeably by midday.", jumbled: ["Our", "energy", "fades", "noticeably", "by", "midday."] },
      { target: "Someone nearly drops a heavy box.", jumbled: ["Someone", "nearly", "drops", "a", "heavy", "box."] },
      { target: "It already feels undeniably like mine by evening.", jumbled: ["It", "already", "feels", "undeniably", "like", "mine", "by", "evening."] },
    ],
    mySentencePrompt: "Write or say one sentence about a tiring day that friends helped you get through.",
    mySentenceExample: "My friends helped me get through a tiring moving day last summer.",
  },
  {
    number: 5,
    title: "Assembling Furniture",
    image: null,
    imageNote: "Renee sitting on the floor surrounded by furniture parts and an instruction manual, holding a screwdriver with a confused expression, one bookshelf leaning awkwardly.",
    story:
      "Alone that evening, I face my biggest challenge yet: assembling a flat-pack bookshelf using only a small instruction booklet and a single tiny screwdriver. The diagrams seem straightforward at first, but somehow I end up with several mysterious extra screws and one noticeably crooked shelf. After nearly an hour of quiet frustration, I finally realize I attached one panel completely backward from the very beginning. Rather than starting over entirely, I carefully disassemble just that section, correcting my mistake with newfound patience. When the bookshelf finally stands upright and stable, I feel a surprisingly deep sense of accomplishment over something so seemingly small.",
    questions: [
      "What furniture does Renee try to assemble alone?",
      "What mistake does Renee eventually realize she made?",
      "How does Renee feel once the bookshelf stands stable?",
    ],
    trueFalse: [
      { text: "Renee tries to assemble a flat-pack bookshelf.", answer: true },
      { text: "The assembly goes perfectly with no problems at all.", answer: false },
      { text: "Renee realizes she attached a panel backward.", answer: true },
      { text: "Renee decides to throw the bookshelf away completely.", answer: false },
      { text: "Renee feels a deep sense of accomplishment afterward.", answer: true },
    ],
    buildSentence: [
      { target: "I face my biggest challenge.", jumbled: ["face", "my", "I", "biggest", "challenge."] },
      { target: "I feel a deep accomplishment.", jumbled: ["feel", "a", "I", "deep", "accomplishment."] },
      { target: "One shelf looks noticeably crooked.", jumbled: ["One", "shelf", "looks", "noticeably", "crooked."] },
      { target: "I attached one panel completely backward.", jumbled: ["I", "attached", "one", "panel", "completely", "backward."] },
      { target: "I correct my mistake with newfound patience.", jumbled: ["I", "correct", "my", "mistake", "with", "newfound", "patience."] },
    ],
    mySentencePrompt: "Write or say one sentence about fixing a mistake you made while building or making something.",
    mySentenceExample: "I fixed a mistake I made while building a model airplane.",
  },
  {
    number: 6,
    title: "The Leaky Faucet",
    image: null,
    imageNote: "Renee kneeling under the kitchen sink with a flashlight and wrench, examining a dripping pipe, an online repair tutorial open on her phone nearby.",
    story:
      "A week after moving in, I notice a slow, steady drip coming from beneath the kitchen sink, forming an annoying puddle each morning. Uncertain whether to call the landlord immediately or attempt fixing it myself, I decide to research the problem online first. A helpful video tutorial explains the issue looks like a simple loose connection rather than anything seriously broken. Kneeling awkwardly under the sink with a wrench and flashlight, I carefully tighten the connection, feeling oddly proud of solving a real household problem independently. The dripping finally stops completely, and I text Diane immediately, practically bragging about my small victory.",
    questions: [
      "What does Renee notice a week after moving in?",
      "What does Renee do before calling the landlord?",
      "How does Renee feel after fixing the problem?",
    ],
    trueFalse: [
      { text: "Renee notices a slow drip under the kitchen sink.", answer: true },
      { text: "Renee calls the landlord immediately without researching first.", answer: false },
      { text: "The tutorial explains it looks like a loose connection.", answer: true },
      { text: "Renee successfully fixes the leak herself.", answer: true },
      { text: "Renee feels embarrassed rather than proud afterward.", answer: false },
    ],
    buildSentence: [
      { target: "I notice a slow drip.", jumbled: ["notice", "a", "I", "slow", "drip."] },
      { target: "The dripping finally stops completely.", jumbled: ["dripping", "finally", "The", "stops", "completely."] },
      { target: "I research the problem online first.", jumbled: ["research", "the", "I", "problem", "online", "first."] },
      { target: "I text Diane immediately about it.", jumbled: ["text", "Diane", "I", "immediately", "about", "it."] },
      { target: "I feel oddly proud of solving this independently.", jumbled: ["I", "feel", "oddly", "proud", "of", "solving", "this", "independently."] },
    ],
    mySentencePrompt: "Write or say one sentence about solving a small household problem on your own.",
    mySentenceExample: "I solved a small problem with my computer completely on my own.",
  },
  {
    number: 7,
    title: "Meeting the Neighbor",
    image: null,
    imageNote: "Renee standing in the hallway holding a small toolbox, chatting with Mr. Osei at his open apartment door, both smiling warmly.",
    story:
      "While searching for a wrench to tackle another small repair, I realize I don't actually own many tools yet in my new apartment. Nervously, I knock on my next-door neighbor's door, hoping he might have something I could borrow for a few minutes. Mr. Osei answers warmly, introducing himself properly for the first time since I moved in two weeks earlier. He not only lends me a wrench but also offers helpful advice about the building's occasionally quirky plumbing system. “Feel free to knock anytime you need something,” he says kindly, and I walk back to my apartment feeling genuinely less alone in this new place.",
    questions: [
      "What does Renee realize she doesn't own yet?",
      "Who does Renee knock on the door of?",
      "What does Mr. Osei offer besides the wrench?",
    ],
    trueFalse: [
      { text: "Renee realizes she doesn't own many tools yet.", answer: true },
      { text: "Renee knocks on Mr. Osei's door.", answer: true },
      { text: "Mr. Osei refuses to lend her anything.", answer: false },
      { text: "Mr. Osei offers advice about the building's plumbing.", answer: true },
      { text: "Renee feels more alone after meeting Mr. Osei.", answer: false },
    ],
    buildSentence: [
      { target: "I knock on his door.", jumbled: ["knock", "on", "I", "his", "door."] },
      { target: "Mr. Osei answers warmly today.", jumbled: ["answers", "warmly", "Mr.", "Osei", "today."] },
      { target: "He lends me a wrench.", jumbled: ["lends", "me", "He", "a", "wrench."] },
      { target: "Feel free to knock anytime.", jumbled: ["free", "to", "Feel", "knock", "anytime."] },
      { target: "I feel genuinely less alone in this new place.", jumbled: ["I", "feel", "genuinely", "less", "alone", "in", "this", "new", "place."] },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a neighbor for the first time.",
    mySentenceExample: "I met my neighbor for the first time when I needed to borrow sugar.",
  },
  {
    number: 8,
    title: "The First Grocery Shop",
    image: null,
    imageNote: "Renee pushing a grocery cart alone through a supermarket aisle, reading labels carefully and adding a few simple ingredients, a small shopping list in hand.",
    story:
      "For the first time, I do a proper grocery shop entirely for myself, without my mother's usual list guiding every single purchase decision. Standing in the produce aisle, I realize I genuinely don't know how much of anything a single person actually needs for one week. I buy modest portions of vegetables, a few basic proteins, and ingredients for two or three simple meals I already know how to cook confidently. At checkout, my total feels surprisingly small compared to family shopping trips, a strange but satisfying reminder of my new independent life. Carrying bags home alone, I feel oddly accomplished by something so ordinary.",
    questions: [
      "What does Renee do for the first time?",
      "What does Renee realize in the produce aisle?",
      "How does Renee's total at checkout feel to her?",
    ],
    trueFalse: [
      { text: "Renee does a grocery shop entirely for herself.", answer: true },
      { text: "Renee already knows exactly how much food she needs.", answer: false },
      { text: "Renee buys ingredients for meals she knows how to cook.", answer: true },
      { text: "Her total at checkout feels surprisingly large.", answer: false },
      { text: "Renee feels oddly accomplished by this ordinary task.", answer: true },
    ],
    buildSentence: [
      { target: "I do a proper shop.", jumbled: ["do", "a", "I", "proper", "shop."] },
      { target: "I feel oddly accomplished today.", jumbled: ["feel", "oddly", "I", "accomplished", "today."] },
      { target: "I buy modest portions carefully.", jumbled: ["buy", "modest", "I", "portions", "carefully."] },
      { target: "My total feels surprisingly small this time.", jumbled: ["My", "total", "feels", "surprisingly", "small", "this", "time."] },
      { target: "This is a strange but satisfying reminder of my new life.", jumbled: ["This", "is", "a", "strange", "but", "satisfying", "reminder", "of", "my", "new", "life."] },
    ],
    mySentencePrompt: "Write or say one sentence about doing an everyday task independently for the first time.",
    mySentenceExample: "I cooked a full dinner independently for the first time last week.",
  },
  {
    number: 9,
    title: "A Quiet First Night",
    image: null,
    imageNote: "Renee sitting alone on the floor of her mostly furnished apartment at night, wrapped in a blanket, city lights visible through the window.",
    story:
      "That night, after Diane leaves and the apartment finally falls completely silent, I sit alone on the floor wrapped in a blanket, taking in my new surroundings. The quiet feels strange after years of family noise constantly filling every room of my parents' house. For a brief, honest moment, loneliness creeps in unexpectedly, mixing uncomfortably with the pride I felt just hours earlier during moving day. I remind myself this adjustment period is completely normal, and that independence naturally includes both wonderful freedom and occasional quiet moments like this one. Watching city lights through my window, I slowly feel calmer.",
    questions: [
      "What does Renee do after Diane leaves?",
      "Why does the quiet feel strange to Renee?",
      "What does Renee remind herself about this adjustment period?",
    ],
    trueFalse: [
      { text: "Renee sits alone on the floor wrapped in a blanket.", answer: true },
      { text: "The quiet feels completely normal and familiar immediately.", answer: false },
      { text: "Loneliness creeps in unexpectedly for a moment.", answer: true },
      { text: "Renee reminds herself this adjustment is completely normal.", answer: true },
      { text: "Renee feels no different watching the city lights.", answer: false },
    ],
    buildSentence: [
      { target: "The apartment falls silent completely.", jumbled: ["apartment", "falls", "The", "silent", "completely."] },
      { target: "Loneliness creeps in unexpectedly.", jumbled: ["creeps", "in", "Loneliness", "unexpectedly."] },
      { target: "I slowly feel calmer now.", jumbled: ["slowly", "feel", "I", "calmer", "now."] },
      { target: "This adjustment period is completely normal.", jumbled: ["This", "adjustment", "period", "is", "completely", "normal."] },
      { target: "Independence naturally includes both freedom and quiet moments.", jumbled: ["Independence", "naturally", "includes", "both", "freedom", "and", "quiet", "moments."] },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment when you felt both proud and a little lonely.",
    mySentenceExample: "I felt both proud and a little lonely on my first night living alone.",
  },
  {
    number: 10,
    title: "Making It Home",
    image: null,
    imageNote: "Renee standing in her fully decorated, cozy apartment weeks later, hanging a framed photo on the wall, plants and personal touches visible throughout the room.",
    story:
      "Several weeks later, my apartment finally feels completely different from the empty, echoing space I first walked into with a set of new keys. Framed photos hang on the walls, plants sit thriving near the window, and familiar smells from home-cooked meals now fill the kitchen regularly. Diane visits often, always commenting on how much more like “me” the space feels with each passing week. Looking back, the overwhelming lease-signing, the wobbly bookshelf, and even that lonely first night all feel like meaningful steps rather than mistakes along this journey. This apartment isn't just a place I live now; it genuinely feels like home.",
    questions: [
      "How does the apartment feel several weeks later?",
      "What does Diane comment on during her visits?",
      "How does Renee view the earlier struggles now?",
    ],
    trueFalse: [
      { text: "The apartment still feels empty and echoing weeks later.", answer: false },
      { text: "Diane comments on how much more like Renee the space feels.", answer: true },
      { text: "Renee views the earlier struggles as meaningful steps.", answer: true },
      { text: "Renee still feels this is just a place she lives, nothing more.", answer: false },
      { text: "Plants sit thriving near the window.", answer: true },
    ],
    buildSentence: [
      { target: "This feels completely different now.", jumbled: ["feels", "completely", "This", "different", "now."] },
      { target: "Plants sit thriving near the window.", jumbled: ["Plants", "sit", "thriving", "near", "the", "window."] },
      { target: "Diane visits often these days.", jumbled: ["visits", "often", "Diane", "these", "days."] },
      { target: "This genuinely feels like home now.", jumbled: ["This", "genuinely", "feels", "like", "home", "now."] },
      { target: "Those earlier struggles feel like meaningful steps along this journey.", jumbled: ["Those", "earlier", "struggles", "feel", "like", "meaningful", "steps", "along", "this", "journey."] },
    ],
    mySentencePrompt: "Write or say one sentence about a place that grew to feel like home over time.",
    mySentenceExample: "My dorm room grew to feel like home after a few months at university.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A2 Teens digital storybook, Book 35: "My First Concert"
// Static content -- no Supabase. Fifth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "My First Concert";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Harper and Naomi standing in a crowded concert venue, arms raised and cheering under colorful stage lights, the silhouette of a band performing in the distance.";

export const CHARACTERS = [
  { name: "Harper", role: "The narrator, a teenager", look: "Wavy hair, band T-shirt, excited but a little anxious about independence." },
  { name: "Naomi", role: "Harper's best friend", look: "Short pixie cut, denim jacket covered in pins, adventurous and outgoing." },
  { name: "Mom", role: "Harper's mother", look: "Cardigan, watchful but ultimately trusting.", },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Tickets",
    image: null,
    imageNote: "Harper and Naomi jumping excitedly in Harper's bedroom, holding up two printed concert tickets, a poster of their favorite band on the wall behind them.",
    story:
      "Naomi bursts into my room waving her phone frantically, practically screaming that she just bought us tickets to see our favorite band live. I stare at the confirmation screen in disbelief, unable to process that we're actually going to see them perform in person next month. We have listened to this band's music together since middle school, memorizing every lyric during countless sleepovers and long bus rides. “This is actually happening,” I say, still slightly stunned, while Naomi practically vibrates with uncontainable excitement beside me. For the rest of the evening, we can't stop replaying their songs, imagining what the actual concert will feel like.",
    questions: [
      "What does Naomi buy?",
      "How long have they listened to this band together?",
      "How does Harper feel about the news?",
    ],
    trueFalse: [
      { text: "Naomi buys tickets to their favorite band's concert.", answer: true },
      { text: "They have listened to this band since middle school.", answer: true },
      { text: "Harper feels completely unbothered by the news.", answer: false },
      { text: "The concert is happening the very next day.", answer: false },
      { text: "They spend the evening replaying the band's songs.", answer: true },
    ],
    buildSentence: [
      { target: "This is actually happening.", jumbled: ["actually", "happening.", "This", "is"] },
      { target: "Naomi bursts into my room.", jumbled: ["bursts", "into", "Naomi", "my", "room."] },
      { target: "I stare in disbelief today.", jumbled: ["stare", "in", "I", "disbelief", "today."] },
      { target: "We memorized every lyric together.", jumbled: ["memorized", "every", "We", "lyric", "together."] },
      { target: "We can't stop replaying their songs all evening.", jumbled: ["can't", "stop", "We", "replaying", "their", "songs", "all", "evening."] },
    ],
    mySentencePrompt: "Write or say one sentence about exciting news someone shared with you.",
    mySentenceExample: "My friend shared exciting news about winning a school award.",
  },
  {
    number: 2,
    title: "Asking Permission",
    image: null,
    imageNote: "Harper standing nervously in the kitchen explaining the concert plan to Mom, who listens with a thoughtful, slightly concerned expression.",
    story:
      "Convincing Mom to let us attend without an adult chaperone turns out to be far more difficult than actually buying the tickets themselves. “You've never gone anywhere that crowded without me,” she says, her forehead creasing with obvious worry as I explain our plan. I promise repeatedly to text updates throughout the night and establish a clear, reliable meeting point for afterward. After nearly twenty minutes of careful negotiation, Mom finally agrees, though her conditions include a strict curfew and constant phone communication. Walking away, relief floods through me, mixed with a new sense of responsibility I hadn't quite expected to feel.",
    questions: [
      "What does Harper need to convince Mom about?",
      "What does Mom say she's worried about?",
      "What does Harper promise to do?",
    ],
    trueFalse: [
      { text: "Convincing Mom is harder than buying the tickets.", answer: true },
      { text: "Mom agrees immediately without any conditions.", answer: false },
      { text: "Harper promises to text updates throughout the night.", answer: true },
      { text: "Mom sets a strict curfew as a condition.", answer: true },
      { text: "Harper feels no responsibility about this at all.", answer: false },
    ],
    buildSentence: [
      { target: "Mom finally agrees today.", jumbled: ["finally", "agrees", "Mom", "today."] },
      { target: "Relief floods through me.", jumbled: ["floods", "through", "Relief", "me."] },
      { target: "I promise to text updates.", jumbled: ["promise", "to", "I", "text", "updates."] },
      { target: "Her forehead creases with worry.", jumbled: ["creases", "with", "Her", "forehead", "worry."] },
      { target: "I feel a new sense of responsibility.", jumbled: ["feel", "a", "I", "new", "sense", "of", "responsibility."] },
    ],
    mySentencePrompt: "Write or say one sentence about convincing a parent to let you do something new.",
    mySentenceExample: "I convinced my dad to let me stay out later for a school event.",
  },
  {
    number: 3,
    title: "Planning the Night",
    image: null,
    imageNote: "Harper and Naomi sitting on the bedroom floor with a paper map spread out, marking a meeting point and planning their outfits laid out nearby.",
    story:
      "With Mom's cautious approval secured, Naomi and I spend the following days meticulously planning every logistical detail of concert night. We choose outfits together, obsessing over what feels stylish yet practical enough for hours of standing in a crowd. Naomi's older cousin agrees to drop us off and pick us up afterward, which reassures Mom considerably during our final negotiation. We mark a specific meeting spot near the venue's east entrance in case phones die or we somehow get separated inside. By the night before, our carefully organized plan feels almost as exciting as the actual concert itself.",
    questions: [
      "What do Harper and Naomi choose together?",
      "Who agrees to drive them?",
      "What do they mark near the venue?",
    ],
    trueFalse: [
      { text: "Harper and Naomi choose outfits together.", answer: true },
      { text: "Naomi's cousin agrees to drive them.", answer: true },
      { text: "They mark a meeting spot near the east entrance.", answer: true },
      { text: "They make no plan at all for getting separated.", answer: false },
      { text: "Harper feels bored planning the details.", answer: false },
    ],
    buildSentence: [
      { target: "We choose outfits together.", jumbled: ["choose", "outfits", "We", "together."] },
      { target: "We mark a meeting spot.", jumbled: ["mark", "a", "We", "meeting", "spot."] },
      { target: "This reassures Mom considerably.", jumbled: ["reassures", "Mom", "This", "considerably."] },
      { target: "We plan every logistical detail.", jumbled: ["plan", "every", "We", "logistical", "detail."] },
      { target: "Our plan feels almost as exciting as the concert.", jumbled: ["Our", "plan", "feels", "almost", "as", "exciting", "as", "the", "concert."] },
    ],
    mySentencePrompt: "Write or say one sentence about planning the details of something exciting.",
    mySentenceExample: "I planned every detail of my birthday outing with my friends.",
  },
  {
    number: 4,
    title: "The Long Line",
    image: null,
    imageNote: "Harper and Naomi standing in a long, winding line outside a concert venue at dusk, surrounded by other excited fans, string lights glowing overhead.",
    story:
      "We arrive at the venue nearly two hours before doors open, only to find a line already snaking around an entire city block. Naomi immediately starts chatting with strangers nearby, discovering shared favorite songs and swapping predictions about the setlist enthusiastically. The anticipation building throughout the line feels almost tangible, an electric current running through every excited fan waiting alongside us. As the sun sets slowly behind the venue, string lights flicker on above the entrance, adding to the growing magic of the evening. When the doors finally open, the crowd surges forward with a collective, overwhelming cheer.",
    questions: [
      "How early do they arrive?",
      "What does Naomi do while waiting in line?",
      "What happens when the doors finally open?",
    ],
    trueFalse: [
      { text: "They arrive nearly two hours before doors open.", answer: true },
      { text: "Naomi refuses to talk to anyone in line.", answer: false },
      { text: "String lights flicker on above the entrance.", answer: true },
      { text: "The crowd stays completely silent when doors open.", answer: false },
      { text: "The line wraps around an entire city block.", answer: true },
    ],
    buildSentence: [
      { target: "The line snakes around.", jumbled: ["snakes", "around.", "The", "line"] },
      { target: "The crowd surges forward.", jumbled: ["surges", "forward.", "The", "crowd"] },
      { target: "Naomi chats with strangers nearby.", jumbled: ["chats", "with", "Naomi", "strangers", "nearby."] },
      { target: "The anticipation feels almost tangible.", jumbled: ["feels", "almost", "The", "anticipation", "tangible."] },
      { target: "An electric current runs through every excited fan.", jumbled: ["An", "electric", "current", "runs", "through", "every", "excited", "fan."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting excitedly for something to begin.",
    mySentenceExample: "I waited excitedly in line for the amusement park to open.",
  },
  {
    number: 5,
    title: "Losing Naomi",
    image: null,
    imageNote: "Harper standing alone in a densely packed crowd, looking around frantically with a worried expression, phone held up searching for signal.",
    story:
      "Inside the venue, the crowd pushes and shifts constantly, and somewhere in that chaotic movement, Naomi's hand slips from mine completely. Panic rises quickly in my chest as I spin around, scanning unfamiliar faces desperately for any sign of her familiar denim jacket. My phone shows barely any signal in the packed space, and my texts refuse to send no matter how many times I try. For several agonizing minutes, I feel genuinely small and frightened, surrounded by hundreds of strangers in an unfamiliar place without my best friend nearby. Remembering our backup plan becomes my only source of comfort.",
    questions: [
      "What happens to Naomi's hand?",
      "What does Harper scan for?",
      "Why don't Harper's texts send?",
    ],
    trueFalse: [
      { text: "Naomi's hand slips from Harper's grip.", answer: true },
      { text: "Harper feels completely calm about being separated.", answer: false },
      { text: "Harper's texts won't send due to bad signal.", answer: true },
      { text: "Harper immediately finds Naomi within seconds.", answer: false },
      { text: "Harper remembers their backup plan.", answer: true },
    ],
    buildSentence: [
      { target: "Panic rises in my chest.", jumbled: ["rises", "in", "Panic", "my", "chest."] },
      { target: "I feel genuinely small now.", jumbled: ["feel", "genuinely", "I", "small", "now."] },
      { target: "My texts refuse to send.", jumbled: ["refuse", "to", "My", "texts", "send."] },
      { target: "I scan unfamiliar faces desperately.", jumbled: ["scan", "unfamiliar", "I", "faces", "desperately."] },
      { target: "Remembering our backup plan becomes my only comfort.", jumbled: ["Remembering", "our", "backup", "plan", "becomes", "my", "only", "comfort."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you got separated from someone in a crowd.",
    mySentenceExample: "I got separated from my mom once in a busy shopping mall.",
  },
  {
    number: 6,
    title: "Staying Calm",
    image: null,
    imageNote: "Harper pushing calmly through the crowd toward the venue's east entrance sign, spotting Naomi waving from a distance with relief on both faces.",
    story:
      "Taking a deep breath, I force myself to remember our carefully planned meeting spot near the east entrance, exactly as we had discussed the night before. Instead of panicking further, I calmly navigate toward that direction, weaving carefully through the dense, ever-shifting crowd around me. My heart still pounds anxiously, but having an actual plan makes the overwhelming situation feel manageable rather than completely hopeless. After several tense minutes of searching, I finally spot Naomi's distinctive denim jacket near the entrance, waving both arms frantically above her head. Relief crashes over me instantly as we reunite, hugging tightly amid the chaos.",
    questions: [
      "What does Harper force herself to remember?",
      "How does having a plan help Harper?",
      "What does Harper finally spot?",
    ],
    trueFalse: [
      { text: "Harper remembers their planned meeting spot.", answer: true },
      { text: "Having a plan makes Harper feel more hopeless.", answer: false },
      { text: "Harper spots Naomi's denim jacket near the entrance.", answer: true },
      { text: "They never actually find each other.", answer: false },
      { text: "Harper feels relief when they reunite.", answer: true },
    ],
    buildSentence: [
      { target: "I take a deep breath.", jumbled: ["take", "a", "I", "deep", "breath."] },
      { target: "Relief crashes over me.", jumbled: ["crashes", "over", "Relief", "me."] },
      { target: "I finally spot Naomi's jacket.", jumbled: ["finally", "spot", "I", "Naomi's", "jacket."] },
      { target: "My heart still pounds anxiously.", jumbled: ["still", "pounds", "My", "heart", "anxiously."] },
      { target: "Having an actual plan makes this feel manageable.", jumbled: ["Having", "an", "actual", "plan", "makes", "this", "feel", "manageable."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm during a stressful moment.",
    mySentenceExample: "I stayed calm during the fire drill by remembering the exit plan.",
  },
  {
    number: 7,
    title: "The Show Begins",
    image: null,
    imageNote: "Harper and Naomi standing together with arms raised, colorful stage lights illuminating their thrilled faces as the band performs in the background.",
    story:
      "Reunited safely, Naomi and I push together toward a better spot just as the lights suddenly dim and the crowd erupts into deafening cheers. The band walks onstage, and the opening chords of their most popular song send electric energy rippling through the entire crowd instantly. I scream along with every lyric, my earlier panic completely forgotten, replaced entirely by pure, uncontainable joy. Naomi grabs my hand again, this time intentionally, and we jump together in perfect rhythm with thousands of other fans around us. Nothing about this moment feels ordinary; everything sparkles with an energy I have never experienced before.",
    questions: [
      "What happens as the lights dim?",
      "How does Harper feel singing along?",
      "What does Naomi do with Harper's hand this time?",
    ],
    trueFalse: [
      { text: "The band walks onstage as the lights dim.", answer: true },
      { text: "Harper feels only panic during the performance.", answer: false },
      { text: "Naomi grabs Harper's hand intentionally this time.", answer: true },
      { text: "The crowd stays completely quiet during the show.", answer: false },
      { text: "Harper feels pure, uncontainable joy.", answer: true },
    ],
    buildSentence: [
      { target: "The lights suddenly dim.", jumbled: ["suddenly", "dim.", "The", "lights"] },
      { target: "I scream along happily.", jumbled: ["scream", "along", "I", "happily."] },
      { target: "We jump together in rhythm.", jumbled: ["jump", "together", "We", "in", "rhythm."] },
      { target: "Naomi grabs my hand again.", jumbled: ["grabs", "my", "Naomi", "hand", "again."] },
      { target: "Nothing about this moment feels ordinary at all.", jumbled: ["Nothing", "about", "this", "moment", "feels", "ordinary", "at", "all."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when you felt pure joy.",
    mySentenceExample: "I felt pure joy watching fireworks with my whole family together.",
  },
  {
    number: 8,
    title: "An Encore Surprise",
    image: null,
    imageNote: "The lead singer sitting alone on the edge of the stage with an acoustic guitar, spotlight focused, the crowd holding up phone lights during a quiet encore moment.",
    story:
      "Just when we assume the concert has ended, the lead singer walks back out alone, carrying only an acoustic guitar and a single spotlight. The entire crowd falls into a hushed, reverent silence as she begins an unplugged, stripped-down version of an older, lesser-known song. Naomi and I exchange amazed glances, recognizing the song immediately from our earliest days as fans years ago. Phones rise around us, their small lights transforming the venue into something resembling a sea of tiny, twinkling stars. This unexpected, intimate moment feels even more special than the loud, energetic songs performed earlier.",
    questions: [
      "What does the lead singer come back with?",
      "How does the crowd react to this moment?",
      "How does this moment compare to the earlier songs?",
    ],
    trueFalse: [
      { text: "The singer comes back with an acoustic guitar.", answer: true },
      { text: "The crowd stays loud and chaotic during this moment.", answer: false },
      { text: "Harper and Naomi recognize the song immediately.", answer: true },
      { text: "Phones rise around them like tiny lights.", answer: true },
      { text: "This moment feels less special than the loud songs.", answer: false },
    ],
    buildSentence: [
      { target: "The crowd falls silent.", jumbled: ["falls", "silent.", "The", "crowd"] },
      { target: "We exchange amazed glances.", jumbled: ["exchange", "amazed", "We", "glances."] },
      { target: "Phones rise around us.", jumbled: ["rise", "around", "Phones", "us."] },
      { target: "We recognize the song immediately.", jumbled: ["recognize", "the", "We", "song", "immediately."] },
      { target: "This moment feels even more special than the loud songs.", jumbled: ["This", "moment", "feels", "even", "more", "special", "than", "the", "loud", "songs."] },
    ],
    mySentencePrompt: "Write or say one sentence about an unexpected moment that surprised you.",
    mySentenceExample: "An unexpected surprise party surprised me completely on my last birthday.",
  },
  {
    number: 9,
    title: "The Walk Home",
    image: null,
    imageNote: "Harper and Naomi walking side by side toward the pickup spot after the concert, both slightly tired but glowing with happiness, streetlights illuminating the sidewalk.",
    story:
      "As the venue empties, Naomi and I walk together toward our designated pickup spot, ears still ringing pleasantly from hours of loud music. My legs ache from standing and jumping for so long, but honestly, I barely notice the discomfort through my lingering excitement. We replay our favorite moments from the entire night, especially the surprising acoustic encore that neither of us expected at all. “Best night ever,” Naomi declares confidently, and for once, I completely agree without any hesitation whatsoever. Under the streetlights, walking slowly toward her cousin's waiting car, everything about tonight feels perfectly, unforgettably complete.",
    questions: [
      "How do Harper's ears feel afterward?",
      "What do they replay while walking?",
      "What does Naomi declare about the night?",
    ],
    trueFalse: [
      { text: "Harper's ears still ring pleasantly.", answer: true },
      { text: "Harper feels no excitement left by this point.", answer: false },
      { text: "They replay their favorite moments while walking.", answer: true },
      { text: "Naomi declares it was the best night ever.", answer: true },
      { text: "Harper disagrees strongly with Naomi's statement.", answer: false },
    ],
    buildSentence: [
      { target: "My legs ache slightly.", jumbled: ["ache", "slightly.", "My", "legs"] },
      { target: "Best night ever, honestly.", jumbled: ["night", "ever,", "Best", "honestly."] },
      { target: "We replay our favorite moments.", jumbled: ["replay", "our", "We", "favorite", "moments."] },
      { target: "I completely agree without hesitation.", jumbled: ["completely", "agree", "I", "without", "hesitation."] },
      { target: "Everything about tonight feels perfectly, unforgettably complete.", jumbled: ["Everything", "about", "tonight", "feels", "perfectly,", "unforgettably", "complete."] },
    ],
    mySentencePrompt: "Write or say one sentence about walking home after a memorable event.",
    mySentenceExample: "I walked home smiling after a memorable day at the fair.",
  },
  {
    number: 10,
    title: "A Night to Remember",
    image: null,
    imageNote: "Harper sitting on her bed at home telling Mom excitedly about the concert, phone photos spread across the blanket between them.",
    story:
      "Back home safely before curfew, I find Mom waiting up in the living room, clearly relieved to see me walk through the door unharmed. I tell her everything, from the exciting anticipation of the long line to the terrifying few minutes when Naomi and I got separated inside. Instead of worrying more, Mom seems genuinely proud hearing how calmly I handled that scary moment using our backup plan. “Sounds like you handled it perfectly,” she says warmly, and something about her trust makes tonight feel even more meaningful. Lying in bed afterward, I already find myself dreaming about the next concert.",
    questions: [
      "Who is waiting up for Harper?",
      "What does Harper tell Mom about?",
      "What does Mom say about how Harper handled it?",
    ],
    trueFalse: [
      { text: "Mom is waiting up in the living room.", answer: true },
      { text: "Harper hides the separation incident from Mom.", answer: false },
      { text: "Mom seems proud of how Harper handled the situation.", answer: true },
      { text: "Harper feels no desire to attend another concert.", answer: false },
      { text: "Mom's trust makes the night feel more meaningful.", answer: true },
    ],
    buildSentence: [
      { target: "Mom waits up quietly.", jumbled: ["waits", "up", "Mom", "quietly."] },
      { target: "I tell her everything honestly.", jumbled: ["tell", "her", "I", "everything", "honestly."] },
      { target: "Sounds like you handled it perfectly.", jumbled: ["like", "you", "Sounds", "handled", "it", "perfectly."] },
      { target: "Her trust makes tonight feel meaningful.", jumbled: ["trust", "makes", "Her", "tonight", "feel", "meaningful."] },
      { target: "I already find myself dreaming about the next concert.", jumbled: ["I", "already", "find", "myself", "dreaming", "about", "the", "next", "concert."] },
    ],
    mySentencePrompt: "Write or say one sentence about earning someone's trust after handling something well.",
    mySentenceExample: "I earned my parents' trust after handling a difficult situation calmly.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

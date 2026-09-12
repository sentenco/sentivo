// B1 Teens digital storybook, Book 56: "Starting a Small Business"
// Static content -- no Supabase. Eighth and final book in the B1 Teens
// batch (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook56/cover.jpg";

export const STORYBOOK_TITLE = "Starting a Small Business";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Theo standing behind a small table at a weekend market, arranging handmade candles, a hopeful but nervous expression as customers pass by.";

export const CHARACTERS = [
  { name: "Theo", role: "The narrator, a teenager", look: "Flannel shirt, apron with wax stains, resourceful but easily discouraged by setbacks." },
  { name: "Grandma Rosa", role: "Theo's grandmother", look: "Reading glasses, warm cardigan, practical and full of quiet wisdom." },
  { name: "Sam", role: "Theo's classmate who becomes a customer and friend", look: "Backpack covered in patches, easygoing, genuinely supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Idea Takes Shape",
    image: null,
    imageNote: "Theo standing in his garage, surrounded by candle-making supplies and melted wax, looking at a finished candle with satisfaction.",
    story:
      "Last month, I started making candles as a hobby, mostly to relax after stressful days at school. What began as simple experimentation gradually became something I genuinely looked forward to every single evening. My friends who saw the finished candles kept asking where I bought them, surprised when I admitted I made them myself. If people are willing to pay for these, maybe this hobby could become something more substantial than just a pastime. Grandma Rosa, noticing my growing collection, says, “You should sell these at the farmers market, Theo.” The idea excites me immediately, though the practical details feel genuinely overwhelming to consider.",
    questions: [
      { text: "What did Theo start doing last month?", answer: "Making candles as a hobby." },
      { text: "What did Theo's friends keep asking?", answer: "Where he bought the candles." },
      { text: "What does Grandma Rosa suggest?", answer: "Selling them at the weekend farmers market." },
    ],
    trueFalse: [
      { text: "Theo started making candles last month.", answer: true },
      { text: "Theo's friends assumed he bought the candles somewhere.", answer: true },
      { text: "Grandma Rosa suggests selling them at the farmers market.", answer: true },
      { text: "Theo feels this idea is completely uninteresting to him.", answer: false },
      { text: "The practical details feel simple and effortless to Theo.", answer: false },
    ],
    buildSentence: [
      { target: "I started making candles.", jumbled: ["started", "making", "I", "candles."] },
      { target: "This idea excites me immediately.", jumbled: ["This", "idea", "excites", "me", "immediately."] },
      { target: "I made them myself, I admit.", jumbled: ["made", "them", "I", "myself,", "I", "admit."] },
      { target: "The practical details feel overwhelming.", jumbled: ["The", "practical", "details", "feel", "overwhelming."] },
      { target: "Maybe this hobby could become something more substantial.", jumbled: ["Maybe", "this", "hobby", "could", "become", "something", "more", "substantial."] },
    ],
    mySentencePrompt: "Write or say one sentence about a hobby that became more serious over time.",
    mySentenceExample: "My hobby of drawing became more serious over time.",
  },
  {
    number: 2,
    title: "Learning the Basics",
    image: null,
    imageNote: "Theo sitting at a kitchen table with Grandma Rosa, calculating costs on a notepad, both looking focused on the numbers.",
    story:
      "Grandma Rosa, who ran a small bakery years ago, offers to teach me the basics of running a genuine small business. We sit together calculating exact costs: wax, wicks, containers, and fragrance oils for each individual candle. “You need to know your costs before you can decide a fair price, Theo,” she explains patiently, walking me through each calculation. I'm surprised how much thought goes into pricing something correctly, beyond simply guessing a reasonable-sounding number. She also mentions the importance of setting aside money specifically for buying more supplies later. Although this feels more complicated than I initially expected, I appreciate having someone experienced guiding me through it.",
    questions: [
      { text: "What did Grandma Rosa run years ago?", answer: "A small bakery." },
      { text: "What do Theo and Grandma Rosa calculate together?", answer: "The exact costs of wax, wicks, containers, and fragrance oils." },
      { text: "What does Grandma Rosa say you need to know before pricing?", answer: "Your costs." },
    ],
    trueFalse: [
      { text: "Grandma Rosa ran a small bakery years ago.", answer: true },
      { text: "They calculate exact costs for each candle.", answer: true },
      { text: "Grandma Rosa says you need to know your costs first.", answer: true },
      { text: "Theo finds pricing simpler than he expected.", answer: false },
      { text: "Theo appreciates having experienced guidance.", answer: true },
    ],
    buildSentence: [
      { target: "We calculate exact costs together.", jumbled: ["We", "calculate", "exact", "costs", "together."] },
      { target: "This feels more complicated now.", jumbled: ["This", "feels", "more", "complicated", "now."] },
      { target: "I'm surprised how much thought goes into this.", jumbled: ["I'm", "surprised", "how", "much", "thought", "goes", "into", "this."] },
      { target: "I appreciate having someone experienced guiding me.", jumbled: ["I", "appreciate", "having", "someone", "experienced", "guiding", "me."] },
      { target: "You need to know your costs before pricing fairly.", jumbled: ["You", "need", "to", "know", "your", "costs", "before", "pricing", "fairly."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning something practical from an older relative.",
    mySentenceExample: "I learned something practical about budgeting from my grandmother.",
  },
  {
    number: 3,
    title: "Preparing for the Market",
    image: null,
    imageNote: "Theo in his garage packing finished candles into a wooden crate, a handmade sign leaning against the wall nearby.",
    story:
      "Over the following two weeks, I spend nearly every evening producing enough candles for my first market appearance. I experiment with different scents, eventually settling on lavender, vanilla, and a fresh pine option for variety. Grandma Rosa helps me design a simple handmade sign, and together we create small price tags for each candle. Packing everything carefully into a wooden crate, I feel a strange mixture of excitement and genuine nervousness building steadily. This whole process requires far more preparation than I originally anticipated when this idea first started. \"One step at a time, Theo,\" I tell myself, packing the crate carefully. If nobody buys anything this weekend, I'm honestly unsure how I'll feel about continuing further.",
    questions: [
      { text: "How long does Theo spend preparing for the market?", answer: "Two weeks, nearly every evening." },
      { text: "What scents does Theo settle on?", answer: "Lavender, vanilla, and pine." },
      { text: "What does Theo feel packing everything into the crate?", answer: "Excitement and genuine nervousness." },
    ],
    trueFalse: [
      { text: "Theo spends nearly every evening for two weeks preparing.", answer: true },
      { text: "Theo settles on lavender, vanilla, and pine.", answer: true },
      { text: "Grandma Rosa refuses to help with the sign.", answer: false },
      { text: "Theo feels a mixture of excitement and nervousness.", answer: true },
      { text: "This process required less preparation than expected.", answer: false },
    ],
    buildSentence: [
      { target: "I experiment with different scents.", jumbled: ["experiment", "with", "I", "different", "scents."] },
      { target: "I feel genuine nervousness building.", jumbled: ["I", "feel", "genuine", "nervousness", "building."] },
      { target: "We create small price tags.", jumbled: ["We", "create", "small", "price", "tags."] },
      { target: "This requires far more preparation than expected.", jumbled: ["This", "requires", "far", "more", "preparation", "than", "expected."] },
      { target: "If nobody buys anything, I'm unsure how I'll feel.", jumbled: ["If", "nobody", "buys", "anything,", "I'm", "unsure", "how", "I'll", "feel."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully for something important.",
    mySentenceExample: "I prepared carefully for my first job interview.",
  },
  {
    number: 4,
    title: "Market Day",
    image: null,
    imageNote: "Theo standing behind his small market table early in the morning, arranging candles neatly, few customers around yet, a nervous expression on his face.",
    story:
      "Saturday morning arrives, and I set up my small table at the farmers market before most vendors have even arrived. My hands shake slightly arranging the candles, adjusting them repeatedly even though they already look perfectly fine. The first hour passes slowly, with people glancing at my table but continuing past without stopping to look closer. \"Stay patient, Theo,\" I tell myself, though I start doubting whether this whole idea was genuinely realistic or simply an overly optimistic daydream. Just as discouragement begins settling in, an older woman stops, picks up a lavender candle, and smells it appreciatively. She purchases two candles, becoming my very first customer, and something inside me shifts hopefully.",
    questions: [
      { text: "What time does Theo set up his table?", answer: "Before most vendors arrive, Saturday morning." },
      { text: "How does the first hour go?", answer: "Slowly -- people glance but don't stop." },
      { text: "Who becomes Theo's very first customer?", answer: "An older woman who buys two lavender candles." },
    ],
    trueFalse: [
      { text: "Theo sets up his table before most vendors arrive.", answer: true },
      { text: "The first hour brings many eager customers immediately.", answer: false },
      { text: "Theo starts doubting whether this idea was realistic.", answer: true },
      { text: "An older woman becomes Theo's first customer.", answer: true },
      { text: "Theo feels nothing when he makes his first sale.", answer: false },
    ],
    buildSentence: [
      { target: "My hands shake slightly now.", jumbled: ["My", "hands", "shake", "slightly", "now."] },
      { target: "She becomes my first customer.", jumbled: ["She", "becomes", "my", "first", "customer."] },
      { target: "The first hour passes slowly today.", jumbled: ["The", "first", "hour", "passes", "slowly", "today."] },
      { target: "Something inside me shifts hopefully.", jumbled: ["Something", "inside", "me", "shifts", "hopefully."] },
      { target: "I start doubting whether this idea was realistic.", jumbled: ["I", "start", "doubting", "whether", "this", "idea", "was", "realistic."] },
    ],
    mySentencePrompt: "Write or say one sentence about the first success in something new you tried.",
    mySentenceExample: "My first success in painting came after weeks of trying.",
  },
  {
    number: 5,
    title: "A Slow Start",
    image: null,
    imageNote: "Theo sitting behind his mostly untouched table late in the afternoon, checking his phone with a tired, slightly discouraged expression.",
    story:
      "By early afternoon, I've sold only four candles total, far fewer than I had optimistically hoped for today. Watching nearby vendors selling produce and baked goods steadily makes me wonder if candles simply aren't in high demand here. I calculate my earnings against my costs and realize today's profit barely covers the gas money spent driving here. Discouragement creeps in slowly, whispering doubts about whether this entire venture makes any practical sense whatsoever. However, I remind myself that Grandma Rosa mentioned her bakery struggled significantly during its first few months too. \"Don't give up yet, Theo,\" I think. Perhaps today isn't failure exactly, just an uncomfortable, necessary first step in a longer process.",
    questions: [
      { text: "How many candles has Theo sold by early afternoon?", answer: "Four." },
      { text: "What does Theo calculate about his earnings?", answer: "That profit barely covers the gas money." },
      { text: "What does Theo remind himself about Grandma Rosa's bakery?", answer: "That it also struggled in its first few months." },
    ],
    trueFalse: [
      { text: "Theo has sold only four candles by early afternoon.", answer: true },
      { text: "Theo's profit today easily covers all his expenses.", answer: false },
      { text: "Discouragement creeps in slowly for Theo.", answer: true },
      { text: "Theo remembers Grandma Rosa's bakery also struggled at first.", answer: true },
      { text: "Theo feels today was a complete, total failure.", answer: false },
    ],
    buildSentence: [
      { target: "Discouragement creeps in slowly.", jumbled: ["Discouragement", "creeps", "in", "slowly."] },
      { target: "I calculate my earnings carefully.", jumbled: ["I", "calculate", "my", "earnings", "carefully."] },
      { target: "This isn't failure exactly, just a step.", jumbled: ["This", "isn't", "failure", "exactly,", "just", "a", "step."] },
      { target: "Her bakery struggled significantly during its first months too.", jumbled: ["Her", "bakery", "struggled", "significantly", "during", "its", "first", "months", "too."] },
      { target: "I wonder if candles simply aren't in high demand here.", jumbled: ["I", "wonder", "if", "candles", "simply", "aren't", "in", "high", "demand", "here."] },
    ],
    mySentencePrompt: "Write or say one sentence about a slow or discouraging start to something new.",
    mySentenceExample: "My first week at a new job had a slow, discouraging start.",
  },
  {
    number: 6,
    title: "Sam Stops By",
    image: null,
    imageNote: "Sam standing at Theo's table, picking up a candle and smiling, both talking casually as other market visitors pass by.",
    story:
      "Just as I'm considering packing up early, my classmate Sam wanders past and stops, surprised to see me there. “Wait, you made these, Theo? They smell incredible,” he says, picking up the vanilla candle and examining it closely. We chat for a while, and he mentions he'd genuinely love to buy one for his mom's upcoming birthday. Talking with someone familiar, rather than strangers, helps ease some of the awkwardness I'd been feeling all day. Sam also suggests posting photos online, mentioning that several classmates might be interested if they actually knew this existed. His encouragement, though small, genuinely shifts my mood after an otherwise discouraging afternoon.",
    questions: [
      { text: "Who wanders past Theo's table?", answer: "His classmate Sam." },
      { text: "What does Sam mention wanting to buy?", answer: "A candle for his mom's birthday." },
      { text: "What does Sam suggest Theo do?", answer: "Post photos online." },
    ],
    trueFalse: [
      { text: "Theo's classmate Sam wanders past his table.", answer: true },
      { text: "Sam wants to buy a candle for his mom's birthday.", answer: true },
      { text: "Sam suggests posting photos online.", answer: true },
      { text: "Talking with Sam makes Theo feel more awkward.", answer: false },
      { text: "Sam's encouragement shifts Theo's mood positively.", answer: true },
    ],
    buildSentence: [
      { target: "Sam wanders past and stops.", jumbled: ["Sam", "wanders", "past", "and", "stops."] },
      { target: "We chat for a while.", jumbled: ["We", "chat", "for", "a", "while."] },
      { target: "This genuinely shifts my mood.", jumbled: ["This", "genuinely", "shifts", "my", "mood."] },
      { target: "He suggests posting photos online.", jumbled: ["He", "suggests", "posting", "photos", "online."] },
      { target: "Talking with someone familiar helps ease my awkwardness.", jumbled: ["Talking", "with", "someone", "familiar", "helps", "ease", "my", "awkwardness."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend's encouragement that improved a difficult day.",
    mySentenceExample: "My friend's encouragement improved a difficult day at school.",
  },
  {
    number: 7,
    title: "Trying Something New",
    image: null,
    imageNote: "Theo sitting at his laptop that evening, uploading photos of his candles to a simple social media account, focused and hopeful.",
    story:
      "That evening, following Sam's suggestion, I create a simple social media account specifically for my small candle business. I photograph each candle carefully, using natural light near my bedroom window for the clearest, most appealing images. Writing captions feels awkward initially, though I gradually find a comfortable, genuine voice describing each scent and its inspiration. \"Just try it, Theo,\" I think, and I share the account with a few close friends first, nervous about a wider audience seeing something so personal. Within an hour, several classmates comment, expressing genuine interest and asking questions about pricing and availability. This small digital step feels surprisingly significant, opening possibilities I hadn't fully considered before today.",
    questions: [
      { text: "What does Theo create that evening?", answer: "A social media account for his candle business." },
      { text: "How does Theo photograph the candles?", answer: "Using natural light near his bedroom window." },
      { text: "How do classmates respond to the account?", answer: "Several comment with genuine interest." },
    ],
    trueFalse: [
      { text: "Theo creates a social media account for his business.", answer: true },
      { text: "Theo photographs the candles using natural light.", answer: true },
      { text: "Writing captions feels effortless immediately for Theo.", answer: false },
      { text: "Several classmates comment with genuine interest.", answer: true },
      { text: "Theo feels this step is insignificant.", answer: false },
    ],
    buildSentence: [
      { target: "I create a social media account.", jumbled: ["create", "a", "I", "social", "media", "account."] },
      { target: "Writing captions feels awkward initially.", jumbled: ["Writing", "captions", "feels", "awkward", "initially."] },
      { target: "This feels surprisingly significant now.", jumbled: ["This", "feels", "surprisingly", "significant", "now."] },
      { target: "Several classmates comment with genuine interest.", jumbled: ["Several", "classmates", "comment", "with", "genuine", "interest."] },
      { target: "This opens possibilities I hadn't fully considered before.", jumbled: ["This", "opens", "possibilities", "I", "hadn't", "fully", "considered", "before."] },
    ],
    mySentencePrompt: "Write or say one sentence about trying a new way to share something you made.",
    mySentenceExample: "I tried a new way to share my art by posting it online.",
  },
  {
    number: 8,
    title: "A Second Market Day",
    image: null,
    imageNote: "Theo standing confidently behind a busier market table two weeks later, several customers browsing his expanded candle selection.",
    story:
      "Two weeks later, I return to the farmers market with a slightly larger selection and, thanks to social media, a bit more confidence. Several classmates who saw my posts actually show up specifically to purchase candles, which genuinely surprises and delights me. Grandma Rosa joins me this time, helping with sales while offering encouragement whenever conversations with customers feel intimidating. By midday, I've already sold more than double what I sold during my entire first market appearance. A regular market vendor nearby compliments my scents, offering small tips about attracting more foot traffic effectively. \"Look how far you've come, Theo,\" I think. Today feels dramatically different from that discouraging first Saturday just two weeks earlier.",
    questions: [
      { text: "How does Theo's confidence compare to the first market day?", answer: "A bit more confident, thanks to social media." },
      { text: "Who shows up specifically to purchase candles?", answer: "Several classmates who saw his posts." },
      { text: "How does today compare to Theo's first market appearance?", answer: "He sells more than double what he sold the first time." },
    ],
    trueFalse: [
      { text: "Theo has a bit more confidence this time.", answer: true },
      { text: "Classmates who saw his posts show up to buy candles.", answer: true },
      { text: "Grandma Rosa joins Theo at the market this time.", answer: true },
      { text: "Theo sells less than his first market appearance.", answer: false },
      { text: "Today feels dramatically different from the first Saturday.", answer: true },
    ],
    buildSentence: [
      { target: "I return to the market.", jumbled: ["return", "to", "I", "the", "market."] },
      { target: "This genuinely surprises and delights me.", jumbled: ["This", "genuinely", "surprises", "and", "delights", "me."] },
      { target: "Grandma Rosa joins me this time.", jumbled: ["Grandma", "Rosa", "joins", "me", "this", "time."] },
      { target: "Today feels dramatically different from before.", jumbled: ["Today", "feels", "dramatically", "different", "from", "before."] },
      { target: "I've already sold more than double what I sold before.", jumbled: ["I've", "already", "sold", "more", "than", "double", "what", "I", "sold", "before."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing real improvement after trying again.",
    mySentenceExample: "I noticed real improvement in my writing after trying again with feedback.",
  },
  {
    number: 9,
    title: "Reinvesting in the Business",
    image: null,
    imageNote: "Theo and Grandma Rosa sitting at the kitchen table, counting money and writing a supply list, both engaged and planning ahead.",
    story:
      "That evening, Grandma Rosa and I sit down together to count earnings and plan our next practical steps carefully. Following her advice, I set aside a portion specifically for buying more supplies rather than spending everything immediately. We create a list of new scents to try, based on customer feedback and requests from the past two markets. I also decide to invest slightly in better packaging, something a customer mentioned might increase perceived value noticeably. “Sustainable businesses grow gradually, Theo, reinvesting steadily rather than expanding too quickly,” Grandma Rosa reminds me. Watching my small hobby transform into something genuinely sustainable feels remarkably satisfying tonight.",
    questions: [
      { text: "What do Theo and Grandma Rosa do that evening?", answer: "Count earnings and plan next steps." },
      { text: "What does Theo set aside a portion for?", answer: "Buying more supplies." },
      { text: "What does Grandma Rosa remind Theo about sustainable businesses?", answer: "That they grow gradually, reinvesting steadily." },
    ],
    trueFalse: [
      { text: "Theo and Grandma Rosa count earnings together.", answer: true },
      { text: "Theo sets aside a portion for buying more supplies.", answer: true },
      { text: "Theo decides to invest in better packaging.", answer: true },
      { text: "Grandma Rosa suggests expanding as quickly as possible.", answer: false },
      { text: "Theo feels nothing watching his hobby transform.", answer: false },
    ],
    buildSentence: [
      { target: "We count earnings together tonight.", jumbled: ["We", "count", "earnings", "together", "tonight."] },
      { target: "This feels remarkably satisfying tonight.", jumbled: ["This", "feels", "remarkably", "satisfying", "tonight."] },
      { target: "I decide to invest in packaging.", jumbled: ["I", "decide", "to", "invest", "in", "packaging."] },
      { target: "Sustainable businesses grow gradually, not too quickly.", jumbled: ["Sustainable", "businesses", "grow", "gradually,", "not", "too", "quickly."] },
      { target: "I set aside a portion for buying more supplies.", jumbled: ["I", "set", "aside", "a", "portion", "for", "buying", "more", "supplies."] },
    ],
    mySentencePrompt: "Write or say one sentence about planning carefully for the future of something you're building.",
    mySentenceExample: "I planned carefully for the future of my small savings.",
  },
  {
    number: 10,
    title: "A Real Small Business",
    image: null,
    imageNote: "Theo standing proudly at a now well-established market stand, a small handmade sign reading 'Theo's Candles,' regular customers greeting him warmly.",
    story:
      "Three months later, my small candle stand has become a regular, recognizable fixture at the weekend farmers market. I now have several repeat customers who greet me by name, along with a small but steadily growing online following too. Looking back at that discouraging first Saturday, I barely recognize the nervous, uncertain version of myself from back then. Grandma Rosa still helps occasionally, though I handle most decisions confidently on my own now, something that genuinely surprises me sometimes. This experience taught me that meaningful growth rarely happens instantly; it builds slowly through persistence, feedback, and reinvestment. \"You built this, Theo,\" I think. What started as simple stress relief has genuinely become something I'm authentically proud of building.",
    questions: [
      { text: "What has Theo's candle stand become three months later?", answer: "A regular, recognizable fixture at the market." },
      { text: "What does Theo now have that he didn't before?", answer: "Several repeat customers and a growing online following." },
      { text: "What did this experience teach Theo about growth?", answer: "That it builds slowly through persistence, feedback, and reinvestment." },
    ],
    trueFalse: [
      { text: "Theo's stand has become a regular market fixture.", answer: true },
      { text: "Theo now has several repeat customers.", answer: true },
      { text: "Theo handles most decisions confidently on his own now.", answer: true },
      { text: "Theo learned that growth happens instantly.", answer: false },
      { text: "Theo feels proud of what he has built.", answer: true },
    ],
    buildSentence: [
      { target: "This has become a regular fixture.", jumbled: ["This", "has", "become", "a", "regular", "fixture."] },
      { target: "I handle most decisions confidently now.", jumbled: ["I", "handle", "most", "decisions", "confidently", "now."] },
      { target: "I barely recognize my former self.", jumbled: ["I", "barely", "recognize", "my", "former", "self."] },
      { target: "Meaningful growth rarely happens instantly.", jumbled: ["Meaningful", "growth", "rarely", "happens", "instantly."] },
      { target: "It builds slowly through persistence, feedback, and reinvestment.", jumbled: ["It", "builds", "slowly", "through", "persistence,", "feedback,", "and", "reinvestment."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you built slowly through persistence.",
    mySentenceExample: "I built my confidence slowly through persistence and practice.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// Gazette article data. Only "four-day-work-week" is fully authored (3 Editions,
// glosses, citations, references, discussion guide) as the sample content.
// The rest are teaser-only entries for the landing grid ("Coming soon").

export const ARTICLE_TOPICS = [
  { label: "Daily Life", title: "Wellbeing & Daily Life" },
  { label: "Nature & Science", title: "Nature, Science & Planet" },
  { label: "Digital & Tech", title: "Digital Life & Future Tech" },
  { label: "Work & Business", title: "Worklife, Business & Careers" },
  { label: "Study & Skills", title: "Study, School & Skills" },
  { label: "Culture & Fun", title: "Culture, Stories & Fun" },
  { label: "Society & Issues", title: "People, Society & Issues" },
  { label: "Travel & Places", title: "Places, Travel & Journeys" },
];

export const ARTICLES = [
  {
    slug: "four-day-work-week",
    ready: true,
    emoji: "🗓️",
    variant: "work",
    topicLabel: "Work & Business",
    topicTitle: "Worklife, Business & Careers",
    title: "Could a Four-Day Work Week Actually Work?",
    dek: "Companies around the world are testing shorter weeks. Here's what they're finding — and what it could mean for you.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 180,
        blocks: [
          { type: "p", parts: [
            { t: "Some people now work only four days a week. They finish work on Thursday. They do not work on Friday. Many companies are trying this new idea, and workers still get paid the same money." },
          ] },
          { type: "p", parts: [
            { t: "In the United Kingdom, many companies tried a four-day week for a few months. After the test finished, most companies did not go back to five days." },
            { c: 1 },
            { t: " Workers said they felt less tired. They said they could still do good work in four days." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Not every job can do this easily. Hospitals and shops are open every day of the week. So some companies let workers choose a different day off, not always Friday. This way, the business can stay open all week." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Many people are now thinking about work in a new way. Maybe five days is not always the right number." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 420,
        blocks: [
          { type: "p", parts: [
            { t: "Imagine finishing your work on Thursday and not starting again until Monday. For a growing number of workers, that's no longer just a dream. Over the past few years, hundreds of companies have run " },
            { g: "trials", pos: "noun", def: "a short test to see if something works well" },
            { t: " of a four-day work week — same pay, one less day in the office." },
          ] },
          { type: "p", parts: [
            { t: "The results have surprised even the people running the studies. In one of the largest trials, held in the United Kingdom, 92% of the participating companies chose to continue with a shorter week after the test ended." },
            { c: 1 },
            { t: " Workers reported feeling less tired and more focused, and " },
            { g: "productivity", pos: "noun", def: "how much useful work gets done in a certain amount of time" },
            { t: " at most companies stayed the same — or even went up." },
            { c: 2 },
          ] },
          { type: "quote", text: "We expected to lose a day of output. Instead, people just stopped wasting time on things that didn't matter." },
          { type: "p", parts: [
            { t: "Not every job fits this model easily, though. Hospitals, shops, and factories that run every day of the week have found it harder to simply cut a day without hiring more staff. Some businesses have tried a " },
            { g: "flexible", pos: "adjective", def: "able to change easily to fit different needs" },
            { t: " version instead — letting teams choose which day they take off, so the business can stay open all week." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Whether or not a four-day week becomes normal everywhere, the experiments have already changed one thing: they've made people question an idea most of us never think about — that five days has always been the right number." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "5 min read",
        wordCount: 460,
        blocks: [
          { type: "p", parts: [
            { t: "Picture wrapping up your responsibilities by Thursday afternoon and not so much as glancing at your inbox until Monday. For a growing " },
            { g: "cohort", pos: "noun", def: "a group of people who share a characteristic, studied or discussed as a set" },
            { t: " of professionals, that prospect has shifted from wishful thinking to lived reality. In recent years, a wave of organisations has piloted the four-day week — full pay, one fewer day at the desk — and the findings have proven difficult to dismiss." },
          ] },
          { type: "p", parts: [
            { t: "Perhaps the most striking trial, conducted across the United Kingdom, saw 92% of participating firms opt to retain the shortened schedule once the pilot concluded." },
            { c: 1 },
            { t: " Employees reported markedly lower fatigue and sharper focus, while output at most companies held steady — in some cases, it climbed." },
            { c: 2 },
          ] },
          { type: "quote", text: "We expected to lose a day of output. Instead, people just stopped wasting time on things that didn't matter." },
          { type: "p", parts: [
            { t: "Yet the model does not translate neatly to every sector. Hospitals, retail outlets, and round-the-clock operations have struggled to trim a day without expanding " },
            { g: "headcount", pos: "noun", def: "the number of people employed by an organisation" },
            { t: ". Some have instead adopted a " },
            { g: "staggered", pos: "adjective", def: "arranged so events or shifts happen at different times rather than all at once" },
            { t: " approach, letting teams rotate their day off so the business remains fully operational." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Whatever its ultimate reach, the four-day week experiment has already accomplished something subtler: it has forced a reconsideration of an assumption most of us never thought to question — that five days was ever the correct number to begin with." },
          ] },
        ],
      },
    },
    references: [
      { domain: "reuters.com", headline: "UK four-day week trial: most firms stick with it" },
      { domain: "bbc.com", headline: "Four-day week: what happened when companies tried it" },
      { domain: "weforum.org", headline: "The four-day work week, explained" },
    ],
    discussionGuide: [
      {
        q: "Would a four-day work week suit your own job or field? Why or why not?",
        follow: [
          "What would have to change first for that to happen?",
          "Who do you think would resist the change the most?",
        ],
      },
      {
        q: "The article says workers “stopped wasting time on things that didn't matter.” What do you think wastes time at work?",
        follow: ["Is that different at school compared to a workplace?"],
      },
      {
        q: "Not every job can easily take a day off. Which jobs would struggle most, and why?",
        follow: ["Can you think of a possible solution for one of those jobs?"],
      },
    ],
  },
  {
    slug: "e-bikes",
    ready: false,
    emoji: "🔋",
    variant: "tech",
    topicLabel: "Digital & Tech",
    topicTitle: "Digital Life & Future Tech",
    title: "Why Everyone Is Talking About E-Bikes",
    dek: "A cheap, simple idea is changing how people get around cities.",
  },
  {
    slug: "roads-into-parks",
    ready: false,
    emoji: "🌱",
    variant: "planet",
    topicLabel: "Nature & Science",
    topicTitle: "Nature, Science & Planet",
    title: "The Cities Turning Roads Into Parks",
    dek: "One simple change is making streets quieter and greener.",
  },
  {
    slug: "walk-more",
    ready: false,
    emoji: "🚶",
    variant: "daily",
    topicLabel: "Daily Life",
    topicTitle: "Wellbeing & Daily Life",
    title: "Why Doctors Want You to Walk More",
    dek: "A simple daily habit is getting new attention from researchers.",
  },
  {
    slug: "streaming-movies",
    ready: false,
    emoji: "🎬",
    variant: "culture",
    topicLabel: "Culture & Fun",
    topicTitle: "Culture, Stories & Fun",
    title: "Streaming Is Changing How We Watch Movies",
    dek: "Fewer people go to theaters — but the habit is changing viewing too.",
  },
  {
    slug: "ai-translator",
    ready: false,
    emoji: "🌐",
    variant: "tech",
    topicLabel: "Digital & Tech",
    topicTitle: "Digital Life & Future Tech",
    title: "Can AI Really Replace a Translator?",
    dek: "Machine translation is improving fast — but nuance is still hard.",
  },
  {
    slug: "freelance-pricing",
    ready: false,
    emoji: "💼",
    variant: "work",
    topicLabel: "Work & Business",
    topicTitle: "Worklife, Business & Careers",
    title: "Why More Freelancers Are Charging by Project",
    dek: "Hourly billing is losing ground to a simpler kind of pricing.",
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

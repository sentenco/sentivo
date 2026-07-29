// Gazette article data. All 8 categories are now fully authored (3 Editions,
// glosses, citations, references, discussion guide), sourced via the
// standing Perplexity research prompt (see docs/gazette-article-prompt.md).

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
    slug: "filipinos-rethink-healthy",
    ready: true,
    emoji: "🧘",
    variant: "daily",
    topicLabel: "Daily Life",
    topicTitle: "Wellbeing & Daily Life",
    title: "Filipinos Rethink What 'Being Healthy' Really Means",
    dek: "A new study in the Philippines shows how people are changing their daily habits to care for body, mind, and money all at the same time.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 178,
        blocks: [
          { type: "p", parts: [
            { t: "Many people in the Philippines are changing how they think about health. In the past, 'healthy' meant only exercise and not being sick. Now, a new study says health has three parts: the body, the mind, and money. People feel stress when they worry about money. This stress can hurt sleep and mood." },
          ] },
          { type: "p", parts: [
            { t: "Because of this, people are making small changes. They walk more. They eat simpler food. They try to sleep at the same time every night. Many young people use phone apps to track steps, mood, and spending." },
          ] },
          { type: "p", parts: [
            { t: "Doctors say small daily habits help people feel calm. Writing in a journal, using less social media, and taking short breaks can lower stress. Talking with family is also a common way to feel better." },
          ] },
          { type: "p", parts: [
            { t: "Companies are helping too. Some give workers wellness programs and help with money problems. Today, 'being healthy' means more than not being sick. It means small habits that protect the body and the mind together." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 390,
        blocks: [
          { type: "p", parts: [
            { t: "In 2026, many Filipinos are updating their idea of what it means to be healthy. Health used to mean mainly exercise and not getting sick. Now, a new 'Rethink Healthy' study from AIA Philippines shows that people connect health with three areas: physical fitness, mental wellbeing, and financial security. More " },
            { g: "respondents", pos: "noun", def: "people who answer questions in a survey or study" },
            { t: " say that stress from money problems hurts their sleep, mood, and energy in daily life." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Because of this, Filipinos are starting small, practical habits at home and at work. Many are walking more, choosing simpler meals, and trying to sleep at regular times. Younger adults, especially in cities, are using apps to track steps, mood, and spending. Emotional wellbeing is becoming part of everyday health conversations, not just something discussed in hospitals." },
          ] },
          { type: "p", parts: [
            { t: "Mental health experts say that daily routines can help people feel more stable. Simple actions like writing a " },
            { g: "journal", pos: "noun", def: "a notebook where you regularly write about your day or feelings" },
            { t: ", limiting social media, or taking short 'brain breaks' during the day can reduce stress." },
            { c: 2 },
          ] },
          { type: "quote", text: "Short breaks during the day can calm your nervous system." },
          { type: "p", parts: [
            { t: "The study also points out that health is now a shared responsibility. People expect schools, workplaces, and insurance companies to support healthier choices. Employers in the Philippines and worldwide are adding " },
            { g: "wellness", pos: "noun", def: "the state of being healthy in body and mind" },
            { t: " programs, mental health days, and financial education to help workers manage pressure." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "In daily life, this means that 'being healthy' is no longer only about avoiding illness. It is about building small, consistent habits that protect both the body and the mind, and making sure money worries do not secretly damage wellbeing." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 380,
        blocks: [
          { type: "p", parts: [
            { t: "In 2026, a growing number of Filipinos are " },
            { g: "overhauling", pos: "verb", def: "completely changing or improving something" },
            { t: " their conception of what it means to be healthy. Health was once understood narrowly, as little more than exercise and the absence of illness. A new 'Rethink Healthy' study commissioned by AIA Philippines, however, reveals that respondents now frame health as encompassing three interlocking domains: physical fitness, psychological wellbeing, and financial security." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Consequently, Filipinos are " },
            { g: "cultivating", pos: "verb", def: "developing something carefully over time" },
            { t: " modest but deliberate habits both at home and in the workplace: walking more, opting for simpler meals, and maintaining consistent sleep schedules. Younger, urban-based adults in particular are turning to digital tools to monitor steps, mood, and expenditure, while emotional wellbeing — once confined to clinical settings — has entered everyday conversation." },
          ] },
          { type: "p", parts: [
            { t: "Mental health practitioners argue that structured routines can foster greater emotional stability, recommending brief interludes of breathing exercises, stretching, or a short walk outdoors to ease " },
            { g: "monetary", pos: "adjective", def: "relating to money" },
            { t: " and daily stress." },
            { c: 2 },
          ] },
          { type: "quote", text: "Short breaks during the day can calm your nervous system." },
          { type: "p", parts: [
            { t: "The study further contends that health has become a shared societal obligation, with individuals increasingly expecting schools, employers, and insurers to facilitate healthier choices. Employers across the Philippines — and globally — are correspondingly expanding wellness initiatives, instituting mental health days, and offering financial literacy support to alleviate employee pressure." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "In practice, this reframing means that 'health' no longer denotes merely the absence of disease; it signifies the cultivation of small, sustained habits that safeguard both body and mind, ensuring that financial anxiety does not quietly erode overall wellbeing." },
          ] },
        ],
      },
    },
    references: [
      { domain: "youtube.com", headline: "Filipinos take proactive steps in health, AIA study finds" },
      { domain: "mysanitas.com", headline: "Emotional Well-Being in 2026: Simple habits for your mind" },
      { domain: "nisbenefits.com", headline: "4 Employee Wellness Trends You Can't Ignore in 2026" },
    ],
    discussionGuide: [
      {
        q: "Do you think money problems affect health in your own life or community? How?",
        follow: ["What small habit could help reduce that stress?"],
      },
      {
        q: "The article mentions 'brain breaks' during the day. What do you do to take a break from stress?",
        follow: ["Do you think short breaks really work? Why or why not?"],
      },
      {
        q: "Should employers be responsible for their workers' mental and financial health? Why or why not?",
        follow: ["What could a school do to support students in the same way?"],
      },
    ],
  },
  {
    slug: "spudcells-lab-made-cells",
    ready: true,
    emoji: "🧪",
    variant: "planet",
    topicLabel: "Nature & Science",
    topicTitle: "Nature, Science & Planet",
    title: "SpudCells: Lab-Made 'Potato' Cells Point To Future Medicine",
    dek: "Scientists have announced artificial cells called SpudCells that copy some behaviors of living cells and may help test new medicines more safely.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, scientists announced a new kind of cell made in a lab. It is called a SpudCell. Real cells come from plants, animals, or people. But a SpudCell is built by scientists using safe, controlled materials." },
          ] },
          { type: "p", parts: [
            { t: "SpudCells can copy some things that real cells do. They can store energy. They can react to small changes around them. Scientists can change the materials to make different kinds of cells." },
          ] },
          { type: "p", parts: [
            { t: "This is useful for testing new medicine. Scientists do not need to test on real animals or people at the very start. This can make testing safer and easier to repeat." },
          ] },
          { type: "p", parts: [
            { t: "Experts say we must use new science carefully. But SpudCells may help doctors learn more about how cells work. In the future, teachers might even use SpudCells to show students how cells work in class, without using real animal parts." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 400,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, researchers publicly announced a new kind of " },
            { g: "artificial", pos: "adjective", def: "made by humans, not occurring naturally" },
            { t: " cell called a SpudCell. An artificial cell is a cell that scientists build in the lab instead of taking from plants, animals, or humans. SpudCells are designed to look and act like simple living cells, but they are made from controlled materials so scientists can study them more easily." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Early reports say SpudCells can copy some basic behaviors of natural cells, such as storing energy and responding to simple changes in their environment. By adjusting ingredients, scientists can " },
            { g: "tune", pos: "verb", def: "carefully adjust something to get a wanted result" },
            { t: " these lab-made cells to model different kinds of tissues. A summary of 2026 medical science trends notes that " },
            { g: "biotech", pos: "noun", def: "short for biotechnology; technology based on living things" },
            { t: " is moving fast and redefining what's medically possible." },
            { c: 2 },
          ] },
          { type: "quote", text: "Redefining what's medically possible." },
          { type: "p", parts: [
            { t: "Health experts warn that new technologies must be tested carefully and used ethically. However, artificial cell systems may lower some risks, because they reduce the need to test directly on living organisms at early stages. They also allow researchers to repeat experiments many times under almost identical conditions, which makes results more reliable." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "In the future, SpudCells might help classrooms too. Biology teachers could use them to show students how cells work without needing special permission to handle animal samples. While SpudCells are still very new, they already show how creativity in science can open fresh paths for safer testing and clearer understanding of life processes." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 390,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, researchers unveiled a novel class of " },
            { g: "synthetic", pos: "adjective", def: "made artificially rather than occurring naturally" },
            { t: " cell known as the SpudCell — engineered entirely within the laboratory rather than harvested from plant, animal, or human tissue. Designed to emulate the basic behaviour of living cells while remaining composed of tightly controlled materials, SpudCells promise to make cellular research markedly more tractable." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Preliminary findings suggest SpudCells can replicate elementary cellular functions, including energy storage and responsiveness to environmental change. By recalibrating their constituent materials, scientists can adapt these constructs to model diverse tissue types. A 2026 overview of medical science trends observes that biotechnology is advancing rapidly, encompassing novel tools for tissue " },
            { g: "regeneration", pos: "noun", def: "the natural process of new tissue growing to replace damaged tissue" },
            { t: " and more sophisticated testing regimes." },
            { c: 2 },
          ] },
          { type: "quote", text: "Redefining what's medically possible." },
          { type: "p", parts: [
            { t: "Bioethicists caution that emerging technologies demand rigorous scrutiny and responsible deployment. Nonetheless, artificial cell systems may mitigate certain risks by curtailing the need for direct experimentation on living organisms during preliminary phases. They further enable near-identical repetition of experiments, bolstering the " },
            { g: "reproducibility", pos: "noun", def: "the ability to get the same results when an experiment is repeated" },
            { t: " of results." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Looking ahead, SpudCells may find their way into classrooms as well, allowing biology instructors to demonstrate cellular mechanics without recourse to animal specimens. Although still nascent, the technology already illustrates how scientific ingenuity can open safer, more reliable avenues for probing the fundamentals of life." },
          ] },
        ],
      },
    },
    references: [
      { domain: "wikipedia.org", headline: "2026 in science" },
      { domain: "distance.physiology.med.ufl.edu", headline: "7 Medical Sciences Trends Shaping Healthcare in 2026" },
      { domain: "time.com", headline: "The Science and Health Breakthroughs Shaping a New Era" },
    ],
    discussionGuide: [
      {
        q: "Would you feel comfortable using medicine that was first tested on artificial cells instead of animals? Why or why not?",
        follow: ["Do you think this changes how safe or ethical medical testing is?"],
      },
      {
        q: "The article says SpudCells might be used in classrooms one day. Would you want to use them in a science class? Why?",
        follow: [],
      },
      {
        q: "What other areas of science do you think 'lab-made' materials could help in the future?",
        follow: ["Can you think of any risks of using artificial materials instead of natural ones?"],
      },
    ],
  },
  {
    slug: "ai-workflows-everyday-apps",
    ready: true,
    emoji: "🤖",
    variant: "tech",
    topicLabel: "Digital & Tech",
    topicTitle: "Digital Life & Future Tech",
    title: "AI Workflows Quietly Take Over Everyday Apps",
    dek: "Technology analysts say 2026 is the year when AI moves from simple chatbots to 'workflows' that quietly handle tasks inside popular apps.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "In 2026, AI is changing. Before, we mostly used AI by typing questions into a chatbot. Now, AI quietly does work for us inside normal apps. This is called an 'AI workflow.'" },
          ] },
          { type: "p", parts: [
            { t: "A workflow is a group of steps to finish a task, like planning a meeting or answering a question. Now, many apps notice patterns and do these steps automatically. You do not always need to ask." },
          ] },
          { type: "p", parts: [
            { t: "Experts say that by 2026, most mobile apps will use this kind of smart AI. It can write emails, make short summaries, or edit photos with one tap. Some AI, called 'agentic AI,' can also make plans and finish many steps by itself, with little help from a person." },
          ] },
          { type: "p", parts: [
            { t: "These changes bring new questions about privacy. People want AI that helps them, but does not collect too much personal information. For English learners, this could mean smarter study apps that plan lessons automatically." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 410,
        blocks: [
          { type: "p", parts: [
            { t: "In 2026, artificial intelligence is changing from something we mostly chat with to something that quietly does work for us behind the scenes. Analysts describe this as the rise of 'AI workflows.' A workflow is a set of steps to complete a task, such as organizing files, scheduling meetings, or answering common questions. Instead of waiting for a user to type a command, AI in many apps now recognizes patterns and suggests or completes actions automatically." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "One industry report predicts that by 2026, over 80% of mobile apps will use " },
            { g: "generative AI", pos: "phrase", def: "AI that creates new content like text or images, not just analyzes data" },
            { t: " features. These systems build emails, summarize documents, or edit photos with one tap. The report explains that generative AI will reshape mobile and web applications so profoundly that most app interactions are expected to use AI technologies." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Tech commentators also talk about " },
            { g: "agentic", pos: "adjective", def: "describing AI that can set goals and complete tasks on its own" },
            { t: " AI: a system that does more than respond; it sets goals, plans, and carries out multi-step tasks with little or no human " },
            { g: "oversight", pos: "noun", def: "the act of watching over and checking something to make sure it's done correctly" },
            { t: ". For example, a future personal finance app could watch your spending, adjust your budget, and even message you when bills are due without you asking." },
            { c: 3 },
          ] },
          { type: "quote", text: "AI agents managing workflows such as scheduling, inventory control, content creation, and customer interactions with little to no human oversight." },
          { type: "p", parts: [
            { t: "These changes bring new questions about privacy and fairness. The same reports highlight 'privacy-first' designs and stronger rules for how companies supervise AI systems. For ESL learners and teachers, this shift could mean smarter study apps that plan review sessions, suggest practice topics, and track progress automatically, giving more time for real conversation and creative learning." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 400,
        blocks: [
          { type: "p", parts: [
            { t: "By 2026, artificial intelligence has shifted from a conversational novelty to an increasingly ambient presence, quietly executing tasks behind the scenes rather than merely responding to prompts. Analysts term this shift the rise of 'AI workflows' — sequences of steps, from organising files to scheduling meetings, that AI-enabled applications now recognise and complete with minimal user initiation." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Industry forecasts anticipate that by 2026, over 80% of mobile applications will incorporate generative AI, technology capable of producing original content rather than merely analysing existing data. Such systems now draft correspondence, condense documents, and edit imagery at a single tap, heralding what one report describes as a nearly " },
            { g: "ubiquitous", pos: "adjective", def: "present or appearing everywhere" },
            { t: " integration of AI across mobile and web experiences." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Commentators likewise point to the emergence of agentic AI: systems that transcend mere responsiveness, instead formulating goals and executing multi-step tasks " },
            { g: "autonomously", pos: "adverb", def: "acting independently, without outside control" },
            { t: ", with negligible human oversight. A forthcoming personal-finance application, for instance, might monitor expenditure, recalibrate budgets, and issue payment reminders unprompted." },
            { c: 3 },
          ] },
          { type: "quote", text: "AI agents managing workflows such as scheduling, inventory control, content creation, and customer interactions with little to no human oversight." },
          { type: "p", parts: [
            { t: "This " },
            { g: "proliferation", pos: "noun", def: "a rapid increase in the number of something" },
            { t: " of quietly capable AI raises fresh questions of privacy and equity. Reports emphasise 'privacy-first' architectures and more stringent governance over algorithmic supervision. For language educators and learners alike, the implication is one of increasingly intelligent study tools that schedule review sessions and track progress unbidden, freeing attention for authentic conversation and creative engagement." },
          ] },
        ],
      },
    },
    references: [
      { domain: "youtube.com", headline: "Top 6 AI Trends That Will Define 2026 (backed by data)" },
      { domain: "ozvid.com", headline: "Generative AI Trends Revolutionizing Mobile and Web Apps in 2026" },
      { domain: "onlim.com", headline: "5 relevant AI trends for 2026" },
    ],
    discussionGuide: [
      {
        q: "Would you want an AI to manage tasks like your schedule or spending automatically? Why or why not?",
        follow: ["What would you NOT want AI to do without asking you first?"],
      },
      {
        q: "The article talks about AI apps that 'quietly' do work for us. Do you think this is helpful or a little worrying?",
        follow: ["How much should we know about what an app is doing behind the scenes?"],
      },
      {
        q: "How could AI 'workflows' change the way you study English?",
        follow: ["Would you trust an app to plan your study schedule for you?"],
      },
    ],
  },
  {
    slug: "four-day-week-2026",
    ready: true,
    emoji: "🗓️",
    variant: "work",
    topicLabel: "Work & Business",
    topicTitle: "Worklife, Business & Careers",
    title: "Four-Day Work Week Tests Spread With Fresh 2026 Data",
    dek: "New reports in 2026 show more companies trying shorter work weeks, hoping to reduce burnout while keeping productivity steady or even higher.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 195,
        blocks: [
          { type: "p", parts: [
            { t: "In 2026, many companies around the world are trying shorter work weeks. This means working four days instead of five, with the same pay. This idea used to be rare. Now it is a serious plan that many businesses are testing." },
          ] },
          { type: "p", parts: [
            { t: "New studies show that if companies plan carefully, workers can keep the same amount of work done, and even feel better. Companies want to try this because 'burnout' — feeling very tired from work — is still a big problem, especially for people working from home." },
          ] },
          { type: "p", parts: [
            { t: "When people work from home, it can be hard to stop working at the end of the day. Shorter weeks may help people rest more and have clearer limits between work and home life." },
          ] },
          { type: "p", parts: [
            { t: "Companies are also adding more support for workers: help with money, mental health programs, and health support for women. Young workers especially want flexible hours, mental health support, and fair pay. More companies may try four-day weeks soon." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 380,
        blocks: [
          { type: "p", parts: [
            { t: "Workplaces around the world are rethinking traditional working hours in 2026. The idea of a four-day work week — working fewer days for the same pay — has moved from a rare experiment to a serious policy conversation. Recent studies suggest that, with careful planning, reduced hours can keep productivity steady and improve worker wellbeing. Companies are interested because " },
            { g: "burnout", pos: "noun", def: "extreme tiredness and stress caused by working too much" },
            { t: " remains a major problem, especially for remote and " },
            { g: "hybrid", pos: "adjective", def: "combining working from home and working in an office" },
            { t: " teams." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "A July 2026 wellness brief notes that burnout is strongly linked to isolation and blurred lines between home and office life. When people work from home, it can be hard to 'switch off,' and long hours become normal. Shorter weeks are being tested as one way to rebuild clear " },
            { g: "boundaries", pos: "noun", def: "limits that separate different parts of life, like work and home" },
            { t: "." },
            { c: 2 },
          ] },
          { type: "quote", text: "The clearest evidence yet that reduced hours can hold productivity steady when paired with genuine process redesign." },
          { type: "p", parts: [
            { t: "At the same time, 2026 workplace wellbeing trends show a move from simple wellness programs to full 'ecosystems' of support, including mental fitness training, financial wellness help, and policies for women's health such as menopause support. Organizations now see care as a 'competitive advantage,' with personalized mental, physical, social, and financial support becoming expected." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Employees seem ready for these changes. Surveys show that Gen Z and Millennial workers especially value flexibility, mental health support, and fair pay. For them, a good job is not only about salary; it is about feeling seen, safe, and able to rest. As more companies share real results from pilot programs, the four-day work week may become a normal option in some sectors." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 370,
        blocks: [
          { type: "p", parts: [
            { t: "Organisations worldwide are reconsidering conventional working hours in 2026, as the four-day week — reduced days for unchanged pay — migrates from fringe experiment to mainstream policy debate. Emerging research indicates that, given deliberate restructuring, curtailed hours can sustain output while enhancing employee wellbeing. Interest is fuelled by persistent burnout, particularly among remote and hybrid workforces." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "A July 2026 wellness brief links burnout closely to isolation and the " },
            { g: "encroachment", pos: "noun", def: "the gradual intrusion of one thing into the territory of another" },
            { t: " of professional obligations upon domestic life. Remote work often erodes the capacity to disengage, normalising excessive hours. Shortened weeks are being trialled as a mechanism for reinstating firmer boundaries." },
            { c: 2 },
          ] },
          { type: "quote", text: "The clearest evidence yet that reduced hours can hold productivity steady when paired with genuine process redesign." },
          { type: "p", parts: [
            { t: "Concurrently, 2026 workplace wellbeing trends reveal a transition from rudimentary wellness initiatives toward comprehensive support 'ecosystems,' encompassing mental fitness coaching, financial guidance, and women's health provisions such as menopause accommodation. Employers increasingly regard such " },
            { g: "holistic", pos: "adjective", def: "dealing with the whole of something, not just a part" },
            { t: " care as a competitive differentiator." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Workers appear receptive to this recalibration. Surveys indicate that Gen Z and Millennial employees particularly prize flexibility, psychological support, and equitable compensation — viewing a fulfilling role as contingent not merely on salary but on feeling valued and adequately rested. As pilot outcomes accumulate, the four-day week may yet become standard practice across select sectors, bolstering employee " },
            { g: "retention", pos: "noun", def: "keeping employees at a company rather than losing them" },
            { t: " in the process." },
          ] },
        ],
      },
    },
    references: [
      { domain: "oasisafricawellness.co.ke", headline: "July 2026 Wellness Brief: What's Actually Changing in Workplace Wellbeing" },
      { domain: "navigatewell.com", headline: "5 Workplace Wellbeing Trends Shaping 2026" },
      { domain: "nisbenefits.com", headline: "4 Employee Wellness Trends You Can't Ignore in 2026" },
    ],
    discussionGuide: [
      {
        q: "Would a four-day work week suit your own job or field of study? Why or why not?",
        follow: ["What would have to change first for that to happen?"],
      },
      {
        q: "The article says burnout is linked to not being able to 'switch off' from work. Do you ever have this problem? What helps you switch off?",
        follow: [],
      },
      {
        q: "Should companies be responsible for workers' mental and financial wellbeing, or is that a personal matter?",
        follow: ["Can you think of a workplace benefit that would matter most to you?"],
      },
    ],
  },
  {
    slug: "skills-move-us",
    ready: true,
    emoji: "🎓",
    variant: "work",
    topicLabel: "Study & Skills",
    topicTitle: "Study, School & Skills",
    title: "'Skills Move Us': How Training Programs Boost Young Careers",
    dek: "A July 2026 education feature shows how technical and vocational training can help young people quickly move into better jobs and futures.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, UNESCO shared a story called 'Skills Move Us.' It is about how practical training helps young people find better jobs." },
          ] },
          { type: "p", parts: [
            { t: "This kind of training is called TVET. It teaches skills people can use right away, like fixing machines, caring for patients, or managing computers. TVET is important for young people who do not want to go to university, but still want a good, stable job." },
          ] },
          { type: "p", parts: [
            { t: "Good training programs connect students directly to real jobs in their area. Some programs also teach '21st century skills,' like thinking carefully, working in teams, and adjusting to change." },
          ] },
          { type: "p", parts: [
            { t: "New reports say schools are changing from teaching 'what to learn' to teaching 'how to learn.' Important skills now include learning how to learn, understanding emotions, using technology well, and staying motivated." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, UNESCO highlighted a global story called 'Skills Move Us,' focusing on how practical training helps young people start stronger careers. Technical and " },
            { g: "vocational", pos: "adjective", def: "relating to skills and training needed for a particular job" },
            { t: " education and training, often called TVET, teaches hands-on skills like repairing machines, caring for patients, or managing computer networks. These programs are especially important for young people who may not follow a traditional university path but still want stable work and the chance to grow." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "The UNESCO feature explains that well-designed skills programs can 'jumpstart young people's lives' by connecting training directly to " },
            { g: "labor market", pos: "phrase", def: "the system of jobs and workers available in a place" },
            { t: " needs. International projects also encourage schools to integrate 21st century competencies — such as critical thinking, collaboration, and adaptability — with technical learning." },
            { c: 2 },
          ] },
          { type: "quote", text: "Jumpstart young people's lives." },
          { type: "p", parts: [
            { t: "Recent articles on school skills in 2026 show that education systems are shifting from 'what to learn' to 'how to learn.' A school blog notes that students today must navigate complex information, adapt to rapid change, and solve problems without clear instructions. It lists " },
            { g: "metacognition", pos: "noun", def: "thinking about your own thinking and learning process" },
            { t: ", emotional intelligence, digital literacy, and self-motivation as key skills." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For ESL learners, this global focus on skills offers many classroom topics. Students can read and talk about different training paths, compare university and vocational routes, and learn language for job interviews, safety instructions, and teamwork." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, UNESCO spotlighted a global initiative titled 'Skills Move Us,' illuminating how practical training equips young people for more robust career trajectories. Technical and vocational education and training (TVET) — encompassing competencies such as machinery repair, patient care, and network administration — proves particularly consequential for young people who forgo a conventional university pathway yet still seek stable, upwardly mobile employment." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "The initiative contends that well-conceived skills programmes can 'jumpstart young people's lives' by aligning instruction directly with labour-market demand. International frameworks further advocate integrating twenty-first-century competencies — critical thinking, collaboration, " },
            { g: "adaptability", pos: "noun", def: "the ability to adjust easily to new conditions" },
            { t: " — alongside technical instruction." },
            { c: 2 },
          ] },
          { type: "quote", text: "Jumpstart young people's lives." },
          { type: "p", parts: [
            { t: "Contemporary discourse on scholastic skills increasingly favours 'how to learn' over 'what to learn,' with commentators observing that students must now navigate complex information, adapt to rapid change, and resolve ambiguous problems absent explicit instruction. Emphasised competencies include " },
            { g: "metacognition", pos: "noun", def: "thinking about your own thinking and learning process" },
            { t: ", emotional intelligence, digital literacy, and sustained self-motivation." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For English-language learners, this global emphasis on skills yields abundant classroom material: comparing vocational and university trajectories, rehearsing interview and workplace vocabulary, and reflecting on collaborative problem-solving. Such narratives underscore that education transcends mere examination performance — it cultivates the " },
            { g: "employability", pos: "noun", def: "the qualities that make someone likely to get and keep a job" },
            { t: " and adaptability learners require to navigate both livelihood and life." },
          ] },
        ],
      },
    },
    references: [
      { domain: "unesco.org", headline: "Education transforms lives" },
      { domain: "oecd.org", headline: "Future of Education and Skills 2030/2040" },
      { domain: "banyantree.in", headline: "7 Essential Learning Skills Schools Must Teach in 2026" },
    ],
    discussionGuide: [
      {
        q: "Would you rather follow a university path or a vocational/technical training path? Why?",
        follow: ["What job would you like this kind of training to lead to?"],
      },
      {
        q: "The article says schools should teach 'how to learn,' not just 'what to learn.' What does that mean to you?",
        follow: ["Can you think of a time you had to learn something completely new, without clear instructions?"],
      },
      {
        q: "What skills do you think are most important for finding a job today?",
        follow: ["Are these skills taught in your school or training program?"],
      },
    ],
  },
  {
    slug: "wisdom-flexing-nerdy-cool",
    ready: true,
    emoji: "📚",
    variant: "culture",
    topicLabel: "Culture & Fun",
    topicTitle: "Culture, Stories & Fun",
    title: "'Wisdom Flexing' Makes Being Nerdy Cool Again",
    dek: "Culture watchers say 2026 pop culture loves books, deep thinking, and 'nerding out,' as people push back against shallow online hot takes.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "Culture experts say something interesting is happening in 2026: being a thoughtful 'nerd' is cool again. This new trend is called 'wisdom flexing.' It means showing deep knowledge instead of loud, quick opinions." },
          ] },
          { type: "p", parts: [
            { t: "Social media is full of short posts and fast reactions. Many people are tired of this. Now, long articles, serious reading, and careful research feel new and interesting again." },
          ] },
          { type: "p", parts: [
            { t: "One report says, 'Books are the new handbag, everyone has a newsletter, nerding out is trending.' Old stories, like classic books, are also becoming popular again in new movie and music versions." },
          ] },
          { type: "p", parts: [
            { t: "At the same time, movies and shows are using new technology, like AI-made video. But people still want stories with real meaning, not just flashy effects. For English learners, comparing old stories with new versions can be a fun classroom activity." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 380,
        blocks: [
          { type: "p", parts: [
            { t: "Cultural trend reports for 2026 say something surprising: being a thoughtful 'nerd' is cool again. One agency calls this movement 'wisdom flexing,' which means showing depth and knowledge instead of loud opinions. With social media full of quick reactions and short posts, many people are tired of what they see as empty hot takes. Now, long-form content, serious reading, and careful research are gaining new respect in fashion, entertainment, and online life." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "A 2026 cultural trends piece explains that demonstrating depth and cultural " },
            { g: "sophistication", pos: "noun", def: "a high level of knowledge, taste, or complexity" },
            { t: " has never been cooler — everyone has a Substack, and 'nerding out' is trending. Substack is a platform where writers share longer essays, often on " },
            { g: "niche", pos: "adjective", def: "relating to a small, specific group of interested people" },
            { t: " topics. Pop culture lists also show a rise in " },
            { g: "remix", pos: "noun", def: "a new version of an existing creative work" },
            { t: "ing classics, with new versions of old stories like Wuthering Heights and Pride & Prejudice." },
            { c: 2 },
          ] },
          { type: "quote", text: "Books are the new handbag, everyone has a Substack, nerding out is trending." },
          { type: "p", parts: [
            { t: "At the same time, entertainment industry forecasts for 2026 talk about generative video and synthetic celebrities — digital characters created by AI. These technical trends sit next to human desires for more meaningful stories and less shallow content. One media analyst notes that audience attention is 'a currency they have to compete for,' so studios and streamers are testing limited series and more carefully edited shows to hold that attention longer." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For learners, this 'wisdom flexing' trend opens friendly doors into literature and critical thinking. Discussing modern remixes of classic stories can help ESL students connect famous plots with current music, fashion, and social media." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "Cultural forecasts for 2026 identify an unexpected reversal: intellectual curiosity, once dismissed as unfashionable, has re-entered the cultural mainstream. Commentators term this phenomenon 'wisdom flexing' — the conspicuous display of depth and " },
            { g: "erudition", pos: "noun", def: "deep knowledge gained from reading and studying" },
            { t: " in place of reflexive opinion. Amid a social media landscape saturated with instantaneous reactions, audiences increasingly disdain what they perceive as vacuous hot takes, conferring renewed prestige upon long-form writing and rigorous research." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "One 2026 trends report observes that demonstrating depth and cultural sophistication has never been cooler, noting the proliferation of long-form platforms catering to niche intellectual interests. Concurrently, popular culture has embraced the 'remix' — reworking canonical texts such as Wuthering Heights and Pride & Prejudice into contemporary forms across music and film." },
            { c: 2 },
          ] },
          { type: "quote", text: "Books are the new handbag, everyone has a Substack, nerding out is trending." },
          { type: "p", parts: [
            { t: "Simultaneously, entertainment forecasts anticipate the rise of generative video and synthetic celebrities — wholly AI-constructed digital personas — even as audiences clamour for narratives of genuine substance over superficial spectacle. One media analyst observes that attention has become 'a currency [studios] have to compete for,' prompting a shift toward meticulously curated limited series designed to sustain engagement." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For language learners, this 'wisdom flexing' " },
            { g: "zeitgeist", pos: "noun", def: "the defining spirit or mood of a particular period" },
            { t: " offers an inviting gateway into literature and critical reasoning — comparing reimagined classics against their source material, for instance. Amid pervasive digital noise, this cultural recalibration suggests that considered reading and the deliberate sharing of knowledge may yet endure." },
          ] },
        ],
      },
    },
    references: [
      { domain: "webershandwick.com", headline: "Predicting the Unpredictable: The Top 10 Cultural Trends and Moments of 2026" },
      { domain: "betches.com", headline: "The Official 2026 Pop Culture Ins & Outs" },
      { domain: "linkedin.com", headline: "7 Media Trends That Will Redefine Entertainment In 2026" },
    ],
    discussionGuide: [
      {
        q: "Do you agree that 'nerding out' or being deeply interested in a topic is becoming cool? Why or why not?",
        follow: [],
      },
      {
        q: "The article compares social media 'hot takes' to long, thoughtful writing. Which do you prefer, and why?",
        follow: ["Do you read long articles or newsletters? What about?"],
      },
      {
        q: "Can you think of an old story (book, myth, or movie) that has been 'remixed' into something new? Describe it.",
        follow: [],
      },
    ],
  },
  {
    slug: "micro-communities-social-media",
    ready: true,
    emoji: "💬",
    variant: "culture",
    topicLabel: "Society & Issues",
    topicTitle: "People, Society & Issues",
    title: "Micro Communities Beat Virality In 2026 Social Media",
    dek: "New social media reports say users now prefer smaller, engaged communities and useful 'edutainment' over chasing big viral moments online.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 190,
        blocks: [
          { type: "p", parts: [
            { t: "Social media is changing in 2026. Before, being 'viral' — getting millions of views fast — was the biggest goal. Now, many people want something different: real connection with smaller groups." },
          ] },
          { type: "p", parts: [
            { t: "These smaller, close groups are called 'micro communities.' People in these groups talk, comment, and interact often. One report says that 1,000 real, active fans matter more than 10,000 silent followers." },
          ] },
          { type: "p", parts: [
            { t: "Because of this, companies and creators are spending more time answering comments and starting conversations, instead of just posting content." },
          ] },
          { type: "p", parts: [
            { t: "Another big trend is 'edutainment' — content that teaches something while it also entertains. Many people now use apps like TikTok as a search engine, to find recipes, travel tips, or study ideas. For English learners, joining a small community focused on English practice can feel safer than posting to a huge, anonymous crowd." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "Social media is changing in 2026, not only in technology but in how people want to connect. Several trend reports describe a clear move from virality — getting millions of views quickly — toward " },
            { g: "resonance", pos: "noun", def: "a strong emotional connection or response" },
            { t: " and community. Users are looking for spaces where they feel part of something real, rather than watching endless content from strangers." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This has led to the growth of micro communities: smaller groups of followers who interact regularly and share specific interests. Platforms and brands are responding by investing in community management, which means actively answering questions, guiding discussions, and creating content that invites conversation." },
            { c: 2 },
          ] },
          { type: "quote", text: "10,000 silent followers are worth less than 1,000 real fans who interact regularly." },
          { type: "p", parts: [
            { t: "Another important trend is 'edutainment' — content that educates while it entertains. People want practical value from their feeds, such as learning a skill or exploring culture, but they also expect stories and humor. Social media is increasingly used as a " },
            { g: "search engine", pos: "phrase", def: "a tool used to search for information online" },
            { t: "; many users now search TikTok or other apps for recipes, travel tips, and study ideas." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For ESL learners and teachers, these social trends matter. Language students can join micro communities focused on English practice, where comments and live chats provide regular interaction. As social media feels more like many small 'town squares' than one huge shouting crowd, learners may find safer, more supportive places to use English and build confidence." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 390,
        blocks: [
          { type: "p", parts: [
            { t: "Social media in 2026 is undergoing transformation not merely technologically but relationally. Multiple trend analyses chart a decisive pivot away from virality — the pursuit of rapid, mass viewership — toward resonance and community, with users gravitating toward spaces that feel authentically communal rather than an undifferentiated stream of strangers' content." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This has catalysed the ascent of micro communities: tightly-knit follower groups characterised by regular, substantive interaction around shared interests. In response, platforms and brands are investing heavily in community management — actively soliciting engagement, moderating discussion, and designing content expressly to invite conversation rather than passive consumption." },
            { c: 2 },
          ] },
          { type: "quote", text: "10,000 silent followers are worth less than 1,000 real fans who interact regularly." },
          { type: "p", parts: [
            { t: "A further defining trend is 'edutainment,' content that instructs even as it entertains. Social platforms have simultaneously assumed the function of de facto search engines, with users querying TikTok and comparable apps for recipes, travel guidance, and study strategies, compelling creators to optimise for " },
            { g: "discoverability", pos: "noun", def: "how easily something can be found by others, especially online" },
            { t: "." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For language learners and educators, these developments carry real significance. Students might join micro communities dedicated to English practice, where sustained comment threads foster habitual engagement. As social media increasingly resembles a constellation of intimate town squares rather than a single " },
            { g: "commodified", pos: "adjective", def: "turned into something valued mainly for profit" },
            { t: " arena, learners may find more hospitable spaces in which to build linguistic confidence." },
          ] },
        ],
      },
    },
    references: [
      { domain: "sproutsocial.com", headline: "7 social media trends you need to know in 2026" },
      { domain: "mmmake.com", headline: "Social media trends 2026: From micro communities to social SEO" },
      { domain: "nu.edu", headline: "Social Media Trends in 2026: What's Next" },
    ],
    discussionGuide: [
      {
        q: "Do you prefer being part of a small, close online group or following many big accounts? Why?",
        follow: [],
      },
      {
        q: "The article says '1,000 real fans' matter more than '10,000 silent followers.' Do you agree? What makes a follower 'real'?",
        follow: [],
      },
      {
        q: "Have you ever used social media like a search engine (for recipes, tips, etc.)? What did you search for?",
        follow: ["Do you trust information you find this way? Why or why not?"],
      },
    ],
  },
  {
    slug: "hidden-season-travel",
    ready: true,
    emoji: "🧳",
    variant: "planet",
    topicLabel: "Travel & Places",
    topicTitle: "Places, Travel & Journeys",
    title: "Hidden-Season Trips Rise As Travelers Avoid Crowds",
    dek: "A 2026 travel report shows more people booking longer, slower trips in less-busy seasons to enjoy local life and lower prices.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 190,
        blocks: [
          { type: "p", parts: [
            { t: "Travel companies say 2026 is the year of the 'hidden season.' Instead of visiting places at the busiest, most famous time, more travelers now choose quieter months. This helps them avoid crowds and pay lower prices." },
          ] },
          { type: "p", parts: [
            { t: "Examples include visiting Japan in autumn, Morocco in spring, or Zimbabwe in summer. These quieter trips let travelers see real local life, not just famous tourist spots." },
          ] },
          { type: "p", parts: [
            { t: "New booking data shows that trips longer than eight days grew by 19% this year. Places like Laos, Mongolia, and Nicaragua are becoming much more popular." },
          ] },
          { type: "p", parts: [
            { t: "Another growing trend is traveling by train instead of by plane. Long train trips through places like the Alps feel like part of the adventure, and trains are better for the environment. For English learners, travel is a great topic for talking about slow travel, trains versus planes, and planning a trip." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "Travel companies report that 2026 is becoming the 'year of the hidden season.' Instead of only visiting places at the most famous times — such as summer in Europe — more travelers are choosing quieter months to avoid crowds and high costs. A travel trends report describes hidden-season examples: golden autumns in Japan, spring blossoms in Morocco, or summer safaris in Zimbabwe. These trips offer better chances to see local daily life, not just tourist hotspots." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Booking data from one adventure travel company shows a clear shift. Customers booking trips longer than eight days increased by 19% compared with the previous year. Destinations like Laos, Mongolia, Nicaragua, and Zimbabwe are seeing strong growth, with some up more than 100%. This connects to wider interest in " },
            { g: "sustainable", pos: "adjective", def: "causing little damage to the environment, able to continue long-term" },
            { t: " travel, where visitors think about their impact on nature and local communities." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Another rising trend is " },
            { g: "overland", pos: "adjective", def: "travelling across land rather than by air" },
            { t: " travel by train. Instead of short flights, more people are choosing epic rail journeys through regions like the Alps and the Balkans. Other reports list luxury train hopping, ancestry travel, and astro-cruising — trips designed around space events like the 2026 total solar eclipse in Europe — as popular themes." },
            { c: 3 },
          ] },
          { type: "quote", text: "Combine celestial wonders with cultural discovery has been sky-high." },
          { type: "p", parts: [
            { t: "Major events also shape where people go. Ahead of the 2026 FIFA World Cup, interest in North American host cities across June and July is rising. For language classrooms, these travel shifts offer rich material: students can practice describing hidden-season trips, or planning a slow-travel " },
            { g: "itinerary", pos: "noun", def: "a planned route or list of places to visit on a trip" },
            { t: " that includes local food, festivals, and nature." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 385,
        blocks: [
          { type: "p", parts: [
            { t: "The travel industry reports that 2026 is emerging as the 'year of the hidden season,' as travellers increasingly forsake peak-season destinations — European summers, most notably — in favour of quieter months offering respite from crowds and inflated prices. Illustrative hidden-season itineraries include autumnal Japan, springtime Morocco, and midsummer Zimbabwean safaris, each affording deeper access to local life rather than merely tourist hotspots." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Booking data from one adventure-travel operator corroborates this shift: journeys exceeding eight days have risen 19% year-on-year, with " },
            { g: "burgeoning", pos: "adjective", def: "growing or developing rapidly" },
            { t: " demand for Laos, Mongolia, Nicaragua, and Zimbabwe. Travellers appear drawn to the 'lesser-known corners of well-loved countries,' seeking greater " },
            { g: "authenticity", pos: "noun", def: "the quality of being genuine or real, not fake" },
            { t: " and a diminished environmental toll." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "A further ascendant trend is overland rail travel: rather than brief flights, travellers increasingly favour extended rail journeys through regions such as the Alps and the Balkans, prized both for their reduced " },
            { g: "carbon footprint", pos: "phrase", def: "the amount of carbon dioxide released because of an activity" },
            { t: " and for the intrinsic adventure of the journey itself. Concurrently, other reports cite luxury train-hopping and 'astro-cruising' — voyages timed to celestial events such as 2026's total solar eclipse over Europe." },
            { c: 3 },
          ] },
          { type: "quote", text: "Combine celestial wonders with cultural discovery has been sky-high." },
          { type: "p", parts: [
            { t: "Major events likewise shape travel patterns: anticipation of the 2026 FIFA World Cup has spurred a marked uptick in interest toward North American host cities across June and July. For language classrooms, such shifts furnish rich material — students might articulate the appeal of hidden-season travel, weigh rail against air transport, or devise a slow-travel itinerary encompassing local cuisine, festivals, and the natural landscape." },
          ] },
        ],
      },
    },
    references: [
      { domain: "explore.co.uk", headline: "Travel Trends 2026 | Annual Report On Where People Go" },
      { domain: "cntraveler.com", headline: "The Biggest Travel Trends of 2026" },
      { domain: "travelagewest.com", headline: "Top Summer Travel Trends for 2026" },
    ],
    discussionGuide: [
      {
        q: "Would you rather travel during a busy, popular season or a quieter 'hidden season'? Why?",
        follow: ["What would you gain or lose by choosing the quieter option?"],
      },
      {
        q: "The article talks about traveling by train instead of by plane. Which do you prefer, and why?",
        follow: ["Do you think about the environment when you choose how to travel?"],
      },
      {
        q: "If you could plan a trip around a big event (like the World Cup or an eclipse), where would you go?",
        follow: [],
      },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

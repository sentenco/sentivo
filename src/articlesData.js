// Gazette article data. All 8 categories are now fully authored (3 Editions,
// glosses, citations, references, discussion guide), sourced via the
// standing Perplexity research prompt (see docs/gazette-article-prompt.md).

import filipinosRethinkImg from "./assets/articles/filipinos-rethink-healthy.jpeg";
import spudcellsImg from "./assets/articles/spudcells.jpeg";
import aiWorkflowsImg from "./assets/articles/ai-workflows.jpeg";
import fourDayWorkweekImg from "./assets/articles/four-day-workweek.jpeg";
import skillsMoveUsImg from "./assets/articles/skills-move-us.jpeg";
import wisdomFlexingImg from "./assets/articles/wisdom-flexing.jpeg";

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
    publishedAt: "2026-07-29",
    emoji: "🧘",
    image: filipinosRethinkImg,
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
    publishedAt: "2026-07-29",
    emoji: "🧪",
    image: spudcellsImg,
    showEditorialBanner: true,
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
    publishedAt: "2026-07-29",
    emoji: "🤖",
    image: aiWorkflowsImg,
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
    publishedAt: "2026-07-29",
    emoji: "🗓️",
    image: fourDayWorkweekImg,
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
    publishedAt: "2026-07-29",
    emoji: "🎓",
    image: skillsMoveUsImg,
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
    publishedAt: "2026-07-29",
    emoji: "📚",
    image: wisdomFlexingImg,
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
    publishedAt: "2026-07-29",
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
    publishedAt: "2026-07-29",
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
  {
    slug: "self-care-month-2026",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "💧",
    variant: "daily",
    topicLabel: "Daily Life",
    topicTitle: "Wellbeing & Daily Life",
    title: "Self-Care Month Puts Simple Health Habits Back in Focus",
    dek: "A global July campaign is reminding people that good health often starts with small daily routines, not expensive products or dramatic changes.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 195,
        blocks: [
          { type: "p", parts: [
            { t: "This July, health groups around the world are celebrating Self-Care Month 2026. The message is simple: everyday habits matter. The World Health Organization says self-care means healthy choices like eating well, moving your body, sleeping enough, and staying connected with other people. It is not only about spa days or expensive products." },
          ] },
          { type: "p", parts: [
            { t: "Many people feel tired or overloaded by fast digital life. Because of this, experts say it is better to start small. Instead of changing everything at once, choose one or two easy habits, like drinking more water, taking a short walk after work, or using your phone less before bed." },
          ] },
          { type: "p", parts: [
            { t: "Experts also say self-care should not feel like pressure. Some wellness trends online look perfect and expensive, but real self-care is often simple. The WHO message this year is: 'Test. Track. Thrive.' This means noticing your habits, understanding how your body feels, and making small changes over time." },
          ] },
          { type: "p", parts: [
            { t: "For English learners, this topic connects global health ideas with daily life, and it is a great way to practice giving simple health advice." },
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
            { t: "This July, health groups around the world are marking Self-Care Month 2026 with a simple message: everyday habits matter. The World Health Organization says self-care includes healthy practices and lifestyle choices such as eating well, moving your body, sleeping enough, and staying connected with other people. In other words, self-care is not only about spa days or buying wellness products. It is about the small things people do regularly to protect their physical and mental health." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "That message is especially timely because many people feel tired, distracted, or " },
            { g: "overloaded", pos: "adjective", def: "given too much to handle" },
            { t: " by fast digital life. Health writers say " },
            { g: "routines", pos: "noun", def: "regular ways of doing things, done in the same order each time" },
            { t: " work best when they are realistic. Instead of trying to change everything at once, people are encouraged to choose one or two habits that are easy to repeat, such as drinking more water, taking a short walk after work, or reducing screen time before bed." },
            { c: 2 },
          ] },
          { type: "quote", text: "Take a 10-minute walk after work." },
          { type: "p", parts: [
            { t: "Experts also stress that self-care should not feel like pressure. Some wellness trends online make health look perfect and expensive, but public health messages are moving in the opposite direction. The WHO theme for this year says, 'Self-Care puts your health in your hands: Test. Track. Thrive.' That idea supports simple awareness: notice your habits, understand how your body feels, and make " },
            { g: "sustainable", pos: "adjective", def: "able to continue over a long time" },
            { t: " adjustments over time." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For intermediate English learners, this story is useful because it connects global health language with familiar daily actions. Students can discuss which habits are easy or difficult, compare routines in different countries, and practice giving health advice in English." },
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
            { t: "This July, health organisations worldwide are observing Self-Care Month 2026, championing a modest but resonant message: everyday habits matter more than dramatic overhauls. The World Health Organization defines self-care as encompassing healthy practices and lifestyle choices — nutrition, physical activity, adequate sleep, and social connection — rather than merely spa visits or wellness products." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This message proves particularly timely given how frequently people report feeling fatigued, distracted, or overloaded amid accelerating digital life. Health commentators note that routines prove most durable when adopted " },
            { g: "incrementally", pos: "adverb", def: "gradually, in small steps rather than all at once" },
            { t: " — drinking more water, taking a brief walk after work, or curbing screen time before bed, rather than attempting wholesale transformation." },
            { c: 2 },
          ] },
          { type: "quote", text: "Take a 10-minute walk after work." },
          { type: "p", parts: [
            { t: "Practitioners further caution against self-care becoming another source of pressure. Where online wellness aesthetics often appear immaculate and costly, public health messaging increasingly emphasises " },
            { g: "efficacy", pos: "noun", def: "the ability to produce a desired result" },
            { t: " over appearance. The WHO's 2026 theme — 'Test. Track. Thrive.' — encourages simple self-awareness: observing one's habits, attending to bodily signals, and making sustainable adjustments over time." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For intermediate learners, this narrative usefully bridges global health discourse and familiar daily conduct, inviting discussion of which habits prove most " },
            { g: "discretionary", pos: "adjective", def: "available for use at one's own judgment, not obligatory" },
            { t: " versus essential, comparative routines across cultures, and the practice of offering health guidance in English." },
          ] },
        ],
      },
    },
    references: [
      { domain: "who.int", headline: "Self-Care Month 2026" },
      { domain: "doctoranywhere.ph", headline: "How to Build a Wellness Routine That Actually Sticks in 2026" },
      { domain: "uphealthsystem.com", headline: "Healthy Habits to Start in 2026 for Better Overall Health" },
    ],
    discussionGuide: [
      {
        q: "What is one small habit you could add to your daily routine? Why did you choose it?",
        follow: ["What usually stops people from keeping new habits?"],
      },
      {
        q: "The WHO says self-care is 'Test. Track. Thrive.' What does this mean to you?",
        follow: [],
      },
      {
        q: "Do you think online wellness trends (like spa days or expensive products) make self-care feel more difficult? Why or why not?",
        follow: [],
      },
    ],
  },
  {
    slug: "toddler-food-study",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🥫",
    variant: "planet",
    topicLabel: "Nature & Science",
    topicTitle: "Nature, Science & Planet",
    title: "Toddler Food Study Raises Fresh Health Questions",
    dek: "A new July research headline says most toddler foods may be ultra-processed, opening a wider conversation about nutrition and early childhood health.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 180,
        blocks: [
          { type: "p", parts: [
            { t: "A new July 2026 report says something surprising: four out of five toddler foods are ultra-processed. Ultra-processed foods are made with many changes from their natural ingredients. Companies often add flavoring, coloring, or chemicals to make the food last longer or taste better." },
          ] },
          { type: "p", parts: [
            { t: "This is important because toddler years are a key time for growth. During this time, children learn what foods feel normal to eat. If children eat mostly processed snacks and packaged meals, they may get used to strong flavors and soft textures, instead of fresh fruits, vegetables, and simple home-cooked food." },
          ] },
          { type: "p", parts: [
            { t: "The news does not mean all packaged food is bad. The real question is about balance. Parents need food labels that are easy to understand, and healthy food that is still affordable and easy to prepare." },
          ] },
          { type: "p", parts: [
            { t: "This topic is useful for the classroom. Students can talk about children's snacks in different countries, how advertising affects food choices, and vocabulary about ingredients and nutrition." },
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
            { t: "A July 2026 research update has put toddler nutrition back in the spotlight. ScienceDaily highlighted a striking finding: four in five toddler foods are " },
            { g: "ultra-processed", pos: "phrase", def: "changed a lot from the food's natural form, often with added chemicals" },
            { t: ". These are products heavily changed from their original ingredients and often include " },
            { g: "additives", pos: "noun", def: "substances added to food to improve taste, appearance, or shelf life" },
            { t: " such as flavoring, coloring, or preservatives to improve taste, texture, or shelf life. While convenient, researchers often worry that too much processing can reduce " },
            { g: "nutritional", pos: "adjective", def: "relating to food and how it affects health" },
            { t: " quality and shape unhealthy eating habits early in life." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "The story matters because toddler years are a key period for growth and taste development. During this stage, children learn what kinds of food feel normal and enjoyable. If highly processed snacks, sweet pouches, or packaged meals become common, children may become more used to strong flavors and softer textures than to fresh fruits, vegetables, and simple home-cooked meals." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Although the headline sounds alarming, experts usually do not argue that every packaged food is bad. The bigger question is balance and information. Parents need labels they can understand and access to healthier options that are still affordable and practical. More research in health science is also showing that early nutrition affects not only physical growth but long-term habits connected to energy, concentration, and wellbeing." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For classrooms, this topic offers an accessible way to talk about science, family choices, and public health in plain English. Learners can compare children's snacks in different countries, discuss how advertising influences food choices, and practice vocabulary related to ingredients, labels, and nutrition." },
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
            { t: "A July 2026 research update has returned toddler nutrition to public scrutiny. ScienceDaily's findings prove striking: four in five toddler foods qualify as ultra-processed — products substantially altered from their original ingredients, typically incorporating additives such as flavouring, colouring, or preservatives to enhance taste, texture, or shelf life. Whatever their convenience, researchers frequently caution that such " },
            { g: "ubiquity", pos: "noun", def: "the fact of being present or found everywhere" },
            { t: " may compromise nutritional quality and entrench unhealthy eating patterns from an early age." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This matters acutely because toddlerhood constitutes a formative period for both growth and " },
            { g: "palate", pos: "noun", def: "a person's ability to taste and enjoy different foods" },
            { t: " development. Children absorb, during this window, which foods feel normal and pleasurable. Should heavily processed snacks and packaged meals predominate, children risk acclimating to intense flavours and softened textures rather than to fresh produce and home-prepared fare." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Though the headline unsettles, experts rarely contend that all packaged food is deleterious; the more pressing concern is one of balance and transparency. Parents require intelligible labelling and access to healthier alternatives that remain both practical and within reach financially, given persistent " },
            { g: "affordability", pos: "noun", def: "the quality of being reasonably priced" },
            { t: " constraints. Emerging health science further indicates that early nutrition shapes not merely physical growth but enduring habits governing energy, concentration, and wellbeing." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For classrooms, this episode furnishes an accessible entry point into science, familial decision-making, and public health discourse. Learners might compare children's snacks across nations, interrogate the influence of advertising on dietary choice, and rehearse vocabulary pertaining to ingredients, labelling, and nutrition." },
          ] },
        ],
      },
    },
    references: [
      { domain: "sciencedaily.com", headline: "ScienceDaily: Your source for the latest research news" },
      { domain: "sciencedaily.com", headline: "Health & Medicine News" },
      { domain: "abs-cbn.com", headline: "Health & Science News | ABS-CBN Latest Updates" },
    ],
    discussionGuide: [
      {
        q: "Were you surprised that most toddler foods are ultra-processed? Why or why not?",
        follow: ["What packaged foods do you eat regularly? Are they processed?"],
      },
      {
        q: "The article says parents need labels they can understand. Do you find food labels easy or difficult to read? Why?",
        follow: [],
      },
      {
        q: "How could families make healthier food choices without spending more money or time?",
        follow: [],
      },
    ],
  },
  {
    slug: "ai-tools-work-partners",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🛠️",
    variant: "tech",
    topicLabel: "Digital & Tech",
    topicTitle: "Digital Life & Future Tech",
    title: "July's AI Tools Turn Chatbots Into Work Partners",
    dek: "New platform updates suggest AI is shifting from answering questions to completing bigger, more practical tasks across work and creative apps.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 195,
        blocks: [
          { type: "p", parts: [
            { t: "In July 2026, many companies released new AI updates. These updates show that AI is changing quickly. Instead of working like simple chatbots that only answer questions, new AI systems are being built as 'work partners.' They can now do longer, more complete tasks, like coding, planning, designing, and searching the internet." },
          ] },
          { type: "p", parts: [
            { t: "Before, people used AI mostly to get fast answers. Now, AI is trying to help finish whole projects with less work from the person using it. For example, AI can research a topic, write a summary, and even help build a presentation, all in one process." },
          ] },
          { type: "p", parts: [
            { t: "But this change also creates new challenges. When AI becomes more powerful, people need to think carefully. They must check facts, protect private information, and know when a human still needs to check the work." },
          ] },
          { type: "p", parts: [
            { t: "For students and teachers, this is important. AI can save time, but people still need to guide it well, check the results, and use their own thinking together with AI's speed." },
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
            { t: "July 2026 brought a wave of AI product updates that show how quickly digital tools are changing. Instead of acting like simple chatbots, many new systems are being designed as work partners that can handle longer and more complicated tasks. Reports from this month mention tools for coding, campaign planning, creative design, and web browsing. The goal is no longer just fast answers. It is to help users finish real projects with less " },
            { g: "manual", pos: "adjective", def: "done by hand or by a person, not by a machine" },
            { t: " effort." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "One roundup of July platform news says companies introduced products that move AI deeper into everyday " },
            { g: "workflows", pos: "noun", def: "the full processes of completing tasks, step by step" },
            { t: ". For example, a user may want to research a topic, summarize findings, draft a presentation, and prepare visuals. Newer AI systems increasingly try to support that whole chain, not only one step." },
            { c: 2 },
          ] },
          { type: "quote", text: "From instrument to partner." },
          { type: "p", parts: [
            { t: "This change is exciting, but it also creates new pressure for users to learn wisely. When tools become more powerful, people need better judgment about checking facts, protecting privacy, and knowing when human review is still necessary. A system that drafts code or builds content quickly can still make mistakes, especially if the user accepts every suggestion without thinking. That is why " },
            { g: "digital literacy", pos: "phrase", def: "the ability to use technology critically and effectively" },
            { t: " is becoming just as important as technical skill." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For students and teachers, this story is especially relevant. AI can save time by organizing ideas, simplifying explanations, or generating practice materials, but it also changes what learners need to practice on their own. In the near future, success may depend less on typing the perfect prompt and more on guiding AI carefully, checking results, and combining machine speed with human creativity." },
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
            { t: "July 2026 witnessed a wave of AI product releases underscoring the rapidity of digital transformation. Rather than functioning as rudimentary chatbots, emergent systems are increasingly conceived as collaborative partners capable of executing longer, more intricate tasks — spanning coding, campaign strategy, creative design, and web navigation. The ambition has shifted from expedient answers toward completing substantive projects with diminished manual intervention." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Industry commentary on July's platform announcements indicates that AI is being woven more deeply into everyday workflows — the sequential process by which a task is completed. A user might research a topic, synthesise findings, draft a presentation, and prepare visuals; contemporary AI increasingly aims to " },
            { g: "augment", pos: "verb", def: "to make something greater by adding to it" },
            { t: " this entire chain rather than a single step." },
            { c: 2 },
          ] },
          { type: "quote", text: "From instrument to partner." },
          { type: "p", parts: [
            { t: "This evolution, however exhilarating, imposes fresh demands on user judgement. As tools grow more capable, users require sharper " },
            { g: "discernment", pos: "noun", def: "the ability to judge well" },
            { t: " regarding fact-checking, privacy safeguarding, and recognising when human oversight remains indispensable. A system that drafts code or content swiftly may nonetheless err, particularly where " },
            { g: "overreliance", pos: "noun", def: "depending on something too much" },
            { t: " on unexamined suggestions prevails." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For students and educators, this development carries particular weight. AI may expedite the organisation of ideas or generation of practice material, yet it simultaneously redefines what learners must cultivate independently. Future success may hinge less on crafting a flawless prompt than on judiciously directing AI, scrutinising its output, and marrying computational speed with human ingenuity." },
          ] },
        ],
      },
    },
    references: [
      { domain: "campaignme.com", headline: "AI platform updates you need to know from July 2026" },
      { domain: "microsoft.com", headline: "What's next in AI: 7 trends to watch in 2026" },
      { domain: "marketingprofs.com", headline: "AI Update, July 10, 2026: AI News and Views From the Past Week" },
    ],
    discussionGuide: [
      {
        q: "Would you want an AI 'work partner' to help you finish a big project? What tasks would you want it to do?",
        follow: ["What parts would you still want to do yourself?"],
      },
      {
        q: "The article says AI's power creates a need for better judgment, like checking facts. How do you usually check if information is true?",
        follow: [],
      },
      {
        q: "Do you think students should use AI to help with schoolwork? Where should the line be?",
        follow: [],
      },
    ],
  },
  {
    slug: "global-engagement-slips",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "📉",
    variant: "work",
    topicLabel: "Work & Business",
    topicTitle: "Worklife, Business & Careers",
    title: "Global Engagement Slips, and Workplaces Feel the Cost",
    dek: "A major 2026 workplace report says fewer employees feel engaged at work, pushing companies to rethink leadership, hybrid work, and wellbeing.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 195,
        blocks: [
          { type: "p", parts: [
            { t: "A big workplace report in 2026 says fewer workers feel engaged in their jobs. 'Engagement' means how connected, motivated, and interested people feel about their work. New data says only 20% of workers worldwide feel engaged — the lowest number since 2020. This costs companies a lot of money, because workers who do not care about their jobs often work less carefully and leave their jobs more often." },
          ] },
          { type: "p", parts: [
            { t: "This matters because it is not just a personal feeling. It affects how well companies work. Many reports say workers now want more than just a salary. They want clear communication, fair workloads, flexible schedules, and managers who care about their wellbeing." },
          ] },
          { type: "p", parts: [
            { t: "At the same time, AI is changing jobs and creating new stress. Some workers worry about losing their jobs to AI, while others feel pressure to learn new tools quickly. Good managers in 2026 must help workers learn new skills while also keeping trust and good spirit on the team." },
          ] },
          { type: "p", parts: [
            { t: "This is useful for English learners talking about careers and office life." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "A major workplace report released in 2026 says employee " },
            { g: "engagement", pos: "noun", def: "how involved, motivated, and emotionally connected someone feels in their job" },
            { t: " has fallen again around the world. Gallup's new findings say global engagement fell to 20% in 2025, the lowest level since 2020, and the report links this trend to huge economic losses. When workers stop caring deeply about their tasks, companies often see weaker teamwork, lower productivity, and higher " },
            { g: "turnover", pos: "noun", def: "the rate at which employees leave a company and are replaced" },
            { t: "." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This story matters because disengagement is not just a private feeling. It affects how organizations perform and how leaders make decisions. Several 2026 workplace trend reports say employees now expect more than salary and job security. They want clearer communication, manageable workloads, flexible schedules, and managers who understand both performance and wellbeing." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "At the same time, AI is changing job design and creating new stress. Some workers worry about being replaced, while others feel pressure to adapt to new tools very quickly. The Society for Human Resource Management lists 'AI Regulations, Ethics, and Workforce Transformation' among the top five workplace issues for 2026. Good management in 2026 means helping staff build new skills while also protecting trust and " },
            { g: "morale", pos: "noun", def: "the general feeling of confidence and enthusiasm in a group" },
            { t: "." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "For learners, this trend offers rich language for discussing careers and office culture. Students can compare what makes workers feel motivated, debate the pros and cons of hybrid schedules, and practice business English for feedback, meetings, and team support." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "A major 2026 workplace report indicates that employee engagement has declined once more across the globe. Gallup's latest findings place global engagement at a mere 20% in 2025 — its lowest ebb since 2020 — and attribute this trajectory to substantial economic losses. As workers grow indifferent to their responsibilities, organisations typically witness weakened collaboration, diminished productivity, and elevated " },
            { g: "attrition", pos: "noun", def: "a gradual reduction in employees through resignation or retirement" },
            { t: "." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This matters because disengagement transcends private sentiment, materially shaping organisational performance and executive decision-making. Numerous 2026 workplace analyses report that employees now anticipate more than remuneration and job security, seeking transparent communication, equitable workloads, flexible arrangements, and managers attentive to both performance and wellbeing." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Concurrently, artificial intelligence is reshaping job design and generating fresh anxieties. Some employees fear obsolescence, while others feel compelled to assimilate new tools with undue haste. SHRM enumerates 'AI Regulations, Ethics, and Workforce Transformation' among 2026's foremost workplace concerns, underscoring how thoroughly technological and human considerations have become intertwined. Effective management now entails cultivating new competencies while safeguarding trust and " },
            { g: "cohesion", pos: "noun", def: "the state of sticking together or forming a united whole" },
            { t: "." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "For learners, this phenomenon yields substantial vocabulary for discussing careers and organisational culture — comparing motivational drivers, weighing hybrid arrangements, and rehearsing business English for feedback and collaborative dialogue." },
          ] },
        ],
      },
    },
    references: [
      { domain: "gallup.com", headline: "State of the Global Workplace 2026" },
      { domain: "shrm.org", headline: "2026 Top Five Workplace Issues" },
      { domain: "zoom.com", headline: "12 must-know hybrid work trends in 2026" },
    ],
    discussionGuide: [
      {
        q: "What makes you feel motivated or 'engaged' at work or school? What makes you feel disconnected?",
        follow: [],
      },
      {
        q: "The article says only 20% of workers worldwide feel engaged. Does that number surprise you? Why or why not?",
        follow: ["What do you think causes low engagement?"],
      },
      {
        q: "How do you think AI is changing jobs in your field or country?",
        follow: ["Do you feel worried or excited about this change?"],
      },
    ],
  },
  {
    slug: "strengthened-shs-curriculum",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🏫",
    variant: "work",
    topicLabel: "Study & Skills",
    topicTitle: "Study, School & Skills",
    title: "Philippines Rolls Out Stronger Senior High Curriculum",
    dek: "A new curriculum for Philippine senior high schools aims to make learning more focused, practical, and responsive to students' future paths.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 190,
        blocks: [
          { type: "p", parts: [
            { t: "The Philippines is making a big change in senior high school. Starting in School Year 2026–2027, the Department of Education (DepEd) will use a new 'Strengthened Senior High School Curriculum' in public and private schools. The goal is to make school more focused and more useful for students who are preparing for work, training, or university." },
          ] },
          { type: "p", parts: [
            { t: "This matters because many students feel pressure to choose their future path before they feel ready. A better curriculum can help by connecting classroom lessons more clearly to real jobs and further study." },
          ] },
          { type: "p", parts: [
            { t: "The story also connects to how schools use technology. A new rule says students and school staff cannot use their phones and gadgets during class time in public schools, except for learning or emergencies." },
          ] },
          { type: "p", parts: [
            { t: "This shows that schools want to use technology in smart ways, without too much distraction. The main goal is not more gadgets or fewer gadgets — it is better learning. For English learners, students can discuss useful school subjects, future skills, and phone rules in class." },
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
            { t: "The Philippines is preparing a major change in senior high school learning. According to a July 2026 report, the Department of Education will " },
            { g: "implement", pos: "verb", def: "to put a plan or system into action" },
            { t: " a Strengthened Senior High School " },
            { g: "curriculum", pos: "noun", def: "the subjects and content taught in a school or course" },
            { t: " in public and private schools for School Year 2026–2027. The reform aims to make the curriculum more focused and more useful for students preparing for work, training, or university. In simple terms, schools are trying to teach fewer scattered topics and give more attention to skills that match real next steps after graduation." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This matters because many students feel pressure to choose a future path before they are fully ready. A stronger curriculum can help by connecting classroom content more clearly to careers and higher education. Reports on education and skills in 2026 continue to stress the value of practical learning, adaptability, and clearer skills pathways for young people." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "The story also connects with debates about how technology should be used in school. A July 1 update said the use of learners' and school personnel's gadgets during class hours in public schools is prohibited except for educational or emergency purposes. That rule reflects a growing challenge in education: schools want to use technology meaningfully, but they also want to reduce " },
            { g: "distraction", pos: "noun", def: "something that takes your attention away from what you should be doing" },
            { t: ". The broader goal is not simply more devices or fewer devices. It is better learning." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "For ESL classrooms, this topic is practical and close to students' real lives. Learners can discuss which subjects feel useful, what skills they need after high school, and whether classroom gadget rules help or hurt learning." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "The Philippines is instituting a substantial reform of senior high school education. Per a July 2026 report, the Department of Education will implement a Strengthened Senior High School Curriculum across public and private institutions beginning School Year 2026–2027, intending to " },
            { g: "streamline", pos: "verb", def: "to make a process simpler and more efficient" },
            { t: " content and render it more germane to students preparing for employment, vocational training, or university." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "This matters because students frequently feel compelled to select a future trajectory before they feel adequately prepared. A more coherent curriculum may ameliorate this by aligning classroom content more transparently with career and higher-education pathways. Contemporary reports on education continue to emphasise practical learning, adaptability, and clearer " },
            { g: "pedagogical", pos: "adjective", def: "relating to teaching methods" },
            { t: " pathways for young people." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "The narrative further intersects with debates over technology's classroom role. A July 1 directive stipulated that gadget use by learners and personnel during class hours in public schools is " },
            { g: "circumscribed", pos: "verb", def: "restricted or limited" },
            { t: " save for educational or emergency purposes — reflecting education's perennial challenge of harnessing technology meaningfully while curbing distraction. The overarching aim is neither maximal nor minimal device use, but enhanced learning outcomes." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "For ESL classrooms, this episode proves immediately relevant, inviting discussion of which subjects feel genuinely useful, which skills students require post-graduation, and whether gadget restrictions serve or hinder learning." },
          ] },
        ],
      },
    },
    references: [
      { domain: "abs-cbn.com", headline: "DepEd rolls out 'strengthened' senior high curriculum" },
      { domain: "facebook.com", headline: "DepEd: gadget use during class hours prohibited except for educational or emergency purposes" },
      { domain: "unesco.org", headline: "Education transforms lives" },
    ],
    discussionGuide: [
      {
        q: "Do you think school subjects should connect more directly to future jobs? Why or why not?",
        follow: [],
      },
      {
        q: "The Philippines banned gadgets in class except for learning or emergencies. Do you agree with this rule? Why or why not?",
        follow: ["What are the benefits and problems of using phones in class?"],
      },
      {
        q: "What skills do you wish your school taught you before graduation?",
        follow: [],
      },
    ],
  },
  {
    slug: "sports-new-style-stage",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🎾",
    variant: "culture",
    topicLabel: "Culture & Fun",
    topicTitle: "Culture, Stories & Fun",
    title: "Sports Overtake Fashion as a New Style Stage",
    dek: "A 2026 culture report says tennis and other sports are becoming major centers of fashion, lifestyle influence, and entertainment buzz.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "One of the most fun culture trends of 2026 is the connection between sports and fashion. A big culture report says sports are no longer only about competition. They are also becoming a place for fashion, identity, and entertainment. This trend is called 'Serving Looks' — a phrase that mixes tennis and style." },
          ] },
          { type: "p", parts: [
            { t: "The report gives tennis as an example. It says the US Open got more online attention than New York Fashion Week the year before. This does not mean fashion is disappearing. It is moving to new places. Athletes and sports fans are now influencing what people wear and post online." },
          ] },
          { type: "p", parts: [
            { t: "This fits a bigger pattern in entertainment. People want events that feel exciting, social, and easy to share online. Sports give people all of this, plus strong personalities and exciting moments. Big events in 2026, like Wimbledon and the World Cup, are keeping sports at the center of pop culture." },
          ] },
          { type: "p", parts: [
            { t: "For English learners, students can describe sports outfits, compare fashion shows and sports events, and talk about why athletes are now trendsetters." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "One of the liveliest culture trends of 2026 is the growing connection between sports and style. A major cultural forecast argues that sports are no longer only about competition. They are also becoming powerful spaces for fashion, identity, and entertainment. In the report, this trend is called 'Serving Looks,' a phrase that plays on both tennis and style. The idea is simple: stadiums and courts are starting to shape culture in the same way runways once did." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "The report points to tennis as a clear example. It says the US Open generated far more online coverage than New York Fashion Week the year before, showing how sports events can now lead lifestyle conversation. This does not mean fashion is disappearing. Instead, it is moving into new places. Athletes, " },
            { g: "spectators", pos: "noun", def: "people who watch an event, especially a sports game" },
            { t: ", and sports brands are influencing what people wear, what they post online, and what feels modern or " },
            { g: "aspirational", pos: "adjective", def: "relating to something people hope to have or achieve" },
            { t: "." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "This shift fits a larger entertainment pattern. People want events that feel alive, social, and visually exciting. Sports offer all of that, plus strong personalities, memorable moments, and communities of fans. Big global events in 2026, including Wimbledon and the World Cup, are helping to keep sports at the center of pop culture conversation throughout the year." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For English learners, this story creates fun classroom possibilities. Students can describe sports outfits, compare fashion shows and sporting events, or discuss why athletes are now important " },
            { g: "trendsetters", pos: "noun", def: "people or things that start a new fashion or style" },
            { t: ". It is also a strong reminder that culture does not stay in one place." },
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
            { t: "Among 2026's most vibrant cultural currents is the deepening entanglement of sport and style. A prominent cultural forecast contends that athletic competition no longer exists in isolation from fashion, identity, and entertainment — indeed, stadiums and courts increasingly shape culture much as runways once did, a phenomenon the report terms 'Serving Looks.'" },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Tennis furnishes an illustrative case: the US Open, the report notes, generated markedly greater online coverage than New York Fashion Week the preceding year, evidencing sport's ascension to the " },
            { g: "vanguard", pos: "noun", def: "the leading position in a trend or movement" },
            { t: " of lifestyle discourse. Fashion has not vanished but relocated — athletes and spectators alike now confer " },
            { g: "cachet", pos: "noun", def: "the quality of being respected or admired; prestige" },
            { t: " upon what people wear and share online." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "This realignment reflects a broader entertainment pattern favouring events that feel visceral, communal, and visually arresting. Sport supplies all three, alongside charismatic personalities and fervent fan communities. Major 2026 fixtures — Wimbledon and the World Cup among them — sustain sport's centrality to popular culture throughout the calendar year." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For language learners, this narrative yields playful classroom material: describing athletic attire, comparing runway shows against sporting spectacles, or examining why athletes now function as cultural " },
            { g: "arbiters", pos: "noun", def: "people who have influence over what is done or considered acceptable" },
            { t: ". It serves as a vivid reminder that culture rarely stays put — sometimes the next defining style narrative emerges not from a runway, but from a tennis court." },
          ] },
        ],
      },
    },
    references: [
      { domain: "webershandwick.com", headline: "Predicting the Unpredictable: The Top 10 Cultural Trends and Moments of 2026" },
      { domain: "forbes.com", headline: "7 Cultural Trends Shaping Business in 2026 and Beyond" },
      { domain: "britannica.com", headline: "Major Events of 2026 | Pop Culture, Current Events & Trends" },
    ],
    discussionGuide: [
      {
        q: "Do you follow any athletes because of their style or fashion sense? Who, and why?",
        follow: [],
      },
      {
        q: "The article says sports events now get more attention online than fashion shows. Does this surprise you?",
        follow: ["Do you think this will continue, or will fashion 'catch up'?"],
      },
      {
        q: "What sport or sports event do you think has the most interesting fashion or style?",
        follow: [],
      },
    ],
  },
  {
    slug: "social-media-substance-over-noise",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🧵",
    variant: "culture",
    topicLabel: "Society & Issues",
    topicTitle: "People, Society & Issues",
    title: "Social Media's New Goal: Substance Over Noise",
    dek: "Fresh 2026 reports say people are rewarding content that feels useful, real, and community-based instead of loud posts built only for attention.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 190,
        blocks: [
          { type: "p", parts: [
            { t: "Many 2026 social media reports say something is changing: people want more meaning, not just noise. The 'attention economy' is the online system where creators and companies compete for clicks and views. But now, users are becoming more selective." },
          ] },
          { type: "p", parts: [
            { t: "Instead of reacting to whatever is loudest, many people prefer content that feels helpful, honest, or meaningful. One agency calls this 'social with substance.' This means posts with real value, not just empty performance." },
          ] },
          { type: "p", parts: [
            { t: "Reports also show strong interest in community, learning, and more human, honest brand voices. People still enjoy humor and trends, but they want it mixed with real information or connection." },
          ] },
          { type: "p", parts: [
            { t: "This change affects everyone online. Accounts that only chase fast attention may struggle if people get tired of shallow posts. Creators who explain things clearly and build trust can grow stronger, more loyal audiences. For English learners, this is a good topic to discuss why some posts feel empty while others feel meaningful." },
          ] },
        ],
      },
      polished: {
        label: "Polished Edition",
        range: "B1–B2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "A growing number of 2026 social media reports say the " },
            { g: "attention economy", pos: "phrase", def: "the online system where creators and platforms compete for people's time and attention" },
            { t: " is changing shape. The attention economy is the online system where creators, brands, and platforms compete constantly for clicks, views, and time. But newer reports suggest that users are becoming more selective. Instead of reacting to whatever is loudest, many now prefer content that feels helpful, " },
            { g: "credible", pos: "adjective", def: "able to be trusted or believed" },
            { t: ", or socially meaningful." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Ogilvy Social.Lab describes this shift as a move toward 'social with substance.' That phrase suggests a return to posts with more value and less empty performance. Sprout Social and National University also report strong interest in community, education, search-friendly content, and more human brand voices. In practical terms, people still enjoy humor and trends, but they increasingly want those things mixed with information, personality, or a real sense of connection." },
            { c: 1 },
          ] },
          { type: "quote", text: "Social with substance." },
          { type: "p", parts: [
            { t: "This change affects creators, companies, and everyday users. Accounts that only chase fast " },
            { g: "engagement", pos: "noun", def: "interaction such as likes, comments, and shares on a post" },
            { t: " may struggle if audiences start ignoring repetitive or shallow posts. By contrast, creators who explain ideas clearly, respond thoughtfully, and build trust can grow stronger followings over time." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For ESL teaching, the story has strong classroom value. Students can examine why some posts feel empty while others feel meaningful, compare different kinds of creators, and practice evaluating online information in English." },
          ] },
        ],
      },
      precise: {
        label: "Precise Edition",
        range: "C1–C2",
        readTime: "4 min read",
        wordCount: 375,
        blocks: [
          { type: "p", parts: [
            { t: "A growing corpus of 2026 social media analyses suggests the attention economy — the perpetual online contest among creators, brands, and platforms for clicks, views, and time — is undergoing transformation. Emerging evidence indicates that users are exercising greater discrimination, favouring content that feels useful, credible, or socially consequential over whatever proves merely loudest." },
            { c: 2 },
          ] },
          { type: "p", parts: [
            { t: "Ogilvy Social.Lab characterises this shift as a turn toward 'social with substance,' implying a retreat from empty performative " },
            { g: "veneer", pos: "noun", def: "an attractive appearance that covers something less genuine" },
            { t: " in favour of genuinely valuable content. Sprout Social and National University corroborate this, documenting pronounced interest in community, education, discoverable content, and more authentically human brand voices." },
            { c: 1 },
          ] },
          { type: "quote", text: "Social with substance." },
          { type: "p", parts: [
            { t: "This recalibration bears upon creators, enterprises, and ordinary users alike. Accounts pursuing only transient engagement may falter as audiences grow weary of repetitive, superficial content, whereas creators who elucidate ideas lucidly and cultivate trust stand to accrue more durable followings." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "For ESL instruction, this narrative carries considerable pedagogical value: students might interrogate why certain posts register as vacuous while others feel " },
            { g: "discernibly", pos: "adverb", def: "in a way that can be noticed or recognised" },
            { t: " meaningful, compare divergent creator archetypes, and practise evaluating online information critically in English." },
          ] },
        ],
      },
    },
    references: [
      { domain: "ogilvy.com", headline: "Social Trends 2026: Social With Substance and the Return of Real" },
      { domain: "sproutsocial.com", headline: "7 social media trends you need to know in 2026" },
      { domain: "nu.edu", headline: "Social Media Trends in 2026: What's Next" },
    ],
    discussionGuide: [
      {
        q: "Do you agree that social media is becoming more about 'substance' than noise? Have you noticed this yourself?",
        follow: [],
      },
      {
        q: "What makes a social media post feel 'meaningful' to you, instead of empty?",
        follow: ["Can you give an example of a post or creator you trust?"],
      },
      {
        q: "How do you decide if information you see online is credible or not?",
        follow: [],
      },
    ],
  },
  {
    slug: "slow-travel-surges",
    ready: true,
    publishedAt: "2026-07-30",
    emoji: "🐌",
    variant: "planet",
    topicLabel: "Travel & Places",
    topicTitle: "Places, Travel & Journeys",
    title: "Slow Travel Surges as Visitors Stay Longer",
    dek: "Search trends in 2026 show more travelers choosing one place for longer stays, with food, local experiences, and less rushing leading the plan.",
    editions: {
      plain: {
        label: "Plain Edition",
        range: "A1–A2",
        readTime: "2 min read",
        wordCount: 185,
        blocks: [
          { type: "p", parts: [
            { t: "A big travel trend in 2026 is clear: many people want to slow down. Google's travel report says searches for 'slow travel' reached an all-time high this year. Searches for 'slow travel Italy' grew 100% in just one month." },
          ] },
          { type: "p", parts: [
            { t: "Slow travel means staying in one place longer, instead of visiting many places quickly. For travelers, this often means less stress and more time to enjoy local food, neighborhoods, and daily culture." },
          ] },
          { type: "p", parts: [
            { t: "People are also planning trips around food and local experiences. In Kansas City, people searching what to do also searched for the city's best barbecue. In Mexico City, searches for the best restaurants reached a 10-year high." },
          ] },
          { type: "p", parts: [
            { t: "Another trend is 'digital disconnection.' Some travelers now choose places with weak phone signal on purpose. Being 'unreachable' is part of the fun for them. For English learners, students can plan a slow-travel trip and explain what kind of experience they enjoy most." },
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
            { t: "A major travel trend in 2026 is clear: many people want to slow down. Google's travel trends report says search interest in 'slow travel' hit an all-time high this year, and searches for 'slow travel Italy' rose 100% in the past month. Slow travel means staying in one place longer instead of racing through many destinations in a short time. For travelers, that often means less stress, deeper local experience, and more time to enjoy neighborhoods, food, and daily culture." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "The data suggests that people are planning trips around specific activities and local flavor. Google highlights searches connected to food tours, city specialties, beach towns, and adventure experiences. In Kansas City, for example, people searching what to do also searched for the city's best barbecue. In Mexico City, searches for the best restaurants hit a 10-year high, and 'street food tour' became a trending search. This points to a style of " },
            { g: "immersive", pos: "adjective", def: "providing a deep, complete experience" },
            { t: " travel that values lived experience over " },
            { g: "checklist tourism", pos: "phrase", def: "traveling by quickly visiting many famous sites without a deeper experience" },
            { t: "." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "Another July 2026 travel feature describes a related movement toward digital " },
            { g: "disconnection", pos: "noun", def: "the state of not being connected, especially to technology" },
            { t: " and remote destinations. Some travelers are even building trips around weak phone signal, treating it as a benefit rather than a problem. The article says this trend includes 'dead-zoning,' or choosing places where being unreachable is part of the appeal. Together, these ideas suggest that many travelers are reacting against crowded itineraries and overstimulation." },
            { c: 2 },
          ] },
          { type: "quote", text: "Escaping into silence." },
          { type: "p", parts: [
            { t: "For classroom use, this story is full of practical travel language. Students can design slow-travel plans, compare fast and slow tourism, and explain what kind of local experience they value most." },
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
            { t: "A defining travel trend of 2026 is unmistakable: a marked appetite for decelerated exploration. Google's travel trends report notes that search interest in 'slow travel' has reached an unprecedented peak this year, with queries for 'slow travel Italy' surging 100% within a single month. Slow travel entails prolonged sojourns in a single locale rather than " },
            { g: "peripatetic", pos: "adjective", def: "travelling from place to place" },
            { t: " circuits through numerous destinations, typically yielding diminished stress and richer immersion in local custom." },
            { c: 1 },
          ] },
          { type: "p", parts: [
            { t: "Underlying data suggest travellers increasingly organise itineraries around specific activities and regional flavour — culinary tours, civic specialities, coastal retreats, and adventure pursuits. In Kansas City, searches for local activities coincided with queries for the city's finest barbecue; in Mexico City, restaurant searches reached a decade-long high, with 'street food tour' emerging as a trending query — evidence of experiential travel eclipsing checklist-driven tourism." },
            { c: 3 },
          ] },
          { type: "p", parts: [
            { t: "A further July 2026 feature identifies a parallel movement toward digital disconnection and remote destinations, wherein travellers deliberately seek diminished connectivity, reframing it as asset rather than inconvenience — a practice termed 'dead-zoning.' Collectively, these currents suggest widespread reaction against crowded itineraries and sensory " },
            { g: "saturation", pos: "noun", def: "the state of being completely filled with something" },
            { t: "." },
            { c: 2 },
          ] },
          { type: "quote", text: "Escaping into silence." },
          { type: "p", parts: [
            { t: "For classroom application, this narrative furnishes abundant practical vocabulary: students might devise slow-travel itineraries, contrast rapid and unhurried tourism, and articulate which local experiences they most prize, and perhaps a measure of " },
            { g: "solitude", pos: "noun", def: "the state of being alone, often peacefully" },
            { t: "." },
          ] },
        ],
      },
    },
    references: [
      { domain: "google.com", headline: "2026 travel trends and top destinations for summer" },
      { domain: "latimes.com", headline: "2026 Travel Trends: Why the World's Most Elite Travelers Are Escaping Into Silence" },
      { domain: "odysseys-unlimited.com", headline: "11 Travel Trends to Watch For in 2026" },
    ],
    discussionGuide: [
      {
        q: "Would you rather visit many cities quickly, or stay in one place for a long time? Why?",
        follow: [],
      },
      {
        q: "The article talks about travelers who like having no phone signal on purpose. Would you enjoy this, or would it stress you out?",
        follow: [],
      },
      {
        q: "If you planned a 'slow travel' trip, where would you go, and what would you do there?",
        follow: ["What local food or experience would you want to try?"],
      },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

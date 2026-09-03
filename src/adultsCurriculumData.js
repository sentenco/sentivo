// Adults track: Groundwork (A1) / Structure (A2). Unit topics, grammar
// anchors, and now the 5-teaching-lesson + test breakdown per unit are all
// locked (see memory project_adults_curriculum_plan.md). No lesson content
// (slides/activities) has been written yet -- titles and focuses only.

export const ADULTS_LEVELS = {
  A1: {
    code: "A1",
    name: "Groundwork",
    tag: "Start here",
    accent: "coral",
    description: "Everyday English for real situations: introductions, family, home, work, and the words to get through your day with confidence.",
  },
  A2: {
    code: "A2",
    name: "Structure",
    tag: "Next step",
    accent: "navy",
    description: "More detail and more nuance: plans, opinions, past experiences, and the language to handle everyday adult life with ease.",
  },
};

export const ADULTS_UNITS = {
  A1: [
    {
      num: 1, title: "Greetings and Personal Information", anchor: "to be, subject pronouns", focus: "Introduce yourself and ask someone else's name, country, and job",
      lessons: [
        { num: 1, title: "Hello, I'm...", focus: "Introduce yourself: name and where you're from" },
        { num: 2, title: "What Do You Do?", focus: "Ask and answer about job and basic personal info" },
        { num: 3, title: "Nice to Meet You", focus: "Greetings in different registers, ask someone else's info" },
        { num: 4, title: "Let's Talk About You", focus: "Consolidate: describe yourself in full sentences, Q&A practice" },
        { num: 5, title: "Introduce Yourself", focus: "Production: a real first-day introduction scenario" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 2, title: "Family and People", anchor: "possessive 's, have got", focus: "Talk about your own family and ask about someone else's",
      lessons: [
        { num: 1, title: "This Is My Family", focus: "Name immediate family members, possessive 's" },
        { num: 2, title: "Who's Who?", focus: "Describe family relationships, ask about someone's family" },
        { num: 3, title: "What Do They Look Like?", focus: "Have got for physical description" },
        { num: 4, title: "Tell Me About Your Family", focus: "Consolidate: fuller family description, Q&A" },
        { num: 5, title: "My Family Tree", focus: "Production: describe your family, speaking or writing" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 3, title: "Home and Everyday Objects", anchor: "there is/are, prepositions of place", focus: "Describe where you live and what's in it",
      lessons: [
        { num: 1, title: "In My Home", focus: "Introduce rooms and objects, there is/are" },
        { num: 2, title: "Where Is It?", focus: "Prepositions of place, locate objects" },
        { num: 3, title: "Tell Me About Your Place", focus: "Describe a room in detail" },
        { num: 4, title: "Compare Homes", focus: "Consolidate: ask and answer about someone else's home" },
        { num: 5, title: "Describe Your Home", focus: "Production: full home description task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 4, title: "Daily Routine and Time", anchor: "present simple, adverbs of frequency", focus: "Describe your typical day and ask about someone else's",
      lessons: [
        { num: 1, title: "My Day", focus: "Basic routine, present simple" },
        { num: 2, title: "How Often?", focus: "Adverbs of frequency" },
        { num: 3, title: "What Time?", focus: "Telling time and routine questions" },
        { num: 4, title: "Compare Routines", focus: "Consolidate: ask about someone else's day" },
        { num: 5, title: "A Day in My Life", focus: "Production: describe a full day, speaking or writing" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 5, title: "Work and Jobs", anchor: "present simple WH-questions", focus: "Describe your own job and workplace, ask what someone does",
      lessons: [
        { num: 1, title: "What's Your Job?", focus: "Basic job vocabulary, simple statements" },
        { num: 2, title: "Tell Me About Your Work", focus: "WH-questions about job and workplace" },
        { num: 3, title: "A Day at Work", focus: "Describe daily work tasks" },
        { num: 4, title: "Ask About Someone's Job", focus: "Consolidate: interview-style Q&A" },
        { num: 5, title: "Describe Your Job", focus: "Production: real workplace description task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 6, title: "Shopping and Money", anchor: "countable/uncountable, how much/many", focus: "Ask prices, make simple purchases, count money",
      lessons: [
        { num: 1, title: "At the Store", focus: "Shopping vocabulary, countable/uncountable nouns" },
        { num: 2, title: "How Much Is It?", focus: "Asking prices" },
        { num: 3, title: "How Many Do You Need?", focus: "Quantities, count/uncount practice" },
        { num: 4, title: "Let's Go Shopping", focus: "Consolidate: a full shopping dialogue" },
        { num: 5, title: "Make a Purchase", focus: "Production: real-life shopping roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 7, title: "Food and Drinks", anchor: "like / would like, some/any", focus: "Order food and drinks, say what you like and don't like",
      lessons: [
        { num: 1, title: "What Do You Like?", focus: "Food vocabulary, like and don't like" },
        { num: 2, title: "I'd Like...", focus: "Ordering with would like" },
        { num: 3, title: "Some or Any?", focus: "Some/any practice with food" },
        { num: 4, title: "At the Restaurant", focus: "Consolidate: a full ordering dialogue" },
        { num: 5, title: "Order a Meal", focus: "Production: real ordering roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 8, title: "Technology and Communication", anchor: "can, imperatives", focus: "Send a simple message, make a call, ask someone to do something",
      lessons: [
        { num: 1, title: "Can You...?", focus: "Basic tech abilities, can" },
        { num: 2, title: "Send a Message", focus: "Texting and messaging language" },
        { num: 3, title: "Make a Call", focus: "Phone call basics" },
        { num: 4, title: "Ask Someone to Help", focus: "Imperatives and requests" },
        { num: 5, title: "A Real Message", focus: "Production: write and send a real message" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 9, title: "Travel and Transport", anchor: "prepositions of movement, can/can't", focus: "Buy a ticket, ask how to get somewhere",
      lessons: [
        { num: 1, title: "Getting Around", focus: "Transport vocabulary" },
        { num: 2, title: "Buy a Ticket", focus: "Ticket-buying language" },
        { num: 3, title: "How Do I Get There?", focus: "Asking directions with movement prepositions" },
        { num: 4, title: "Can You Help Me?", focus: "Can/can't for permission and ability while traveling" },
        { num: 5, title: "Plan a Trip", focus: "Production: real travel scenario" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 10, title: "Health and Feelings", anchor: "feel + adjective, because", focus: "Describe how you feel and give a simple reason",
      lessons: [
        { num: 1, title: "How Do You Feel?", focus: "Feelings vocabulary, feel + adjective" },
        { num: 2, title: "Why Do You Feel That Way?", focus: "Giving reasons with because" },
        { num: 3, title: "At the Doctor's", focus: "Basic health vocabulary" },
        { num: 4, title: "Describe a Problem", focus: "Consolidate: describe symptoms or feelings with a reason" },
        { num: 5, title: "Talk About How You Feel", focus: "Production: a real conversation task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 11, title: "Places in Town and Directions", anchor: "imperatives, ordinal directions", focus: "Ask for and give simple directions around town",
      lessons: [
        { num: 1, title: "Around Town", focus: "Places vocabulary" },
        { num: 2, title: "Turn Left, Turn Right", focus: "Direction imperatives" },
        { num: 3, title: "Excuse Me, Where Is...?", focus: "Asking for directions" },
        { num: 4, title: "Give Directions", focus: "Consolidate: full direction-giving practice" },
        { num: 5, title: "Find Your Way", focus: "Production: real direction roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 12, title: "Appointments and Future Plans", anchor: "going to", focus: "Book an appointment and talk about your plans this week",
      lessons: [
        { num: 1, title: "I'm Going To...", focus: "Going to for plans" },
        { num: 2, title: "Book an Appointment", focus: "Appointment language" },
        { num: 3, title: "What Are Your Plans?", focus: "Asking about future plans" },
        { num: 4, title: "This Week", focus: "Consolidate: talk about a full week's plans" },
        { num: 5, title: "Make a Plan", focus: "Production: a real appointment or plan task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
  ],
  A2: [
    {
      num: 1, title: "Daily Communication and Personal Updates", anchor: "present simple vs continuous", focus: "Manage everyday conversation, give short personal updates",
      lessons: [
        { num: 1, title: "What's New?", focus: "Present continuous for current activities" },
        { num: 2, title: "Usually vs Right Now", focus: "Contrast present simple and continuous" },
        { num: 3, title: "Catching Up", focus: "A short catch-up conversation" },
        { num: 4, title: "Give an Update", focus: "Consolidate: personal update practice" },
        { num: 5, title: "Share Your Update", focus: "Production: a real conversation or message task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 2, title: "Work and Study Life", anchor: "comparatives", focus: "Describe your work or study routine in more detail than Groundwork",
      lessons: [
        { num: 1, title: "My Routine vs Before", focus: "Comparatives, intro" },
        { num: 2, title: "Which Job Is Better?", focus: "Comparing jobs and roles" },
        { num: 3, title: "Busier Than Ever", focus: "Describing workload with comparatives" },
        { num: 4, title: "Compare and Discuss", focus: "Consolidate: fuller comparison practice" },
        { num: 5, title: "Describe Your Work Life", focus: "Production: a detailed work or study description" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 3, title: "Shopping and Services", anchor: "could/would, requests", focus: "Handle shops and services, not just simple purchases",
      lessons: [
        { num: 1, title: "Could You Help Me?", focus: "Polite requests" },
        { num: 2, title: "At the Repair Shop", focus: "Services vocabulary" },
        { num: 3, title: "Would You...?", focus: "Polite offers and requests practice" },
        { num: 4, title: "Handle a Problem", focus: "Consolidate: a service complaint or request dialogue" },
        { num: 5, title: "Solve It", focus: "Production: a real service scenario roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 4, title: "Food, Dining, and Social Plans", anchor: "shall we / let's, invitations", focus: "Make plans with someone, not just order at a counter",
      lessons: [
        { num: 1, title: "Let's Eat Out", focus: "Suggestion language" },
        { num: 2, title: "Shall We...?", focus: "Making suggestions" },
        { num: 3, title: "Invite a Friend", focus: "Invitation language" },
        { num: 4, title: "Make a Plan Together", focus: "Consolidate: negotiate plans" },
        { num: 5, title: "Plan a Night Out", focus: "Production: a real planning conversation" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 5, title: "Home and Housing", anchor: "there was/were, past description", focus: "Describe a home or a housing ad, past or present",
      lessons: [
        { num: 1, title: "My Old Place", focus: "There was/were, past description" },
        { num: 2, title: "Then and Now", focus: "Compare a past and present home" },
        { num: 3, title: "Reading a Housing Ad", focus: "A real housing ad text" },
        { num: 4, title: "Describe a Home", focus: "Consolidate: full description practice" },
        { num: 5, title: "Write a Housing Ad", focus: "Production: a real writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 6, title: "Health and Appointments", anchor: "past simple, should/shouldn't", focus: "Describe a past health problem, book an appointment by phone",
      lessons: [
        { num: 1, title: "What Happened?", focus: "Past simple for health issues" },
        { num: 2, title: "You Should...", focus: "Advice language" },
        { num: 3, title: "Book by Phone", focus: "Phone appointment language" },
        { num: 4, title: "Describe What Happened", focus: "Consolidate: a fuller past narrative" },
        { num: 5, title: "Make the Call", focus: "Production: a real phone appointment roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 7, title: "Travel and Transport", anchor: "comparatives, past narrative", focus: "Compare transport options, tell a simple travel story",
      lessons: [
        { num: 1, title: "Which Way Is Better?", focus: "Comparing transport options" },
        { num: 2, title: "My Last Trip", focus: "Past narrative, intro" },
        { num: 3, title: "Tell the Story", focus: "Building a travel story" },
        { num: 4, title: "Compare and Recall", focus: "Consolidate: comparison plus past narrative" },
        { num: 5, title: "Tell a Travel Story", focus: "Production: a real storytelling task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 8, title: "Technology and Online Communication", anchor: "will, email language", focus: "Write a short email, request something online",
      lessons: [
        { num: 1, title: "I Will...", focus: "Will for offers and predictions" },
        { num: 2, title: "Write an Email", focus: "Email language basics" },
        { num: 3, title: "Request Something Online", focus: "Online request language" },
        { num: 4, title: "Draft a Message", focus: "Consolidate: fuller email practice" },
        { num: 5, title: "Send a Real Email", focus: "Production: a real writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 9, title: "Leisure, Community, and Free Time", anchor: "like + -ing, simple opinions", focus: "Talk about hobbies and give a simple opinion",
      lessons: [
        { num: 1, title: "I Like Doing...", focus: "Like + -ing" },
        { num: 2, title: "What Do You Think?", focus: "Simple opinions" },
        { num: 3, title: "My Free Time", focus: "Hobbies vocabulary, expanded" },
        { num: 4, title: "Share an Opinion", focus: "Consolidate: opinion and reason practice" },
        { num: 5, title: "Talk About Your Hobbies", focus: "Production: a real conversation task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 10, title: "People, Culture, and Experiences", anchor: "past simple narrative", focus: "Describe people, relationships, and a past experience",
      lessons: [
        { num: 1, title: "Someone I Know", focus: "Describing people" },
        { num: 2, title: "A Memorable Experience", focus: "Past simple narrative, intro" },
        { num: 3, title: "Tell Me About Them", focus: "Relationship and culture description" },
        { num: 4, title: "Build the Story", focus: "Consolidate: a fuller narrative" },
        { num: 5, title: "Share an Experience", focus: "Production: a real storytelling task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 11, title: "Future Plans and Problem Solving", anchor: "going to vs will, first conditional", focus: "Talk about near-future plans, solve a simple problem out loud",
      lessons: [
        { num: 1, title: "Going To or Will?", focus: "Contrast future forms" },
        { num: 2, title: "If This Happens...", focus: "First conditional, intro" },
        { num: 3, title: "Solve a Problem", focus: "Problem-solving language" },
        { num: 4, title: "Talk It Through", focus: "Consolidate: fuller problem-solving practice" },
        { num: 5, title: "Handle a Real Problem", focus: "Production: a real scenario task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 12, title: "Goals, Progress, and Final Communication", anchor: "tense review", focus: "Reflect on what you've learned and set a real next goal",
      lessons: [
        { num: 1, title: "Look Back", focus: "Review key tenses through reflection" },
        { num: 2, title: "What I Can Do Now", focus: "Cumulative review across the level" },
        { num: 3, title: "Set a Goal", focus: "Goal-setting language" },
        { num: 4, title: "Put It All Together", focus: "Consolidate: mixed-tense practice" },
        { num: 5, title: "My Next Step", focus: "Production: a final reflection and goal task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
  ],
};

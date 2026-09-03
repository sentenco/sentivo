// Teens track: Ignite (A1) / Momentum (A2). Unit topics, grammar anchors,
// and now the 5-teaching-lesson + test breakdown per unit are all locked
// (see memory project_teens_curriculum_plan.md). No lesson content
// (slides/activities) has been written yet -- titles and focuses only.

export const TEENS_LEVELS = {
  A1: {
    code: "A1",
    name: "Ignite",
    tag: "Start here",
    accent: "coral",
    description: "School, friends, hobbies, and the words to talk about your own world, from your room to your weekend plans.",
  },
  A2: {
    code: "A2",
    name: "Momentum",
    tag: "Next step",
    accent: "navy",
    description: "More detail on the things that matter to you: style, friendships, travel, and the confidence to say what you really think.",
  },
};

export const TEENS_UNITS = {
  A1: [
    {
      num: 1, title: "Greetings and Introductions", anchor: "to be, subject pronouns", focus: "Introduce yourself and ask a new classmate's name and where they're from",
      lessons: [
        { num: 1, title: "Say Hello", focus: "Basic greetings, introduce yourself by name" },
        { num: 2, title: "Where Are You From?", focus: "Countries and nationalities, subject pronouns" },
        { num: 3, title: "Meet My Classmate", focus: "Ask a partner questions, practice dialogue" },
        { num: 4, title: "Let's Check", focus: "Review and consolidate" },
        { num: 5, title: "Introduce Someone", focus: "Production: introduce a partner, or write a short bio" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 2, title: "Family and People I Know", anchor: "possessive 's, have got", focus: "Talk about your family and people you know",
      lessons: [
        { num: 1, title: "My Family", focus: "Name family members, possessive 's" },
        { num: 2, title: "Who Do You Know?", focus: "Talk about friends and people you know" },
        { num: 3, title: "What Do They Look Like?", focus: "Have got for description" },
        { num: 4, title: "Tell Me About Them", focus: "Consolidate: fuller description practice" },
        { num: 5, title: "Describe Your Family", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 3, title: "School Life", anchor: "present simple", focus: "Talk about your school subjects and schedule",
      lessons: [
        { num: 1, title: "My Subjects", focus: "School subject vocabulary" },
        { num: 2, title: "My Schedule", focus: "Present simple for routine class times" },
        { num: 3, title: "What's Your Favorite Subject?", focus: "Opinions and present simple" },
        { num: 4, title: "Talk About School", focus: "Consolidate: fuller school conversation" },
        { num: 5, title: "Describe Your School Day", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 4, title: "Friends and Free Time", anchor: "present simple, like + noun", focus: "Talk about your friends and what you do together",
      lessons: [
        { num: 1, title: "My Friends", focus: "Introduce friends, present simple" },
        { num: 2, title: "What Do You Like?", focus: "Like + noun" },
        { num: 3, title: "What We Do Together", focus: "Activities with friends" },
        { num: 4, title: "Talk About Your Friends", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "My Best Friend", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 5, title: "Hobbies and Interests", anchor: "like/enjoy + -ing, frequency", focus: "Talk about your own hobbies and ask a friend about theirs",
      lessons: [
        { num: 1, title: "My Hobbies", focus: "Like/enjoy + -ing" },
        { num: 2, title: "How Often?", focus: "Frequency adverbs" },
        { num: 3, title: "Ask a Friend", focus: "Practice asking about hobbies" },
        { num: 4, title: "Compare Hobbies", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Talk About Your Hobbies", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 6, title: "My Daily Routine", anchor: "present simple, time expressions", focus: "Describe your daily and school routine",
      lessons: [
        { num: 1, title: "My Day", focus: "Basic routine" },
        { num: 2, title: "What Time?", focus: "Time expressions" },
        { num: 3, title: "School Day vs Weekend", focus: "Compare routines" },
        { num: 4, title: "Describe a Full Day", focus: "Consolidate: fuller routine description" },
        { num: 5, title: "A Day in My Life", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 7, title: "My Room", anchor: "there is/are, prepositions of place", focus: "Describe your room and what's in it",
      lessons: [
        { num: 1, title: "In My Room", focus: "There is/are" },
        { num: 2, title: "Where Is It?", focus: "Prepositions of place" },
        { num: 3, title: "Describe Your Room", focus: "Fuller description practice" },
        { num: 4, title: "Compare Rooms", focus: "Consolidate: ask about a friend's room" },
        { num: 5, title: "My Dream Room", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 8, title: "Food and Drinks", anchor: "like / would like, some/any", focus: "Talk about food you like, order snacks or a meal with friends",
      lessons: [
        { num: 1, title: "Food I Like", focus: "Food vocabulary, like" },
        { num: 2, title: "I'd Like...", focus: "Ordering with would like" },
        { num: 3, title: "Some or Any?", focus: "Some/any with food" },
        { num: 4, title: "Order with Friends", focus: "Consolidate: an ordering dialogue" },
        { num: 5, title: "Plan a Snack Order", focus: "Production: a real ordering roleplay" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 9, title: "Clothes and Style", anchor: "present continuous", focus: "Describe what you're wearing today and your own style",
      lessons: [
        { num: 1, title: "What Are You Wearing?", focus: "Present continuous, clothes vocabulary" },
        { num: 2, title: "My Style", focus: "Describing personal style" },
        { num: 3, title: "Today's Outfit", focus: "Practice describing outfits" },
        { num: 4, title: "Talk About Style", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Describe Your Style", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 10, title: "Weather and Seasons", anchor: "it's + adjective", focus: "Talk about the weather and your favorite season",
      lessons: [
        { num: 1, title: "What's the Weather?", focus: "It's + adjective" },
        { num: 2, title: "My Favorite Season", focus: "Seasons vocabulary" },
        { num: 3, title: "Weather and Activities", focus: "Connect weather to what you do" },
        { num: 4, title: "Talk About the Weather", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Describe Your Favorite Season", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 11, title: "Social Media and Tech", anchor: "can", focus: "Talk about which apps and tech you use",
      lessons: [
        { num: 1, title: "Apps I Use", focus: "Tech vocabulary, can" },
        { num: 2, title: "What Can You Do With It?", focus: "Can for tech abilities" },
        { num: 3, title: "My Favorite App", focus: "Describe an app you use" },
        { num: 4, title: "Talk About Tech", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Describe Your Tech Habits", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 12, title: "Weekend Plans", anchor: "going to", focus: "Talk about your plans for the weekend",
      lessons: [
        { num: 1, title: "This Weekend", focus: "Going to for plans" },
        { num: 2, title: "What Are You Going to Do?", focus: "Asking about plans" },
        { num: 3, title: "Make a Plan", focus: "Plan with a friend" },
        { num: 4, title: "Talk About Your Weekend", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Share Your Weekend Plans", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
  ],
  A2: [
    {
      num: 1, title: "Identity and Personal Style", anchor: "comparatives", focus: "Compare your style to a friend's",
      lessons: [
        { num: 1, title: "My Style", focus: "Describe your own style" },
        { num: 2, title: "Compare Styles", focus: "Comparatives, intro" },
        { num: 3, title: "Who's More...?", focus: "Practice comparatives with friends" },
        { num: 4, title: "Talk About Style", focus: "Consolidate: fuller comparison conversation" },
        { num: 5, title: "Compare Your Style", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 2, title: "Friends and Social Life", anchor: "present continuous", focus: "Talk about what you and your friends are doing these days",
      lessons: [
        { num: 1, title: "What's Happening?", focus: "Present continuous for current activities" },
        { num: 2, title: "My Friends These Days", focus: "Describe current friend activities" },
        { num: 3, title: "Catching Up", focus: "A catch-up conversation" },
        { num: 4, title: "Talk About Your Social Life", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Share What's Going On", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 3, title: "School and Study Skills", anchor: "have to / must", focus: "Talk about your school rules and subjects",
      lessons: [
        { num: 1, title: "School Rules", focus: "Have to / must" },
        { num: 2, title: "What Do You Have to Do?", focus: "Obligation practice" },
        { num: 3, title: "Study Habits", focus: "Talk about study routines" },
        { num: 4, title: "Talk About School Rules", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Describe Your School Rules", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 4, title: "Free Time and Hobbies", anchor: "prefer to / would rather", focus: "Say what you'd rather do in your free time",
      lessons: [
        { num: 1, title: "I'd Rather...", focus: "Prefer to / would rather" },
        { num: 2, title: "What Do You Prefer?", focus: "Practice preferences" },
        { num: 3, title: "Free Time Choices", focus: "Talk about options" },
        { num: 4, title: "Compare Preferences", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Talk About What You'd Rather Do", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 5, title: "Media and Technology", anchor: "how often", focus: "Talk about your tech use and daily habits",
      lessons: [
        { num: 1, title: "How Often Do You...?", focus: "Frequency questions about tech" },
        { num: 2, title: "My Tech Habits", focus: "Describe daily tech use" },
        { num: 3, title: "Screen Time", focus: "Talk about balance and habits" },
        { num: 4, title: "Compare Tech Habits", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Describe Your Tech Use", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 6, title: "Food and Going Out", anchor: "let's / shall we", focus: "Suggest a place to eat and make plans with friends",
      lessons: [
        { num: 1, title: "Let's Go Out", focus: "Suggestion language" },
        { num: 2, title: "Shall We...?", focus: "Practice suggestions" },
        { num: 3, title: "Choose a Place", focus: "Negotiate where to eat" },
        { num: 4, title: "Make a Plan Together", focus: "Consolidate: fuller negotiation" },
        { num: 5, title: "Plan a Night Out", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 7, title: "Town Life and Getting Around", anchor: "prepositions of place", focus: "Talk about where things are in town and how to get around",
      lessons: [
        { num: 1, title: "Around Town", focus: "Places vocabulary" },
        { num: 2, title: "Where Is It?", focus: "Prepositions of place" },
        { num: 3, title: "Getting Around", focus: "Talk about how to get places" },
        { num: 4, title: "Give Directions", focus: "Consolidate: fuller direction practice" },
        { num: 5, title: "Describe Your Town", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 8, title: "Travel and Holidays", anchor: "past simple", focus: "Tell a simple story about a past trip or holiday",
      lessons: [
        { num: 1, title: "My Last Trip", focus: "Past simple, intro" },
        { num: 2, title: "What Happened?", focus: "Past simple practice" },
        { num: 3, title: "A Holiday Story", focus: "Build a simple narrative" },
        { num: 4, title: "Tell the Story", focus: "Consolidate: fuller narrative" },
        { num: 5, title: "Tell a Travel Story", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 9, title: "Health and Fitness", anchor: "should/shouldn't", focus: "Talk about healthy and unhealthy habits",
      lessons: [
        { num: 1, title: "Healthy Habits", focus: "Should/shouldn't" },
        { num: 2, title: "What Should You Do?", focus: "Advice practice" },
        { num: 3, title: "My Fitness Routine", focus: "Talk about habits" },
        { num: 4, title: "Give Advice", focus: "Consolidate: fuller advice conversation" },
        { num: 5, title: "Talk About Healthy Habits", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 10, title: "Entertainment and Events", anchor: "superlatives", focus: "Say which movie, show, or song is your all-time favorite",
      lessons: [
        { num: 1, title: "The Best...", focus: "Superlatives, intro" },
        { num: 2, title: "My Favorite", focus: "Practice superlatives" },
        { num: 3, title: "Talk About Entertainment", focus: "Movies, shows, and music" },
        { num: 4, title: "Compare and Choose", focus: "Consolidate: fuller comparison" },
        { num: 5, title: "Share Your All-Time Favorite", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 11, title: "Future Plans and Goals", anchor: "will", focus: "Talk about your plans and predictions for next week",
      lessons: [
        { num: 1, title: "I Will...", focus: "Will for plans and predictions" },
        { num: 2, title: "What Will You Do?", focus: "Practice will" },
        { num: 3, title: "Next Week", focus: "Talk about upcoming plans" },
        { num: 4, title: "Talk About the Future", focus: "Consolidate: fuller conversation" },
        { num: 5, title: "Share Your Plans", focus: "Production: speaking or writing task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
    {
      num: 12, title: "Projects, Events, and Final Showcase", anchor: "tense review", focus: "Talk about a project's roles, tasks, and ideas",
      lessons: [
        { num: 1, title: "Look Back", focus: "Review key tenses through reflection" },
        { num: 2, title: "Plan the Project", focus: "Roles and tasks language" },
        { num: 3, title: "Share Ideas", focus: "Discuss project ideas" },
        { num: 4, title: "Put It All Together", focus: "Consolidate: mixed-tense practice" },
        { num: 5, title: "Present Your Project", focus: "Production: a final showcase task" },
        { num: 6, title: "Unit Test", focus: "Summative test", isTest: true },
      ],
    },
  ],
};

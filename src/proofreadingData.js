// Writing category, Proofreading activity: 2 activities per audience/level combo.
// Shape: { title, focus, warmup, mistakes, corrected, followup }
const PROOFREADING_SETS = {
  "teens-beginner": [
    {
      title: "My Weekend",
      focus: "Capitals, punctuation, spelling, basic verbs",
      warmup: "What do you do on weekends?",
      mistakes: "on saturday i go to the park with my cousen we play football and eat ice cream it is very fun",
      corrected: "On Saturday, I go to the park with my cousin. We play football and eat ice cream. It is very fun.",
      followup: "Tell me about your weekend.",
    },
    {
      title: "My Room",
      focus: "there is / there are, punctuation, spelling",
      warmup: "What is in your room?",
      mistakes: "there is a bed and two poster in my room my desk are next to the window i like study there",
      corrected: "There is a bed and two posters in my room. My desk is next to the window. I like to study there.",
      followup: "Say 2 true sentences about your room.",
    },
  ],
  "teens-intermediate": [
    {
      title: "Study Stress",
      focus: "Grammar, punctuation, connectors, spelling",
      warmup: "What makes students stressed?",
      mistakes: "last week i had many test and projects so i was very stress. I wanted to study more but I also needed rest because I couldnt focus well",
      corrected: "Last week, I had many tests and projects, so I was very stressed. I wanted to study more, but I also needed rest because I couldn't focus well.",
      followup: "How do you manage stress?",
    },
    {
      title: "Friendship Issue",
      focus: "Tense consistency, word choice, linking",
      warmup: "What problems can friends have?",
      mistakes: "my friend was angry with me because i dont reply fast enough. I explained that I was busy, however she still think I ignored her",
      corrected: "My friend was angry with me because I didn't reply fast enough. I explained that I was busy; however, she still thought I ignored her.",
      followup: "What should friends do in this situation?",
    },
  ],
  "adults-beginner": [
    {
      title: "Work Message",
      focus: "Capitals, punctuation, basic grammar",
      warmup: "Have you ever been late for work?",
      mistakes: "hello maria i am late for work today because the bus is slow i arrive at 9 30 sorry",
      corrected: "Hello Maria, I am late for work today because the bus is slow. I will arrive at 9:30. Sorry.",
      followup: "Say a similar message in your own words.",
    },
    {
      title: "Shopping Note",
      focus: "Articles, spelling, simple sentence form",
      warmup: "What do you usually buy at the store?",
      mistakes: "i need buy a bread an apple and milk. please go to store before you comes home",
      corrected: "I need to buy bread, an apple, and milk. Please go to the store before you come home.",
      followup: "Make your own shopping sentence.",
    },
  ],
  "adults-intermediate": [
    {
      title: "Work Email",
      focus: "Grammar, tone, punctuation, clarity",
      warmup: "How do you cancel a meeting politely?",
      mistakes: "hi james im writing to tell you that I cant join the meeting tomorrow because I have a client visit. maybe we can move it on friday if that is okay for you",
      corrected: "Hi James,\nI'm writing to tell you that I can't join the meeting tomorrow because I have a client visit. Maybe we can move it to Friday, if that is okay with you.",
      followup: "How would you explain this in a call?",
    },
    {
      title: "Health Update",
      focus: "Tense, articles, clarity, word choice",
      warmup: "What healthy habits are hard to keep?",
      mistakes: "recently I start going to gym more often and I already lose some weight. this change help me feel more active and less stress in my daily life",
      corrected: "Recently, I started going to the gym more often, and I have already lost some weight. This change has helped me feel more active and less stressed in my daily life.",
      followup: "Talk about one healthy change in your life.",
    },
  ],
};

export default PROOFREADING_SETS;

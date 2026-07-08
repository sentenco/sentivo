-- A2 Teens Unit 5: Media and Technology (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Screen Time
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '884ef303-1400-4619-92a6-be7f7eab639c',
  'My Screen Time',
  'A2',
  'teens',
  5,
  1,
  'Describe screen time habits using frequency and time expressions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "How much screen time do you have a day?",
    "Do you check notifications a lot?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Scroll",
      "bg": "#FAECE7"
    },
    {
      "word": "Notifications",
      "bg": "#E1F5EE"
    },
    {
      "word": "Screen time",
      "bg": "#EEEDFE"
    },
    {
      "word": "App",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much screen time do you have?",
    "What app do you use most?"
  ],
  "student": [
    "I have about three hours a day.",
    "I use a messaging app most."
  ],
  "note": "Think about your real screen time habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [scroll] through videos every evening."
    },
    {
      "speaker": "B",
      "text": "My [screen time] is about three hours."
    },
    {
      "speaker": "A",
      "text": "I check [notifications] too often."
    }
  ],
  "blanks": [
    "scroll",
    "screen time",
    "notifications"
  ]
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much screen time do you have a day?"
    },
    {
      "speaker": "B",
      "text": "Probably three or four hours. I scroll a lot in the evening."
    },
    {
      "speaker": "A",
      "text": "I check notifications too much, even during class."
    },
    {
      "speaker": "B",
      "text": "Same here, it's hard to stop!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A survey asked teens about screen time. Most said they spend three to five hours a day on their phones. Many scroll through videos before bed. Almost everyone checks notifications too often, even during homework.",
  "questions": [
    "How many hours do most teens spend on their phones?",
    "What do many teens do before bed?",
    "When do teens check notifications, even?"
  ]
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My screen time is about ___ hours.",
    "I usually use my phone to ___.",
    "I check notifications ___."
  ]
}$json$::jsonb,
  true
),
(
  '884ef303-1400-4619-92a6-be7f7eab639c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe screen time habits",
    "Use frequency words",
    "Talk about phone use"
  ],
  "challenge": "Tell me about your real screen time habits!"
}$json$::jsonb,
  true
);

-- Lesson 2: Good or Bad Habit?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  'Good or Bad Habit?',
  'A2',
  'teens',
  5,
  2,
  'Give opinions about tech habits using because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Is social media a good or bad habit for you?",
    "Do you think phones are distracting?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Distracting",
      "bg": "#FAECE7"
    },
    {
      "word": "Helpful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Addictive",
      "bg": "#EEEDFE"
    },
    {
      "word": "Balance",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is social media good or bad for you?",
    "Is it distracting?"
  ],
  "student": [
    "I think it's both good and bad.",
    "Yes, it can be distracting during homework."
  ],
  "note": "Think about the good and bad sides of technology!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Phones can be [distracting] during class."
    },
    {
      "speaker": "B",
      "text": "But apps can also be [helpful] for studying."
    },
    {
      "speaker": "A",
      "text": "Social media can be [addictive]."
    }
  ],
  "blanks": [
    "distracting",
    "helpful",
    "addictive"
  ]
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you think social media is a good or bad habit?"
    },
    {
      "speaker": "B",
      "text": "I think it's both. It's helpful for talking to friends, but it can be addictive."
    },
    {
      "speaker": "A",
      "text": "I try to find a balance between screen time and other things."
    },
    {
      "speaker": "B",
      "text": "That's a healthy way to think about it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Technology has good and bad sides. It's helpful for learning and staying in touch with friends. But it can also be distracting and even addictive. Many teens are learning to find a balance between screens and real life.",
  "questions": [
    "What is one good side of technology?",
    "What is one bad side?",
    "What are teens learning to find?"
  ]
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Technology is helpful because ___.",
    "It can be distracting when ___.",
    "I try to find balance by ___."
  ]
}$json$::jsonb,
  true
),
(
  'bd319c30-8b97-4f4b-b2b2-c4d81e7c9471',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give opinions about tech habits",
    "Use 'distracting', 'helpful', 'addictive'",
    "Talk about balance"
  ],
  "challenge": "Tell me your honest opinion about social media!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Tech Problem
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c84a99a8-b014-4154-a228-5f03613afacd',
  'A Tech Problem',
  'A2',
  'teens',
  5,
  3,
  'Describe a past tech problem using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💻",
  "questions": [
    "Have you ever had a tech problem?",
    "Did you lose important files?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Crashed",
      "bg": "#FAECE7"
    },
    {
      "word": "Lost",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fixed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Backed up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What tech problem did you have?",
    "How did you fix it?"
  ],
  "student": [
    "My phone crashed last week.",
    "I fixed it by restarting it."
  ],
  "note": "Think about a tech problem you had!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My laptop [crashed] during my homework."
    },
    {
      "speaker": "B",
      "text": "I [lost] some of my photos."
    },
    {
      "speaker": "A",
      "text": "I finally [fixed] it with my dad's help."
    }
  ],
  "blanks": [
    "crashed",
    "lost",
    "fixed"
  ]
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What tech problem did you have recently?"
    },
    {
      "speaker": "B",
      "text": "My phone crashed and I lost some photos. It was awful."
    },
    {
      "speaker": "A",
      "text": "I fixed my laptop by restarting it. Now I always back up my files."
    },
    {
      "speaker": "B",
      "text": "That's a good habit to learn!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last week, my laptop crashed right before I finished my project. I lost two hours of work! I was upset, but I fixed it by restarting and reopening the file. Now I always back up my work just in case.",
  "questions": [
    "What happened to the laptop?",
    "What did the writer lose?",
    "What does the writer do now?"
  ]
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ crashed/broke.",
    "I lost ___.",
    "I fixed it by ___."
  ]
}$json$::jsonb,
  true
),
(
  'c84a99a8-b014-4154-a228-5f03613afacd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: crashed, lost, fixed, backed up",
    "Tell a tech problem story",
    "Say what I learned"
  ],
  "challenge": "Tell me about a tech problem you had and how you solved it!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  'A Short Review',
  'A2',
  'teens',
  5,
  4,
  'Write a short review of an app, game, or show.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "Would you recommend your favorite app?",
    "What show do you recommend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Recommend",
      "bg": "#FAECE7"
    },
    {
      "word": "Rating",
      "bg": "#E1F5EE"
    },
    {
      "word": "Worth it",
      "bg": "#EEEDFE"
    },
    {
      "word": "Overrated",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you recommend this app?",
    "What rating would you give it?"
  ],
  "student": [
    "Yes, I would recommend it.",
    "I would give it a five out of five."
  ],
  "note": "Think of an app, game, or show you'd review!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [recommend] this app to everyone."
    },
    {
      "speaker": "B",
      "text": "My [rating] is four out of five stars."
    },
    {
      "speaker": "A",
      "text": "It's totally [worth it]."
    }
  ],
  "blanks": [
    "recommend",
    "rating",
    "worth it"
  ]
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you recommend your favorite app?"
    },
    {
      "speaker": "B",
      "text": "Yes! I'd give it a rating of five out of five. It's totally worth it."
    },
    {
      "speaker": "A",
      "text": "I think that new game is a bit overrated, honestly."
    },
    {
      "speaker": "B",
      "text": "Interesting, I'll try it myself and see."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My review: this app is amazing for learning new languages. Rating: five out of five stars. I recommend it because it's fun and easy to use. It's totally worth it. Some people say similar apps are overrated, but I disagree.",
  "questions": [
    "What is the review about?",
    "What rating did the writer give?",
    "Why does the writer recommend it?"
  ]
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My review of ___: ___.",
    "Rating: ___ out of five.",
    "I recommend it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'c7f33bb6-8255-475f-bcd7-c59d622d89e7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short review",
    "Give a rating",
    "Recommend something with a reason"
  ],
  "challenge": "Write and read me a review of your favorite app or show!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  'Unit Review',
  'A2',
  'teens',
  5,
  5,
  'Review screen time, tech opinions, a tech problem, and a review.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖥️",
  "questions": [
    "How is your screen time?",
    "What tech problem have you had?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Screen time",
      "bg": "#FAECE7"
    },
    {
      "word": "Distracting",
      "bg": "#E1F5EE"
    },
    {
      "word": "Crashed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Recommend",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much screen time do you have?",
    "What would you recommend?"
  ],
  "student": [
    "I have about three hours a day.",
    "I recommend this app because it's helpful."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [screen time] is about four hours."
    },
    {
      "speaker": "B",
      "text": "Phones can be [distracting] sometimes."
    },
    {
      "speaker": "A",
      "text": "My phone [crashed] last week."
    }
  ],
  "blanks": [
    "screen time",
    "distracting",
    "crashed"
  ]
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Let's talk about technology. How is your screen time?"
    },
    {
      "speaker": "B",
      "text": "About three hours a day. It can be distracting, but also helpful."
    },
    {
      "speaker": "A",
      "text": "My phone crashed last month and I lost some photos!"
    },
    {
      "speaker": "B",
      "text": "I recommend backing up your files regularly."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My screen time is about four hours a day. It can be distracting, but it's also helpful for school and staying in touch with friends. Last month, my phone crashed and I lost some files. Now I back everything up. I recommend doing the same!",
  "questions": [
    "What is the writer's screen time?",
    "What happened last month?",
    "What does the writer recommend?"
  ]
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My screen time is ___.",
    "Technology is good/bad because ___.",
    "I recommend ___."
  ]
}$json$::jsonb,
  true
),
(
  '212d8108-057b-4f1d-8e52-7092fa91eeca',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about screen time",
    "Give tech opinions",
    "Tell a tech problem story",
    "Write a review"
  ],
  "challenge": "Tell me all about your relationship with technology!"
}$json$::jsonb,
  true
);

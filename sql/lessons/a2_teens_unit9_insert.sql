-- A2 Teens Unit 9: Health and Fitness (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Healthy Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  'Healthy Habits',
  'A2',
  'teens',
  9,
  1,
  'Talk about healthy habits using simple present.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
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
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥗",
  "questions": [
    "Do you have healthy habits?",
    "Do you drink enough water?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Balanced diet",
      "bg": "#FAECE7"
    },
    {
      "word": "Exercise",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sleep",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hydrated",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you eat a balanced diet?",
    "How much do you exercise?"
  ],
  "student": [
    "I try to eat a balanced diet.",
    "I exercise three times a week."
  ],
  "note": "Think about your own healthy habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I try to eat a [balanced diet]."
    },
    {
      "speaker": "B",
      "text": "I [exercise] three times a week."
    },
    {
      "speaker": "A",
      "text": "I try to stay [hydrated] all day."
    }
  ],
  "blanks": [
    "balanced diet",
    "exercise",
    "hydrated"
  ]
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What healthy habits do you have?"
    },
    {
      "speaker": "B",
      "text": "I try to eat a balanced diet and drink water to stay hydrated."
    },
    {
      "speaker": "A",
      "text": "I exercise a few times a week and try to get enough sleep."
    },
    {
      "speaker": "B",
      "text": "Those are great habits!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A health blog for teens: try to eat a balanced diet with fruits and vegetables. Exercise at least three times a week. Get enough sleep every night. And don't forget to stay hydrated by drinking water throughout the day.",
  "questions": [
    "What does the blog say about diet?",
    "How often should you exercise?",
    "What else does the blog mention?"
  ]
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I try to ___.",
    "I exercise ___ times a week.",
    "A healthy habit I want to build is ___."
  ]
}$json$::jsonb,
  true
),
(
  '1f13824f-91be-4881-a5de-e8db2aa128ad',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about healthy habits",
    "Use 'balanced diet' and 'hydrated'",
    "Say how often I exercise"
  ],
  "challenge": "Tell me about your healthy habits!"
}$json$::jsonb,
  true
);

-- Lesson 2: Fitness Choices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  'Fitness Choices',
  'A2',
  'teens',
  9,
  2,
  'Compare fitness activities using comparatives and opinions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
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
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏋️",
  "questions": [
    "Do you prefer team sports or solo activities?",
    "Is running more intense than yoga?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Intense",
      "bg": "#FAECE7"
    },
    {
      "word": "Gentle",
      "bg": "#E1F5EE"
    },
    {
      "word": "Team sport",
      "bg": "#EEEDFE"
    },
    {
      "word": "Solo activity",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is running more intense than walking?",
    "Do you prefer team or solo sports?"
  ],
  "student": [
    "Yes, running is more intense.",
    "I prefer team sports."
  ],
  "note": "Compare two fitness activities!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Running is more [intense] than walking."
    },
    {
      "speaker": "B",
      "text": "Yoga is more [gentle]."
    },
    {
      "speaker": "A",
      "text": "I prefer a [team sport] like basketball."
    }
  ],
  "blanks": [
    "intense",
    "gentle",
    "team sport"
  ]
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer team sports or solo activities?"
    },
    {
      "speaker": "B",
      "text": "I prefer team sports because they're more social and intense."
    },
    {
      "speaker": "A",
      "text": "I like solo activities like running because they're calmer and more gentle on my schedule."
    },
    {
      "speaker": "B",
      "text": "We have different fitness styles!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two teens compare fitness choices. Zara prefers team sports like basketball because they're more social and intense. Leo prefers solo activities like running or yoga because they're gentler and he can go at his own pace.",
  "questions": [
    "What does Zara prefer and why?",
    "What does Leo prefer?",
    "Why does Leo like solo activities?"
  ]
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___ because ___.",
    "___ is more intense than ___.",
    "My favorite fitness activity is ___."
  ]
}$json$::jsonb,
  true
),
(
  '6993d35a-c1a3-4115-8ffb-de364f7b94fe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare fitness activities",
    "Use comparatives: more intense, gentler",
    "Talk about my fitness preferences"
  ],
  "challenge": "Tell me if you prefer team or solo fitness, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Bad Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  'A Bad Day',
  'A2',
  'teens',
  9,
  3,
  'Describe a past day when things went wrong using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
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
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😩",
  "questions": [
    "Have you had a really bad day recently?",
    "Did you oversleep once?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Felt sick",
      "bg": "#FAECE7"
    },
    {
      "word": "Missed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Forgot",
      "bg": "#EEEDFE"
    },
    {
      "word": "Overslept",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What happened on your bad day?",
    "Did you feel sick?"
  ],
  "student": [
    "I overslept and missed the bus.",
    "Yes, I felt sick all morning."
  ],
  "note": "Think about a bad day you had!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [overslept] and missed the bus."
    },
    {
      "speaker": "B",
      "text": "I [felt sick] all day."
    },
    {
      "speaker": "A",
      "text": "I [forgot] my homework at home."
    }
  ],
  "blanks": [
    "overslept",
    "felt sick",
    "forgot"
  ]
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a bad day you had."
    },
    {
      "speaker": "B",
      "text": "I overslept, missed the bus, and forgot my homework. It was a disaster."
    },
    {
      "speaker": "A",
      "text": "I felt sick all day and had to miss practice."
    },
    {
      "speaker": "B",
      "text": "That sounds rough!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday was a terrible day. First, I overslept and missed the bus. Then, I forgot my homework at home. To make it worse, I felt sick by lunchtime and had to go home early. I hope today is better!",
  "questions": [
    "What happened first?",
    "What did the writer forget?",
    "How did the writer feel by lunchtime?"
  ]
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I ___.",
    "Then, I ___.",
    "It was a bad day because ___."
  ]
}$json$::jsonb,
  true
),
(
  '9e8b49a0-bef8-496c-8e25-1a34ae7541fa',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: felt sick, missed, forgot, overslept",
    "Tell a bad day story in order",
    "Talk about a past problem"
  ],
  "challenge": "Tell me about a bad day you had!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Health Plan
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  'My Health Plan',
  'A2',
  'teens',
  9,
  4,
  'Write a short personal health plan using going to and connectors.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
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
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "Do you have a health goal?",
    "What would you like to improve?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Goal",
      "bg": "#FAECE7"
    },
    {
      "word": "Improve",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cut down",
      "bg": "#EEEDFE"
    },
    {
      "word": "Consistent",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your health goal?",
    "How will you improve?"
  ],
  "student": [
    "My goal is to sleep more.",
    "I'm going to go to bed earlier."
  ],
  "note": "Think about a real health goal!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [goal] is to exercise more."
    },
    {
      "speaker": "B",
      "text": "I want to [improve] my sleep."
    },
    {
      "speaker": "A",
      "text": "I'm going to [cut down] on screen time."
    }
  ],
  "blanks": [
    "goal",
    "improve",
    "cut down"
  ]
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your health goal for this month?"
    },
    {
      "speaker": "B",
      "text": "My goal is to sleep more and cut down on late-night phone use."
    },
    {
      "speaker": "A",
      "text": "I'm going to try to be more consistent with exercise."
    },
    {
      "speaker": "B",
      "text": "Good luck with your goal!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My health plan for this month: I'm going to improve my sleep by going to bed earlier. I'm also going to cut down on sugary snacks and be more consistent with exercise. I know it won't be easy, but I want to feel better.",
  "questions": [
    "What is the first goal?",
    "What will the writer cut down on?",
    "Why does the writer want to change?"
  ]
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My goal is to ___.",
    "I'm going to ___.",
    "I want to change because ___."
  ]
}$json$::jsonb,
  true
),
(
  '9a988f6c-fb65-47e7-85c0-4d7b8a241f5d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short health plan",
    "Use 'going to' for goals",
    "Explain my reasons for a goal"
  ],
  "challenge": "Tell me your health plan for next month!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  'Unit Review',
  'A2',
  'teens',
  9,
  5,
  'Review healthy habits, fitness choices, a bad day, and a health plan.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
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
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💪",
  "questions": [
    "What is a healthy habit you have?",
    "What is your health goal?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Habit",
      "bg": "#FAECE7"
    },
    {
      "word": "Intense",
      "bg": "#E1F5EE"
    },
    {
      "word": "Overslept",
      "bg": "#EEEDFE"
    },
    {
      "word": "Goal",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What healthy habits do you have?",
    "What is your health goal?"
  ],
  "student": [
    "I try to exercise regularly.",
    "My goal is to sleep more."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My healthy [habit] is drinking water."
    },
    {
      "speaker": "B",
      "text": "Running is more [intense] than walking."
    },
    {
      "speaker": "A",
      "text": "My [goal] is to sleep earlier."
    }
  ],
  "blanks": [
    "habit",
    "intense",
    "goal"
  ]
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your health this month."
    },
    {
      "speaker": "B",
      "text": "My habit is drinking lots of water. I prefer intense sports like basketball."
    },
    {
      "speaker": "A",
      "text": "Last week I overslept and felt sick, so my goal now is better sleep."
    },
    {
      "speaker": "B",
      "text": "That's a smart goal!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My healthy habit is drinking lots of water and eating a balanced diet. I prefer intense sports like basketball over gentle ones. Last week, I overslept and felt sick because I didn't sleep enough. My goal now is to sleep earlier and stay more consistent.",
  "questions": [
    "What is the writer's healthy habit?",
    "What sport does the writer prefer?",
    "What happened last week?"
  ]
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My healthy habit is ___.",
    "I prefer ___ because ___.",
    "My goal now is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e82b723f-e20e-4098-b176-3b012f0563d3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about healthy habits",
    "Compare fitness activities",
    "Tell a bad day story",
    "Write a health plan"
  ],
  "challenge": "Tell me all about your health and fitness!"
}$json$::jsonb,
  true
);

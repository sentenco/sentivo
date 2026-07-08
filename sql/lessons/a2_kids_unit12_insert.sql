-- A2 Kids Unit 12: Helping at Home and Future Plans (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Jobs at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  'Jobs at Home',
  'A2',
  'kids',
  12,
  1,
  'Talk about simple chores and helping jobs at home.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧹",
  "questions": [
    "What chores do you do at home?",
    "Do you water the plants?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tidy",
      "bg": "#FAECE7"
    },
    {
      "word": "Wash",
      "bg": "#E1F5EE"
    },
    {
      "word": "Set the table",
      "bg": "#EEEDFE"
    },
    {
      "word": "Water plants",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do at home?",
    "Do you help with dinner?"
  ],
  "student": [
    "I tidy my room.",
    "I set the table for dinner."
  ],
  "note": "Think about the jobs you do at home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [tidy] my room every day."
    },
    {
      "speaker": "B",
      "text": "I help [wash] the dishes."
    },
    {
      "speaker": "A",
      "text": "I [set the table] before dinner."
    }
  ],
  "blanks": [
    "tidy",
    "wash",
    "set the table"
  ]
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What jobs do you do at home?"
    },
    {
      "speaker": "B",
      "text": "I tidy my room and water the plants."
    },
    {
      "speaker": "A",
      "text": "I help wash the dishes and set the table."
    },
    {
      "speaker": "B",
      "text": "You are a great helper!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia helps at home every day. After school, she tidies her room. Before dinner, she sets the table. She also waters the plants every morning. Her family is happy because Mia is a great helper.",
  "questions": [
    "What does Mia do after school?",
    "What does Mia do before dinner?",
    "Why is Mia's family happy?"
  ]
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I help at home by ___.",
    "I ___ every day.",
    "My favorite chore is ___."
  ]
}$json$::jsonb,
  true
),
(
  'ee555cc1-2cc8-4c50-8741-e940935c22a4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name home chores",
    "Say what I do to help",
    "Talk about helping at home"
  ],
  "challenge": "Tell me three jobs you do at home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Yesterday I Helped
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  'Yesterday I Helped',
  'A2',
  'kids',
  12,
  2,
  'Talk about a simple helping story in the past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧽",
  "questions": [
    "Did you help at home yesterday?",
    "What did you clean?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cleaned",
      "bg": "#FAECE7"
    },
    {
      "word": "Carried",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fixed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Helped",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you help with yesterday?",
    "Did you clean your room?"
  ],
  "student": [
    "I cleaned my room.",
    "Yes, I helped my mom cook."
  ],
  "note": "Think about how you helped yesterday!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Yesterday, I [cleaned] my room."
    },
    {
      "speaker": "B",
      "text": "I [carried] the bags for my mom."
    },
    {
      "speaker": "A",
      "text": "I [fixed] my toy shelf."
    }
  ],
  "blanks": [
    "cleaned",
    "carried",
    "fixed"
  ]
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you help with yesterday?"
    },
    {
      "speaker": "B",
      "text": "First, I cleaned my room. Then, I carried the shopping bags."
    },
    {
      "speaker": "A",
      "text": "After that, I helped fix a broken chair. Finally, I watered the plants."
    },
    {
      "speaker": "B",
      "text": "You did so much helping!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, Leo helped a lot at home. First, he cleaned his room. Then, he carried the shopping bags for his mom. After that, he helped fix a broken chair. Finally, he watered the plants. His mom was very proud.",
  "questions": [
    "What did Leo clean?",
    "What did Leo carry?",
    "How did Leo's mom feel?"
  ]
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I helped by ___.",
    "I cleaned ___.",
    "My family was ___ because I helped."
  ]
}$json$::jsonb,
  true
),
(
  'ce601ce4-6fd6-4e9e-908a-50eaae2910e6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: cleaned, carried, fixed, helped",
    "Tell a helping story in order",
    "Say how I helped yesterday"
  ],
  "challenge": "Tell me how you helped at home yesterday!"
}$json$::jsonb,
  true
);

-- Lesson 3: Plans for the Weekend
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '93c374ba-638c-459d-a709-4167dd168c42',
  'Plans for the Weekend',
  'A2',
  'kids',
  12,
  3,
  'Talk about simple future plans using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📆",
  "questions": [
    "What are you going to do this weekend?",
    "Are you going to visit family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Going to",
      "bg": "#FAECE7"
    },
    {
      "word": "Visit",
      "bg": "#E1F5EE"
    },
    {
      "word": "Play outside",
      "bg": "#EEEDFE"
    },
    {
      "word": "Clean",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you going to do on Saturday?",
    "What about Sunday?"
  ],
  "student": [
    "I'm going to visit my grandma.",
    "I'm going to play outside."
  ],
  "note": "Think about your real weekend plans!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "On Saturday, I'm [going to] visit my grandma."
    },
    {
      "speaker": "B",
      "text": "I'm going to [play outside]."
    },
    {
      "speaker": "A",
      "text": "I'm going to [clean] my room too."
    }
  ],
  "blanks": [
    "going to",
    "play outside",
    "clean"
  ]
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you going to do this weekend?"
    },
    {
      "speaker": "B",
      "text": "On Saturday, I'm going to visit my grandma. On Sunday, I'm going to play outside."
    },
    {
      "speaker": "A",
      "text": "I'm going to clean my room and help my mom cook."
    },
    {
      "speaker": "B",
      "text": "Sounds like a busy weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia has weekend plans. On Saturday, she is going to visit her grandma. On Sunday, she is going to play outside with her friends. She is also going to clean her room before the weekend starts.",
  "questions": [
    "What is Mia going to do on Saturday?",
    "What is Mia going to do on Sunday?",
    "What is Mia going to do before the weekend?"
  ]
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On Saturday, I'm going to ___.",
    "On Sunday, I'm going to ___.",
    "I'm also going to ___."
  ]
}$json$::jsonb,
  true
),
(
  '93c374ba-638c-459d-a709-4167dd168c42',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'going to' for future plans",
    "Talk about weekend plans",
    "Say a real personal plan"
  ],
  "challenge": "Tell me your plans for this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 4: My A2 Goals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  'My A2 Goals',
  'A2',
  'kids',
  12,
  4,
  'Write a short plan about what they want to do next using simple connectors.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎯",
  "questions": [
    "What do you want to do better in English?",
    "What is your goal?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
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
      "word": "Practice",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your goal?",
    "How will you improve?"
  ],
  "student": [
    "My goal is to read more.",
    "I will practice every day."
  ],
  "note": "Think about your English learning goals!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [goal] is to read more books."
    },
    {
      "speaker": "B",
      "text": "I'm going to [practice] speaking every day."
    },
    {
      "speaker": "A",
      "text": "[Next], I want to learn new words."
    }
  ],
  "blanks": [
    "goal",
    "practice",
    "next"
  ]
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your goal for English?"
    },
    {
      "speaker": "B",
      "text": "I'm going to read more and practice speaking because I want to improve."
    },
    {
      "speaker": "A",
      "text": "Next, I want to learn new words and help at home."
    },
    {
      "speaker": "B",
      "text": "Those are great goals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My goals for next week are simple. I'm going to read more books because I want to improve my English. I'm also going to help at home and practice speaking every day. I know I can do it!",
  "questions": [
    "What is the first goal?",
    "Why does the writer want to read more?",
    "What else will the writer do?"
  ]
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My goal is to ___.",
    "I'm going to ___ because ___.",
    "Next, I want to ___."
  ]
}$json$::jsonb,
  true
),
(
  '2bcc79a1-9095-4473-a7c6-c37b5edfb2a9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short goal note",
    "Use 'because' to explain a goal",
    "Use 'and' to connect ideas"
  ],
  "challenge": "Tell me your goal for next week!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  'Unit Review',
  'A2',
  'kids',
  12,
  5,
  'Review helping at home, past actions, and future plans.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "What do you do to help at home?",
    "What are your plans for next week?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Helped",
      "bg": "#FAECE7"
    },
    {
      "word": "Chore",
      "bg": "#E1F5EE"
    },
    {
      "word": "Going to",
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
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you help with?",
    "What are you going to do next?"
  ],
  "student": [
    "I cleaned my room and helped cook.",
    "I'm going to practice English every day."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [helped] my mom yesterday."
    },
    {
      "speaker": "B",
      "text": "My favorite [chore] is watering plants."
    },
    {
      "speaker": "A",
      "text": "I'm [going to] practice English every day."
    }
  ],
  "blanks": [
    "helped",
    "chore",
    "going to"
  ]
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What chores do you do at home?"
    },
    {
      "speaker": "B",
      "text": "I tidy my room and set the table. Yesterday, I helped clean the kitchen."
    },
    {
      "speaker": "A",
      "text": "What are your plans for next week?"
    },
    {
      "speaker": "B",
      "text": "I'm going to practice speaking English every day because I want to improve."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like helping at home. Yesterday, I cleaned my room and helped cook dinner. My favorite chore is watering the plants. Next week, I'm going to practice my English every day because I want to speak better. I can do it!",
  "questions": [
    "What did the writer do yesterday?",
    "What is the writer's favorite chore?",
    "What is the writer's plan for next week?"
  ]
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I help at home by ___.",
    "Yesterday, I ___.",
    "Next week, I'm going to ___."
  ]
}$json$::jsonb,
  true
),
(
  '0621580d-abb1-4a4a-ac3d-0fb53f5be287',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about home chores",
    "Tell a past helping story",
    "Talk about future plans",
    "Set a personal goal"
  ],
  "challenge": "Tell me all about helping at home and your plans!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 5: Work and Jobs (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Jobs
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  'Jobs',
  'A1',
  'adults',
  5,
  1,
  'Name common jobs.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What is your job?",
    "What job do you want?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Teacher",
      "bg": "#FAECE7"
    },
    {
      "word": "Driver",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nurse",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cook",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Are you a teacher?"
  ],
  "student": [
    "I am an engineer.",
    "No, I am a nurse!"
  ],
  "note": "Think of your real job or dream job!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a [teacher]."
    },
    {
      "speaker": "B",
      "text": "I am a [nurse]."
    },
    {
      "speaker": "A",
      "text": "I want to be a [cook]."
    }
  ],
  "blanks": [
    "teacher",
    "nurse",
    "cook"
  ]
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your job?"
    },
    {
      "speaker": "B",
      "text": "I am a driver."
    },
    {
      "speaker": "A",
      "text": "I am an office worker!"
    },
    {
      "speaker": "B",
      "text": "Interesting!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a teacher. My friend is a nurse. My brother is a driver. Everyone has a different job. I like my job!",
  "questions": [
    "What is the writer's job?",
    "What is the friend's job?",
    "What is the brother's job?"
  ]
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "I want to be a ___.",
    "My friend is a ___."
  ]
}$json$::jsonb,
  true
),
(
  '62180f9a-6e05-4dc8-ba72-1ed6e9d9e65e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four jobs",
    "Say 'I am a ___'",
    "Talk about jobs"
  ],
  "challenge": "Tell me your job or the job you want!"
}$json$::jsonb,
  true
);

-- Lesson 2: Workplaces
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  'Workplaces',
  'A1',
  'adults',
  5,
  2,
  'Say where people work.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Where do you work?",
    "Do you work in an office?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hospital",
      "bg": "#FAECE7"
    },
    {
      "word": "Office",
      "bg": "#E1F5EE"
    },
    {
      "word": "School",
      "bg": "#EEEDFE"
    },
    {
      "word": "Shop",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you work?",
    "Do you work in a hospital?"
  ],
  "student": [
    "I work in an office.",
    "Yes, I work in a hospital!"
  ],
  "note": "Think about where you really work!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I work in a [hospital]."
    },
    {
      "speaker": "B",
      "text": "I work in an [office]."
    },
    {
      "speaker": "A",
      "text": "I work in a [school]."
    }
  ],
  "blanks": [
    "hospital",
    "office",
    "school"
  ]
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you work?"
    },
    {
      "speaker": "B",
      "text": "I work in a shop."
    },
    {
      "speaker": "A",
      "text": "I work in a school!"
    },
    {
      "speaker": "B",
      "text": "That sounds nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I work in an office. My sister works in a hospital. My friend works in a school. We all work in different places!",
  "questions": [
    "Where does the writer work?",
    "Where does the sister work?",
    "Where does the friend work?"
  ]
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I work in a/an ___.",
    "My friend works in a ___.",
    "I want to work in a ___."
  ]
}$json$::jsonb,
  true
),
(
  'fdfa6bde-8cd9-419a-845d-ae2039e3bdd5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four workplaces",
    "Say 'I work in a ___'",
    "Talk about workplaces"
  ],
  "challenge": "Tell me where you work!"
}$json$::jsonb,
  true
);

-- Lesson 3: Daily Work Tasks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  'Daily Work Tasks',
  'A1',
  'adults',
  5,
  3,
  'Say simple things people do at work.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you do at work?",
    "Do you help people at work?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Help",
      "bg": "#FAECE7"
    },
    {
      "word": "Drive",
      "bg": "#E1F5EE"
    },
    {
      "word": "Teach",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sell",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do at work?",
    "Do you teach?"
  ],
  "student": [
    "I help customers.",
    "Yes, I teach English!"
  ],
  "note": "Think about your real work tasks!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "At work, I [help] people."
    },
    {
      "speaker": "B",
      "text": "I [teach] students."
    },
    {
      "speaker": "A",
      "text": "I [sell] products."
    }
  ],
  "blanks": [
    "help",
    "teach",
    "sell"
  ]
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do at work?"
    },
    {
      "speaker": "B",
      "text": "I drive a bus."
    },
    {
      "speaker": "A",
      "text": "I help customers at a shop!"
    },
    {
      "speaker": "B",
      "text": "That's important work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At work, I help customers. My friend teaches students. My brother drives a taxi. We all do different things at work!",
  "questions": [
    "What does the writer do at work?",
    "What does the friend do?",
    "What does the brother do?"
  ]
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "At work, I ___.",
    "My friend ___ at work.",
    "I like to ___ at work."
  ]
}$json$::jsonb,
  true
),
(
  '1bdd5236-58fa-4ac1-b759-eaf5a613687d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four work verbs",
    "Say 'At work, I ___'",
    "Talk about work tasks"
  ],
  "challenge": "Tell me two things you do at work!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About Work
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '98183434-a9b9-416e-87a1-1370de22173e',
  'Talking About Work',
  'A1',
  'adults',
  5,
  4,
  'Answer simple questions about work.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you do?",
    "Do you like your job?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Do You Do",
      "bg": "#FAECE7"
    },
    {
      "word": "Where Do You Work",
      "bg": "#E1F5EE"
    },
    {
      "word": "Do You Like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Job",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do?",
    "Do you like your job?"
  ],
  "student": [
    "I am a teacher.",
    "Yes, I like my job!"
  ],
  "note": "Answer about your real work!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What do you do]?"
    },
    {
      "speaker": "B",
      "text": "[Where do you work]?"
    },
    {
      "speaker": "A",
      "text": "[Do you like] your job?"
    }
  ],
  "blanks": [
    "What do you do",
    "Where do you work",
    "Do you like"
  ]
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do?"
    },
    {
      "speaker": "B",
      "text": "I am a nurse."
    },
    {
      "speaker": "A",
      "text": "Do you like your job?"
    },
    {
      "speaker": "B",
      "text": "Yes, I love it!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What do you do? I am an engineer. Where do you work? I work in an office. Do you like your job? Yes, I like it very much!",
  "questions": [
    "What is the writer's job?",
    "Where does the writer work?",
    "Does the writer like the job?"
  ]
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What do you do? ___.",
    "Where do you work? ___.",
    "Do you like your job? ___."
  ]
}$json$::jsonb,
  true
),
(
  '98183434-a9b9-416e-87a1-1370de22173e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What do you do?'",
    "Ask 'Where do you work?'",
    "Answer work questions"
  ],
  "challenge": "Ask me about my job!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  'Unit Review',
  'A1',
  'adults',
  5,
  5,
  'Talk briefly about jobs and work.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What job words do you remember?",
    "Can you describe your job?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Teacher",
      "bg": "#FAECE7"
    },
    {
      "word": "Office",
      "bg": "#E1F5EE"
    },
    {
      "word": "Help",
      "bg": "#EEEDFE"
    },
    {
      "word": "Job",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do?",
    "Where do you work?"
  ],
  "student": [
    "I am a teacher.",
    "I work in a school."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a [teacher]."
    },
    {
      "speaker": "B",
      "text": "I work in an [office]."
    },
    {
      "speaker": "A",
      "text": "I [help] people at work."
    }
  ],
  "blanks": [
    "teacher",
    "office",
    "help"
  ]
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do?"
    },
    {
      "speaker": "B",
      "text": "I am a nurse. I work in a hospital."
    },
    {
      "speaker": "A",
      "text": "Do you like your job?"
    },
    {
      "speaker": "B",
      "text": "Yes, I love helping people!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a teacher. I work in a school. Every day, I teach students and help them learn. I like my job very much!",
  "questions": [
    "What is the writer's job?",
    "Where does the writer work?",
    "Does the writer like the job?"
  ]
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "I work in a ___.",
    "At work, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '179b092d-8cb7-4fcd-8234-b520179cee13',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name jobs and workplaces",
    "Say work tasks",
    "Ask and answer about work"
  ],
  "challenge": "Tell me all about your job!"
}$json$::jsonb,
  true
);

-- A1 Teens Unit 3: School Life (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '49cad78b-c93f-4dae-a364-210be7be180a',
  'School Subjects',
  'A1',
  'teens',
  3,
  1,
  'Name basic school subjects.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📚",
  "questions": [
    "What subjects do you study?",
    "What is your favorite subject?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "English",
      "bg": "#FAECE7"
    },
    {
      "word": "Math",
      "bg": "#E1F5EE"
    },
    {
      "word": "Science",
      "bg": "#EEEDFE"
    },
    {
      "word": "Art",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you study?",
    "Do you like math?"
  ],
  "student": [
    "I study English and math.",
    "Yes, I like math!"
  ],
  "note": "Think about your real school subjects!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I study [English]."
    },
    {
      "speaker": "B",
      "text": "I study [math]."
    },
    {
      "speaker": "A",
      "text": "I like [science]."
    }
  ],
  "blanks": [
    "English",
    "math",
    "science"
  ]
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What subjects do you study?"
    },
    {
      "speaker": "B",
      "text": "I study English, math, and art."
    },
    {
      "speaker": "A",
      "text": "What is your favorite subject?"
    },
    {
      "speaker": "B",
      "text": "My favorite subject is art!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I study many subjects. I study English. I study math. I study science. My favorite subject is art. I like school!",
  "questions": [
    "What subjects does the writer study?",
    "What is the favorite subject?",
    "Does the writer like school?"
  ]
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I study ___.",
    "My favorite subject is ___.",
    "I like ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '49cad78b-c93f-4dae-a364-210be7be180a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four school subjects",
    "Say 'I study ___'",
    "Say my favorite subject"
  ],
  "challenge": "Tell me your favorite subject and why!"
}$json$::jsonb,
  true
);

-- Lesson 2: My School Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  'My School Day',
  'A1',
  'teens',
  3,
  2,
  'Say simple school day sentences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏫",
  "questions": [
    "What time do you go to school?",
    "How many classes do you have?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Study",
      "bg": "#FAECE7"
    },
    {
      "word": "Have",
      "bg": "#E1F5EE"
    },
    {
      "word": "Go To",
      "bg": "#EEEDFE"
    },
    {
      "word": "Class",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you go to school?",
    "How many classes do you have?"
  ],
  "student": [
    "I go to school at 8.",
    "I have six classes."
  ],
  "note": "Think about your real school schedule!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [go to] school at 8."
    },
    {
      "speaker": "B",
      "text": "I [have] six classes."
    },
    {
      "speaker": "A",
      "text": "I [study] every day."
    }
  ],
  "blanks": [
    "go to",
    "have",
    "study"
  ]
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What time do you go to school?"
    },
    {
      "speaker": "B",
      "text": "I go to school at 7:30."
    },
    {
      "speaker": "A",
      "text": "How many classes do you have?"
    },
    {
      "speaker": "B",
      "text": "I have five classes today!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go to school at 8 o'clock. I have six classes today. I study English, math, and science. School finishes at 3 o'clock.",
  "questions": [
    "What time does school start?",
    "How many classes does the writer have?",
    "What time does school finish?"
  ]
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go to school at ___.",
    "I have ___ classes.",
    "School finishes at ___."
  ]
}$json$::jsonb,
  true
),
(
  'a45a2bff-a356-45ca-90ad-d2a50af16643',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what time school starts",
    "Say how many classes I have",
    "Talk about my school day"
  ],
  "challenge": "Tell me about your school day and schedule!"
}$json$::jsonb,
  true
);

-- Lesson 3: Teachers and Classmates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  'Teachers and Classmates',
  'A1',
  'teens',
  3,
  3,
  'Describe people at school in simple terms.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🏫",
  "questions": [
    "Is your teacher kind?",
    "Do you have a funny classmate?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
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
      "word": "Classmate",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Funny",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your teacher kind?",
    "Is your classmate funny?"
  ],
  "student": [
    "Yes, my teacher is kind.",
    "Yes, he is very funny!"
  ],
  "note": "Describe a real teacher or classmate!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [teacher] is kind."
    },
    {
      "speaker": "B",
      "text": "My [classmate] is funny."
    },
    {
      "speaker": "A",
      "text": "My teacher is [strict]."
    }
  ],
  "blanks": [
    "teacher",
    "classmate",
    "strict"
  ]
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your teacher kind or strict?"
    },
    {
      "speaker": "B",
      "text": "My teacher is kind."
    },
    {
      "speaker": "A",
      "text": "Is your classmate funny?"
    },
    {
      "speaker": "B",
      "text": "Yes, she is very funny!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My teacher is kind. My math teacher is strict but fair. My best classmate is funny. We laugh every day at school.",
  "questions": [
    "Is the teacher kind or strict?",
    "How is the math teacher described?",
    "Is the classmate funny?"
  ]
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My teacher is ___.",
    "My classmate is ___.",
    "My friend is ___."
  ]
}$json$::jsonb,
  true
),
(
  '11e70d1a-06ba-4d5c-9d8d-796d0d794b64',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'kind', 'strict', 'funny'",
    "Describe a teacher or classmate",
    "Say 'My teacher is ___'"
  ],
  "challenge": "Describe your teacher or a classmate to me!"
}$json$::jsonb,
  true
);

-- Lesson 4: School Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  'School Questions',
  'A1',
  'teens',
  3,
  4,
  'Answer simple questions about school life.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "Do you like school?",
    "What is your favorite subject?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Do You Study",
      "bg": "#FAECE7"
    },
    {
      "word": "Do You Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Favorite",
      "bg": "#EEEDFE"
    },
    {
      "word": "Subject",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like school?",
    "What is your favorite subject?"
  ],
  "student": [
    "Yes, I like school.",
    "My favorite subject is science."
  ],
  "note": "Answer about your real school life!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you like] school?"
    },
    {
      "speaker": "B",
      "text": "What is your [favorite] subject?"
    },
    {
      "speaker": "A",
      "text": "What do you [study]?"
    }
  ],
  "blanks": [
    "Do you like",
    "favorite",
    "study"
  ]
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like school?"
    },
    {
      "speaker": "B",
      "text": "Yes, I like school a lot!"
    },
    {
      "speaker": "A",
      "text": "What is your favorite subject?"
    },
    {
      "speaker": "B",
      "text": "My favorite subject is art!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you like school? Yes, I like school. What is your favorite subject? My favorite subject is science. What do you study? I study English and math.",
  "questions": [
    "Does the writer like school?",
    "What is the favorite subject?",
    "What does the writer study?"
  ]
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you like school? ___.",
    "My favorite subject is ___.",
    "I study ___."
  ]
}$json$::jsonb,
  true
),
(
  'd8ce1179-61d8-4739-a279-43da185e49d9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you like school?'",
    "Ask 'What is your favorite subject?'",
    "Answer school questions"
  ],
  "challenge": "Ask me if I like school and what my favorite subject is!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  'Unit Review',
  'A1',
  'teens',
  3,
  5,
  'Speak briefly about school subjects and school life.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📚",
  "questions": [
    "What school words do you remember?",
    "Can you describe your school day?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Math",
      "bg": "#FAECE7"
    },
    {
      "word": "Teacher",
      "bg": "#E1F5EE"
    },
    {
      "word": "Class",
      "bg": "#EEEDFE"
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you study?",
    "Do you like school?"
  ],
  "student": [
    "I study math.",
    "Yes, I like school."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I study [math]."
    },
    {
      "speaker": "B",
      "text": "My [teacher] is kind."
    },
    {
      "speaker": "A",
      "text": "I have six [class]es."
    }
  ],
  "blanks": [
    "math",
    "teacher",
    "class"
  ]
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you study at school?"
    },
    {
      "speaker": "B",
      "text": "I study English, math, and science."
    },
    {
      "speaker": "A",
      "text": "Is your teacher kind?"
    },
    {
      "speaker": "B",
      "text": "Yes, my teacher is very kind!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go to school at 8 o'clock. I study English, math, and science. My favorite subject is art. My teacher is kind. My classmate is funny. I like school!",
  "questions": [
    "What time does school start?",
    "What is the favorite subject?",
    "How is the teacher described?"
  ]
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I study ___.",
    "My teacher is ___.",
    "My favorite subject is ___."
  ]
}$json$::jsonb,
  true
),
(
  '012dcbc9-dd10-4e96-a4d4-bec1b95eae26',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name school subjects",
    "Describe school day",
    "Describe teachers and classmates",
    "Answer school questions"
  ],
  "challenge": "Tell me all about your school day right now!"
}$json$::jsonb,
  true
);

-- A1 Teens Unit 3: School (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  'School Subjects',
  'A1',
  'teens',
  3,
  1,
  'Name school subjects. [Foundation, L1, format E: choose-the-better-answer]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
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
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📚",
  "questions": [
    "Do you have math today?",
    "Do you like art?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
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
      "word": "Art",
      "bg": "#E1F5EE"
    },
    {
      "word": "Science",
      "bg": "#EEEDFE"
    },
    {
      "word": "Music",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What subject is this?",
    "Do you have math today?"
  ],
  "student": [
    "This is math.",
    "Yes, I have math today."
  ],
  "note": "Point to your school bag or book!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [math]."
    },
    {
      "speaker": "B",
      "text": "This is [art]."
    },
    {
      "speaker": "A",
      "text": "I have [science] today."
    }
  ],
  "blanks": [
    "math",
    "art",
    "science"
  ]
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I have math today' or 'I have a math today'?"
    },
    {
      "speaker": "B",
      "text": "'I have math today' is correct. No 'a' with subject names."
    },
    {
      "speaker": "A",
      "text": "Good! Now, this is art. What subject is this?"
    },
    {
      "speaker": "B",
      "text": "This is music!"
    }
  ],
  "note": "Choose the correct sentence first, then name the subject in the picture."
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have math, art, science, and music at school. Today I have math.",
  "questions": [
    "What subjects does the writer have?",
    "What subject is today?",
    "Name one subject."
  ]
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have ___ at school.",
    "Today I have ___.",
    "My subjects are ___."
  ]
}$json$::jsonb,
  true
),
(
  '09c19d5b-af97-4863-8c16-59695ce409bc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 school subjects",
    "Say 'This is ___'",
    "Say what subject I have today"
  ],
  "challenge": "Tell me your school subjects!"
}$json$::jsonb,
  true
);

-- Lesson 2: My School Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  'My School Day',
  'A1',
  'teens',
  3,
  2,
  'Talk about a simple school day. [Foundation, L2, format M: teacher models, student echoes]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
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
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏫",
  "questions": [
    "When is your break?",
    "Do you have homework today?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Class",
      "bg": "#FAECE7"
    },
    {
      "word": "Break",
      "bg": "#E1F5EE"
    },
    {
      "word": "Lunch",
      "bg": "#EEEDFE"
    },
    {
      "word": "Homework",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When is your class?",
    "Do you have homework?"
  ],
  "student": [
    "My class is at 9am.",
    "Yes, I have homework."
  ],
  "note": "Use the word bank: class, break, lunch, homework.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [class] is at 9am."
    },
    {
      "speaker": "B",
      "text": "My [break] is at 11am."
    },
    {
      "speaker": "A",
      "text": "I have [homework] today."
    }
  ],
  "blanks": [
    "class",
    "break",
    "homework"
  ]
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My class is at 9am."
    },
    {
      "speaker": "B",
      "text": "My break is at 11am."
    },
    {
      "speaker": "A",
      "text": "Lunch is at 1pm."
    },
    {
      "speaker": "B",
      "text": "I have homework today!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My class is at 9am. My break is at 11am. Lunch is at 1pm. I have homework today.",
  "questions": [
    "What time is class?",
    "What time is break?",
    "Does the writer have homework?"
  ]
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My class is at ___.",
    "My break is at ___.",
    "Today I have ___."
  ]
}$json$::jsonb,
  true
),
(
  '231fa2e1-2894-4668-8695-dcca757e9c3e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say class and break times",
    "Say 'I have homework'",
    "Talk about my school day"
  ],
  "challenge": "Tell me about your school day!"
}$json$::jsonb,
  true
);

-- Lesson 3: Teachers and Classmates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  'Teachers and Classmates',
  'A1',
  'teens',
  3,
  3,
  'Talk about teachers and classmates. [Foundation, L3, format R: short role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
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
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👩‍🏫",
  "questions": [
    "Is your teacher nice?",
    "Do you have a smart classmate?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
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
      "word": "Nice",
      "bg": "#EEEDFE"
    },
    {
      "word": "Smart",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your teacher nice?",
    "Who is your classmate?"
  ],
  "student": [
    "Yes, my teacher is nice.",
    "My classmate is Ana."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [teacher] is nice."
    },
    {
      "speaker": "B",
      "text": "My [classmate] is smart."
    },
    {
      "speaker": "A",
      "text": "She is [nice] too."
    }
  ],
  "blanks": [
    "teacher",
    "classmate",
    "nice"
  ]
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your teacher and a classmate."
    },
    {
      "speaker": "B",
      "text": "My teacher is nice. My classmate is smart."
    },
    {
      "speaker": "A",
      "text": "We are friends at school."
    },
    {
      "speaker": "B",
      "text": "Now you introduce your teacher to me!"
    }
  ],
  "note": "Mini role-play: introduce your teacher and a classmate to a new student at school."
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My teacher is nice. My classmate is smart. We are friends at school.",
  "questions": [
    "Is the teacher nice or not nice?",
    "Is the classmate smart?",
    "Are they friends?"
  ]
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My teacher is ___.",
    "My classmate is ___.",
    "We are ___."
  ]
}$json$::jsonb,
  true
),
(
  'f4e2aad7-b7d5-438c-8828-8eb5c06b14c4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my teacher",
    "Describe a classmate",
    "Ask about someone's teacher"
  ],
  "challenge": "Tell me about your teacher and a classmate!"
}$json$::jsonb,
  true
);

-- Lesson 4: School Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  'School Questions',
  'A1',
  'teens',
  3,
  4,
  'Combine subjects, schedule, and people into a school talk. [Foundation, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
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
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "What is your favorite subject?",
    "Is school easy or hard?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite",
      "bg": "#FAECE7"
    },
    {
      "word": "Easy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hard",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fun",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite subject?",
    "Is it easy or hard?"
  ],
  "student": [
    "My favorite subject is art.",
    "It is easy for me."
  ],
  "note": "Put it all together: subject + schedule + people + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite subject is [art]."
    },
    {
      "speaker": "B",
      "text": "It is [easy] for me."
    },
    {
      "speaker": "A",
      "text": "School is [fun]!"
    }
  ],
  "blanks": [
    "art",
    "easy",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite subject, and is it easy or hard for you?"
    },
    {
      "speaker": "B",
      "text": "My favorite subject is ___. It is ___ for me."
    },
    {
      "speaker": "A",
      "text": "Why do you like it?"
    },
    {
      "speaker": "B",
      "text": "I like it because ___."
    }
  ],
  "note": "Fill in your own answers -- no word bank this time. Say your full answers out loud."
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite subject is art. My teacher is nice. My classmates are fun. School is fun for me!",
  "questions": [
    "What is the favorite subject?",
    "How is the teacher?",
    "Is school fun or boring?"
  ]
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite subject is ___.",
    "My teacher is ___.",
    "School is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  'b0aba0bf-6d9f-4f53-8316-502ed0d9c65f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite subject",
    "Describe school with an opinion",
    "Talk about school with several sentences"
  ],
  "challenge": "Tell me all about your school day!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  'Unit Review',
  'A1',
  'teens',
  3,
  5,
  'Unit Review -- tier-matched mixed review. Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
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
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎓",
  "questions": [
    "What is your favorite subject?",
    "Is your teacher nice?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Subject",
      "bg": "#FAECE7"
    },
    {
      "word": "Class",
      "bg": "#E1F5EE"
    },
    {
      "word": "Teacher",
      "bg": "#EEEDFE"
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite subject?",
    "Is your teacher nice?"
  ],
  "student": [
    "My favorite subject is science.",
    "Yes, my teacher is nice."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [subject] is music."
    },
    {
      "speaker": "B",
      "text": "My [class] is at 9am."
    },
    {
      "speaker": "A",
      "text": "My [teacher] is nice."
    }
  ],
  "blanks": [
    "subject",
    "class",
    "teacher"
  ]
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your school."
    },
    {
      "speaker": "B",
      "text": "My favorite subject is music. My class is at 9am. My teacher is nice."
    },
    {
      "speaker": "A",
      "text": "I have homework today, but school is fun."
    },
    {
      "speaker": "B",
      "text": "Sounds like a good day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite subject is music. My class is at 9am. My teacher is nice. School is fun for me.",
  "questions": [
    "What is the favorite subject?",
    "What time is class?",
    "Is school fun?"
  ]
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite subject is ___.",
    "My teacher is ___.",
    "School is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  '4eb1dea8-636d-416b-87fd-2ec567cd3a88',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name school subjects",
    "Talk about my schedule",
    "Describe my teacher and school"
  ],
  "challenge": "Tell me all about your school!"
}$json$::jsonb,
  true
);

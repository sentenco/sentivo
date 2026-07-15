-- A1 Teens Unit 3: School (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '29186baf-8761-49ce-a62d-25203e95a601',
  'School Subjects',
  'A1',
  'teens',
  3,
  1,
  'Name school subjects. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is math."
    },
    {
      "speaker": "B",
      "text": "This is art."
    },
    {
      "speaker": "A",
      "text": "I have science today."
    },
    {
      "speaker": "B",
      "text": "I have music today!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '29186baf-8761-49ce-a62d-25203e95a601',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
  'My School Day',
  'A1',
  'teens',
  3,
  2,
  'Talk about a simple school day. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "When is your class?"
    },
    {
      "speaker": "B",
      "text": "My class is at 9am. When is your break?"
    },
    {
      "speaker": "A",
      "text": "My break is at 11am. I have homework today."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '5b5b8e57-14cd-4328-91c0-17aaa5384513',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
  'Teachers and Classmates',
  'A1',
  'teens',
  3,
  3,
  'Talk about teachers and classmates. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your teacher nice?"
    },
    {
      "speaker": "B",
      "text": "Yes, my teacher is nice. Is your classmate smart?"
    },
    {
      "speaker": "A",
      "text": "Yes, my classmate is very smart."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  '263deb0b-11c5-4f18-b45a-0a5782e585bb',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
  'School Questions',
  'A1',
  'teens',
  3,
  4,
  'Combine subjects, schedule, and people into a school talk. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] subject is math."
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
    "favorite",
    "easy",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your school day."
    },
    {
      "speaker": "B",
      "text": "My favorite subject is art. My teacher is nice and my classmates are fun."
    },
    {
      "speaker": "A",
      "text": "Math is a bit hard for me, but I like my class."
    },
    {
      "speaker": "B",
      "text": "School sounds fun for you!"
    }
  ],
  "note": "Mini talk: tell me all about your school day in a few sentences."
}$json$::jsonb,
  true
),
(
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  'db61015a-6df8-4e1b-ba1c-40b6b154272c',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
  'Unit Review',
  'A1',
  'teens',
  3,
  5,
  'Review school subjects, schedule, and people. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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
  '9a8826f2-e431-488b-a286-8059e4fcd261',
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

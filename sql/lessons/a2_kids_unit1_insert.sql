-- A2 Kids Unit 1: School Life and School Projects (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  'School Subjects',
  'A2',
  'kids',
  1,
  1,
  'Say school subjects and give simple opinions using because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
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
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📚",
  "questions": [
    "What subjects do you have at school?",
    "What is your favorite subject?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Art",
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
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite subject?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite subject is art.",
    "I like it because it is fun."
  ],
  "note": "Think about why you like your favorite subject!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [art] because it is fun."
    },
    {
      "speaker": "B",
      "text": "I like [math] because it is easy."
    },
    {
      "speaker": "A",
      "text": "I don't like [science] because it is hard."
    }
  ],
  "blanks": [
    "art",
    "math",
    "science"
  ]
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite subject?"
    },
    {
      "speaker": "B",
      "text": "My favorite subject is music."
    },
    {
      "speaker": "A",
      "text": "Why do you like it?"
    },
    {
      "speaker": "B",
      "text": "I like it because it is fun and I love to sing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Ben has five subjects on Monday. He has math, art, science, music, and P.E. He likes art because it is fun. He does not like science because it is hard. His favorite subject is music because he loves to sing.",
  "questions": [
    "What subjects does Ben have on Monday?",
    "Why does Ben like art?",
    "What is Ben's favorite subject?"
  ]
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite subject is ___.",
    "I like it because ___.",
    "I don't like ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '27ada608-5b59-41d8-aa0f-104b3074a942',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name school subjects",
    "Say 'I like ___ because ___'",
    "Talk about my favorite subject"
  ],
  "challenge": "Tell me your school timetable and your favorite subject!"
}$json$::jsonb,
  true
);

-- Lesson 2: My School Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  'My School Day',
  'A2',
  'kids',
  1,
  2,
  'Sequence a school day using first, then, after that, finally.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
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
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕐",
  "questions": [
    "What do you do first at school?",
    "What do you do at the end of the day?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "First",
      "bg": "#FAECE7"
    },
    {
      "word": "Then",
      "bg": "#E1F5EE"
    },
    {
      "word": "After that",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finally",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first?",
    "What happens next?"
  ],
  "student": [
    "First, I go to class.",
    "Then, I have a break."
  ],
  "note": "Think about the order of your school day!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], I go to class."
    },
    {
      "speaker": "B",
      "text": "[Then], I have a break."
    },
    {
      "speaker": "A",
      "text": "[Finally], I go home."
    }
  ],
  "blanks": [
    "first",
    "then",
    "finally"
  ]
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do first at school?"
    },
    {
      "speaker": "B",
      "text": "First, I go to class."
    },
    {
      "speaker": "A",
      "text": "Then, I have lunch. After that, I play with friends."
    },
    {
      "speaker": "B",
      "text": "Finally, I go home!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia's school day has four parts. First, she goes to class. Then, she has lunch with friends. After that, she has a break outside. Finally, she goes home and does homework.",
  "questions": [
    "What does Mia do first?",
    "What does Mia do after lunch?",
    "What does Mia do finally?"
  ]
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "Then, I ___.",
    "Finally, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '9a09da43-0cb5-4bba-a2f3-28553dc6a15c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'first, then, after that, finally'",
    "Sequence a school day",
    "Tell my daily order"
  ],
  "challenge": "Tell me your whole school day in order!"
}$json$::jsonb,
  true
);

-- Lesson 3: After-School Clubs
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  'After-School Clubs',
  'A2',
  'kids',
  1,
  3,
  'Talk about after-school clubs and compare them.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
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
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "Do you go to a club after school?",
    "What clubs do you know?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Music club",
      "bg": "#FAECE7"
    },
    {
      "word": "Art club",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chess club",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sports club",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which club do you like?",
    "Is chess club quiet or noisy?"
  ],
  "student": [
    "I like art club.",
    "Chess club is quieter than sports club."
  ],
  "note": "Compare two clubs before you answer!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Music club] is louder than chess club."
    },
    {
      "speaker": "B",
      "text": "[Art club] is quieter than sports club."
    },
    {
      "speaker": "A",
      "text": "[Sports club] is more fun for me."
    }
  ],
  "blanks": [
    "music club",
    "art club",
    "sports club"
  ]
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which club do you like, art or sports?"
    },
    {
      "speaker": "B",
      "text": "I like sports club. It is more fun than art club."
    },
    {
      "speaker": "A",
      "text": "I like chess club. It is quieter than music club."
    },
    {
      "speaker": "B",
      "text": "Chess club sounds relaxing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Leo and Ana talk about their clubs. Leo goes to sports club. It is bigger and noisier than chess club. Ana goes to chess club. It is quieter and smaller than sports club. Ana likes it because she can think quietly.",
  "questions": [
    "Which club does Leo go to?",
    "Is chess club bigger or smaller than sports club?",
    "Why does Ana like chess club?"
  ]
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want to join ___ club.",
    "___ club is more fun than ___ club.",
    "I like it because ___."
  ]
}$json$::jsonb,
  true
),
(
  '5240bd45-29d9-4080-9911-564fe4ffafe9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name after-school clubs",
    "Compare two clubs",
    "Say which club I prefer"
  ],
  "challenge": "Tell me which club you want to join and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Class Project
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  'A Class Project',
  'A2',
  'kids',
  1,
  4,
  'Describe a class project using sequencing and because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
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
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖼️",
  "questions": [
    "Have you made a poster at school?",
    "What do you draw at school?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Draw",
      "bg": "#FAECE7"
    },
    {
      "word": "Color",
      "bg": "#E1F5EE"
    },
    {
      "word": "Write",
      "bg": "#EEEDFE"
    },
    {
      "word": "Poster",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first for a poster?",
    "What do you do after that?"
  ],
  "student": [
    "First, we draw.",
    "Then, we color it."
  ],
  "note": "Think about the steps of making a poster!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "First, we [draw] the picture."
    },
    {
      "speaker": "B",
      "text": "Then, we [color] it."
    },
    {
      "speaker": "A",
      "text": "After that, we [write] the title."
    }
  ],
  "blanks": [
    "draw",
    "color",
    "write"
  ]
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do first for your poster?"
    },
    {
      "speaker": "B",
      "text": "First, we draw the picture. Then, we color it."
    },
    {
      "speaker": "A",
      "text": "After that, we write the title. Finally, we show the class."
    },
    {
      "speaker": "B",
      "text": "I like the drawing part best because it is fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My class made a poster about animals. First, we drew a big lion. Then, we colored it yellow and brown. After that, we wrote three facts. Finally, we showed the poster to the class. I liked it because we worked together.",
  "questions": [
    "What animal did the class draw?",
    "What colors did they use?",
    "Why did the writer like the project?"
  ]
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we ___.",
    "Then, we ___.",
    "I liked the project because ___."
  ]
}$json$::jsonb,
  true
),
(
  'fecb4b5e-2942-4eab-a1d0-fd8fac91d409',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe project steps in order",
    "Use 'because' to give a reason",
    "Talk about a class project"
  ],
  "challenge": "Tell me the steps of a project you made!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  'Unit Review',
  'A2',
  'kids',
  1,
  5,
  'Review school subjects, sequencing, clubs, and projects.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
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
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎓",
  "questions": [
    "What is your favorite subject?",
    "What club do you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
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
      "word": "First",
      "bg": "#E1F5EE"
    },
    {
      "word": "Club",
      "bg": "#EEEDFE"
    },
    {
      "word": "Project",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite subject?",
    "What do you do first at school?"
  ],
  "student": [
    "My favorite subject is art because it is fun.",
    "First, I go to class."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
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
      "text": "[First], I go to class, then I have lunch."
    },
    {
      "speaker": "A",
      "text": "I go to sports [club] after school."
    }
  ],
  "blanks": [
    "subject",
    "first",
    "club"
  ]
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite subject and why?"
    },
    {
      "speaker": "B",
      "text": "My favorite subject is art because it is fun."
    },
    {
      "speaker": "A",
      "text": "What club do you go to?"
    },
    {
      "speaker": "B",
      "text": "I go to chess club. It is quieter than sports club."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today was a busy school day. First, I had math and art. I like art because it is fun. Then, I went to chess club. After that, my class made a poster about the sea. Finally, I went home. It was a great day!",
  "questions": [
    "What subjects did the writer have first?",
    "What club did the writer go to?",
    "What did the class make a poster about?"
  ]
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My school day is busy because ___.",
    "I go to ___ club because ___.",
    "My favorite school memory is ___."
  ]
}$json$::jsonb,
  true
),
(
  '113c7ed6-7082-4067-8d7c-49383fd4b9a7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about school subjects",
    "Sequence my day",
    "Compare clubs",
    "Describe a project"
  ],
  "challenge": "Tell me all about your school life!"
}$json$::jsonb,
  true
);

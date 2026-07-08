-- A1 Teens Unit 5: Hobbies and Interests (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hobbies and Interests
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  'Hobbies and Interests',
  'A1',
  'teens',
  5,
  1,
  'Name common hobbies and interests.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
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
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What is your hobby?",
    "Do you like drawing or singing?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Drawing",
      "bg": "#FAECE7"
    },
    {
      "word": "Reading",
      "bg": "#E1F5EE"
    },
    {
      "word": "Singing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Gaming",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "Do you like drawing?"
  ],
  "student": [
    "My hobby is gaming.",
    "Yes, I like drawing!"
  ],
  "note": "Think of your real hobby!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My hobby is [drawing]."
    },
    {
      "speaker": "B",
      "text": "I like [singing]."
    },
    {
      "speaker": "A",
      "text": "I like [gaming]."
    }
  ],
  "blanks": [
    "drawing",
    "singing",
    "gaming"
  ]
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your hobby?"
    },
    {
      "speaker": "B",
      "text": "My hobby is reading."
    },
    {
      "speaker": "A",
      "text": "I like gaming!"
    },
    {
      "speaker": "B",
      "text": "That's a cool hobby!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is drawing. I also like singing. My friend's hobby is gaming. She plays every day. Everyone has different hobbies!",
  "questions": [
    "What is the writer's hobby?",
    "What else does the writer like?",
    "What is the friend's hobby?"
  ]
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I like ___.",
    "My friend's hobby is ___."
  ]
}$json$::jsonb,
  true
),
(
  '278fd81c-4e3b-4d51-8d51-274392e62dfa',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four hobbies",
    "Say 'My hobby is ___'",
    "Talk about hobbies"
  ],
  "challenge": "Tell me your hobby!"
}$json$::jsonb,
  true
);

-- Lesson 2: I Like / I Don't Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  'I Like / I Don''t Like',
  'A1',
  'teens',
  5,
  2,
  'Express simple likes and dislikes about hobbies.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
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
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👍",
  "questions": [
    "What hobby do you like?",
    "What hobby don't you like?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sports",
      "bg": "#FAECE7"
    },
    {
      "word": "Painting",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dancing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cooking",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like sports?",
    "Do you like dancing?"
  ],
  "student": [
    "Yes, I like sports.",
    "No, I don't like dancing."
  ],
  "note": "Give your real opinion!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [sports]."
    },
    {
      "speaker": "B",
      "text": "I don't like [painting]."
    },
    {
      "speaker": "A",
      "text": "I like [cooking]."
    }
  ],
  "blanks": [
    "sports",
    "painting",
    "cooking"
  ]
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like sports?"
    },
    {
      "speaker": "B",
      "text": "Yes, I like sports a lot!"
    },
    {
      "speaker": "A",
      "text": "Do you like dancing?"
    },
    {
      "speaker": "B",
      "text": "No, I don't like dancing."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like sports. I like cooking too. I don't like painting. I don't like dancing very much. We all like different hobbies!",
  "questions": [
    "What does the writer like?",
    "What does the writer not like?",
    "Do we all like the same hobbies?"
  ]
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I don't like ___.",
    "My favorite hobby is ___."
  ]
}$json$::jsonb,
  true
),
(
  'f61617fd-9a7c-4f38-bc50-df00771145bb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___'",
    "Say 'I don't like ___'",
    "Talk about hobby preferences"
  ],
  "challenge": "Tell me a hobby you like and one you don't!"
}$json$::jsonb,
  true
);

-- Lesson 3: Interest Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  'Interest Questions',
  'A1',
  'teens',
  5,
  3,
  'Ask and answer questions about interests.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
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
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "Do you like music?",
    "What do you enjoy doing?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Enjoy",
      "bg": "#FAECE7"
    },
    {
      "word": "Interest",
      "bg": "#E1F5EE"
    },
    {
      "word": "Do You Like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hobby",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like music?",
    "What do you enjoy?"
  ],
  "student": [
    "Yes, I like music.",
    "I enjoy drawing."
  ],
  "note": "Ask a real question about interests!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you like] music?"
    },
    {
      "speaker": "B",
      "text": "What do you [enjoy]?"
    },
    {
      "speaker": "A",
      "text": "My [interest] is art."
    }
  ],
  "blanks": [
    "Do you like",
    "enjoy",
    "interest"
  ]
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like music?"
    },
    {
      "speaker": "B",
      "text": "Yes, I love music!"
    },
    {
      "speaker": "A",
      "text": "What do you enjoy doing?"
    },
    {
      "speaker": "B",
      "text": "I enjoy singing and dancing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you like music? Yes, I like music very much. What do you enjoy doing? I enjoy singing. My interest is music and art.",
  "questions": [
    "Does the writer like music?",
    "What does the writer enjoy doing?",
    "What is the writer's interest?"
  ]
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you like ___? ___.",
    "I enjoy ___.",
    "My interest is ___."
  ]
}$json$::jsonb,
  true
),
(
  '6aad198e-c0df-4254-b8fa-e21bc0f53cdf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you like ___?'",
    "Ask 'What do you enjoy?'",
    "Talk about interests"
  ],
  "challenge": "Ask me what I enjoy doing!"
}$json$::jsonb,
  true
);

-- Lesson 4: Hobbies in Real Life
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '991e4582-39df-4fa5-8af3-2ca223641779',
  'Hobbies in Real Life',
  'A1',
  'teens',
  5,
  4,
  'Describe when and how they do a hobby.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
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
  '991e4582-39df-4fa5-8af3-2ca223641779',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕐",
  "questions": [
    "When do you do your hobby?",
    "Do you do it after school or on weekends?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "After School",
      "bg": "#FAECE7"
    },
    {
      "word": "On Weekends",
      "bg": "#E1F5EE"
    },
    {
      "word": "In the Evening",
      "bg": "#EEEDFE"
    },
    {
      "word": "Every Day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When do you do your hobby?",
    "Do you do it every day?"
  ],
  "student": [
    "I do it after school.",
    "Yes, every day!"
  ],
  "note": "Think about your real hobby routine!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I draw [after school]."
    },
    {
      "speaker": "B",
      "text": "I play games [on weekends]."
    },
    {
      "speaker": "A",
      "text": "I read [in the evening]."
    }
  ],
  "blanks": [
    "after school",
    "on weekends",
    "in the evening"
  ]
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "When do you do your hobby?"
    },
    {
      "speaker": "B",
      "text": "I sing after school."
    },
    {
      "speaker": "A",
      "text": "Do you do it every day?"
    },
    {
      "speaker": "B",
      "text": "No, only on weekends!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I draw after school. I play games on weekends. I read in the evening. My hobbies fill my free time every day!",
  "questions": [
    "When does the writer draw?",
    "When does the writer play games?",
    "When does the writer read?"
  ]
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I do my hobby ___.",
    "I ___ on weekends.",
    "I ___ every day."
  ]
}$json$::jsonb,
  true
),
(
  '991e4582-39df-4fa5-8af3-2ca223641779',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say time phrases for hobbies",
    "Describe a hobby routine",
    "Talk about when I do things"
  ],
  "challenge": "Tell me when you do your hobby!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  'Unit Review',
  'A1',
  'teens',
  5,
  5,
  'Talk briefly about hobbies and interests.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
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
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What hobbies do you remember?",
    "What is your hobby?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Drawing",
      "bg": "#FAECE7"
    },
    {
      "word": "Gaming",
      "bg": "#E1F5EE"
    },
    {
      "word": "Music",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sports",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "When do you do it?"
  ],
  "student": [
    "My hobby is drawing.",
    "I do it after school."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My hobby is [drawing]."
    },
    {
      "speaker": "B",
      "text": "I like [sports]."
    },
    {
      "speaker": "A",
      "text": "I play [after school]."
    }
  ],
  "blanks": [
    "drawing",
    "sports",
    "after school"
  ]
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your hobby?"
    },
    {
      "speaker": "B",
      "text": "My hobby is gaming."
    },
    {
      "speaker": "A",
      "text": "When do you play?"
    },
    {
      "speaker": "B",
      "text": "I play every evening!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is drawing. I also enjoy music. I draw after school every day. On weekends, I listen to music. I love my hobbies!",
  "questions": [
    "What is the writer's hobby?",
    "What does the writer enjoy?",
    "When does the writer draw?"
  ]
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I enjoy ___.",
    "I do it ___."
  ]
}$json$::jsonb,
  true
),
(
  '149d4283-de2c-4e4f-99a2-a370e606f574',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name hobbies",
    "Say likes and dislikes",
    "Talk about hobby routines"
  ],
  "challenge": "Tell me your hobby and when you do it!"
}$json$::jsonb,
  true
);

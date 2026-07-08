-- A1 Kids Unit 3: My Family (5 lessons)
-- Generated from project_a1_kids_master_curriculum memory, Unit 3.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Family Vocabulary
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  'Family Vocabulary',
  'A1',
  'kids',
  3,
  1,
  'Name immediate family members: mom, dad, sister, brother.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Do you have a sister or brother?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7"
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE"
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mom?"
  ],
  "student": [
    "This is my mom.",
    "Yes, this is my dad!"
  ],
  "note": "Point to a family photo when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mom]."
    },
    {
      "speaker": "B",
      "text": "And this is my [dad]."
    },
    {
      "speaker": "A",
      "text": "I have one [sister] too."
    }
  ],
  "blanks": [
    "mom",
    "dad",
    "sister"
  ]
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mom."
    },
    {
      "speaker": "B",
      "text": "And this is my dad."
    },
    {
      "speaker": "A",
      "text": "I have one sister too."
    },
    {
      "speaker": "B",
      "text": "I have one brother!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! This is my family. This is my mom. This is my dad. I have one sister and one brother. I love my family!",
  "questions": [
    "How many sisters does the writer have?",
    "How many brothers does the writer have?",
    "Who is in the family?"
  ]
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My mom's name is ___.",
    "My dad's name is ___.",
    "I have ___ sister(s) and ___ brother(s)."
  ]
}$json$::jsonb,
  true
),
(
  '1643bbb6-b78b-435d-8293-ce9f0edc48c9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my family members",
    "Say 'This is my ___'",
    "Talk about my family"
  ],
  "challenge": "Tell me about your family right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: This Is My...
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '56384b3b-1db0-4e7c-be0c-084853123101',
  'This Is My...',
  'A1',
  'kids',
  3,
  2,
  'Introduce family members using simple sentences: ''This is my mom.''',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵👴",
  "questions": [
    "Do you have a grandma?",
    "Do you have a baby brother or sister?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Grandma",
      "bg": "#FAECE7"
    },
    {
      "word": "Grandpa",
      "bg": "#E1F5EE"
    },
    {
      "word": "Baby",
      "bg": "#EEEDFE"
    },
    {
      "word": "Family",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your grandma?"
  ],
  "student": [
    "This is my grandma.",
    "Yes, this is my grandpa!"
  ],
  "note": "Use a real family photo if you have one!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [grandma]."
    },
    {
      "speaker": "B",
      "text": "This is my [grandpa]."
    },
    {
      "speaker": "A",
      "text": "This is my [baby] sister."
    }
  ],
  "blanks": [
    "grandma",
    "grandpa",
    "baby"
  ]
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my grandma."
    },
    {
      "speaker": "B",
      "text": "This is my grandpa."
    },
    {
      "speaker": "A",
      "text": "This is my baby sister."
    },
    {
      "speaker": "B",
      "text": "This is my whole family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my grandma. This is my grandpa. This is my baby sister. My family is big!",
  "questions": [
    "Who is the writer's grandma?",
    "Is the baby a sister or brother?",
    "Is the family big or small?"
  ]
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "This is my grandma's name: ___.",
    "My baby ___ is small."
  ]
}$json$::jsonb,
  true
),
(
  '56384b3b-1db0-4e7c-be0c-084853123101',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my ___'",
    "Name grandma and grandpa",
    "Talk about a baby in the family"
  ],
  "challenge": "Point to a family photo and say three sentences!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big or Small Family?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  'Big or Small Family?',
  'A1',
  'kids',
  3,
  3,
  'Describe family size with simple adjectives: big, small.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your family big or small?",
    "How many people are in your family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Big",
      "bg": "#FAECE7"
    },
    {
      "word": "Small",
      "bg": "#E1F5EE"
    },
    {
      "word": "Family",
      "bg": "#EEEDFE"
    },
    {
      "word": "Many",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your family big or small?",
    "How many people?"
  ],
  "student": [
    "My family is big.",
    "My family is small."
  ],
  "note": "Count your family members before you answer!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My family is [big]."
    },
    {
      "speaker": "B",
      "text": "My family is [small]."
    },
    {
      "speaker": "A",
      "text": "I have [many] cousins."
    }
  ],
  "blanks": [
    "big",
    "small",
    "many"
  ]
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your family big or small?"
    },
    {
      "speaker": "B",
      "text": "My family is big!"
    },
    {
      "speaker": "A",
      "text": "How many people?"
    },
    {
      "speaker": "B",
      "text": "Six people!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family is big. I have a mom, a dad, two sisters, and one brother. Six people! My friend's family is small. She has a mom and a dad. Two people!",
  "questions": [
    "Is the writer's family big or small?",
    "How many people are in the writer's family?",
    "Is the friend's family big or small?"
  ]
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family is ___ (big/small).",
    "I have ___ people in my family.",
    "My friend's family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4abae6d8-6bc1-4758-86c6-b892d767cf31',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'big' and 'small'",
    "Count my family members",
    "Describe my family size"
  ],
  "challenge": "Tell me if your family is big or small, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: I Love My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  'I Love My Family',
  'A1',
  'kids',
  3,
  4,
  'Express likes within the family, reusing ''I like'' from Unit 1.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "What do you like to do with your family?",
    "Do you play games with your family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Play",
      "bg": "#FAECE7"
    },
    {
      "word": "Cook",
      "bg": "#E1F5EE"
    },
    {
      "word": "Read",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hug",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you like to do with your mom?",
    "Do you play with your brother?"
  ],
  "student": [
    "I like to play with my mom.",
    "Yes, I play with my brother!"
  ],
  "note": "Think of one fun thing you do with your family!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like to [play] with my dad."
    },
    {
      "speaker": "B",
      "text": "I like to [cook] with my mom."
    },
    {
      "speaker": "A",
      "text": "I like to [read] with my grandma."
    }
  ],
  "blanks": [
    "play",
    "cook",
    "read"
  ]
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like to play with my dad."
    },
    {
      "speaker": "B",
      "text": "I like to cook with my mom."
    },
    {
      "speaker": "A",
      "text": "I like to read with my grandma."
    },
    {
      "speaker": "B",
      "text": "I like to hug my family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love my family! I like to play with my dad. I like to cook with my mom. I like to read with my grandma. I like to hug everyone!",
  "questions": [
    "Who does the writer play with?",
    "Who does the writer cook with?",
    "What does the writer like to do with grandma?"
  ]
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like to ___ with my ___.",
    "I love my family because ___.",
    "My favorite family activity is ___."
  ]
}$json$::jsonb,
  true
),
(
  'a678c3d7-73aa-4e82-b51c-613be317f629',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like to ___ with my ___'",
    "Talk about family activities",
    "Say why I love my family"
  ],
  "challenge": "Tell me one thing you love to do with your family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  'Unit Review',
  'A1',
  'kids',
  3,
  5,
  'Review family vocabulary and sentence patterns from Unit 3.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Is your family big or small?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7"
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Grandma",
      "bg": "#EEEDFE"
    },
    {
      "word": "Grandpa",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Family Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is your family big or small?"
  ],
  "student": [
    "This is my mom.",
    "My family is big!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [family]."
    },
    {
      "speaker": "B",
      "text": "Is your family [big] or small?"
    },
    {
      "speaker": "A",
      "text": "I [like] to play with my sister."
    }
  ],
  "blanks": [
    "family",
    "big",
    "like"
  ]
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my family."
    },
    {
      "speaker": "B",
      "text": "Is your family big or small?"
    },
    {
      "speaker": "A",
      "text": "My family is big! I have two sisters."
    },
    {
      "speaker": "B",
      "text": "I like to play with my family."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family is big. I have a mom, a dad, a sister, and a brother. I like to play with my sister. I like to cook with my mom. I love my family!",
  "questions": [
    "Is the family big or small?",
    "Who does the writer play with?",
    "Who does the writer cook with?"
  ]
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family has ___ people.",
    "This is my ___.",
    "I like to ___ with my ___."
  ]
}$json$::jsonb,
  true
),
(
  '83d44055-0f91-4274-9772-7728b68cf0a0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my family members",
    "Say 'This is my ___'",
    "Describe my family size",
    "Say 'I like to ___ with my ___'"
  ],
  "challenge": "Tell me all about your family right now!"
}$json$::jsonb,
  true
);

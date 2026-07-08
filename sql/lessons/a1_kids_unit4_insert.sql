-- A1 Kids Unit 4: Colors and Numbers (5 lessons)
-- Generated from project_a1_kids_master_curriculum memory, Unit 4.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a343a126-be99-48fd-ae80-3276754da1d4',
  'Colors',
  'A1',
  'kids',
  4,
  1,
  'Recognize and say basic colors: red, blue, yellow, green.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
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
  'a343a126-be99-48fd-ae80-3276754da1d4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What colors do you know?",
    "What color is your shirt?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7"
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE"
    },
    {
      "word": "Yellow",
      "bg": "#EEEDFE"
    },
    {
      "word": "Green",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "Is it red?"
  ],
  "student": [
    "It is red.",
    "No, it is blue!"
  ],
  "note": "Point to something colorful when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [red]."
    },
    {
      "speaker": "B",
      "text": "It is [blue]."
    },
    {
      "speaker": "A",
      "text": "It is [yellow]."
    }
  ],
  "blanks": [
    "red",
    "blue",
    "yellow"
  ]
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What color is this?"
    },
    {
      "speaker": "B",
      "text": "It is red!"
    },
    {
      "speaker": "A",
      "text": "What color is that?"
    },
    {
      "speaker": "B",
      "text": "It is green!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like colors! My shirt is red. My bag is blue. My pencil is yellow. My ball is green. I like all the colors!",
  "questions": [
    "What color is the shirt?",
    "What color is the bag?",
    "What color is the ball?"
  ]
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My shirt is ___.",
    "My favorite color is ___.",
    "My ___ is ___."
  ]
}$json$::jsonb,
  true
),
(
  'a343a126-be99-48fd-ae80-3276754da1d4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say four colors",
    "Answer 'What color is this?'",
    "Describe things by color"
  ],
  "challenge": "Point to three things and say their colors!"
}$json$::jsonb,
  true
);

-- Lesson 2: Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  'Numbers',
  'A1',
  'kids',
  4,
  2,
  'Recognize and say numbers 1-10.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
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
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔢",
  "questions": [
    "How many fingers do you have?",
    "Can you count to 10?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "One",
      "bg": "#FAECE7"
    },
    {
      "word": "Two",
      "bg": "#E1F5EE"
    },
    {
      "word": "Three",
      "bg": "#EEEDFE"
    },
    {
      "word": "Four",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many?",
    "Can you count?"
  ],
  "student": [
    "One, two, three!",
    "Yes, I can count!"
  ],
  "note": "Count your fingers when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[One], two, three."
    },
    {
      "speaker": "B",
      "text": "[Four], five, six."
    },
    {
      "speaker": "A",
      "text": "Seven, [eight], nine, ten!"
    }
  ],
  "blanks": [
    "One",
    "Four",
    "eight"
  ]
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Let's count together!"
    },
    {
      "speaker": "B",
      "text": "One, two, three, four, five!"
    },
    {
      "speaker": "A",
      "text": "Six, seven, eight!"
    },
    {
      "speaker": "B",
      "text": "Nine, ten! We did it!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I can count! One, two, three, four, five. Six, seven, eight, nine, ten. I can count to ten in English!",
  "questions": [
    "What number comes after five?",
    "What number comes after nine?",
    "Can the writer count to ten?"
  ]
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I can count to ___.",
    "My favorite number is ___.",
    "One, two, ___, four, ___."
  ]
}$json$::jsonb,
  true
),
(
  '5921d437-f78e-41a5-9c6c-5c3dbbba1c7e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count from 1 to 10",
    "Say numbers out loud",
    "Recognize number words"
  ],
  "challenge": "Count from one to ten right now!"
}$json$::jsonb,
  true
);

-- Lesson 3: Count and Match
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  'Count and Match',
  'A1',
  'kids',
  4,
  3,
  'Count small groups and match the number to the correct quantity.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
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
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "How many apples do you see?",
    "Can you count objects?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Five",
      "bg": "#FAECE7"
    },
    {
      "word": "Six",
      "bg": "#E1F5EE"
    },
    {
      "word": "Seven",
      "bg": "#EEEDFE"
    },
    {
      "word": "Eight",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many apples?",
    "How many balls?"
  ],
  "student": [
    "There are five.",
    "There are seven!"
  ],
  "note": "Count out loud, one at a time!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There are [five] apples."
    },
    {
      "speaker": "B",
      "text": "There are [six] balls."
    },
    {
      "speaker": "A",
      "text": "There are [seven] books."
    }
  ],
  "blanks": [
    "five",
    "six",
    "seven"
  ]
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How many apples are there?"
    },
    {
      "speaker": "B",
      "text": "There are five apples."
    },
    {
      "speaker": "A",
      "text": "How many balls are there?"
    },
    {
      "speaker": "B",
      "text": "There are eight balls!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I see five apples on the table. I see six balls in the box. I see seven books on the shelf. I like to count!",
  "questions": [
    "How many apples are on the table?",
    "How many balls are in the box?",
    "How many books are on the shelf?"
  ]
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There are ___ apples.",
    "I can count ___ things in my room.",
    "There are ___ ___."
  ]
}$json$::jsonb,
  true
),
(
  '18daa902-d76e-4f42-b77a-4cbc425aff29',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count small groups of objects",
    "Say 'There are ___'",
    "Match numbers to quantities"
  ],
  "challenge": "Count five things you can see right now!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Number
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9697f20a-771c-4743-809e-598e62c29d44',
  'My Favorite Number',
  'A1',
  'kids',
  4,
  4,
  'Say a favorite number using simple speaking.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9697f20a-771c-4743-809e-598e62c29d44',
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
  '9697f20a-771c-4743-809e-598e62c29d44',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What is your favorite number?",
    "Why do you like that number?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Nine",
      "bg": "#FAECE7"
    },
    {
      "word": "Ten",
      "bg": "#E1F5EE"
    },
    {
      "word": "Favorite",
      "bg": "#EEEDFE"
    },
    {
      "word": "Number",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite number?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite number is seven.",
    "Because it is lucky!"
  ],
  "note": "Pick a number and think of a reason!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [number] is nine."
    },
    {
      "speaker": "B",
      "text": "My [favorite] number is ten."
    },
    {
      "speaker": "A",
      "text": "I like number [nine]!"
    }
  ],
  "blanks": [
    "number",
    "favorite",
    "nine"
  ]
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite number?"
    },
    {
      "speaker": "B",
      "text": "My favorite number is ten."
    },
    {
      "speaker": "A",
      "text": "Why do you like it?"
    },
    {
      "speaker": "B",
      "text": "Because it is a big number!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite number is seven. I like seven because it is lucky. My friend's favorite number is ten. She likes ten because it is a big number!",
  "questions": [
    "What is the writer's favorite number?",
    "Why does the writer like seven?",
    "What is the friend's favorite number?"
  ]
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite number is ___.",
    "I like this number because ___.",
    "My friend's favorite number is ___."
  ]
}$json$::jsonb,
  true
),
(
  '9697f20a-771c-4743-809e-598e62c29d44',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My favorite number is ___'",
    "Give a reason with 'because'",
    "Talk about numbers"
  ],
  "challenge": "Tell me your favorite number and why!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  'Unit Review',
  'A1',
  'kids',
  4,
  5,
  'Review colors and numbers from Unit 4.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
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
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What colors do you remember?",
    "Can you count to ten?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7"
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE"
    },
    {
      "word": "Five",
      "bg": "#EEEDFE"
    },
    {
      "word": "Ten",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Colors & Numbers",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "How many are there?"
  ],
  "student": [
    "It is red.",
    "There are five."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [red]."
    },
    {
      "speaker": "B",
      "text": "There are [five] balls."
    },
    {
      "speaker": "A",
      "text": "My favorite [number] is ten."
    }
  ],
  "blanks": [
    "red",
    "five",
    "number"
  ]
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What color is this?"
    },
    {
      "speaker": "B",
      "text": "It is blue!"
    },
    {
      "speaker": "A",
      "text": "How many balls are there?"
    },
    {
      "speaker": "B",
      "text": "There are ten balls!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like colors and numbers! My bag is blue. I have five pencils. I can count to ten. My favorite number is seven!",
  "questions": [
    "What color is the bag?",
    "How many pencils are there?",
    "What is the favorite number?"
  ]
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is ___ (color).",
    "I have ___ ___.",
    "My favorite number is ___."
  ]
}$json$::jsonb,
  true
),
(
  'ad11a582-461b-4c97-a129-ecbe4819817f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say four colors",
    "Count from 1 to 10",
    "Say 'There are ___'",
    "Say my favorite number"
  ],
  "challenge": "Show me a colorful object and count something for me!"
}$json$::jsonb,
  true
);

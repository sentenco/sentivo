-- A1 Kids Unit 7: My Toys (5 lessons)
-- Generated from project_a1_kids_master_curriculum memory, Unit 7.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'df78f410-95d7-4173-8956-442c88954da4',
  'Toys',
  'A1',
  'kids',
  7,
  1,
  'Identify common toys.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'df78f410-95d7-4173-8956-442c88954da4',
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
  'df78f410-95d7-4173-8956-442c88954da4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "What toys do you have?",
    "What is your favorite toy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ball",
      "bg": "#FAECE7"
    },
    {
      "word": "Doll",
      "bg": "#E1F5EE"
    },
    {
      "word": "Car",
      "bg": "#EEEDFE"
    },
    {
      "word": "Blocks",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this a ball?"
  ],
  "student": [
    "It is a ball.",
    "Yes, it is a doll!"
  ],
  "note": "Point to a toy when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [ball]."
    },
    {
      "speaker": "B",
      "text": "This is a [doll]."
    },
    {
      "speaker": "A",
      "text": "This is a [car]."
    }
  ],
  "blanks": [
    "ball",
    "doll",
    "car"
  ]
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is this?"
    },
    {
      "speaker": "B",
      "text": "It is blocks!"
    },
    {
      "speaker": "A",
      "text": "What is that?"
    },
    {
      "speaker": "B",
      "text": "It is a car!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have many toys. I have a ball. I have a doll. I have a car. I have blocks too. I love my toys!",
  "questions": [
    "What toys does the writer have?",
    "Does the writer have a car?",
    "Does the writer love their toys?"
  ]
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "This is a ___.",
    "My toy box has a ___."
  ]
}$json$::jsonb,
  true
),
(
  'df78f410-95d7-4173-8956-442c88954da4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four toys",
    "Say 'This is a ___'",
    "Answer 'What is this?'"
  ],
  "challenge": "Name one toy you have at home!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Favorite Toy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  'My Favorite Toy',
  'A1',
  'kids',
  7,
  2,
  'Say a favorite toy.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
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
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What is your favorite toy?",
    "Why do you like it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kite",
      "bg": "#FAECE7"
    },
    {
      "word": "Robot",
      "bg": "#E1F5EE"
    },
    {
      "word": "Puzzle",
      "bg": "#EEEDFE"
    },
    {
      "word": "Teddy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite toy?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite toy is my robot.",
    "Because it is fun!"
  ],
  "note": "Think of your real favorite toy!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite toy is my [robot]."
    },
    {
      "speaker": "B",
      "text": "My favorite toy is my [teddy] bear."
    },
    {
      "speaker": "A",
      "text": "I like the [puzzle]."
    }
  ],
  "blanks": [
    "robot",
    "teddy",
    "puzzle"
  ]
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite toy?"
    },
    {
      "speaker": "B",
      "text": "My favorite toy is my kite."
    },
    {
      "speaker": "A",
      "text": "Why do you like it?"
    },
    {
      "speaker": "B",
      "text": "Because I can fly it outside!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite toy is my teddy bear. I like it because it is soft. My friend's favorite toy is a robot. He likes it because it moves!",
  "questions": [
    "What is the writer's favorite toy?",
    "Why does the writer like it?",
    "What is the friend's favorite toy?"
  ]
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite toy is my ___.",
    "I like it because ___.",
    "My friend's favorite toy is ___."
  ]
}$json$::jsonb,
  true
),
(
  '785034d5-6325-484c-81ff-5d97d42b2b6d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My favorite toy is ___'",
    "Give a reason with 'because'",
    "Talk about toys"
  ],
  "challenge": "Tell me your favorite toy and why you like it!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big and Small Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  'Big and Small Toys',
  'A1',
  'kids',
  7,
  3,
  'Use simple size language with toys.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
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
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Do you have a big toy?",
    "Do you have a small toy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
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
      "word": "Toy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Box",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your toy big or small?",
    "Is this a big ball?"
  ],
  "student": [
    "My toy is big.",
    "No, it is a small ball!"
  ],
  "note": "Compare two of your own toys!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This toy is [big]."
    },
    {
      "speaker": "B",
      "text": "This toy is [small]."
    },
    {
      "speaker": "A",
      "text": "I like [big] toys."
    }
  ],
  "blanks": [
    "big",
    "small",
    "big"
  ]
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your toy big or small?"
    },
    {
      "speaker": "B",
      "text": "My toy is small."
    },
    {
      "speaker": "A",
      "text": "My toy is big!"
    },
    {
      "speaker": "B",
      "text": "Big toys are fun too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a big toy car. I have a small toy car too. I like the big car more. My toy box has big toys and small toys!",
  "questions": [
    "Does the writer have a big toy car?",
    "Does the writer have a small toy car?",
    "What does the writer like more?"
  ]
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My toy is ___ (big/small).",
    "I have a big ___.",
    "I have a small ___."
  ]
}$json$::jsonb,
  true
),
(
  '40a487ef-7bad-4ced-bb09-40f65ee0e9bf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'big' and 'small'",
    "Describe toys by size",
    "Compare two toys"
  ],
  "challenge": "Show me a big toy and a small toy!"
}$json$::jsonb,
  true
);

-- Lesson 4: Toy Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9226bd85-7187-4bbc-a467-285a77f51436',
  'Toy Colors',
  'A1',
  'kids',
  7,
  4,
  'Combine toy vocabulary with colors.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
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
  '9226bd85-7187-4bbc-a467-285a77f51436',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌈",
  "questions": [
    "What color is your favorite toy?",
    "Do you have a red toy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red Ball",
      "bg": "#FAECE7"
    },
    {
      "word": "Blue Car",
      "bg": "#E1F5EE"
    },
    {
      "word": "Green Kite",
      "bg": "#EEEDFE"
    },
    {
      "word": "Yellow Doll",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is your ball?",
    "Is your car blue?"
  ],
  "student": [
    "My ball is red.",
    "Yes, my car is blue!"
  ],
  "note": "Describe a toy by its color and name!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [red] ball."
    },
    {
      "speaker": "B",
      "text": "I have a [blue] car."
    },
    {
      "speaker": "A",
      "text": "I have a [green] kite."
    }
  ],
  "blanks": [
    "red",
    "blue",
    "green"
  ]
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What color is your favorite toy?"
    },
    {
      "speaker": "B",
      "text": "My favorite toy is a yellow doll."
    },
    {
      "speaker": "A",
      "text": "I have a red ball!"
    },
    {
      "speaker": "B",
      "text": "Red is a nice color!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a red ball. I have a blue car. I have a green kite. My toys have many colors. I like colorful toys!",
  "questions": [
    "What color is the ball?",
    "What color is the car?",
    "What color is the kite?"
  ]
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ ___ (color + toy).",
    "My favorite colorful toy is ___.",
    "My toy box has many ___."
  ]
}$json$::jsonb,
  true
),
(
  '9226bd85-7187-4bbc-a467-285a77f51436',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe toys with colors",
    "Say 'I have a ___ ___'",
    "Name colorful toys"
  ],
  "challenge": "Describe one of your toys using a color!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  'Unit Review',
  'A1',
  'kids',
  7,
  5,
  'Review toy vocabulary from Unit 7.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
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
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "What toys do you remember?",
    "What is your favorite toy?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ball",
      "bg": "#FAECE7"
    },
    {
      "word": "Doll",
      "bg": "#E1F5EE"
    },
    {
      "word": "Robot",
      "bg": "#EEEDFE"
    },
    {
      "word": "Kite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Toy Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "What is your favorite toy?"
  ],
  "student": [
    "It is a ball.",
    "My favorite toy is my robot."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [ball]."
    },
    {
      "speaker": "B",
      "text": "My favorite toy is my [robot]."
    },
    {
      "speaker": "A",
      "text": "I have a [red] ball."
    }
  ],
  "blanks": [
    "ball",
    "robot",
    "red"
  ]
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite toy?"
    },
    {
      "speaker": "B",
      "text": "My favorite toy is my kite."
    },
    {
      "speaker": "A",
      "text": "What color is it?"
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
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have many toys. I have a red ball. I have a blue car. My favorite toy is my teddy bear because it is soft. I love my toys!",
  "questions": [
    "What color is the ball?",
    "What color is the car?",
    "What is the favorite toy?"
  ]
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "My favorite toy is my ___.",
    "My toy is ___ (color)."
  ]
}$json$::jsonb,
  true
),
(
  '46759245-9ff3-43e1-80ec-651b12372f0d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four toys",
    "Say 'My favorite toy is ___'",
    "Describe toys by size",
    "Describe toys by color"
  ],
  "challenge": "Show me your favorite toy and describe it!"
}$json$::jsonb,
  true
);

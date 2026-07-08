-- A1 Kids Unit 5: Classroom Things (5 lessons)
-- Generated from project_a1_kids_master_curriculum memory, Unit 5.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Classroom Objects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  'Classroom Objects',
  'A1',
  'kids',
  5,
  1,
  'Identify common classroom objects.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
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
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "What's inside your backpack?",
    "What do you use at school?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pencil",
      "bg": "#FAECE7"
    },
    {
      "word": "Book",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chair",
      "bg": "#EEEDFE"
    },
    {
      "word": "Desk",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this a pencil?"
  ],
  "student": [
    "It is a pencil.",
    "Yes, it is a book!"
  ],
  "note": "Point to a real object when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [pencil]."
    },
    {
      "speaker": "B",
      "text": "This is a [book]."
    },
    {
      "speaker": "A",
      "text": "This is a [chair]."
    }
  ],
  "blanks": [
    "pencil",
    "book",
    "chair"
  ]
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
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
      "text": "It is a desk."
    },
    {
      "speaker": "A",
      "text": "What is that?"
    },
    {
      "speaker": "B",
      "text": "It is a chair!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my classroom. I see a pencil. I see a book. I see a chair. I see a desk. I like my classroom!",
  "questions": [
    "What does the writer see first?",
    "Is there a chair in the classroom?",
    "Does the writer like the classroom?"
  ]
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "In my classroom, I see a ___.",
    "My favorite classroom object is ___."
  ]
}$json$::jsonb,
  true
),
(
  '6ae0acfd-46e3-4416-a5b4-f08cb5fb2c61',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four classroom objects",
    "Say 'This is a ___'",
    "Answer 'What is this?'"
  ],
  "challenge": "Point to three objects near you and name them!"
}$json$::jsonb,
  true
);

-- Lesson 2: This Is My Pencil
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  'This Is My Pencil',
  'A1',
  'kids',
  5,
  2,
  'Say and identify ownership with classroom items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
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
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✏️",
  "questions": [
    "Do you have a pencil?",
    "What is your favorite school item?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bag",
      "bg": "#FAECE7"
    },
    {
      "word": "Ruler",
      "bg": "#E1F5EE"
    },
    {
      "word": "Eraser",
      "bg": "#EEEDFE"
    },
    {
      "word": "Pen",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this your pencil?",
    "Is this your bag?"
  ],
  "student": [
    "Yes, this is my pencil.",
    "No, this is not my bag."
  ],
  "note": "Point to your own things when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [bag]."
    },
    {
      "speaker": "B",
      "text": "This is my [ruler]."
    },
    {
      "speaker": "A",
      "text": "This is my [eraser]."
    }
  ],
  "blanks": [
    "bag",
    "ruler",
    "eraser"
  ]
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is this your pencil?"
    },
    {
      "speaker": "B",
      "text": "Yes, this is my pencil."
    },
    {
      "speaker": "A",
      "text": "Is this your pen?"
    },
    {
      "speaker": "B",
      "text": "No, this is not my pen!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my pencil. This is my bag. This is my ruler. These are my things for school. I take care of my things!",
  "questions": [
    "What things does the writer have?",
    "Does the writer take care of their things?",
    "Is the ruler the writer's?"
  ]
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "This is not my ___.",
    "I take care of my ___."
  ]
}$json$::jsonb,
  true
),
(
  'e0d82d30-584d-4b59-b583-f5dd0f30406a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my ___'",
    "Say 'This is not my ___'",
    "Talk about owning school items"
  ],
  "challenge": "Show me something that is yours and say the sentence!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's in the Classroom?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  'What''s in the Classroom?',
  'A1',
  'kids',
  5,
  3,
  'Recognize classroom items in a picture.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
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
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏫",
  "questions": [
    "What do you see in a classroom?",
    "Is there a board in your classroom?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Board",
      "bg": "#FAECE7"
    },
    {
      "word": "Window",
      "bg": "#E1F5EE"
    },
    {
      "word": "Door",
      "bg": "#EEEDFE"
    },
    {
      "word": "Clock",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you see?",
    "Where is the door?"
  ],
  "student": [
    "I see a board.",
    "The door is there!"
  ],
  "note": "Look around your room when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I see a [board]."
    },
    {
      "speaker": "B",
      "text": "I see a [window]."
    },
    {
      "speaker": "A",
      "text": "I see a [clock]."
    }
  ],
  "blanks": [
    "board",
    "window",
    "clock"
  ]
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you see in the classroom?"
    },
    {
      "speaker": "B",
      "text": "I see a board and a window."
    },
    {
      "speaker": "A",
      "text": "I see a door and a clock!"
    },
    {
      "speaker": "B",
      "text": "Our classroom is nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My classroom has a big board. It has two windows. It has one door. It has a clock on the wall. I like my classroom!",
  "questions": [
    "How many windows does the classroom have?",
    "How many doors does it have?",
    "Where is the clock?"
  ]
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My classroom has a ___.",
    "I see a ___ on the wall.",
    "My classroom is ___."
  ]
}$json$::jsonb,
  true
),
(
  'a091c420-7843-443f-a0da-fc6ef2b3a282',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name classroom features",
    "Say 'I see a ___'",
    "Describe a classroom"
  ],
  "challenge": "Describe your classroom or room to me right now!"
}$json$::jsonb,
  true
);

-- Lesson 4: In My Bag
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  'In My Bag',
  'A1',
  'kids',
  5,
  4,
  'Name school things in a bag.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
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
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "What's inside your school bag?",
    "How many things do you have in your bag?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Notebook",
      "bg": "#FAECE7"
    },
    {
      "word": "Sharpener",
      "bg": "#E1F5EE"
    },
    {
      "word": "Snack",
      "bg": "#EEEDFE"
    },
    {
      "word": "Water",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's in your bag?",
    "Do you have a snack?"
  ],
  "student": [
    "I have a notebook.",
    "Yes, I have a snack!"
  ],
  "note": "Think about what's really in your bag!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In my bag, I have a [notebook]."
    },
    {
      "speaker": "B",
      "text": "I have a [sharpener]."
    },
    {
      "speaker": "A",
      "text": "I have a [snack]."
    }
  ],
  "blanks": [
    "notebook",
    "sharpener",
    "snack"
  ]
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a notebook and a pencil."
    },
    {
      "speaker": "A",
      "text": "I have a snack and water!"
    },
    {
      "speaker": "B",
      "text": "My bag is heavy!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In my bag, I have a notebook. I have a sharpener. I have a snack and water. My bag is ready for school!",
  "questions": [
    "What does the writer have in their bag?",
    "Does the writer have a snack?",
    "Is the bag ready for school?"
  ]
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my bag, I have a ___.",
    "I also have a ___.",
    "My bag is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e97a514f-5469-4336-9c7e-e35f6a84ce4c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'In my bag, I have a ___'",
    "Name school supplies",
    "Talk about what's in a bag"
  ],
  "challenge": "Tell me three things in your bag right now!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '567054b7-743a-4f9f-9011-84606984aebf',
  'Unit Review',
  'A1',
  'kids',
  5,
  5,
  'Review classroom vocabulary from Unit 5.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '567054b7-743a-4f9f-9011-84606984aebf',
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
  '567054b7-743a-4f9f-9011-84606984aebf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏫",
  "questions": [
    "What classroom words do you remember?",
    "What's in your bag?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pencil",
      "bg": "#FAECE7"
    },
    {
      "word": "Book",
      "bg": "#E1F5EE"
    },
    {
      "word": "Board",
      "bg": "#EEEDFE"
    },
    {
      "word": "Notebook",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Classroom Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "What's in your bag?"
  ],
  "student": [
    "This is a pencil.",
    "I have a notebook."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [pencil]."
    },
    {
      "speaker": "B",
      "text": "I see a [board]."
    },
    {
      "speaker": "A",
      "text": "In my bag, I have a [notebook]."
    }
  ],
  "blanks": [
    "pencil",
    "board",
    "notebook"
  ]
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
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
      "text": "It is a book."
    },
    {
      "speaker": "A",
      "text": "What's in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a notebook and a pencil!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my classroom. I see a board and a clock. This is my bag. I have a notebook, a pencil, and a snack. I am ready for school!",
  "questions": [
    "What does the writer see in the classroom?",
    "What is in the writer's bag?",
    "Is the writer ready for school?"
  ]
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "In my bag, I have a ___.",
    "My classroom has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '567054b7-743a-4f9f-9011-84606984aebf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name classroom objects",
    "Say 'This is my ___'",
    "Describe a classroom",
    "Say what's in my bag"
  ],
  "challenge": "Show me your bag and tell me three things inside!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 11: My House (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms of the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  'Rooms of the House',
  'A1',
  'kids',
  11,
  1,
  'Identify the main rooms of a house.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
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
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms are in your house?",
    "Where do you sleep?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kitchen",
      "bg": "#FAECE7"
    },
    {
      "word": "Bedroom",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bathroom",
      "bg": "#EEEDFE"
    },
    {
      "word": "Living Room",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Is this the kitchen?"
  ],
  "student": [
    "This is the kitchen.",
    "Yes, this is the kitchen!"
  ],
  "note": "Think about the rooms in your own house!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the [kitchen]."
    },
    {
      "speaker": "B",
      "text": "This is the [bedroom]."
    },
    {
      "speaker": "A",
      "text": "This is the [bathroom]."
    }
  ],
  "blanks": [
    "kitchen",
    "bedroom",
    "bathroom"
  ]
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What room is this?"
    },
    {
      "speaker": "B",
      "text": "This is the living room!"
    },
    {
      "speaker": "A",
      "text": "Where do you sleep?"
    },
    {
      "speaker": "B",
      "text": "I sleep in my bedroom!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my house. This is the kitchen. This is the bedroom. This is the bathroom. This is the living room. I love my house!",
  "questions": [
    "What rooms are in the house?",
    "Does the writer love their house?",
    "Where do you cook food?"
  ]
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "I sleep in the ___.",
    "My favorite room is the ___."
  ]
}$json$::jsonb,
  true
),
(
  '2aa2f373-eeee-45fa-a183-7082fe0b002d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four rooms",
    "Say 'This is the ___'",
    "Talk about my house"
  ],
  "challenge": "Name three rooms in your house!"
}$json$::jsonb,
  true
);

-- Lesson 2: Furniture in the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  'Furniture in the House',
  'A1',
  'kids',
  11,
  2,
  'Name common furniture items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
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
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛋️",
  "questions": [
    "What furniture is in your bedroom?",
    "Do you have a sofa?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bed",
      "bg": "#FAECE7"
    },
    {
      "word": "Table",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chair",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sofa",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this a bed?"
  ],
  "student": [
    "It is a bed.",
    "Yes, it is a table!"
  ],
  "note": "Think about furniture in your own house!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [bed]."
    },
    {
      "speaker": "B",
      "text": "This is a [table]."
    },
    {
      "speaker": "A",
      "text": "This is a [sofa]."
    }
  ],
  "blanks": [
    "bed",
    "table",
    "sofa"
  ]
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
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
      "text": "It is a chair!"
    },
    {
      "speaker": "A",
      "text": "Where is the sofa?"
    },
    {
      "speaker": "B",
      "text": "The sofa is in the living room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My bedroom has a bed. My kitchen has a table and chairs. My living room has a sofa. I like my furniture!",
  "questions": [
    "What is in the bedroom?",
    "What is in the kitchen?",
    "What is in the living room?"
  ]
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My bedroom has a ___.",
    "My kitchen has a ___.",
    "My living room has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '1fc74a50-f45d-491d-93cb-690a95aad9cc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four furniture items",
    "Say what's in each room",
    "Talk about furniture"
  ],
  "challenge": "Name one piece of furniture in each room of your house!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  'Where Is It?',
  'A1',
  'kids',
  11,
  3,
  'Use simple prepositions (in/on/under) to locate objects.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
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
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔍",
  "questions": [
    "Where is your bag?",
    "Is your book on the table?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "In",
      "bg": "#FAECE7"
    },
    {
      "word": "On",
      "bg": "#E1F5EE"
    },
    {
      "word": "Under",
      "bg": "#EEEDFE"
    },
    {
      "word": "Where",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is it?",
    "Is it on the table?"
  ],
  "student": [
    "It is on the table.",
    "No, it is under the table!"
  ],
  "note": "Look around and find real objects!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The ball is [on] the table."
    },
    {
      "speaker": "B",
      "text": "The cat is [under] the table."
    },
    {
      "speaker": "A",
      "text": "The book is [in] the bag."
    }
  ],
  "blanks": [
    "on",
    "under",
    "in"
  ]
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the ball?"
    },
    {
      "speaker": "B",
      "text": "The ball is under the chair."
    },
    {
      "speaker": "A",
      "text": "Where is the book?"
    },
    {
      "speaker": "B",
      "text": "The book is on the table!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is my ball? My ball is under the table. Where is my book? My book is on the table. Where is my pencil? My pencil is in my bag!",
  "questions": [
    "Where is the ball?",
    "Where is the book?",
    "Where is the pencil?"
  ]
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is on the ___.",
    "The ___ is under the ___.",
    "The ___ is in the ___."
  ]
}$json$::jsonb,
  true
),
(
  'c4e26c8d-2aae-41d9-82f3-e6e4a4b4142c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'in', 'on', 'under'",
    "Ask 'Where is it?'",
    "Find objects in a picture"
  ],
  "challenge": "Tell me where something in your room is right now!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  'My Favorite Room',
  'A1',
  'kids',
  11,
  4,
  'Say a favorite room and give a simple reason.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
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
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
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
      "word": "Because",
      "bg": "#E1F5EE"
    },
    {
      "word": "Play",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sleep",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite room is my bedroom.",
    "Because I sleep and play there!"
  ],
  "note": "Think of your real favorite room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] room is my bedroom."
    },
    {
      "speaker": "B",
      "text": "I like it [because] it is fun."
    },
    {
      "speaker": "A",
      "text": "I [play] there."
    }
  ],
  "blanks": [
    "favorite",
    "because",
    "play"
  ]
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite room?"
    },
    {
      "speaker": "B",
      "text": "My favorite room is the living room."
    },
    {
      "speaker": "A",
      "text": "Why do you like it?"
    },
    {
      "speaker": "B",
      "text": "Because I watch TV and play there!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite room is my bedroom. I like it because I sleep and play there. My friend's favorite room is the kitchen. She likes it because she helps cook!",
  "questions": [
    "What is the writer's favorite room?",
    "Why does the writer like it?",
    "What is the friend's favorite room?"
  ]
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite room is the ___.",
    "I like it because ___.",
    "In this room, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '8f3346b5-2ad1-4551-bceb-445852a8abbb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My favorite room is ___'",
    "Give a reason with 'because'",
    "Talk about my house"
  ],
  "challenge": "Tell me your favorite room and why you like it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  'Unit Review',
  'A1',
  'kids',
  11,
  5,
  'Review house and furniture vocabulary.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
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
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms do you remember?",
    "What furniture do you remember?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kitchen",
      "bg": "#FAECE7"
    },
    {
      "word": "Bedroom",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sofa",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "What is this?"
  ],
  "student": [
    "This is the kitchen.",
    "It is a bed."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the [kitchen]."
    },
    {
      "speaker": "B",
      "text": "This is a [bed]."
    },
    {
      "speaker": "A",
      "text": "The cat is [under] the table."
    }
  ],
  "blanks": [
    "kitchen",
    "bed",
    "under"
  ]
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite room?"
    },
    {
      "speaker": "B",
      "text": "My favorite room is my bedroom!"
    },
    {
      "speaker": "A",
      "text": "Where is your bed?"
    },
    {
      "speaker": "B",
      "text": "My bed is in my bedroom!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my house. It has a kitchen, a bedroom, and a living room. My bedroom has a bed. My living room has a sofa. My favorite room is my bedroom because I sleep and play there!",
  "questions": [
    "What rooms does the house have?",
    "What is in the bedroom?",
    "What is the favorite room?"
  ]
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "My ___ has a ___.",
    "My favorite room is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ab9f4ec4-6406-4a93-bb77-f3653126c0e7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and furniture",
    "Use 'in/on/under'",
    "Say my favorite room and why"
  ],
  "challenge": "Describe your favorite room and what's in it!"
}$json$::jsonb,
  true
);

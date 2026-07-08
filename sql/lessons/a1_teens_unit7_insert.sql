-- A1 Teens Unit 7: My Room (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  'My Room',
  'A1',
  'teens',
  7,
  1,
  'Name common room objects and furniture.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
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
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛏️",
  "questions": [
    "What is in your room?",
    "Do you have a desk?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
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
      "word": "Desk",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chair",
      "bg": "#EEEDFE"
    },
    {
      "word": "Shelf",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Do you have a desk?"
  ],
  "student": [
    "It is my bed.",
    "Yes, I have a desk!"
  ],
  "note": "Look around your real room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [bed]."
    },
    {
      "speaker": "B",
      "text": "This is my [desk]."
    },
    {
      "speaker": "A",
      "text": "This is my [shelf]."
    }
  ],
  "blanks": [
    "bed",
    "desk",
    "shelf"
  ]
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your room?"
    },
    {
      "speaker": "B",
      "text": "I have a bed and a chair."
    },
    {
      "speaker": "A",
      "text": "I have a desk and a lamp!"
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my room. I have a bed. I have a desk. I have a chair. I have a shelf for my books. I like my room!",
  "questions": [
    "What does the writer's room have?",
    "Does the writer have a shelf?",
    "Does the writer like their room?"
  ]
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my room, I have a ___.",
    "This is my ___.",
    "My room has a ___."
  ]
}$json$::jsonb,
  true
),
(
  'bdeb2070-a348-4756-933c-f7e6cc43b085',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four room items",
    "Say 'This is my ___'",
    "Describe what's in my room"
  ],
  "challenge": "Tell me three things in your room!"
}$json$::jsonb,
  true
);

-- Lesson 2: In My Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  'In My Room',
  'A1',
  'teens',
  7,
  2,
  'Say where things are in a room using basic prepositions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
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
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is your bed?",
    "Is your desk next to the window?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "On",
      "bg": "#FAECE7"
    },
    {
      "word": "In",
      "bg": "#E1F5EE"
    },
    {
      "word": "Under",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next To",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is your desk?",
    "Is it next to the bed?"
  ],
  "student": [
    "It is next to the window.",
    "Yes, it is next to the bed!"
  ],
  "note": "Describe where things really are in your room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My lamp is [on] the desk."
    },
    {
      "speaker": "B",
      "text": "My shoes are [under] the bed."
    },
    {
      "speaker": "A",
      "text": "My desk is [next to] the window."
    }
  ],
  "blanks": [
    "on",
    "under",
    "next to"
  ]
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is your desk?"
    },
    {
      "speaker": "B",
      "text": "My desk is next to the window."
    },
    {
      "speaker": "A",
      "text": "Where is your bag?"
    },
    {
      "speaker": "B",
      "text": "My bag is under the desk!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My lamp is on the desk. My shoes are under the bed. My desk is next to the window. My books are in the shelf. Everything has a place!",
  "questions": [
    "Where is the lamp?",
    "Where are the shoes?",
    "Where is the desk?"
  ]
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is on the ___.",
    "My ___ is under the ___.",
    "My ___ is next to the ___."
  ]
}$json$::jsonb,
  true
),
(
  '722d541a-c454-44a4-a6ae-f8ccac177db6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'on', 'in', 'under', 'next to'",
    "Describe where things are",
    "Talk about my room's layout"
  ],
  "challenge": "Tell me where three things are in your room!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Space
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '854b636b-8c7d-4513-929e-d081643463af',
  'My Space',
  'A1',
  'teens',
  7,
  3,
  'Describe their room in simple personal terms.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '854b636b-8c7d-4513-929e-d081643463af',
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
  '854b636b-8c7d-4513-929e-d081643463af',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Is your room big or small?",
    "What color is your room?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "My Room Is",
      "bg": "#FAECE7"
    },
    {
      "word": "There Is",
      "bg": "#E1F5EE"
    },
    {
      "word": "There Are",
      "bg": "#EEEDFE"
    },
    {
      "word": "Big",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your room big?",
    "What's in your room?"
  ],
  "student": [
    "My room is small.",
    "There is a bed and a desk."
  ],
  "note": "Describe your real room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[My room is] blue."
    },
    {
      "speaker": "B",
      "text": "[There is] a poster on the wall."
    },
    {
      "speaker": "A",
      "text": "[There are] two shelves."
    }
  ],
  "blanks": [
    "My room is",
    "There is",
    "There are"
  ]
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your room big or small?"
    },
    {
      "speaker": "B",
      "text": "My room is small but nice."
    },
    {
      "speaker": "A",
      "text": "What's in your room?"
    },
    {
      "speaker": "B",
      "text": "There is a bed and there are two shelves!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My room is small. There is a bed. There is a desk. There are two shelves. There is a poster on the wall. I love my room!",
  "questions": [
    "Is the room big or small?",
    "What is in the room?",
    "How many shelves are there?"
  ]
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My room is ___.",
    "There is a ___.",
    "There are ___."
  ]
}$json$::jsonb,
  true
),
(
  '854b636b-8c7d-4513-929e-d081643463af',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My room is ___'",
    "Say 'There is' / 'There are'",
    "Describe my own room"
  ],
  "challenge": "Describe your room to me using 'There is' and 'There are'!"
}$json$::jsonb,
  true
);

-- Lesson 4: Room Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  'Room Questions',
  'A1',
  'teens',
  7,
  4,
  'Answer simple questions about their room.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
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
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What is in your room?",
    "Where is your desk?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Is In",
      "bg": "#FAECE7"
    },
    {
      "word": "Where Is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Room",
      "bg": "#EEEDFE"
    },
    {
      "word": "Photo",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your room?",
    "Where is your desk?"
  ],
  "student": [
    "There is a bed and a desk.",
    "My desk is next to the window."
  ],
  "note": "Answer about your real room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What is in] your room?"
    },
    {
      "speaker": "B",
      "text": "[Where is] your bed?"
    },
    {
      "speaker": "A",
      "text": "Look at this [photo]."
    }
  ],
  "blanks": [
    "What is in",
    "Where is",
    "photo"
  ]
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your room?"
    },
    {
      "speaker": "B",
      "text": "There is a bed, a desk, and a shelf."
    },
    {
      "speaker": "A",
      "text": "Where is your desk?"
    },
    {
      "speaker": "B",
      "text": "It's next to the window!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What is in your room? There is a bed, a desk, and a shelf. Where is your desk? It is next to the window. I like showing my room!",
  "questions": [
    "What is in the room?",
    "Where is the desk?",
    "Does the writer like showing their room?"
  ]
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What is in your room? ___.",
    "Where is your bed? ___.",
    "My favorite thing in my room is ___."
  ]
}$json$::jsonb,
  true
),
(
  '8156c248-f97e-43c5-8bbf-ad43d90cbe4a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What is in your room?'",
    "Ask 'Where is your ___?'",
    "Answer room questions"
  ],
  "challenge": "Ask me what's in my room and where my desk is!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  'Unit Review',
  'A1',
  'teens',
  7,
  5,
  'Describe their room and answer simple questions about it.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
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
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛏️",
  "questions": [
    "What room words do you remember?",
    "Can you describe your room?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
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
      "word": "Desk",
      "bg": "#E1F5EE"
    },
    {
      "word": "Shelf",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next To",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your room?",
    "Where is your desk?"
  ],
  "student": [
    "There is a bed.",
    "It is next to the window."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [bed]."
    },
    {
      "speaker": "B",
      "text": "My desk is [next to] the window."
    },
    {
      "speaker": "A",
      "text": "[There are] two shelves."
    }
  ],
  "blanks": [
    "bed",
    "next to",
    "There are"
  ]
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your room?"
    },
    {
      "speaker": "B",
      "text": "There is a bed, a desk, and a shelf."
    },
    {
      "speaker": "A",
      "text": "Where is your desk?"
    },
    {
      "speaker": "B",
      "text": "It's next to my bed!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My room is small but nice. There is a bed and a desk. My desk is next to the window. There are two shelves for my books. I love my room!",
  "questions": [
    "Is the room big or small?",
    "Where is the desk?",
    "What are the shelves for?"
  ]
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My room has a ___.",
    "My ___ is next to the ___.",
    "There are ___ in my room."
  ]
}$json$::jsonb,
  true
),
(
  '6c9ba98d-a6f7-4667-9188-a68e2dbe6a0e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name room furniture",
    "Use prepositions for location",
    "Describe my room",
    "Answer room questions"
  ],
  "challenge": "Give me a full description of your room!"
}$json$::jsonb,
  true
);

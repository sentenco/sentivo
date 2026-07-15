-- A1 Adults Unit 3: Home and Everyday Objects (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  'Rooms at Home',
  'A1',
  'adults',
  3,
  1,
  'Name rooms at home. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "How many rooms does your home have?",
    "Where is your kitchen?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
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
      "word": "Living room",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Where is your kitchen?"
  ],
  "student": [
    "This is the kitchen.",
    "My kitchen is here."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
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
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the kitchen."
    },
    {
      "speaker": "B",
      "text": "This is the bedroom."
    },
    {
      "speaker": "A",
      "text": "This is the bathroom."
    },
    {
      "speaker": "B",
      "text": "This is the living room!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is the kitchen. This is the bedroom. This is the bathroom.",
  "questions": [
    "What is the first room?",
    "What is the second room?",
    "Name all three rooms."
  ]
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "My home has a ___.",
    "I have one ___."
  ]
}$json$::jsonb,
  true
),
(
  '6ef72f2c-5aa5-4179-bc5b-af0aa17eb7b8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 rooms",
    "Say 'This is the ___'",
    "Talk about my home"
  ],
  "challenge": "Tell me the rooms in your home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Things at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  'Things at Home',
  'A1',
  'adults',
  3,
  2,
  'Name everyday objects with ''there is/are''. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛋️",
  "questions": [
    "Is there a sofa in your living room?",
    "How many chairs are there?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "There is",
      "bg": "#FAECE7"
    },
    {
      "word": "There are",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sofa",
      "bg": "#EEEDFE"
    },
    {
      "word": "Table",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your living room?",
    "Is there a table?"
  ],
  "student": [
    "There is a sofa.",
    "Yes, there is a table."
  ],
  "note": "Use the word bank: there is, there are, sofa, table.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[There is] a [sofa]."
    },
    {
      "speaker": "B",
      "text": "[There are] two chairs."
    },
    {
      "speaker": "A",
      "text": "There is a [table] too."
    }
  ],
  "blanks": [
    "there is",
    "there are",
    "table"
  ]
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your living room?"
    },
    {
      "speaker": "B",
      "text": "There is a sofa. There are two chairs. What about yours?"
    },
    {
      "speaker": "A",
      "text": "There is a table and a sofa too."
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
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a sofa in my living room. There are two chairs. There is a table too.",
  "questions": [
    "What is in the living room?",
    "How many chairs?",
    "Is there a table?"
  ]
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ in my ___.",
    "There are ___.",
    "There is a ___ too."
  ]
}$json$::jsonb,
  true
),
(
  'c5274447-6a91-4058-852c-ed5d9fe9d9e2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'there is' and 'there are'",
    "Name sofa, chair, table",
    "Describe my living room"
  ],
  "challenge": "Tell me what's in your living room!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Things Are
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  'Where Things Are',
  'A1',
  'adults',
  3,
  3,
  'Ask and answer where things are. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is your bed?",
    "What is on your table?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where is",
      "bg": "#FAECE7"
    },
    {
      "word": "In",
      "bg": "#E1F5EE"
    },
    {
      "word": "On",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is your sofa?",
    "What is on the table?"
  ],
  "student": [
    "My sofa is in the living room.",
    "A lamp is on the table."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] your bed?"
    },
    {
      "speaker": "B",
      "text": "It is [in] my bedroom."
    },
    {
      "speaker": "A",
      "text": "A lamp is [on] my table."
    }
  ],
  "blanks": [
    "where is",
    "in",
    "on"
  ]
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is your bed?"
    },
    {
      "speaker": "B",
      "text": "It is in my bedroom. Where is your sofa?"
    },
    {
      "speaker": "A",
      "text": "It is in the living room, next to the window."
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
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is my bed? It is in my bedroom. Where is the lamp? It is next to my bed.",
  "questions": [
    "Where is the bed?",
    "Where is the lamp?",
    "What word means 'beside'?"
  ]
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is in the ___.",
    "The ___ is next to my ___.",
    "Where is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  '78e0efa1-2763-4998-8cc3-d4cb80469bce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'in' and 'next to'",
    "Describe where things are at home"
  ],
  "challenge": "Ask me where something is in your home!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  'My Home',
  'A1',
  'adults',
  3,
  4,
  'Combine rooms, objects, and location into a home description. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "Do you live in an apartment or a house?",
    "Is your home comfortable?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Apartment",
      "bg": "#FAECE7"
    },
    {
      "word": "House",
      "bg": "#E1F5EE"
    },
    {
      "word": "Comfortable",
      "bg": "#EEEDFE"
    },
    {
      "word": "Show",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you live in an apartment or a house?",
    "Is it comfortable?"
  ],
  "student": [
    "I live in an apartment.",
    "Yes, it is comfortable."
  ],
  "note": "Put it all together: rooms + objects + location.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I live in an [apartment]."
    },
    {
      "speaker": "B",
      "text": "I live in a [house]."
    },
    {
      "speaker": "A",
      "text": "My home is [comfortable]."
    }
  ],
  "blanks": [
    "apartment",
    "house",
    "comfortable"
  ]
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your home."
    },
    {
      "speaker": "B",
      "text": "I live in an apartment. There is a kitchen, a bedroom, and a living room."
    },
    {
      "speaker": "A",
      "text": "There is a sofa next to the window. My home is comfortable."
    },
    {
      "speaker": "B",
      "text": "Sounds like a nice home!"
    }
  ],
  "note": "Mini talk: tell me all about your home in a few sentences."
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live in an apartment. There is a kitchen, a bedroom, and a living room. There is a sofa next to the window. My home is comfortable.",
  "questions": [
    "Does the writer live in an apartment or house?",
    "What rooms are there?",
    "Is the home comfortable?"
  ]
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live in a(n) ___.",
    "There is a ___ and a ___.",
    "My home is ___."
  ]
}$json$::jsonb,
  true
),
(
  'ac44d134-c601-4ddb-b395-51a5968efa77',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my home type",
    "Name rooms and objects",
    "Say if my home is comfortable"
  ],
  "challenge": "Tell me all about your home!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  'Unit Review',
  'A1',
  'adults',
  3,
  5,
  'Review rooms, objects, and location. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms are in your home?",
    "Is your home comfortable?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Home",
      "bg": "#FAECE7"
    },
    {
      "word": "There is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kitchen",
      "bg": "#EEEDFE"
    },
    {
      "word": "Comfortable",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your home?",
    "Is it comfortable?"
  ],
  "student": [
    "There is a kitchen and a bedroom.",
    "Yes, it is comfortable."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [home] has three rooms."
    },
    {
      "speaker": "B",
      "text": "[There is] a sofa in the living room."
    },
    {
      "speaker": "A",
      "text": "My [kitchen] is next to the living room."
    }
  ],
  "blanks": [
    "home",
    "there is",
    "kitchen"
  ]
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your home."
    },
    {
      "speaker": "B",
      "text": "My home has a kitchen and a bedroom. There is a sofa in the living room."
    },
    {
      "speaker": "A",
      "text": "My home is comfortable."
    },
    {
      "speaker": "B",
      "text": "Nice home!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My home has a kitchen and a bedroom. There is a sofa in the living room. My home is comfortable.",
  "questions": [
    "What rooms are named?",
    "What is in the living room?",
    "Is the home comfortable?"
  ]
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My home has ___.",
    "There is a ___ in the ___.",
    "My home is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e7b92db9-7d8e-4b70-9866-23057cbbd366',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and objects",
    "Say where things are",
    "Describe my home"
  ],
  "challenge": "Tell me all about your home!"
}$json$::jsonb,
  true
);

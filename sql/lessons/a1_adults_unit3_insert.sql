-- A1 Adults Unit 3: Home and Everyday Objects (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  'Rooms at Home',
  'A1',
  'adults',
  3,
  1,
  'Name common rooms and basic home vocabulary.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
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
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What rooms are in your home?",
    "Do you have an office at home?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
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
      "word": "Living Room",
      "bg": "#EEEDFE"
    },
    {
      "word": "Office",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Do you have an office?"
  ],
  "student": [
    "This is the kitchen.",
    "Yes, I have a small office."
  ],
  "note": "Think about the rooms in your own home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
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
      "text": "This is my [office]."
    }
  ],
  "blanks": [
    "kitchen",
    "bedroom",
    "office"
  ]
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What rooms are in your home?"
    },
    {
      "speaker": "B",
      "text": "I have a kitchen, a bedroom, and a living room."
    },
    {
      "speaker": "A",
      "text": "I have an office too!"
    },
    {
      "speaker": "B",
      "text": "That's useful for work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In my home, I have a kitchen. I have a bedroom. I have a living room. I have a small office. I like my home!",
  "questions": [
    "What rooms are in the home?",
    "Does the writer have an office?",
    "Does the writer like their home?"
  ]
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In my home, I have a ___.",
    "This is the ___.",
    "My favorite room is the ___."
  ]
}$json$::jsonb,
  true
),
(
  '6ec93442-94bc-4f87-8ae9-4f6550506ed9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four rooms",
    "Say 'This is the ___'",
    "Talk about my home"
  ],
  "challenge": "Name three rooms in your home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Things at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  'Things at Home',
  'A1',
  'adults',
  3,
  2,
  'Name common household objects.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
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
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What furniture is in your living room?",
    "Do you have a sofa?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Table",
      "bg": "#FAECE7"
    },
    {
      "word": "Chair",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fridge",
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
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this a table?"
  ],
  "student": [
    "It is a table.",
    "Yes, it is a chair!"
  ],
  "note": "Think about furniture in your own home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [table]."
    },
    {
      "speaker": "B",
      "text": "This is a [fridge]."
    },
    {
      "speaker": "A",
      "text": "This is a [sofa]."
    }
  ],
  "blanks": [
    "table",
    "fridge",
    "sofa"
  ]
}$json$::jsonb,
  true
),
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
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
      "text": "It is a lamp!"
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
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My kitchen has a table and a fridge. My bedroom has a bed and a lamp. My living room has a sofa. I like my furniture!",
  "questions": [
    "What is in the kitchen?",
    "What is in the bedroom?",
    "What is in the living room?"
  ]
}$json$::jsonb,
  true
),
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My kitchen has a ___.",
    "My bedroom has a ___.",
    "My living room has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '100c8b90-b89b-4fb2-9d00-de25aca7f735',
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
  "challenge": "Name one piece of furniture in each room of your home!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Things Are
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0e15ff6c-947e-4413-825e-193685ae7342',
  'Where Things Are',
  'A1',
  'adults',
  3,
  3,
  'Say where objects are using basic prepositions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0e15ff6c-947e-4413-825e-193685ae7342',
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
  '0e15ff6c-947e-4413-825e-193685ae7342',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Where is your phone?",
    "Is your bag on the table?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '0e15ff6c-947e-4413-825e-193685ae7342',
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
  '0e15ff6c-947e-4413-825e-193685ae7342',
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
  '0e15ff6c-947e-4413-825e-193685ae7342',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The keys are [on] the table."
    },
    {
      "speaker": "B",
      "text": "The shoes are [under] the bed."
    },
    {
      "speaker": "A",
      "text": "The lamp is [next to] the sofa."
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
  '0e15ff6c-947e-4413-825e-193685ae7342',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where are your keys?"
    },
    {
      "speaker": "B",
      "text": "My keys are on the table."
    },
    {
      "speaker": "A",
      "text": "Where is your bag?"
    },
    {
      "speaker": "B",
      "text": "My bag is under the chair!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0e15ff6c-947e-4413-825e-193685ae7342',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where are my keys? My keys are on the table. Where is my bag? My bag is under the chair. Where is my phone? My phone is next to the lamp!",
  "questions": [
    "Where are the keys?",
    "Where is the bag?",
    "Where is the phone?"
  ]
}$json$::jsonb,
  true
),
(
  '0e15ff6c-947e-4413-825e-193685ae7342',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is on the ___.",
    "The ___ is under the ___.",
    "The ___ is next to the ___."
  ]
}$json$::jsonb,
  true
),
(
  '0e15ff6c-947e-4413-825e-193685ae7342',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'on', 'in', 'under', 'next to'",
    "Ask 'Where is it?'",
    "Find objects in a picture"
  ],
  "challenge": "Tell me where something in your home is right now!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  'My Home',
  'A1',
  'adults',
  3,
  4,
  'Give a short simple description of their home.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
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
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Is your home big or small?",
    "How many rooms does your home have?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "My Home Has",
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
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your home big?",
    "What's in your home?"
  ],
  "student": [
    "My home is small.",
    "There is a kitchen and a bedroom."
  ],
  "note": "Describe your real home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[My home has] three rooms."
    },
    {
      "speaker": "B",
      "text": "[There is] a balcony."
    },
    {
      "speaker": "A",
      "text": "[There are] two bedrooms."
    }
  ],
  "blanks": [
    "My home has",
    "There is",
    "There are"
  ]
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your home big or small?"
    },
    {
      "speaker": "B",
      "text": "My home is small but comfortable."
    },
    {
      "speaker": "A",
      "text": "What's in your home?"
    },
    {
      "speaker": "B",
      "text": "There is a kitchen and there are two bedrooms!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My home is small. There is a kitchen. There is a living room. There are two bedrooms. I like my home.",
  "questions": [
    "Is the home big or small?",
    "What is in the home?",
    "How many bedrooms are there?"
  ]
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My home is ___.",
    "There is a ___.",
    "There are ___."
  ]
}$json$::jsonb,
  true
),
(
  'b508fa93-8bc9-47da-9494-3d323f058f45',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My home has ___'",
    "Say 'There is' / 'There are'",
    "Describe my own home"
  ],
  "challenge": "Describe your home to me using 'There is' and 'There are'!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  'Unit Review',
  'A1',
  'adults',
  3,
  5,
  'Describe a home and answer simple questions about it.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
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
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What room words do you remember?",
    "Can you describe your home?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
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
      "word": "Table",
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
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your home?",
    "Where is your sofa?"
  ],
  "student": [
    "There is a kitchen.",
    "It is in the living room."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
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
      "text": "This is a [table]."
    },
    {
      "speaker": "A",
      "text": "[There are] two bedrooms."
    }
  ],
  "blanks": [
    "kitchen",
    "table",
    "There are"
  ]
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your home?"
    },
    {
      "speaker": "B",
      "text": "There is a kitchen, a living room, and two bedrooms."
    },
    {
      "speaker": "A",
      "text": "Where is your sofa?"
    },
    {
      "speaker": "B",
      "text": "It's in the living room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My home is small but nice. There is a kitchen and a living room. There are two bedrooms. My sofa is in the living room, next to the window. I like my home!",
  "questions": [
    "Is the home big or small?",
    "What rooms are there?",
    "Where is the sofa?"
  ]
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My home has a ___.",
    "My ___ is next to the ___.",
    "There are ___ in my home."
  ]
}$json$::jsonb,
  true
),
(
  '25416f06-9c0b-404a-b798-f0e2ed3086e2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and furniture",
    "Use prepositions for location",
    "Describe my home",
    "Answer home questions"
  ],
  "challenge": "Give me a full description of your home!"
}$json$::jsonb,
  true
);

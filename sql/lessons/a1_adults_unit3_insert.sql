-- A1 Adults Unit 3: Home and Everyday Objects (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  'Rooms at Home',
  'A1',
  'adults',
  3,
  1,
  'Name rooms at home. [Foundation, L1, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'This is the kitchen' or 'This is a kitchen of my house'?"
    },
    {
      "speaker": "B",
      "text": "'This is the kitchen' is correct and more natural."
    },
    {
      "speaker": "A",
      "text": "Good. What room is this?"
    },
    {
      "speaker": "B",
      "text": "This is the living room."
    }
  ],
  "note": "Choose the more natural sentence first, then name each room shown."
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  'Things at Home',
  'A1',
  'adults',
  3,
  2,
  'Name everyday objects with ''there is/are''. [Foundation, L2, format M: read and identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a sofa in my living room."
    },
    {
      "speaker": "B",
      "text": "There are two chairs."
    },
    {
      "speaker": "A",
      "text": "There is a table too."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Read the model line, then say the same pattern about your own living room."
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  'Where Things Are',
  'A1',
  'adults',
  3,
  3,
  'Ask and answer where things are. [Foundation, L3, format R: freer, less-scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Welcome! Let me show you around my home."
    },
    {
      "speaker": "B",
      "text": "Where is the kitchen?"
    },
    {
      "speaker": "A",
      "text": "It's next to the living room. The bathroom is upstairs."
    },
    {
      "speaker": "B",
      "text": "Now show me around your own home!"
    }
  ],
  "note": "Freer role-play: after practicing, give your own short 'tour' of your home in your own words."
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  'My Home',
  'A1',
  'adults',
  3,
  4,
  'Combine rooms, objects, and location into a home description. [Foundation, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I live in a(n) [apartment]."
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you live in an apartment or a house, and is it comfortable?"
    },
    {
      "speaker": "B",
      "text": "I live in a(n) ___. It is ___."
    },
    {
      "speaker": "A",
      "text": "What is your favorite room, and why?"
    },
    {
      "speaker": "B",
      "text": "My favorite room is ___, because ___."
    }
  ],
  "note": "Fill in your own answers -- no word bank this time. Say your full answers out loud."
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  'Unit Review',
  'A1',
  'adults',
  3,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
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

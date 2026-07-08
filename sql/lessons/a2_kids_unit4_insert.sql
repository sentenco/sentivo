-- A2 Kids Unit 4: Places in Town (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places Near Me
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  'Places Near Me',
  'A2',
  'kids',
  4,
  1,
  'Name common places in town and what people do there.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "What places are near your home?",
    "Do you like the park?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Park",
      "bg": "#FAECE7"
    },
    {
      "word": "Library",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bakery",
      "bg": "#EEEDFE"
    },
    {
      "word": "Pool",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can you do at the park?",
    "What is near your home?"
  ],
  "student": [
    "You can play at the park.",
    "The library is near my home."
  ],
  "note": "Think of the places near your home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "You can play at the [park]."
    },
    {
      "speaker": "B",
      "text": "You can read books at the [library]."
    },
    {
      "speaker": "A",
      "text": "You can buy bread at the [bakery]."
    }
  ],
  "blanks": [
    "park",
    "library",
    "bakery"
  ]
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What places are near your home?"
    },
    {
      "speaker": "B",
      "text": "There is a park and a library near my home."
    },
    {
      "speaker": "A",
      "text": "You can swim at the pool and buy bread at the bakery."
    },
    {
      "speaker": "B",
      "text": "I love the bakery, the bread smells great!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My town has many places. You can play football at the park. You can read books at the library. You can swim at the pool. You can buy fresh bread at the bakery. I love my town!",
  "questions": [
    "What can you do at the park?",
    "What can you do at the library?",
    "What can you buy at the bakery?"
  ]
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You can ___ at the park.",
    "You can ___ at the library.",
    "My favorite place in town is ___."
  ]
}$json$::jsonb,
  true
),
(
  '277fb774-3ebb-46f9-92d9-3713aa561859',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in town",
    "Say 'You can ___ at the ___'",
    "Talk about my favorite place"
  ],
  "challenge": "Tell me your favorite place in town and why!"
}$json$::jsonb,
  true
);

-- Lesson 2: Finding Places
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  'Finding Places',
  'A2',
  'kids',
  4,
  2,
  'Understand and give simple directions with next to, between, near.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗺️",
  "questions": [
    "What is next to your house?",
    "Is the park near your school?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Next to",
      "bg": "#FAECE7"
    },
    {
      "word": "Between",
      "bg": "#E1F5EE"
    },
    {
      "word": "Near",
      "bg": "#EEEDFE"
    },
    {
      "word": "Map",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the library?",
    "Is it near the park?"
  ],
  "student": [
    "The library is next to the park.",
    "Yes, it is near the school."
  ],
  "note": "Use a map to practice giving directions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The bakery is [next to] the library."
    },
    {
      "speaker": "B",
      "text": "The pool is [between] the park and the school."
    },
    {
      "speaker": "A",
      "text": "My house is [near] the bakery."
    }
  ],
  "blanks": [
    "next to",
    "between",
    "near"
  ]
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the library?"
    },
    {
      "speaker": "B",
      "text": "The library is next to the park."
    },
    {
      "speaker": "A",
      "text": "The pool is between the school and the bakery."
    },
    {
      "speaker": "B",
      "text": "Now I can find it!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Here are three clues. Clue one: this place is next to the park and has books. Clue two: this place is between the school and the pool and sells bread. Clue three: this place is near my house and has water for swimming.",
  "questions": [
    "What is next to the park?",
    "What is between the school and the pool?",
    "What is near the writer's house?"
  ]
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is next to the ___.",
    "The ___ is between ___ and ___.",
    "My house is near the ___."
  ]
}$json$::jsonb,
  true
),
(
  'f9a6e225-1b90-42dc-9f32-d9c26e476d21',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'next to', 'between', 'near'",
    "Give simple directions",
    "Understand a map clue"
  ],
  "challenge": "Give me directions to a place near your home!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Town Is Bigger
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  'My Town Is Bigger',
  'A2',
  'kids',
  4,
  3,
  'Compare places in town using comparative adjectives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏘️",
  "questions": [
    "Is the park bigger than the pool?",
    "Is your town quiet or busy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bigger",
      "bg": "#FAECE7"
    },
    {
      "word": "Smaller",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quieter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Busier",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the park bigger than the playground?",
    "Which place is quieter?"
  ],
  "student": [
    "The park is bigger than the playground.",
    "The museum is quieter than the pool."
  ],
  "note": "Compare two places in town!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The park is [bigger] than the playground."
    },
    {
      "speaker": "B",
      "text": "The museum is [quieter] than the pool."
    },
    {
      "speaker": "A",
      "text": "My town is [busier] than my village."
    }
  ],
  "blanks": [
    "bigger",
    "quieter",
    "busier"
  ]
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is the park bigger than the playground?"
    },
    {
      "speaker": "B",
      "text": "Yes, the park is bigger and busier."
    },
    {
      "speaker": "A",
      "text": "The museum is quieter than the pool."
    },
    {
      "speaker": "B",
      "text": "I like quiet places better!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two neighborhoods are different. Mia lives near the city center. It is busier and noisier. Leo lives near the countryside. It is quieter and smaller. Mia likes the shops, but Leo likes the quiet.",
  "questions": [
    "Where does Mia live?",
    "Is Leo's neighborhood busier or quieter?",
    "What does Mia like about her neighborhood?"
  ]
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is bigger than the ___.",
    "My town is ___ than ___.",
    "I like ___ because it is ___."
  ]
}$json$::jsonb,
  true
),
(
  '3205277c-f471-42c0-a5ac-6dc7b04c70c2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare places with adjectives",
    "Say what I like about my town",
    "Use bigger/smaller/quieter/busier"
  ],
  "challenge": "Tell me the best place in town and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Day in Town
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  'A Day in Town',
  'A2',
  'kids',
  4,
  4,
  'Sequence a trip around town using first, then, after that, finally.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚶",
  "questions": [
    "Where do you go first when you go to town?",
    "What do you do on a town trip?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Visit",
      "bg": "#FAECE7"
    },
    {
      "word": "Trip",
      "bg": "#E1F5EE"
    },
    {
      "word": "Around town",
      "bg": "#EEEDFE"
    },
    {
      "word": "Errands",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in town?",
    "Where do you go next?"
  ],
  "student": [
    "First, we go to the bakery.",
    "Then, we go to the park."
  ],
  "note": "Plan your trip around town in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], we go to the bakery."
    },
    {
      "speaker": "B",
      "text": "[Then], we go to the park."
    },
    {
      "speaker": "A",
      "text": "[Finally], we go home."
    }
  ],
  "blanks": [
    "first",
    "then",
    "finally"
  ]
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do first on a town trip?"
    },
    {
      "speaker": "B",
      "text": "First, we go to the bakery. Then, we go to the library."
    },
    {
      "speaker": "A",
      "text": "After that, we play at the park. Finally, we go home."
    },
    {
      "speaker": "B",
      "text": "That sounds like a fun day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Saturday was a busy day for my family. First, we went to the bakery for bread. Then, we visited the library. After that, we played at the park. Finally, we went home for dinner.",
  "questions": [
    "Where did the family go first?",
    "What did they do after the library?",
    "What did they do finally?"
  ]
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we go to ___.",
    "Then, we go to ___.",
    "Finally, we ___."
  ]
}$json$::jsonb,
  true
),
(
  'bfcbc340-6b60-422a-be46-60b3b92aa112',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence a town trip",
    "Use first/then/after that/finally",
    "Talk about places I visit"
  ],
  "challenge": "Tell me about a trip around your town in order!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  'Unit Review',
  'A2',
  'kids',
  4,
  5,
  'Review town places, directions, comparisons, and trip sequencing.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "What places are in your town?",
    "What do you do first on a trip?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Town",
      "bg": "#FAECE7"
    },
    {
      "word": "Near",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bigger",
      "bg": "#EEEDFE"
    },
    {
      "word": "First",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite place in town?",
    "Where is it?"
  ],
  "student": [
    "My favorite place is the park.",
    "It is next to the library."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [town] has a big park."
    },
    {
      "speaker": "B",
      "text": "The bakery is [near] my house."
    },
    {
      "speaker": "A",
      "text": "The park is [bigger] than the playground."
    }
  ],
  "blanks": [
    "town",
    "near",
    "bigger"
  ]
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite place in town?"
    },
    {
      "speaker": "B",
      "text": "My favorite place is the park. It is bigger than the playground."
    },
    {
      "speaker": "A",
      "text": "First, we go to the bakery, then we go to the park."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great town trip!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love my town. There is a big park near my house, next to the library. First, I go to the library. Then, I play at the park. The park is bigger and busier than the playground near school.",
  "questions": [
    "What is next to the library?",
    "What does the writer do first?",
    "Is the park bigger or smaller than the playground?"
  ]
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My town has ___.",
    "The ___ is near ___.",
    "I like my town because ___."
  ]
}$json$::jsonb,
  true
),
(
  '8ca10648-4e68-4d1f-a67f-d64a1c0beb7f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in town",
    "Give directions",
    "Compare places",
    "Sequence a trip"
  ],
  "challenge": "Tell me all about places in your town!"
}$json$::jsonb,
  true
);

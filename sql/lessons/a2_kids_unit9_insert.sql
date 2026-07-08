-- A2 Kids Unit 9: Trips, Holidays, and Travel (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Ways to Travel
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd821303e-81ab-4385-8f30-b68d265fed15',
  'Ways to Travel',
  'A2',
  'kids',
  9,
  1,
  'Name common ways to travel and say where they go.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
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
  'd821303e-81ab-4385-8f30-b68d265fed15',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚌",
  "questions": [
    "How do you go to school?",
    "Have you traveled by plane?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bus",
      "bg": "#FAECE7"
    },
    {
      "word": "Train",
      "bg": "#E1F5EE"
    },
    {
      "word": "Boat",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plane",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you go to the city?",
    "Where do you go by train?"
  ],
  "student": [
    "I go to the city by bus.",
    "I go to my grandma's by train."
  ],
  "note": "Think about how you travel to different places!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go to school by [bus]."
    },
    {
      "speaker": "B",
      "text": "I go to the city by [train]."
    },
    {
      "speaker": "A",
      "text": "We go on holiday by [plane]."
    }
  ],
  "blanks": [
    "bus",
    "train",
    "plane"
  ]
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you go to school?"
    },
    {
      "speaker": "B",
      "text": "I go by bus. How do you go on holiday?"
    },
    {
      "speaker": "A",
      "text": "We go by plane. Last year we went by boat!"
    },
    {
      "speaker": "B",
      "text": "That sounds exciting!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four children travel differently. Sam goes to school by bus. Mia goes to the city by train. Leo goes on holiday by plane. Ana goes fishing with her dad by boat. Everyone travels in a different way!",
  "questions": [
    "How does Sam go to school?",
    "How does Mia go to the city?",
    "How does Ana go fishing?"
  ]
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go to ___ by ___.",
    "I want to travel by ___.",
    "My favorite way to travel is ___."
  ]
}$json$::jsonb,
  true
),
(
  'd821303e-81ab-4385-8f30-b68d265fed15',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name ways to travel",
    "Say 'I go to ___ by ___'",
    "Talk about my favorite transport"
  ],
  "challenge": "Tell me how you travel to three different places!"
}$json$::jsonb,
  true
);

-- Lesson 2: Holiday Photos
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  'Holiday Photos',
  'A2',
  'kids',
  9,
  2,
  'Talk about a simple holiday using simple past verbs.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
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
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📸",
  "questions": [
    "Where did you go on your last holiday?",
    "Did you visit family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Visited",
      "bg": "#FAECE7"
    },
    {
      "word": "Stayed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Climbed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Watched",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where did you go on holiday?",
    "What did you do there?"
  ],
  "student": [
    "I visited my grandma.",
    "I climbed a small hill."
  ],
  "note": "Think about your last holiday!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last holiday, I [visited] my grandma."
    },
    {
      "speaker": "B",
      "text": "I [stayed] at a hotel."
    },
    {
      "speaker": "A",
      "text": "We [climbed] a mountain."
    }
  ],
  "blanks": [
    "visited",
    "stayed",
    "climbed"
  ]
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where did you go on your last holiday?"
    },
    {
      "speaker": "B",
      "text": "First, we visited my grandma. Then, we stayed at her house."
    },
    {
      "speaker": "A",
      "text": "After that, we climbed a small hill. Finally, we watched the sunset."
    },
    {
      "speaker": "B",
      "text": "What a lovely holiday!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last summer, my family had a holiday. First, we visited my grandma in the countryside. Then, we stayed at her house for three days. After that, we climbed a small hill. Finally, we watched the sunset together.",
  "questions": [
    "Who did the family visit?",
    "How many days did they stay?",
    "What did they watch finally?"
  ]
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last holiday, I visited ___.",
    "I stayed at ___.",
    "We watched ___."
  ]
}$json$::jsonb,
  true
),
(
  '0636d960-5050-46b4-8b31-efc1137b30d6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: visited, stayed, climbed, watched",
    "Tell a holiday story in order",
    "Talk about a real or past trip"
  ],
  "challenge": "Tell me about your last holiday!"
}$json$::jsonb,
  true
);

-- Lesson 3: Beach or Mountains?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  'Beach or Mountains?',
  'A2',
  'kids',
  9,
  3,
  'Compare holiday places using basic comparative language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
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
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏖️",
  "questions": [
    "Do you prefer the beach or the mountains?",
    "Is the beach hotter than the mountains?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hotter",
      "bg": "#FAECE7"
    },
    {
      "word": "Colder",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quieter",
      "bg": "#EEEDFE"
    },
    {
      "word": "More exciting",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the beach hotter than the mountains?",
    "Which place do you prefer?"
  ],
  "student": [
    "Yes, the beach is hotter.",
    "I prefer the mountains because they are quieter."
  ],
  "note": "Compare two holiday places!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The beach is [hotter] than the mountains."
    },
    {
      "speaker": "B",
      "text": "The mountains are [quieter] than the beach."
    },
    {
      "speaker": "A",
      "text": "The beach is [more exciting] for me."
    }
  ],
  "blanks": [
    "hotter",
    "quieter",
    "more exciting"
  ]
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you prefer the beach or the mountains?"
    },
    {
      "speaker": "B",
      "text": "I prefer the beach because it is hotter and more exciting."
    },
    {
      "speaker": "A",
      "text": "I prefer the mountains because they are quieter and colder."
    },
    {
      "speaker": "B",
      "text": "We like different things!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two families go on holiday. The Smiths go to the beach. It is hotter and more exciting, with lots of swimming. The Browns go to the mountains. It is colder and quieter, with lots of walking. Both families have a great time.",
  "questions": [
    "Where do the Smiths go?",
    "Is the beach hotter or colder than the mountains?",
    "What do the Browns do in the mountains?"
  ]
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The beach is ___ than the mountains.",
    "I prefer ___ because ___.",
    "On holiday, I like places that are ___."
  ]
}$json$::jsonb,
  true
),
(
  '37e93441-a7d8-45f0-a7da-5609028acf2e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare holiday places",
    "Use comparative adjectives",
    "Give my holiday preference"
  ],
  "challenge": "Tell me if you prefer the beach or the mountains, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Dream Trip
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  'My Dream Trip',
  'A2',
  'kids',
  9,
  4,
  'Write a short dream trip plan using simple connectors and sequencing words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
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
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✈️",
  "questions": [
    "Where is your dream trip?",
    "What do you want to explore?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dream",
      "bg": "#FAECE7"
    },
    {
      "word": "Destination",
      "bg": "#E1F5EE"
    },
    {
      "word": "Explore",
      "bg": "#EEEDFE"
    },
    {
      "word": "Adventure",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is your dream destination?",
    "What will you do there?"
  ],
  "student": [
    "My dream destination is Japan.",
    "I will explore the city."
  ],
  "note": "Think about your dream trip!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [dream] trip is to the mountains."
    },
    {
      "speaker": "B",
      "text": "My [destination] is a big city."
    },
    {
      "speaker": "A",
      "text": "I want to [explore] new places."
    }
  ],
  "blanks": [
    "dream",
    "destination",
    "explore"
  ]
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is your dream destination?"
    },
    {
      "speaker": "B",
      "text": "My dream destination is Japan. First, I will fly by plane."
    },
    {
      "speaker": "A",
      "text": "Then, I will explore the city because it looks exciting."
    },
    {
      "speaker": "B",
      "text": "That sounds like an amazing adventure!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My dream trip is to the mountains. First, I will travel by train. Then, I will stay in a small cabin. After that, I will climb and explore because I love adventure. Finally, I will watch the stars at night.",
  "questions": [
    "Where is the dream trip?",
    "How will the writer travel?",
    "What will the writer do finally?"
  ]
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My dream trip is to ___.",
    "First, I will ___.",
    "I want to go because ___."
  ]
}$json$::jsonb,
  true
),
(
  '54d3fd82-4444-4937-befe-29a5b40b32a9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Plan a dream trip with sequencing words",
    "Use 'because' to explain",
    "Write 3-4 connected sentences"
  ],
  "challenge": "Tell me about your dream trip!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  'Unit Review',
  'A2',
  'kids',
  9,
  5,
  'Review transport, holidays, comparisons, and a dream trip.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
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
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧳",
  "questions": [
    "How do you like to travel?",
    "What is your dream destination?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Travel",
      "bg": "#FAECE7"
    },
    {
      "word": "Holiday",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hotter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Dream",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you travel?",
    "What is your dream trip?"
  ],
  "student": [
    "I travel by plane.",
    "My dream trip is to the beach."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like to [travel] by train."
    },
    {
      "speaker": "B",
      "text": "Last [holiday], I visited my grandma."
    },
    {
      "speaker": "A",
      "text": "The beach is [hotter] than the mountains."
    }
  ],
  "blanks": [
    "travel",
    "holiday",
    "hotter"
  ]
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you like to travel?"
    },
    {
      "speaker": "B",
      "text": "I like to travel by plane because it is fast and exciting."
    },
    {
      "speaker": "A",
      "text": "Last holiday, I visited the mountains. It was quieter than the city."
    },
    {
      "speaker": "B",
      "text": "My dream trip is to the beach because it is hotter and fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love to travel. Last holiday, I visited my grandma by train. We stayed for three days and climbed a small hill. My dream trip is to the beach because it is hotter and more exciting than the mountains.",
  "questions": [
    "How did the writer travel last holiday?",
    "What did they do there?",
    "What is the writer's dream trip?"
  ]
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like to travel by ___.",
    "Last holiday, I ___.",
    "My dream trip is to ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '8c9fa231-5f45-4373-a9b7-5d44b2d521cc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about ways to travel",
    "Tell a holiday story",
    "Compare holiday places",
    "Plan a dream trip"
  ],
  "challenge": "Tell me all about travel and your dream trip!"
}$json$::jsonb,
  true
);

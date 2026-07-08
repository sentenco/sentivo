-- A1 Kids Unit 10: Weather Today (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weather Words
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  'Weather Words',
  'A1',
  'kids',
  10,
  1,
  'Recognize basic weather words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
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
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☀️",
  "questions": [
    "What's the weather like today?",
    "Is it sunny or rainy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sunny",
      "bg": "#FAECE7"
    },
    {
      "word": "Rainy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cloudy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Windy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "Is it sunny?"
  ],
  "student": [
    "It's sunny.",
    "Yes, it is sunny!"
  ],
  "note": "Look outside and describe the weather!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [sunny]."
    },
    {
      "speaker": "B",
      "text": "It is [rainy]."
    },
    {
      "speaker": "A",
      "text": "It is [windy]."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "windy"
  ]
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the weather like today?"
    },
    {
      "speaker": "B",
      "text": "It's cloudy today."
    },
    {
      "speaker": "A",
      "text": "It's windy where I am!"
    },
    {
      "speaker": "B",
      "text": "I like sunny days best!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is sunny. Yesterday was rainy. Sometimes it is cloudy. Sometimes it is windy. I like to know the weather every day!",
  "questions": [
    "What is the weather today?",
    "What was the weather yesterday?",
    "Does the writer like knowing the weather?"
  ]
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "Yesterday was ___.",
    "I like ___ weather."
  ]
}$json$::jsonb,
  true
),
(
  'f9668eb5-3ed8-4f1e-b740-e2dbcaf153e0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four weather words",
    "Say 'It is ___'",
    "Describe today's weather"
  ],
  "challenge": "Describe the weather outside right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Sunny or Rainy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ec4f041a-af37-4453-a81c-876480001af3',
  'Sunny or Rainy',
  'A1',
  'kids',
  10,
  2,
  'Use simple weather contrast.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ec4f041a-af37-4453-a81c-876480001af3',
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
  'ec4f041a-af37-4453-a81c-876480001af3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "Do you like hot weather or cold weather?",
    "Is today hot or cold?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hot",
      "bg": "#FAECE7"
    },
    {
      "word": "Cold",
      "bg": "#E1F5EE"
    },
    {
      "word": "Snowy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Weather",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is it hot or cold?",
    "Do you like snowy weather?"
  ],
  "student": [
    "It is hot.",
    "Yes, I like snowy weather!"
  ],
  "note": "Compare two kinds of weather!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [hot] today."
    },
    {
      "speaker": "B",
      "text": "It is [cold] today."
    },
    {
      "speaker": "A",
      "text": "It is [snowy] in winter."
    }
  ],
  "blanks": [
    "hot",
    "cold",
    "snowy"
  ]
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is it hot or cold today?"
    },
    {
      "speaker": "B",
      "text": "It is cold today."
    },
    {
      "speaker": "A",
      "text": "I like hot weather better!"
    },
    {
      "speaker": "B",
      "text": "I like snowy weather!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In summer, it is hot. In winter, it is cold and snowy. I like hot weather. My friend likes cold, snowy weather. We like different weather!",
  "questions": [
    "What is the weather like in summer?",
    "What is the weather like in winter?",
    "What weather does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In summer, it is ___.",
    "In winter, it is ___.",
    "I like ___ weather."
  ]
}$json$::jsonb,
  true
),
(
  'ec4f041a-af37-4453-a81c-876480001af3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'hot' and 'cold'",
    "Compare weather types",
    "Talk about seasons"
  ],
  "challenge": "Tell me if you like hot or cold weather, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's the Weather Like?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd19714a5-ac82-4687-8972-b415d4f16505',
  'What''s the Weather Like?',
  'A1',
  'kids',
  10,
  3,
  'Ask and answer a simple weather question.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
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
  'd19714a5-ac82-4687-8972-b415d4f16505',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What's the weather like today?",
    "How do you check the weather?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Today",
      "bg": "#FAECE7"
    },
    {
      "word": "Tomorrow",
      "bg": "#E1F5EE"
    },
    {
      "word": "Warm",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cool",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "What's the weather like tomorrow?"
  ],
  "student": [
    "It's warm today.",
    "It will be cool tomorrow!"
  ],
  "note": "Ask and answer with a partner!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the weather like [today]?"
    },
    {
      "speaker": "B",
      "text": "It's [warm]."
    },
    {
      "speaker": "A",
      "text": "It will be [cool] tomorrow."
    }
  ],
  "blanks": [
    "today",
    "warm",
    "cool"
  ]
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the weather like today?"
    },
    {
      "speaker": "B",
      "text": "It's warm today!"
    },
    {
      "speaker": "A",
      "text": "What about tomorrow?"
    },
    {
      "speaker": "B",
      "text": "It will be cool tomorrow."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What's the weather like today? It's warm today. What's the weather like tomorrow? It will be cool tomorrow. The weather changes every day!",
  "questions": [
    "What's the weather like today?",
    "What will the weather be like tomorrow?",
    "Does the weather change?"
  ]
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What's the weather like today? It's ___.",
    "Tomorrow it will be ___.",
    "I ask about the weather because ___."
  ]
}$json$::jsonb,
  true
),
(
  'd19714a5-ac82-4687-8972-b415d4f16505',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What's the weather like?'",
    "Answer with 'It's ___'",
    "Talk about tomorrow's weather"
  ],
  "challenge": "Ask me what the weather is like, and answer for your city!"
}$json$::jsonb,
  true
);

-- Lesson 4: Weather Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  'Weather Clothes',
  'A1',
  'kids',
  10,
  4,
  'Match weather with clothes.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
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
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧥",
  "questions": [
    "What do you wear when it's rainy?",
    "What do you wear when it's cold?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Coat",
      "bg": "#FAECE7"
    },
    {
      "word": "Hat",
      "bg": "#E1F5EE"
    },
    {
      "word": "Boots",
      "bg": "#EEEDFE"
    },
    {
      "word": "Umbrella",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you wear when it's rainy?",
    "Do you wear a coat?"
  ],
  "student": [
    "I wear boots and an umbrella.",
    "Yes, I wear a coat!"
  ],
  "note": "Think about what you wear for different weather!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "When it's rainy, I wear [boots]."
    },
    {
      "speaker": "B",
      "text": "I use an [umbrella]."
    },
    {
      "speaker": "A",
      "text": "When it's cold, I wear a [coat]."
    }
  ],
  "blanks": [
    "boots",
    "umbrella",
    "coat"
  ]
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you wear when it's rainy?"
    },
    {
      "speaker": "B",
      "text": "I wear boots and use an umbrella."
    },
    {
      "speaker": "A",
      "text": "What do you wear when it's cold?"
    },
    {
      "speaker": "B",
      "text": "I wear a coat and a hat!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "When it's rainy, I wear boots. I use an umbrella. When it's cold, I wear a coat and a hat. I always dress for the weather!",
  "questions": [
    "What does the writer wear when it's rainy?",
    "What does the writer wear when it's cold?",
    "Does the writer dress for the weather?"
  ]
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "When it's rainy, I wear ___.",
    "When it's cold, I wear ___.",
    "Today I am wearing ___."
  ]
}$json$::jsonb,
  true
),
(
  '3d99895e-3081-4962-a48d-dac88e48f01d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name weather clothes",
    "Say 'When it's ___, I wear ___'",
    "Choose clothes for weather"
  ],
  "challenge": "Tell me what you would wear for today's weather!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  'Unit Review',
  'A1',
  'kids',
  10,
  5,
  'Review weather vocabulary.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
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
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☀️",
  "questions": [
    "What weather words do you remember?",
    "What do you wear for rainy weather?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sunny",
      "bg": "#FAECE7"
    },
    {
      "word": "Rainy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hot",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cold",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "What do you wear?"
  ],
  "student": [
    "It's sunny.",
    "I wear a coat."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [sunny]."
    },
    {
      "speaker": "B",
      "text": "I wear [boots] when it's rainy."
    },
    {
      "speaker": "A",
      "text": "It is [cold] today."
    }
  ],
  "blanks": [
    "sunny",
    "boots",
    "cold"
  ]
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the weather like today?"
    },
    {
      "speaker": "B",
      "text": "It's rainy today."
    },
    {
      "speaker": "A",
      "text": "I wear boots and an umbrella!"
    },
    {
      "speaker": "B",
      "text": "I wear a coat when it's cold!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is sunny and warm. Yesterday was rainy and cold. When it's rainy, I wear boots and use an umbrella. When it's cold, I wear a coat. I always check the weather!",
  "questions": [
    "What is the weather today?",
    "What was the weather yesterday?",
    "What does the writer wear when it's rainy?"
  ]
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "When it's cold, I wear ___.",
    "My favorite weather is ___."
  ]
}$json$::jsonb,
  true
),
(
  'deea7c99-dc53-4f6e-a357-a78cc13c46a2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name weather words",
    "Ask and answer about weather",
    "Match clothes to weather"
  ],
  "challenge": "Describe today's weather and what you're wearing!"
}$json$::jsonb,
  true
);

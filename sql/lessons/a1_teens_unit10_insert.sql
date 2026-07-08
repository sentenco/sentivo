-- A1 Teens Unit 10: Weather and Seasons (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weather and Seasons
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  'Weather and Seasons',
  'A1',
  'teens',
  10,
  1,
  'Name basic weather words and seasons.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
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
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What's the weather like today?",
    "What season is it?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
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
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "Is it hot today?"
  ],
  "student": [
    "It's sunny.",
    "Yes, it's very hot!"
  ],
  "note": "Look outside and describe it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
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
      "text": "It is [hot]."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "hot"
  ]
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
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
      "text": "It's cold and windy."
    },
    {
      "speaker": "A",
      "text": "I like sunny weather!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today it is sunny. Yesterday it was rainy. In summer, it is hot. In winter, it is cold. I like to talk about the weather!",
  "questions": [
    "What is the weather today?",
    "What was the weather yesterday?",
    "What is the weather like in summer?"
  ]
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today it is ___.",
    "In summer, it is ___.",
    "In winter, it is ___."
  ]
}$json$::jsonb,
  true
),
(
  '772c455a-19a6-4c9c-b8f7-ce40b434bd43',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four weather words",
    "Say 'It is ___'",
    "Talk about the weather"
  ],
  "challenge": "Describe today's weather!"
}$json$::jsonb,
  true
);

-- Lesson 2: What's the Weather Like?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  'What''s the Weather Like?',
  'A1',
  'teens',
  10,
  2,
  'Answer a simple weather question.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
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
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌬️",
  "questions": [
    "Is it windy today?",
    "Is it cloudy today?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Windy",
      "bg": "#FAECE7"
    },
    {
      "word": "Cloudy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Weather",
      "bg": "#EEEDFE"
    },
    {
      "word": "Like",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "Is it windy?"
  ],
  "student": [
    "It's cloudy.",
    "Yes, it's windy today."
  ],
  "note": "Answer with the real weather today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the [weather] like?"
    },
    {
      "speaker": "B",
      "text": "It is [windy]."
    },
    {
      "speaker": "A",
      "text": "It is [cloudy] too."
    }
  ],
  "blanks": [
    "weather",
    "windy",
    "cloudy"
  ]
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
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
      "text": "It's cloudy and a little windy."
    },
    {
      "speaker": "A",
      "text": "Is it cold?"
    },
    {
      "speaker": "B",
      "text": "No, it's actually warm!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What's the weather like today? It's cloudy and windy. Is it cold? No, it's warm. I check the weather every morning!",
  "questions": [
    "What's the weather like?",
    "Is it cold or warm?",
    "When does the writer check the weather?"
  ]
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What's the weather like? It's ___.",
    "Is it cold? ___.",
    "I check the weather ___."
  ]
}$json$::jsonb,
  true
),
(
  'c5dced3e-819b-4f04-b48c-71d1153f529b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What's the weather like?'",
    "Answer with 'It's ___'",
    "Talk about daily weather"
  ],
  "challenge": "Ask me what the weather is like today!"
}$json$::jsonb,
  true
);

-- Lesson 3: Seasons and Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  'Seasons and Clothes',
  'A1',
  'teens',
  10,
  3,
  'Match seasons with suitable clothes.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
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
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍂",
  "questions": [
    "What season is it now?",
    "What do you wear in winter?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Spring",
      "bg": "#FAECE7"
    },
    {
      "word": "Summer",
      "bg": "#E1F5EE"
    },
    {
      "word": "Autumn",
      "bg": "#EEEDFE"
    },
    {
      "word": "Winter",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What season is it?",
    "What do you wear in summer?"
  ],
  "student": [
    "It is autumn.",
    "I wear shorts in summer."
  ],
  "note": "Think about your favorite season and clothes!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In [summer], I wear shorts."
    },
    {
      "speaker": "B",
      "text": "In [winter], I wear a coat."
    },
    {
      "speaker": "A",
      "text": "I like [spring]."
    }
  ],
  "blanks": [
    "summer",
    "winter",
    "spring"
  ]
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What season is it now?"
    },
    {
      "speaker": "B",
      "text": "It is autumn."
    },
    {
      "speaker": "A",
      "text": "What do you wear in autumn?"
    },
    {
      "speaker": "B",
      "text": "I wear a jacket!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In spring, I wear a light jacket. In summer, I wear shorts. In autumn, I wear a sweater. In winter, I wear a big coat. I like all four seasons!",
  "questions": [
    "What does the writer wear in spring?",
    "What does the writer wear in summer?",
    "What does the writer wear in winter?"
  ]
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In spring, I wear ___.",
    "In summer, I wear ___.",
    "In winter, I wear ___."
  ]
}$json$::jsonb,
  true
),
(
  '378df934-24cb-44c2-a72f-acdb5fd6c39f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four seasons",
    "Match clothes to seasons",
    "Talk about seasonal clothes"
  ],
  "challenge": "Tell me what you wear in your favorite season!"
}$json$::jsonb,
  true
);

-- Lesson 4: Weather Preferences
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  'Weather Preferences',
  'A1',
  'teens',
  10,
  4,
  'Say which weather they like.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
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
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😎",
  "questions": [
    "Do you like hot weather?",
    "What weather makes you happy?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Prefer",
      "bg": "#FAECE7"
    },
    {
      "word": "Favorite",
      "bg": "#E1F5EE"
    },
    {
      "word": "Best",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enjoy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What weather do you like?",
    "Do you prefer hot or cold?"
  ],
  "student": [
    "I like sunny weather.",
    "I prefer hot weather!"
  ],
  "note": "Give your real weather opinion!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [prefer] sunny weather."
    },
    {
      "speaker": "B",
      "text": "My [favorite] season is summer."
    },
    {
      "speaker": "A",
      "text": "I [enjoy] rainy days."
    }
  ],
  "blanks": [
    "prefer",
    "favorite",
    "enjoy"
  ]
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What weather do you like best?"
    },
    {
      "speaker": "B",
      "text": "I like sunny weather best."
    },
    {
      "speaker": "A",
      "text": "I prefer cold weather!"
    },
    {
      "speaker": "B",
      "text": "Really? That's interesting!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like sunny weather. I don't like rainy weather. My favorite season is summer because it's hot. Everyone prefers different weather!",
  "questions": [
    "What weather does the writer like?",
    "What weather does the writer not like?",
    "What is the favorite season?"
  ]
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ weather.",
    "I don't like ___ weather.",
    "My favorite season is ___."
  ]
}$json$::jsonb,
  true
),
(
  'd9cf0a75-a269-432e-a2b1-d1c019a82234',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I prefer ___'",
    "Say weather likes and dislikes",
    "Talk about my favorite season"
  ],
  "challenge": "Tell me your favorite weather and why!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  'Unit Review',
  'A1',
  'teens',
  10,
  5,
  'Talk about weather, seasons, and preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
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
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What weather words do you remember?",
    "What season do you like best?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
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
      "word": "Winter",
      "bg": "#E1F5EE"
    },
    {
      "word": "Wearing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Prefer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like?",
    "What season do you like?"
  ],
  "student": [
    "It's sunny.",
    "I like summer."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
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
      "text": "In [winter], I wear a coat."
    },
    {
      "speaker": "A",
      "text": "I [prefer] hot weather."
    }
  ],
  "blanks": [
    "sunny",
    "winter",
    "prefer"
  ]
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
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
      "text": "It's sunny and warm."
    },
    {
      "speaker": "A",
      "text": "What season do you like best?"
    },
    {
      "speaker": "B",
      "text": "I like summer best because it's sunny!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today it is sunny. My favorite season is summer. In summer, I wear shorts. In winter, I wear a coat because it's cold. I prefer hot weather!",
  "questions": [
    "What's the weather today?",
    "What is the favorite season?",
    "What weather does the writer prefer?"
  ]
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today it is ___.",
    "In ___, I wear ___.",
    "I prefer ___ weather."
  ]
}$json$::jsonb,
  true
),
(
  '5221f97f-74d0-494d-b81e-fc3a7a848c39',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name weather and seasons",
    "Match clothes to seasons",
    "Talk about weather preferences"
  ],
  "challenge": "Tell me about the weather, your favorite season, and what you wear!"
}$json$::jsonb,
  true
);

-- A1 Teens Unit 10: Weather and Seasons (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weather and Seasons
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  'Weather and Seasons',
  'A1',
  'teens',
  10,
  1,
  'Name weather and seasons. [Bridge, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
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
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☀️",
  "questions": [
    "Is it sunny today?",
    "Do you like summer or winter?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
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
      "word": "Summer",
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
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is it sunny today?",
    "What season is it?"
  ],
  "student": [
    "Yes, it's sunny.",
    "It's summer."
  ],
  "note": "Point to the sky or a season picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is [sunny]."
    },
    {
      "speaker": "B",
      "text": "Yesterday was [rainy]."
    },
    {
      "speaker": "A",
      "text": "It's [summer] now."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "summer"
  ]
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is sunny."
    },
    {
      "speaker": "B",
      "text": "Yesterday was rainy."
    },
    {
      "speaker": "A",
      "text": "It's summer now."
    },
    {
      "speaker": "B",
      "text": "Now describe today's real weather using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to talk about weather, then use your own."
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is sunny. Yesterday was rainy. It is summer now. Summer is hot.",
  "questions": [
    "Is today sunny or rainy?",
    "What season is it?",
    "Is summer hot or cold?"
  ]
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "It is ___ now.",
    "___ is ___ (hot/cold)."
  ]
}$json$::jsonb,
  true
),
(
  'fb139b1c-b3a4-476c-a133-28149d5912a8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name weather words",
    "Name seasons",
    "Say what the weather is today"
  ],
  "challenge": "Tell me the weather and season today!"
}$json$::jsonb,
  true
);

-- Lesson 2: What's the Weather Like?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  'What''s the Weather Like?',
  'A1',
  'teens',
  10,
  2,
  'Unchanged by the rotation rework -- L2 format F, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
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
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧥",
  "questions": [
    "Is it cold or hot today?",
    "What do you wear when it's cold?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cold",
      "bg": "#FAECE7"
    },
    {
      "word": "Hot",
      "bg": "#E1F5EE"
    },
    {
      "word": "Wear",
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
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is it cold today?",
    "What do you wear?"
  ],
  "student": [
    "Yes, it's cold.",
    "I wear a jacket."
  ],
  "note": "Use the word bank: cold, hot, wear, windy.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It's [cold] and [windy]."
    },
    {
      "speaker": "B",
      "text": "I [wear] a jacket."
    },
    {
      "speaker": "A",
      "text": "Summer is [hot]."
    }
  ],
  "blanks": [
    "cold",
    "wear",
    "hot"
  ]
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is it cold today?"
    },
    {
      "speaker": "B",
      "text": "Yes, it's cold and windy. I wear a jacket."
    },
    {
      "speaker": "A",
      "text": "In summer, it's hot. I wear a T-shirt."
    },
    {
      "speaker": "B",
      "text": "That makes sense!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today it's cold and windy. I wear a jacket. In summer, it's hot and I wear a T-shirt.",
  "questions": [
    "What is the weather today?",
    "What does the writer wear today?",
    "What does the writer wear in summer?"
  ]
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today it's ___.",
    "I wear a ___.",
    "In summer, I wear ___."
  ]
}$json$::jsonb,
  true
),
(
  '082dd143-0ac4-4ea2-8635-4db3fc1a375a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'cold', 'hot', 'windy'",
    "Say what I wear for the weather",
    "Combine weather and clothes with 'and'"
  ],
  "challenge": "Tell me the weather today and what you wear!"
}$json$::jsonb,
  true
);

-- Lesson 3: Seasons and Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  'Seasons and Clothes',
  'A1',
  'teens',
  10,
  3,
  'Say a simple preference: ''I like it better''. [Bridge, L3, format M: student-led matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
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
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍂",
  "questions": [
    "What is your favorite season?",
    "Do you like summer or winter better?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite season",
      "bg": "#FAECE7"
    },
    {
      "word": "Spring",
      "bg": "#E1F5EE"
    },
    {
      "word": "Autumn",
      "bg": "#EEEDFE"
    },
    {
      "word": "I like it better",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite season?",
    "Do you like summer better?"
  ],
  "student": [
    "My favorite season is spring.",
    "I like winter better."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite season] is spring."
    },
    {
      "speaker": "B",
      "text": "I like [autumn] too."
    },
    {
      "speaker": "A",
      "text": "[I like it better] than summer."
    }
  ],
  "blanks": [
    "favorite season",
    "autumn",
    "i like it better"
  ]
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite season is spring."
    },
    {
      "speaker": "B",
      "text": "My favorite season is spring too!"
    },
    {
      "speaker": "A",
      "text": "I like it better than summer."
    },
    {
      "speaker": "B",
      "text": "I like autumn better than summer."
    }
  ],
  "note": "Student says a line first this time. Teacher echoes it back, matching!"
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite season is autumn. I like it better than summer. It's not too hot and not too cold.",
  "questions": [
    "What is the favorite season?",
    "What season does the writer like less?",
    "Why does the writer like autumn?"
  ]
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite season is ___.",
    "I like it better than ___.",
    "It's not too ___ and not too ___."
  ]
}$json$::jsonb,
  true
),
(
  '47aa6fca-52c5-4de6-a8d6-3671b88cd598',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite season",
    "Say 'I like it better'",
    "Give a simple reason for a season"
  ],
  "challenge": "Tell me your favorite season and why you like it better!"
}$json$::jsonb,
  true
);

-- Lesson 4: Weather Preferences
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  'Weather Preferences',
  'A1',
  'teens',
  10,
  4,
  'Combine weather, seasons, and preference into a talk. [Bridge, L4, format E: choose-the-better-answer + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
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
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌧️",
  "questions": [
    "Do you like rain or snow?",
    "Do you stay inside when it rains?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Rain",
      "bg": "#FAECE7"
    },
    {
      "word": "Snow",
      "bg": "#E1F5EE"
    },
    {
      "word": "Outside",
      "bg": "#EEEDFE"
    },
    {
      "word": "Inside",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like rain or snow?",
    "Do you play outside or stay inside?"
  ],
  "student": [
    "I like snow better.",
    "I stay inside when it rains."
  ],
  "note": "Put it all together: weather + season + preference + activity.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [snow] better than [rain]."
    },
    {
      "speaker": "B",
      "text": "I play [outside] in summer."
    },
    {
      "speaker": "A",
      "text": "I stay [inside] when it's cold."
    }
  ],
  "blanks": [
    "snow",
    "outside",
    "inside"
  ]
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I like snow better than rain' or 'I like snow more better than rain'?"
    },
    {
      "speaker": "B",
      "text": "'I like snow better than rain' is correct. Just 'better', not 'more better'."
    },
    {
      "speaker": "A",
      "text": "Good! Do you prefer rain or snow, and what do you do in each?"
    },
    {
      "speaker": "B",
      "text": "I like snow better. I play outside in the snow."
    }
  ],
  "note": "Fix the mistake first, then answer fully in your own words -- no word bank this time."
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like snow better than rain. In winter, I play outside with my friends. When it rains, I stay inside and read. My favorite season is winter.",
  "questions": [
    "Does the writer like snow or rain better?",
    "What does the writer do in winter?",
    "What does the writer do when it rains?"
  ]
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ better than ___.",
    "In ___, I ___.",
    "My favorite season is ___."
  ]
}$json$::jsonb,
  true
),
(
  '29df268d-2c3c-419d-bd3f-5d8dc06003cd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say a weather preference",
    "Say an activity for a season",
    "Talk about my favorite season with reasons"
  ],
  "challenge": "Tell me all about your favorite weather and what you do in it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  'Unit Review',
  'A1',
  'teens',
  10,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
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
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What's the weather like today?",
    "What is your favorite season?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Weather",
      "bg": "#FAECE7"
    },
    {
      "word": "Season",
      "bg": "#E1F5EE"
    },
    {
      "word": "Better",
      "bg": "#EEEDFE"
    },
    {
      "word": "Wear",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather like today?",
    "What is your favorite season?"
  ],
  "student": [
    "It's sunny today.",
    "My favorite season is spring."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The [weather] is sunny today."
    },
    {
      "speaker": "B",
      "text": "My favorite [season] is summer."
    },
    {
      "speaker": "A",
      "text": "I like it [better] than winter."
    }
  ],
  "blanks": [
    "weather",
    "season",
    "better"
  ]
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about the weather and your favorite season."
    },
    {
      "speaker": "B",
      "text": "The weather is sunny today. My favorite season is summer, I like it better than winter."
    },
    {
      "speaker": "A",
      "text": "I wear a T-shirt in summer and a jacket in winter."
    },
    {
      "speaker": "B",
      "text": "That makes sense!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The weather is sunny today. My favorite season is summer. I like it better than winter. I wear a T-shirt in summer.",
  "questions": [
    "What is the weather today?",
    "What is the favorite season?",
    "What does the writer wear in summer?"
  ]
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The weather is ___ today.",
    "My favorite season is ___.",
    "I wear ___ in ___."
  ]
}$json$::jsonb,
  true
),
(
  '60aced87-ebc5-4af7-af5f-318b4464b82b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe today's weather",
    "Say my favorite season with a preference",
    "Say what I wear in different seasons"
  ],
  "challenge": "Tell me all about the weather and seasons you like!"
}$json$::jsonb,
  true
);

-- A2 Adults Unit 5: Home and Housing (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  'My Home',
  'A2',
  'adults',
  5,
  1,
  'Describe a home, rooms, and simple living situations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Do you live in a house or an apartment?",
    "What is your favorite room?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
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
      "word": "Living room",
      "bg": "#E1F5EE"
    },
    {
      "word": "Furnished",
      "bg": "#EEEDFE"
    },
    {
      "word": "Neighborhood",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you live in a house or apartment?",
    "What is your favorite room?"
  ],
  "student": [
    "I live in a small apartment.",
    "My favorite room is the living room."
  ],
  "note": "Think about your real home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I live in a small [apartment]."
    },
    {
      "speaker": "B",
      "text": "My favorite room is the [living room]."
    },
    {
      "speaker": "A",
      "text": "My place is fully [furnished]."
    }
  ],
  "blanks": [
    "apartment",
    "living room",
    "furnished"
  ]
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you live in a house or an apartment?"
    },
    {
      "speaker": "B",
      "text": "I live in a small apartment. My favorite room is the living room."
    },
    {
      "speaker": "A",
      "text": "I live in a house with a nice neighborhood nearby."
    },
    {
      "speaker": "B",
      "text": "That sounds lovely."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live in a small apartment near the city center. It has two bedrooms, a kitchen, and a cozy living room. My favorite room is the living room, where I relax after work. The neighborhood is quiet and convenient.",
  "questions": [
    "Where does the writer live?",
    "What rooms does the apartment have?",
    "What is the writer's favorite room?"
  ]
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live in ___.",
    "My home has ___.",
    "My favorite room is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '94b46387-fedc-46d3-99e0-595ac19347fb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my home and rooms",
    "Use 'apartment' and 'living room'",
    "Talk about my neighborhood"
  ],
  "challenge": "Describe your home to me!"
}$json$::jsonb,
  true
);

-- Lesson 2: Housing Problems
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  'Housing Problems',
  'A2',
  'adults',
  5,
  2,
  'Understand and describe simple home problems and requests.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔧",
  "questions": [
    "Have you had a housing problem before?",
    "What was the problem?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "No hot water",
      "bg": "#FAECE7"
    },
    {
      "word": "Broken",
      "bg": "#E1F5EE"
    },
    {
      "word": "Leak",
      "bg": "#EEEDFE"
    },
    {
      "word": "Noisy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the problem?",
    "Can you fix it soon?"
  ],
  "student": [
    "There is no hot water.",
    "Yes, I will fix it soon."
  ],
  "note": "Think about a housing problem you've had!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is [no hot water] today."
    },
    {
      "speaker": "B",
      "text": "The light in the hallway is [broken]."
    },
    {
      "speaker": "A",
      "text": "There's a small [leak] in the kitchen."
    }
  ],
  "blanks": [
    "no hot water",
    "broken",
    "leak"
  ]
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi, I'd like to report a problem. There's no hot water today."
    },
    {
      "speaker": "B",
      "text": "I'm sorry to hear that. I'll send someone today."
    },
    {
      "speaker": "A",
      "text": "Also, the light in the hallway is broken."
    },
    {
      "speaker": "B",
      "text": "Thank you for letting us know, we'll fix both soon."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message to the building office: Hello, I'd like to report two problems. First, there is no hot water in my apartment since yesterday. Second, there is a small leak under the kitchen sink. Could someone come look at these soon? Thank you.",
  "questions": [
    "What are the two problems?",
    "When did the hot water problem start?",
    "What does the writer ask for?"
  ]
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to report a problem: ___.",
    "There is a problem with ___.",
    "Could someone please ___?"
  ]
}$json$::jsonb,
  true
),
(
  '5addc9a5-1e98-4393-b90e-6e008530b4d2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe home problems",
    "Use 'broken', 'leak', 'no hot water'",
    "Write a short problem report"
  ],
  "challenge": "Tell me about a housing problem you had!"
}$json$::jsonb,
  true
);

-- Lesson 3: Better Places to Live
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  'Better Places to Live',
  'A2',
  'adults',
  5,
  3,
  'Compare homes or neighborhoods using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏘️",
  "questions": [
    "Is your neighborhood quiet or noisy?",
    "Is your home close to work?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Quieter",
      "bg": "#FAECE7"
    },
    {
      "word": "Closer",
      "bg": "#E1F5EE"
    },
    {
      "word": "More convenient",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cheaper",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your neighborhood quieter than downtown?",
    "Is your home close to work?"
  ],
  "student": [
    "Yes, it's much quieter.",
    "It's very close, just ten minutes."
  ],
  "note": "Compare two homes or neighborhoods!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My new place is [quieter] than the old one."
    },
    {
      "speaker": "B",
      "text": "It's [closer] to my work too."
    },
    {
      "speaker": "A",
      "text": "And it's [cheaper] every month."
    }
  ],
  "blanks": [
    "quieter",
    "closer",
    "cheaper"
  ]
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How is your new apartment compared to the old one?"
    },
    {
      "speaker": "B",
      "text": "It's quieter and closer to work. It's also cheaper."
    },
    {
      "speaker": "A",
      "text": "That sounds much more convenient overall."
    },
    {
      "speaker": "B",
      "text": "Yes, I'm really happy with the change."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I recently moved to a new apartment. It's quieter than my old place, and it's closer to my office, just a ten-minute walk. It's also cheaper, which helps a lot. Overall, it's a much better place to live.",
  "questions": [
    "Is the new apartment quieter or noisier?",
    "How close is it to the office?",
    "Is it more or less expensive?"
  ]
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My new home is ___ than my old one.",
    "It's closer to ___.",
    "The most important thing for me in a home is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e1a40287-aa85-4606-8ccd-2334becfce80',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare homes and neighborhoods",
    "Use comparatives for housing",
    "Say what matters most to me"
  ],
  "challenge": "Compare your current home with a past one!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Housing Form or Ad
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  'A Housing Form or Ad',
  'A2',
  'adults',
  5,
  4,
  'Write short housing information for a form or simple ad.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "Have you filled out a housing form before?",
    "Have you looked at rental ads?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Available",
      "bg": "#FAECE7"
    },
    {
      "word": "Rent",
      "bg": "#E1F5EE"
    },
    {
      "word": "Deposit",
      "bg": "#EEEDFE"
    },
    {
      "word": "Contact",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the room available now?",
    "How much is the rent?"
  ],
  "student": [
    "Yes, it's available from June.",
    "The rent is 500 dollars a month."
  ],
  "note": "Think about the details of a housing ad!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The room is [available] from next month."
    },
    {
      "speaker": "B",
      "text": "The [rent] is 500 dollars."
    },
    {
      "speaker": "A",
      "text": "You need to pay a small [deposit]."
    }
  ],
  "blanks": [
    "available",
    "rent",
    "deposit"
  ]
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is the apartment still available?"
    },
    {
      "speaker": "B",
      "text": "Yes, it's available from next month. The rent is 500 dollars."
    },
    {
      "speaker": "A",
      "text": "Is there a deposit required?"
    },
    {
      "speaker": "B",
      "text": "Yes, one month's rent as deposit. Please contact me for a viewing."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For rent: cozy one-bedroom apartment, available from June. Rent is 500 dollars a month, plus a small deposit. Close to public transport and shops. Please contact Maria for more details or to arrange a viewing.",
  "questions": [
    "When is the apartment available?",
    "How much is the rent?",
    "Who should you contact?"
  ]
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Available from ___.",
    "Rent is ___ a month.",
    "Please contact ___ for more details."
  ]
}$json$::jsonb,
  true
),
(
  '52981abf-6c0b-41f0-bdda-808ebb0891b8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write short housing information",
    "Use 'available', 'rent', 'deposit'",
    "Write a simple housing ad"
  ],
  "challenge": "Write a short housing ad for your own home!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  'Unit Review',
  'A2',
  'adults',
  5,
  5,
  'Review home description, housing problems, comparisons, and a housing text.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "Describe your home to me.",
    "Have you had any housing problems?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
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
      "word": "Broken",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quieter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Rent",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Describe your home.",
    "Have you had housing problems?"
  ],
  "student": [
    "I live in a small apartment.",
    "Yes, we had no hot water once."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [home] has two bedrooms."
    },
    {
      "speaker": "B",
      "text": "The heater was [broken] last month."
    },
    {
      "speaker": "A",
      "text": "My new place is [quieter]."
    }
  ],
  "blanks": [
    "home",
    "broken",
    "quieter"
  ]
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your home and any problems you've had."
    },
    {
      "speaker": "B",
      "text": "My home has two bedrooms. Last month, the heater was broken for a week."
    },
    {
      "speaker": "A",
      "text": "My new place is quieter and closer to work than my old one."
    },
    {
      "speaker": "B",
      "text": "That's a great improvement!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My home has two bedrooms and a cozy living room. Last month, the heater was broken for a week, so I reported it to the building office. My new place is quieter and closer to work than my old apartment. The rent is also cheaper.",
  "questions": [
    "What rooms does the home have?",
    "What problem happened last month?",
    "How is the new place better than the old one?"
  ]
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My home has ___.",
    "I once had a problem with ___.",
    "My home is ___ than my old one."
  ]
}$json$::jsonb,
  true
),
(
  'b3c09fc2-4ca2-4829-a6c7-2288cee0d93f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my home",
    "Report a housing problem",
    "Compare homes",
    "Write housing information"
  ],
  "challenge": "Tell me all about your home and housing experiences!"
}$json$::jsonb,
  true
);

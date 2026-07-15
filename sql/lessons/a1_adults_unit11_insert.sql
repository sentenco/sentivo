-- A1 Adults Unit 11: Places in Town (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places in Town
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6a35788e-8755-476b-968f-27595e1047fd',
  'Places in Town',
  'A1',
  'adults',
  11,
  1,
  'Unchanged by the rotation rework -- L1 format M, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6a35788e-8755-476b-968f-27595e1047fd',
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
  '6a35788e-8755-476b-968f-27595e1047fd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏦",
  "questions": [
    "Is there a bank near your home?",
    "Do you go to the park?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bank",
      "bg": "#FAECE7"
    },
    {
      "word": "Pharmacy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Post office",
      "bg": "#EEEDFE"
    },
    {
      "word": "Park",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is there a bank near here?",
    "Where is the pharmacy?"
  ],
  "student": [
    "Yes, there is a bank near here.",
    "The pharmacy is close by."
  ],
  "note": "Read the model text, then find the place words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a [bank] near my home."
    },
    {
      "speaker": "B",
      "text": "There is a [pharmacy] too."
    },
    {
      "speaker": "A",
      "text": "I go to the [post office] on Mondays."
    }
  ],
  "blanks": [
    "bank",
    "pharmacy",
    "post office"
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a bank near my home."
    },
    {
      "speaker": "B",
      "text": "There is a pharmacy too."
    },
    {
      "speaker": "A",
      "text": "I go to the post office on Mondays."
    },
    {
      "speaker": "B",
      "text": "I go to the park every day!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a bank near my home. There is a pharmacy too. I go to the post office on Mondays.",
  "questions": [
    "What is near the writer's home?",
    "What else is nearby?",
    "When does the writer go to the post office?"
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ near my home.",
    "There is a ___ too.",
    "I go to the ___ on ___."
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 places in town",
    "Say 'There is a ___ near my home'",
    "Talk about places I visit"
  ],
  "challenge": "Tell me about the places near your home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f255938-3992-4299-9962-6f7512df1c5c',
  'Where Is It?',
  'A1',
  'adults',
  11,
  2,
  'Ask and answer where places are. [Bridge, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
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
  '7f255938-3992-4299-9962-6f7512df1c5c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is the nearest bank?",
    "Is the pharmacy near your home?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
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
      "word": "Next to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Between",
      "bg": "#EEEDFE"
    },
    {
      "word": "Near",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the bank?",
    "Is it near here?"
  ],
  "student": [
    "The bank is next to the pharmacy.",
    "Yes, it is near here."
  ],
  "note": "Use the word bank: where is, next to, between, near.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] the bank?"
    },
    {
      "speaker": "B",
      "text": "It is [next to] the pharmacy."
    },
    {
      "speaker": "A",
      "text": "The park is [near] my home."
    }
  ],
  "blanks": [
    "where is",
    "next to",
    "near"
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'next to' or 'near to'?"
    },
    {
      "speaker": "B",
      "text": "'It is next to the pharmacy' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Where is a place you know, near your home?"
    },
    {
      "speaker": "B",
      "text": "The post office is near my home."
    }
  ],
  "note": "Choose the correct sentence first, then answer about places near your own home."
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The bank is next to the pharmacy. The post office is between the bank and the park.",
  "questions": [
    "Where is the bank?",
    "Where is the post office?",
    "What is the post office between?"
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is next to the ___.",
    "The ___ is between ___ and ___.",
    "It is near my home."
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'next to' and 'between'",
    "Describe locations in town"
  ],
  "challenge": "Tell me where a place is near your home!"
}$json$::jsonb,
  true
);

-- Lesson 3: Directions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  'Directions',
  'A1',
  'adults',
  11,
  3,
  'Give simple directions combining actions with ''and''. [Bridge, L3, format R: freer, less-scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
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
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧭",
  "questions": [
    "Can you give directions to your home?",
    "Do you turn left or right to get to the shop?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Turn left",
      "bg": "#FAECE7"
    },
    {
      "word": "Turn right",
      "bg": "#E1F5EE"
    },
    {
      "word": "Go straight",
      "bg": "#EEEDFE"
    },
    {
      "word": "And then",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do I get to the bank?",
    "Do I turn left?"
  ],
  "student": [
    "Turn left, and then go straight.",
    "Yes, turn left at the corner."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Turn left] at the corner."
    },
    {
      "speaker": "B",
      "text": "[And then] [go straight]."
    },
    {
      "speaker": "A",
      "text": "The bank is on your right."
    }
  ],
  "blanks": [
    "turn left",
    "and then",
    "go straight"
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do I get to the bank?"
    },
    {
      "speaker": "B",
      "text": "Turn left at the corner, and then go straight."
    },
    {
      "speaker": "A",
      "text": "Thank you!"
    },
    {
      "speaker": "B",
      "text": "Now give me directions to a real place near here!"
    }
  ],
  "note": "Freer role-play: after practicing, give your own directions to a place you actually know."
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Turn left at the corner, and then go straight. The bank is on your right.",
  "questions": [
    "What do you do first?",
    "What do you do next?",
    "Where is the bank?"
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Turn ___ at the ___.",
    "And then, ___.",
    "The ___ is on your ___."
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give directions with 'turn left/right'",
    "Combine steps with 'and then'",
    "Say where something is (left/right)"
  ],
  "challenge": "Give me directions to a place near your home!"
}$json$::jsonb,
  true
);

-- Lesson 4: Getting Around
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  'Getting Around',
  'A1',
  'adults',
  11,
  4,
  'Combine places, directions, and simple requests. [Bridge, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
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
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗺️",
  "questions": [
    "How do you ask a stranger for directions?",
    "Have you helped a visitor find a place?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Excuse me",
      "bg": "#FAECE7"
    },
    {
      "word": "Could you tell me",
      "bg": "#E1F5EE"
    },
    {
      "word": "Thanks a lot",
      "bg": "#EEEDFE"
    },
    {
      "word": "Visitor",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Excuse me, could you tell me the way to the bank?",
    "Thanks a lot!"
  ],
  "student": [
    "Turn left, and then go straight.",
    "You're welcome!"
  ],
  "note": "Put it all together: polite request + directions + thanks.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Excuse me], [could you tell me] the way to the park?"
    },
    {
      "speaker": "B",
      "text": "Turn right, and then go straight."
    },
    {
      "speaker": "A",
      "text": "[Thanks a lot]!"
    }
  ],
  "blanks": [
    "excuse me",
    "could you tell me",
    "thanks a lot"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Ask me for directions to a real place, politely."
    },
    {
      "speaker": "B",
      "text": "Excuse me, could you tell me the way to ___?"
    },
    {
      "speaker": "A",
      "text": "Turn ___, and then ___."
    },
    {
      "speaker": "B",
      "text": "___!"
    }
  ],
  "note": "Fill in your own conversation -- no word bank this time. Say it out loud fully."
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Excuse me, could you tell me the way to the post office? Turn left at the bank, and then go straight. Thanks a lot!",
  "questions": [
    "What does the visitor ask?",
    "What are the directions?",
    "How does the visitor say thank you?"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Excuse me, could you tell me the way to ___?",
    "Turn ___, and then ___.",
    "Thanks a lot!"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask for directions politely",
    "Give directions in order",
    "Say thanks and respond"
  ],
  "challenge": "Role-play asking me for directions in your town!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  'Unit Review',
  'A1',
  'adults',
  11,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
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
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "What places are near your home?",
    "Can you give simple directions?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Near",
      "bg": "#FAECE7"
    },
    {
      "word": "Where is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Turn left",
      "bg": "#EEEDFE"
    },
    {
      "word": "Thanks a lot",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is near your home?",
    "Can you give directions to it?"
  ],
  "student": [
    "The bank is near my home.",
    "Turn left, and then go straight."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The bank is [near] my home."
    },
    {
      "speaker": "B",
      "text": "[Where is] the pharmacy?"
    },
    {
      "speaker": "A",
      "text": "[Turn left] and go straight."
    }
  ],
  "blanks": [
    "near",
    "where is",
    "turn left"
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about places near your home and how to get there."
    },
    {
      "speaker": "B",
      "text": "The bank is near my home. Turn left at the corner, and then go straight."
    },
    {
      "speaker": "A",
      "text": "Where is the pharmacy?"
    },
    {
      "speaker": "B",
      "text": "It's next to the bank. Thanks a lot for asking!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The bank is near my home. Turn left at the corner, and then go straight. The pharmacy is next to the bank.",
  "questions": [
    "What is near the home?",
    "What are the directions?",
    "Where is the pharmacy?"
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is near my home.",
    "Turn ___, and then ___.",
    "The ___ is next to the ___."
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in town",
    "Give directions in order",
    "Ask and answer politely"
  ],
  "challenge": "Tell me all about the places near your home and how to get there!"
}$json$::jsonb,
  true
);

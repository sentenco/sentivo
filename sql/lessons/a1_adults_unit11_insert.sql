-- A1 Adults Unit 11: Places in Town (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places in Town
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
  'Places in Town',
  'A1',
  'adults',
  11,
  1,
  'Name places in town. [Bridge, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '9f393ed7-8619-4e9d-9110-bcd613bac6cf',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
  'Where Is It?',
  'A1',
  'adults',
  11,
  2,
  'Ask and answer where places are. [Bridge, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the bank?"
    },
    {
      "speaker": "B",
      "text": "It is next to the pharmacy. Where is the post office?"
    },
    {
      "speaker": "A",
      "text": "It is between the bank and the park."
    },
    {
      "speaker": "B",
      "text": "That's easy to find!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '0ee38f73-376f-4620-b8a3-ad5e22f11a28',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
  'Directions',
  'A1',
  'adults',
  11,
  3,
  'Give simple directions combining actions with ''and''. [Bridge, Lesson 3: freer practice, error-spot]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
      "text": "The bank is on your right. Thank you!"
    },
    {
      "speaker": "B",
      "text": "You're welcome!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '167901ee-4f9c-45d2-83e4-627eb6f46db4',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
  'Getting Around',
  'A1',
  'adults',
  11,
  4,
  'Combine places, directions, and simple requests. [Bridge, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Excuse me, could you tell me the way to the post office?"
    },
    {
      "speaker": "B",
      "text": "Of course. Turn left at the bank, and then go straight."
    },
    {
      "speaker": "A",
      "text": "Thanks a lot!"
    },
    {
      "speaker": "B",
      "text": "You're welcome!"
    }
  ],
  "note": "Mini role-play: you are a visitor asking a local for directions."
}$json$::jsonb,
  true
),
(
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  '6d3a133f-a786-4986-9757-4d9de8f24def',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
  'Unit Review',
  'A1',
  'adults',
  11,
  5,
  'Review town places, directions, and polite requests. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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
  'ff6d6098-2a78-4603-bf46-eb46c1b7620d',
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

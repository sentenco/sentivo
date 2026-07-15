-- A1 Adults Unit 9: Travel and Transport (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Transport
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  'Transport',
  'A1',
  'adults',
  9,
  1,
  'Name types of transport. [Bridge, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
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
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚌",
  "questions": [
    "How do you get to work?",
    "Do you take the bus or the train?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
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
      "word": "Taxi",
      "bg": "#EEEDFE"
    },
    {
      "word": "Car",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you get to work?",
    "Do you take the bus?"
  ],
  "student": [
    "I take the bus.",
    "Yes, I take the bus every day."
  ],
  "note": "Read the model text, then find the transport words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the [bus] to work."
    },
    {
      "speaker": "B",
      "text": "I take the [train]."
    },
    {
      "speaker": "A",
      "text": "Sometimes I take a [taxi]."
    }
  ],
  "blanks": [
    "bus",
    "train",
    "taxi"
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the bus to work."
    },
    {
      "speaker": "B",
      "text": "I take the train."
    },
    {
      "speaker": "A",
      "text": "Sometimes I take a taxi."
    },
    {
      "speaker": "B",
      "text": "I drive my car!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole passage together."
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I take the bus to work every day. Sometimes I take a taxi. My husband drives a car.",
  "questions": [
    "How does the writer get to work?",
    "What does the writer sometimes take?",
    "How does the husband travel?"
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I take the ___ to work.",
    "Sometimes I take a ___.",
    "My ___ drives a ___."
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 types of transport",
    "Say 'I take the ___'",
    "Talk about how I get to work"
  ],
  "challenge": "Tell me how you get to work or school!"
}$json$::jsonb,
  true
);

-- Lesson 2: Tickets and Times
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  'Tickets and Times',
  'A1',
  'adults',
  9,
  2,
  'Ask about tickets and times. [Bridge, L2, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
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
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎫",
  "questions": [
    "Have you bought a train ticket?",
    "Do you know when your bus leaves?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ticket",
      "bg": "#FAECE7"
    },
    {
      "word": "One-way",
      "bg": "#E1F5EE"
    },
    {
      "word": "Round trip",
      "bg": "#EEEDFE"
    },
    {
      "word": "Departure",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like a ticket, please.",
    "One-way or round trip?"
  ],
  "student": [
    "A round trip ticket, please.",
    "The departure is at 9am."
  ],
  "note": "Use the word bank: ticket, one-way, round trip, departure.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like a [ticket] to the city."
    },
    {
      "speaker": "B",
      "text": "[One-way] or [round trip]?"
    },
    {
      "speaker": "A",
      "text": "Round trip, please. What time is the [departure]?"
    }
  ],
  "blanks": [
    "ticket",
    "one-way",
    "departure"
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like a ticket to the city, please."
    },
    {
      "speaker": "B",
      "text": "One-way or round trip?"
    },
    {
      "speaker": "A",
      "text": "Round trip, please. What time is the departure?"
    },
    {
      "speaker": "B",
      "text": "The departure is at 9am."
    }
  ],
  "note": "Read the model exchange, then say a matching one about your own trip."
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like a round trip ticket to the city, please. What time is the departure? The departure is at 9am.",
  "questions": [
    "What kind of ticket did the customer buy?",
    "What did the customer ask about?",
    "What time is the departure?"
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a ___ ticket.",
    "What time is the ___?",
    "The departure is at ___."
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask for a ticket",
    "Say 'one-way' and 'round trip'",
    "Ask about departure times"
  ],
  "challenge": "Buy a ticket from me at a pretend station!"
}$json$::jsonb,
  true
);

-- Lesson 3: At the Station
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '03651ebb-17e7-4d58-b66c-b72720246105',
  'At the Station',
  'A1',
  'adults',
  9,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
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
  '03651ebb-17e7-4d58-b66c-b72720246105',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚉",
  "questions": [
    "Is your train usually on time?",
    "Have you missed a train?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Platform",
      "bg": "#FAECE7"
    },
    {
      "word": "Late",
      "bg": "#E1F5EE"
    },
    {
      "word": "On time",
      "bg": "#EEEDFE"
    },
    {
      "word": "But",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which platform is it?",
    "Is the train on time?"
  ],
  "student": [
    "It's platform 3.",
    "The train is late today."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The train is on [platform] 3."
    },
    {
      "speaker": "B",
      "text": "It is usually [on time], [but] today it is [late]."
    },
    {
      "speaker": "A",
      "text": "I need to hurry!"
    }
  ],
  "blanks": [
    "platform",
    "on time",
    "late"
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which platform is the train?"
    },
    {
      "speaker": "B",
      "text": "It's platform 3. It's usually on time, but today it's late."
    },
    {
      "speaker": "A",
      "text": "I need to hurry, but I have time for a coffee first."
    },
    {
      "speaker": "B",
      "text": "Good luck!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The train is on platform 3. It is usually on time, but today it is late. I need to hurry.",
  "questions": [
    "What platform is the train on?",
    "Is the train usually on time?",
    "Why does the writer need to hurry?"
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The train is on platform ___.",
    "It is usually ___, but today it is ___.",
    "I need to ___."
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'platform' and 'on time'",
    "Combine two ideas with 'but'",
    "Talk about being late or on time"
  ],
  "challenge": "Tell me about a time your bus or train was late!"
}$json$::jsonb,
  true
);

-- Lesson 4: Travel Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  'Travel Plans',
  'A1',
  'adults',
  9,
  4,
  'Unchanged by the rotation rework -- L4 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
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
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✈️",
  "questions": [
    "Where would you like to travel?",
    "Do you have travel plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like to",
      "bg": "#FAECE7"
    },
    {
      "word": "Visit",
      "bg": "#E1F5EE"
    },
    {
      "word": "Next week",
      "bg": "#EEEDFE"
    },
    {
      "word": "Excited",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where would you like to travel?",
    "When would you like to go?"
  ],
  "student": [
    "I'd like to visit my family.",
    "I'd like to go next week."
  ],
  "note": "Put it all together: transport + ticket + simple plan.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like to] visit my family."
    },
    {
      "speaker": "B",
      "text": "I want to go [next week]."
    },
    {
      "speaker": "A",
      "text": "I am [excited]!"
    }
  ],
  "blanks": [
    "i'd like to",
    "next week",
    "excited"
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your travel plans."
    },
    {
      "speaker": "B",
      "text": "I'd like to visit my family next week. I'll take the train."
    },
    {
      "speaker": "A",
      "text": "I need a round trip ticket. I am excited!"
    },
    {
      "speaker": "B",
      "text": "Have a great trip!"
    }
  ],
  "note": "Mini role-play: buy a ticket for a trip you're planning."
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to visit my family next week. I'll take the train. I need a round trip ticket. I am excited!",
  "questions": [
    "What does the writer want to do?",
    "How will the writer travel?",
    "How does the writer feel?"
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to visit ___.",
    "I'll take the ___.",
    "I am excited because ___."
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I'd like to' for a plan",
    "Combine transport and plans",
    "Say how I feel about a trip"
  ],
  "challenge": "Tell me about a trip you'd like to take!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  'Unit Review',
  'A1',
  'adults',
  9,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
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
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚌",
  "questions": [
    "How do you usually travel?",
    "Do you have travel plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
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
      "word": "Ticket",
      "bg": "#E1F5EE"
    },
    {
      "word": "But",
      "bg": "#EEEDFE"
    },
    {
      "word": "I'd like to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you travel?",
    "Do you have travel plans?"
  ],
  "student": [
    "I take the bus.",
    "I'd like to visit my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the [bus] to work."
    },
    {
      "speaker": "B",
      "text": "I need a [ticket] for the train."
    },
    {
      "speaker": "A",
      "text": "[I'd like to] visit my family."
    }
  ],
  "blanks": [
    "bus",
    "ticket",
    "i'd like to"
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about how you travel and your plans."
    },
    {
      "speaker": "B",
      "text": "I take the bus to work. I'd like to visit my family next week by train."
    },
    {
      "speaker": "A",
      "text": "I need a round trip ticket, but the train is sometimes late."
    },
    {
      "speaker": "B",
      "text": "I hope it's on time for you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I take the bus to work every day. I'd like to visit my family next week by train. I need a round trip ticket.",
  "questions": [
    "How does the writer get to work?",
    "What are the writer's plans?",
    "What ticket does the writer need?"
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I take the ___ to work.",
    "I'd like to ___.",
    "I need a ___ ticket."
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about transport",
    "Ask for a ticket",
    "Talk about a travel plan"
  ],
  "challenge": "Tell me all about how you travel and any plans you have!"
}$json$::jsonb,
  true
);

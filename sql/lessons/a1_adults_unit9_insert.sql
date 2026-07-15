-- A1 Adults Unit 9: Travel and Transport (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Transport
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
  'Transport',
  'A1',
  'adults',
  9,
  1,
  'Name types of transport. [Bridge, Lesson 1: notice/receptive, read-and-identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  'cfcae3aa-14a7-44cf-bf2e-cfd407ff7efd',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
  'Tickets and Times',
  'A1',
  'adults',
  9,
  2,
  'Ask about tickets and times. [Bridge, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '98fb7e93-ccb9-4e00-a650-5020b9c307f2',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
  'At the Station',
  'A1',
  'adults',
  9,
  3,
  'Combine transport and time with ''and''/''but''. [Bridge, Lesson 3: freer practice, error-spot]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '10503827-709c-4033-9d53-86a5ccade33a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
  'Travel Plans',
  'A1',
  'adults',
  9,
  4,
  'Combine transport, tickets, and simple plans into a talk. [Bridge, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '2b22fb1e-1e76-4771-86a3-782904d31a5a',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
  'Unit Review',
  'A1',
  'adults',
  9,
  5,
  'Review transport, tickets, and travel plans. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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
  '7b1245ac-3bdf-4445-81ed-5950200840e9',
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

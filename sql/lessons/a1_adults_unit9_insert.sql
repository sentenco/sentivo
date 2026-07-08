-- A1 Adults Unit 9: Travel and Transport (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Transport
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  'Transport',
  'A1',
  'adults',
  9,
  1,
  'Name common types of transport.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
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
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "How do you travel to work?",
    "Do you like taking the bus?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
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
      "word": "Car",
      "bg": "#EEEDFE"
    },
    {
      "word": "Bike",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you go to work?",
    "Do you take the bus?"
  ],
  "student": [
    "I go by car.",
    "Yes, I take the bus!"
  ],
  "note": "Think about how you really travel!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go by [bus]."
    },
    {
      "speaker": "B",
      "text": "I go by [train]."
    },
    {
      "speaker": "A",
      "text": "I ride a [bike]."
    }
  ],
  "blanks": [
    "bus",
    "train",
    "bike"
  ]
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you go to work?"
    },
    {
      "speaker": "B",
      "text": "I go by car."
    },
    {
      "speaker": "A",
      "text": "I take the train!"
    },
    {
      "speaker": "B",
      "text": "The train is fast!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go to work by bus. My friend goes by car. My sister rides a bike. We all travel differently!",
  "questions": [
    "How does the writer go to work?",
    "How does the friend travel?",
    "How does the sister travel?"
  ]
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go by ___.",
    "My friend goes by ___.",
    "I like traveling by ___."
  ]
}$json$::jsonb,
  true
),
(
  'daff091c-90c7-4b37-ba76-0a7c6b27d665',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four transport types",
    "Say 'I go by ___'",
    "Talk about transport"
  ],
  "challenge": "Tell me how you travel to work or school!"
}$json$::jsonb,
  true
);

-- Lesson 2: Tickets and Times
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  'Tickets and Times',
  'A1',
  'adults',
  9,
  2,
  'Ask about simple ticket and schedule information.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
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
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you check bus or train times?",
    "Have you bought a ticket in English?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
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
      "word": "What Time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Train",
      "bg": "#EEEDFE"
    },
    {
      "word": "Schedule",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time is the train?",
    "How much is the ticket?"
  ],
  "student": [
    "The train is at 9.",
    "It's five dollars."
  ],
  "note": "Ask a real travel question!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What time] is the bus?"
    },
    {
      "speaker": "B",
      "text": "How much is the [ticket]?"
    },
    {
      "speaker": "A",
      "text": "The [train] is at 9."
    }
  ],
  "blanks": [
    "What time",
    "ticket",
    "train"
  ]
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What time is the train?"
    },
    {
      "speaker": "B",
      "text": "The train is at 10 o'clock."
    },
    {
      "speaker": "A",
      "text": "How much is the ticket?"
    },
    {
      "speaker": "B",
      "text": "It's five dollars."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What time is the train? The train is at 9 o'clock. How much is the ticket? It's five dollars. I always check the time before I travel!",
  "questions": [
    "What time is the train?",
    "How much is the ticket?",
    "What does the writer check?"
  ]
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The train is at ___.",
    "The ticket is ___.",
    "I check the ___ before I travel."
  ]
}$json$::jsonb,
  true
),
(
  '82738be3-7515-4d0f-aeb0-94d84a1835fc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What time is ___?'",
    "Ask 'How much is the ticket?'",
    "Talk about schedules"
  ],
  "challenge": "Ask me about a train or bus time!"
}$json$::jsonb,
  true
);

-- Lesson 3: At the Station
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  'At the Station',
  'A1',
  'adults',
  9,
  3,
  'Use simple phrases in a transport situation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
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
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Have you bought a ticket at a station?",
    "What do you say at a ticket counter?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "One Ticket Please",
      "bg": "#FAECE7"
    },
    {
      "word": "To The City Center",
      "bg": "#E1F5EE"
    },
    {
      "word": "What Time",
      "bg": "#EEEDFE"
    },
    {
      "word": "Platform",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you want to go?",
    "What time do you want to leave?"
  ],
  "student": [
    "One ticket, please. To the city center.",
    "At 9 o'clock, please."
  ],
  "note": "Practice like you're really at the station!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[One ticket please]."
    },
    {
      "speaker": "B",
      "text": "[To the city center]."
    },
    {
      "speaker": "A",
      "text": "What [platform] is it?"
    }
  ],
  "blanks": [
    "One ticket please",
    "To the city center",
    "platform"
  ]
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "One ticket, please."
    },
    {
      "speaker": "B",
      "text": "Where do you want to go?"
    },
    {
      "speaker": "A",
      "text": "To the city center, please."
    },
    {
      "speaker": "B",
      "text": "That's platform 3!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "One ticket, please. To the city center. What time? At 9 o'clock. What platform? Platform 3. Buying a ticket is easy!",
  "questions": [
    "Where does the traveler want to go?",
    "What time is the trip?",
    "What platform is it?"
  ]
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "One ticket, please. To ___.",
    "The time is ___.",
    "The platform is ___."
  ]
}$json$::jsonb,
  true
),
(
  '40f78b3d-4055-4eae-b4b9-7fe9398e0959',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'One ticket, please'",
    "Say a destination",
    "Ask about the platform"
  ],
  "challenge": "Buy a ticket from me — say the whole conversation!"
}$json$::jsonb,
  true
);

-- Lesson 4: Travel Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  'Travel Plans',
  'A1',
  'adults',
  9,
  4,
  'Talk simply about a short travel plan.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
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
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you have any travel plans?",
    "How do you like to travel?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I Go To",
      "bg": "#FAECE7"
    },
    {
      "word": "I Take The",
      "bg": "#E1F5EE"
    },
    {
      "word": "Trip",
      "bg": "#EEEDFE"
    },
    {
      "word": "Destination",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where are you going?",
    "How are you traveling?"
  ],
  "student": [
    "I'm going to the city.",
    "I'm taking the train."
  ],
  "note": "Talk about a real or imaginary trip!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I go to] the city."
    },
    {
      "speaker": "B",
      "text": "[I take the] bus."
    },
    {
      "speaker": "A",
      "text": "It is a short [trip]."
    }
  ],
  "blanks": [
    "I go to",
    "I take the",
    "trip"
  ]
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where are you going this weekend?"
    },
    {
      "speaker": "B",
      "text": "I'm going to the coast. I'm taking the train."
    },
    {
      "speaker": "A",
      "text": "I'm going to the city by car!"
    },
    {
      "speaker": "B",
      "text": "Have a good trip!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This weekend, I go to the city. I take the train. It is a short trip. I like traveling by train!",
  "questions": [
    "Where is the writer going?",
    "How is the writer traveling?",
    "Is it a short or long trip?"
  ]
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go to ___.",
    "I take the ___.",
    "My trip is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4658fb62-58bf-43db-858d-ed738fbd927a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I go to ___'",
    "Say 'I take the ___'",
    "Talk about a travel plan"
  ],
  "challenge": "Tell me about a trip you want to take!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  'Unit Review',
  'A1',
  'adults',
  9,
  5,
  'Talk about transport, tickets, and simple travel plans.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
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
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What transport words do you remember?",
    "How do you usually travel?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
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
      "word": "Platform",
      "bg": "#EEEDFE"
    },
    {
      "word": "Trip",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you travel?",
    "What time is the bus?"
  ],
  "student": [
    "I go by bus.",
    "The bus is at 9."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go by [bus]."
    },
    {
      "speaker": "B",
      "text": "[One ticket please]."
    },
    {
      "speaker": "A",
      "text": "It is a short [trip]."
    }
  ],
  "blanks": [
    "bus",
    "One ticket please",
    "trip"
  ]
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you travel to work?"
    },
    {
      "speaker": "B",
      "text": "I go by train."
    },
    {
      "speaker": "A",
      "text": "What time is the train?"
    },
    {
      "speaker": "B",
      "text": "It's at 8 o'clock. One ticket, please!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go to work by train. The train is at 8 o'clock. I buy one ticket, please, to the city center. It is a short trip. I like traveling by train!",
  "questions": [
    "How does the writer travel to work?",
    "What time is the train?",
    "Is it a short or long trip?"
  ]
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go by ___.",
    "The ___ is at ___.",
    "My trip is ___."
  ]
}$json$::jsonb,
  true
),
(
  '282cb436-b549-4358-bba3-1fd43177e2fa',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name transport types",
    "Ask about tickets and times",
    "Use station phrases",
    "Talk about travel plans"
  ],
  "challenge": "Plan a trip with me — tell me how, when, and where!"
}$json$::jsonb,
  true
);

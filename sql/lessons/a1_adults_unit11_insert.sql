-- A1 Adults Unit 11: Places in Town and Directions (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places in Town
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  'Places in Town',
  'A1',
  'adults',
  11,
  1,
  'Name common places in town.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
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
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What places do you go to near your home?",
    "Do you know your town well?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
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
      "word": "Station",
      "bg": "#E1F5EE"
    },
    {
      "word": "Café",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hospital",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the bank?",
    "Do you go to a café often?"
  ],
  "student": [
    "The bank is near here.",
    "Yes, I go every week!"
  ],
  "note": "Think about places near your home!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go to the [bank]."
    },
    {
      "speaker": "B",
      "text": "I go to the [station]."
    },
    {
      "speaker": "A",
      "text": "I go to a [café]."
    }
  ],
  "blanks": [
    "bank",
    "station",
    "café"
  ]
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What places do you go to often?"
    },
    {
      "speaker": "B",
      "text": "I go to the supermarket and the bank."
    },
    {
      "speaker": "A",
      "text": "I go to the café every morning!"
    },
    {
      "speaker": "B",
      "text": "That sounds nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go to the bank every month. I go to the station every day for work. I go to a café on weekends. I know my town well!",
  "questions": [
    "How often does the writer go to the bank?",
    "Why does the writer go to the station?",
    "When does the writer go to the café?"
  ]
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I go to the ___.",
    "I go there ___.",
    "My favorite place in town is the ___."
  ]
}$json$::jsonb,
  true
),
(
  'b1223db7-f898-4471-a4ea-b76d34395a27',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four places in town",
    "Say 'I go to the ___'",
    "Talk about places I visit"
  ],
  "challenge": "Tell me three places you go to often!"
}$json$::jsonb,
  true
);

-- Lesson 2: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd51f73d9-fb1f-4939-9652-98421e905725',
  'Where Is It?',
  'A1',
  'adults',
  11,
  2,
  'Ask and answer simple location questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
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
  'd51f73d9-fb1f-4939-9652-98421e905725',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Is your home near or far from the city center?",
    "What is next to your home?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where Is",
      "bg": "#FAECE7"
    },
    {
      "word": "It's Next To",
      "bg": "#E1F5EE"
    },
    {
      "word": "Near",
      "bg": "#EEEDFE"
    },
    {
      "word": "Far",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
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
    "It's next to the station.",
    "Yes, it's very near."
  ],
  "note": "Describe a real location near you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] the café?"
    },
    {
      "speaker": "B",
      "text": "[It's next to] the bank."
    },
    {
      "speaker": "A",
      "text": "It is [near] here."
    }
  ],
  "blanks": [
    "Where is",
    "It's next to",
    "near"
  ]
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the hospital?"
    },
    {
      "speaker": "B",
      "text": "It's next to the school."
    },
    {
      "speaker": "A",
      "text": "Is it far from here?"
    },
    {
      "speaker": "B",
      "text": "No, it's quite near!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is the bank? It's next to the station. Is it near here? Yes, it's very near. I always ask for locations when I'm new somewhere.",
  "questions": [
    "Where is the bank?",
    "Is the bank near or far?",
    "When does the writer ask for locations?"
  ]
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is next to the ___.",
    "It is near/far from ___.",
    "Where is the ___? It's ___."
  ]
}$json$::jsonb,
  true
),
(
  'd51f73d9-fb1f-4939-9652-98421e905725',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is the ___?'",
    "Answer with location phrases",
    "Say 'near' and 'far'"
  ],
  "challenge": "Ask me where something in town is!"
}$json$::jsonb,
  true
);

-- Lesson 3: Directions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  'Directions',
  'A1',
  'adults',
  11,
  3,
  'Understand and give simple directions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
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
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you know the way to the nearest shop?",
    "Can you give simple directions?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Go Straight",
      "bg": "#FAECE7"
    },
    {
      "word": "Turn Left",
      "bg": "#E1F5EE"
    },
    {
      "word": "Turn Right",
      "bg": "#EEEDFE"
    },
    {
      "word": "Stop",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
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
    "Go straight, then turn left.",
    "Yes, turn left at the corner."
  ],
  "note": "Give directions to a real place near you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Go straight]."
    },
    {
      "speaker": "B",
      "text": "[Turn left] at the corner."
    },
    {
      "speaker": "A",
      "text": "Then [turn right]."
    }
  ],
  "blanks": [
    "Go straight",
    "Turn left",
    "turn right"
  ]
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do I get to the station?"
    },
    {
      "speaker": "B",
      "text": "Go straight, then turn right."
    },
    {
      "speaker": "A",
      "text": "Then what?"
    },
    {
      "speaker": "B",
      "text": "Stop at the café. The station is there!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How do I get to the bank? Go straight. Turn left at the corner. Then turn right. Stop at the café. The bank is there!",
  "questions": [
    "What is the first direction?",
    "What do you do at the corner?",
    "Where does the route stop?"
  ]
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Go ___.",
    "Turn ___ at the ___.",
    "Stop at the ___."
  ]
}$json$::jsonb,
  true
),
(
  'ec1b37f7-f87b-430d-acb1-464cd9f50270',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'go straight', 'turn left/right'",
    "Give simple directions",
    "Follow a route"
  ],
  "challenge": "Give me directions from your home to a shop!"
}$json$::jsonb,
  true
);

-- Lesson 4: Getting Around
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  'Getting Around',
  'A1',
  'adults',
  11,
  4,
  'Ask for simple help in town.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
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
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Have you asked a stranger for directions?",
    "Do you feel comfortable asking for help?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where Is",
      "bg": "#FAECE7"
    },
    {
      "word": "How Do I Get To",
      "bg": "#E1F5EE"
    },
    {
      "word": "Excuse Me",
      "bg": "#EEEDFE"
    },
    {
      "word": "Help",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Excuse me, where is the station?",
    "Can you help me?"
  ],
  "student": [
    "It's over there.",
    "Yes, of course!"
  ],
  "note": "Practice asking a stranger for help!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Excuse me], where is the bank?"
    },
    {
      "speaker": "B",
      "text": "[How do I get to] the station?"
    },
    {
      "speaker": "A",
      "text": "Can you [help] me?"
    }
  ],
  "blanks": [
    "Excuse me",
    "How do I get to",
    "help"
  ]
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Excuse me, where is the hospital?"
    },
    {
      "speaker": "B",
      "text": "It's next to the school."
    },
    {
      "speaker": "A",
      "text": "How do I get there?"
    },
    {
      "speaker": "B",
      "text": "Go straight, then turn left!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Excuse me, where is the station? It's next to the bank. How do I get there? Go straight, then turn right. Thank you for your help!",
  "questions": [
    "What does the writer ask?",
    "Where is the station?",
    "What direction does the writer follow?"
  ]
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Excuse me, where is the ___?",
    "How do I get to the ___?",
    "Thank you for your ___."
  ]
}$json$::jsonb,
  true
),
(
  '612fea64-5e29-4556-bf3c-fbe49b59a731',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Excuse me'",
    "Ask 'How do I get to ___?'",
    "Ask for and give help in town"
  ],
  "challenge": "Ask me for help finding a place in town!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  'Unit Review',
  'A1',
  'adults',
  11,
  5,
  'Talk about places in town and simple directions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
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
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What town words do you remember?",
    "Can you give directions to your favorite place?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
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
      "word": "Where Is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Turn Left",
      "bg": "#EEEDFE"
    },
    {
      "word": "Excuse Me",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the bank?",
    "How do I get there?"
  ],
  "student": [
    "It's next to the station.",
    "Go straight, then turn left."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go to the [bank]."
    },
    {
      "speaker": "B",
      "text": "[Where is] the station?"
    },
    {
      "speaker": "A",
      "text": "[Turn left] at the corner."
    }
  ],
  "blanks": [
    "bank",
    "Where is",
    "Turn left"
  ]
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Excuse me, where is the café?"
    },
    {
      "speaker": "B",
      "text": "It's next to the bank. Go straight, then turn right."
    },
    {
      "speaker": "A",
      "text": "Thank you!"
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
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Excuse me, where is the bank? It's next to the station. How do I get there? Go straight, then turn left. Thank you for your help! I found the bank easily.",
  "questions": [
    "Where is the bank?",
    "What directions were given?",
    "Did the writer find the bank?"
  ]
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is next to the ___.",
    "Go ___, then turn ___.",
    "Excuse me, where is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  '08aeae71-9578-45cc-9932-3f6be1628f28',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in town",
    "Ask and answer location questions",
    "Give simple directions",
    "Ask for help politely"
  ],
  "challenge": "Ask me for directions to somewhere, and I'll guide you!"
}$json$::jsonb,
  true
);

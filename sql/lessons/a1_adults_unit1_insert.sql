-- A1 Adults Unit 1: Greetings and Personal Information (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hello and Introductions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  'Hello and Introductions',
  'A1',
  'adults',
  1,
  1,
  'Introduce yourself and exchange basic personal information.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
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
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What's your name?",
    "What is your job?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Name",
      "bg": "#FAECE7"
    },
    {
      "word": "Country",
      "bg": "#E1F5EE"
    },
    {
      "word": "Job",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hello",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hello! What's your name?",
    "What is your job?"
  ],
  "student": [
    "Hello! My name is Carlos.",
    "I am an engineer."
  ],
  "note": "Use your real name and job when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My [name] is Carlos."
    },
    {
      "speaker": "B",
      "text": "I am from [Mexico]."
    },
    {
      "speaker": "A",
      "text": "I am a [teacher]."
    }
  ],
  "blanks": [
    "name",
    "Mexico",
    "teacher"
  ]
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! What's your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Elena."
    },
    {
      "speaker": "A",
      "text": "What is your job?"
    },
    {
      "speaker": "B",
      "text": "I am a nurse."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Carlos. I am from Mexico. I am a teacher. Nice to meet you!",
  "questions": [
    "What is his name?",
    "Where is he from?",
    "What is his job?"
  ]
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am from ___.",
    "I am a ___."
  ]
}$json$::jsonb,
  true
),
(
  'cbe72ac5-563d-4c9e-bdda-f89b48b71b51',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my name and country",
    "Say my job",
    "Greet someone new"
  ],
  "challenge": "Introduce yourself to me right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Personal Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  'Personal Questions',
  'A1',
  'adults',
  1,
  2,
  'Ask and answer basic personal information questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
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
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What questions do you ask a new colleague?",
    "Do you know your coworker's phone number?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What's Your Name",
      "bg": "#FAECE7"
    },
    {
      "word": "Where Are You From",
      "bg": "#E1F5EE"
    },
    {
      "word": "Phone Number",
      "bg": "#EEEDFE"
    },
    {
      "word": "Job",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where are you from?",
    "What's your phone number?"
  ],
  "student": [
    "I'm from Brazil.",
    "It's 555-1234."
  ],
  "note": "Ask a real question and answer honestly!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where are you from]?"
    },
    {
      "speaker": "B",
      "text": "What is your [job]?"
    },
    {
      "speaker": "A",
      "text": "What's your [phone number]?"
    }
  ],
  "blanks": [
    "Where are you from",
    "job",
    "phone number"
  ]
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where are you from?"
    },
    {
      "speaker": "B",
      "text": "I'm from Colombia."
    },
    {
      "speaker": "A",
      "text": "What's your job?"
    },
    {
      "speaker": "B",
      "text": "I'm an accountant."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where are you from? I'm from Brazil. What is your job? I am an engineer. What's your phone number? It's 555-1234.",
  "questions": [
    "Where is the speaker from?",
    "What is the speaker's job?",
    "What is the phone number?"
  ]
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Where are you from? ___.",
    "What is your job? ___.",
    "My phone number is ___."
  ]
}$json$::jsonb,
  true
),
(
  '408b4dcc-16b8-4be1-acbb-ee9cc7dba516',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where are you from?'",
    "Ask 'What is your job?'",
    "Say a phone number"
  ],
  "challenge": "Ask me these three questions right now!"
}$json$::jsonb,
  true
);

-- Lesson 3: Spelling and Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  'Spelling and Numbers',
  'A1',
  'adults',
  1,
  3,
  'Spell key words and say numbers used in personal information.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
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
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Can you spell your name?",
    "What is your phone number?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Spell",
      "bg": "#FAECE7"
    },
    {
      "word": "Number",
      "bg": "#E1F5EE"
    },
    {
      "word": "Letter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Address",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you spell your name?",
    "What's your address?"
  ],
  "student": [
    "C-A-R-L-O-S.",
    "It's 22 Main Street."
  ],
  "note": "Spell your real name out loud!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Can you [spell] your name?"
    },
    {
      "speaker": "B",
      "text": "C-A-R-L-O-S. That's my [name]."
    },
    {
      "speaker": "A",
      "text": "My phone [number] is 555-1234."
    }
  ],
  "blanks": [
    "spell",
    "name",
    "number"
  ]
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Can you spell your name?"
    },
    {
      "speaker": "B",
      "text": "E-L-E-N-A."
    },
    {
      "speaker": "A",
      "text": "What's your phone number?"
    },
    {
      "speaker": "B",
      "text": "It's 555-9876."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My name is Carlos. C-A-R-L-O-S. My phone number is 555-1234. I can spell my name and say my number in English!",
  "questions": [
    "How is Carlos's name spelled?",
    "What is his phone number?",
    "Can he spell his name in English?"
  ]
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is spelled ___.",
    "My phone number is ___.",
    "I can count to ___."
  ]
}$json$::jsonb,
  true
),
(
  '4c7791fa-5ac7-40ac-a4b5-a7f56710c0b2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Spell my name",
    "Say a phone number",
    "Use numbers 1-20"
  ],
  "challenge": "Spell your name for me right now!"
}$json$::jsonb,
  true
);

-- Lesson 4: A First Meeting
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  'A First Meeting',
  'A1',
  'adults',
  1,
  4,
  'Use a short first-meeting conversation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
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
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "How do you greet a new colleague?",
    "What do you say when you meet someone new at work?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Meet",
      "bg": "#FAECE7"
    },
    {
      "word": "Nice",
      "bg": "#E1F5EE"
    },
    {
      "word": "Too",
      "bg": "#EEEDFE"
    },
    {
      "word": "New",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hi, I'm Elena. Nice to meet you.",
    "Are you new here?"
  ],
  "student": [
    "Nice to meet you too!",
    "Yes, this is my first day."
  ],
  "note": "Practice like you're really meeting a new colleague!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi, I'm Elena. [Nice] to meet you."
    },
    {
      "speaker": "B",
      "text": "Nice to [meet] you too!"
    },
    {
      "speaker": "A",
      "text": "Are you [new] here?"
    }
  ],
  "blanks": [
    "Nice",
    "meet",
    "new"
  ]
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi, I'm Carlos. Nice to meet you."
    },
    {
      "speaker": "B",
      "text": "Nice to meet you too! I'm Elena."
    },
    {
      "speaker": "A",
      "text": "Are you new here?"
    },
    {
      "speaker": "B",
      "text": "Yes, this is my first week!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Elena. Nice to meet you! I'm new here. This is my first day. What's your name?",
  "questions": [
    "What does Elena say first?",
    "Is Elena new?",
    "What question does Elena ask?"
  ]
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hi, I'm ___. Nice to meet you.",
    "Are you new here? ___.",
    "This is my first ___."
  ]
}$json$::jsonb,
  true
),
(
  '6a0b8738-d9e4-40cc-aacd-806834b5c440',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Nice to meet you'",
    "Ask 'Are you new here?'",
    "Have a first-meeting conversation"
  ],
  "challenge": "Meet me for the first time — say the whole conversation!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  'Unit Review',
  'A1',
  'adults',
  1,
  5,
  'Complete a short introduction conversation independently.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
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
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What greetings do you remember?",
    "Can you introduce yourself?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Name",
      "bg": "#FAECE7"
    },
    {
      "word": "Job",
      "bg": "#E1F5EE"
    },
    {
      "word": "Meet",
      "bg": "#EEEDFE"
    },
    {
      "word": "Spell",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's your name?",
    "What is your job?"
  ],
  "student": [
    "My name is Carlos.",
    "I am an engineer."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! My [name] is Carlos."
    },
    {
      "speaker": "B",
      "text": "Nice to [meet] you!"
    },
    {
      "speaker": "A",
      "text": "Can you [spell] your name?"
    }
  ],
  "blanks": [
    "name",
    "meet",
    "spell"
  ]
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! What's your name and job?"
    },
    {
      "speaker": "B",
      "text": "My name is Elena. I'm a nurse. Nice to meet you!"
    },
    {
      "speaker": "A",
      "text": "Where are you from?"
    },
    {
      "speaker": "B",
      "text": "I'm from Brazil!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Carlos. I am an engineer. I am from Mexico. Nice to meet you! Can you spell your name? C-A-R-L-O-S. What's your name?",
  "questions": [
    "What is his name and job?",
    "Where is he from?",
    "What does he ask at the end?"
  ]
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am a ___.",
    "Nice to meet you, ___!"
  ]
}$json$::jsonb,
  true
),
(
  'f1ac3c25-8102-4c2a-b642-31a407c06b21',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Introduce myself fully",
    "Ask basic questions",
    "Spell my name",
    "Meet someone new"
  ],
  "challenge": "Have a full introduction conversation with me!"
}$json$::jsonb,
  true
);

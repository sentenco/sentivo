-- A1 Teens Unit 1: Greetings and Introductions (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hello and Me
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  'Hello and Me',
  'A1',
  'teens',
  1,
  1,
  'Introduce yourself and exchange basic greeting information.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
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
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What's your name?",
    "How are you today?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "Name",
      "bg": "#E1F5EE"
    },
    {
      "word": "Age",
      "bg": "#EEEDFE"
    },
    {
      "word": "Country",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hi! What's your name?",
    "How old are you?"
  ],
  "student": [
    "Hi! My name is Ana.",
    "I'm fourteen."
  ],
  "note": "Use your real name and age when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! My [name] is Ana."
    },
    {
      "speaker": "B",
      "text": "I am [fourteen] years old."
    },
    {
      "speaker": "A",
      "text": "I am from [Brazil]."
    }
  ],
  "blanks": [
    "name",
    "fourteen",
    "Brazil"
  ]
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! What's your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Sam."
    },
    {
      "speaker": "A",
      "text": "How old are you?"
    },
    {
      "speaker": "B",
      "text": "I'm fifteen years old!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Ana. I am fourteen years old. I am from Brazil. Nice to meet you!",
  "questions": [
    "What is her name?",
    "How old is she?",
    "Where is she from?"
  ]
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am ___ years old.",
    "I am from ___."
  ]
}$json$::jsonb,
  true
),
(
  '270e8eb8-fa00-47c5-81ad-7f0bc5db40cf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my name and age",
    "Say where I'm from",
    "Greet someone new"
  ],
  "challenge": "Introduce yourself to me right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Questions and Answers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  'Questions and Answers',
  'A1',
  'teens',
  1,
  2,
  'Ask and answer basic introduction questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
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
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What questions do you ask a new person?",
    "Do you know your friend's age?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What's",
      "bg": "#FAECE7"
    },
    {
      "word": "How old",
      "bg": "#E1F5EE"
    },
    {
      "word": "Where",
      "bg": "#EEEDFE"
    },
    {
      "word": "From",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where are you from?",
    "What's your name?"
  ],
  "student": [
    "I'm from Mexico.",
    "My name is Leo."
  ],
  "note": "Ask a real question and answer honestly!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What's] your name?"
    },
    {
      "speaker": "B",
      "text": "[How old] are you?"
    },
    {
      "speaker": "A",
      "text": "[Where] are you from?"
    }
  ],
  "blanks": [
    "What's",
    "How old",
    "Where"
  ]
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Mia."
    },
    {
      "speaker": "A",
      "text": "Where are you from?"
    },
    {
      "speaker": "B",
      "text": "I'm from Spain!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What's your name? My name is Leo. How old are you? I'm thirteen. Where are you from? I'm from Mexico. Nice to meet you!",
  "questions": [
    "What is his name?",
    "How old is he?",
    "Where is he from?"
  ]
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What's your name? ___.",
    "How old are you? ___.",
    "Where are you from? ___."
  ]
}$json$::jsonb,
  true
),
(
  'f8e795c4-571d-4831-a1c0-f8fe6a5e5e9c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What's your name?'",
    "Ask 'How old are you?'",
    "Ask 'Where are you from?'"
  ],
  "challenge": "Ask me these three questions right now!"
}$json$::jsonb,
  true
);

-- Lesson 3: Spelling and Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0853aa3c-3283-40f6-b661-c63f5a413697',
  'Spelling and Numbers',
  'A1',
  'teens',
  1,
  3,
  'Spell a name and say basic numbers in personal information.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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
  '0853aa3c-3283-40f6-b661-c63f5a413697',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔤",
  "questions": [
    "Can you spell your name?",
    "What is your phone number?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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
      "word": "Phone",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you spell your name?",
    "What's your phone number?"
  ],
  "student": [
    "A-N-A.",
    "It's 555-1234."
  ],
  "note": "Spell your real name out loud!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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
      "text": "A-N-A. That's my [name]."
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
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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
      "text": "L-E-O."
    },
    {
      "speaker": "A",
      "text": "What's your phone number?"
    },
    {
      "speaker": "B",
      "text": "It's 555-6789!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My name is Ana. A-N-A. My phone number is 555-1234. I can spell my name and say my number in English!",
  "questions": [
    "How do you spell Ana's name?",
    "What is her phone number?",
    "Can she spell her name in English?"
  ]
}$json$::jsonb,
  true
),
(
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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
  '0853aa3c-3283-40f6-b661-c63f5a413697',
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

-- Lesson 4: Meeting Someone New
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '37409c0d-ebc4-4894-acaf-223f21820246',
  'Meeting Someone New',
  'A1',
  'teens',
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
  '37409c0d-ebc4-4894-acaf-223f21820246',
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
  '37409c0d-ebc4-4894-acaf-223f21820246',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "How do you greet someone new?",
    "What do you say when you meet a new classmate?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '37409c0d-ebc4-4894-acaf-223f21820246',
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
  '37409c0d-ebc4-4894-acaf-223f21820246',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hi, I'm Sam. Nice to meet you.",
    "Are you new here?"
  ],
  "student": [
    "Nice to meet you too!",
    "Yes, I'm new."
  ],
  "note": "Practice like you're really meeting someone new!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '37409c0d-ebc4-4894-acaf-223f21820246',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi, I'm Sam. [Nice] to meet you."
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
  '37409c0d-ebc4-4894-acaf-223f21820246',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi, I'm Mia. Nice to meet you."
    },
    {
      "speaker": "B",
      "text": "Nice to meet you too! I'm Leo."
    },
    {
      "speaker": "A",
      "text": "Are you new here?"
    },
    {
      "speaker": "B",
      "text": "Yes, this is my first day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '37409c0d-ebc4-4894-acaf-223f21820246',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Sam. Nice to meet you! I'm new here. This is my first day. What's your name?",
  "questions": [
    "What does Sam say first?",
    "Is Sam new?",
    "What question does Sam ask?"
  ]
}$json$::jsonb,
  true
),
(
  '37409c0d-ebc4-4894-acaf-223f21820246',
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
  '37409c0d-ebc4-4894-acaf-223f21820246',
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
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  'Unit Review',
  'A1',
  'teens',
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
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
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
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What greetings do you remember?",
    "Can you introduce yourself?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "Name",
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
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's your name?",
    "Where are you from?"
  ],
  "student": [
    "My name is Ana.",
    "I'm from Brazil."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! My [name] is Ana."
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
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hi! What's your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Leo. Nice to meet you!"
    },
    {
      "speaker": "A",
      "text": "How old are you and where are you from?"
    },
    {
      "speaker": "B",
      "text": "I'm thirteen and I'm from Mexico!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Ana. I am fourteen. I am from Brazil. Nice to meet you! Can you spell your name? A-N-A. What's your name?",
  "questions": [
    "What is her name and age?",
    "Where is she from?",
    "What does she ask at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am from ___.",
    "Nice to meet you, ___!"
  ]
}$json$::jsonb,
  true
),
(
  '183b45f3-e45e-4472-a02b-c9ec53f8dbd9',
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

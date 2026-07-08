-- A1 Teens Unit 2: Family and People I Know (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '75bd9355-a220-4298-b905-58b97f044131',
  'My Family',
  'A1',
  'teens',
  2,
  1,
  'Name basic family members.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '75bd9355-a220-4298-b905-58b97f044131',
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
  '75bd9355-a220-4298-b905-58b97f044131',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Do you have siblings?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mother",
      "bg": "#FAECE7"
    },
    {
      "word": "Father",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE"
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mother?"
  ],
  "student": [
    "This is my mother.",
    "Yes, this is my father!"
  ],
  "note": "Think of a real family photo!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mother]."
    },
    {
      "speaker": "B",
      "text": "This is my [father]."
    },
    {
      "speaker": "A",
      "text": "I have a [sister]."
    }
  ],
  "blanks": [
    "mother",
    "father",
    "sister"
  ]
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is this?"
    },
    {
      "speaker": "B",
      "text": "This is my brother."
    },
    {
      "speaker": "A",
      "text": "Do you have siblings?"
    },
    {
      "speaker": "B",
      "text": "Yes, one sister and one brother!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my mother. This is my father. I have one sister and one brother. I love my family!",
  "questions": [
    "How many siblings does the writer have?",
    "Who is in the family?",
    "Does the writer love their family?"
  ]
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have a ___.",
    "My family has ___ people."
  ]
}$json$::jsonb,
  true
),
(
  '75bd9355-a220-4298-b905-58b97f044131',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four family members",
    "Say 'This is my ___'",
    "Talk about my family"
  ],
  "challenge": "Tell me about your family right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Talking About Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  'Talking About Family',
  'A1',
  'teens',
  2,
  2,
  'Say simple facts about family members.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
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
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "What does your mother do?",
    "How old is your brother or sister?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Parents",
      "bg": "#FAECE7"
    },
    {
      "word": "Have Got",
      "bg": "#E1F5EE"
    },
    {
      "word": "Job",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What does your father do?",
    "How old is your mother?"
  ],
  "student": [
    "My father is a teacher.",
    "My mother is forty."
  ],
  "note": "Say one real fact about a family member!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have [got] a sister."
    },
    {
      "speaker": "B",
      "text": "My [parents] work hard."
    },
    {
      "speaker": "A",
      "text": "My sister is [old]er than me."
    }
  ],
  "blanks": [
    "got",
    "parents",
    "old"
  ]
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What does your mother do?"
    },
    {
      "speaker": "B",
      "text": "My mother is a doctor."
    },
    {
      "speaker": "A",
      "text": "I have got a younger brother!"
    },
    {
      "speaker": "B",
      "text": "That's nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have got a big family. My mother is a teacher. My father is a driver. My parents work hard. I love them very much.",
  "questions": [
    "What does the mother do?",
    "What does the father do?",
    "Do the parents work hard?"
  ]
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My mother is a ___.",
    "My father is a ___.",
    "I have got a ___."
  ]
}$json$::jsonb,
  true
),
(
  '50c9a74c-8d19-4edc-acf5-ba28d42f6ba8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I have got a ___'",
    "Say a family member's job",
    "Talk about family facts"
  ],
  "challenge": "Tell me one fact about someone in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: People I Know
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  'People I Know',
  'A1',
  'teens',
  2,
  3,
  'Describe people in the family with simple words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
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
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your brother tall or short?",
    "Who is the oldest in your family?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tall",
      "bg": "#FAECE7"
    },
    {
      "word": "Short",
      "bg": "#E1F5EE"
    },
    {
      "word": "Young",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your father tall?",
    "Is your sister young?"
  ],
  "student": [
    "Yes, he is tall.",
    "Yes, she is young."
  ],
  "note": "Describe a real family member!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My brother is [tall]."
    },
    {
      "speaker": "B",
      "text": "My grandma is [old]."
    },
    {
      "speaker": "A",
      "text": "My cousin is [young]."
    }
  ],
  "blanks": [
    "tall",
    "old",
    "young"
  ]
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your father tall or short?"
    },
    {
      "speaker": "B",
      "text": "My father is tall!"
    },
    {
      "speaker": "A",
      "text": "Is your sister young or old?"
    },
    {
      "speaker": "B",
      "text": "She is young, only ten!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My brother is tall. My sister is short. My grandma is old and kind. My cousin is young. My family has many different people!",
  "questions": [
    "Is the brother tall or short?",
    "Is the sister tall or short?",
    "Is the grandma young or old?"
  ]
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is tall/short.",
    "My ___ is young/old.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '58b4bd80-c084-44ab-86b6-03c02be47689',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall', 'short', 'young', 'old'",
    "Describe one family member",
    "Complete 'My ___ is ___'"
  ],
  "challenge": "Describe one family member using two adjectives!"
}$json$::jsonb,
  true
);

-- Lesson 4: Family Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  'Family Questions',
  'A1',
  'teens',
  2,
  4,
  'Answer simple questions about family.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
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
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "Do you have a sister?",
    "How many brothers do you have?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Do You Have",
      "bg": "#FAECE7"
    },
    {
      "word": "How Many",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sibling",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cousin",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a sister?",
    "How many brothers do you have?"
  ],
  "student": [
    "Yes, I have one sister.",
    "I have two brothers."
  ],
  "note": "Answer truthfully about your own family!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you have] a brother?"
    },
    {
      "speaker": "B",
      "text": "[How many] cousins do you have?"
    },
    {
      "speaker": "A",
      "text": "I have three [cousin]s."
    }
  ],
  "blanks": [
    "Do you have",
    "How many",
    "cousin"
  ]
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a sister?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have one sister."
    },
    {
      "speaker": "A",
      "text": "How many cousins do you have?"
    },
    {
      "speaker": "B",
      "text": "I have five cousins!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you have a sister? Yes, I have one sister. How many brothers do you have? I have two brothers. I have a big family!",
  "questions": [
    "How many sisters does the writer have?",
    "How many brothers does the writer have?",
    "Is it a big family?"
  ]
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you have a sister? ___.",
    "How many brothers? ___.",
    "I have ___ cousins."
  ]
}$json$::jsonb,
  true
),
(
  '4e2b077a-be1e-40cb-8a3c-c5aa52adf153',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you have a ___?'",
    "Ask 'How many ___?'",
    "Answer family questions"
  ],
  "challenge": "Ask me two questions about my family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '542c175b-3a02-4130-a038-9abfef45d99e',
  'Unit Review',
  'A1',
  'teens',
  2,
  5,
  'Talk briefly about family using learned words and questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
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
  '542c175b-3a02-4130-a038-9abfef45d99e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "What family words do you remember?",
    "Can you describe your family?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mother",
      "bg": "#FAECE7"
    },
    {
      "word": "Father",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tall",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Do you have a sister?"
  ],
  "student": [
    "This is my mother.",
    "Yes, I have one sister."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mother]."
    },
    {
      "speaker": "B",
      "text": "My brother is [tall]."
    },
    {
      "speaker": "A",
      "text": "[Do you have] a sister?"
    }
  ],
  "blanks": [
    "mother",
    "tall",
    "Do you have"
  ]
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your family."
    },
    {
      "speaker": "B",
      "text": "I have a mother, a father, and one brother."
    },
    {
      "speaker": "A",
      "text": "Is your brother tall?"
    },
    {
      "speaker": "B",
      "text": "Yes, he is very tall!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a big family. My mother is a teacher. My father is tall. I have one sister and one brother. My grandma is old and kind. I love my family!",
  "questions": [
    "What does the mother do?",
    "How many siblings does the writer have?",
    "How is the grandma described?"
  ]
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family has ___ people.",
    "My ___ is ___.",
    "I have got a ___."
  ]
}$json$::jsonb,
  true
),
(
  '542c175b-3a02-4130-a038-9abfef45d99e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name family members",
    "Describe family with adjectives",
    "Ask and answer family questions"
  ],
  "challenge": "Tell me all about your family right now!"
}$json$::jsonb,
  true
);

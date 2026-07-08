-- A1 Adults Unit 2: Family and People (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  'My Family',
  'A1',
  'adults',
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
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
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
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Who is in your family?",
    "Do you have children?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Partner",
      "bg": "#FAECE7"
    },
    {
      "word": "Husband",
      "bg": "#E1F5EE"
    },
    {
      "word": "Wife",
      "bg": "#EEEDFE"
    },
    {
      "word": "Son",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your husband?"
  ],
  "student": [
    "This is my husband.",
    "Yes, this is my wife!"
  ],
  "note": "Think of your real family!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [husband]."
    },
    {
      "speaker": "B",
      "text": "This is my [wife]."
    },
    {
      "speaker": "A",
      "text": "I have a [son]."
    }
  ],
  "blanks": [
    "husband",
    "wife",
    "son"
  ]
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
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
      "text": "This is my daughter."
    },
    {
      "speaker": "A",
      "text": "Do you have children?"
    },
    {
      "speaker": "B",
      "text": "Yes, one son and one daughter!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my husband. This is my wife. I have one son and one daughter. I love my family!",
  "questions": [
    "How many children are there?",
    "Who is in the family?",
    "Does the writer love their family?"
  ]
}$json$::jsonb,
  true
),
(
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
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
  '18d875b8-a296-4d07-8a46-0aad96b9cfd2',
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
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  'Talking About Family',
  'A1',
  'adults',
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
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
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
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What does your partner do?",
    "How old are your children?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
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
      "word": "Have",
      "bg": "#E1F5EE"
    },
    {
      "word": "Children",
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
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What does your husband do?",
    "How old is your son?"
  ],
  "student": [
    "My husband is a driver.",
    "My son is ten."
  ],
  "note": "Say one real fact about a family member!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] two children."
    },
    {
      "speaker": "B",
      "text": "My [parents] live nearby."
    },
    {
      "speaker": "A",
      "text": "My son is ___ years [old]."
    }
  ],
  "blanks": [
    "have",
    "parents",
    "old"
  ]
}$json$::jsonb,
  true
),
(
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What does your wife do?"
    },
    {
      "speaker": "B",
      "text": "My wife is a teacher."
    },
    {
      "speaker": "A",
      "text": "I have a young daughter!"
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
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a family. My wife is a teacher. My husband is a driver. My parents live nearby. I love them very much.",
  "questions": [
    "What does the wife do?",
    "What does the husband do?",
    "Do the parents live nearby?"
  ]
}$json$::jsonb,
  true
),
(
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My wife/husband is a ___.",
    "I have ___ children.",
    "My parents live ___."
  ]
}$json$::jsonb,
  true
),
(
  '9445a823-6d78-4cf4-b1cf-15b6e80b9971',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I have ___'",
    "Say a family member's job",
    "Talk about family facts"
  ],
  "challenge": "Tell me one fact about someone in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: Describing People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  'Describing People',
  'A1',
  'adults',
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
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
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
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Is your partner tall or short?",
    "Is your child friendly?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
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
      "word": "Friendly",
      "bg": "#EEEDFE"
    },
    {
      "word": "Funny",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your husband tall?",
    "Is your daughter friendly?"
  ],
  "student": [
    "Yes, he is tall.",
    "Yes, she is very friendly."
  ],
  "note": "Describe a real family member!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My husband is [tall]."
    },
    {
      "speaker": "B",
      "text": "My daughter is [friendly]."
    },
    {
      "speaker": "A",
      "text": "My son is [funny]."
    }
  ],
  "blanks": [
    "tall",
    "friendly",
    "funny"
  ]
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your wife tall or short?"
    },
    {
      "speaker": "B",
      "text": "My wife is short."
    },
    {
      "speaker": "A",
      "text": "Is your son funny?"
    },
    {
      "speaker": "B",
      "text": "Yes, he is very funny!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My husband is tall. My wife is short. My daughter is friendly and funny. My family has many different people!",
  "questions": [
    "Is the husband tall or short?",
    "Is the wife tall or short?",
    "How is the daughter described?"
  ]
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is tall/short.",
    "My ___ is friendly/funny.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4aa3a9b9-7989-426b-8a1e-2d8d7f748157',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall', 'short', 'friendly', 'funny'",
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
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  'Family Questions',
  'A1',
  'adults',
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
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
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
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you have children?",
    "How many brothers do you have?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
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
      "word": "Children",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sibling",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have children?",
    "How many brothers do you have?"
  ],
  "student": [
    "Yes, I have two children.",
    "I have one brother."
  ],
  "note": "Answer truthfully about your own family!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Do you have] children?"
    },
    {
      "speaker": "B",
      "text": "[How many] siblings do you have?"
    },
    {
      "speaker": "A",
      "text": "I have two [children]."
    }
  ],
  "blanks": [
    "Do you have",
    "How many",
    "children"
  ]
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have children?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have one daughter."
    },
    {
      "speaker": "A",
      "text": "How many siblings do you have?"
    },
    {
      "speaker": "B",
      "text": "I have two brothers!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Do you have children? Yes, I have two children. How many brothers do you have? I have one brother. I have a nice family!",
  "questions": [
    "How many children does the writer have?",
    "How many brothers does the writer have?",
    "Is it a nice family?"
  ]
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Do you have children? ___.",
    "How many siblings? ___.",
    "I have ___ children."
  ]
}$json$::jsonb,
  true
),
(
  '9a37e635-4a31-4de5-818e-62822ba2fb10',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Do you have ___?'",
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
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  'Unit Review',
  'A1',
  'adults',
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
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
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
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What family words do you remember?",
    "Can you describe your family?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Husband",
      "bg": "#FAECE7"
    },
    {
      "word": "Wife",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tall",
      "bg": "#EEEDFE"
    },
    {
      "word": "Children",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Do you have children?"
  ],
  "student": [
    "This is my husband.",
    "Yes, I have two children."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [husband]."
    },
    {
      "speaker": "B",
      "text": "My wife is [tall]."
    },
    {
      "speaker": "A",
      "text": "[Do you have] children?"
    }
  ],
  "blanks": [
    "husband",
    "tall",
    "Do you have"
  ]
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
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
      "text": "I have a wife and two children."
    },
    {
      "speaker": "A",
      "text": "Is your wife tall?"
    },
    {
      "speaker": "B",
      "text": "Yes, she is quite tall!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a family. My wife is a teacher. My husband is tall. I have one son and one daughter. My parents are friendly and kind. I love my family!",
  "questions": [
    "What does the wife do?",
    "How many children does the writer have?",
    "How are the parents described?"
  ]
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family has ___ people.",
    "My ___ is ___.",
    "I have ___."
  ]
}$json$::jsonb,
  true
),
(
  '3022da3a-0c1c-4c01-8f7b-266e2cd76a62',
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

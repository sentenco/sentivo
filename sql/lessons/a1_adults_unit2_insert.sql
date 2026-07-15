-- A1 Adults Unit 2: My Family (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '24431278-2a65-4d32-9354-919903f71045',
  'My Family',
  'A1',
  'adults',
  2,
  1,
  'Name immediate family members. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '24431278-2a65-4d32-9354-919903f71045',
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
  '24431278-2a65-4d32-9354-919903f71045',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Do you have a husband or wife?",
    "Do you have children?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
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
      "word": "Son",
      "bg": "#EEEDFE"
    },
    {
      "word": "Daughter",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
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
    "Yes, this is my wife."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
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
      "text": "I have one [son]."
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
  '24431278-2a65-4d32-9354-919903f71045',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my husband."
    },
    {
      "speaker": "B",
      "text": "This is my wife."
    },
    {
      "speaker": "A",
      "text": "I have one son."
    },
    {
      "speaker": "B",
      "text": "I have one daughter!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my husband. This is my wife. I have one son and one daughter.",
  "questions": [
    "Who is in the family?",
    "How many sons?",
    "How many daughters?"
  ]
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ son(s).",
    "I have ___ daughter(s)."
  ]
}$json$::jsonb,
  true
),
(
  '24431278-2a65-4d32-9354-919903f71045',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Talk about my family"
  ],
  "challenge": "Tell me who is in your family!"
}$json$::jsonb,
  true
);

-- Lesson 2: Talking About Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  'Talking About Family',
  'A1',
  'adults',
  2,
  2,
  'Describe family members with simple adjectives. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
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
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵",
  "questions": [
    "Are your parents kind?",
    "Are your parents retired?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
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
      "word": "Kind",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hardworking",
      "bg": "#EEEDFE"
    },
    {
      "word": "Retired",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are your parents kind?",
    "Is your father retired?"
  ],
  "student": [
    "Yes, my parents are kind.",
    "Yes, my father is retired."
  ],
  "note": "Use the word bank: parents, kind, hardworking, retired.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [parents] are kind."
    },
    {
      "speaker": "B",
      "text": "My father is [hardworking]."
    },
    {
      "speaker": "A",
      "text": "My mother is [retired]."
    }
  ],
  "blanks": [
    "parents",
    "hardworking",
    "retired"
  ]
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are your parents kind?"
    },
    {
      "speaker": "B",
      "text": "Yes, my parents are kind. Is your father hardworking?"
    },
    {
      "speaker": "A",
      "text": "Yes, he is very hardworking. My mother is retired."
    },
    {
      "speaker": "B",
      "text": "Nice family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My parents are kind. My father is hardworking. My mother is retired. My family is nice.",
  "questions": [
    "Are the parents kind or unkind?",
    "Is the father hardworking?",
    "Is the mother working or retired?"
  ]
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My parents are ___.",
    "My father is ___.",
    "My mother is ___."
  ]
}$json$::jsonb,
  true
),
(
  'cf83f805-c232-412a-b5f5-a0f47274b943',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'kind' and 'hardworking'",
    "Describe a family member",
    "Say 'My ___ is ___'"
  ],
  "challenge": "Describe one person in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: Describing People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  'Describing People',
  'A1',
  'adults',
  2,
  3,
  'Describe family with simple physical descriptions. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
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
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your son tall or short?",
    "Are your parents young or old?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
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
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your son tall?",
    "Are your parents old?"
  ],
  "student": [
    "Yes, my son is tall.",
    "My parents are not old, they are young."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My son is [tall]."
    },
    {
      "speaker": "B",
      "text": "My daughter is [short]."
    },
    {
      "speaker": "A",
      "text": "My wife is [young]."
    }
  ],
  "blanks": [
    "tall",
    "short",
    "young"
  ]
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your son tall or short?"
    },
    {
      "speaker": "B",
      "text": "My son is tall. Is your daughter young?"
    },
    {
      "speaker": "A",
      "text": "Yes, my daughter is young."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My son is tall. My daughter is short. My wife is young. My family is nice.",
  "questions": [
    "Is the son tall or short?",
    "Is the daughter tall or short?",
    "Is the wife young or old?"
  ]
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My son/daughter is ___.",
    "My husband/wife is ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '64ab57b8-c8f3-4296-b3ef-1abdd9a78c98',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall', 'short', 'young', 'old'",
    "Describe a family member's appearance",
    "Ask about someone's family"
  ],
  "challenge": "Describe one family member's appearance to me!"
}$json$::jsonb,
  true
);

-- Lesson 4: Family Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '31b75a96-5996-4458-afc5-390d2c60383a',
  'Family Questions',
  'A1',
  'adults',
  2,
  4,
  'Combine family vocabulary into a short family description. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
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
  '31b75a96-5996-4458-afc5-390d2c60383a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Live with",
      "bg": "#FAECE7"
    },
    {
      "word": "Together",
      "bg": "#E1F5EE"
    },
    {
      "word": "Close",
      "bg": "#EEEDFE"
    },
    {
      "word": "Love",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "student": [
    "I live with my husband and children.",
    "Yes, we are close."
  ],
  "note": "Put it all together: family members + description.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [live with] my wife and two children."
    },
    {
      "speaker": "B",
      "text": "We are [together] every weekend."
    },
    {
      "speaker": "A",
      "text": "I [love] my family."
    }
  ],
  "blanks": [
    "live with",
    "together",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
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
      "text": "I live with my husband and one son. My parents are retired."
    },
    {
      "speaker": "A",
      "text": "We are close, and we are together every weekend. I love my family."
    },
    {
      "speaker": "B",
      "text": "That sounds wonderful!"
    }
  ],
  "note": "Mini talk: tell me all about your family in a few sentences."
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live with my husband and one son. My parents are retired. We are close, and I love my family.",
  "questions": [
    "Who does the writer live with?",
    "Are the parents working or retired?",
    "Is the family close?"
  ]
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live with ___.",
    "My family is ___.",
    "I love my family because ___."
  ]
}$json$::jsonb,
  true
),
(
  '31b75a96-5996-4458-afc5-390d2c60383a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe who I live with",
    "Describe my family",
    "Say I am close to my family"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  'Unit Review',
  'A1',
  'adults',
  2,
  5,
  'Review family vocabulary and descriptions. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
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
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Who do you live with?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Family",
      "bg": "#FAECE7"
    },
    {
      "word": "Husband",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Live with",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Who do you live with?"
  ],
  "student": [
    "This is my husband.",
    "I live with my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [family]."
    },
    {
      "speaker": "B",
      "text": "This is my [husband]. He is [kind]."
    },
    {
      "speaker": "A",
      "text": "I [live with] my family."
    }
  ],
  "blanks": [
    "family",
    "husband",
    "live with"
  ]
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
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
      "text": "This is my wife. She is kind. I live with my family."
    },
    {
      "speaker": "A",
      "text": "I have one daughter and one son too."
    },
    {
      "speaker": "B",
      "text": "Nice family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. My wife is kind. I live with my family. I love my family.",
  "questions": [
    "Who is kind?",
    "Who does the writer live with?",
    "Does the writer love the family?"
  ]
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my family.",
    "My ___ is ___.",
    "I live with ___."
  ]
}$json$::jsonb,
  true
),
(
  '011238d2-8fbf-48a4-adb9-36a73b6ea424',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name family members",
    "Describe a family member",
    "Say who I live with"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

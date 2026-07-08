-- A2 Kids Unit 11: Festivals and Special Days (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Special Days
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  'Special Days',
  'A2',
  'kids',
  11,
  1,
  'Talk about common celebrations and what people do on those days.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎈",
  "questions": [
    "What is your favorite special day?",
    "What do you do on your birthday?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Birthday party",
      "bg": "#FAECE7"
    },
    {
      "word": "School fair",
      "bg": "#E1F5EE"
    },
    {
      "word": "Holiday dinner",
      "bg": "#EEEDFE"
    },
    {
      "word": "Costume day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do on your birthday?",
    "Do you like costume day?"
  ],
  "student": [
    "On my birthday, we have a party.",
    "Yes, I like costume day!"
  ],
  "note": "Think about a special day you like!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "On [birthday party] day, we eat cake."
    },
    {
      "speaker": "B",
      "text": "On [costume day], we wear funny clothes."
    },
    {
      "speaker": "A",
      "text": "On [holiday dinner] day, we eat with family."
    }
  ],
  "blanks": [
    "birthday party",
    "costume day",
    "holiday dinner"
  ]
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do on your birthday?"
    },
    {
      "speaker": "B",
      "text": "On my birthday, we have a party and eat cake."
    },
    {
      "speaker": "A",
      "text": "On costume day, we wear funny clothes at school."
    },
    {
      "speaker": "B",
      "text": "That sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four children talk about special days. Sam has a birthday party and eats cake. Mia goes to the school fair and plays games. Leo has a holiday dinner with his family. Ana wears a costume on costume day.",
  "questions": [
    "What does Sam do?",
    "What does Mia do?",
    "What does Ana wear?"
  ]
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On ___ day, we ___.",
    "My favorite special day is ___.",
    "We celebrate by ___."
  ]
}$json$::jsonb,
  true
),
(
  'f0bfa0e1-89cd-46d6-bdc3-c548c6efe863',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name special days",
    "Say what people do on special days",
    "Talk about my favorite celebration"
  ],
  "challenge": "Tell me about your favorite special day!"
}$json$::jsonb,
  true
);

-- Lesson 2: Last Birthday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f5fbf1e1-3381-4039-a829-964831898580',
  'Last Birthday',
  'A2',
  'kids',
  11,
  2,
  'Describe a simple past celebration using sequence words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎂",
  "questions": [
    "What did you do on your last birthday?",
    "Did you open presents?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Decorated",
      "bg": "#FAECE7"
    },
    {
      "word": "Invited",
      "bg": "#E1F5EE"
    },
    {
      "word": "Ate",
      "bg": "#EEEDFE"
    },
    {
      "word": "Opened",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do on your birthday?",
    "Did you open presents?"
  ],
  "student": [
    "We decorated the house.",
    "Yes, I opened many presents."
  ],
  "note": "Think about your last birthday!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "First, we [decorated] the house."
    },
    {
      "speaker": "B",
      "text": "Then, we [invited] our friends."
    },
    {
      "speaker": "A",
      "text": "Finally, I [opened] my presents."
    }
  ],
  "blanks": [
    "decorated",
    "invited",
    "opened"
  ]
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do on your last birthday?"
    },
    {
      "speaker": "B",
      "text": "First, we decorated the house. Then, we invited our friends."
    },
    {
      "speaker": "A",
      "text": "After that, we ate cake. Finally, I opened my presents."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great birthday!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My last birthday was great. First, we decorated the house with balloons. Then, we invited our friends. After that, we ate a big cake. Finally, I opened my presents. It was a wonderful day.",
  "questions": [
    "What did they decorate with?",
    "Who did they invite?",
    "What did the writer do finally?"
  ]
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On my last birthday, we ___.",
    "Then, we ___.",
    "Finally, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'f5fbf1e1-3381-4039-a829-964831898580',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: decorated, invited, ate, opened",
    "Tell a birthday story in order",
    "Describe a past celebration"
  ],
  "challenge": "Tell me about your last birthday!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big and Small Celebrations
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  'Big and Small Celebrations',
  'A2',
  'kids',
  11,
  3,
  'Compare celebrations using more, less, bigger, and smaller.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎊",
  "questions": [
    "Is your birthday party big or small?",
    "Which celebration has more people?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bigger",
      "bg": "#FAECE7"
    },
    {
      "word": "Smaller",
      "bg": "#E1F5EE"
    },
    {
      "word": "Louder",
      "bg": "#EEEDFE"
    },
    {
      "word": "More people",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the school fair bigger than your party?",
    "Which is louder?"
  ],
  "student": [
    "Yes, the school fair is bigger.",
    "The school fair is louder."
  ],
  "note": "Compare two celebrations you know!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The school fair is [bigger] than my party."
    },
    {
      "speaker": "B",
      "text": "My family party is [smaller] but cozier."
    },
    {
      "speaker": "A",
      "text": "The fair has [more people]."
    }
  ],
  "blanks": [
    "bigger",
    "smaller",
    "more people"
  ]
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your birthday party big or small?"
    },
    {
      "speaker": "B",
      "text": "My party is small, but the school fair is bigger and louder."
    },
    {
      "speaker": "A",
      "text": "The fair has more people and more food."
    },
    {
      "speaker": "B",
      "text": "I like small parties better, they are quieter."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two celebrations are different. The school fair is big and loud, with lots of people and games. My family birthday party is small and quiet, with just my family. The fair has more food, but my party is cozier.",
  "questions": [
    "Is the school fair big or small?",
    "Who comes to the family party?",
    "Which one has more food?"
  ]
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is bigger than ___.",
    "I prefer ___ celebrations because ___.",
    "My party has ___."
  ]
}$json$::jsonb,
  true
),
(
  '42c83dac-a755-471f-a0ee-f35f859fd412',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare celebrations",
    "Use bigger/smaller/louder/more",
    "Say which celebration I prefer"
  ],
  "challenge": "Compare two celebrations and tell me which you like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Invitation Time
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  'Invitation Time',
  'A2',
  'kids',
  11,
  4,
  'Write a short invitation for a special day.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "Have you written an invitation?",
    "What do you need to write on one?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Invitation",
      "bg": "#FAECE7"
    },
    {
      "word": "Where",
      "bg": "#E1F5EE"
    },
    {
      "word": "When",
      "bg": "#EEEDFE"
    },
    {
      "word": "Bring",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the party?",
    "When is the party?"
  ],
  "student": [
    "The party is at my house.",
    "It is on Saturday at 3pm."
  ],
  "note": "Think about where, when, and what to bring!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my party [invitation]."
    },
    {
      "speaker": "B",
      "text": "[Where] is the party? At my house."
    },
    {
      "speaker": "A",
      "text": "Please [bring] a gift!"
    }
  ],
  "blanks": [
    "invitation",
    "where",
    "bring"
  ]
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm writing an invitation. Where is the party?"
    },
    {
      "speaker": "B",
      "text": "The party is at my house on Saturday at 3pm."
    },
    {
      "speaker": "A",
      "text": "What should I bring?"
    },
    {
      "speaker": "B",
      "text": "Just bring yourself and have fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "You are invited! Come to my birthday party. It is on Saturday at 3pm. The party is at my house. There will be cake, games, and music. Please bring a small gift. See you there!",
  "questions": [
    "When is the party?",
    "Where is the party?",
    "What should guests bring?"
  ]
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You are invited to my ___.",
    "It is on ___ at ___.",
    "Please bring ___."
  ]
}$json$::jsonb,
  true
),
(
  'f7f6378d-f2fe-46a1-8fe9-25154570c804',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short invitation",
    "Include where and when",
    "Say what to bring"
  ],
  "challenge": "Read me your party invitation!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  'Unit Review',
  'A2',
  'kids',
  11,
  5,
  'Review celebrations, past events, and invitations.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What is your favorite celebration?",
    "What did you do last birthday?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Celebration",
      "bg": "#FAECE7"
    },
    {
      "word": "Decorated",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bigger",
      "bg": "#EEEDFE"
    },
    {
      "word": "Invitation",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite celebration?",
    "What did you do last time?"
  ],
  "student": [
    "My favorite is my birthday party.",
    "We decorated the house and ate cake."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [celebration] is my birthday."
    },
    {
      "speaker": "B",
      "text": "We [decorated] the house with balloons."
    },
    {
      "speaker": "A",
      "text": "The school fair is [bigger] than my party."
    }
  ],
  "blanks": [
    "celebration",
    "decorated",
    "bigger"
  ]
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite celebration?"
    },
    {
      "speaker": "B",
      "text": "My favorite is my birthday. Last year, we decorated the house and invited friends."
    },
    {
      "speaker": "A",
      "text": "The school fair is bigger and louder than my party."
    },
    {
      "speaker": "B",
      "text": "I would love to send you an invitation next time!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite celebration is my birthday. Last year, we decorated the house, invited my friends, and ate a big cake. My party was smaller than the school fair, but it was more fun for me. I wrote invitations for everyone.",
  "questions": [
    "What is the writer's favorite celebration?",
    "What did they do last year?",
    "Was the party bigger or smaller than the school fair?"
  ]
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite celebration is ___.",
    "Last time, we ___.",
    "I want to invite ___."
  ]
}$json$::jsonb,
  true
),
(
  '9e8af40b-9175-45ad-be28-6c0e233ff278',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about celebrations",
    "Tell a past celebration story",
    "Compare celebrations",
    "Write an invitation"
  ],
  "challenge": "Tell me all about your favorite special day!"
}$json$::jsonb,
  true
);

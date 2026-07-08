-- A1 Adults Unit 10: Health and Feelings (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: How Are You?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  'How Are You?',
  'A1',
  'adults',
  10,
  1,
  'Name and use basic feelings vocabulary.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
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
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "How are you today?",
    "Are you often busy?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7"
    },
    {
      "word": "Tired",
      "bg": "#E1F5EE"
    },
    {
      "word": "Busy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Stressed",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you today?",
    "Are you busy?"
  ],
  "student": [
    "I'm happy today.",
    "Yes, I'm very busy."
  ],
  "note": "Say how you really feel today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "I feel [tired]."
    },
    {
      "speaker": "A",
      "text": "I am [busy] today."
    }
  ],
  "blanks": [
    "happy",
    "tired",
    "busy"
  ]
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I'm a little stressed."
    },
    {
      "speaker": "A",
      "text": "I'm tired!"
    },
    {
      "speaker": "B",
      "text": "Let's relax a bit."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel happy. Sometimes I feel tired after work. Sometimes I feel stressed. Everyone has feelings at work and at home!",
  "questions": [
    "How does the writer feel today?",
    "When does the writer feel tired?",
    "Does everyone have feelings?"
  ]
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "At work, I sometimes feel ___.",
    "I feel happy when ___."
  ]
}$json$::jsonb,
  true
),
(
  'ceb99f26-5af5-46d3-8bd8-f6e1466e74b8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four feelings",
    "Say 'I feel ___'",
    "Talk about feelings at work"
  ],
  "challenge": "Tell me how you feel right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Body and Health
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  'Body and Health',
  'A1',
  'adults',
  10,
  2,
  'Name basic body parts and simple health problems.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
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
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you ever have a headache?",
    "What body part hurts most often?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7"
    },
    {
      "word": "Back",
      "bg": "#E1F5EE"
    },
    {
      "word": "Stomach",
      "bg": "#EEEDFE"
    },
    {
      "word": "Pain",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the problem?",
    "Does your back hurt?"
  ],
  "student": [
    "I have a headache.",
    "Yes, my back hurts."
  ],
  "note": "Think about a real or common health problem!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [head]ache."
    },
    {
      "speaker": "B",
      "text": "My [back] hurts."
    },
    {
      "speaker": "A",
      "text": "I have [pain] in my stomach."
    }
  ],
  "blanks": [
    "head",
    "back",
    "pain"
  ]
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the problem?"
    },
    {
      "speaker": "B",
      "text": "My stomach hurts."
    },
    {
      "speaker": "A",
      "text": "I have a headache!"
    },
    {
      "speaker": "B",
      "text": "I hope you feel better soon."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a headache today. My back hurts too. Sometimes I have stomach pain. I need to rest when I don't feel well.",
  "questions": [
    "What problem does the writer have?",
    "Does the writer's back hurt?",
    "What does the writer need?"
  ]
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ache.",
    "My ___ hurts.",
    "When I don't feel well, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '90d00dff-b2dd-40f7-9959-4a294dc699e8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four body parts",
    "Say 'I have a ___ache'",
    "Talk about simple health problems"
  ],
  "challenge": "Tell me about a time you didn't feel well!"
}$json$::jsonb,
  true
);

-- Lesson 3: Simple Advice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  'Simple Advice',
  'A1',
  'adults',
  10,
  3,
  'Understand and use basic health advice.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
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
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you do when you feel sick?",
    "Do you rest when you're tired?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Rest",
      "bg": "#FAECE7"
    },
    {
      "word": "Drink Water",
      "bg": "#E1F5EE"
    },
    {
      "word": "See A Doctor",
      "bg": "#EEEDFE"
    },
    {
      "word": "Go Home",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What should I do?",
    "Should I see a doctor?"
  ],
  "student": [
    "You should rest.",
    "Yes, you should see a doctor."
  ],
  "note": "Give real, simple health advice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "You should [rest]."
    },
    {
      "speaker": "B",
      "text": "[Drink water] and relax."
    },
    {
      "speaker": "A",
      "text": "You should [see a doctor]."
    }
  ],
  "blanks": [
    "rest",
    "Drink water",
    "see a doctor"
  ]
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I don't feel well."
    },
    {
      "speaker": "B",
      "text": "You should rest and drink water."
    },
    {
      "speaker": "A",
      "text": "Should I go home?"
    },
    {
      "speaker": "B",
      "text": "Yes, you should go home and rest!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I don't feel well. My friend says, 'You should rest.' 'Drink water,' she says. 'If it's serious, see a doctor.' Good advice helps me feel better!",
  "questions": [
    "What advice does the friend give?",
    "What should the writer drink?",
    "When should you see a doctor?"
  ]
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You should ___.",
    "If you feel sick, you should ___.",
    "Good advice is to ___."
  ]
}$json$::jsonb,
  true
),
(
  '5068f8e1-f8bd-43d6-8c7a-b183795d387e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'You should ___'",
    "Give simple health advice",
    "Understand health advice"
  ],
  "challenge": "Give me some advice — I don't feel well today!"
}$json$::jsonb,
  true
);

-- Lesson 4: At the Doctor
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  'At the Doctor',
  'A1',
  'adults',
  10,
  4,
  'Answer simple health questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
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
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Have you visited a doctor recently?",
    "What do doctors usually ask?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What's The Problem",
      "bg": "#FAECE7"
    },
    {
      "word": "Do You Have A Cough",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fever",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cold",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the problem?",
    "Do you have a cough?"
  ],
  "student": [
    "I have a cold.",
    "Yes, I have a cough."
  ],
  "note": "Practice like you're really at the doctor!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What's the problem]?"
    },
    {
      "speaker": "B",
      "text": "I have a [cold]."
    },
    {
      "speaker": "A",
      "text": "[Do you have a cough]?"
    }
  ],
  "blanks": [
    "What's the problem",
    "cold",
    "Do you have a cough"
  ]
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the problem?"
    },
    {
      "speaker": "B",
      "text": "I have a fever and a cough."
    },
    {
      "speaker": "A",
      "text": "Do you have a headache too?"
    },
    {
      "speaker": "B",
      "text": "Yes, a small one."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What's the problem? I have a cold. Do you have a cough? Yes, I do. Do you have a fever? No, I don't. The doctor gives me good advice.",
  "questions": [
    "What problem does the patient have?",
    "Does the patient have a cough?",
    "Does the patient have a fever?"
  ]
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "Do you have a ___? ___.",
    "The doctor says I should ___."
  ]
}$json$::jsonb,
  true
),
(
  '8c25a025-a715-4a54-ba39-d2ba34ea6d8b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What's the problem?'",
    "Ask 'Do you have a ___?'",
    "Answer health questions"
  ],
  "challenge": "Be the doctor and ask me about my health!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  'Unit Review',
  'A1',
  'adults',
  10,
  5,
  'Talk simply about feelings, health, and basic advice.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
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
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What feeling and health words do you remember?",
    "How are you feeling today?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7"
    },
    {
      "word": "Headache",
      "bg": "#E1F5EE"
    },
    {
      "word": "Rest",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cold",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you?",
    "What's the problem?"
  ],
  "student": [
    "I'm happy.",
    "I have a cold."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "I have a [headache]."
    },
    {
      "speaker": "A",
      "text": "You should [rest]."
    }
  ],
  "blanks": [
    "happy",
    "headache",
    "rest"
  ]
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I have a cold. I don't feel well."
    },
    {
      "speaker": "A",
      "text": "You should rest and drink water."
    },
    {
      "speaker": "B",
      "text": "Thank you, I will!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel tired. I have a headache. My friend says, 'You should rest and drink water.' I go home and rest. Tomorrow I will feel better!",
  "questions": [
    "How does the writer feel?",
    "What advice does the friend give?",
    "What will happen tomorrow?"
  ]
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "I have a ___.",
    "You should ___."
  ]
}$json$::jsonb,
  true
),
(
  'bf11882f-558e-4fab-86fb-f4960c8823e9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name feelings and health words",
    "Talk about simple health problems",
    "Give and understand advice"
  ],
  "challenge": "Tell me how you feel and ask me for advice!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 5: Work and Jobs (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Jobs
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  'Jobs',
  'A1',
  'adults',
  5,
  1,
  'Name common jobs. [Combination, Lesson 1: notice/receptive, read-and-identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
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
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💼",
  "questions": [
    "What is your job?",
    "Do you know a doctor?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Teacher",
      "bg": "#FAECE7"
    },
    {
      "word": "Doctor",
      "bg": "#E1F5EE"
    },
    {
      "word": "Engineer",
      "bg": "#EEEDFE"
    },
    {
      "word": "Driver",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Are you a teacher?"
  ],
  "student": [
    "I am a teacher.",
    "No, I am an engineer."
  ],
  "note": "Read the model text, then find the job words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a [teacher]."
    },
    {
      "speaker": "B",
      "text": "I am a [doctor]."
    },
    {
      "speaker": "A",
      "text": "My brother is an [engineer]."
    }
  ],
  "blanks": [
    "teacher",
    "doctor",
    "engineer"
  ]
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a teacher."
    },
    {
      "speaker": "B",
      "text": "I am a doctor."
    },
    {
      "speaker": "A",
      "text": "My brother is an engineer."
    },
    {
      "speaker": "B",
      "text": "My sister is a driver!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a teacher. My husband is a doctor. My brother is an engineer.",
  "questions": [
    "What is the writer's job?",
    "What is the husband's job?",
    "What is the brother's job?"
  ]
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "My husband/wife is a ___.",
    "My brother/sister is a ___."
  ]
}$json$::jsonb,
  true
),
(
  'a5e4201b-8ae0-497b-b0e0-cbbc107295ea',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 jobs",
    "Say 'I am a ___'",
    "Talk about family jobs"
  ],
  "challenge": "Tell me your job and one family member's job!"
}$json$::jsonb,
  true
);

-- Lesson 2: Workplaces
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  'Workplaces',
  'A1',
  'adults',
  5,
  2,
  'Name workplaces and combine job + place. [Combination, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
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
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏢",
  "questions": [
    "Do you work in an office?",
    "Do you work at a school?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Office",
      "bg": "#FAECE7"
    },
    {
      "word": "Hospital",
      "bg": "#E1F5EE"
    },
    {
      "word": "School",
      "bg": "#EEEDFE"
    },
    {
      "word": "Factory",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you work?",
    "Do you work in an office?"
  ],
  "student": [
    "I work in an office.",
    "Yes, I work in an office."
  ],
  "note": "Use the word bank: office, hospital, school, factory.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I work in an [office]."
    },
    {
      "speaker": "B",
      "text": "I work in a [hospital]."
    },
    {
      "speaker": "A",
      "text": "My sister works at a [school]."
    }
  ],
  "blanks": [
    "office",
    "hospital",
    "school"
  ]
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you work?"
    },
    {
      "speaker": "B",
      "text": "I work in a hospital. Where do you work?"
    },
    {
      "speaker": "A",
      "text": "I work in an office. My brother works at a factory."
    },
    {
      "speaker": "B",
      "text": "Interesting!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I work in an office. My husband works in a hospital. My sister works at a school.",
  "questions": [
    "Where does the writer work?",
    "Where does the husband work?",
    "Where does the sister work?"
  ]
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I work in a(n) ___.",
    "My husband/wife works in a(n) ___.",
    "My ___ works at a ___."
  ]
}$json$::jsonb,
  true
),
(
  '0f0130ac-268f-4b11-b58d-dfdf0efa3a65',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 workplaces",
    "Say 'I work in a(n) ___'",
    "Talk about family workplaces"
  ],
  "challenge": "Tell me where you work and where a family member works!"
}$json$::jsonb,
  true
);

-- Lesson 3: Daily Work Tasks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  'Daily Work Tasks',
  'A1',
  'adults',
  5,
  3,
  'Describe simple work tasks with a reason. [Combination, Lesson 3: freer practice, error-spot]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
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
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "What do you do at work?",
    "Do you help people at your job?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Answer calls",
      "bg": "#FAECE7"
    },
    {
      "word": "Write reports",
      "bg": "#E1F5EE"
    },
    {
      "word": "Help people",
      "bg": "#EEEDFE"
    },
    {
      "word": "Because",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do at work?",
    "Do you like your tasks?"
  ],
  "student": [
    "I answer calls and write reports.",
    "I like it because it is interesting."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [answer calls] at work."
    },
    {
      "speaker": "B",
      "text": "I [write reports] every day."
    },
    {
      "speaker": "A",
      "text": "I like my job [because] I help people."
    }
  ],
  "blanks": [
    "answer calls",
    "write reports",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do at work?"
    },
    {
      "speaker": "B",
      "text": "I answer calls and help people. I like it because it is interesting."
    },
    {
      "speaker": "A",
      "text": "I write reports every day. I like it because I work with numbers."
    },
    {
      "speaker": "B",
      "text": "That sounds like a good job!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I answer calls at work. I help people every day. I like my job because it is interesting.",
  "questions": [
    "What does the writer do at work?",
    "Who does the writer help?",
    "Why does the writer like the job?"
  ]
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I ___ at work.",
    "I ___ every day.",
    "I like my job because ___."
  ]
}$json$::jsonb,
  true
),
(
  '2cedda39-d6c4-43fd-9636-d8aaaa3cc9f4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a work task",
    "Use 'because' with one clause",
    "Say why I like my job"
  ],
  "challenge": "Tell me one thing you do at work, and why you like it!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About Work
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  'Talking About Work',
  'A1',
  'adults',
  5,
  4,
  'Combine job, workplace, tasks, and opinion into a short talk. [Combination, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
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
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Do you enjoy your job?",
    "Do you work with a team?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Colleague",
      "bg": "#FAECE7"
    },
    {
      "word": "Difficult",
      "bg": "#E1F5EE"
    },
    {
      "word": "Enjoy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Team",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you enjoy your job?",
    "Is it difficult?"
  ],
  "student": [
    "Yes, I enjoy my job.",
    "It is difficult sometimes."
  ],
  "note": "Put it all together: job + place + task + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [colleague] and I work together."
    },
    {
      "speaker": "B",
      "text": "The work is [difficult] sometimes."
    },
    {
      "speaker": "A",
      "text": "I [enjoy] my [team]."
    }
  ],
  "blanks": [
    "colleague",
    "difficult",
    "enjoy"
  ]
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your job."
    },
    {
      "speaker": "B",
      "text": "I am a nurse. I work in a hospital with my colleagues."
    },
    {
      "speaker": "A",
      "text": "It is difficult sometimes, but I enjoy my team."
    },
    {
      "speaker": "B",
      "text": "That sounds like a good workplace."
    }
  ],
  "note": "Mini role-play: introduce your job to a new colleague."
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a nurse. I work in a hospital with my colleagues. It is difficult sometimes, but I enjoy my team.",
  "questions": [
    "What is the job?",
    "Where does the writer work?",
    "Does the writer enjoy the team?"
  ]
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "I work with ___.",
    "I enjoy ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '7a8f1ba3-024c-4d00-9844-8121ac2601f5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my job and workplace",
    "Describe a task and an opinion",
    "Talk about my colleagues"
  ],
  "challenge": "Tell me all about your job!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  'Unit Review',
  'A1',
  'adults',
  5,
  5,
  'Review jobs, workplaces, tasks, and opinions. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
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
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💼",
  "questions": [
    "What is your job?",
    "Do you enjoy it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Job",
      "bg": "#FAECE7"
    },
    {
      "word": "Work in",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enjoy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Do you enjoy it?"
  ],
  "student": [
    "I am a teacher.",
    "Yes, I enjoy it."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [job] is teacher."
    },
    {
      "speaker": "B",
      "text": "I [work in] a school."
    },
    {
      "speaker": "A",
      "text": "I enjoy it [because] I help people."
    }
  ],
  "blanks": [
    "job",
    "work in",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your job."
    },
    {
      "speaker": "B",
      "text": "My job is teacher. I work in a school. I enjoy it because I help people."
    },
    {
      "speaker": "A",
      "text": "My colleagues are nice too."
    },
    {
      "speaker": "B",
      "text": "Sounds like a great job!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My job is teacher. I work in a school. I enjoy it because I help people. My colleagues are nice.",
  "questions": [
    "What is the job?",
    "Where does the writer work?",
    "Why does the writer enjoy it?"
  ]
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My job is ___.",
    "I work in a ___.",
    "I enjoy it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'fc44d97c-94d8-4b24-b10a-5bea27f9722b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my job and workplace",
    "Describe a work task",
    "Give a reason with 'because'"
  ],
  "challenge": "Tell me all about your job or a job you'd like!"
}$json$::jsonb,
  true
);

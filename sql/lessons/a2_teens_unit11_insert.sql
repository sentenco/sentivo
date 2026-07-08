-- A2 Teens Unit 11: Future Plans and Goals (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Next Week
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  'Next Week',
  'A2',
  'teens',
  11,
  1,
  'Talk about plans for next week using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What are you going to do next week?",
    "Is your schedule busy?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Going to",
      "bg": "#FAECE7"
    },
    {
      "word": "Schedule",
      "bg": "#E1F5EE"
    },
    {
      "word": "Busy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Free time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you going to do next week?",
    "Is your schedule busy?"
  ],
  "student": [
    "I'm going to study for exams.",
    "Yes, my schedule is very busy."
  ],
  "note": "Think about your real plans for next week!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [going to] study for exams next week."
    },
    {
      "speaker": "B",
      "text": "My [schedule] is really busy."
    },
    {
      "speaker": "A",
      "text": "I have some [free time] on Sunday."
    }
  ],
  "blanks": [
    "going to",
    "schedule",
    "free time"
  ]
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you going to do next week?"
    },
    {
      "speaker": "B",
      "text": "I'm going to study for exams. My schedule is really busy."
    },
    {
      "speaker": "A",
      "text": "I only have free time on Sunday, so I'm going to relax then."
    },
    {
      "speaker": "B",
      "text": "Good, you deserve a break!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Next week is going to be busy. I'm going to study for exams every evening. On Wednesday, I'm going to a friend's birthday party. My only free time is Sunday, so I'm going to relax and watch movies.",
  "questions": [
    "What is the writer going to do every evening?",
    "What is happening on Wednesday?",
    "What will the writer do on Sunday?"
  ]
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Next week, I'm going to ___.",
    "My schedule is ___.",
    "I have free time on ___."
  ]
}$json$::jsonb,
  true
),
(
  '0d40b7b4-99f7-4f9a-aff3-252f88e37c06',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'going to' for next week's plans",
    "Describe a busy schedule",
    "Talk about free time"
  ],
  "challenge": "Tell me your plans for next week!"
}$json$::jsonb,
  true
);

-- Lesson 2: Dreams and Goals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  'Dreams and Goals',
  'A2',
  'teens',
  11,
  2,
  'Talk about long-term dreams and goals.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "What is your dream job?",
    "What do you want to achieve someday?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dream job",
      "bg": "#FAECE7"
    },
    {
      "word": "Achieve",
      "bg": "#E1F5EE"
    },
    {
      "word": "Ambition",
      "bg": "#EEEDFE"
    },
    {
      "word": "Someday",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your dream job?",
    "What do you want to achieve?"
  ],
  "student": [
    "My dream job is to be a doctor.",
    "I want to achieve my own business someday."
  ],
  "note": "Think about your real dreams and goals!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [dream job] is to be a designer."
    },
    {
      "speaker": "B",
      "text": "I want to [achieve] my own studio."
    },
    {
      "speaker": "A",
      "text": "That's my biggest [ambition]."
    }
  ],
  "blanks": [
    "dream job",
    "achieve",
    "ambition"
  ]
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your dream job?"
    },
    {
      "speaker": "B",
      "text": "My dream job is to be a doctor. I want to achieve that someday."
    },
    {
      "speaker": "A",
      "text": "My biggest ambition is to travel the world and write about it."
    },
    {
      "speaker": "B",
      "text": "That's an amazing goal!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My dream job is to become a doctor. I want to achieve this someday because I love helping people. My biggest ambition is to open a small clinic in my hometown. It's a big goal, but I believe I can do it.",
  "questions": [
    "What is the writer's dream job?",
    "Why does the writer want this job?",
    "What is the writer's biggest ambition?"
  ]
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My dream job is ___.",
    "I want to achieve ___ because ___.",
    "My biggest ambition is ___."
  ]
}$json$::jsonb,
  true
),
(
  'bd82865e-c722-4483-88e3-d52afd6187e3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about a dream job",
    "Use 'achieve' and 'ambition'",
    "Explain a personal goal"
  ],
  "challenge": "Tell me about your dream job and biggest ambition!"
}$json$::jsonb,
  true
);

-- Lesson 3: Then and Now
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  'Then and Now',
  'A2',
  'teens',
  11,
  3,
  'Compare past and present using simple past and simple present.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔄",
  "questions": [
    "What did you use to like when you were younger?",
    "How have you changed?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Used to",
      "bg": "#FAECE7"
    },
    {
      "word": "Now",
      "bg": "#E1F5EE"
    },
    {
      "word": "Changed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Grew up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you use to like?",
    "How have you changed?"
  ],
  "student": [
    "I used to like cartoons.",
    "Now I prefer music and books."
  ],
  "note": "Think about how you've changed over time!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [used to] like cartoons."
    },
    {
      "speaker": "B",
      "text": "[Now] I prefer music."
    },
    {
      "speaker": "A",
      "text": "I've really [changed] since I was younger."
    }
  ],
  "blanks": [
    "used to",
    "now",
    "changed"
  ]
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you use to like when you were a kid?"
    },
    {
      "speaker": "B",
      "text": "I used to like cartoons and toys. Now I prefer music and hanging out with friends."
    },
    {
      "speaker": "A",
      "text": "I've changed a lot since I grew up in a small town."
    },
    {
      "speaker": "B",
      "text": "We all change over time!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "When I was younger, I used to love cartoons and simple games. Now, I prefer music, movies, and spending time with friends. I've changed a lot since I grew up. My interests are more mature now, but I still have fun.",
  "questions": [
    "What did the writer used to love?",
    "What does the writer prefer now?",
    "How has the writer changed?"
  ]
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I used to ___.",
    "Now I ___.",
    "I've changed because ___."
  ]
}$json$::jsonb,
  true
),
(
  '4a986c1c-b16d-416c-acc1-0980ebd8d599',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'used to' for the past",
    "Compare past and present interests",
    "Talk about how I've changed"
  ],
  "challenge": "Tell me how you've changed since you were younger!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Plan Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  'My Plan Post',
  'A2',
  'teens',
  11,
  4,
  'Write a short post about future plans and goals.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚀",
  "questions": [
    "Have you posted about your goals online?",
    "What steps will you take?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Post",
      "bg": "#FAECE7"
    },
    {
      "word": "Vision",
      "bg": "#E1F5EE"
    },
    {
      "word": "Steps",
      "bg": "#EEEDFE"
    },
    {
      "word": "Determined",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your vision for the future?",
    "What steps will you take?"
  ],
  "student": [
    "My vision is to travel and study.",
    "First, I'll finish school, then explore careers."
  ],
  "note": "Think about your future plan!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my future [post]."
    },
    {
      "speaker": "B",
      "text": "My [vision] is to become a teacher."
    },
    {
      "speaker": "A",
      "text": "I'm [determined] to reach my goal."
    }
  ],
  "blanks": [
    "post",
    "vision",
    "determined"
  ]
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your vision for the future?"
    },
    {
      "speaker": "B",
      "text": "My vision is to study abroad and become a teacher."
    },
    {
      "speaker": "A",
      "text": "First, I'll finish school. Then, I'll take small steps toward my goal."
    },
    {
      "speaker": "B",
      "text": "I'm determined to make it happen too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My future plan: I want to study abroad and become a teacher. First, I'll finish school with good grades. Then, I'll apply for a scholarship. I'm determined to reach my goal, even if it takes time.",
  "questions": [
    "What does the writer want to become?",
    "What is the first step?",
    "How does the writer feel about the goal?"
  ]
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My future plan is ___.",
    "First, I'll ___.",
    "I'm determined to ___."
  ]
}$json$::jsonb,
  true
),
(
  '2e2a4b61-3cb4-4fcb-90dd-cde278a97d6e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short future plan post",
    "Use sequencing steps",
    "Express determination"
  ],
  "challenge": "Write and read me your future plan post!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  'Unit Review',
  'A2',
  'teens',
  11,
  5,
  'Review next week''s plans, dreams, past-present comparisons, and a plan post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎯",
  "questions": [
    "What are your plans for next week?",
    "What is your dream job?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Plan",
      "bg": "#FAECE7"
    },
    {
      "word": "Dream job",
      "bg": "#E1F5EE"
    },
    {
      "word": "Used to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Determined",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your plans?",
    "What is your dream job?"
  ],
  "student": [
    "Next week, I'm going to study.",
    "My dream job is to be a designer."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [plan] for next week is busy."
    },
    {
      "speaker": "B",
      "text": "My [dream job] is to be an engineer."
    },
    {
      "speaker": "A",
      "text": "I [used to] want something different."
    }
  ],
  "blanks": [
    "plan",
    "dream job",
    "used to"
  ]
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your plans and dreams."
    },
    {
      "speaker": "B",
      "text": "Next week, my plan is to study hard. My dream job is to be an engineer."
    },
    {
      "speaker": "A",
      "text": "I used to want to be an artist, but now I want something different."
    },
    {
      "speaker": "B",
      "text": "It's interesting how goals change!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Next week, my plan is to study hard for exams. My dream job is to become an engineer, and I'm determined to achieve it. I used to want to be a musician, but now my goals have changed. I believe I can reach my new goal.",
  "questions": [
    "What is the writer's plan for next week?",
    "What is the writer's dream job?",
    "What did the writer used to want?"
  ]
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Next week, my plan is ___.",
    "My dream job is ___.",
    "I used to want ___, but now ___."
  ]
}$json$::jsonb,
  true
),
(
  '1fe0790b-ee98-4a6f-bfbd-b3d7e003417e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about next week's plans",
    "Describe dreams and goals",
    "Compare past and present",
    "Write a plan post"
  ],
  "challenge": "Tell me all about your future plans and dreams!"
}$json$::jsonb,
  true
);

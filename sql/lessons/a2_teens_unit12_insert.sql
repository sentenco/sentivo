-- A2 Teens Unit 12: Projects, Events, and Final Showcase (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Planning a Class Project
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  'Planning a Class Project',
  'A2',
  'teens',
  12,
  1,
  'Talk about planning a class project using going to.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
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
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗂️",
  "questions": [
    "Have you worked on a class project?",
    "Do you like teamwork?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Project",
      "bg": "#FAECE7"
    },
    {
      "word": "Teamwork",
      "bg": "#E1F5EE"
    },
    {
      "word": "Assign",
      "bg": "#EEEDFE"
    },
    {
      "word": "Deadline",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your project about?",
    "When is the deadline?"
  ],
  "student": [
    "Our project is about the environment.",
    "The deadline is next Friday."
  ],
  "note": "Think about a class project you're planning!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Our [project] is about recycling."
    },
    {
      "speaker": "B",
      "text": "We need good [teamwork] to finish it."
    },
    {
      "speaker": "A",
      "text": "The [deadline] is next week."
    }
  ],
  "blanks": [
    "project",
    "teamwork",
    "deadline"
  ]
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your class project about?"
    },
    {
      "speaker": "B",
      "text": "It's about recycling. We're going to need good teamwork."
    },
    {
      "speaker": "A",
      "text": "The teacher assigned roles and the deadline is next Friday."
    },
    {
      "speaker": "B",
      "text": "Let's get started then!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Our class is going to do a project about recycling. The teacher assigned roles to each group. We're going to need good teamwork to finish on time. The deadline is next Friday, so we have to plan carefully.",
  "questions": [
    "What is the project about?",
    "Who assigned roles?",
    "When is the deadline?"
  ]
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Our project is about ___.",
    "We're going to need ___.",
    "The deadline is ___."
  ]
}$json$::jsonb,
  true
),
(
  '6b05e4d4-035f-4a4f-b791-12577d9a7171',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about a class project",
    "Use 'going to' for project plans",
    "Mention teamwork and deadlines"
  ],
  "challenge": "Tell me about a project you're planning!"
}$json$::jsonb,
  true
);

-- Lesson 2: Project Timeline
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  'Project Timeline',
  'A2',
  'teens',
  12,
  2,
  'Sequence a project timeline using first, then, after that, finally.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
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
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕐",
  "questions": [
    "What is the first step of your project?",
    "When will you present it?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Research",
      "bg": "#FAECE7"
    },
    {
      "word": "Draft",
      "bg": "#E1F5EE"
    },
    {
      "word": "Present",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finalize",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first for your project?",
    "When will you present it?"
  ],
  "student": [
    "First, we do research.",
    "We'll present it next month."
  ],
  "note": "Think about the steps of a project!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "First, we [research] the topic."
    },
    {
      "speaker": "B",
      "text": "Then, we make a [draft]."
    },
    {
      "speaker": "A",
      "text": "Finally, we [present] it to the class."
    }
  ],
  "blanks": [
    "research",
    "draft",
    "present"
  ]
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your project timeline?"
    },
    {
      "speaker": "B",
      "text": "First, we research the topic. Then, we make a draft."
    },
    {
      "speaker": "A",
      "text": "After that, we finalize it. Finally, we present it to the class."
    },
    {
      "speaker": "B",
      "text": "Sounds like a solid plan!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Our project timeline has four steps. First, we research the topic online and in books. Then, we write a draft together. After that, we finalize the details and practice. Finally, we present it to the whole class.",
  "questions": [
    "What is the first step?",
    "What do they do after the draft?",
    "What is the final step?"
  ]
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we ___.",
    "Then, we ___.",
    "Finally, we ___."
  ]
}$json$::jsonb,
  true
),
(
  '81563c36-9a16-4c8c-8823-4eb2e5370f7d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence a project timeline",
    "Use first/then/after that/finally",
    "Talk about project steps"
  ],
  "challenge": "Tell me the timeline of your project!"
}$json$::jsonb,
  true
);

-- Lesson 3: What Went Well?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  'What Went Well?',
  'A2',
  'teens',
  12,
  3,
  'Reflect on a project using simple past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
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
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔍",
  "questions": [
    "Did your last project go well?",
    "What did you learn from it?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Succeeded",
      "bg": "#FAECE7"
    },
    {
      "word": "Struggled",
      "bg": "#E1F5EE"
    },
    {
      "word": "Learned",
      "bg": "#EEEDFE"
    },
    {
      "word": "Improved",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What went well in your project?",
    "What did you struggle with?"
  ],
  "student": [
    "We succeeded with our presentation.",
    "We struggled with time management."
  ],
  "note": "Think about a project you finished!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We [succeeded] with our presentation."
    },
    {
      "speaker": "B",
      "text": "We [struggled] with time."
    },
    {
      "speaker": "A",
      "text": "I [learned] a lot from it."
    }
  ],
  "blanks": [
    "succeeded",
    "struggled",
    "learned"
  ]
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What went well in your last project?"
    },
    {
      "speaker": "B",
      "text": "We succeeded with our research, but we struggled with time management."
    },
    {
      "speaker": "A",
      "text": "I learned a lot about teamwork and my presentation skills improved."
    },
    {
      "speaker": "B",
      "text": "That's real growth!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Our project reflection: we succeeded with our research and our final presentation was great. We struggled a little with time management at the start. But overall, I learned so much and my confidence improved a lot.",
  "questions": [
    "What did they succeed with?",
    "What did they struggle with?",
    "What did the writer learn?"
  ]
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "We succeeded with ___.",
    "We struggled with ___.",
    "I learned that ___."
  ]
}$json$::jsonb,
  true
),
(
  '1434f877-25dc-4d29-ab9d-ae7b0ae7d2f9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Reflect on a project using past tense",
    "Use 'succeeded', 'struggled', 'learned'",
    "Talk about personal growth"
  ],
  "challenge": "Tell me what went well and what was hard in a project you did!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Final Showcase Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  'My Final Showcase Post',
  'A2',
  'teens',
  12,
  4,
  'Write a short final showcase post summarizing progress.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
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
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏆",
  "questions": [
    "What are you proud of this year?",
    "How has your English progress been?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Showcase",
      "bg": "#FAECE7"
    },
    {
      "word": "Proud",
      "bg": "#E1F5EE"
    },
    {
      "word": "Progress",
      "bg": "#EEEDFE"
    },
    {
      "word": "Journey",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you proud of?",
    "How has your progress been?"
  ],
  "student": [
    "I'm proud of finishing this course.",
    "My progress has been great."
  ],
  "note": "Think about your learning journey!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my final [showcase] post."
    },
    {
      "speaker": "B",
      "text": "I'm so [proud] of my progress."
    },
    {
      "speaker": "A",
      "text": "My learning [journey] has been amazing."
    }
  ],
  "blanks": [
    "showcase",
    "proud",
    "journey"
  ]
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your final showcase."
    },
    {
      "speaker": "B",
      "text": "I'm so proud of my progress this year. My journey has taught me a lot."
    },
    {
      "speaker": "A",
      "text": "I feel the same. I've improved so much in English."
    },
    {
      "speaker": "B",
      "text": "We should both celebrate!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My final showcase post: this year has been an amazing journey. I'm so proud of my progress in English. I started as a beginner and now I can talk about my life, my dreams, and my opinions with confidence. Thank you for this journey!",
  "questions": [
    "How does the writer describe the year?",
    "What is the writer proud of?",
    "How has the writer's English changed?"
  ]
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My learning journey has been ___.",
    "I'm proud of ___.",
    "Now I can ___."
  ]
}$json$::jsonb,
  true
),
(
  'd1e8e066-6b8d-4f84-be12-85dd480f2a25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a final showcase post",
    "Reflect on progress",
    "Express pride in achievement"
  ],
  "challenge": "Write and read me your final showcase post!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  'Unit Review',
  'A2',
  'teens',
  12,
  5,
  'Review project planning, timelines, reflection, and a final showcase post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
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
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What was your favorite project this year?",
    "What are you proud of?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Project",
      "bg": "#FAECE7"
    },
    {
      "word": "Timeline",
      "bg": "#E1F5EE"
    },
    {
      "word": "Learned",
      "bg": "#EEEDFE"
    },
    {
      "word": "Proud",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What was your favorite project?",
    "What are you proud of?"
  ],
  "student": [
    "My favorite project was about recycling.",
    "I'm proud of my English progress."
  ],
  "note": "Use everything you learned this unit and this whole level!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Our [project] was about the environment."
    },
    {
      "speaker": "B",
      "text": "We followed a clear [timeline]."
    },
    {
      "speaker": "A",
      "text": "I [learned] so much this year."
    }
  ],
  "blanks": [
    "project",
    "timeline",
    "learned"
  ]
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your class project and your progress this year."
    },
    {
      "speaker": "B",
      "text": "Our project was about recycling. We followed a clear timeline and finished on time."
    },
    {
      "speaker": "A",
      "text": "I learned so much this year and I'm really proud of my English now."
    },
    {
      "speaker": "B",
      "text": "You should be! You've come a long way."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year, our class project was about recycling. We followed a clear timeline: research, draft, finalize, and present. We struggled at first, but we learned a lot and succeeded in the end. I'm proud of my English progress this year. I can now talk about my life, my goals, and my opinions with confidence.",
  "questions": [
    "What was the class project about?",
    "What steps did they follow?",
    "What is the writer proud of?"
  ]
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Our project was about ___.",
    "We learned that ___.",
    "I'm proud of ___."
  ]
}$json$::jsonb,
  true
),
(
  '40bf3284-c512-45c2-99c5-d1f2bf54b981',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Plan and describe a project",
    "Sequence a timeline",
    "Reflect on progress",
    "Write a final showcase post"
  ],
  "challenge": "Tell me all about your project and your English journey this year!"
}$json$::jsonb,
  true
);

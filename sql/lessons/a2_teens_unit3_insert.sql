-- A2 Teens Unit 3: School and Study Skills (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects and Opinions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  'School Subjects and Opinions',
  'A2',
  'teens',
  3,
  1,
  'Give opinions about school subjects using because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
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
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📘",
  "questions": [
    "What is your favorite subject?",
    "Is math interesting or boring for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Interesting",
      "bg": "#FAECE7"
    },
    {
      "word": "Boring",
      "bg": "#E1F5EE"
    },
    {
      "word": "Challenging",
      "bg": "#EEEDFE"
    },
    {
      "word": "Useful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you think of history?",
    "Is it interesting or boring?"
  ],
  "student": [
    "I think history is interesting.",
    "Math is challenging for me, but useful."
  ],
  "note": "Think about your real opinions on subjects!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I think science is [interesting]."
    },
    {
      "speaker": "B",
      "text": "Math is [challenging] but useful."
    },
    {
      "speaker": "A",
      "text": "History can be [boring] sometimes."
    }
  ],
  "blanks": [
    "interesting",
    "challenging",
    "boring"
  ]
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you think of your subjects this year?"
    },
    {
      "speaker": "B",
      "text": "I think art is interesting because I can be creative."
    },
    {
      "speaker": "A",
      "text": "Math is challenging for me, but I know it's useful."
    },
    {
      "speaker": "B",
      "text": "I feel the same about science!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two students share opinions. Ali writes: I think biology is interesting because we learn about real life. Zara writes: I find history a bit boring, but I know it's useful for understanding the world.",
  "questions": [
    "What does Ali think of biology?",
    "What does Zara think of history?",
    "Why does Zara say history is useful?"
  ]
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I think ___ is ___.",
    "___ is challenging because ___.",
    "My favorite subject is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '71eca52d-037c-4de6-b56b-15806a9582f1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give opinions about subjects",
    "Use interesting/boring/challenging/useful",
    "Explain my opinion with because"
  ],
  "challenge": "Tell me your honest opinion about three subjects!"
}$json$::jsonb,
  true
);

-- Lesson 2: Homework Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f0e81531-e242-48d7-90f7-718adc657a74',
  'Homework Habits',
  'A2',
  'teens',
  3,
  2,
  'Describe study and homework habits using simple present and frequency words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
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
  'f0e81531-e242-48d7-90f7-718adc657a74',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📓",
  "questions": [
    "When do you usually do homework?",
    "Do you focus easily?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Usually",
      "bg": "#FAECE7"
    },
    {
      "word": "Sometimes",
      "bg": "#E1F5EE"
    },
    {
      "word": "Rarely",
      "bg": "#EEEDFE"
    },
    {
      "word": "Focus",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When do you usually do homework?",
    "Do you focus well?"
  ],
  "student": [
    "I usually do homework after dinner.",
    "I sometimes lose focus."
  ],
  "note": "Think about your real homework habits!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [usually] do homework after school."
    },
    {
      "speaker": "B",
      "text": "I [sometimes] study with music."
    },
    {
      "speaker": "A",
      "text": "I [rarely] leave homework until the last minute."
    }
  ],
  "blanks": [
    "usually",
    "sometimes",
    "rarely"
  ]
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "When do you usually do your homework?"
    },
    {
      "speaker": "B",
      "text": "I usually do it after dinner. Sometimes I lose focus though."
    },
    {
      "speaker": "A",
      "text": "I rarely wait until the last minute because it stresses me out."
    },
    {
      "speaker": "B",
      "text": "That's a smart habit!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A study blog post: I usually do my homework right after school, when my brain is still active. I sometimes take a short break first. I rarely study late at night because I can't focus well then.",
  "questions": [
    "When does the writer usually do homework?",
    "What does the writer sometimes do first?",
    "Why does the writer rarely study late?"
  ]
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually ___.",
    "I sometimes ___.",
    "I rarely ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'f0e81531-e242-48d7-90f7-718adc657a74',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use frequency words: usually, sometimes, rarely",
    "Describe my homework habits",
    "Talk about focus and studying"
  ],
  "challenge": "Tell me about your homework habits!"
}$json$::jsonb,
  true
);

-- Lesson 3: Better Ways to Study
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  'Better Ways to Study',
  'A2',
  'teens',
  3,
  3,
  'Compare study methods using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
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
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📇",
  "questions": [
    "What is your best study method?",
    "Is studying alone easier for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Effective",
      "bg": "#FAECE7"
    },
    {
      "word": "Flashcards",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quieter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Easier",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is studying with flashcards effective?",
    "Which is easier for you?"
  ],
  "student": [
    "Flashcards are more effective for me.",
    "Studying alone is easier than in a group."
  ],
  "note": "Compare two study methods!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Flashcards are [more effective] than just reading."
    },
    {
      "speaker": "B",
      "text": "The library is [quieter] than my house."
    },
    {
      "speaker": "A",
      "text": "Studying with a friend is [easier] for me."
    }
  ],
  "blanks": [
    "more effective",
    "quieter",
    "easier"
  ]
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your best study method?"
    },
    {
      "speaker": "B",
      "text": "Flashcards work better for me than just reading notes."
    },
    {
      "speaker": "A",
      "text": "The library is quieter than my house, so I focus better there."
    },
    {
      "speaker": "B",
      "text": "I should try that!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two students compare study methods. Leo says flashcards are more effective than rereading notes because they test his memory. Ana says studying at the library is easier than at home because it's quieter and has fewer distractions.",
  "questions": [
    "What does Leo say about flashcards?",
    "Where does Ana prefer to study?",
    "Why does Ana prefer the library?"
  ]
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is more effective than ___.",
    "___ is easier for me because ___.",
    "My best study method is ___."
  ]
}$json$::jsonb,
  true
),
(
  '3a50925c-d3b2-4ed6-a92f-37275b1f5776',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare study methods",
    "Use comparatives for studying",
    "Explain what works best for me"
  ],
  "challenge": "Tell me your best study method and why it works!"
}$json$::jsonb,
  true
);

-- Lesson 4: A School Success Story
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  'A School Success Story',
  'A2',
  'teens',
  3,
  4,
  'Tell a simple past story about a school achievement.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
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
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏅",
  "questions": [
    "Have you had a school success recently?",
    "Did you study hard for a test?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Studied",
      "bg": "#FAECE7"
    },
    {
      "word": "Passed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Improved",
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
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you study for?",
    "How did it go?"
  ],
  "student": [
    "I studied hard for my science test.",
    "I passed with a great score!"
  ],
  "note": "Think about a recent school success!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [studied] hard for my exam."
    },
    {
      "speaker": "B",
      "text": "I [passed] with a good grade."
    },
    {
      "speaker": "A",
      "text": "My English [improved] a lot this year."
    }
  ],
  "blanks": [
    "studied",
    "passed",
    "improved"
  ]
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a school success you had."
    },
    {
      "speaker": "B",
      "text": "I studied hard for my math test and passed with a great score."
    },
    {
      "speaker": "A",
      "text": "My English improved a lot this year because I practiced every day."
    },
    {
      "speaker": "B",
      "text": "You should be proud!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last month, I studied hard for my science exam every night. It was difficult, but I didn't give up. Finally, I passed with my best grade ever! My teacher said my hard work improved a lot. I felt very proud.",
  "questions": [
    "What did the writer study for?",
    "How did the writer feel about it being difficult?",
    "What was the result?"
  ]
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I studied hard for ___.",
    "I passed/improved because ___.",
    "I felt proud because ___."
  ]
}$json$::jsonb,
  true
),
(
  '83d9c660-7bde-4c46-b7c0-f1dece46861b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: studied, passed, improved",
    "Tell a school success story",
    "Say why I felt proud"
  ],
  "challenge": "Tell me about a school success you're proud of!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  'Unit Review',
  'A2',
  'teens',
  3,
  5,
  'Review subject opinions, homework habits, study methods, and a success story.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
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
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎓",
  "questions": [
    "What is your favorite subject?",
    "What is your best study habit?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Subject",
      "bg": "#FAECE7"
    },
    {
      "word": "Homework",
      "bg": "#E1F5EE"
    },
    {
      "word": "Effective",
      "bg": "#EEEDFE"
    },
    {
      "word": "Passed",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you think of your subjects?",
    "What is your best study method?"
  ],
  "student": [
    "I think art is interesting.",
    "Flashcards work best for me."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [subject] is science."
    },
    {
      "speaker": "B",
      "text": "I usually do [homework] after school."
    },
    {
      "speaker": "A",
      "text": "I [passed] my last exam with a great score."
    }
  ],
  "blanks": [
    "subject",
    "homework",
    "passed"
  ]
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about school this year."
    },
    {
      "speaker": "B",
      "text": "My favorite subject is science because it's interesting. I usually do homework after school."
    },
    {
      "speaker": "A",
      "text": "Flashcards are more effective for me than just reading."
    },
    {
      "speaker": "B",
      "text": "I studied hard and passed my last test with my best grade!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year, my favorite subject is science because it's interesting and useful. I usually do homework right after school. I found that flashcards are more effective than just reading my notes. Last month, I studied hard and passed my exam with my best grade ever!",
  "questions": [
    "What is the writer's favorite subject?",
    "When does the writer usually do homework?",
    "What happened last month?"
  ]
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite subject is ___ because ___.",
    "My best study method is ___.",
    "I felt proud when ___."
  ]
}$json$::jsonb,
  true
),
(
  'ca112f7f-3934-4796-ad8d-68e5c83b97e9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give subject opinions",
    "Describe homework habits",
    "Compare study methods",
    "Tell a success story"
  ],
  "challenge": "Tell me all about your school life and study habits!"
}$json$::jsonb,
  true
);
